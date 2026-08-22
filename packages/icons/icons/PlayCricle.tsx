import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlayCricle = forwardRef<SVGSVGElement, IconProps>(
  function IconPlayCricle(
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
              d="M19.74 19.07a10 10 0 0 0 0-14.14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.6 4.93a10 10 0 0 0 0 14.14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.37 21.41a10 10 0 0 0 6.6 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.37 2.59a10 10 0 0 1 6.6 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.41 12v-1.67c0-2.08 1.47-2.93 3.27-1.89l1.45.84 1.45.84c1.8 1.04 1.8 2.74 0 3.78l-1.45.84-1.45.84c-1.8 1.04-3.27.19-3.27-1.89z"
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
              d="M19.74 19.82a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06 9.25 9.25 0 0 0 0-13.08.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0 10.76 10.76 0 0 1 0 15.2.7.7 0 0 1-.53.22"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.6 19.82a.7.7 0 0 1-.53-.22 10.76 10.76 0 0 1 0-15.2.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06a9.25 9.25 0 0 0 0 13.08c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 22.71a11 11 0 0 1-3.55-.6.75.75 0 0 1 .5-1.42 9.4 9.4 0 0 0 6.11 0c.39-.13.82.07.96.46a.75.75 0 0 1-.46.96q-1.68.6-3.56.6"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m15.97 3.34-.25-.04a9.4 9.4 0 0 0-6.11 0 .76.76 0 0 1-.96-.46.75.75 0 0 1 .46-.96 11 11 0 0 1 3.55-.59q1.87 0 3.55.59c.39.14.6.57.46.96-.1.31-.39.5-.7.5"
              fill="currentColor"
            />
            <path
              d="M9.41 12v-1.67c0-2.08 1.47-2.93 3.27-1.89l1.45.84 1.45.84c1.8 1.04 1.8 2.74 0 3.78l-1.45.84-1.45.84c-1.8 1.04-3.27.19-3.27-1.89z"
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
              d="M19.74 19.82a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06 9.25 9.25 0 0 0 0-13.08.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0 10.76 10.76 0 0 1 0 15.2.7.7 0 0 1-.53.22"
              fill="currentColor"
            />
            <path
              d="M5.6 19.82a.7.7 0 0 1-.53-.22 10.76 10.76 0 0 1 0-15.2.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06a9.25 9.25 0 0 0 0 13.08c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22"
              fill="currentColor"
            />
            <path
              d="M12.67 22.71a11 11 0 0 1-3.55-.6.75.75 0 0 1 .5-1.42 9.4 9.4 0 0 0 6.11 0c.39-.13.82.07.96.46a.75.75 0 0 1-.46.96q-1.68.6-3.56.6"
              fill="currentColor"
            />
            <path
              d="m15.97 3.34-.25-.04a9.3 9.3 0 0 0-6.1 0 .76.76 0 0 1-.96-.46.75.75 0 0 1 .46-.96 10.8 10.8 0 0 1 7.1 0 .75.75 0 0 1-.25 1.46"
              fill="currentColor"
            />
            <path
              d="M9.41 12v-1.67c0-2.08 1.47-2.93 3.27-1.89l1.45.84 1.45.84c1.8 1.04 1.8 2.74 0 3.78l-1.45.84-1.45.84c-1.8 1.04-3.27.19-3.27-1.89z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPlayCricle;
