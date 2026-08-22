import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBatteryChargeMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconBatteryChargeMinimalistic(
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
              d="M2 12c0-3.77 0-5.66 1.17-6.83S6.23 4 10 4h1.5c3.77 0 5.66 0 6.83 1.17S19.5 8.23 19.5 12s0 5.66-1.17 6.83S15.27 20 11.5 20H10c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M22 14v-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M11.5 9 9 12h3.5L10 15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
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
              d="M3.17 5.17C2 6.34 2 8.23 2 12s0 5.66 1.17 6.83S6.23 20 10 20h1.5c3.77 0 5.66 0 6.83-1.17S19.5 15.77 19.5 12s0-5.66-1.17-6.83S15.27 4 11.5 4H10C6.23 4 4.34 4 3.17 5.17"
              fill="currentColor"
            />
            <path
              d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0z"
              fill="currentColor"
            />
            <path
              d="M12.08 9.48a.75.75 0 0 0-1.16-.96l-2.5 3A.75.75 0 0 0 9 12.75h1.9l-1.48 1.77a.75.75 0 0 0 1.16.96l2.5-3a.75.75 0 0 0-.58-1.23h-1.9z"
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
              d="M2 12c0-3.77 0-5.66 1.17-6.83S6.23 4 10 4h1.5c3.77 0 5.66 0 6.83 1.17S19.5 8.23 19.5 12s0 5.66-1.17 6.83S15.27 20 11.5 20H10c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12m9.98-3.58c.32.27.36.74.1 1.06l-1.48 1.77h1.9a.75.75 0 0 1 .58 1.23l-2.5 3a.75.75 0 0 1-1.16-.96l1.48-1.77H9a.75.75 0 0 1-.58-1.23l2.5-3a.75.75 0 0 1 1.06-.1"
              fill="currentColor"
            />
            <path
              d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBatteryChargeMinimalistic;
