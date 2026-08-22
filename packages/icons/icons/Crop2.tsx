import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCrop2 = forwardRef<SVGSVGElement, IconProps>(function IconCrop2(
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
            d="M10.57 19h9.1V9.9c0-3.9-1-4.9-4.9-4.9h-9.1v9.1c0 3.9 1 4.9 4.9 4.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.67 5V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.67 5h-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.67 19v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.67 19h3"
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.61 4.83H7.5a2 2 0 0 0-2 2v7.11a5.23 5.23 0 0 0 5.23 5.23h7.11a2 2 0 0 0 2-2v-7.11a5.23 5.23 0 0 0-5.23-5.23"
            fill="currentColor"
          />
          <path
            d="M6.2 2a.75.75 0 0 0-.75.75v2.03H3.42a.75.75 0 1 0 0 1.5H6.2c.41 0 .75-.34.75-.75V2.75A.76.76 0 0 0 6.2 2"
            fill="currentColor"
          />
          <path
            d="M21.92 17.72h-2.78a.76.76 0 0 0-.75.75v2.78c0 .41.34.75.75.75s.75-.34.75-.75v-2.03h2.03c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
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
            d="M6.2 2a.75.75 0 0 0-.75.75v2.03H3.42a.75.75 0 1 0 0 1.5H6.2c.41 0 .75-.34.75-.75V2.75A.76.76 0 0 0 6.2 2"
            fill="currentColor"
          />
          <path
            d="M21.92 17.72h-2.78a.76.76 0 0 0-.75.75v2.78c0 .41.34.75.75.75s.75-.34.75-.75v-2.03h2.03c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
            fill="currentColor"
          />
          <path
            d="M17.39 18.47c0-.96.79-1.75 1.75-1.75h.69v-6.67a5.23 5.23 0 0 0-5.23-5.23H7.95v.69c0 .96-.79 1.75-1.75 1.75h-.7v6.67a5.23 5.23 0 0 0 5.23 5.23h6.67z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCrop2;
