import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRewind10SecondsBack = forwardRef<SVGSVGElement, IconProps>(
  function IconRewind10SecondsBack(
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
              d="M14 4.5 12 2a10 10 0 1 1-4 .83"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m7.5 10.5 2.5-2v7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 13.75v-3.5a1.75 1.75 0 1 1 3.5 0v3.5a1.75 1.75 0 1 1-3.5 0"
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
              d="M10.32 7.82c.26.13.43.4.43.68v7a.75.75 0 0 1-1.5 0v-5.44l-1.28 1.03a.75.75 0 0 1-.94-1.18l2.5-2a.8.8 0 0 1 .8-.09"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.25 7.75a2.5 2.5 0 0 0-2.5 2.5v3.5a2.5 2.5 0 0 0 5 0v-3.5a2.5 2.5 0 0 0-2.5-2.5m0 1.5a1 1 0 0 0-1 1v3.5a1 1 0 1 0 2 0v-3.5a1 1 0 0 0-1-1"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.32 1.68a.8.8 0 0 1 .68-.43q1.1 0 2.15.22a10.75 10.75 0 1 1-6.45.67.75.75 0 1 1 .6 1.38 9.25 9.25 0 1 0 6.45-.35V4.5a.75.75 0 0 1-1.34.47l-2-2.5a.8.8 0 0 1-.09-.8"
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
              d="M10.32 7.82c.26.13.43.4.43.68v7a.75.75 0 0 1-1.5 0v-5.44l-1.28 1.03a.75.75 0 0 1-.94-1.18l2.5-2a.8.8 0 0 1 .8-.09m3.93 1.43a1 1 0 0 0-1 1v3.5a1 1 0 1 0 2 0v-3.5a1 1 0 0 0-1-1m-2.5 1a2.5 2.5 0 0 1 5 0v3.5a2.5 2.5 0 0 1-5 0z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.32 1.68a.8.8 0 0 1 .68-.43q1.1 0 2.15.22a10.75 10.75 0 1 1-6.45.67.75.75 0 1 1 .6 1.38 9.25 9.25 0 1 0 6.45-.35V4.5a.75.75 0 0 1-1.34.47l-2-2.5a.8.8 0 0 1-.09-.8"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRewind10SecondsBack;
