import type {ComponentPropsWithoutRef, ElementType} from "react";
import {useInView} from "../../hooks/useInView.ts";

type Props = ComponentPropsWithoutRef<"div"> & {
    as?: ElementType;
    delay?: number; // ms
    src?: string; // for as="img"
    alt?: string;
};

// Renders `as` itself (no extra wrapper) and fades/slides it up when in view.
function Reveal({as: Tag = "div", delay = 0, className, style, ...rest}: Props) {
    const [ref, inView] = useInView<HTMLElement>();
    return (
        <Tag
            ref={ref}
            className={`${className ?? ""} jer-reveal${inView ? " jer-in" : ""}`}
            style={delay ? {...style, transitionDelay: `${delay}ms`} : style}
            {...rest}
        />
    );
}

export default Reveal;
