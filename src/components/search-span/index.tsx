import { DetailedHTMLProps, HTMLAttributes } from "react";
import style from "./index.module.css";
export interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  text: string;
  search?: string;
}

/** Renders the given "text" with any matches of "search" in bold */
export function SearchSpan({ text, search, ...props }: Props) {
  let parts = search ? text.split(new RegExp(`(${search})`, "i")) : [text];
  return (
    <span {...props}>
      {parts.map((part, i) =>
        part.toLowerCase() === search?.toLowerCase() ? (
          <span key={i} className={style.highlight}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
}
