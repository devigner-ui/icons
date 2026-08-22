import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPaperclip = forwardRef<SVGSVGElement, IconProps>(
  function IconPaperclip(
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
              d="m7.92 17.8 7.89-7.55c.95-.9.95-2.37 0-3.28M3 10.03 9.4 3.9a7 7 0 0 1 9.61 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m19.01 13.1.52.54zm-7.95 7.6-.52-.53zm-6.52-6.23.52.54zm7.84-7.5-.52-.54zm7.15-3.6a.75.75 0 1 0-1.04 1.08zm-1.04 9.19-7.95 7.6 1.04 1.09 7.95-7.6zM5.06 15l7.84-7.5-1.04-1.08-7.83 7.5zm11.27-8.58a3.25 3.25 0 0 0-4.47 0L12.9 7.5a1.75 1.75 0 0 1 2.39 0zM5.06 20.17a3.53 3.53 0 0 1 0-5.16l-1.03-1.08a5.03 5.03 0 0 0 0 7.32zm5.48 0a4 4 0 0 1-5.48 0l-1.03 1.08c2.09 2 5.46 2 7.55 0zM18.5 4.45a5.56 5.56 0 0 1 0 8.1l1.04 1.1a7.06 7.06 0 0 0 0-10.29z"
              fill="currentColor"
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
              d="M8.89 3.36a7.76 7.76 0 0 1 10.64 0 .75.75 0 0 1-1.04 1.09 6.26 6.26 0 0 0-8.57 0l-6.4 6.13a.75.75 0 1 1-1.04-1.09zm6.38 3.1a.75.75 0 0 1 1.06-.03 3 3 0 0 1 0 4.37l-7.9 7.55a.75.75 0 0 1-1.03-1.08l7.89-7.56a1.5 1.5 0 0 0 0-2.2.75.75 0 0 1-.02-1.06"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.5 4.45a5.56 5.56 0 0 1 0 8.1l-7.96 7.62a4 4 0 0 1-5.48 0 3.53 3.53 0 0 1 0-5.16l7.84-7.5a1.75 1.75 0 0 1 2.39 0 .75.75 0 0 1 1.02-1.1 3.25 3.25 0 0 0-4.45.02l-7.84 7.5a5.03 5.03 0 0 0 0 7.32c2.1 2 5.47 2 7.56 0l7.95-7.6a7.06 7.06 0 0 0 .01-10.27.75.75 0 0 1-1.05 1.07"
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
              d="m7.92 17.8 7.89-7.55c.95-.9.95-2.37 0-3.28a2.5 2.5 0 0 0-3.43 0l-7.84 7.5a4.3 4.3 0 0 0 0 6.24 4.76 4.76 0 0 0 6.52 0l7.95-7.61a6.3 6.3 0 0 0 0-9.2 7 7 0 0 0-9.6 0L3 10.03"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              stroke="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPaperclip;
