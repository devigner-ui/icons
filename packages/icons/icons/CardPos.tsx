import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCardPos = forwardRef<SVGSVGElement, IconProps>(function IconCardPos(
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
            d="M4.6 15.88 16.55 3.93"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m11.77 18.28 1.2-1.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m14.46 15.59 2.4-2.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m4.27 10.24 6.64-6.64c2.12-2.12 3.18-2.13 5.28-.03l4.91 4.9c2.1 2.1 2.1 3.17-.03 5.29l-6.64 6.64c-2.12 2.12-3.18 2.13-5.28.03l-4.9-4.91c-2.1-2.1-2.1-3.15.02-5.28"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.67 22h20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M21.92 22H3.42a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h18.5c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m21.26 13.7-7.23 7.23a3.6 3.6 0 0 1-5.12.01L4.3 16.33 16.66 3.97l4.61 4.61a3.6 3.6 0 0 1-.01 5.12"
            fill="currentColor"
          />
          <path
            d="M16.66 3.97 4.29 16.33l-.91-.91a3.6 3.6 0 0 1 .01-5.12l7.23-7.23a3.6 3.6 0 0 1 5.12-.01z"
            fill="currentColor"
          />
          <path
            d="m13.56 17.6-1.35 1.35a.7.7 0 0 1-1.01 0 .7.7 0 0 1 0-1.01l1.35-1.35a.7.7 0 0 1 1.01 0c.28.28.28.73 0 1.01"
            fill="currentColor"
          />
          <path
            d="m17.94 13.22-2.69 2.69a.7.7 0 0 1-1.01 0 .7.7 0 0 1 0-1.01l2.69-2.69a.7.7 0 0 1 1.01 0c.27.28.27.73 0 1.01"
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
            d="M22.67 21.25c0 .41-.34.75-.75.75H3.42a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h18.5c.41 0 .75.34.75.75"
            fill="currentColor"
          />
          <path
            d="M16.06 4.52 5.32 15.26c-.4.41-1.07.41-1.47 0a3.6 3.6 0 0 1 0-5.05l7.14-7.15a3.57 3.57 0 0 1 5.06 0c.41.39.41 1.06.01 1.46"
            fill="currentColor"
          />
          <path
            d="m21.5 8.49-3.06-3.05a1.03 1.03 0 0 0-1.47 0L6.23 16.18c-.4.4-.4 1.06 0 1.47l3.05 3.06a3.6 3.6 0 0 0 5.06 0l7.14-7.15a3.56 3.56 0 0 0 .01-5.07m-8.07 9.03-1.2 1.22a.66.66 0 0 1-.93 0 .66.66 0 0 1 0-.92l1.22-1.22a.67.67 0 0 1 .91 0c.25.25.25.68 0 .92m3.97-3.97L14.96 16a.7.7 0 0 1-.92 0 .66.66 0 0 1 0-.92l2.45-2.45a.67.67 0 0 1 .91 0c.25.26.25.67 0 .92"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCardPos;
