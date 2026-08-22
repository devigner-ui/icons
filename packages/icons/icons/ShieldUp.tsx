import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShieldUp = forwardRef<SVGSVGElement, IconProps>(function IconShieldUp(
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
            d="M3 10.42c0-3.2 0-4.8.38-5.34.38-.53 1.88-1.05 4.88-2.08l.58-.2C10.4 2.28 11.19 2 12 2s1.6.27 3.16.8l.58.2c3 1.03 4.5 1.55 4.88 2.08.38.54.38 2.14.38 5.34v1.57c0 5.64-4.24 8.38-6.9 9.54-.72.31-1.08.47-2.1.47s-1.38-.16-2.1-.47C7.24 20.37 3 17.63 3 11.99z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M16 11.55 12.6 9a1 1 0 0 0-1.2 0L8 11.55m6 2.5-2-1.5-2 1.5"
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
            d="M3 10.42c0-3.2 0-4.8.38-5.34.38-.53 1.88-1.05 4.88-2.08l.58-.2C10.4 2.28 11.19 2 12 2s1.6.27 3.16.8l.58.2c3 1.03 4.5 1.55 4.88 2.08.38.54.38 2.14.38 5.34v1.57c0 5.64-4.24 8.38-6.9 9.54-.72.31-1.08.47-2.1.47s-1.38-.16-2.1-.47C7.24 20.37 3 17.63 3 11.99z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.95 8.4a1.75 1.75 0 0 1 2.1 0l3.4 2.55a.75.75 0 1 1-.9 1.2l-3.4-2.55a.3.3 0 0 0-.3 0l-3.4 2.55a.75.75 0 1 1-.9-1.2zm.6 3.55c.27-.2.63-.2.9 0l2 1.5a.75.75 0 1 1-.9 1.2L12 13.5l-1.55 1.16a.75.75 0 1 1-.9-1.2z"
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
            d="M3.38 5.08C3 5.62 3 7.22 3 10.42v1.57c0 5.64 4.24 8.38 6.9 9.54.72.31 1.08.47 2.1.47s1.38-.16 2.1-.47c2.66-1.16 6.9-3.9 6.9-9.54v-1.57c0-3.2 0-4.8-.38-5.34-.37-.53-1.88-1.05-4.88-2.08l-.58-.2C13.6 2.28 12.81 2 12 2s-1.6.27-3.16.8l-.58.2c-3 1.03-4.5 1.55-4.88 2.08m13.07 5.87-3.4-2.55a1.75 1.75 0 0 0-2.1 0l-3.4 2.55a.75.75 0 1 0 .9 1.2l3.4-2.55a.3.3 0 0 1 .3 0l3.4 2.55a.75.75 0 1 0 .9-1.2m-2 2.5-2-1.5a.75.75 0 0 0-.9 0l-2 1.5a.75.75 0 1 0 .9 1.2L12 13.49l1.55 1.16a.75.75 0 1 0 .9-1.2"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconShieldUp;
