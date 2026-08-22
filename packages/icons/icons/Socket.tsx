import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSocket = forwardRef<SVGSVGElement, IconProps>(function IconSocket(
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
          <circle
            cx="12"
            cy="12.0001"
            r="6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 18v-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 7.5V6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <circle cx="14" cy="12.0001" r="1" fill="currentColor" />
          <circle cx="10" cy="12.0001" r="1" fill="currentColor" />
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.25 7.5V5.3a6.75 6.75 0 0 0 0 13.4v-2.2a.75.75 0 0 1 1.5 0v2.2a6.75 6.75 0 0 0 0-13.4v2.2a.75.75 0 0 1-1.5 0M15 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
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
            d="M6.75 12a5.25 5.25 0 0 1 4.5-5.2v.7a.75.75 0 0 0 1.5 0v-.7a5.25 5.25 0 0 1 0 10.4v-.7a.75.75 0 1 0-1.5 0v.7a5.25 5.25 0 0 1-4.5-5.2M15 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46M12 5.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSocket;
