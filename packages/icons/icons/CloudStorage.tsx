import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloudStorage = forwardRef<SVGSVGElement, IconProps>(
  function IconCloudStorage(
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
              d="M6.29 18A4.26 4.26 0 0 1 2 13.76a4.26 4.26 0 0 1 5.12-4.15m7.26-2.58A5.8 5.8 0 0 1 18.16 7M7.12 9.61A5.68 5.68 0 0 1 12.48 2a5.7 5.7 0 0 1 5.68 5M7.12 9.61q.85.16 1.55.63m9.49-3.23A5.65 5.65 0 0 1 22 12.35a5.7 5.7 0 0 1-4.5 5.52"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.5 17c0-1.41 0-2.12.44-2.56S10.09 14 11.5 14h1c1.41 0 2.12 0 2.56.44s.44 1.15.44 2.56v2c0 1.41 0 2.12-.44 2.56s-1.15.44-2.56.44h-1c-1.41 0-2.12 0-2.56-.44S8.5 20.41 8.5 19z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11 18h2"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.94 14.44c-.44.44-.44 1.15-.44 2.56v2c0 1.41 0 2.12.44 2.56s1.15.44 2.56.44h1c1.41 0 2.12 0 2.56-.44s.44-1.15.44-2.56v-2c0-1.41 0-2.12-.44-2.56S13.91 14 12.5 14h-1c-1.41 0-2.12 0-2.56.44M10.25 18c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 12.35a5.7 5.7 0 0 1-5 5.6l-1.5.01V17c0-1.41 0-2.12-.44-2.56S13.91 14 12.5 14h-1c-1.41 0-2.12 0-2.56.44S8.5 15.59 8.5 17v1H6.29A4.26 4.26 0 0 1 2 13.76a4.26 4.26 0 0 1 5.12-4.15A5.68 5.68 0 0 1 12.48 2a5.7 5.7 0 0 1 5.68 5A5.65 5.65 0 0 1 22 12.35"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.94 14.44c-.44.44-.44 1.15-.44 2.56v2c0 1.41 0 2.12.44 2.56s1.15.44 2.56.44h1c1.41 0 2.12 0 2.56-.44s.44-1.15.44-2.56v-2c0-1.41 0-2.12-.44-2.56S13.91 14 12.5 14h-1c-1.41 0-2.12 0-2.56.44M10.25 18c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M7 18v-1.08c0-.64 0-1.26.07-1.77.08-.57.26-1.23.8-1.77.55-.55 1.2-.73 1.78-.81.51-.07 1.13-.07 1.77-.07h1.16c.64 0 1.26 0 1.77.07.57.08 1.23.26 1.77.8.55.55.73 1.2.81 1.78.07.51.07 1.13.07 1.77v1.04c2.82-.35 5-2.73 5-5.6 0-2.48-1.6-4.58-3.84-5.35A5.7 5.7 0 0 0 12.48 2a5.68 5.68 0 0 0-5.36 7.6A4.26 4.26 0 0 0 2 13.77 4.26 4.26 0 0 0 6.29 18z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCloudStorage;
