import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCameraRotate = forwardRef<SVGSVGElement, IconProps>(
  function IconCameraRotate(
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
              d="M9.78 21h4.44c3.12 0 4.68 0 5.8-.74q.73-.47 1.23-1.2c.75-1.1.75-2.63.75-5.7 0-3.06 0-4.6-.75-5.7a4 4 0 0 0-1.23-1.2c-.72-.47-1.62-.64-3-.7a1.4 1.4 0 0 1-1.35-1.12A2.06 2.06 0 0 0 13.63 3h-3.26c-1 0-1.84.68-2.04 1.64a1.4 1.4 0 0 1-1.35 1.12c-1.38.06-2.28.23-3 .7q-.73.49-1.23 1.2C2 8.77 2 10.3 2 13.37s0 4.6.75 5.7q.49.73 1.23 1.2c1.12.74 2.68.74 5.8.74"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m14.52 10.68-.28-.28a3.17 3.17 0 1 0 .9 2.6m-.62-2.32L13 11m1.52-.32V9"
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
              opacity={duotone ? "0.4" : "1"}
              d="M9.78 21h4.44c3.12 0 4.68 0 5.8-.74q.73-.47 1.23-1.2c.75-1.1.75-2.63.75-5.7 0-3.06 0-4.6-.75-5.7a4 4 0 0 0-1.23-1.2c-.72-.47-1.62-.64-3-.7a1.4 1.4 0 0 1-1.35-1.12A2.06 2.06 0 0 0 13.63 3h-3.26c-1 0-1.84.68-2.04 1.64a1.4 1.4 0 0 1-1.35 1.12c-1.38.06-2.28.23-3 .7q-.73.49-1.23 1.2C2 8.77 2 10.3 2 13.37s0 4.6.75 5.7q.49.73 1.23 1.2c1.12.74 2.68.74 5.8.74"
              fill="currentColor"
            />
            <path
              d="M14.52 8.85c.41 0 .75.34.75.75v1.68c0 .35-.25.66-.6.73l-1.52.32a.75.75 0 0 1-.47-1.41 2.42 2.42 0 1 0 1.72 2.6.75.75 0 0 1 1.5.16 3.9 3.9 0 0 1-6.67 2.33 3.92 3.92 0 0 1 4.54-6.27V9.6c0-.41.34-.75.75-.75"
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
              d="M14.22 21H9.78c-3.12 0-4.68 0-5.8-.74a4 4 0 0 1-1.23-1.2C2 17.96 2 16.43 2 13.36c0-3.06 0-4.6.75-5.7a4 4 0 0 1 1.23-1.2c.72-.47 1.62-.64 3-.7a1.4 1.4 0 0 0 1.35-1.12A2.06 2.06 0 0 1 10.37 3h3.26c1 0 1.84.68 2.04 1.64.13.63.7 1.12 1.35 1.12 1.38.06 2.28.23 3 .7q.73.49 1.23 1.2c.75 1.1.75 2.64.75 5.7s0 4.6-.75 5.7a4 4 0 0 1-1.23 1.2c-1.12.74-2.68.74-5.8.74m1.05-11.4a.75.75 0 0 0-1.5 0v.14a3.92 3.92 0 1 0 2.12 3.94.75.75 0 0 0-1.49-.17 2.42 2.42 0 1 1-1.72-2.6.75.75 0 0 0 .47 1.42l1.52-.32c.35-.07.6-.38.6-.73z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCameraRotate;
