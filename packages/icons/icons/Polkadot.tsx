import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPolkadot = forwardRef<SVGSVGElement, IconProps>(function IconPolkadot(
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
            d="M19.5 9.95a7.5 7.5 0 0 1-7.5 7.5s-2.69 0-3.66 2.2a5 5 0 0 0-.34 1.8l2-14"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M5.37 13.45a7.5 7.5 0 0 1 12.65-7.98"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13 21.45h.02"
            strokeWidth={Number(strokeWidth) * 1.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
            d="M5.37 13.45a7.5 7.5 0 1 1 6.63 4s-2.69 0-3.66 2.2a5 5 0 0 0-.34 1.8l2-14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 21.45h.02"
            stroke="currentColor"
            strokeWidth={Number(strokeWidth) * 1.2}
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
          <path d="M24 .4H0v24h24z" fill="none" />
          <path
            d="M8 22.15h-.05a.75.75 0 0 1-.7-.75q0-.86.22-1.59L9.26 7.29a.76.76 0 0 1 .85-.64c.41.06.7.44.64.85l-1.42 9.91a6 6 0 0 1 2.67-.76 6.76 6.76 0 0 0 0-13.5 6.76 6.76 0 0 0-5.97 9.9c.19.37.05.82-.31 1.01a.75.75 0 0 1-1.01-.31 8.26 8.26 0 1 1 7.3 4.4c-.09 0-2.21.04-2.97 1.75l-.09.24-.19 1.36a.8.8 0 0 1-.76.65"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14 22.4q-.4-.01-.71-.29a1 1 0 0 1-.29-.71 1 1 0 0 1 .08-.38q.07-.19.21-.33a1 1 0 0 1 1.09-.21q.19.08.33.21.13.14.21.33a1 1 0 0 1 .08.38q-.01.4-.29.71-.14.13-.33.21a1 1 0 0 1-.38.08"
              fill="currentColor"
            />
          </g>
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
            d="M8 22.15h-.05a.75.75 0 0 1-.7-.75q0-.86.22-1.59L9.26 7.29a.76.76 0 0 1 .85-.64c.41.06.7.44.64.85l-1.42 9.91a6 6 0 0 1 2.67-.76 6.76 6.76 0 0 0 0-13.5 6.76 6.76 0 0 0-5.97 9.9c.19.37.05.82-.31 1.01a.75.75 0 0 1-1.01-.31 8.26 8.26 0 1 1 7.3 4.4c-.09 0-2.21.04-2.97 1.75l-.09.24-.19 1.36a.8.8 0 0 1-.76.65"
            fill="currentColor"
          />
          <path
            d="M14 22.4q-.4-.01-.71-.29a1 1 0 0 1-.29-.71 1 1 0 0 1 .08-.38q.07-.19.21-.33a1 1 0 0 1 1.09-.21q.19.08.33.21.13.14.21.33a1 1 0 0 1 .08.38q-.01.4-.29.71-.14.13-.33.21a1 1 0 0 1-.38.08"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPolkadot;
