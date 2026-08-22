import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUserRemove = forwardRef<SVGSVGElement, IconProps>(
  function IconUserRemove(
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
              d="M12.67 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.08 22c0-3.87 3.85-7 8.59-7q1.45 0 2.76.37"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 18q0 .48-.12.93-.14.61-.46 1.13a3.97 3.97 0 0 1-6.84 0A4 4 0 1 1 22.67 18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m19.7 16.94-2.11 2.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m17.61 16.96 2.12 2.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              opacity={duotone ? "0.4" : "1"}
              d="M21.76 21.5a.5.5 0 0 1-.5.5H4.08a.5.5 0 0 1-.5-.5c0-4.14 4.08-7.5 9.09-7.5q1.56 0 2.95.41a4 4 0 0 0-.37 4.65q.3.52.76.91a3.96 3.96 0 0 0 5.51-.17q.24.81.24 1.7"
              fill="currentColor"
            />
            <path
              d="M22.55 16.04a4 4 0 0 0-7.88 1.02 4 4 0 0 0 3.04 3.81q.58.15 1.18.11a3.98 3.98 0 0 0 3.66-4.94m-2.28 2.56a.75.75 0 0 1-1.06 0l-.55-.55-.53.53a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l.53-.53-.51-.5a.77.77 0 0 1 0-1.07.77.77 0 0 1 1.07 0l.5.51.53-.53a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.53.53.55.55c.29.29.29.77 0 1.06"
              fill="currentColor"
            />
            <path
              d="M12.67 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
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
              d="M12.67 14c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18a.5.5 0 0 0 .5-.5c0-4.14-4.08-7.5-9.09-7.5"
              fill="currentColor"
            />
            <path
              d="M17.52 5.8a5 5 0 0 0-1.31-2.33 5 5 0 0 0-3.27-1.45 5 5 0 0 0-3.8 1.45 4.96 4.96 0 0 0-.01 7.07c.66.66 1.47 1.1 2.34 1.3q.71.19 1.47.14a4.98 4.98 0 0 0 4.58-6.18M14.67 9a.94.94 0 0 1-1.32 0l-.69-.69-.66.66a.94.94 0 0 1-1.32 0 .93.93 0 0 1-.01-1.32l.66-.66-.64-.62a.97.97 0 0 1 0-1.34.97.97 0 0 1 1.34 0l.62.64.67-.67a.94.94 0 0 1 1.32 0c.36.36.36.96 0 1.32l-.66.66.69.7c.36.36.36.96 0 1.32"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUserRemove;
