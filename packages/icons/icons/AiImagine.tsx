import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiImagine = forwardRef<SVGSVGElement, IconProps>(function IconAiImagine(
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
            d="m20.17 8.78.03.12 1.2 3.4c.2.5-.2 1-.7 1h-1.2v2.4c0 1.6-1.3 2.8-2.8 2.8H15v3m-8 0v-3.8A8.3 8.3 0 0 1 4.23 7.55M5.5 5.52a8.5 8.5 0 0 1 8.78-2.72"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.2 1.8c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M7 21.5v-3.8c-2.1-1.5-3.5-4-3.5-6.7a8.5 8.5 0 0 1 10.78-8.2m5.89 5.98.03.12 1.2 3.4c.2.5-.2 1-.7 1h-1.2v2.4c0 1.6-1.3 2.8-2.8 2.8H15v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.2 1.8c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M6.25 21.5v-3.43A9.2 9.2 0 0 1 2.75 11c0-2.5 1.08-4.91 2.7-6.54A9.4 9.4 0 0 1 12 1.75c1.5 0 2.97.38 4.24 1.03l-.03.03c-.23.23-.4.31-1.23.4a1.6 1.6 0 0 0 0 3.18c.82.09 1 .17 1.23.4s.31.4.4 1.23a1.6 1.6 0 0 0 3.18 0c.09-.82.17-1 .4-1.23q0 0 0 0 .47.9.73 1.89l1.18 3.34c.12.46.05 1.1-.18 1.41-.23.32-.79.57-1.22.62h-.45v1.65a4 4 0 0 1-1.06 2.54c-.61.6-1.6.98-2.49 1.01h-.95v2.25c0 .41-.34.75-.75.75H7a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M18.6 1.4c.14 1.06.38 1.7.84 2.16.47.46 1.1.7 2.16.84a.4.4 0 0 1 0 .8c-1.06.13-1.7.38-2.16.84s-.7 1.1-.84 2.16a.4.4 0 0 1-.8 0c-.14-1.06-.38-1.7-.84-2.16-.47-.47-1.1-.7-2.16-.85a.4.4 0 0 1 0-.79c1.06-.14 1.7-.38 2.16-.84.46-.47.7-1.1.84-2.16a.4.4 0 0 1 .8 0z"
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
            d="M6.25 21.5v-3.43A9.2 9.2 0 0 1 2.75 11c0-2.5 1.08-4.91 2.7-6.54A9.4 9.4 0 0 1 12 1.75c1.5 0 2.97.38 4.24 1.03l-.03.03c-.23.23-.4.31-1.23.4a1.6 1.6 0 0 0 0 3.18c.82.09 1 .17 1.23.4s.31.4.4 1.23a1.6 1.6 0 0 0 3.18 0c.09-.82.17-1 .4-1.23q0 0 0 0 .47.9.73 1.89l1.18 3.34c.12.46.05 1.1-.18 1.41-.23.32-.79.57-1.22.62h-.45v1.65a4 4 0 0 1-1.06 2.54c-.61.6-1.6.98-2.49 1.01h-.95v2.25c0 .41-.34.75-.75.75H7a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M18.6 1.4c.14 1.06.38 1.7.84 2.16.47.46 1.1.7 2.16.84a.4.4 0 0 1 0 .8c-1.06.13-1.7.38-2.16.84s-.7 1.1-.84 2.16a.4.4 0 0 1-.8 0c-.14-1.06-.38-1.7-.84-2.16-.47-.47-1.1-.7-2.16-.85a.4.4 0 0 1 0-.79c1.06-.14 1.7-.38 2.16-.84.46-.47.7-1.1.84-2.16a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiImagine;
