import {Fragment, useEffect, useState, type ElementType} from "react";
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
