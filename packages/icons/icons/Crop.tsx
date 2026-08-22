import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCrop = forwardRef<SVGSVGElement, IconProps>(function IconCrop(
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
            d="M22 19h-9c-3.77 0-5.66 0-6.83-1.17S5 14.77 5 11V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 5h3c3.77 0 5.66 0 6.83 1.17S19 9.23 19 13v3M2 5h3m14 14v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8.5 11.5c0-1.41 0-2.12.44-2.56s1.15-.44 2.56-.44h1c1.41 0 2.12 0 2.56.44s.44 1.15.44 2.56v1c0 1.41 0 2.12-.44 2.56s-1.15.44-2.56.44h-1c-1.41 0-2.12 0-2.56-.44s-.44-1.15-.44-2.56z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M5 1.25c.41 0 .75.34.75.75v9c0 1.9 0 3.26.14 4.29.14 1 .39 1.58.81 2 .43.43 1 .69 2.01.82 1.03.14 2.38.14 4.29.14h9a.75.75 0 0 1 0 1.5h-9.05c-1.84 0-3.3 0-4.44-.15a4.7 4.7 0 0 1-2.87-1.24 4.7 4.7 0 0 1-1.24-2.87c-.15-1.14-.15-2.6-.15-4.43V2c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 5.75h2.25v-1.5H2a.75.75 0 0 0 0 1.5"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.75 22v-2.25h-1.5V22a.75.75 0 0 0 1.5 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.29 5.89A36 36 0 0 0 11 5.75H8a.75.75 0 0 1 0-1.5h3.06c1.83 0 3.29 0 4.43.15 1.17.16 2.12.5 2.87 1.24.75.75 1.08 1.7 1.24 2.87.15 1.14.15 2.6.15 4.43V16a.75.75 0 0 1-1.5 0v-3c0-1.9 0-3.26-.14-4.29-.13-1-.39-1.58-.81-2-.43-.43-1-.68-2.01-.82"
            fill="currentColor"
          />
          <path
            d="M8.5 11.5c0-1.41 0-2.12.44-2.56s1.15-.44 2.56-.44h1c1.41 0 2.12 0 2.56.44s.44 1.15.44 2.56v1c0 1.41 0 2.12-.44 2.56s-1.15.44-2.56.44h-1c-1.41 0-2.12 0-2.56-.44s-.44-1.15-.44-2.56z"
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
            d="M5 1.25c.41 0 .75.34.75.75v9c0 1.9 0 3.26.14 4.29.14 1 .39 1.58.81 2 .43.43 1 .69 2.01.82 1.03.14 2.38.14 4.29.14h9a.75.75 0 0 1 0 1.5h-2.25V22a.75.75 0 0 1-1.5 0v-2.25h-5.3c-1.84 0-3.3 0-4.44-.15a4.7 4.7 0 0 1-2.87-1.24 4.7 4.7 0 0 1-1.24-2.87c-.15-1.14-.15-2.6-.15-4.43V5.75H2a.75.75 0 0 1 0-1.5h2.25V2c0-.41.34-.75.75-.75m10.29 4.64A36 36 0 0 0 11 5.75H8a.75.75 0 0 1 0-1.5h3.06c1.83 0 3.29 0 4.43.15 1.17.16 2.12.5 2.87 1.24.75.75 1.08 1.7 1.24 2.87.15 1.14.15 2.6.15 4.43V16a.75.75 0 0 1-1.5 0v-3c0-1.9 0-3.26-.14-4.29-.13-1-.39-1.58-.81-2-.43-.43-1-.68-2.01-.82"
            fill="currentColor"
          />
          <path
            d="M8.5 11.5c0-1.41 0-2.12.44-2.56s1.15-.44 2.56-.44h1c1.41 0 2.12 0 2.56.44s.44 1.15.44 2.56v1c0 1.41 0 2.12-.44 2.56s-1.15.44-2.56.44h-1c-1.41 0-2.12 0-2.56-.44s-.44-1.15-.44-2.56z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCrop;
