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
              d="M6.5 11c.57.63 1.26 1 2 1a2.7 2.7 0 0 0 2-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M13.5 11c.57.63 1.26 1 2 1a2.7 2.7 0 0 0 2-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m17 4 3.46-2L19 7.46l3.46-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m14.05 5.5 1.73 1-2.73.73 1.73 1"
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
              d="M2.46 21.54C3.93 23 6.3 23 11 23s7.07 0 8.54-1.46C21 20.07 21 17.7 21 13s0-7.07-1.46-8.54C18.07 3 15.7 3 11 3S3.93 3 2.46 4.46C1 5.93 1 8.3 1 13s0 7.07 1.46 8.54"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.38 4.65a.75.75 0 1 1-.75-1.3l3.46-2a.75.75 0 0 1 1.1.84l-1 3.72 1.9-1.1a.75.75 0 1 1 .75 1.3l-3.46 2a.75.75 0 0 1-1.1-.84l1-3.72z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.67 6.15a.75.75 0 1 1 .75-1.3l1.73 1a.75.75 0 0 1-.18 1.37L14 7.5l.16.1a.75.75 0 1 1-.75 1.3l-1.73-1a.75.75 0 0 1 .18-1.38l.99-.27z"
              fill="currentColor"
            />
            <path d="M11 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
            <path
              d="M12 11.44a.75.75 0 0 1 1.06.06q.7.76 1.44.75.73.02 1.44-.75a.75.75 0 1 1 1.12 1 3.5 3.5 0 0 1-2.56 1.25c-1.01 0-1.89-.5-2.56-1.25a.75.75 0 0 1 .06-1.06"
              fill="currentColor"
            />
            <path
              d="M6.06 11.5a.75.75 0 1 0-1.12 1 3.5 3.5 0 0 0 2.56 1.25c1.01 0 1.89-.5 2.56-1.25a.75.75 0 1 0-1.12-1q-.7.76-1.44.75-.74.02-1.44-.75"
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
              d="M16.38 4.65a.75.75 0 1 1-.75-1.3l3.46-2a.75.75 0 0 1 1.1.84l-1 3.72 1.9-1.1a.75.75 0 1 1 .75 1.3l-3.46 2a.75.75 0 0 1-1.1-.84l1-3.72z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.67 6.15a.75.75 0 1 1 .75-1.3l1.73 1a.75.75 0 0 1-.18 1.37L14 7.5l.16.1a.75.75 0 1 1-.75 1.3l-1.73-1a.75.75 0 0 1 .18-1.38l.99-.27z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m13.97 3.02-.14.37a2.25 2.25 0 0 0-3.03 1.97 2.25 2.25 0 0 0 .12 3.82l1.73 1a2.25 2.25 0 0 0 3.36-1.66 2.25 2.25 0 0 0 3.12.9l1.78-1.04C21 9.61 21 11.12 21 13c0 4.71 0 7.07-1.46 8.54C18.07 23 15.7 23 11 23s-7.07 0-8.54-1.46C1 20.07 1 17.7 1 13s0-7.07 1.46-8.54C3.93 3 6.3 3 11 3q1.67 0 2.97.02m-.91 8.48a.75.75 0 1 0-1.12 1 3.5 3.5 0 0 0 2.56 1.25c1.01 0 1.89-.5 2.56-1.25a.75.75 0 1 0-1.12-1q-.7.76-1.44.75-.73.02-1.44-.75M5 11.44a.75.75 0 0 1 1.06.06q.7.76 1.44.75.73.02 1.44-.75a.75.75 0 1 1 1.12 1 3.5 3.5 0 0 1-2.56 1.25c-1.01 0-1.89-.5-2.56-1.25A.75.75 0 0 1 5 11.44M12 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSleepingSquare;
