import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArmchair2 = forwardRef<SVGSVGElement, IconProps>(
  function IconArmchair2(
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
              d="M6.89 18h9.64c.62 0 .93 0 1.2-.04a3.6 3.6 0 0 0 2.63-1.69c.13-.22.23-.48.42-1l1.12-3c.42-1.12-.51-2.27-1.83-2.27-.8 0-1.53.45-1.8 1.13l-1 2.47c-.2.48-.3.72-.48.88q-.15.15-.35.22c-.24.1-.52.1-1.1.1H8.38c-.3 0-.44 0-.57-.03a1.2 1.2 0 0 1-.74-.46c-.07-.1-.12-.22-.22-.47l-1.1-2.7c-.28-.69-1-1.14-1.81-1.14-1.32 0-2.25 1.15-1.83 2.26l1.3 3.5.04.1A3.6 3.6 0 0 0 6.9 18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 12V8.57c0-2.15 0-3.23.7-3.9S8.54 4 10.8 4h2.4c2.26 0 3.4 0 4.1.67s.7 1.75.7 3.9V12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 20v-2M6 20v-1.33"
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
              d="M16.53 18H6.75v2a.75.75 0 0 1-1.5 0v-2.32c-.83-.37-1.49-1-1.8-1.82l-.05-.1-1.3-3.5C1.68 11.15 2.61 10 3.93 10c.8 0 1.53.45 1.8 1.13l1.1 2.71c.1.25.16.37.23.47q.26.36.74.46c.13.03.27.03.57.03h6.98c.57 0 .85 0 1.09-.1q.2-.08.35-.22c.18-.16.28-.4.47-.88l1-2.47c.28-.68 1-1.13 1.81-1.13 1.32 0 2.25 1.15 1.83 2.26l-1.12 3c-.2.53-.3.79-.42 1.01-.36.62-.93 1.1-1.61 1.4V20a.75.75 0 0 1-1.5 0v-2z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.24 3.5h-2.48a23 23 0 0 0-2.66.09c-.7.09-1.28.28-1.74.72-.47.44-.67 1-.77 1.68-.09.66-.09 1.5-.09 2.54v2.2q.15.18.24.4l1.1 2.71c.1.25.15.37.22.47q.26.36.74.46c.13.03.27.03.57.03h6.98c.57 0 .85 0 1.09-.1q.2-.08.35-.22c.18-.16.28-.4.47-.88l1-2.47q.09-.21.24-.4v-2.2c0-1.04 0-1.88-.1-2.54a2.7 2.7 0 0 0-.76-1.68 3 3 0 0 0-1.74-.72c-.69-.09-1.56-.09-2.66-.09"
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
              d="M16.53 18H6.75v2a.75.75 0 0 1-1.5 0v-2.32c-.83-.37-1.49-1-1.8-1.82l-.05-.1-1.3-3.5C1.68 11.15 2.61 10 3.93 10c.8 0 1.53.45 1.8 1.13l1.1 2.71c.1.25.16.37.23.47q.26.36.74.46c.13.03.27.03.57.03h6.98c.57 0 .85 0 1.09-.1q.2-.08.35-.22c.18-.16.28-.4.47-.88l1-2.47c.28-.68 1-1.13 1.81-1.13 1.32 0 2.25 1.15 1.83 2.26l-1.12 3c-.2.53-.3.79-.42 1.01-.36.62-.93 1.1-1.61 1.4V20a.75.75 0 0 1-1.5 0v-2z"
              fill="currentColor"
            />
            <path
              d="M13.24 3.5h-2.48c-1.1 0-1.97 0-2.66.09s-1.28.28-1.74.72c-.47.44-.67 1-.77 1.68-.09.66-.09 1.5-.09 2.54v.88l.21.15q.64.45.95 1.2L7.9 13.8h8.2l.13-.3.1-.28 1-2.46q.31-.75.96-1.2l.21-.15v-.88c0-1.04 0-1.88-.1-2.54a2.7 2.7 0 0 0-.76-1.68 3 3 0 0 0-1.74-.72c-.69-.09-1.56-.09-2.66-.09"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconArmchair2;
