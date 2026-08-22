import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconOk = forwardRef<SVGSVGElement, IconProps>(function IconOk(
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
              d="M12.67 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
            <path
              d="M10.67 13.5c1.25.63 2.73.63 3.99.01l.01-.01"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m10.67 16.5 2-2.53 2 2.53"
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
            d="M12.67 11.88a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76"
            fill="currentColor"
          />
          <path
            d="m15.26 16.03-1.2-1.51q.5-.14.97-.36c.36-.2.49-.64.3-1a.76.76 0 0 0-1-.32 3.7 3.7 0 0 1-3.32 0 .75.75 0 1 0-.68 1.34q.46.23.94.35l-1.19 1.51a.75.75 0 1 0 1.17.93l1.41-1.78 1.41 1.78q.24.28.59.28.25 0 .46-.16a.75.75 0 0 0 .14-1.06"
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
            d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 5.12a2.39 2.39 0 0 1 0 4.76 2.39 2.39 0 0 1 0-4.76m2.47 9.97a.7.7 0 0 1-.46.16.8.8 0 0 1-.59-.28l-1.41-1.78-1.41 1.78a.75.75 0 1 1-1.17-.93l1.19-1.51q-.48-.13-.94-.35a.75.75 0 0 1-.33-1.01.74.74 0 0 1 1.01-.33c1.04.52 2.28.52 3.32 0a.75.75 0 0 1 1 .32c.19.36.06.81-.3 1q-.47.23-.97.36l1.2 1.51a.8.8 0 0 1-.14 1.06"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconOk;
