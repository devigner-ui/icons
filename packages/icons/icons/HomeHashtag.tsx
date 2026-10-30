import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHomeHashtag = forwardRef<SVGSVGElement, IconProps>(
  function IconHomeHashtag(
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
            d="M13.5 9h-3a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-3"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12 9v9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7.5 13.5h9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33a4.5 4.5 0 0 0-5 .12l-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41a4.23 4.23 0 0 0 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21v-3.1"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
              d="m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41a4.23 4.23 0 0 0 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33a4.5 4.5 0 0 0-5 .12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M10.5 18h3a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3h-3a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 9v9"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 13.5h9"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="m20.03 6.82-5.75-4.03a4.8 4.8 0 0 0-5.48.13L3.79 6.83A5 5 0 0 0 2 10.47v6.9A4.63 4.63 0 0 0 6.61 22h10.77a4.6 4.6 0 0 0 4.61-4.62V10.6a5 5 0 0 0-1.96-3.78"
              fill="currentColor"
            />
            <path
              d="M13.4 8.51h-2.8A3.5 3.5 0 0 0 7.11 12v2.79a3.5 3.5 0 0 0 3.49 3.49h2.79a3.5 3.5 0 0 0 3.49-3.49V12a3.5 3.5 0 0 0-3.48-3.49M15.49 12v.7H12.7V9.91h.7A2.1 2.1 0 0 1 15.49 12M10.6 9.91h.7v2.79H8.51V12a2.1 2.1 0 0 1 2.09-2.09m-2.09 4.88v-.7h2.79v2.79h-.7a2.1 2.1 0 0 1-2.09-2.09m4.89 2.09h-.7v-2.79h2.79v.7a2.1 2.1 0 0 1-2.09 2.09"
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
              d="M12.7 16.88h.7a2.1 2.1 0 0 0 2.09-2.09v-.7H12.7z"
              fill="currentColor"
            />
            <path
              d="M8.51 14.79a2.1 2.1 0 0 0 2.09 2.09h.7v-2.79H8.51z"
              fill="currentColor"
            />
            <path
              d="M8.51 12v.7h2.79V9.91h-.7A2.1 2.1 0 0 0 8.51 12"
              fill="currentColor"
            />
            <path
              d="m20.03 6.82-5.75-4.03a4.8 4.8 0 0 0-5.48.13L3.79 6.83A5 5 0 0 0 2 10.47v6.9A4.63 4.63 0 0 0 6.61 22h10.77a4.6 4.6 0 0 0 4.61-4.62V10.6a5 5 0 0 0-1.96-3.78m-3.15 7.97a3.5 3.5 0 0 1-3.49 3.49H10.6a3.5 3.5 0 0 1-3.49-3.49V12a3.5 3.5 0 0 1 3.49-3.49h2.79A3.5 3.5 0 0 1 16.88 12z"
              fill="currentColor"
            />
            <path
              d="M13.4 9.91h-.7v2.79h2.79V12a2.1 2.1 0 0 0-2.09-2.09"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHomeHashtag;
