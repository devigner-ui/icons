import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSafeSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconSafeSquare(
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
              d="M2 12c0-4.7 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 7v10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M11 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.5 9.5 18 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m10 16 1.5-1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.5 9.5 10 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m18 16-1.5-1.5"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46"
              fill="currentColor"
            />
            <path
              d="M6.75 7a.75.75 0 1 0-1.5 0v10a.75.75 0 0 0 1.5 0z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.47 7.47c.3-.3.77-.3 1.06 0l1.4 1.4a3.7 3.7 0 0 1 4.14 0l1.4-1.4a.75.75 0 1 1 1.06 1.06l-1.4 1.4a3.7 3.7 0 0 1 0 4.14l1.4 1.4a.75.75 0 1 1-1.06 1.06l-1.4-1.4a3.7 3.7 0 0 1-4.14 0l-1.4 1.4a.75.75 0 1 1-1.06-1.06l1.4-1.4a3.7 3.7 0 0 1 0-4.14l-1.4-1.4a.75.75 0 0 1 0-1.06M11.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
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
              d="M11.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46M6.75 7a.75.75 0 1 0-1.5 0v10a.75.75 0 0 0 1.5 0zm3.78.47a.75.75 0 1 0-1.06 1.06l1.4 1.4a3.7 3.7 0 0 0 0 4.14l-1.4 1.4a.75.75 0 1 0 1.06 1.06l1.4-1.4a3.7 3.7 0 0 0 4.14 0l1.4 1.4a.75.75 0 1 0 1.06-1.06l-1.4-1.4a3.7 3.7 0 0 0 0-4.14l1.4-1.4a.75.75 0 0 0-1.06-1.06l-1.4 1.4a3.7 3.7 0 0 0-4.14 0z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSafeSquare;
