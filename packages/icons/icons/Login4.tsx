import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLogin4 = forwardRef<SVGSVGElement, IconProps>(function IconLogin4(
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m12.35 14.62 2.56-2.56-2.56-2.56"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.67 12.06h10.17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M12.67 4c4.42 0 8 3 8 8s-3.58 8-8 8"
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
            d="M11.43 2a.85.85 0 0 0-.86.86v18.29c0 .47.38.86.86.86 5.89 0 10-4.11 10-10S17.31 2 11.43 2"
            fill="currentColor"
          />
          <path
            d="m16.57 11.54-2.84-2.85a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l1.56 1.56H4.66a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h9.57l-1.56 1.57a.75.75 0 0 0 0 1.06q.24.22.53.22t.53-.22l2.84-2.85c.3-.29.3-.76 0-1.05"
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
            d="M11.43 2a.85.85 0 0 0-.86.86v8.46h3.67l-1.57-1.57a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l2.84 2.85c.29.29.29.77 0 1.06l-2.84 2.85a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l1.56-1.56h-3.66v8.33c0 .47.38.86.86.86 5.89 0 10-4.11 10-10S17.31 2 11.43 2"
            fill="currentColor"
          />
          <path
            d="M4.66 11.32a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h5.9v-1.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLogin4;
