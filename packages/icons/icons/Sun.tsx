import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSun = forwardRef<SVGSVGElement, IconProps>(function IconSun(
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
            d="M12 2v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 20v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M22 12h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M4 12H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m19.07 4.93-1.41 1.41"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m6.34 17.66-1.41 1.41"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m19.07 19.07-1.41-1.41"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6.34 6.34 4.93 4.93"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M7.28 10.33a5 5 0 1 0 3.05-3.05"
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
            d="M12 2v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 20v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M22 12h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M4 12H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m19.07 4.93-1.41 1.41"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m6.34 17.66-1.41 1.41"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m19.07 19.07-1.41-1.41"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.34 6.34 4.93 4.93"
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
            d="M12.75 4V2a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0ZM4 11.25H2a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5Zm16 1.5h2a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5ZM11.25 20v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M6.87 5.81 5.46 4.4A.75.75 0 0 0 4.4 5.46l1.41 1.41a.75.75 0 0 0 1.06-1.06Z"
              fill="currentColor"
            />
            <path
              d="m18.19 6.87 1.41-1.41a.75.75 0 0 0-1.06-1.06l-1.41 1.41a.75.75 0 0 0 1.06 1.06Z"
              fill="currentColor"
            />
            <path
              d="m17.13 18.19 1.41 1.41a.75.75 0 0 0 1.06-1.06l-1.41-1.41a.75.75 0 0 0-1.06 1.06Z"
              fill="currentColor"
            />
            <path
              d="M5.81 17.13 4.4 18.54a.75.75 0 0 0 1.06 1.06l1.41-1.41a.75.75 0 0 0-1.06-1.06Z"
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
            d="M12.75 4V2a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0ZM4 11.25H2a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5Zm16 1.5h2a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5ZM11.25 20v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0ZM6.87 5.81 5.46 4.4A.75.75 0 0 0 4.4 5.46l1.41 1.41a.75.75 0 0 0 1.06-1.06Zm11.32 1.06 1.41-1.41a.75.75 0 0 0-1.06-1.06l-1.41 1.41a.75.75 0 0 0 1.06 1.06Zm-1.06 11.32 1.41 1.41a.75.75 0 0 0 1.06-1.06l-1.41-1.41a.75.75 0 0 0-1.06 1.06ZM5.81 17.13 4.4 18.54a.75.75 0 0 0 1.06 1.06l1.41-1.41a.75.75 0 0 0-1.06-1.06Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSun;
