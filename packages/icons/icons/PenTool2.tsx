import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPenTool2 = forwardRef<SVGSVGElement, IconProps>(function IconPenTool2(
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M11.42 22.5h2.52c.96 0 1.58-.68 1.4-1.51l-.41-1.81h-4.5l-.41 1.81c-.18.78.5 1.51 1.4 1.51"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m14.93 19.17 1.73-1.54c.97-.86 1.01-1.46.24-2.43l-3.05-3.87c-.64-.81-1.69-.81-2.33 0L8.47 15.2c-.77.97-.77 1.6.24 2.43l1.73 1.54"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.68 11.12v2.53"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M13.19 5h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.94 14.17h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.4 14.17h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.19 3.56a7.67 7.67 0 0 0-6.77 7.61"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.92 11.17a7.7 7.7 0 0 0-6.73-7.61"
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
            d="M13.19 1.5h-1c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5V3c0-.83-.67-1.5-1.5-1.5"
            fill="currentColor"
          />
          <path
            d="M4.94 10.67h-1c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.68-1.5-1.5-1.5"
            fill="currentColor"
          />
          <path
            d="M21.4 10.67h-1c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5"
            fill="currentColor"
          />
          <path
            d="M4.42 11.92a.76.76 0 0 1-.75-.75c0-4.27 3.2-7.86 7.44-8.36.4-.04.78.25.83.66a.75.75 0 0 1-.66.83 6.9 6.9 0 0 0-6.11 6.87c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M20.92 11.92a.76.76 0 0 1-.75-.75 6.9 6.9 0 0 0-6.07-6.86.74.74 0 0 1-.65-.83c.05-.41.43-.7.84-.65a8.4 8.4 0 0 1 7.39 8.35.76.76 0 0 1-.76.74"
            fill="currentColor"
          />
          <path
            d="M13.96 22.01h-2.57c-.92 0-1.6-.74-1.43-1.54l.42-1.85h4.59l.42 1.85c.19.85-.45 1.54-1.43 1.54"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m16.74 17.05-1.77 1.57h-4.59l-1.77-1.57c-1.03-.84-1.03-1.49-.25-2.48l3.12-3.94q.33-.41.74-.55.45-.15.9 0 .4.15.74.55l3.12 3.94c.78.99.75 1.61-.24 2.48"
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
            d="M21.65 10.7a8.4 8.4 0 0 0-6.97-7.81 1.5 1.5 0 0 0-1.49-1.39h-1a1.5 1.5 0 0 0-1.49 1.38 8.4 8.4 0 0 0-7.01 7.82 1.5 1.5 0 0 0-1.25 1.47v1c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5v-1a1.5 1.5 0 0 0-1.25-1.47 6.9 6.9 0 0 1 5.56-6.31 1.5 1.5 0 0 0 1.44 1.11h1a1.5 1.5 0 0 0 1.44-1.1 6.9 6.9 0 0 1 5.52 6.3 1.5 1.5 0 0 0-1.25 1.47v1c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5v-1c0-.74-.54-1.36-1.25-1.47"
            fill="currentColor"
          />
          <path
            d="M16.44 16.55 14.8 18h-4.25l-1.64-1.45c-.95-.78-.95-1.38-.23-2.3l2.89-3.66q.3-.37.69-.51.41-.13.84 0 .38.13.69.51l2.88 3.65c.73.92.69 1.49-.23 2.31"
            fill="currentColor"
          />
          <path
            d="M13.99 22H11.4c-.92 0-1.61-.75-1.43-1.55l.31-1.39a.6.6 0 0 1 .59-.47h3.65a.6.6 0 0 1 .59.47l.31 1.39c.19.85-.45 1.55-1.43 1.55"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPenTool2;
