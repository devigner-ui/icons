import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMinimizeSquare3 = forwardRef<SVGSVGElement, IconProps>(
  function IconMinimizeSquare3(
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
              d="M13 22c4.06 0 6.18-.1 7.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46C2.11 4.82 2.01 6.94 2 11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m17 7-5 5m0 0h3.75M12 12V8.25"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 18c0-1.89 0-2.83.59-3.41C3.17 14 4.1 14 6 14s2.83 0 3.41.59c.59.58.59 1.52.59 3.41s0 2.83-.59 3.41C8.83 22 7.9 22 6 22s-2.83 0-3.41-.59C2 20.83 2 19.9 2 18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5 12c0 .41-.34.75-.75.75H12a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 1.5 0v1.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-3.72 3.72h1.94c.41 0 .75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M2 17.5c0-2.12 0-3.18.66-3.84S4.38 13 6.5 13s3.18 0 3.84.66.66 1.72.66 3.84 0 3.18-.66 3.84S8.62 22 6.5 22s-3.18 0-3.84-.66S2 19.62 2 17.5"
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
              d="M2 18c0-1.89 0-2.83.59-3.41C3.17 14 4.1 14 6 14s2.83 0 3.41.59c.59.58.59 1.52.59 3.41s0 2.83-.59 3.41C8.83 22 7.9 22 6 22s-2.83 0-3.41-.59C2 20.83 2 19.9 2 18"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.46 3.46C2 4.93 2 7.3 2 12v1.14a4 4 0 0 1 1.6-.55c.65-.09 1.44-.09 2.31-.09h.18c.87 0 1.66 0 2.3.09.72.1 1.47.32 2.08.94s.85 1.36.94 2.08c.09.64.09 1.43.09 2.3v.18c0 .87 0 1.66-.09 2.3a4 4 0 0 1-.55 1.6L12 22c4.71 0 7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46m12.29 9.29a.75.75 0 0 0 0-1.5h-1.94l3.72-3.72a.75.75 0 0 0-1.06-1.06l-3.72 3.72V8.25a.75.75 0 0 0-1.5 0V12c0 .41.34.75.75.75z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMinimizeSquare3;
