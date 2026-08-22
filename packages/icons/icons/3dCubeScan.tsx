import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const Icon3dCubeScan = forwardRef<SVGSVGElement, IconProps>(
  function Icon3dCubeScan(
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
              d="M2.67 9V7c0-3 2-5 5-5h10c3 0 5 2 5 5v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 15v2c0 3 2 5 5 5h10c3 0 5-2 5-5v-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m7.37 9.26 5.3 3.07 5.26-3.05"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.67 17.77v-5.45"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m11.43 6.29-3.2 1.78a2.8 2.8 0 0 0-1.32 2.24v3.39c0 .83.6 1.84 1.32 2.24l3.2 1.78c.68.38 1.8.38 2.5 0l3.2-1.78a2.8 2.8 0 0 0 1.31-2.24v-3.39c0-.83-.59-1.84-1.32-2.24l-3.2-1.78a2.8 2.8 0 0 0-2.49 0"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="M22.67 9.75a.76.76 0 0 1-.75-.75V7c0-2.58-1.67-4.25-4.25-4.25h-10C5.09 2.75 3.42 4.42 3.42 7v2c0 .41-.34.75-.75.75A.76.76 0 0 1 1.92 9V7c0-3.44 2.31-5.75 5.75-5.75h10c3.44 0 5.75 2.31 5.75 5.75v2c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.67 22.75h-10c-3.44 0-5.75-2.31-5.75-5.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 2.58 1.67 4.25 4.25 4.25h10c2.58 0 4.25-1.67 4.25-4.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 3.44-2.31 5.75-5.75 5.75"
              fill="currentColor"
            />
            <path
              d="m17.07 8.21-3.76-2.03c-.4-.21-.87-.21-1.27 0L8.28 8.21a.9.9 0 0 0-.44.77c0 .33.17.62.44.77l3.76 2.03q.3.16.64.16t.64-.16l3.76-2.03a.9.9 0 0 0 .44-.77.9.9 0 0 0-.45-.77"
              fill="currentColor"
            />
            <path
              d="m11.41 12.47-3.5-1.75a.87.87 0 0 0-1.25.77v3.31c0 .57.32 1.09.83 1.34l3.5 1.75a.9.9 0 0 0 .84-.04.9.9 0 0 0 .41-.73v-3.31c0-.57-.31-1.08-.83-1.34"
              fill="currentColor"
            />
            <path
              d="M18.26 10.76a.9.9 0 0 0-.84-.04l-3.5 1.75a1.5 1.5 0 0 0-.83 1.34v3.31q.01.47.41.73.21.13.45.13.2 0 .39-.09l3.5-1.75c.51-.26.83-.77.83-1.34v-3.31q-.01-.47-.41-.73"
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
              d="M22.67 9.75a.76.76 0 0 1-.75-.75V7c0-2.58-1.67-4.25-4.25-4.25h-10C5.1 2.75 3.42 4.42 3.42 7v2c0 .41-.34.75-.75.75A.76.76 0 0 1 1.92 9V7c0-3.44 2.31-5.75 5.75-5.75h10c3.44 0 5.75 2.31 5.75 5.75v2c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M17.67 22.75h-10c-3.44 0-5.75-2.31-5.75-5.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 2.58 1.67 4.25 4.25 4.25h10c2.58 0 4.25-1.67 4.25-4.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 3.44-2.3 5.75-5.75 5.75"
              fill="currentColor"
            />
            <path
              d="m17.07 8.21-3.76-2.03c-.4-.21-.87-.21-1.27 0L8.27 8.21a.9.9 0 0 0-.44.76c0 .33.17.62.44.77l3.76 2.03q.3.16.64.16.33 0 .64-.16l3.76-2.03a.9.9 0 0 0 .44-.77.9.9 0 0 0-.44-.76"
              fill="currentColor"
            />
            <path
              d="m11.41 12.47-3.5-1.75a.9.9 0 0 0-.84.04.9.9 0 0 0-.4.73v3.31c0 .57.32 1.09.83 1.34l3.5 1.75a.9.9 0 0 0 .84-.04.9.9 0 0 0 .41-.73v-3.31a1.5 1.5 0 0 0-.84-1.34"
              fill="currentColor"
            />
            <path
              d="M18.26 10.76a.9.9 0 0 0-.84-.04l-3.5 1.75a1.5 1.5 0 0 0-.83 1.34v3.31q.01.47.41.73.22.13.45.13.2 0 .4-.09l3.5-1.75c.5-.26.82-.77.82-1.34v-3.31q-.01-.47-.4-.73"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default Icon3dCubeScan;
