import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGallery2 = forwardRef<SVGSVGElement, IconProps>(function IconGallery2(
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
            d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.67 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m3.34 18.95 4.93-3.31a2.25 2.25 0 0 1 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57a2.2 2.2 0 0 1 2.82 0l1.63 1.4"
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
            d="M22.67 7.81v6.09l-1.63-1.4a2.2 2.2 0 0 0-2.82 0l-4.16 3.57c-.78.67-2.04.67-2.82 0l-.34-.28a2.2 2.2 0 0 0-2.64-.14l-4.92 3.3-.11.08a7 7 0 0 1-.56-2.84V7.81C2.67 4.17 4.84 2 8.48 2h8.38c3.64 0 5.81 2.17 5.81 5.81"
            fill="currentColor"
          />
          <path
            d="M9.67 10.38a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76"
            fill="currentColor"
          />
          <path
            d="M22.67 13.9v2.29c0 3.64-2.17 5.81-5.81 5.81H8.48c-2.55 0-4.4-1.07-5.25-2.97l.1-.08 4.93-3.3c.8-.54 1.93-.48 2.64.14l.34.28c.78.67 2.04.67 2.82 0l4.16-3.57a2.2 2.2 0 0 1 2.82 0z"
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
            d="m3.25 19.01-.02.02a6 6 0 0 1-.51-2q.11 1.1.53 1.98"
            fill="currentColor"
          />
          <path
            d="M9.67 10.38a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76"
            fill="currentColor"
          />
          <path
            d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.38q0 1.64.56 2.84c.86 1.9 2.7 2.97 5.25 2.97h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m4.18 10.5a2.2 2.2 0 0 0-2.82 0l-4.16 3.57c-.78.67-2.04.67-2.82 0l-.34-.28a2.2 2.2 0 0 0-2.64-.14l-3.74 2.51a5 5 0 0 1-.35-1.97V7.81c0-2.82 1.49-4.31 4.31-4.31h8.38c2.82 0 4.31 1.49 4.31 4.31v4.8z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGallery2;
