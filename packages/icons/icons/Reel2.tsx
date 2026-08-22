import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconReel2 = forwardRef<SVGSVGElement, IconProps>(function IconReel2(
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
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 22h10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path d="M19.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
          <path d="M6.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
          <path d="M12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" fill="currentColor" />
          <path d="M12 17.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" fill="currentColor" />
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
            d="M2 12a10 10 0 0 0 10 10h9.25a.75.75 0 0 0 0-1.5h-3.98A10 10 0 1 0 2 12"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5"
            fill="currentColor"
          />
          <path d="M5.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
          <path d="M12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" fill="currentColor" />
          <path d="M13 18.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0" fill="currentColor" />
          <path d="M18.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
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
            d="M12 14.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22a10 10 0 1 1 5.27-1.5h3.98a.75.75 0 0 1 0 1.5zm1-16.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M6.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m13 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 17.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M8.25 12a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconReel2;
