import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStar2 = forwardRef<SVGSVGElement, IconProps>(function IconStar2(
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
            d="M12 20v-2.4m0-11.2V4m8 8h-2.4M6.4 12H4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17.66 6.34-1.7 1.7m-7.92 7.92-1.7 1.7m0-11.32 1.7 1.7m7.92 7.92 1.7 1.7"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3.25c.41 0 .75.34.75.75v2.4a.75.75 0 0 1-1.5 0V4c0-.41.34-.75.75-.75M3.25 12c0-.41.34-.75.75-.75h2.4a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m13.6 0c0-.41.34-.75.75-.75H20a.75.75 0 0 1 0 1.5h-2.4a.75.75 0 0 1-.75-.75M12 16.85c.41 0 .75.34.75.75V20a.75.75 0 0 1-1.5 0v-2.4c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M18.19 5.81c.29.3.29.77 0 1.06l-1.7 1.7a.75.75 0 0 1-1.06-1.06l1.7-1.7a.75.75 0 0 1 1.06 0"
              fill="currentColor"
            />
            <path
              d="M5.81 5.81a.75.75 0 0 1 1.06 0l1.7 1.7a.75.75 0 0 1-1.06 1.06l-1.7-1.7a.75.75 0 0 1 0-1.06"
              fill="currentColor"
            />
            <path
              d="M8.57 15.43c.3.3.3.77 0 1.06l-1.7 1.7a.75.75 0 0 1-1.06-1.06l1.7-1.7c.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
            <path
              d="M15.43 15.43c.3-.3.77-.3 1.06 0l1.7 1.7a.75.75 0 0 1-1.06 1.06l-1.7-1.7a.75.75 0 0 1 0-1.06"
              fill="currentColor"
            />
          </g>
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
            d="M12 3.25c.41 0 .75.34.75.75v2.4a.75.75 0 0 1-1.5 0V4c0-.41.34-.75.75-.75m6.19 2.56c.29.3.29.77 0 1.06l-1.7 1.7a.75.75 0 1 1-1.06-1.06l1.7-1.7a.75.75 0 0 1 1.06 0m-12.38 0a.75.75 0 0 1 1.06 0l1.7 1.7a.75.75 0 0 1-1.06 1.06l-1.7-1.7a.75.75 0 0 1 0-1.06M3.25 12c0-.41.34-.75.75-.75h2.4a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m13.6 0c0-.41.34-.75.75-.75H20a.75.75 0 0 1 0 1.5h-2.4a.75.75 0 0 1-.75-.75m-8.28 3.43c.3.3.3.77 0 1.06l-1.7 1.7a.75.75 0 1 1-1.06-1.06l1.7-1.7c.3-.3.77-.3 1.06 0m6.86 0c.3-.3.77-.3 1.06 0l1.7 1.7a.75.75 0 0 1-1.06 1.06l-1.7-1.7a.75.75 0 0 1 0-1.06M12 16.85c.41 0 .75.34.75.75V20a.75.75 0 0 1-1.5 0v-2.4c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconStar2;
