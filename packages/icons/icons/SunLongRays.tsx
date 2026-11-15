import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSunLongRays = forwardRef<SVGSVGElement, IconProps>(function IconSunLongRays(
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
      {variant === "Broken" ? (
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
            d="M7.28 10.33a5 5 0 1 0 3.05-3.05"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 2v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 19v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M5 12H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M22 12h-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m19.07 4.93-2.12 2.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m4.93 4.93 2.12 2.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m7.05 16.95-2.12 2.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m19.07 19.07-2.12-2.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      ) : !fill ? (
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
            r="5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 2v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 19v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M5 12H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M22 12h-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m19.07 4.93-2.12 2.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m4.93 4.93 2.12 2.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m7.05 16.95-2.12 2.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m19.07 19.07-2.12-2.12"
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
          <path d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.75 5V2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0ZM5 11.25H2a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5Zm14 1.5h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5ZM11.25 19v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M7.58 6.52 5.46 4.4A.75.75 0 0 0 4.4 5.46l2.12 2.12a.75.75 0 0 0 1.06-1.06Z"
              fill="currentColor"
            />
            <path
              d="m17.48 7.58 2.12-2.12a.75.75 0 0 0-1.06-1.06l-2.12 2.12a.75.75 0 0 0 1.06 1.06Z"
              fill="currentColor"
            />
            <path
              d="m16.42 17.48 2.12 2.12a.75.75 0 0 0 1.06-1.06l-2.12-2.12a.75.75 0 0 0-1.06 1.06Z"
              fill="currentColor"
            />
            <path
              d="M6.52 16.42 4.4 18.54a.75.75 0 0 0 1.06 1.06l2.12-2.12a.75.75 0 0 0-1.06-1.06Z"
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
          <path d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.75 5V2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0ZM5 11.25H2a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5Zm14 1.5h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5ZM11.25 19v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0ZM7.58 6.52 5.46 4.4A.75.75 0 0 0 4.4 5.46l2.12 2.12a.75.75 0 0 0 1.06-1.06Zm9.9 1.06 2.12-2.12a.75.75 0 0 0-1.06-1.06l-2.12 2.12a.75.75 0 0 0 1.06 1.06Zm-1.06 9.9 2.12 2.12a.75.75 0 0 0 1.06-1.06l-2.12-2.12a.75.75 0 0 0-1.06 1.06Zm-9.9-1.06L4.4 18.54a.75.75 0 0 0 1.06 1.06l2.12-2.12a.75.75 0 0 0-1.06-1.06Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSunLongRays;
