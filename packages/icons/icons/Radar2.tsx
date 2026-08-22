import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRadar2 = forwardRef<SVGSVGElement, IconProps>(function IconRadar2(
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
            d="M12 12 5 6.34c-.43-.35-1.06-.29-1.36.17A10 10 0 1 0 7.09 3.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.87 5.6a.75.75 0 1 0 .47 1.42zm7.38 6.4c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 18.75 12zM12 17.25A5.25 5.25 0 0 1 6.75 12h-1.5A6.75 6.75 0 0 0 12 18.75zm0-10.5c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 12 5.25zM6.75 12c0-1.27.45-2.43 1.2-3.34l-1.16-.95A6.7 6.7 0 0 0 5.25 12zm3.59-4.98A5 5 0 0 1 12 6.75v-1.5q-1.12 0-2.13.34z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            fill="currentColor"
          />
          <path
            d="M11.13 6.82q1.09-.2 2.23.11a5.25 5.25 0 1 1-5.87 2.38l.7.58A4.35 4.35 0 1 0 12 7.65a.75.75 0 0 0 .01 1.5 2.85 2.85 0 1 1-2.6 1.7l2.13 1.73a.75.75 0 1 0 .94-1.16l-4.2-3.4a1.3 1.3 0 0 0-1.91.28 6.74 6.74 0 1 0 4.51-2.96.75.75 0 1 0 .26 1.48"
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
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20m1.36-15.07a5 5 0 0 0-2.23-.1.75.75 0 0 1-.26-1.49q1.41-.24 2.88.14a6.75 6.75 0 1 1-7.4 2.82 1.3 1.3 0 0 1 1.92-.28l4.2 3.4a.75.75 0 1 1-.94 1.16l-2.14-1.73q-.23.53-.24 1.15A2.85 2.85 0 1 0 12 9.15a.75.75 0 0 1 0-1.5A4.35 4.35 0 1 1 8.2 9.9l-.71-.58a5.25 5.25 0 1 0 5.87-2.38"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRadar2;
