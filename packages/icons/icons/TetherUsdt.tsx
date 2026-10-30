import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTetherUsdt = forwardRef<SVGSVGElement, IconProps>(
  function IconTetherUsdt(
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
            d="m18.1 16.22-4.02 3.65a3.2 3.2 0 0 1-4.17 0l-6.93-6.29a3.3 3.3 0 0 1-.69-3.68l2.4-4.82a3.4 3.4 0 0 1 2.78-1.72h9.06a3.4 3.4 0 0 1 2.78 1.72l2.4 4.82a3.3 3.3 0 0 1-.69 3.68"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12 14.5v-6"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8 8.5h8"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
              d="M7.47 3.35h9.06a3.4 3.4 0 0 1 2.78 1.72l2.4 4.82a3.3 3.3 0 0 1-.69 3.68l-6.93 6.29a3.2 3.2 0 0 1-4.17 0l-6.93-6.29a3.3 3.3 0 0 1-.69-3.68l2.4-4.82a3.4 3.4 0 0 1 2.77-1.72"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M12 14.5v-6"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 8.5h8"
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
            <path d="M24 0H0v24h24z" fill="none" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.47 3.35h9.06a3.4 3.4 0 0 1 2.78 1.72l2.4 4.82a3.3 3.3 0 0 1-.69 3.68l-6.93 6.29a3.2 3.2 0 0 1-4.17 0l-6.93-6.29a3.3 3.3 0 0 1-.69-3.68l2.4-4.82a3.4 3.4 0 0 1 2.77-1.72"
              fill="currentColor"
            />
            <path
              d="M16 7.75H8a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h3.25v5.25c0 .41.34.75.75.75s.75-.34.75-.75V9.25H16c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
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
              d="m21.71 9.9-2.4-4.82a3.4 3.4 0 0 0-2.78-1.72H7.47a3.4 3.4 0 0 0-2.78 1.72L2.29 9.9a3.3 3.3 0 0 0 .69 3.68l6.93 6.29a3.2 3.2 0 0 0 4.17 0l6.93-6.29a3.3 3.3 0 0 0 .7-3.68M16 9.25h-3.25v5.25c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V9.25H8a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTetherUsdt;
