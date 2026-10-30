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
        {variant === "Broken" ? (
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
            d="M20.47 10.92s-1.85-.62-4.31-3.08-3.08-4.31-3.08-4.31"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M20.47 10.92a5.22 5.22 0 0 1-7.39-7.39m7.39 7.39A5.22 5.22 0 0 0 18 2.14m2.47 8.78L17.65 16M13.08 3.53A5 5 0 0 1 15 2.31m-1.92 1.22L6.84 7m9.32.84L11 13"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m2 9.69 3-1.67M14.31 22l2.19-4M5 19l4-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      ) : !fill ? (
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
              d="M13.44 4.69 2.68 10.01a.75.75 0 0 1-.66-1.36l12.43-6.13.14 1 .04.14q.06.2.28.63c.32.58.94 1.48 2.13 2.67s2.1 1.8 2.67 2.13a4 4 0 0 0 .76.32l1.01.14-6.13 12.43a.75.75 0 1 1-1.35-.66l5.32-10.76-.32-.16c-.62-.34-1.45-.9-2.47-1.86L5.88 19.18a.75.75 0 0 1-1.06-1.06L15.46 7.48a13 13 0 0 1-2.02-2.79"
              fill="currentColor"
            />
            <path
              d="m21.17 10.18.31-.63-1-.14h-.02l-.11-.04a4 4 0 0 1-.63-.28c-.58-.32-1.48-.94-2.67-2.13a12 12 0 0 1-2.13-2.67 4 4 0 0 1-.32-.75v-.01l-.14-1.01-.63.3a5.22 5.22 0 0 1 7.35 7.36"
              fill="currentColor"
            />
            <path
              d="m18.66 11.87.65-1.3-.32-.17a13 13 0 0 1-2.47-1.86L14 11.06a5.2 5.2 0 0 0 4.66.8"
              fill="currentColor"
            />
            <path
              d="m12.94 10 2.52-2.52a13 13 0 0 1-2.02-2.79l-1.3.65a5.2 5.2 0 0 0 .8 4.66"
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
              d="m21.41 10.65.27.06a6 6 0 0 0-8.4-8.38l.08.26.28.85.02.05.09.2q.12.3.44.84c.43.71 1.16 1.74 2.35 2.93a16 16 0 0 0 2.93 2.35 8 8 0 0 0 1.08.55h.01zm-7.9 11.14 4.91-8.85q1.36-.37 2.47-1.35l-6.07 10.92a.75.75 0 0 1-1.31-.72m-.34-9.9 2.85-2.85a16 16 0 0 0 3.25 2.37l-.85 1.53a6 6 0 0 1-5.25-1.05m-1.06-1.06a6 6 0 0 0 1.06 1.06l-7.79 7.79a.75.75 0 0 1-1.06-1.06zm-1.05-5.25 1.53-.85.31.57c.43.7 1.08 1.63 2.06 2.68l-2.85 2.85a6 6 0 0 1-1.05-5.25m0 0q.37-1.36 1.35-2.47L1.49 9.18a.75.75 0 0 0 .72 1.31z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSatellite;
