import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloset2 = forwardRef<SVGSVGElement, IconProps>(function IconCloset2(
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
            d="M19 22v-1.5M5 22v-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 20V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 9v4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 9v4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M2 10c0-3.77 0-5.66 1.17-6.83S6.23 2 10 2h4c3.77 0 5.66 0 6.83 1.17S22 6.23 22 10v2c0 3.77 0 5.66-1.17 6.83S17.77 20 14 20h-4c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2h-2C6.23 2 4.34 2 3.17 3.17S2 6.23 2 10v2c0 3.77 0 5.66 1.17 6.83q.45.45 1.08.7V22a.75.75 0 0 0 1.5 0v-2.13C6.82 20 8.19 20 10 20h2zM9 8.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0V9c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14 20h-2V2h2c3.77 0 5.66 0 6.83 1.17S22 6.23 22 10v2c0 3.77 0 5.66-1.17 6.83q-.45.45-1.08.7V22a.75.75 0 0 1-1.5 0v-2.13C17.18 20 15.81 20 14 20"
            fill="currentColor"
          />
          <path
            d="M15.75 9a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"
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
            d="M11.25 2H10C6.23 2 4.34 2 3.17 3.17S2 6.23 2 10v2c0 3.77 0 5.66 1.17 6.83q.45.45 1.08.7V22a.75.75 0 0 0 1.5 0v-2.13C6.82 20 8.19 20 10 20h1.25zM9 8.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0V9c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.75 20H14c1.8 0 3.18 0 4.25-.13V22a.75.75 0 0 0 1.5 0v-2.47q.62-.25 1.08-.7C22 17.66 22 15.77 22 12v-2c0-3.77 0-5.66-1.17-6.83S17.77 2 14 2h-1.25zM15 8.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0V9c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCloset2;
