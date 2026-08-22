import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconNetwork = forwardRef<SVGSVGElement, IconProps>(function IconNetwork(
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
            d="M20.67 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.67 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.67 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.67 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M6.67 12h12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.67 4h-4q-3 0-3 3v10q0 3 3 3h4"
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
            d="M20.67 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5"
            fill="currentColor"
          />
          <path
            d="M20.67 6.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5"
            fill="currentColor"
          />
          <path
            d="M20.67 22.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5"
            fill="currentColor"
          />
          <path
            d="M4.67 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.67 12.75c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-7.25V7c0-1.58.67-2.25 2.25-2.25h5c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-5c-2.42 0-3.75 1.33-3.75 3.75v4.25H5.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h5.25V17c0 2.42 1.33 3.75 3.75 3.75h5c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-5c-1.58 0-2.25-.67-2.25-2.25v-4.25z"
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
            d="M20.67 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5"
            fill="currentColor"
          />
          <path
            d="M20.67 6.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5"
            fill="currentColor"
          />
          <path
            d="M20.67 22.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5"
            fill="currentColor"
          />
          <path
            d="M4.67 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5"
            fill="currentColor"
          />
          <path
            d="M19.67 12.75c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-7.25V7c0-1.58.67-2.25 2.25-2.25h5c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-5c-2.42 0-3.75 1.33-3.75 3.75v4.25H5.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h5.25V17c0 2.42 1.33 3.75 3.75 3.75h5c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-5c-1.58 0-2.25-.67-2.25-2.25v-4.25z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconNetwork;
