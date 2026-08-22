import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconServer2 = forwardRef<SVGSVGElement, IconProps>(function IconServer2(
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
            opacity={duotone ? "0.4" : "1"}
            d="M2 17c0-1.89 0-2.83.59-3.41C3.17 13 4.1 13 6 13h12c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41s0 2.83-.59 3.41C20.83 21 19.9 21 18 21H6c-1.89 0-2.83 0-3.41-.59C2 19.83 2 18.9 2 17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 6c0-1.89 0-2.83.59-3.41C3.17 2 4.1 2 6 2h12c1.89 0 2.83 0 3.41.59C22 3.17 22 4.1 22 6s0 2.83-.59 3.41C20.83 10 19.9 10 18 10H6c-1.89 0-2.83 0-3.41-.59C2 8.83 2 7.9 2 6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M13.5 6H18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6 7V5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M9 7V5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M13.5 17H18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6 18v-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M9 18v-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M6 13h12c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41s0 2.83-.59 3.41C20.83 21 19.9 21 18 21H6c-1.89 0-2.83 0-3.41-.59C2 19.83 2 18.9 2 17s0-2.83.59-3.41C3.17 13 4.1 13 6 13"
              fill="currentColor"
            />
            <path
              d="M6 3h12c1.89 0 2.83 0 3.41.59C22 4.17 22 5.1 22 7s0 2.83-.59 3.41C20.83 11 19.9 11 18 11H6c-1.89 0-2.83 0-3.41-.59C2 9.83 2 8.9 2 7s0-2.83.59-3.41C3.17 3 4.1 3 6 3"
              fill="currentColor"
            />
          </g>
          <path
            d="M12.75 7c0-.41.34-.75.75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M6 8.75A.75.75 0 0 1 5.25 8V6a.75.75 0 0 1 1.5 0v2c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M9 8.75A.75.75 0 0 1 8.25 8V6a.75.75 0 0 1 1.5 0v2c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M12.75 17c0-.41.34-.75.75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M6 18.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M9 18.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2c0 .41-.34.75-.75.75"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.59 3.59C2 4.17 2 5.1 2 7s0 2.83.59 3.41C3.17 11 4.1 11 6 11h12c1.89 0 2.83 0 3.41-.59C22 9.83 22 8.9 22 7s0-2.83-.59-3.41C20.83 3 19.9 3 18 3H6c-1.89 0-2.83 0-3.41.59M9 8.75A.75.75 0 0 1 8.25 8V6a.75.75 0 0 1 1.5 0v2c0 .41-.34.75-.75.75m4.5-2.5a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5zM6 8.75A.75.75 0 0 1 5.25 8V6a.75.75 0 0 1 1.5 0v2c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.59 13.59C2 14.17 2 15.1 2 17s0 2.83.59 3.41C3.17 21 4.1 21 6 21h12c1.89 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41s0-2.83-.59-3.41C20.83 13 19.9 13 18 13H6c-1.89 0-2.83 0-3.41.59M12.75 17c0-.41.34-.75.75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75m-7.5 1a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0zm3.75.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconServer2;
