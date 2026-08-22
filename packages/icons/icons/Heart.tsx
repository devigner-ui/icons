import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHeart = forwardRef<SVGSVGElement, IconProps>(function IconHeart(
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
            d="M12 5.5C7.5.83 2 4.27 2 9.14s4.02 7.45 6.96 9.77C10 19.73 11 20.5 12 20.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 5.5C16.5.83 22 4.27 22 9.14s-4.02 7.45-6.96 9.77C14 19.73 13 20.5 12 20.5"
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
            d="M8.1 18.25C5.3 16.08 2 13.55 2 9.14 2 4.27 7.5.83 12 5.5v15c-1 0-2-.77-3.04-1.59z"
            fill="currentColor"
          />
          <path
            d="M15.04 18.91C17.98 16.6 22 14 22 9.14 22 4.27 16.5.83 12 5.5v15c1 0 2-.77 3.04-1.59"
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
            d="M2 9.14C2 14 6.02 16.59 8.96 18.9 10 19.73 11 20.5 12 20.5s2-.77 3.04-1.59C17.98 16.6 22 14 22 9.14 22 4.27 16.5.83 12 5.5 7.5.83 2 4.27 2 9.14"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHeart;
