import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLogout4 = forwardRef<SVGSVGElement, IconProps>(function IconLogout4(
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m18.1 14.62 2.57-2.56L18.1 9.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.43 12.06H20.6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M12.43 20c-4.42 0-8-3-8-8s3.58-8 8-8"
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
            d="M13.91 2c.47 0 .86.38.86.86v18.29c0 .47-.38.86-.86.86-5.89 0-10-4.11-10-10S8.03 2 13.91 2"
            fill="currentColor"
          />
          <path
            d="m21.21 11.54-2.84-2.85a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l1.56 1.56H9.3a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h9.57l-1.56 1.56a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l2.84-2.85a.73.73 0 0 0 0-1.04"
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
            d="M8.55 12.07c0-.41.34-.75.75-.75h5.48V2.86a.87.87 0 0 0-.87-.86c-5.89 0-10 4.11-10 10s4.11 10 10 10c.47 0 .86-.38.86-.86v-8.33H9.3a.73.73 0 0 1-.75-.74"
            fill="currentColor"
          />
          <path
            d="m21.21 11.54-2.84-2.85a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l1.56 1.56h-4.1v1.5h4.09l-1.56 1.56a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l2.84-2.85c.3-.28.3-.75.01-1.04"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLogout4;
