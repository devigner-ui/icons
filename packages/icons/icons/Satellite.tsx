import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSatellite = forwardRef<SVGSVGElement, IconProps>(
  function IconSatellite(
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
              d="M20.47 10.92s-1.85-.62-4.31-3.08-3.08-4.31-3.08-4.31"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M1.64 9.03a.75.75 0 0 0 .72 1.31zm12.02 12.6a.75.75 0 0 0 1.3.73zm3.03-13.26a.75.75 0 0 0-1.06-1.06zM4.47 18.47a.75.75 0 0 0 1.06 1.06zm8.25-15.6L1.64 9.03l.72 1.31L13.45 4.2zm7.1 7.68-6.16 11.09 1.3.72 6.17-11.08zm-4.19-3.24L4.47 18.47l1.06 1.06L16.69 8.37z"
              fill="currentColor"
            />
            <path
              d="M13.08 10.92a5.22 5.22 0 1 0 7.39-7.39 5.22 5.22 0 0 0-7.39 7.39"
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
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.09 5.04 2.33 10.36A.75.75 0 0 1 1.67 9L14.1 2.87l.14 1 .04.14q.06.2.28.63c.32.58.94 1.48 2.13 2.67s2.1 1.8 2.67 2.13a4 4 0 0 0 .76.32l1.01.14L15 22.33a.75.75 0 1 1-1.35-.66l5.32-10.76-.32-.16c-.62-.34-1.45-.9-2.47-1.86L5.53 19.53a.75.75 0 0 1-1.06-1.06L15.11 7.83a13 13 0 0 1-2.02-2.79"
              fill="currentColor"
            />
            <path
              d="m20.82 10.53.31-.63-1-.14h-.02L20 9.72a4 4 0 0 1-.63-.28c-.58-.32-1.48-.94-2.67-2.13a12 12 0 0 1-2.13-2.67 4 4 0 0 1-.32-.75v-.01l-.14-1.01-.63.3a5.22 5.22 0 0 1 7.35 7.36"
              fill="currentColor"
            />
            <path
              d="m18.31 12.22.65-1.3-.32-.17a13 13 0 0 1-2.47-1.86l-2.52 2.52a5.2 5.2 0 0 0 4.66.8"
              fill="currentColor"
            />
            <path
              d="m12.59 10.35 2.52-2.52a13 13 0 0 1-2.02-2.79l-1.3.65a5.2 5.2 0 0 0 .8 4.66"
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
              d="m21.56 10.5.27.06a6 6 0 0 0-8.4-8.38l.08.26.28.85.02.05.09.2q.12.3.44.84c.43.71 1.16 1.74 2.35 2.93a16 16 0 0 0 2.93 2.35 8 8 0 0 0 1.08.55h.01zm-7.9 11.14 4.91-8.85q1.36-.37 2.47-1.35l-6.07 10.92a.75.75 0 0 1-1.31-.72m-.34-9.9 2.85-2.85a16 16 0 0 0 3.25 2.37l-.85 1.53a6 6 0 0 1-5.25-1.05m-1.06-1.06a6 6 0 0 0 1.06 1.06l-7.79 7.79a.75.75 0 0 1-1.06-1.06zm-1.05-5.25 1.53-.85.31.57c.43.7 1.08 1.63 2.06 2.68l-2.85 2.85a6 6 0 0 1-1.05-5.25m0 0q.37-1.36 1.35-2.47L1.64 9.03a.75.75 0 0 0 .72 1.31z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSatellite;
