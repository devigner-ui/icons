import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVolumeUp = forwardRef<SVGSVGElement, IconProps>(function IconVolumeUp(
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
            d="M2.67 9.96v4.08q0 3.06 3.06 3.06h1.46q.59 0 1.08.31l2.98 1.86c2.58 1.61 4.68.44 4.68-2.6V7.32c0-3.04-2.11-4.21-4.68-2.6L8.27 6.59q-.5.3-1.08.31H5.73q-3.06 0-3.06 3.06"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M18.67 12h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.67 14v-4"
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
            d="M22.67 11.25h-1.25V10a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.25h-1.25a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h1.25V14c0 .41.34.75.75.75s.75-.34.75-.75v-1.25h1.25c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.42 7.41v9.18c0 1.72-.62 3.01-1.73 3.63a3 3 0 0 1-1.47.37q-1.21 0-2.54-.82l-2.92-1.83a1.3 1.3 0 0 0-.66-.19h-.93V6.25h.93q.35 0 .66-.19l2.92-1.83c1.46-.91 2.89-1.07 4.01-.45s1.73 1.91 1.73 3.63"
            fill="currentColor"
          />
          <path
            d="M6.17 6.25v11.5h-.5c-2.42 0-3.75-1.33-3.75-3.75v-4c0-2.42 1.33-3.75 3.75-3.75z"
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
            d="M22.67 11.25h-1.25V10a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.25h-1.25a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h1.25V14c0 .41.34.75.75.75s.75-.34.75-.75v-1.25h1.25c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
            fill="currentColor"
          />
          <path
            d="M14.69 3.78c-1.12-.62-2.55-.46-4.01.45L7.76 6.06q-.3.19-.66.19H5.67c-2.42 0-3.75 1.33-3.75 3.75v4c0 2.42 1.33 3.75 3.75 3.75H7.1q.35 0 .66.19l2.92 1.83q1.33.82 2.54.82a3 3 0 0 0 1.47-.37c1.11-.62 1.73-1.91 1.73-3.63V7.41c0-1.72-.62-3.01-1.73-3.63"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconVolumeUp;
