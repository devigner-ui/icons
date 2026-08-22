import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLinkBroken = forwardRef<SVGSVGElement, IconProps>(
  function IconLinkBroken(
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
              d="m2 8 6 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m6 4 2 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m11 6.56 3.7-3.62c1.46-1.43 4.06-1.2 5.81.52 1.76 1.71 2 4.26.53 5.7L18.14 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15 15.59 10.97 20c-1.4 1.53-3.88 1.28-5.55-.55s-1.9-4.55-.5-6.07L6.16 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M19.99 4c-1.55-1.53-3.68-1.59-4.77-.53l-3.7 3.63a.75.75 0 0 1-1.04-1.07l3.7-3.63c1.83-1.8 4.9-1.4 6.86.52 1.95 1.91 2.38 4.96.53 6.77l-2.9 2.85a.75.75 0 0 1-1.06-1.08l2.9-2.84C21.6 7.57 21.55 5.5 20 3.99"
                fill="currentColor"
              />
              <path
                d="M6.73 12.5a.75.75 0 0 0-1.11-1l-1.26 1.37c-1.73 1.9-1.35 5.06.5 7.09 1.87 2.04 4.87 2.5 6.66.55l4.03-4.42a.75.75 0 0 0-1.1-1l-4.04 4.4c-1 1.1-2.96 1.07-4.44-.55s-1.56-3.9-.5-5.05z"
                fill="currentColor"
              />
            </g>
            <path
              d="M6.62 3.58a.75.75 0 1 0-1.24.84l2 3a.75.75 0 1 0 1.24-.84z"
              fill="currentColor"
            />
            <path
              d="M2.24 7.29a.75.75 0 0 0-.48 1.42l6 2a.75.75 0 0 0 .48-1.42z"
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
              d="M19.99 4c-1.55-1.53-3.68-1.59-4.77-.53l-3.7 3.63a.75.75 0 1 1-1.04-1.07l3.7-3.63c1.83-1.8 4.9-1.4 6.86.52 1.95 1.91 2.38 4.96.53 6.77l-2.9 2.85a.75.75 0 0 1-1.06-1.08l2.9-2.84C21.6 7.57 21.55 5.5 20 3.99"
              fill="currentColor"
            />
            <path
              d="M6.62 3.58a.75.75 0 0 0-1.24.84l2 3a.75.75 0 0 0 1.24-.84z"
              fill="currentColor"
            />
            <path
              d="M2.24 7.29a.75.75 0 1 0-.48 1.42l6 2a.75.75 0 1 0 .48-1.42z"
              fill="currentColor"
            />
            <path
              d="M6.73 12.5a.75.75 0 0 0-1.11-1l-1.26 1.37c-1.73 1.9-1.35 5.06.5 7.09 1.87 2.04 4.87 2.5 6.66.55l4.03-4.42a.75.75 0 0 0-1.1-1l-4.04 4.4c-1 1.1-2.96 1.07-4.44-.55s-1.56-3.9-.5-5.05z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLinkBroken;
