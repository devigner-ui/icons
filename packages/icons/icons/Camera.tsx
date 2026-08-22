import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCamera = forwardRef<SVGSVGElement, IconProps>(function IconCamera(
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
          <circle
            cx="12"
            cy="13"
            r="3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.78 21h4.44c3.12 0 4.68 0 5.8-.74q.73-.47 1.23-1.2c.75-1.1.75-2.63.75-5.7 0-3.06 0-4.6-.75-5.7a4 4 0 0 0-1.23-1.2c-.72-.47-1.62-.64-3-.7a1.4 1.4 0 0 1-1.35-1.12A2.06 2.06 0 0 0 13.63 3h-3.26c-1 0-1.84.68-2.04 1.64a1.4 1.4 0 0 1-1.35 1.12c-1.38.06-2.28.23-3 .7q-.73.49-1.23 1.2C2 8.77 2 10.3 2 13.37s0 4.6.75 5.7q.49.73 1.23 1.2c1.12.74 2.68.74 5.8.74"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M19 10h-1"
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
            d="M9.78 21h4.44c3.12 0 4.68 0 5.8-.74q.73-.47 1.23-1.2c.75-1.1.75-2.63.75-5.7 0-3.06 0-4.6-.75-5.7a4 4 0 0 0-1.23-1.2c-.72-.47-1.62-.64-3-.7a1.4 1.4 0 0 1-1.35-1.12A2.06 2.06 0 0 0 13.63 3h-3.26c-1 0-1.84.68-2.04 1.64a1.4 1.4 0 0 1-1.35 1.12c-1.38.06-2.28.23-3 .7q-.73.49-1.23 1.2C2 8.77 2 10.3 2 13.37s0 4.6.75 5.7q.49.73 1.23 1.2c1.12.74 2.68.74 5.8.74"
            fill="currentColor"
          />
          <path
            d="M17.56 9.27a.83.83 0 0 0-.84.82c0 .45.38.82.84.82h1.1c.47 0 .84-.37.84-.82a.83.83 0 0 0-.83-.82z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 9.27a4.13 4.13 0 0 0-4.17 4.1c0 2.25 1.87 4.08 4.17 4.08s4.17-1.83 4.17-4.09S14.3 9.27 12 9.27m0 1.64c-1.38 0-2.5 1.1-2.5 2.45a2.5 2.5 0 0 0 2.5 2.46c1.38 0 2.5-1.1 2.5-2.46a2.5 2.5 0 0 0-2.5-2.45"
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
            d="M14.22 21H9.78c-3.12 0-4.68 0-5.8-.74a4 4 0 0 1-1.23-1.2C2 17.96 2 16.43 2 13.36c0-3.06 0-4.6.75-5.7a4 4 0 0 1 1.23-1.2c.72-.47 1.62-.64 3-.7a1.4 1.4 0 0 0 1.35-1.12A2.06 2.06 0 0 1 10.37 3h3.26c1 0 1.84.68 2.04 1.64.13.63.7 1.12 1.35 1.12 1.38.06 2.28.23 3 .7q.73.49 1.23 1.2c.75 1.1.75 2.64.75 5.7s0 4.6-.75 5.7a4 4 0 0 1-1.23 1.2c-1.12.74-2.68.74-5.8.74m-6.39-7.64c0-2.26 1.87-4.09 4.17-4.09s4.17 1.83 4.17 4.1A4.13 4.13 0 0 1 12 17.45a4.13 4.13 0 0 1-4.17-4.09m1.67 0a2.5 2.5 0 0 1 2.5-2.45c1.38 0 2.5 1.1 2.5 2.45a2.5 2.5 0 0 1-2.5 2.46c-1.38 0-2.5-1.1-2.5-2.46m7.22-3.27c0-.45.38-.82.84-.82h1.1c.47 0 .84.37.84.82s-.37.82-.83.82h-1.11a.83.83 0 0 1-.84-.82"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCamera;
