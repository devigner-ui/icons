import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconScissor = forwardRef<SVGSVGElement, IconProps>(function IconScissor(
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
            d="M6.17 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.17 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M22.67 6 9.32 15.98"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 17.97 9.32 7.98"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M6.17 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
            fill="currentColor"
          />
          <path
            d="M6.17 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m15.92 11.98 7.2-5.38a.75.75 0 0 0-.9-1.2l-7.55 5.65L9.12 6.9a.75.75 0 0 0-.9 1.2l5.2 3.89-5.9 4.42a.75.75 0 0 0 .9 1.2l6.26-4.68 7.55 5.65q.2.15.45.15.36 0 .6-.3a.75.75 0 0 0-.15-1.05z"
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
            d="M6.17 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
            fill="currentColor"
          />
          <path
            d="M6.17 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
            fill="currentColor"
          />
          <path
            d="m15.92 11.98 7.2-5.38a.75.75 0 0 0-.9-1.2l-7.55 5.65-5.55-4.16a.76.76 0 0 0-1.05.15c-.25.33-.18.8.15 1.05l5.2 3.89-5.9 4.42a.75.75 0 0 0 .9 1.2l6.25-4.68 7.55 5.65q.2.15.45.15.36 0 .6-.3a.75.75 0 0 0-.15-1.05z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconScissor;
