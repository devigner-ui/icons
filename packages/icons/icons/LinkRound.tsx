import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLinkRound = forwardRef<SVGSVGElement, IconProps>(
  function IconLinkRound(
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
              opacity={duotone ? "0.4" : "1"}
              d="M14 9h-2a6 6 0 0 0 0 12h4a6 6 0 0 0 4.47-10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M10 15h2a6 6 0 0 0 0-12H8a6 6 0 0 0-4.47 10"
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
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 2.25A6.75 6.75 0 0 0 2.97 13.5a.75.75 0 0 0 1.12-1A5.25 5.25 0 0 1 8 3.75h4a5.25 5.25 0 1 1 0 10.5h-2a.75.75 0 0 0 0 1.5h2a6.75 6.75 0 0 0 0-13.5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.75 15c0-2.9 2.35-5.25 5.25-5.25h2a.75.75 0 0 0 0-1.5h-2a6.75 6.75 0 0 0 0 13.5h4a6.75 6.75 0 0 0 5.03-11.25.75.75 0 0 0-1.12 1A5.25 5.25 0 0 1 16 20.25h-4A5.25 5.25 0 0 1 6.75 15"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.25 9A6.75 6.75 0 0 1 8 2.25h4a6.75 6.75 0 0 1 0 13.5h-2a.75.75 0 0 1 0-1.5h2a5.25 5.25 0 1 0 0-10.5H8a5.25 5.25 0 0 0-3.91 8.75.75.75 0 1 1-1.12 1A6.7 6.7 0 0 1 1.25 9M12 9.75a5.25 5.25 0 0 0 0 10.5h4a5.25 5.25 0 0 0 3.91-8.75.75.75 0 1 1 1.12-1A6.75 6.75 0 0 1 16 21.75h-4a6.75 6.75 0 0 1 0-13.5h2a.75.75 0 0 1 0 1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLinkRound;
