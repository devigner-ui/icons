import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHomeDot = forwardRef<SVGSVGElement, IconProps>(function IconHomeDot(
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
      {variant === "Broken" ? (
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
            d="m3.24 8.29-.1.08a3.4 3.4 0 0 0-1.11 2.91l1.33 7.96a3.2 3.2 0 0 0 3.04 2.57h11.2a3.2 3.2 0 0 0 3.04-2.57v-.02m.58-3.46.75-4.48a3.4 3.4 0 0 0-1.11-2.91l-6.93-5.54a3.2 3.2 0 0 0-3.86-.01L5.97 6.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : !fill ? (
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
            d="M10.07 2.82 3.14 8.37a3.4 3.4 0 0 0-1.11 2.91l1.33 7.96a3.2 3.2 0 0 0 3.04 2.57h11.2a3.2 3.2 0 0 0 3.04-2.57l1.33-7.96a3.4 3.4 0 0 0-1.11-2.91l-6.93-5.54a3.2 3.2 0 0 0-3.86-.01"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 15.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
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
            d="M10.07 2.82 3.14 8.37a3.4 3.4 0 0 0-1.11 2.91l1.33 7.96a3.2 3.2 0 0 0 3.04 2.57h11.2a3.2 3.2 0 0 0 3.04-2.57l1.33-7.96a3.4 3.4 0 0 0-1.11-2.91l-6.93-5.54a3.2 3.2 0 0 0-3.86-.01"
            fill="currentColor"
          />
          <path
            d="M12 15.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
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
            d="m20.86 8.37-6.93-5.54a3.2 3.2 0 0 0-3.86-.01L3.14 8.37a3.4 3.4 0 0 0-1.11 2.91l1.33 7.96a3.2 3.2 0 0 0 3.04 2.57h11.2a3.2 3.2 0 0 0 3.04-2.57l1.33-7.96a3.4 3.4 0 0 0-1.11-2.91M12 15.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHomeDot;
