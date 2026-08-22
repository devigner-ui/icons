import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmartVacuumCleaner = forwardRef<SVGSVGElement, IconProps>(
  function IconSmartVacuumCleaner(
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
              d="M16.5 20.74a3 3 0 0 0 4.24-4.24"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.5 20.74a3 3 0 0 1-4.24-4.24"
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
              d="m16.44 19.43-1 1.11.56.5a3.74 3.74 0 0 0 6.25-2.79c0-.96-.36-1.84-.95-2.5l-.5-.56-1.12 1z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m7.56 19.43 1 1.11-.56.5a3.74 3.74 0 0 1-6.25-2.79c0-.96.36-1.84.95-2.5l.5-.56 1.12 1z"
              fill="currentColor"
            />
            <path
              d="M12 6.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 11.75a10 10 0 1 1-20 0 10 10 0 0 1 20 0m-13.75-3a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m4.5 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
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
              d="M9.75 9a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.2 15.9q.79-1.8.8-3.9a10 10 0 1 0-19.2 3.9l-.1.1a3.74 3.74 0 0 0 2.8 6.25c.96 0 1.84-.36 2.5-.95l.1-.1a10 10 0 0 0 7.8 0l.1.1a3.74 3.74 0 0 0 6.25-2.8c0-.96-.36-1.84-.95-2.5zm-.76 1.46a10 10 0 0 1-3.08 3.08q.51.3 1.14.31a2.25 2.25 0 0 0 1.94-3.39m-13.8 3.08a10 10 0 0 1-3.08-3.08q-.3.51-.31 1.14a2.25 2.25 0 0 0 3.39 1.94M12 5.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 10c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmartVacuumCleaner;
