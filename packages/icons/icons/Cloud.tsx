import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloud = forwardRef<SVGSVGElement, IconProps>(function IconCloud(
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
            d="M14.38 9.03A5.8 5.8 0 0 1 18.16 9 5.65 5.65 0 0 1 22 14.35 5.7 5.7 0 0 1 16.29 20h-10A4.26 4.26 0 0 1 2 15.76a4.26 4.26 0 0 1 5.12-4.15q.85.17 1.55.63"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.12 11.6A5.68 5.68 0 0 1 12.48 4a5.7 5.7 0 0 1 5.68 5.01"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 14.35A5.7 5.7 0 0 1 16.29 20H10.5a7.5 7.5 0 0 1 7.49-11.85q.1.42.17.86A5.65 5.65 0 0 1 22 14.35"
            fill="currentColor"
          />
          <path
            d="M12.48 4a5.68 5.68 0 0 0-5.36 7.6A4.26 4.26 0 0 0 2 15.77 4.26 4.26 0 0 0 6.29 20h4.2a7.5 7.5 0 0 1 7.49-11.85q0-.08-.04-.16A5.7 5.7 0 0 0 12.48 4"
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
            d="M16.29 20A5.7 5.7 0 0 0 22 14.35c0-2.47-1.6-4.57-3.84-5.34A5.7 5.7 0 0 0 12.48 4a5.68 5.68 0 0 0-5.36 7.6A4.26 4.26 0 0 0 2 15.77 4.26 4.26 0 0 0 6.29 20z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCloud;
