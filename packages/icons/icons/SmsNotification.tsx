import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmsNotification = forwardRef<SVGSVGElement, IconProps>(
  function IconSmsNotification(
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
              d="M22.67 10.5v5c0 3.5-2 5-5 5h-10c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m7.67 9 3.13 2.5c1.03.82 2.72.82 3.75 0l1.18-.94"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.17 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M20.17 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
              fill="currentColor"
            />
            <path
              d="M20.17 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.39 9.31a1 1 0 0 1 1.28.96v5.24c0 3.5-2 5-5 5h-10c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h7.61c.65 0 1.09.6.97 1.23a3.98 3.98 0 0 0 5.14 4.57"
              fill="currentColor"
            />
            <path
              d="M12.67 12.87c-.84 0-1.69-.26-2.34-.79L7.2 9.58a.75.75 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l1.18-.94a.74.74 0 0 1 1.05.12c.26.32.21.8-.12 1.05l-1.18.94c-.64.53-1.49.79-2.33.79"
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
              d="M20.17 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
              fill="currentColor"
            />
            <path
              d="M20.17 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
              fill="currentColor"
            />
            <path
              d="M21.39 9.31q-1.06.35-2.27.06a4 4 0 0 1-2.88-4.63c.13-.64-.32-1.24-.96-1.24H7.67c-3 0-5 1.5-5 5v7c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-5.24a1 1 0 0 0-1.28-.95m-5.2 1.84-1.18.94c-.66.53-1.5.79-2.34.79s-1.69-.26-2.34-.79L7.2 9.59a.77.77 0 0 1-.12-1.06.75.75 0 0 1 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0l1.18-.94a.74.74 0 0 1 1.05.12c.26.32.21.8-.11 1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmsNotification;
