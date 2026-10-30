import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCalculatorDots = forwardRef<SVGSVGElement, IconProps>(
  function IconCalculatorDots(
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
            d="M17.46 21.53C19.95 20.68 21 18.63 21 15V9c0-5-2-7-7-7h-3.95m-3.46.46C4.07 3.3 3 5.35 3 9v6c0 5 2 7 7 7h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 7.58v1c0 .82-.67 1.5-1.5 1.5H9a1.5 1.5 0 0 1-1.5-1.5v-1c0-.82.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.13 14h.02Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 14h.02Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.85 14h.02Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.13 17.5h.02Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 17.5h.02Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.85 17.5h.02Z"
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
              d="M10 22h4c5 0 7-2 7-7V9c0-5-2-7-7-7h-4C5 2 3 4 3 9v6c0 5 2 7 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.5 7.58v1c0 .82-.67 1.5-1.5 1.5H9a1.5 1.5 0 0 1-1.5-1.5v-1c0-.82.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.13 14h.02"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 14h.02"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.85 14h.02"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.13 17.5h.02"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 17.5h.02"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.85 17.5h.02"
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
              d="M8 22h8a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5"
              fill="currentColor"
            />
            <path
              d="M15 5.71H9c-1.03 0-1.88.84-1.88 1.88v1c0 1.03.84 1.88 1.88 1.88h6c1.03 0 1.88-.84 1.88-1.88v-1c0-1.04-.84-1.88-1.88-1.88"
              fill="currentColor"
            />
            <path
              d="M8.16 14.92a1 1 0 0 1-.71-.29 1 1 0 0 1-.3-.71 1 1 0 0 1 .08-.38 1 1 0 1 1 1.63 1.09 1 1 0 0 1-.7.29"
              fill="currentColor"
            />
            <path
              d="M12.15 14.92a1 1 0 0 1-1-1q0-.4.3-.71a1.03 1.03 0 0 1 1.41 0q.14.14.22.33.07.18.07.38a1 1 0 0 1-1 1"
              fill="currentColor"
            />
            <path
              d="M16.15 14.92a1 1 0 0 1-1-1q0-.4.3-.71a1.03 1.03 0 0 1 1.41 0q.3.3.3.71a1 1 0 0 1-1.01 1"
              fill="currentColor"
            />
            <path
              d="M8.16 18.92a1 1 0 0 1-1.01-1 1 1 0 0 1 .62-.92 1 1 0 0 1 .94.09q.09.05.15.12.3.3.3.71a1 1 0 0 1-1 1"
              fill="currentColor"
            />
            <path
              d="M12.15 18.92a1 1 0 0 1-1-1l.02-.2.06-.18.09-.18.13-.15q.14-.13.32-.21c.37-.15.81-.07 1.09.21a1 1 0 0 1-.71 1.71"
              fill="currentColor"
            />
            <path
              d="M16.15 18.92a1 1 0 0 1-.38-.08 1 1 0 0 1-.61-.92 1 1 0 0 1 .29-.71 1 1 0 0 1 1.41 0 1 1 0 0 1-.71 1.71"
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
              d="M16 2H8a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5M8.86 18.63a1 1 0 0 1-.7.29 1 1 0 0 1-1.01-1 1 1 0 0 1 .62-.92 1 1 0 0 1 .94.09q.09.05.15.12.3.3.3.71a1 1 0 0 1-.3.71m-1.71-4.71a1 1 0 0 1 .08-.38 1 1 0 0 1 1.48-.45q.09.05.15.12.14.14.22.33.07.18.07.38a1 1 0 0 1-1.38.92 1 1 0 0 1-.62-.92m5.71 4.71a1 1 0 0 1-.71.29 1 1 0 0 1-1-1l.02-.2.06-.18.09-.18.13-.15q.14-.13.32-.21c.37-.15.81-.07 1.09.21a1 1 0 0 1 0 1.42m0-4a1 1 0 0 1-.71.29 1 1 0 0 1-1-1q0-.4.3-.71a1.03 1.03 0 0 1 1.41 0q.14.14.22.33.07.18.07.38 0 .42-.29.71M9 10.46a1.9 1.9 0 0 1-1.88-1.88v-1c0-1.03.84-1.88 1.88-1.88h6c1.03 0 1.88.84 1.88 1.88v1c0 1.03-.84 1.88-1.88 1.88zm7.86 8.17a1 1 0 0 1-1.09.21 1 1 0 0 1-.61-.92 1 1 0 0 1 .29-.71 1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42m.22-4.33a1 1 0 0 1-.93.62 1 1 0 0 1-1-1q0-.4.3-.71a1.03 1.03 0 0 1 1.41 0q.3.3.3.71a1 1 0 0 1-.08.38"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCalculatorDots;
