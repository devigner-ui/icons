import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUserSearch = forwardRef<SVGSVGElement, IconProps>(
  function IconUserSearch(
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
              d="M4.08 22c0-3.87 3.85-7 8.59-7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.87 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m22.67 22-1-1"
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
              d="M12.67 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 14.5c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18a.5.5 0 0 0 .5-.5c0-4.14-4.08-7.5-9.09-7.5"
              fill="currentColor"
            />
            <path
              d="m23.44 20.68-.76-.76q.61-.92.63-2.09a3.82 3.82 0 1 0-1.73 3.19l.76.76q.24.23.55.23t.55-.23a.77.77 0 0 0 0-1.1"
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
              d="m17.39 10.35-.96-.96a4.77 4.77 0 1 0-1.37 1.36l.96.96q.3.28.68.28.4 0 .68-.28a.96.96 0 0 0 .01-1.36"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUserSearch;
