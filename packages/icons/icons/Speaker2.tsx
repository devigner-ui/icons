import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSpeaker2 = forwardRef<SVGSVGElement, IconProps>(function IconSpeaker2(
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
            d="M9.67 22h6c3 0 4-1 4-4V6c0-3-1-4-4-4h-6c-3 0-4 1-4 4v12c0 3 1 4 4 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
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
          <path d="M12.67 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6" fill="currentColor" />
          <path
            d="M12.67 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.67 1.62h-6C6.48 1.62 5.29 2.81 5.29 6v12c0 3.19 1.19 4.38 4.38 4.38h6c3.19 0 4.38-1.19 4.38-4.38V6c0-3.19-1.19-4.38-4.38-4.38m-3 4.38a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
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
            d="M15.67 1.62h-6C6.48 1.62 5.29 2.81 5.29 6v12c0 3.19 1.19 4.38 4.38 4.38h6c3.19 0 4.38-1.19 4.38-4.38V6c0-3.19-1.19-4.38-4.38-4.38m-3 4.38a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSpeaker2;
