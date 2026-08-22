import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRefreshSquare2 = forwardRef<SVGSVGElement, IconProps>(
  function IconRefreshSquare2(
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
              d="M7.38 11.63h-.75zm0 .93-.56.5a.75.75 0 0 0 1.08.04zm2.14-1.02a.75.75 0 0 0-1.04-1.08zM6.56 10.5a.75.75 0 1 0-1.12 1zM14.93 9a.75.75 0 1 0 1.1-1zm-2.89-2.75a5.4 5.4 0 0 0-5.41 5.38h1.5a3.9 3.9 0 0 1 3.91-3.88zm-5.41 5.38v.93h1.5v-.93zM7.9 13.1l1.62-1.56-1.04-1.08L6.86 12zm.04-1.04L6.56 10.5l-1.12 1 1.38 1.55zm8.1-4.07a5.4 5.4 0 0 0-4-1.74v1.5c1.15 0 2.18.49 2.9 1.26z"
              fill="currentColor"
            />
            <path
              d="m16.62 11.44.56-.5a.75.75 0 0 0-1.08-.04zm-2.14 1.02a.75.75 0 1 0 1.04 1.08zm2.96 1.04a.75.75 0 0 0 1.12-1zM9.04 15a.75.75 0 0 0-1.09 1.03zm2.9 2.75a5.4 5.4 0 0 0 5.43-5.38h-1.5a3.9 3.9 0 0 1-3.94 3.88zm5.43-5.38v-.93h-1.5v.93zM16.1 10.9l-1.62 1.56 1.04 1.08 1.62-1.55zm-.04 1.04 1.38 1.56 1.12-1-1.38-1.55zm-8.1 4.1a5.5 5.5 0 0 0 3.97 1.71v-1.5A4 4 0 0 1 9.05 15z"
              fill="currentColor"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46"
              fill="currentColor"
            />
            <path
              d="M12.01 5.25a6.6 6.6 0 0 0-6.55 5.83H5a.75.75 0 0 0-.53 1.28l1.17 1.17c.3.3.77.3 1.06 0l1.17-1.17a.75.75 0 0 0-.53-1.28h-.37a5.09 5.09 0 0 1 8.88-2.59.75.75 0 1 0 1.13-.98A6.6 6.6 0 0 0 12 5.25"
              fill="currentColor"
            />
            <path
              d="M18.36 10.47a.75.75 0 0 0-1.06 0l-1.17 1.17a.75.75 0 0 0 .53 1.28h.37a5.09 5.09 0 0 1-8.88 2.59.75.75 0 0 0-1.13.98 6.58 6.58 0 0 0 11.52-3.57H19a.75.75 0 0 0 .53-1.28z"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46m2 7.62a6.59 6.59 0 0 1 11.52-3.57.75.75 0 0 1-1.13.98 5.08 5.08 0 0 0-8.88 2.6h.37a.75.75 0 0 1 .53 1.27L6.7 13.53c-.3.3-.77.3-1.06 0l-1.17-1.17A.75.75 0 0 1 5 11.08zm11.84-.61c.3-.3.77-.3 1.06 0l1.17 1.17a.75.75 0 0 1-.53 1.28h-.46a6.59 6.59 0 0 1-11.52 3.57.75.75 0 0 1 1.13-.98 5.08 5.08 0 0 0 8.88-2.6h-.37a.75.75 0 0 1-.53-1.27z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRefreshSquare2;
