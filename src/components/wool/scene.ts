import {BufferAttribute, BufferGeometry, OrthographicCamera, Points, Scene, ShaderMaterial, WebGLRenderer} from "three";

const vertexShader = /* glsl */ `
uniform float uTime, uProgress, uScale, uDpr, uPush, uRadius;
uniform vec2 uHalf, uMouse;
attribute vec2 aStart, aTarget;
attribute vec4 aSeed; // x: delay, y: phase, z: size, w: 1 = logo fiber, 0 = loose fiber
varying float vAngle, vCurl, vAlpha;
varying vec3 vColor;

void main() {
    float t = uTime;
    float p = smoothstep(aSeed.x * 0.45, aSeed.x * 0.45 + 0.55, uProgress) * aSeed.w;
    p = p * p * (3.0 - 2.0 * p);
    float breathe = 1.0 + 0.015 * sin(t * 0.9);
    vec2 pos = mix(aStart * uHalf, aTarget * uScale * breathe, p);

    // slow wandering drift, nearly still once the fiber settles into the logo
    float ph = aSeed.y * 6.2831;
    vec2 drift = vec2(sin(t * 0.21 + ph + pos.y * 0.004), cos(t * 0.17 + ph * 1.7 + pos.x * 0.004));
    drift += 0.5 * vec2(sin(t * 0.43 + ph * 2.3), cos(t * 0.37 + ph * 3.1));
    pos += drift * mix(38.0, 1.2, p);

    // gentle push away from the pointer
    vec2 d = pos - uMouse;
    float dist = length(d) + 0.001;
    pos += d / dist * uPush * uRadius * 0.55 * exp(-dist * dist / (uRadius * uRadius));

    vAngle = ph + sin(t * 0.3 + ph) * 0.4;
    vCurl = (fract(aSeed.y * 7.13) - 0.5) * 1.4;
    vAlpha = mix(0.55, 0.95, p) * (0.6 + 0.4 * fract(aSeed.y * 3.7));
    vColor = mix(vec3(1.0, 0.975, 0.93), vec3(0.86, 0.81, 0.73), fract(aSeed.y * 5.3));
    gl_PointSize = aSeed.z * uDpr;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 0.0, 1.0);
}`;

// each sprite is a short, slightly curved strand with a faint halo
const fragmentShader = /* glsl */ `
varying float vAngle, vCurl, vAlpha;
varying vec3 vColor;

void main() {
    vec2 q = gl_PointCoord * 2.0 - 1.0;
    float c = cos(vAngle), s = sin(vAngle);
    q = mat2(c, -s, s, c) * q;
    float d = abs(q.y - vCurl * (q.x * q.x - 0.35));
    float strand = (1.0 - smoothstep(0.04, 0.2, d)) * (1.0 - smoothstep(0.55, 0.95, abs(q.x)));
    float halo = (1.0 - smoothstep(0.0, 1.0, length(q))) * 0.12;
    float a = max(strand, halo) * vAlpha;
    if (a < 0.01) discard;
    gl_FragColor = vec4(vColor, a);
}`;

// Draw the mark + wordmark on an offscreen canvas, return opaque pixels in [-1, 1].
async function sampleLogo(logoUrl: string): Promise<Float32Array> {
    const S = 400;
    const img = new Image();
    img.src = logoUrl;
    await Promise.all([img.decode(), document.fonts.load("700 80px Gilmer")]);
    const ctx = document.createElement("canvas").getContext("2d", {willReadFrequently: true})!;
    ctx.canvas.width = ctx.canvas.height = S;
    ctx.drawImage(img, S / 2 - 95, 10, 190, 230);
    ctx.font = "700 92px Gilmer, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("JER312", S / 2, 370);
    const data = ctx.getImageData(0, 0, S, S).data;
    const pts: number[] = [];
    for (let i = 0; i < S * S; i++) {
        if (data[i * 4 + 3] > 128) pts.push((i % S) / (S / 2) - 1, 1 - Math.floor(i / S) / (S / 2));
    }
    return new Float32Array(pts);
}

