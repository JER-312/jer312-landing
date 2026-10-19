import {Fragment, useEffect, useLayoutEffect, useState, type ElementType} from "react";
import {useInView} from "../../hooks/useInView.ts";

const LETTER_MS = 850; // matches .jer-split-letter in index.css
const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type Props = {
    text: string;
    as?: ElementType;
    className?: string;
    delay?: number; // ms before the first letter
    stagger?: number; // ms between letters
};

// Letters rise from below a per-word mask when scrolled into view. When the last
// letter lands, it re-renders as plain text, so the resting state (kerning,
// descenders, DOM) is exactly the static markup.
function SplitText({text, as: Tag = "span", className, delay = 0, stagger = 30}: Props) {
    const [ref, inView] = useInView<HTMLElement>();
    const [done, setDone] = useState(reduced);
    const words = text.split(" ");
    const count = text.replace(/ /g, "").length;

    useEffect(() => {
        if (!inView || done) return;
        const t = window.setTimeout(() => setDone(true), delay + (count - 1) * stagger + LETTER_MS + 50);
        return () => window.clearTimeout(t);
    }, [inView, done, delay, count, stagger]);

    // Split letters lose kerning (each is its own inline-block). Measure the kerned
    // advances on the sr-only copy and add the difference as a margin, so widths and
    // wrapping match the plain text and nothing jumps when it swaps back.
    useLayoutEffect(() => {
        const el = ref.current;
        if (done || !el) return;
        let live = true;
        const kern = () => {
            const node = el.firstElementChild?.firstChild;
            const letters = el.querySelectorAll<HTMLElement>(".jer-split-letter");
            if (!live || !node) return;
            const range = document.createRange();
            const xs: number[] = [];
            for (let c = 0; c < text.length; c++) {
                if (text[c] === " ") continue;
                range.setStart(node, c);
                range.setEnd(node, c + 1);
                xs.push(range.getBoundingClientRect().left);
            }
            const size = parseFloat(getComputedStyle(el).fontSize);
            letters.forEach((l) => (l.style.marginLeft = ""));
            const widths = [...letters].map((l) => l.getBoundingClientRect().width);
            letters.forEach((l, k) => {
                if (!l.previousElementSibling) return; // first letter of a word
                l.style.marginLeft = `${(xs[k] - xs[k - 1] - widths[k - 1]) / size}em`;
            });
        };
        kern();
        document.fonts.ready.then(kern);
        return () => {
            live = false;
        };
    }, [done, text, ref]);

    if (done) return <Tag ref={ref} className={className}>{text}</Tag>;

    let i = 0;
    return (
        <Tag ref={ref} className={`${className ?? ""} jer-split${inView ? " jer-in" : ""}`}>
            <span className="sr-only">{text}</span>
            <span aria-hidden="true">
                {words.map((word, w) => (
                    <Fragment key={w}>
                        {w > 0 && " "}
                        <span className="jer-split-word">
                            {[...word].map((ch, c) => (
                                <span key={c} className="jer-split-letter" style={{transitionDelay: `${delay + i++ * stagger}ms`}}>
                                    {ch}
                                </span>
                            ))}
                        </span>
                    </Fragment>
                ))}
            </span>
        </Tag>
    );
}

export default SplitText;
