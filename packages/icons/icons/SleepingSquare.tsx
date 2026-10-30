import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSleepingSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconSleepingSquare(
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
            d="M6.3 11c.57.63 1.26 1 2 1a2.7 2.7 0 0 0 2-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M13.3 11c.57.63 1.26 1 2 1a2.7 2.7 0 0 0 2-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12.8 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            fill="currentColor"
          />
          <path
            d="M1.8 12c0-4.71 0-7.07 1.46-8.54C4.73 2 7.1 2 11.8 2m10 10c0 4.71 0 7.07-1.46 8.54C18.87 22 16.5 22 11.8 22s-7.07 0-8.54-1.46c-.97-.98-1.3-2.35-1.4-4.54"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m16.8 4 3.46-2-1.46 5.46 3.46-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m13.85 5.5 1.73 1-2.73.73 1.73 1"
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
              d="M6.3 11c.57.63 1.26 1 2 1a2.7 2.7 0 0 0 2-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M13.3 11c.57.63 1.26 1 2 1a2.7 2.7 0 0 0 2-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path d="M12.8 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M1.8 12c0-4.71 0-7.07 1.46-8.54C4.73 2 7.1 2 11.8 2s7.07 0 8.54 1.46C21.8 4.93 21.8 7.3 21.8 12s0 7.07-1.46 8.54C18.87 22 16.5 22 11.8 22s-7.07 0-8.54-1.46C1.8 19.07 1.8 16.7 1.8 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m16.8 4 3.46-2-1.46 5.46 3.46-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m13.85 5.5 1.73 1-2.73.73 1.73 1"
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
              d="M2.86 21.54C4.33 23 6.7 23 11.4 23s7.07 0 8.54-1.46C21.4 20.07 21.4 17.7 21.4 13s0-7.07-1.46-8.54C18.47 3 16.1 3 11.4 3S4.33 3 2.86 4.46C1.4 5.93 1.4 8.3 1.4 13s0 7.07 1.46 8.54"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.78 4.65a.75.75 0 1 1-.75-1.3l3.46-2a.75.75 0 0 1 1.1.84l-1 3.72 1.9-1.1a.75.75 0 1 1 .75 1.3l-3.46 2a.75.75 0 0 1-1.1-.84l1-3.72z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.07 6.15a.75.75 0 1 1 .75-1.3l1.73 1a.75.75 0 0 1-.18 1.37l-.97.28.16.1a.75.75 0 1 1-.75 1.3l-1.73-1a.75.75 0 0 1 .18-1.38l.99-.27z"
              fill="currentColor"
            />
            <path d="M11.4 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
            <path
              d="M12.4 11.44a.75.75 0 0 1 1.06.06q.7.76 1.44.75.73.02 1.44-.75a.75.75 0 1 1 1.12 1 3.5 3.5 0 0 1-2.56 1.25c-1.01 0-1.89-.5-2.56-1.25a.75.75 0 0 1 .06-1.06"
              fill="currentColor"
            />
            <path
              d="M6.46 11.5a.75.75 0 1 0-1.12 1 3.5 3.5 0 0 0 2.56 1.25c1.01 0 1.89-.5 2.56-1.25a.75.75 0 1 0-1.12-1q-.7.76-1.44.75-.74.02-1.44-.75"
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
              d="M16.78 4.65a.75.75 0 1 1-.75-1.3l3.46-2a.75.75 0 0 1 1.1.84l-1 3.72 1.9-1.1a.75.75 0 1 1 .75 1.3l-3.46 2a.75.75 0 0 1-1.1-.84l1-3.72z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.07 6.15a.75.75 0 1 1 .75-1.3l1.73 1a.75.75 0 0 1-.18 1.37l-.97.28.16.1a.75.75 0 1 1-.75 1.3l-1.73-1a.75.75 0 0 1 .18-1.38l.99-.27z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m14.37 3.02-.14.37a2.25 2.25 0 0 0-3.03 1.97 2.25 2.25 0 0 0 .12 3.82l1.73 1a2.25 2.25 0 0 0 3.36-1.66 2.25 2.25 0 0 0 3.12.9l1.78-1.04c.09 1.23.09 2.74.09 4.62 0 4.71 0 7.07-1.46 8.54C18.47 23 16.1 23 11.4 23s-7.07 0-8.54-1.46C1.4 20.07 1.4 17.7 1.4 13s0-7.07 1.46-8.54C4.33 3 6.7 3 11.4 3q1.67 0 2.97.02m-.91 8.48a.75.75 0 1 0-1.12 1 3.5 3.5 0 0 0 2.56 1.25c1.01 0 1.89-.5 2.56-1.25a.75.75 0 1 0-1.12-1q-.7.76-1.44.75-.73.02-1.44-.75m-8.06-.06a.75.75 0 0 1 1.06.06q.7.76 1.44.75.73.02 1.44-.75a.75.75 0 1 1 1.12 1 3.5 3.5 0 0 1-2.56 1.25c-1.01 0-1.89-.5-2.56-1.25a.75.75 0 0 1 .06-1.06m7 5.56a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSleepingSquare;