export default function createWool(el: HTMLElement, logoUrl: string): () => void {
    const mobile = matchMedia("(max-width: 1023px)").matches;
    const count = mobile ? 2500 : 6000;
    // probe first: a failed WebGLRenderer logs console errors
    const probe = document.createElement("canvas").getContext("webgl2");
    if (!probe) throw new Error("WebGL2 unavailable");
    probe.getExtension("WEBGL_lose_context")?.loseContext();
    const renderer = new WebGLRenderer({alpha: true, antialias: false, powerPreference: "low-power"});
    renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.5 : 2));
    renderer.domElement.style.cssText = "position:absolute;inset:0;width:100%;height:100%";
    el.appendChild(renderer.domElement);

    const scene = new Scene();
    const camera = new OrthographicCamera(-1, 1, 1, -1, -1, 1);
    const geometry = new BufferGeometry();
    const uniforms = {
        uTime: {value: 0}, uProgress: {value: 0}, uScale: {value: 1}, uDpr: {value: renderer.getPixelRatio()},
        uPush: {value: 0}, uRadius: {value: mobile ? 70 : 110}, uHalf: {value: [1, 1]}, uMouse: {value: [0, 0]},
    };
    const material = new ShaderMaterial({uniforms, vertexShader, fragmentShader, transparent: true, depthWrite: false});
    const points = new Points(geometry, material);
    points.frustumCulled = false;
    scene.add(points);

    let disposed = false;
    sampleLogo(logoUrl).then((logo) => {
        if (disposed) return;
        const start = new Float32Array(count * 2), target = new Float32Array(count * 2), seed = new Float32Array(count * 4);
        const n = logo.length / 2, jitter = 1 / 200;
        for (let i = 0; i < count; i++) {
            const k = Math.floor(Math.random() * n) * 2;
            start.set([Math.random() * 2.2 - 1.1, Math.random() * 2.2 - 1.1], i * 2);
            target.set([logo[k] + Math.random() * jitter, logo[k + 1] - Math.random() * jitter], i * 2);
            seed.set([Math.random(), Math.random(), (mobile ? 9 : 11) + Math.random() * 9, Math.random() < 0.88 ? 1 : 0], i * 4);
        }
        geometry.setAttribute("position", new BufferAttribute(new Float32Array(count * 3), 3));
        geometry.setAttribute("aStart", new BufferAttribute(start, 2));
        geometry.setAttribute("aTarget", new BufferAttribute(target, 2));
        geometry.setAttribute("aSeed", new BufferAttribute(seed, 4));
    });

    let w = 1, h = 1;
    const resize = () => {
        w = el.clientWidth || 1;
        h = el.clientHeight || 1;
        renderer.setSize(w, h, false);
        Object.assign(camera, {left: -w / 2, right: w / 2, top: h / 2, bottom: -h / 2});
        camera.updateProjectionMatrix();
        uniforms.uHalf.value = [w / 2, h / 2];
        uniforms.uScale.value = Math.min(w * 0.4, h * 0.36);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();

    // pointer / touch: eased toward its target so fibers drift away and back softly
    const mouse = {x: 0, y: 0, push: 0, active: false};
    const onMove = (x: number, y: number) => {
        const r = el.getBoundingClientRect();
        mouse.x = x - r.left - r.width / 2;
        mouse.y = r.height / 2 - (y - r.top);
        mouse.active = true;
    };
    const onPointer = (e: PointerEvent) => e.pointerType === "mouse" && onMove(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => onMove(e.touches[0].clientX, e.touches[0].clientY);
    const onLeave = () => (mouse.active = false);
    el.addEventListener("pointermove", onPointer);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("touchstart", onTouch, {passive: true});
    el.addEventListener("touchmove", onTouch, {passive: true});
    el.addEventListener("touchend", onLeave);

    let last = performance.now();
    const frame = (now: number) => {
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        const r = el.getBoundingClientRect(), vh = innerHeight;
        const goal = Math.min(Math.max((vh - r.top) / (vh * 0.45 + r.height * 0.5), 0), 1);
        const u = uniforms;
        u.uTime.value += dt;
        u.uProgress.value += (goal - u.uProgress.value) * (1 - Math.exp(-dt * 1.6));
        const m = u.uMouse.value, ease = 1 - Math.exp(-dt * 5);
        u.uMouse.value = [m[0] + (mouse.x - m[0]) * ease, m[1] + (mouse.y - m[1]) * ease];
        u.uPush.value += ((mouse.active ? 1 : 0) - u.uPush.value) * (1 - Math.exp(-dt * 2.5));
        renderer.render(scene, camera);
    };

    // render only while on screen and the tab is visible
    let visible = false;
    const sync = () => {
        const run = visible && !document.hidden && !disposed;
        if (run) last = performance.now();
        renderer.setAnimationLoop(run ? frame : null);
    };
    const io = new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        sync();
    });
    io.observe(el);
    document.addEventListener("visibilitychange", sync);

    return () => {
        disposed = true;
        sync();
        io.disconnect();
        ro.disconnect();
        document.removeEventListener("visibilitychange", sync);
        el.removeEventListener("pointermove", onPointer);
        el.removeEventListener("pointerleave", onLeave);
        el.removeEventListener("touchstart", onTouch);
        el.removeEventListener("touchmove", onTouch);
        el.removeEventListener("touchend", onLeave);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
    };
}
