import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFlag = forwardRef<SVGSVGElement, IconProps>(function IconFlag(
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
            d="M5 22V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m5 14 2.47-.5a8.7 8.7 0 0 1 4.92.46c1.7.68 3.56.8 5.33.36l.22-.05A1.4 1.4 0 0 0 19 12.9V5.54a1.2 1.2 0 0 0-1.5-1.17 8 8 0 0 1-4.9-.33l-.2-.08a8.7 8.7 0 0 0-4.93-.45L5 4"
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
            d="M6.5 1.75a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0z"
            fill="currentColor"
          />
          <path
            d="m13.35 3.79-.2-.08a8.7 8.7 0 0 0-4.93-.45L6.5 3.6v10l1.72-.34a8.7 8.7 0 0 1 4.92.45c1.7.68 3.56.8 5.33.36l.22-.05a1.4 1.4 0 0 0 1.06-1.37V5.3a1.2 1.2 0 0 0-1.5-1.17 8 8 0 0 1-4.9-.33"
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
            d="M5.75 1c.41 0 .75.34.75.75V3.6l1.72-.34a8.7 8.7 0 0 1 4.92.45l.2.08a8 8 0 0 0 4.92.33 1.2 1.2 0 0 1 1.49 1.17v7.36c0 .65-.44 1.21-1.06 1.37l-.22.05a8.7 8.7 0 0 1-5.33-.36 8.7 8.7 0 0 0-4.92-.45l-1.72.34v8.15a.75.75 0 0 1-1.5 0v-20c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFlag;
