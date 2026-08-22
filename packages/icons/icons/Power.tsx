import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPower = forwardRef<SVGSVGElement, IconProps>(function IconPower(
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
            d="M12 2v4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8.5 3.7a9 9 0 1 0 7 0"
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
            d="M8.8 5.15a.75.75 0 1 0-.6-1.38 9.75 9.75 0 1 0 7.6 0 .75.75 0 1 0-.6 1.38 8.25 8.25 0 1 1-6.4 0"
            fill="currentColor"
          />
          <path
            d="M12.75 2.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"
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
          <path d="M12 2v4" strokeWidth={strokeWidth} strokeLinecap="round" />
          <path
            d="M12.75 2.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"
            fill="currentColor"
          />
          <path
            d="M8.8 5.15a.75.75 0 1 0-.6-1.38 9.75 9.75 0 1 0 7.6 0 .75.75 0 1 0-.6 1.38 8.25 8.25 0 1 1-6.4 0"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPower;
