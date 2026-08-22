import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconKyberNetwork = forwardRef<SVGSVGElement, IconProps>(
  function IconKyberNetwork(
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
              d="m11.68 2.57-5 2.86a2 2 0 0 0-1.01 1.74v8.81a2 2 0 0 0 .84 1.63l5 3.57c.7.5 1.63.5 2.32 0l5-3.57a2 2 0 0 0 .84-1.63V7.17a2 2 0 0 0-1.01-1.74l-5-2.86a2 2 0 0 0-1.98 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m12.67 3-2 9 1.85 9.23"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.83 16.91 10.67 12l8.54-4.74"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="M19.67 7.16v8.81q-.01.66-.38 1.18l-.46-.24L10.67 12l8.54-4.74.45-.23z"
              fill="currentColor"
            />
            <path
              d="m19.66 7.03-.45.23L10.67 12l2-9 .14-.68q.44.03.85.25l5 2.85c.59.34.96.94 1 1.61"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m12.67 3-2 9 1.85 9.23.05.3a2 2 0 0 1-1.06-.36l-5-3.57a2 2 0 0 1-.84-1.63V7.16a2 2 0 0 1 1.01-1.74l5-2.85q.54-.3 1.13-.25z"
              fill="currentColor"
            />
            <path
              d="M19.29 17.15q-.2.26-.46.45l-5 3.57c-.37.27-.82.39-1.26.36l-.05-.3L10.67 12l8.16 4.91z"
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
              d="M18.49 8.7c.71-.39 1.58.12 1.57.93l-.04 5.42c-.01.82-.9 1.32-1.6.9l-4.68-2.8c-.7-.42-.68-1.44.03-1.83z"
              fill="currentColor"
            />
            <path
              d="M19.92 6.28c.15.38-.08.77-.44.97l-5.63 3.11c-.8.44-1.74-.27-1.54-1.15l1.22-5.53c.15-.7.94-1.04 1.56-.69l3.92 2.24q.65.39.91 1.05"
              fill="currentColor"
            />
            <path
              d="m12.68 2.67-2.07 9.3q-.04.21 0 .44l1.73 8.68c.12.6-.39 1.17-.89.8l-5.29-3.77a2.1 2.1 0 0 1-.89-1.72V7.09c0-.76.4-1.46 1.07-1.84l5.29-3.01q.23-.13.47-.2c.38-.13.66.25.58.63"
              fill="currentColor"
            />
            <path
              d="M18.3 16.81c.65.39.69 1.32.08 1.76l-3.47 2.52c-.62.45-1.51.11-1.66-.65l-1.02-5.2c-.18-.9.79-1.58 1.58-1.11z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconKyberNetwork;
