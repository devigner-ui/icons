import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloudRain = forwardRef<SVGSVGElement, IconProps>(
  function IconCloudRain(
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
              d="M14.38 8.03A5.8 5.8 0 0 1 18.16 8M7.12 10.6A4.26 4.26 0 0 0 2 14.77c0 1.3.6 2.48 1.55 3.25m3.57-7.41A5.68 5.68 0 0 1 12.48 3a5.7 5.7 0 0 1 5.68 5M7.12 10.6q.85.16 1.55.63M18.16 8a5.62 5.62 0 0 1 1.34 10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m17 19-2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m16 15.5-2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m12 20-2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m11.5 15.5-2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m7.5 19-2 2"
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
              d="M12.03 14.97c.3.3.3.77 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0m4.5 0c.3.3.3.77 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0m-8.5 3.5c.3.3.3.77 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0m9.5 0c.3.3.3.77 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0m-5 1c.3.3.3.77 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
            <path
              d="M12.03 14.97c.3.3.3.77 0 1.06l-2 2a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l2-2c.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
            <path
              d="m15.47 14.97-2 2a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 1 0-1.06-1.06"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.29 19A5.7 5.7 0 0 0 22 13.35c0-2.47-1.6-4.57-3.84-5.34A5.7 5.7 0 0 0 12.48 3a5.68 5.68 0 0 0-5.36 7.6A4.26 4.26 0 0 0 2 14.77 4.26 4.26 0 0 0 6.29 19z"
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
              d="M12.03 14.97c.3.3.3.77 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0m4.5 0c.3.3.3.77 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0m-8.5 3.5c.3.3.3.77 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0m9.5 0c.3.3.3.77 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0m-5 1c.3.3.3.77 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
            <path
              d="M19.12 18.26a2.2 2.2 0 0 0-1.35-1.37 2.25 2.25 0 0 0-3.36-2.98l-.8.8a2.24 2.24 0 0 0-3.7-.8l-2 2q-.37.38-.53.84c-.54.03-1.06.25-1.47.66l-1.27 1.27A4.2 4.2 0 0 1 2 14.76a4.26 4.26 0 0 1 5.12-4.15A5.68 5.68 0 0 1 12.48 3a5.7 5.7 0 0 1 5.68 5 5.63 5.63 0 0 1 .97 10.24"
              fill="currentColor"
            />
            <path
              d="M12.03 14.97c.3.3.3.77 0 1.06l-2 2a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l2-2c.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
            <path
              d="m15.47 14.97-2 2a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 1 0-1.06-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCloudRain;
