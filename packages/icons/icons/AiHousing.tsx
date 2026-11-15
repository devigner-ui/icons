import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiHousing = forwardRef<SVGSVGElement, IconProps>(function IconAiHousing(
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
            d="M2 21.75h20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="m2.95 21.75.01-3.7m.02-2.4L3 9.72c0-.61.29-1.19.77-1.57l7-5.45a2 2 0 0 1 2.46 0l7 5.45c.48.38.77.96.77 1.57v12.03"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 16.75h-2c-.83 0-1.5.67-1.5 1.5v3.5h5v-3.5c0-.83-.67-1.5-1.5-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M9.5 13.5h-2a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M15.5 9.35c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
          <path
            d="M2 21.75h20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M2.95 21.75 3 9.72c0-.61.29-1.19.77-1.57l7-5.45a2 2 0 0 1 2.46 0l7 5.45c.48.38.77.96.77 1.57v12.03"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 16.75h-2c-.83 0-1.5.67-1.5 1.5v3.5h5v-3.5c0-.83-.67-1.5-1.5-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.5 13.5h-2a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M15.5 9.35c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M22 22.08H2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.95 21.33 3 9.72c0-.61.29-1.19.77-1.57l7-5.45a2 2 0 0 1 2.46 0l7 5.45c.48.38.77.96.77 1.57v11.61z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M13 16.33h-2c-.83 0-1.5.67-1.5 1.5v3.5h5v-3.5c0-.83-.67-1.5-1.5-1.5"
            fill="currentColor"
          />
          <path
            d="M9.5 13.08h-2a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M15.9 8.53c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="M22 22.08H2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M2.95 21.33 3 9.72c0-.61.29-1.19.77-1.57l7-5.45a2 2 0 0 1 2.46 0l7 5.45c.48.38.77.96.77 1.57v11.61zm6.55-8.25h-2a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1zm5 7.5h-5v-2.75c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5zm1.4-12.05c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiHousing;
