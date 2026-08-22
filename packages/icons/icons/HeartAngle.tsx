import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHeartAngle = forwardRef<SVGSVGElement, IconProps>(
  function IconHeartAngle(
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
              d="m12 5.5 2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m8.96 18.91.47-.59zM12 5.51l-.54.51a.75.75 0 0 0 1.08 0zm3.04 13.4.46.59zm-5.61-.59c-1.52-1.2-3.18-2.36-4.5-3.84a7.8 7.8 0 0 1-2.18-5.34h-1.5a9.3 9.3 0 0 0 2.57 6.34c1.43 1.6 3.25 2.9 4.68 4.02zM2.75 9.14a5.1 5.1 0 0 1 2.87-4.72c1.62-.73 3.78-.54 5.84 1.6l1.08-1.04C10.1 2.44 7.26 2.03 5 3.06a6.6 6.6 0 0 0-3.75 6.08zM8.5 19.5c.51.4 1.06.83 1.62 1.16a3.7 3.7 0 0 0 1.88.59v-1.5q-.45 0-1.13-.38-.67-.41-1.44-1.05zm7 0c1.43-1.12 3.25-2.41 4.68-4.02a9.3 9.3 0 0 0 2.57-6.34h-1.5c0 2.2-.9 3.89-2.19 5.34-1.31 1.48-2.97 2.65-4.49 3.84zm7.25-10.36A6.6 6.6 0 0 0 19 3.06c-2.26-1.03-5.1-.62-7.54 1.92l1.08 1.04c2.06-2.14 4.22-2.33 5.84-1.6a5.1 5.1 0 0 1 2.87 4.72zm-8.18 9.18q-.78.64-1.44 1.05-.68.39-1.13.38v1.5a3.7 3.7 0 0 0 1.88-.59 15 15 0 0 0 1.62-1.16z"
              fill="currentColor"
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
              d="M2 9.14c0 4.4 3.3 6.94 6.1 9.1l.86.67C10 19.73 11 20.5 12 20.5v-15C7.5.83 2 4.27 2 9.14"
              fill="currentColor"
            />
            <path
              d="m14 7.5-2-2v15c1 0 2-.77 3.04-1.59l.85-.66C18.7 16.08 22 13.55 22 9.14c0-4.46-4.63-7.74-8.87-4.63l1.93 1.93A.75.75 0 0 1 14 7.5"
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
              d="M8.1 18.25C5.3 16.08 2 13.55 2 9.14 2 4.27 7.5.83 12 5.5l2 2a.75.75 0 0 0 1.06-1.06L13.13 4.5C17.37 1.4 22 4.68 22 9.14c0 4.4-3.3 6.94-6.1 9.1l-.86.67C14 19.73 13 20.5 12 20.5s-2-.77-3.04-1.59z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHeartAngle;
