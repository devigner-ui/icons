import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMenuBoard = forwardRef<SVGSVGElement, IconProps>(
  function IconMenuBoard(
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
            d="M1.1 19.07A2.26 2.26 0 0 0 3.24 22h13.14c1.04 0 1.93-.7 2.18-1.71l3.37-13.53q.18-.76-.11-1.42a2.2 2.2 0 0 0-2.07-1.38H7.45c-.98 0-1.86.64-2.14 1.59l-2.63 8.46"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M16 22h4.78c1.29 0 2.3-1.09 2.21-2.38L22 6"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m9.68 6.38 1.04-4.32"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m16.38 6.39.94-4.34"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7.7 12h8"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.7 16H14"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6.7 16H11"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
              d="m21.93 6.76-3.37 13.53A2.2 2.2 0 0 1 16.38 22H3.24a2.26 2.26 0 0 1-2.14-2.93L5.31 5.55a2.25 2.25 0 0 1 2.14-1.59h12.3c.95 0 1.74.58 2.07 1.38q.29.66.11 1.42"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 22h4.78c1.29 0 2.3-1.09 2.21-2.38L22 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m9.68 6.38 1.04-4.32"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m16.38 6.39.94-4.34"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.7 12h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.7 16h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M21.99 6.37q.03.36-.06.74l-3.37 13.53a2.2 2.2 0 0 1-2.18 1.71H3.24a2.26 2.26 0 0 1-2.14-2.93L5.31 5.89a2.2 2.2 0 0 1 2.14-1.58h12.3a2.2 2.2 0 0 1 2.24 2.06"
              fill="currentColor"
            />
            <path
              d="M22.99 19.97a2.2 2.2 0 0 1-2.21 2.38h-4.4c1.04 0 1.94-.7 2.18-1.71l3.37-13.53q.09-.38.06-.74l.01-.02z"
              fill="currentColor"
            />
            <path
              d="m9.68 7.48-.18-.02a.75.75 0 0 1-.55-.91l1.04-4.32a.75.75 0 1 1 1.46.36l-1.04 4.32a.75.75 0 0 1-.73.57"
              fill="currentColor"
            />
            <path
              d="m16.38 7.49-.16-.02a.77.77 0 0 1-.58-.89l.94-4.34a.76.76 0 0 1 .89-.58c.4.09.66.49.58.89l-.94 4.34a.74.74 0 0 1-.73.6"
              fill="currentColor"
            />
            <path
              d="M15.7 13.1h-8a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M14.7 17.1h-8a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
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
              d="m20.9 10.2.59 9.89a.7.7 0 0 1-.18.53.7.7 0 0 1-.53.23h-2.73l2.16-10.65zM22 6.35l-.01.02q.03.36-.06.74l-7.37 13.53a2.2 2.2 0 0 1-2.18 1.71h8.4a2.2 2.2 0 0 0 2.21-2.38z"
              fill="currentColor"
            />
            <path
              d="M11.45 2.59a.76.76 0 0 0-.55-.91.76.76 0 0 0-.91.55l-.5 2.07h1.54z"
              fill="currentColor"
            />
            <path
              d="M18.05 2.56a.74.74 0 0 0-.58-.89.75.75 0 0 0-.89.58l-.45 2.07h1.54z"
              fill="currentColor"
            />
            <path
              d="M21.82 5.68a2.2 2.2 0 0 0-2.07-1.37h-2.08l-.56 2.59a.76.76 0 0 1-.73.59l-.16-.02a.77.77 0 0 1-.58-.89l.49-2.28h-5.1l-.63 2.6a.75.75 0 0 1-.73.57l-.18-.02a.75.75 0 0 1-.55-.91l.54-2.25H7.45c-.98 0-1.85.64-2.14 1.58L1.1 19.42a2.26 2.26 0 0 0 2.14 2.93h13.14c1.04 0 1.94-.7 2.18-1.71l3.37-13.53a2.3 2.3 0 0 0-.11-1.43M14.7 17.1h-8a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75m1-4h-8a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMenuBoard;
