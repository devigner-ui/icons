import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRefreshCircle2 = forwardRef<SVGSVGElement, IconProps>(
  function IconRefreshCircle2(
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
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m15.98 8.71-.44-.45c-1.96-2-5.12-2-7.08 0a5.2 5.2 0 0 0 0 7.24c1.96 2 5.12 2 7.08 0a5.2 5.2 0 0 0 1.42-4.26m-.98-2.53h-2.65m2.65 0V6"
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="10"
              fill="currentColor"
            />
            <path
              d="M16.4 6.29a.75.75 0 0 0-1.28-.53l-.76.77a5.7 5.7 0 0 0-6.43 1.2 5.95 5.95 0 0 0 0 8.3 5.67 5.67 0 0 0 8.14 0 6 6 0 0 0 1.64-4.88.75.75 0 0 0-1.5.18A4.4 4.4 0 0 1 15 14.98a4.17 4.17 0 0 1-6 0 4.45 4.45 0 0 1 0-6.2 4.2 4.2 0 0 1 4.22-1.08l-.76.78A.75.75 0 0 0 13 9.75h2.65c.42 0 .75-.34.75-.75z"
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20m3.93-16.4c.29.1.47.38.47.69V9c0 .41-.33.75-.75.75H13a.75.75 0 0 1-.54-1.27l.76-.78A4.2 4.2 0 0 0 9 8.79a4.45 4.45 0 0 0 0 6.19 4.17 4.17 0 0 0 6 0 4.4 4.4 0 0 0 1.2-2.48c.07-.41.4-.77.82-.77.4 0 .74.33.7.73a6 6 0 0 1-1.65 3.56 5.67 5.67 0 0 1-8.14 0 5.95 5.95 0 0 1 0-8.28 5.7 5.7 0 0 1 6.43-1.21l.76-.77a.8.8 0 0 1 .81-.17"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRefreshCircle2;
