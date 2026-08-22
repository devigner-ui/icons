import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUSBSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconUSBSquare(
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
            <circle
              cx="12"
              cy="17.0004"
              r="1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              cx="8"
              cy="9.00037"
              r="1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M11.25 16a.75.75 0 0 0 1.5 0zM12 6l.53-.53a.75.75 0 0 0-1.06 0zm.47 1.53a.75.75 0 1 0 1.06-1.06zm-2-1.06a.75.75 0 0 0 1.06 1.06zm1 .06 1 1 1.06-1.06-1-1zm0-1.06-1 1 1.06 1.06 1-1zM12.75 16v-1.87h-1.5V16zm0-1.87V6h-1.5v8.13z"
              fill="currentColor"
            />
            <path
              d="M8 10v1.03a2 2 0 0 0 1.4 1.9l1.4.45c.72.22 1.2.88 1.2 1.62"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M16 11v1.03a2 2 0 0 1-1.4 1.9l-1.4.45A1.7 1.7 0 0 0 12 16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M15 10c0-.47 0-.7.15-.85S15.53 9 16 9s.7 0 .85.15.15.38.15.85 0 .7-.15.85-.38.15-.85.15-.7 0-.85-.15S15 10.47 15 10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
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
              d="m13.53 6.47-1-1a.75.75 0 0 0-1.06 0l-1 1a.75.75 0 0 0 .78 1.24v5.03l-.22-.08-1.4-.44a1.25 1.25 0 0 1-.88-1.19v-.45a1.75 1.75 0 1 0-1.5 0v.45c0 1.2.78 2.27 1.93 2.62l1.4.44c.4.13.67.5.67.91v.42a1.75 1.75 0 1 0 1.64.08q.18-.3.53-.4l1.4-.45a2.75 2.75 0 0 0 1.93-2.62v-.32a1.2 1.2 0 0 0 .98-1.06q.02-.3.02-.62v-.06q0-.32-.02-.62a1.2 1.2 0 0 0-.35-.73 1.2 1.2 0 0 0-.73-.34q-.3-.04-.62-.03h-.06q-.33 0-.62.03c-.22.02-.5.1-.73.34-.24.23-.32.51-.34.73q-.04.3-.03.62v.06q0 .33.03.62c.02.22.1.5.34.73q.32.29.63.33v.32c0 .55-.36 1.03-.88 1.2l-1.4.43-.22.08V7.71a.75.75 0 0 0 .78-1.24"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46m10.07 3.01-1-1a.75.75 0 0 0-1.06 0l-1 1a.75.75 0 0 0 .78 1.24v5.03l-.22-.08-1.4-.44a1.25 1.25 0 0 1-.88-1.19v-.45a1.75 1.75 0 1 0-1.5 0v.45c0 1.2.78 2.27 1.93 2.62l1.4.44c.4.13.67.5.67.91v.42a1.75 1.75 0 1 0 1.64.08q.18-.3.53-.4l1.4-.45a2.75 2.75 0 0 0 1.93-2.62v-.32a1.2 1.2 0 0 0 .98-1.06q.02-.3.02-.62v-.06q0-.32-.02-.62a1.2 1.2 0 0 0-.35-.73 1.2 1.2 0 0 0-.73-.34q-.3-.04-.62-.03h-.06q-.33 0-.62.03c-.22.02-.5.1-.73.34-.24.23-.32.51-.34.73q-.04.3-.03.62v.06q0 .33.03.62c.02.22.1.5.34.73q.32.29.63.33v.32c0 .55-.36 1.03-.88 1.2l-1.4.43-.22.08V7.71a.75.75 0 0 0 .78-1.24"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUSBSquare;
