import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDai = forwardRef<SVGSVGElement, IconProps>(function IconDai(
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
            d="M8 7v10h4a5 5 0 0 0 0-10z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6.48 10h12.04"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6.48 14h12.04"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M4 6a10 10 0 1 0 3.97-3.15"
            strokeWidth={strokeWidth}
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
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M8 7v10h4a5 5 0 0 0 0-10z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.48 10h12.04"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.48 14h12.04"
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
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            fill="currentColor"
          />
          <path
            d="M12 17.75H8a.76.76 0 0 1-.75-.75V7c0-.41.34-.75.75-.75h4a5.76 5.76 0 0 1 0 11.5m-3.25-1.5H12a4.26 4.26 0 0 0 0-8.5H8.75z"
            fill="currentColor"
          />
          <path
            d="M18.52 10.75H6.48a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h12.04c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M18.52 14.75H6.48a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h12.04c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M12 7.75H8.75v1.5h6.46A4.2 4.2 0 0 0 12 7.75"
            fill="currentColor"
          />
          <path
            d="M16.25 12q-.02-.65-.21-1.25H8.75v2.5h7.29q.2-.6.21-1.25"
            fill="currentColor"
          />
          <path
            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m6.52 12.75h-1.47a5.8 5.8 0 0 1-5.05 3H8a.76.76 0 0 1-.75-.75v-2.25h-.77a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.77v-2.5h-.77a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.77V7c0-.41.34-.75.75-.75h4a5.8 5.8 0 0 1 5.05 3h1.47c.41 0 .75.34.75.75s-.34.75-.75.75h-.91a6 6 0 0 1 0 2.5h.91c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M8.75 16.25H12c1.29 0 2.43-.59 3.21-1.5H8.75z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDai;
