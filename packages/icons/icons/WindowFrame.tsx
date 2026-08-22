import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWindowFrame = forwardRef<SVGSVGElement, IconProps>(
  function IconWindowFrame(
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path d="M7 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path d="M10 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path d="M13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 8.75a.75.75 0 1 0 0 1.5zm20 1.5a.75.75 0 0 0 0-1.5zM8.25 21a.75.75 0 0 0 1.5 0zm1.5-11a.75.75 0 1 0-1.5 0zM2 10.25h20v-1.5H2zM9.75 21V10h-1.5v11z"
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
              fill="currentColor"
              d="M12 2c4.71 0 7.07 0 8.54 1.46 1.08 1.08 1.36 2.65 1.43 5.29l.03.75H2.03v-.75c.07-2.64.35-4.2 1.43-5.29C4.93 2 7.3 2 12 2"
              opacity={duotone ? "0.5" : "1"}
            />
            <path
              fill="currentColor"
              d="M13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            />
            <path
              fill="currentColor"
              d="M2 12c0 4.71 0 7.07 1.46 8.54 1.01 1 2.45 1.32 4.79 1.42L9 22V9.5H2.03l-.03.75z"
              opacity={duotone ? "0.7" : "1"}
            />
            <path
              fill="currentColor"
              d="M22 12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22H9V9.5h13z"
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
              d="M3.46 3.46C2.38 4.55 2.1 6.11 2.03 8.75h19.94c-.07-2.64-.35-4.2-1.43-5.29C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46M2 12v-1.75h6.25v11.71c-2.34-.1-3.78-.41-4.79-1.42C2 19.07 2 16.7 2 12m4-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
            <path
              d="M22 12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22H9.75V10.24H22z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWindowFrame;
