import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHarmonyOne = forwardRef<SVGSVGElement, IconProps>(
  function IconHarmonyOne(
    { className, variant = "Outline", strokeWidth = "1.5", ...rest },
    ref,
  ) {
    /* The four drawings are two booleans: filled or stroked, and whether the
     secondary shapes drop to half tone. */
    const fill = variant === "Bold" || variant === "Bulk";
    const duotone = variant === "TwoTone" || variant === "Bulk";

    /* Decorative by default: an icon sitting beside its own text label is read
     out twice otherwise. Naming it with aria-label or aria-labelledby promotes
     it to an image instead. */
    const labelled =
      rest["aria-label"] != null || rest["aria-labelledby"] != null;
    const a11y: SVGProps<SVGSVGElement> = labelled
      ? { role: "img" }
      : { "aria-hidden": true };

    return (
      <>
        {!fill ? (
          <svg
            ref={ref}
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            {...a11y}
            {...rest}
          >
            <path
              d="M22.67 5.74c0 1.7-.84 3.3-2.28 4.2-1.3.82-3.18 1.65-5.72 1.94V5.74A3.75 3.75 0 0 1 18.41 2h.52a3.75 3.75 0 0 1 3.74 3.74"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 8v10.26A3.75 3.75 0 0 1 18.93 22h-.52a3.75 3.75 0 0 1-3.74-3.74v-6.38c5.58-.65 8-3.88 8-3.88"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
            <path
              d="M2.67 18.26c0-1.7.84-3.3 2.28-4.2 1.3-.82 3.18-1.65 5.72-1.94v6.14A3.75 3.75 0 0 1 6.93 22h-.52a3.75 3.75 0 0 1-3.74-3.74"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.67 16V5.74A3.75 3.75 0 0 1 6.41 2h.52a3.75 3.75 0 0 1 3.74 3.74v6.38c-5.58.65-8 3.88-8 3.88"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
            <path
              d="M10.67 12.1q.94-.1 2-.1t2-.12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
          </svg>
        ) : duotone ? (
          <svg
            ref={ref}
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            {...a11y}
            {...rest}
          >
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M24.67 0h-24v24h24z"
              fill="none"
            />
            <path
              d="M22.67 5.74v12.52A3.75 3.75 0 0 1 18.93 22h-.52a3.75 3.75 0 0 1-3.74-3.74v-6.38q.53-.06 1.01-.16a13 13 0 0 0 4.71-1.78 5 5 0 0 0 2.28-4.2"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 5.74c0 1.7-.84 3.3-2.28 4.2a13 13 0 0 1-4.71 1.78q-.48.1-1.01.16v.75c-1.19.15-2.46.07-3.93.22l-.07.01v5.4A3.75 3.75 0 0 1 6.93 22h-.52a3.75 3.75 0 0 1-3.72-4.02c.08-1.6.9-3.07 2.26-3.92a13 13 0 0 1 4.7-1.78q.49-.1 1.02-.16v-.77c1.56-.14 2.75-.06 3.91-.21l.09-.01V5.74A3.75 3.75 0 0 1 18.41 2h.52a3.75 3.75 0 0 1 3.74 3.74"
              fill="currentColor"
            />
            <path
              d="M10.67 5.74v6.38q-.53.06-1.02.16a13 13 0 0 0-4.7 1.78 4.9 4.9 0 0 0-2.26 3.92l-.02.02V5.74A3.75 3.75 0 0 1 6.41 2h.52a3.75 3.75 0 0 1 3.74 3.74"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            ref={ref}
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            {...a11y}
            {...rest}
          >
            <path
              d="M22.67 5.74v12.52A3.75 3.75 0 0 1 18.93 22h-.52a3.75 3.75 0 0 1-3.74-3.74v-6.38q.53-.06 1.01-.16a13 13 0 0 0 4.71-1.78 5 5 0 0 0 2.28-4.2"
              fill="currentColor"
            />
            <path
              d="M22.67 5.74c0 1.7-.84 3.3-2.28 4.2a13 13 0 0 1-4.71 1.78q-.48.1-1.01.16v.75c-1.19.15-2.46.07-3.93.22l-.07.01v5.4A3.75 3.75 0 0 1 6.93 22h-.52a3.75 3.75 0 0 1-3.72-4.02c.08-1.6.9-3.07 2.26-3.92a13 13 0 0 1 4.7-1.78q.49-.1 1.02-.16v-.77c1.56-.14 2.75-.06 3.91-.21l.09-.01V5.74A3.75 3.75 0 0 1 18.41 2h.52a3.75 3.75 0 0 1 3.74 3.74"
              fill="currentColor"
            />
            <path
              d="M10.67 5.74v6.38q-.53.06-1.02.16a13 13 0 0 0-4.7 1.78 4.9 4.9 0 0 0-2.26 3.92l-.02.02V5.74A3.75 3.75 0 0 1 6.41 2h.52a3.75 3.75 0 0 1 3.74 3.74"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHarmonyOne;
