import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTurntableMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconTurntableMinimalistic(
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
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m14 10.5 2.55-1.7a1 1 0 0 0 .45-.84V2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M17 12a5 5 0 1 1-3.5-4.77"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 14a2 2 0 0 1-2-2"
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
              d="M12 2q2.54-.02 4.25.07l1.5.15c1.22.2 2.1.56 2.79 1.24C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2"
              fill="currentColor"
            />
            <path
              d="M12 6.25A5.75 5.75 0 1 0 17.75 12a.75.75 0 0 0-1.5 0 4.25 4.25 0 1 1-2.97-4.06.75.75 0 1 0 .44-1.43A6 6 0 0 0 12 6.25"
              fill="currentColor"
            />
            <path
              d="M10.75 12a.75.75 0 0 0-1.5 0A2.75 2.75 0 0 0 12 14.75a.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25"
              fill="currentColor"
            />
            <path
              d="M17.75 7.96V2.22l-1.5-.15v5.9q0 .13-.11.2l-2.56 1.7a.75.75 0 0 0 .84 1.25l2.55-1.7c.49-.32.78-.87.78-1.46"
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
              d="M17.75 2.22v5.74c0 .59-.3 1.14-.78 1.46l-2.55 1.7a.75.75 0 0 1-.84-1.24l2.56-1.7a.3.3 0 0 0 .11-.22v-5.9Q14.53 1.99 12 2C7.29 2 4.93 2 3.46 3.46 2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54a4.8 4.8 0 0 0-2.79-1.24M6.25 12a5.75 5.75 0 0 1 7.47-5.49.75.75 0 1 1-.44 1.43A4.25 4.25 0 1 0 16.25 12a.75.75 0 0 1 1.5 0 5.75 5.75 0 1 1-11.5 0m3.75-.75c.41 0 .75.34.75.75 0 .7.56 1.25 1.25 1.25a.75.75 0 0 1 0 1.5A2.75 2.75 0 0 1 9.25 12c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTurntableMinimalistic;
