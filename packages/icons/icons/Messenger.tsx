import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMessenger = forwardRef<SVGSVGElement, IconProps>(
  function IconMessenger(
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
              d="M6.35 18.44V22l3.36-1.89q1.41.4 2.96.41c5.52 0 10-4.15 10-9.26S18.19 2 12.67 2s-10 4.15-10 9.26a9 9 0 0 0 3.68 7.18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m11.95 9.25-3.78 4.5 3.69-.9 1.55.9 3.76-4.5-3.51.9z"
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
              d="M6.35 18.44v1.85a1 1 0 0 0 1.49.87l1.86-1.05q1.41.4 2.96.41c5.52 0 10-4.15 10-9.26S18.18 2 12.66 2s-10 4.15-10 9.26a9 9 0 0 0 3.69 7.18"
              fill="currentColor"
            />
            <path
              d="m11.69 9.56-2.54 3.02a.5.5 0 0 0 .5.81l2.01-.49a.5.5 0 0 1 .37.05l1.01.59a.5.5 0 0 0 .63-.11l2.5-2.99c.31-.37-.04-.93-.51-.8l-1.82.47a.5.5 0 0 1-.36-.04l-1.18-.62a.5.5 0 0 0-.61.11"
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
              d="M12.67 2c-5.52 0-10 4.15-10 9.26 0 2.9 1.44 5.48 3.68 7.18v1.85a1 1 0 0 0 1.49.87l1.86-1.05q1.41.4 2.96.41c5.52 0 10-4.15 10-9.26C22.67 6.15 18.19 2 12.67 2m3.51 8.44-2.5 2.99a.5.5 0 0 1-.63.11l-1.01-.59a.5.5 0 0 0-.37-.05l-2.01.49a.5.5 0 0 1-.5-.81l2.54-3.02a.5.5 0 0 1 .62-.12l1.18.62a.5.5 0 0 0 .36.04l1.82-.47c.46-.12.81.44.5.81"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMessenger;
