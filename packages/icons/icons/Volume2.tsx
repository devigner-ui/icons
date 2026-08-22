import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVolume2 = forwardRef<SVGSVGElement, IconProps>(function IconVolume2(
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
            d="M16.39 9.69a5.25 5.25 0 1 1-7.44 7.44 5.25 5.25 0 1 1 7.44-7.44"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 13.41 11.08 15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.74 6.34a.4.4 0 0 1 0 .56.4.4 0 0 1-.56 0c-.16-.15-.15-.4 0-.56a.4.4 0 0 1 .56 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.16 19.92a.4.4 0 0 1 0 .56c-.15.16-.4.15-.56 0a.4.4 0 0 1 0-.56.4.4 0 0 1 .56 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.55 13.13a.4.4 0 0 1 0 .56.4.4 0 0 1-.56 0c-.16-.15-.15-.4 0-.56a.4.4 0 0 1 .56 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.34 13.13a.4.4 0 0 1 0 .56c-.15.16-.4.15-.56 0a.4.4 0 0 1 0-.56.4.4 0 0 1 .56 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.74 19.92a.4.4 0 0 1 0 .56.4.4 0 0 1-.56 0c-.16-.15-.15-.4 0-.56a.4.4 0 0 1 .56 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.16 6.34a.4.4 0 0 1 0 .56c-.15.16-.4.15-.56 0a.4.4 0 0 1 0-.56.4.4 0 0 1 .56 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.95 3.52a.4.4 0 0 1 0 .56c-.15.16-.4.15-.56 0s-.15-.4 0-.56a.4.4 0 0 1 .56 0"
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
            d="M16.39 9.69a5.25 5.25 0 1 0-7.44 7.44 5.25 5.25 0 1 0 7.44-7.44m-3.19 4.25-1.59 1.59a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.77.77 0 0 1 0-1.07l1.59-1.59a.77.77 0 0 1 1.07 0c.29.3.29.78-.01 1.07"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.27 5.81q-.34-.33-.81-.34-.47 0-.81.33a1.14 1.14 0 0 0 0 1.62q.34.34.81.34t.81-.33a1.13 1.13 0 0 0 0-1.62"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.69 19.39q-.34-.33-.81-.34-.48 0-.81.33a1.13 1.13 0 0 0 0 1.62 1.15 1.15 0 0 0 1.62-.01c.44-.43.44-1.16 0-1.6"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M23.08 12.6q-.33-.33-.81-.34-.47 0-.81.34a1.14 1.14 0 0 0 .81 1.95 1.14 1.14 0 0 0 .81-1.95"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.88 12.6a1.15 1.15 0 0 0-1.62 0 1.14 1.14 0 0 0 .81 1.95c.29 0 .59-.11.81-.33.44-.45.44-1.18 0-1.62"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.27 19.39a1.14 1.14 0 0 0-1.62 0 1.14 1.14 0 0 0 .81 1.95 1.15 1.15 0 0 0 1.15-1.14q0-.48-.34-.81"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.69 5.81q-.34-.33-.81-.34-.48 0-.81.33-.33.34-.34.81 0 .47.33.81a1.13 1.13 0 0 0 1.62 0c.45-.44.45-1.17 0-1.61"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.48 3q0-.01 0 0a1.14 1.14 0 0 0-1.62 0 1.14 1.14 0 1 0 1.61 1.62c.46-.45.46-1.18 0-1.62"
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
            d="M16.39 9.69a5.25 5.25 0 1 0-7.44 7.44 5.25 5.25 0 1 0 7.44-7.44m-3.19 4.25-1.59 1.59a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.77.77 0 0 1 0-1.07l1.59-1.59a.77.77 0 0 1 1.07 0c.29.3.29.78-.01 1.07"
            fill="currentColor"
          />
          <path
            d="M20.27 5.81q-.34-.33-.81-.34-.47 0-.81.33a1.14 1.14 0 0 0 0 1.62q.34.34.81.34t.81-.33a1.13 1.13 0 0 0 0-1.62"
            fill="currentColor"
          />
          <path
            d="M6.69 19.39q-.34-.33-.81-.34-.48 0-.81.33a1.13 1.13 0 0 0 0 1.62 1.15 1.15 0 0 0 1.62-.01c.44-.43.44-1.16 0-1.6"
            fill="currentColor"
          />
          <path
            d="M23.08 12.6q-.33-.33-.81-.34-.47 0-.81.34a1.14 1.14 0 0 0 .81 1.95 1.14 1.14 0 0 0 .81-1.95"
            fill="currentColor"
          />
          <path
            d="M3.88 12.6a1.15 1.15 0 0 0-1.62 0 1.14 1.14 0 0 0 .81 1.95c.29 0 .59-.11.81-.33.44-.45.44-1.18 0-1.62"
            fill="currentColor"
          />
          <path
            d="M20.27 19.39a1.14 1.14 0 0 0-1.62 0 1.14 1.14 0 0 0 .81 1.95 1.15 1.15 0 0 0 1.15-1.14q0-.48-.34-.81"
            fill="currentColor"
          />
          <path
            d="M6.69 5.81q-.34-.33-.81-.34-.48 0-.81.33a1.13 1.13 0 0 0 0 1.62q.34.34.8.34.48 0 .82-.33c.44-.45.44-1.18 0-1.62"
            fill="currentColor"
          />
          <path
            d="M13.48 3q0-.01 0 0a1.14 1.14 0 0 0-1.62 0 1.14 1.14 0 1 0 1.61 1.62c.46-.45.46-1.18 0-1.62"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconVolume2;
