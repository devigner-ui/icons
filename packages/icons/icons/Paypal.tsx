import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPaypal = forwardRef<SVGSVGElement, IconProps>(function IconPaypal(
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
            d="M19.67 7q0 .27-.03.52a6 6 0 0 1-1.73 3.72A6 6 0 0 1 13.67 13h-3.13a1 1 0 0 0-.99.86l-.76 5.28a1 1 0 0 1-.71.81 1 1 0 0 1-.28.05H5.85a1 1 0 0 1-.99-1.16L7.25 4.51A3 3 0 0 1 10.21 2h4.46a5 5 0 0 1 5 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.67 11a5 5 0 0 1-5 5h-2.15a1 1 0 0 0-.99.84l-.72 4.32a1 1 0 0 1-.99.84H8.89a1 1 0 0 1-.98-1.2l.17-.85a1 1 0 0 0 .71-.81l.76-5.28a1 1 0 0 1 .99-.86h3.13c1.66 0 3.16-.67 4.24-1.76a6 6 0 0 0 1.73-3.72A4 4 0 0 1 21.67 11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            d="M19.67 7q0 .27-.03.52a6 6 0 0 1-1.73 3.72A6 6 0 0 1 13.67 13h-3.13a1 1 0 0 0-.99.86l-.76 5.28a1 1 0 0 1-.71.81 1 1 0 0 1-.28.05H5.85a1 1 0 0 1-.99-1.16L7.25 4.51A3 3 0 0 1 10.21 2h4.46a5 5 0 0 1 5 5"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.67 11a5 5 0 0 1-5 5h-2.15a1 1 0 0 0-.99.84l-.72 4.32a1 1 0 0 1-.99.84H8.89a1 1 0 0 1-.98-1.2l.17-.85a1 1 0 0 0 .71-.81l.76-5.28a1 1 0 0 1 .99-.86h3.13c1.66 0 3.16-.67 4.24-1.76a6 6 0 0 0 1.73-3.72A4 4 0 0 1 21.67 11"
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
            d="M19.67 7q0 .27-.03.52a6 6 0 0 1-1.73 3.72A6 6 0 0 1 13.67 13h-3.13a1 1 0 0 0-.99.86l-.76 5.28a1 1 0 0 1-.71.81 1 1 0 0 1-.28.05H5.85a1 1 0 0 1-.99-1.16L7.25 4.51A3 3 0 0 1 10.21 2h4.46a5 5 0 0 1 5 5"
            fill="currentColor"
          />
          <path
            d="M21.67 11a5 5 0 0 1-5 5h-2.15a1 1 0 0 0-.99.84l-.72 4.32a1 1 0 0 1-.99.84H8.89a1 1 0 0 1-.48-.12c-.22-.12-.08-.41.16-.51a2.5 2.5 0 0 0 1.7-2.02l.64-4.42a.5.5 0 0 1 .49-.43h2.27a7.4 7.4 0 0 0 7.11-5.11c.08-.25.41-.3.52-.07q.36.78.37 1.68"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPaypal;
