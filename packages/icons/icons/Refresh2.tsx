import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRefresh2 = forwardRef<SVGSVGElement, IconProps>(function IconRefresh2(
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
            d="M2.67 12c0-5.52 4.44-10 10-10 6.67 0 10 5.56 10 5.56m0 0v-5m0 5h-4.44"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.56 12a10 10 0 0 1-10 10c-5.52 0-8.89-5.56-8.89-5.56m0 0h4.52m-4.52 0v5"
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
            d="M22.67 7.81v8.37c0 3.64-2.17 5.81-5.81 5.81H8.48c-3.64.01-5.81-2.16-5.81-5.8V7.81C2.67 4.17 4.84 2 8.48 2h8.37c3.65 0 5.82 2.17 5.82 5.81"
            fill="currentColor"
          />
          <path
            d="M12.67 18.25a6 6 0 0 1-4.14-1.77v.71c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-2.75c0-.41.34-.75.75-.75h2.48c.41 0 .75.34.75.75s-.34.75-.75.75h-.9a4.8 4.8 0 0 0 3.31 1.56A4.75 4.75 0 0 0 17.42 12c0-.41.34-.75.75-.75s.75.34.75.75c0 3.45-2.8 6.25-6.25 6.25m-5.5-5.5a.76.76 0 0 1-.75-.75c0-3.45 2.8-6.25 6.25-6.25 2.15 0 3.73.93 4.75 1.82v-.76c0-.41.34-.75.75-.75s.75.34.75.75v2.82a.75.75 0 0 1-.75.69h-2.43a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.83a5.7 5.7 0 0 0-3.88-1.56 4.75 4.75 0 0 0-4.75 4.75.8.8 0 0 1-.77.74"
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
            d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-4.19 16.25a6 6 0 0 1-4.14-1.77v.71c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-2.75c0-.41.34-.75.75-.75h2.48c.41 0 .75.34.75.75s-.34.75-.75.75h-.9a4.8 4.8 0 0 0 3.31 1.56A4.75 4.75 0 0 0 17.42 12c0-.41.34-.75.75-.75s.75.34.75.75c0 3.45-2.8 6.25-6.25 6.25m6.25-8.71v.08a.75.75 0 0 1-.75.69h-2.43a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.83a5.7 5.7 0 0 0-3.88-1.56A4.75 4.75 0 0 0 7.94 12c0 .41-.34.75-.75.75a.77.77 0 0 1-.77-.75c0-3.45 2.8-6.25 6.25-6.25 2.15 0 3.73.93 4.75 1.82v-.76c0-.41.34-.75.75-.75s.75.34.75.75z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRefresh2;
