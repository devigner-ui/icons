import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEyeClosed = forwardRef<SVGSVGElement, IconProps>(
  function IconEyeClosed(
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
            d="M2 7.25c1.21 1.91 2.29 3.75 4.17 5.1q.8.57 1.64.96m3.37.88a10 10 0 0 0 7.11-2.2c1.81-1.45 2.56-2.8 3.71-4.74"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m7 15.75 1.41-2.17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m20.5 12.88-1.5-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16.75v-2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m17 15.75-1.41-2.17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m3.51 12.88 1.5-1.5"
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
              d="M2 7.25c1.21 1.91 2.29 3.75 4.17 5.1a10 10 0 0 0 12.12-.36c1.81-1.45 2.56-2.8 3.71-4.74"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m7 15.75 1.41-2.17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m20.5 12.88-1.5-1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 16.75v-2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m17 15.75-1.41-2.17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m3.51 12.88 1.5-1.5"
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
              d="M2.92 6.9a1 1 0 0 0-1.84.8l.02.03.15.32q.15.31.47.86c.4.68 1.03 1.6 1.87 2.51l-.8.8a1 1 0 1 0 1.42 1.42l.84-.84q.85.68 1.9 1.25l-.79 1.2a1 1 0 0 0 1.68 1.1l.98-1.52q1.02.31 2.18.43v1.54a1 1 0 0 0 1 1v-4.5a9 9 0 0 1-6.33-2.61l-.56-.57a13 13 0 0 1-2.19-3.2zm-1.84.8L2 7.3z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.22 12.7c-.94.37-2.01.6-3.22.6v4.5a1 1 0 0 0 1-1v-1.54q1.16-.11 2.18-.43l.98 1.52a1 1 0 0 0 1.68-1.1l-.78-1.2q1.05-.56 1.9-1.25l.83.84a1 1 0 0 0 1.42-1.42l-.8-.8a15 15 0 0 0 2.5-3.69V7.7a1 1 0 1 0-1.83-.8v.02l-.15.3q-.16.32-.5.9c-.47.73-1.16 1.69-2.11 2.58a10 10 0 0 1-3.1 2"
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
              d="M1.6 6.33a1 1 0 0 1 1.32.53L2 7.25l.92-.4v.01l.12.24q.13.27.4.73a13 13 0 0 0 2.26 2.83 9.1 9.1 0 0 0 9.52 1.99 10 10 0 0 0 3.1-2 13 13 0 0 0 2.76-3.78v-.02a1 1 0 0 1 1.84.78L22 7.25l.92.4-.02.03-.19.4q-.2.4-.59 1.04c-.4.65-.97 1.45-1.71 2.25l.8.8a1 1 0 0 1-1.42 1.42l-.84-.84q-.84.69-1.9 1.25l.79 1.2a1 1 0 0 1-1.68 1.1l-.98-1.52q-1.02.32-2.18.43v1.54a1 1 0 1 1-2 0v-1.54q-1.16-.11-2.18-.43l-.98 1.52a1 1 0 0 1-1.68-1.1l.78-1.2q-1.05-.56-1.9-1.25l-.83.84a1 1 0 1 1-1.42-1.42l.8-.8a15 15 0 0 1-2.5-3.7v-.02l.91-.4-.92.4a1 1 0 0 1 .53-1.32"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconEyeClosed;
