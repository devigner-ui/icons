import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAirbudsLeft = forwardRef<SVGSVGElement, IconProps>(
  function IconAirbudsLeft(
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
              d="M2 18.67v.83a2.5 2.5 0 0 0 5 0v-.83m-5 0V7.56A5.6 5.6 0 0 1 7.56 2h.1A3.35 3.35 0 0 1 11 5.34V8a3 3 0 0 1-3 3 1 1 0 0 0-1 1v6.67m-5 0h5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 5v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="5.5"
              cy="5.5"
              r="5.5"
              transform="matrix(-1 0 0 1 21 11)"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M14 14v5h3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14 5.1A5 5 0 0 1 17.9 9"
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
              d="M4.38 22A2.44 2.44 0 0 1 2 19.5h4.76c0 1.38-1.06 2.5-2.38 2.5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 7.89V5.17A3.26 3.26 0 0 0 7.98 2h-.95a5.43 5.43 0 0 0-5.02 5.28L2 7.9v9.93h4.76v-5.5c0-.61.48-1.1 1.06-1.1 1.76 0 3.18-1.5 3.18-3.34M9.32 5.13c0-.47-.33-.84-.75-.84-.41 0-.75.37-.75.84V7.9c0 .46.34.84.75.84.42 0 .75-.38.75-.84z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M16.5 22a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11"
                fill="currentColor"
              />
            </g>
            <path
              d="M15.25 13c.41 0 .75.34.75.75V18h2.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-5c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.27 4.95c-.09.4.18.8.58.88a4.3 4.3 0 0 1 3.32 3.32.75.75 0 0 0 1.47-.3 5.8 5.8 0 0 0-4.5-4.49.75.75 0 0 0-.87.6"
                fill="currentColor"
              />
            </g>
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
              d="M13.27 4.95c-.09.4.17.8.58.89a4.3 4.3 0 0 1 3.31 3.3.75.75 0 1 0 1.48-.29 5.8 5.8 0 0 0-4.5-4.48.75.75 0 0 0-.87.58"
              fill="currentColor"
            />
            <path
              d="M4.38 22A2.44 2.44 0 0 1 2 19.5h4.76c0 1.38-1.06 2.5-2.38 2.5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 7.89V5.17A3.26 3.26 0 0 0 7.98 2h-.95a5.43 5.43 0 0 0-5.02 5.28L2 7.9v9.93h4.76v-5.5c0-.61.48-1.1 1.06-1.1 1.76 0 3.18-1.5 3.18-3.34M9.32 5.13c0-.47-.33-.84-.75-.84-.41 0-.75.37-.75.84V7.9c0 .46.34.84.75.84.42 0 .75-.38.75-.84z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5 22a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m-1.25-9c.41 0 .75.34.75.75V18h2.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-5c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAirbudsLeft;
