import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLinkBrokenMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconLinkBrokenMinimalistic(
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
              d="m10 5.05.37-.34a6.54 6.54 0 0 1 8.8 0 5.56 5.56 0 0 1 0 8.23L16.98 15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m14 18.93-.37.35a6.44 6.44 0 0 1-8.8-.03 5.8 5.8 0 0 1-.09-8.36l.9-.89"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m6.59 3 .91 2.2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m3.5 6.09 5.55 2.7"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M19.69 4.16a7.3 7.3 0 0 0-9.84 0l-.36.34a.75.75 0 0 0 1.02 1.1l.37-.35c2.14-2 5.64-2 7.78 0a4.8 4.8 0 0 1 0 7.14l-2.2 2.06a.75.75 0 0 0 1.03 1.1l2.2-2.06a6.3 6.3 0 0 0 0-9.33"
                fill="currentColor"
              />
              <path
                d="M6.17 10.54a.75.75 0 1 0-1.05-1.07l-.9.89a6.53 6.53 0 0 0 .1 9.43 7.2 7.2 0 0 0 9.83.03l.37-.35a.75.75 0 0 0-1.04-1.08l-.36.35a5.7 5.7 0 0 1-7.77-.03 5.03 5.03 0 0 1-.08-7.28z"
                fill="currentColor"
              />
            </g>
            <path
              d="M7.28 2.71a.75.75 0 0 0-1.39.58l.92 2.2a.75.75 0 1 0 1.38-.57z"
              fill="currentColor"
            />
            <path
              d="M3.83 5.41a.75.75 0 0 0-.66 1.35l5.55 2.7a.75.75 0 0 0 .66-1.34z"
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
              d="m10 5.05.37-.34a6.54 6.54 0 0 1 8.8 0 5.56 5.56 0 0 1 0 8.23L16.98 15"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              stroke="currentColor"
            />
            <path
              d="m14 18.93-.37.35a6.44 6.44 0 0 1-8.8-.03 5.8 5.8 0 0 1-.09-8.36l.9-.89"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              stroke="currentColor"
            />
            <path
              d="m6.59 3 .91 2.2"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              stroke="currentColor"
            />
            <path
              d="m3.5 6.09 5.55 2.7"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              stroke="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLinkBrokenMinimalistic;
