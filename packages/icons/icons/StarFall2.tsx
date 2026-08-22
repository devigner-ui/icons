import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStarFall2 = forwardRef<SVGSVGElement, IconProps>(
  function IconStarFall2(
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
              d="M11.58 4.78C12.28 3 12.62 2.12 13.35 2s1.35.63 2.6 2.11l.32.38c.36.42.53.63.78.75.24.12.51.14 1.07.17l.5.03c1.96.12 2.94.17 3.28.81s-.2 1.45-1.23 3.05l-.28.42c-.3.45-.44.68-.48.94s.03.52.18 1.04l.13.48c.51 1.84.77 2.76.25 3.26-.51.5-1.46.26-3.36-.23l-.49-.13c-.54-.14-.8-.21-1.07-.17s-.5.19-.97.48l-.42.26c-1.64 1.02-2.46 1.54-3.12 1.2-.65-.32-.72-1.27-.84-3.17l-.03-.49c-.04-.54-.06-.81-.18-1.04a3 3 0 0 0-.78-.75l-.39-.32c-1.53-1.2-2.29-1.8-2.18-2.52.11-.7 1.02-1.04 2.84-1.72l.47-.18c.52-.2.78-.3.96-.48.2-.18.3-.43.49-.94z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.6 8.55C3.48 10.7 1.1 14.77 2.33 22c1.1-3.01 4.38-5.43 8.06-6.59"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
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
              d="M11.58 4.78C12.28 3 12.62 2.12 13.35 2s1.35.63 2.6 2.11l.32.38c.36.42.53.63.78.75.24.12.51.14 1.07.17l.5.03c1.96.12 2.94.17 3.28.81s-.2 1.45-1.23 3.05l-.28.42c-.3.45-.44.68-.48.94s.03.52.18 1.04l.13.48c.51 1.84.77 2.76.25 3.26-.51.5-1.46.26-3.36-.23l-.49-.13c-.54-.14-.8-.21-1.07-.17s-.5.19-.97.48l-.42.26c-1.64 1.02-2.46 1.54-3.12 1.2-.65-.32-.72-1.27-.84-3.17l-.03-.49c-.04-.54-.06-.81-.18-1.04a3 3 0 0 0-.78-.75l-.39-.32c-1.53-1.2-2.29-1.8-2.18-2.52.11-.7 1.02-1.04 2.84-1.72l.47-.18c.52-.2.78-.3.96-.48.2-.18.3-.43.49-.94z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M5.31 9.6C2.87 11.91 1.28 15.8 2.33 22c.94-2.6 3.53-4.76 6.58-6.05-.1-.59-.15-1.31-.2-2.08l-.04-.6-.03-.42-.36-.29-.47-.37c-.7-.55-1.34-1.07-1.79-1.54a4 4 0 0 1-.71-1.06"
                fill="currentColor"
              />
              <path d="m10.35 15.42-.02-.11.06.1z" fill="currentColor" />
            </g>
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
              d="M11.58 4.78C12.28 3 12.62 2.12 13.35 2s1.35.63 2.6 2.11l.32.38c.36.42.53.63.78.75.24.12.51.14 1.07.17l.5.03c1.96.12 2.94.17 3.28.81s-.2 1.45-1.23 3.05l-.28.42c-.3.45-.44.68-.48.94s.03.52.18 1.04l.13.48c.51 1.84.77 2.76.25 3.26-.51.5-1.46.26-3.36-.23l-.49-.13c-.54-.14-.8-.21-1.07-.17s-.5.19-.97.48l-.42.26c-1.64 1.02-2.46 1.54-3.12 1.2-.65-.32-.72-1.27-.84-3.17l-.03-.49c-.04-.54-.06-.81-.18-1.04a3 3 0 0 0-.78-.75l-.39-.32c-1.53-1.2-2.29-1.8-2.18-2.52.11-.7 1.02-1.04 2.84-1.72l.47-.18c.52-.2.78-.3.96-.48.2-.18.3-.43.49-.94z"
              fill="currentColor"
            />
            <path
              d="M5.31 9.6C2.87 11.91 1.28 15.8 2.33 22c.94-2.6 3.53-4.76 6.58-6.05-.1-.59-.15-1.31-.2-2.08l-.04-.6-.03-.42-.36-.29-.47-.37c-.7-.55-1.34-1.07-1.79-1.54a4 4 0 0 1-.71-1.06"
              fill="currentColor"
            />
            <path d="m10.35 15.42-.02-.11.06.1z" fill="currentColor" />
          </svg>
        )}
      </>
    );
  },
);

export default IconStarFall2;
