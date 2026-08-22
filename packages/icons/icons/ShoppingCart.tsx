import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShoppingCart = forwardRef<SVGSVGElement, IconProps>(
  function IconShoppingCart(
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
              d="M2.67 2h1.74c1.08 0 1.93.93 1.84 2l-.83 9.96a2.8 2.8 0 0 0 2.79 3.03h10.65c1.44 0 2.7-1.18 2.81-2.61l.54-7.5a2.77 2.77 0 0 0-2.81-3.01H6.49"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.92 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.92 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.67 8h12"
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
              d="M16.92 22.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
              fill="currentColor"
            />
            <path
              d="M8.92 22.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m5.51 3.94-.2 2.45a.8.8 0 0 0 .8.86h15.31a.8.8 0 0 0 .8-.74 2.96 2.96 0 0 0-2.99-3.21H6.96q-.15-.67-.61-1.21a2.6 2.6 0 0 0-1.91-.84H2.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h1.74q.48.01.81.35.32.36.29.84"
              fill="currentColor"
            />
            <path
              d="M21.18 8.75H5.84a.8.8 0 0 0-.8.73l-.36 4.35A2.93 2.93 0 0 0 7.59 17h11.12a3 3 0 0 0 2.93-2.73l.33-4.67a.8.8 0 0 0-.79-.85"
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
              d="M16.92 22.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
              fill="currentColor"
            />
            <path
              d="M8.92 22.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
              fill="currentColor"
            />
            <path
              d="m5.51 3.94-.2 2.45a.8.8 0 0 0 .8.86h15.31a.8.8 0 0 0 .8-.74 2.96 2.96 0 0 0-2.99-3.21H6.94q-.15-.67-.61-1.21c-.5-.53-1.2-.84-1.92-.84H2.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h1.74q.48.01.81.35.32.36.29.84"
              fill="currentColor"
            />
            <path
              d="M21.18 8.75H5.84a.8.8 0 0 0-.8.73l-.36 4.35A2.9 2.9 0 0 0 7.59 17h11.12a3 3 0 0 0 2.93-2.73l.33-4.67a.8.8 0 0 0-.79-.85"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconShoppingCart;
