import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAirbudsRight = forwardRef<SVGSVGElement, IconProps>(
  function IconAirbudsRight(
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
              d="M21 18.67v1.1A2.35 2.35 0 0 1 18.77 22h-.54A2.35 2.35 0 0 1 16 19.77v-1.1m5 0V7.56A5.6 5.6 0 0 0 15.44 2h-.1A3.35 3.35 0 0 0 12 5.34V8a3 3 0 0 0 3 3 1 1 0 0 1 1 1v6.67m5 0h-5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15 5v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="7.5"
              cy="16.5"
              r="5.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 5.1A5 5 0 0 0 5.1 9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M6 14v-.75a.75.75 0 0 0-.75.75zm-.75 5a.75.75 0 0 0 1.5 0zM6 16.5h-.75v.75H6zm2.36 2.89a.75.75 0 1 0 1.28-.78zM6 14.75h1.5v-1.5H6zm.75 1.75V14h-1.5v2.5zm1.5-1.25c0 .15-.2.5-.75.5v1.5c1.1 0 2.25-.77 2.25-2zm-.75-.5c.55 0 .75.35.75.5h1.5c0-1.23-1.14-2-2.25-2zM5.25 14v5h1.5v-5zm2.25 1.75H6v1.5h1.5zm-.64 1.14 1.5 2.5 1.28-.78-1.5-2.5z"
              fill="currentColor"
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
              d="M19.62 22A2.44 2.44 0 0 0 22 19.5h-4.76c0 1.38 1.06 2.5 2.38 2.5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 7.89V5.17A3.26 3.26 0 0 1 16.02 2h.95a5.43 5.43 0 0 1 5.02 5.28l.01.62v9.93h-4.76v-5.5c0-.61-.48-1.1-1.06-1.1A3.26 3.26 0 0 1 13 7.88m1.68-2.76c0-.47.33-.84.75-.84.41 0 .75.37.75.84V7.9c0 .46-.34.84-.75.84-.42 0-.75-.38-.75-.84z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M13 16.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.73 4.95c.09.4-.18.8-.58.88a4.3 4.3 0 0 0-3.32 3.32.75.75 0 0 1-1.47-.3 5.8 5.8 0 0 1 4.5-4.49c.4-.08.8.18.87.6"
                fill="currentColor"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 13.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-1.75h.33l1.28 2.14a.75.75 0 1 0 1.28-.78l-.99-1.64c.63-.33 1.1-.93 1.1-1.72 0-1.23-1.14-2-2.25-2zm.75 1.5v1h.75c.55 0 .75-.35.75-.5s-.2-.5-.75-.5z"
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
              d="M10.74 4.95c.08.4-.18.8-.6.89a4.3 4.3 0 0 0-3.3 3.3.75.75 0 0 1-1.47-.29 5.8 5.8 0 0 1 4.48-4.48c.4-.09.8.17.88.58"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5 22a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m-2.25-8c0-.41.34-.75.75-.75h1.5c1.1 0 2.25.77 2.25 2 0 .79-.47 1.39-1.1 1.72l1 1.64a.75.75 0 0 1-1.3.78l-1.27-2.14h-.33V19a.75.75 0 0 1-1.5 0zm1.5 1.75v-1h.75c.55 0 .75.35.75.5s-.2.5-.75.5z"
              fill="currentColor"
            />
            <path
              d="M19.62 22A2.44 2.44 0 0 0 22 19.5h-4.76c0 1.38 1.06 2.5 2.38 2.5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 7.89V5.17A3.26 3.26 0 0 1 16.02 2h.95a5.43 5.43 0 0 1 5.02 5.28l.01.62v9.93h-4.76v-5.5c0-.61-.48-1.1-1.06-1.1A3.26 3.26 0 0 1 13 7.88m1.68-2.76c0-.47.33-.84.75-.84.41 0 .75.37.75.84V7.9c0 .46-.34.84-.75.84-.42 0-.75-.38-.75-.84z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAirbudsRight;
