import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSiacoin = forwardRef<SVGSVGElement, IconProps>(function IconSiacoin(
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
            d="M8.64 2.84a10 10 0 1 1-5.15 5.18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.67 16.25V12a4.25 4.25 0 1 0-4.25 4.25z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.67 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
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
            opacity={duotone ? "0.4" : "1"}
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 22.75A10.76 10.76 0 0 1 2.81 7.72a.76.76 0 0 1 .99-.39c.38.17.55.61.39.99a9.25 9.25 0 1 0 4.76-4.79.75.75 0 0 1-.61-1.37q2.06-.9 4.33-.91a10.76 10.76 0 0 1 0 21.5"
            fill="currentColor"
          />
          <path
            d="M16.67 15.25V12a4.25 4.25 0 1 0-4.25 4.25h3.25a1 1 0 0 0 1-1"
            fill="currentColor"
          />
          <path
            d="M5.67 6.88a1.88 1.88 0 1 0 0-3.76 1.88 1.88 0 0 0 0 3.76"
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
            d="M12.67 22.75A10.76 10.76 0 0 1 2.81 7.72a.76.76 0 0 1 .99-.39c.38.17.55.61.39.99a9.25 9.25 0 1 0 4.77-4.79.75.75 0 0 1-.61-1.37q2.06-.9 4.33-.91a10.76 10.76 0 0 1-.01 21.5"
            fill="currentColor"
          />
          <path
            d="M16.67 15.25V12a4.25 4.25 0 1 0-4.25 4.25h3.25a1 1 0 0 0 1-1"
            fill="currentColor"
          />
          <path
            d="M5.67 6.88a1.88 1.88 0 1 0 0-3.76 1.88 1.88 0 0 0 0 3.76"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSiacoin;
