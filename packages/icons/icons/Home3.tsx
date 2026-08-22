import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHome3 = forwardRef<SVGSVGElement, IconProps>(function IconHome3(
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
            d="M10.74 2.82 3.81 8.37a3.4 3.4 0 0 0-1.11 2.91l1.33 7.96a3.2 3.2 0 0 0 3.04 2.57h11.2a3.2 3.2 0 0 0 3.04-2.57l1.33-7.96a3.4 3.4 0 0 0-1.11-2.91L14.6 2.83a3.2 3.2 0 0 0-3.86-.01"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 15.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
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
            d="M10.74 2.82 3.81 8.37a3.4 3.4 0 0 0-1.11 2.91l1.33 7.96a3.2 3.2 0 0 0 3.04 2.57h11.2a3.2 3.2 0 0 0 3.04-2.57l1.33-7.96a3.4 3.4 0 0 0-1.11-2.91L14.6 2.83a3.2 3.2 0 0 0-3.86-.01"
            fill="currentColor"
          />
          <path
            d="M12.67 15.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
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
            d="M21.53 8.37 14.6 2.83a3.2 3.2 0 0 0-3.86-.01L3.81 8.37a3.4 3.4 0 0 0-1.11 2.91l1.33 7.96a3.2 3.2 0 0 0 3.04 2.57h11.2a3.2 3.2 0 0 0 3.04-2.57l1.33-7.96a3.4 3.4 0 0 0-1.11-2.91m-8.86 7.13a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHome3;
