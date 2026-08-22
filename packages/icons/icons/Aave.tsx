import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAave = forwardRef<SVGSVGElement, IconProps>(function IconAave(
  { className, variant = "Outline", strokeWidth = "1.5", ...rest },
  ref,
) {
  const fill = variant === "Bold" || variant === "Bulk";
  const duotone = variant === "TwoTone" || variant === "Bulk";

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
              d="m8.67 16 4-9 4 9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.67 12h4"
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
            d="m17.36 15.7-4-9c-.24-.54-1.13-.54-1.37 0l-2.02 4.55h-1.3a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h.62L7.98 15.7c-.17.38 0 .82.38.99s.82 0 .99-.38l1.58-3.55h1.74c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75H11.6l1.07-2.4 3.31 7.46a.75.75 0 0 0 .99.39.8.8 0 0 0 .39-1.01"
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
            d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m4.3 14.69a.76.76 0 0 1-.99-.39l-3.31-7.45-1.07 2.4h1.07c.41 0 .75.34.75.75s-.34.75-.75.75h-1.73L9.36 16.3a.75.75 0 0 1-1.37-.61l1.31-2.95h-.63a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.29l2.02-4.55c.24-.54 1.13-.54 1.37 0l4 9c.17.38 0 .83-.38 1"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAave;
