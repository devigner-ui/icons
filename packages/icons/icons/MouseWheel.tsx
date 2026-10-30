import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMouseWheel = forwardRef<SVGSVGElement, IconProps>(function IconMouseWheel(
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
            d="M18.44 18.33a7.4 7.4 0 0 0 1.06-3.83v-5A7.52 7.52 0 0 0 8.02 3.14M5.58 5.62A7.5 7.5 0 0 0 4.5 9.5v5a7.52 7.52 0 0 0 11.53 6.32"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 1 1 3 0v2c0 .83-.68 1.5-1.5 1.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M12 22c4.13 0 7.5-3.37 7.5-7.5v-5C19.5 5.37 16.13 2 12 2a7.5 7.5 0 0 0-7.5 7.5v5c0 4.13 3.37 7.5 7.5 7.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12 11a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 1 1 3 0v2c0 .83-.68 1.5-1.5 1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 6V2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
            d="M19.5 9.5v5c0 4.13-3.37 7.5-7.5 7.5a7.5 7.5 0 0 1-7.5-7.5v-5a7.5 7.5 0 0 1 8.25-7.46A7.5 7.5 0 0 1 19.5 9.5"
            fill="currentColor"
          />
          <path
            d="M13.87 7.5v2c0 1.03-.84 1.88-1.87 1.88a1.9 1.9 0 0 1-1.88-1.88v-2c0-.77.47-1.43 1.13-1.72V2.04a6 6 0 0 1 1.5 0v3.74c.66.29 1.12.95 1.12 1.72"
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
            d="M13.3 2.12a.47.47 0 0 0-.55.47v2.86q.02.31.29.49c.5.33.83.9.83 1.56v2c0 1.03-.84 1.88-1.87 1.88a1.9 1.9 0 0 1-1.88-1.88v-2c0-.65.34-1.23.84-1.56a.6.6 0 0 0 .29-.49V2.6c0-.3-.26-.53-.55-.47a7.5 7.5 0 0 0-6.2 7.38v5c0 4.13 3.37 7.5 7.5 7.5s7.5-3.37 7.5-7.5v-5a7.5 7.5 0 0 0-6.2-7.38"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMouseWheel;
