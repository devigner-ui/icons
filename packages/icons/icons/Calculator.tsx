import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCalculator = forwardRef<SVGSVGElement, IconProps>(
  function IconCalculator(
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
              d="M4.32 20.54C5.64 22 7.76 22 12 22s6.36 0 7.68-1.46C21 19.07 21 16.7 21 12s0-7.07-1.32-8.53C18.36 2 16.24 2 12 2S5.64 2 4.32 3.47C3 4.93 3 7.29 3 12s0 7.07 1.32 8.54"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 8c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06C8.31 6 8.54 6 9 6h6c.46 0 .7 0 .89.05.52.14.92.54 1.06 1.06.05.2.05.43.05.9 0 .46 0 .69-.05.88a1.5 1.5 0 0 1-1.06 1.06c-.2.05-.43.05-.89.05H9c-.46 0-.7 0-.89-.05a1.5 1.5 0 0 1-1.06-1.06C7 8.69 7 8.47 7 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="8"
              cy="13.0006"
              r="1"
              fill="currentColor"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="8"
              cy="17.0006"
              r="1"
              fill="currentColor"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="13.0006"
              r="1"
              fill="currentColor"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="17.0006"
              r="1"
              fill="currentColor"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="16"
              cy="13.0006"
              r="1"
              fill="currentColor"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="16"
              cy="17.0006"
              r="1"
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
              d="M12 22c-4.24 0-6.36 0-7.68-1.46C3 19.07 3 16.7 3 12s0-7.07 1.32-8.54S7.76 2 12 2s6.36 0 7.68 1.46C21 4.93 21 7.3 21 12s0 7.07-1.32 8.54S16.24 22 12 22"
              fill="currentColor"
            />
            <path
              d="M15 6H9c-.46 0-.7 0-.89.05a1.5 1.5 0 0 0-1.06 1.06C7 7.31 7 7.54 7 8s0 .7.05.89c.14.52.54.92 1.06 1.06.2.05.43.05.89.05h6c.46 0 .7 0 .89-.05a1.5 1.5 0 0 0 1.06-1.06c.05-.2.05-.42.05-.89 0-.46 0-.7-.05-.89a1.5 1.5 0 0 0-1.06-1.06C15.69 6 15.46 6 15 6"
              fill="currentColor"
            />
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
            <path d="M8 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
            <path d="M12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
            <path d="M12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
            <path d="M16 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
            <path d="M16 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
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
              d="M12 22c-4.24 0-6.36 0-7.68-1.46C3 19.07 3 16.7 3 12s0-7.07 1.32-8.54S7.76 2 12 2s6.36 0 7.68 1.46C21 4.93 21 7.3 21 12s0 7.07-1.32 8.54S16.24 22 12 22m3-16H9c-.46 0-.7 0-.89.05a1.5 1.5 0 0 0-1.06 1.06C7 7.31 7 7.54 7 8s0 .7.05.89c.14.52.54.92 1.06 1.06.2.05.43.05.89.05h6c.46 0 .7 0 .89-.05a1.5 1.5 0 0 0 1.06-1.06c.05-.2.05-.42.05-.89 0-.46 0-.7-.05-.89a1.5 1.5 0 0 0-1.06-1.06C15.69 6 15.46 6 15 6m-6 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCalculator;
