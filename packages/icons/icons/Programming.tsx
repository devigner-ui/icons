import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconProgramming = forwardRef<SVGSVGElement, IconProps>(
  function IconProgramming(
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
              d="M17 15h-5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m7 10 .23.2c1.29 1.06 1.93 1.6 1.93 2.3s-.64 1.24-1.93 2.3L7 15"
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              fill="currentColor"
            />
            <path
              d="M6.42 9.52a.75.75 0 0 1 1.06-.1l.28.23c.6.5 1.12.94 1.47 1.33.38.42.68.9.68 1.52s-.3 1.1-.68 1.52c-.35.4-.87.82-1.47 1.33l-.28.23a.75.75 0 0 1-.96-1.16l.23-.2c.66-.54 1.1-.9 1.37-1.2.26-.3.29-.43.29-.52s-.03-.22-.29-.51c-.28-.3-.7-.67-1.37-1.22l-.23-.2a.75.75 0 0 1-.1-1.05"
              fill="currentColor"
            />
            <path
              d="M17.75 15c0 .41-.34.75-.75.75h-5a.75.75 0 0 1 0-1.5h5c.41 0 .75.34.75.75"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46m2.96 6.06a.75.75 0 0 1 1.06-.1l.28.23c.6.5 1.12.94 1.47 1.33.38.42.68.9.68 1.52s-.3 1.1-.68 1.52c-.35.4-.87.82-1.47 1.33l-.28.23a.75.75 0 0 1-.96-1.16l.23-.2c.66-.54 1.1-.9 1.37-1.2.26-.3.29-.43.29-.52s-.03-.22-.29-.51c-.28-.3-.7-.67-1.37-1.22l-.23-.2a.75.75 0 0 1-.1-1.05M17.75 15c0 .41-.34.75-.75.75h-5a.75.75 0 0 1 0-1.5h5c.41 0 .75.34.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconProgramming;
