import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconOkb = forwardRef<SVGSVGElement, IconProps>(function IconOkb(
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
            d="M17.67 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.67 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M7.67 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
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
          <path d="M24.67 0h-24v24h24z" fill="none" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.67 12a5 5 0 0 1-5 5 5 5 0 0 0-5-5 5 5 0 0 0 5-5 5 5 0 0 1 5 5"
            fill="currentColor"
          />
          <path d="M17.67 17a5 5 0 0 1-5-5 5 5 0 0 1 5 5" fill="currentColor" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.67 17a5 5 0 0 1-10 0 5 5 0 0 0 5-5 5 5 0 0 0 5 5"
            fill="currentColor"
          />
          <path d="M17.67 7a5 5 0 0 1-5 5 5 5 0 0 1 5-5" fill="currentColor" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.67 7a5 5 0 0 0-5 5 5 5 0 0 0-5-5 5 5 0 0 1 10 0"
            fill="currentColor"
          />
          <path d="M12.67 12a5 5 0 0 1-5 5 5 5 0 0 1 5-5" fill="currentColor" />
          <path d="M12.67 12a5 5 0 0 1-5-5 5 5 0 0 1 5 5" fill="currentColor" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 12a5 5 0 0 0-5 5 5 5 0 0 1 0-10 5 5 0 0 0 5 5"
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
            d="M17.67 7a5 5 0 0 1-5 5 5 5 0 0 1 5 5 5 5 0 0 0 0-10"
            fill="currentColor"
          />
          <path
            d="M12.67 12a5 5 0 0 1-5 5 5 5 0 0 0 10 0 5 5 0 0 1-5-5"
            fill="currentColor"
          />
          <path
            d="M12.67 12a5 5 0 0 1 5-5 5 5 0 0 0-10 0 5 5 0 0 1 5 5"
            fill="currentColor"
          />
          <path
            d="M12.67 12a5 5 0 0 1-5-5 5 5 0 0 0 0 10 5 5 0 0 1 5-5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconOkb;
