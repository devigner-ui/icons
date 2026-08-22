import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVideoFrameCut = forwardRef<SVGSVGElement, IconProps>(
  function IconVideoFrameCut(
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
              d="M14.5 3c2.8.02 4.32.17 5.33 1.17C21 5.34 21 7.23 21 11v2c0 3.77 0 5.66-1.17 6.83-1 1-2.54 1.15-5.33 1.17m-5 0c-2.8-.02-4.32-.17-5.33-1.17C3 18.66 3 16.77 3 13v-2c0-3.77 0-5.66 1.17-6.83 1-1 2.54-1.15 5.33-1.17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 2v20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray="3 3"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17 4v16M7 4v16M3.5 8.5H7m10 0h3.5m-3.5 7h3.5m-17 0H7"
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
              opacity={duotone ? "0.4" : "1"}
              d="M9.5 3h5q.97 0 1.75.05v17.9q-.78.04-1.75.05h-5q-.97 0-1.75-.05V3.05Q8.53 3 9.5 3"
              fill="currentColor"
            />
            <path
              d="M12 1.25c.41 0 .75.34.75.75v1.67a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M11.25 22v-1.67a.75.75 0 0 1 1.5 0V22a.75.75 0 0 1-1.5 0"
              fill="currentColor"
            />
            <path
              d="M12.75 7a.75.75 0 0 0-1.5 0v3.33a.75.75 0 0 0 1.5 0z"
              fill="currentColor"
            />
            <path
              d="M12.75 13.67a.75.75 0 0 0-1.5 0V17a.75.75 0 0 0 1.5 0z"
              fill="currentColor"
            />
            <path
              d="M6.25 3.2c-.9.16-1.56.45-2.08.97-.77.77-1.03 1.85-1.12 3.58h3.2z"
              fill="currentColor"
            />
            <path d="M3 9.25v5.5h3.25v-5.5z" fill="currentColor" />
            <path
              d="M4.17 19.83c-.77-.77-1.03-1.85-1.12-3.58h3.2v4.55a3.7 3.7 0 0 1-2.08-.97"
              fill="currentColor"
            />
            <path
              d="M17.75 7.75V3.2c.9.16 1.56.45 2.08.97.77.77 1.03 1.85 1.12 3.58z"
              fill="currentColor"
            />
            <path d="M21 9.25h-3.25v5.5h3.24L21 13z" fill="currentColor" />
            <path
              d="M17.75 16.25h3.2c-.09 1.73-.35 2.8-1.12 3.58-.52.52-1.18.8-2.08.97z"
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
              d="M12.75 2a.75.75 0 0 0-1.5 0v1H9.5q-.97 0-1.75.05v17.9q.78.04 1.75.05h1.75v1a.75.75 0 0 0 1.5 0v-1h1.75q.97 0 1.75-.05V3.05Q15.47 3 14.5 3h-1.75zm0 19v-.67a.75.75 0 0 0-1.5 0V21zm0-18v.67a.75.75 0 0 1-1.5 0V3zm0 4a.75.75 0 0 0-1.5 0v3.33a.75.75 0 0 0 1.5 0zm0 6.67a.75.75 0 0 0-1.5 0V17a.75.75 0 0 0 1.5 0zM6.25 3.2c-.9.16-1.56.45-2.08.97-.77.77-1.03 1.85-1.12 3.58h3.2zM3.01 9.25 3 11v3.75h3.25v-5.5zm1.16 10.58c-.77-.77-1.03-1.85-1.12-3.58h3.2v4.55a3.7 3.7 0 0 1-2.08-.97M17.75 7.75V3.2c.9.16 1.56.45 2.08.97.77.77 1.03 1.85 1.12 3.58zm3.24 1.5h-3.24v5.5h3.24L21 13V9.25m-3.24 7h3.2c-.09 1.73-.35 2.8-1.12 3.58-.52.52-1.18.8-2.08.97z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVideoFrameCut;
