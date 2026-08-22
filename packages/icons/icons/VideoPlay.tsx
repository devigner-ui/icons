import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVideoPlay = forwardRef<SVGSVGElement, IconProps>(
  function IconVideoPlay(
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
              d="M22.67 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.19 7.11h18.96"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.19 2.11v4.86"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.15 2.11v4.41"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.42 14.45v-1.2c0-1.54 1.09-2.17 2.42-1.4l1.04.6 1.04.6c1.33.77 1.33 2.03 0 2.8l-1.04.6-1.04.6c-1.33.77-2.42.14-2.42-1.4z"
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
              d="M22.67 7.81v8.38c0 3.64-2.17 5.81-5.81 5.81H8.48c-3.64 0-5.81-2.17-5.81-5.81V7.81q0-.77.13-1.45C3.31 3.61 5.34 2.01 8.44 2h8.46c3.1.01 5.13 1.61 5.64 4.36q.13.68.13 1.45"
              fill="currentColor"
            />
            <path
              d="M22.67 7.81v.05h-20v-.05q0-.77.13-1.45h5.64V2h1.5v4.36h5.46V2h1.5v4.36h5.64q.13.68.13 1.45"
              fill="currentColor"
            />
            <path
              d="m15.11 12.72-2.08-1.2c-.77-.44-1.51-.5-2.09-.17s-.9 1.01-.9 1.89v2.4c0 .88.32 1.56.9 1.89q.38.21.82.21.6 0 1.27-.38l2.08-1.2c.77-.44 1.19-1.06 1.19-1.73s-.43-1.26-1.19-1.71"
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
            <path d="M15.4 2H9.94v4.36h5.46z" fill="currentColor" />
            <path
              d="M16.9 2v4.36h5.64C22.03 3.61 20 2.01 16.9 2"
              fill="currentColor"
            />
            <path
              d="M2.67 7.86v8.33c0 3.64 2.17 5.81 5.81 5.81h8.38c3.64 0 5.81-2.17 5.81-5.81V7.86zm12.44 8.32-2.08 1.2a2.6 2.6 0 0 1-1.27.38q-.45 0-.82-.21c-.58-.33-.9-1.01-.9-1.89v-2.4c0-.88.32-1.56.9-1.89.58-.34 1.32-.28 2.09.17l2.08 1.2c.77.44 1.19 1.06 1.19 1.73s-.43 1.26-1.19 1.71"
              fill="currentColor"
            />
            <path
              d="M8.44 2c-3.1.01-5.13 1.61-5.64 4.36h5.64z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVideoPlay;
