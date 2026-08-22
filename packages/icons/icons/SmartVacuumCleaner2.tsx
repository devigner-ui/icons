import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmartVacuumCleaner2 = forwardRef<SVGSVGElement, IconProps>(
  function IconSmartVacuumCleaner2(
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
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 18v-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m2 22 2.5-2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m22 22-2.5-2.5"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="m6.06 19-3.53 3.53a.75.75 0 0 1-1.06-1.06L5 17.94z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="m17.94 19 3.53 3.53a.75.75 0 1 0 1.06-1.06L19 17.94z"
              fill="currentColor"
            />
            <path
              d="M9.75 8.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 21.5a10 10 0 1 0 0-20 10 10 0 0 0 0 20M8.25 8.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m4.5 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
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
              d="M12 6.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.52 19.33a9.96 9.96 0 0 1-13.04 0l-2.95 2.95a.75.75 0 0 1-1.06-1.06l2.95-2.95a10 10 0 1 1 15.16 0l2.95 2.95a.75.75 0 0 1-1.06 1.06zM8.25 8.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m4.5 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmartVacuumCleaner2;
