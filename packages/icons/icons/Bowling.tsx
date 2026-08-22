import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBowling = forwardRef<SVGSVGElement, IconProps>(function IconBowling(
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
          <circle
            cx="12"
            cy="12.0005"
            r="10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="12"
            cy="7.00049"
            r="1.5"
            transform="rotate(-90 12 7.00049)"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="12"
            cy="12.0005"
            r="1.5"
            transform="rotate(-90 12 12.0005)"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
            fill="currentColor"
          />
          <path
            d="M8 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
            fill="currentColor"
          />
          <path
            d="M12 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
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
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20m1.5-10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M12 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-2.5 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBowling;
