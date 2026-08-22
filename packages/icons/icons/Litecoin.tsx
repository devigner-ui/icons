import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLitecoin = forwardRef<SVGSVGElement, IconProps>(function IconLitecoin(
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
              d="M12.23 6.36h2.53l-2.13 7.94h4.22l-.51 2.84h-7.7l3.08-10.78z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m15.69 10.98-7.7 1.54"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
          <path d="M24.67 0h-24v24h24z" fill="none" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            fill="currentColor"
          />
          <path
            d="M13.45 6.36a1 1 0 0 1 .97 1.26l-1.79 6.68h3.03a1 1 0 0 1 .98 1.18l-.15.84a1 1 0 0 1-.98.82H9.97a1 1 0 0 1-.96-1.27l2.61-9.14a.5.5 0 0 1 .48-.36z"
            fill="currentColor"
          />
          <path
            d="M7.99 13.27a.75.75 0 0 1-.14-1.48l7.7-1.54a.75.75 0 1 1 .29 1.47l-7.7 1.54z"
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
            d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m3.82 14.32a1 1 0 0 1-.98.82H9.97a1 1 0 0 1-.96-1.27l.84-2.95-1.71.34-.15.01a.75.75 0 0 1-.14-1.48l2.47-.49 1.31-4.57a.5.5 0 0 1 .48-.36h1.36a1 1 0 0 1 .97 1.26l-.81 3.01 1.93-.39a.75.75 0 1 1 .29 1.47l-2.66.53-.55 2.05h3.03a1 1 0 0 1 .98 1.18z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLitecoin;
