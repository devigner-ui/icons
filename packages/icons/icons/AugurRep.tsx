import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAugurRep = forwardRef<SVGSVGElement, IconProps>(function IconAugurRep(
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
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m9.67 11 2.5-5h1l2.5 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m8.67 13-1 2 5 3 5-3-1-2"
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
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            fill="currentColor"
          />
          <path
            d="M15.67 11.75a.8.8 0 0 1-.67-.41l-2.29-4.59h-.07l-2.29 4.59a.76.76 0 0 1-1.01.34.76.76 0 0 1-.34-1.01l2.5-5a.8.8 0 0 1 .67-.41h1c.28 0 .54.16.67.41l2.5 5c.19.37.04.82-.34 1.01a1 1 0 0 1-.33.07"
            fill="currentColor"
          />
          <path
            d="M12.67 18.75a1 1 0 0 1-.39-.11l-5-3a.75.75 0 0 1-.29-.98l1-2A.76.76 0 0 1 9 12.32c.37.19.52.64.34 1.01l-.69 1.38 4.02 2.41 4.02-2.41-.69-1.38a.75.75 0 0 1 1.35-.67l1 2c.18.35.05.78-.29.98l-5 3a1 1 0 0 1-.39.11"
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
            d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M9 10.66l2.5-5a.8.8 0 0 1 .67-.41h1c.28 0 .54.16.67.41l2.5 5c.19.37.04.82-.34 1.01a1 1 0 0 1-.33.08.8.8 0 0 1-.67-.41l-2.29-4.59h-.07l-2.29 4.59A.76.76 0 1 1 9 10.66m9.06 4.98-5 3a1 1 0 0 1-.39.11 1 1 0 0 1-.39-.11l-5-3a.75.75 0 0 1-.29-.98l1-2A.76.76 0 0 1 9 12.32c.37.19.52.64.34 1.01l-.69 1.38 4.02 2.41 4.02-2.41-.69-1.38a.75.75 0 0 1 1.35-.67l1 2c.17.35.04.78-.29.98"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAugurRep;
