import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStory = forwardRef<SVGSVGElement, IconProps>(function IconStory(
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
            d="M17.09 7.95a6.25 6.25 0 1 1-8.85 8.84 6.25 6.25 0 0 1 8.85-8.84"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.92 21.64c-2-.8-3.75-2.25-4.91-4.26a10 10 0 0 1-1.25-6.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.52 4.48a9.94 9.94 0 0 1 12.19-.07"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.42 21.64c2-.8 3.75-2.25 4.91-4.26a10 10 0 0 0 1.25-6.25"
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
            d="M17.09 7.95a6.25 6.25 0 1 1-8.85 8.84 6.25 6.25 0 0 1 8.85-8.84"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.92 22.39a1 1 0 0 1-.28-.05 10.6 10.6 0 0 1-5.29-4.59 10.6 10.6 0 0 1-1.34-6.73c.05-.41.44-.7.84-.65.41.05.7.43.65.84a9.2 9.2 0 0 0 5.69 9.72c.38.16.57.59.42.98-.11.3-.4.48-.69.48"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.52 5.23a.8.8 0 0 1-.59-.29.74.74 0 0 1 .13-1.05 10.6 10.6 0 0 1 6.61-2.28c2.36 0 4.6.76 6.5 2.2A.75.75 0 1 1 18.26 5a9.2 9.2 0 0 0-11.28.07.7.7 0 0 1-.46.16"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.42 22.39a.8.8 0 0 1-.7-.47.76.76 0 0 1 .42-.98 9.15 9.15 0 0 0 5.69-9.72.75.75 0 0 1 .65-.84c.4-.05.79.24.84.65a10.7 10.7 0 0 1-6.63 11.32z"
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
            d="M17.09 7.95a6.25 6.25 0 1 1-8.85 8.84 6.25 6.25 0 0 1 8.85-8.84"
            fill="currentColor"
          />
          <path
            d="M8.92 22.39a1 1 0 0 1-.28-.05 10.6 10.6 0 0 1-5.29-4.59 10.6 10.6 0 0 1-1.34-6.73c.05-.41.44-.7.84-.65.41.05.7.43.65.84a9.2 9.2 0 0 0 5.69 9.73c.38.16.57.59.42.98a.8.8 0 0 1-.69.47"
            fill="currentColor"
          />
          <path
            d="M6.52 5.23a.8.8 0 0 1-.59-.29.74.74 0 0 1 .13-1.05 10.6 10.6 0 0 1 6.61-2.28c2.36 0 4.6.76 6.5 2.2A.75.75 0 1 1 18.26 5a9.2 9.2 0 0 0-11.28.07.7.7 0 0 1-.46.16"
            fill="currentColor"
          />
          <path
            d="M16.42 22.39a.8.8 0 0 1-.7-.47.76.76 0 0 1 .42-.98 9.15 9.15 0 0 0 5.69-9.72.75.75 0 0 1 .65-.84c.4-.05.79.24.84.65a10.7 10.7 0 0 1-6.63 11.32z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconStory;
