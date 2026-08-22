import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTextSquare2 = forwardRef<SVGSVGElement, IconProps>(
  function IconTextSquare2(
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
              d="M21 9.3c-.06-2.51-.3-3.98-1.3-4.98C18.38 3 16.25 3 12 3S5.62 3 4.3 4.32c-1 1-1.24 2.47-1.3 4.98m18 5.4c-.06 2.51-.3 3.98-1.3 4.98C18.38 21 16.25 21 12 21s-6.38 0-7.7-1.32c-1-1-1.24-2.47-1.3-4.98"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M8 8h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 16V8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M22 12h-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M4 12H2"
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
              d="M7.75 7a.75.75 0 1 0 0 1.5H11v7.25a.75.75 0 0 0 1.5 0V8.5h3.25a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M20 11.75c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M.75 11a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.7 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
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
              d="m14.47 2-.17.02Q13.18 2 11.8 2h-.1q-1.38 0-2.5.02L9.03 2c-2.48.06-4.25.28-5.5 1.52v.01C2.27 4.79 2.05 6.56 2 9.04l.01.17v.3h1.74a2.25 2.25 0 0 1 0 4.5H2.01l-.01.47c.06 2.48.28 4.25 1.52 5.5h.01c1.25 1.25 3.02 1.47 5.5 1.53l.17-.01 2.5.01h.1l2.5-.01.17.01c2.48-.06 4.25-.28 5.5-1.52v-.02c1.25-1.24 1.47-3 1.53-5.5l-.01-.16V14h-1.74a2.25 2.25 0 0 1 0-4.5h1.74l.01-.47c-.06-2.48-.28-4.25-1.52-5.5h-.01c-1.25-1.25-3.02-1.47-5.5-1.53M7.75 7a.75.75 0 1 0 0 1.5H11v7.25a.75.75 0 0 0 1.5 0V8.5h3.25a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M19 11.75c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M1.75 11a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTextSquare2;
