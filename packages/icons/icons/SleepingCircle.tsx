import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSleepingCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconSleepingCircle(
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M11 23a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
              d="M13.28 3.26a2.25 2.25 0 0 0-2.48 2.1l-.14.1a2.25 2.25 0 0 0 .26 3.72l1.73 1a2.25 2.25 0 0 0 3.36-1.66 2.25 2.25 0 0 0 3.11.9l.98-.57a10 10 0 1 1-6.82-5.59m-7.83 8a.7.7 0 0 1 .6.24q.72.77 1.45.75.45 0 .9-.28.29-.18.54-.47a.75.75 0 1 1 1.12 1 3.5 3.5 0 0 1-2.56 1.25c-1.01 0-1.89-.5-2.56-1.25a.75.75 0 0 1 .5-1.25m7.6.24a.75.75 0 1 0-1.1 1 3.5 3.5 0 0 0 2.55 1.25c1.01 0 1.89-.5 2.56-1.25a.75.75 0 0 0-1.12-1q-.7.77-1.44.75-.73.02-1.44-.75M12 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSleepingCircle;
