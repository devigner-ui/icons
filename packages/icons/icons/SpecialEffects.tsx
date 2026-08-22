import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSpecialEffects = forwardRef<SVGSVGElement, IconProps>(
  function IconSpecialEffects(
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M6 8v-.75a.75.75 0 0 0-.75.75zm4 .75a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0-1.5zm8.6-4.3a.75.75 0 1 0-1.2-.9zm-7.2 7.1a.75.75 0 1 0 1.2.9zm1.2-8a.75.75 0 1 0-1.2.9zm4.8 8.9a.75.75 0 1 0 1.2-.9zM5.25 16a.75.75 0 0 0 1.5 0zM6 8.75h4v-1.5H6zm0 4h4v-1.5H6zm11.4-5.2-3 4 1.2.9 3-4zm-3 4-3 4 1.2.9 3-4zm-3-3.1 3 4 1.2-.9-3-4zm3 4 3 4 1.2-.9-3-4zM5.25 8v4h1.5V8zm0 4v4h1.5v-4z"
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
              d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54"
              fill="currentColor"
            />
            <path
              d="M5.25 8c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5H6.75v2.5H10a.75.75 0 0 1 0 1.5H6.75V16a.75.75 0 1 1-1.5 0z"
              fill="currentColor"
            />
            <path
              d="M11.55 7.4a.75.75 0 0 1 1.05.15l2.4 3.2 2.4-3.2a.75.75 0 0 1 1.2.9L15.94 12l2.66 3.55a.75.75 0 1 1-1.2.9l-2.4-3.2-2.4 3.2a.75.75 0 1 1-1.2-.9L14.06 12 11.4 8.45a.75.75 0 0 1 .15-1.05"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46m3.29 7.79H10a.75.75 0 0 1 0 1.5H6.75V16a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5H6.75zm4.8-3.85a.75.75 0 0 1 1.05.15l2.4 3.2 2.4-3.2a.75.75 0 1 1 1.2.9L15.94 12l2.66 3.55a.75.75 0 1 1-1.2.9l-2.4-3.2-2.4 3.2a.75.75 0 1 1-1.2-.9L14.06 12 11.4 8.45a.75.75 0 0 1 .15-1.05"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSpecialEffects;
