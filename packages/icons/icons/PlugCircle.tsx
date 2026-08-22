import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlugCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconPlugCircle(
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
              d="m10.01 21.97-.15.73zm6.02-1.49a.75.75 0 1 0 .66 1.35zm-5.87.75a9.3 9.3 0 0 1-7.41-9.15h-1.5c0 5.25 3.7 9.62 8.61 10.62zm-7.41-9.15A9.3 9.3 0 0 1 12 2.75v-1.5A10.8 10.8 0 0 0 1.25 12.08zM12 2.75a9.3 9.3 0 0 1 9.25 9.33h1.5A10.8 10.8 0 0 0 12 1.25zm.75 17.4v-5.04h-1.5v5.04zm8.5-8.07c0 3.7-2.13 6.9-5.22 8.4l.66 1.35a10.8 10.8 0 0 0 6.06-9.75zM9.86 22.7c1.66.34 2.89-1.08 2.89-2.55h-1.5c0 .76-.58 1.19-1.09 1.08z"
              fill="currentColor"
            />
            <path
              d="M9 11.8c0-.44.36-.8.8-.8h4.4c.44 0 .8.36.8.8v.2a3 3 0 1 1-6 0z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M13.5 11V9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M10.5 11V9"
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.75 22A10 10 0 0 0 22 12.01V12a10 10 0 0 0-20 0v.01A10 10 0 0 0 11.25 22v-.03a10 10 0 1 1 1.5 0z"
                fill="currentColor"
              />
              <path
                d="M11.25 21.97a10 10 0 0 0 1.5 0 10 10 0 1 0-1.5 0"
                fill="currentColor"
              />
            </g>
            <path
              d="M8.5 12.51a3.5 3.5 0 0 0 2.75 3.43v6.03a10 10 0 0 0 1.5 0v-6.03a3.5 3.5 0 0 0 2.75-3.43v-.5a1 1 0 0 0-1-1h-.25v-2a.75.75 0 1 0-1.5 0v2h-1.5v-2a.75.75 0 1 0-1.5 0v2H9.5a1 1 0 0 0-1 1z"
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
              d="M12 2a10 10 0 0 0-.75 20v-6.06A3.5 3.5 0 0 1 8.5 12.5V12a1 1 0 0 1 1-1h.25V9a.75.75 0 1 1 1.5 0v2h1.5V9a.75.75 0 1 1 1.5 0v2h.25a1 1 0 0 1 1 1v.5a3.5 3.5 0 0 1-2.75 3.43V22A10 10 0 0 0 12 2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPlugCircle;
