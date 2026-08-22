import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShoppingBasketTick = forwardRef<SVGSVGElement, IconProps>(
  function IconShoppingBasketTick(
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
                d="m10.29 16 1.5 1.5 3.25-3"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.48 2 5.86 5.63"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m15.86 2 3.62 3.63"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M2.67 7.85c0-1.85.99-2 2.22-2h15.56c1.23 0 2.22.15 2.22 2 0 2.15-.99 2-2.22 2H4.89c-1.23 0-2.22.15-2.22-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m4.17 10 1.41 8.64C5.9 20.58 6.67 22 9.53 22h6.03c3.11 0 3.57-1.36 3.93-3.24L21.17 10"
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
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.91 5.58h-.4L16.13 2.2a.7.7 0 0 0-.99 0 .7.7 0 0 0 0 .99l2.39 2.39H7.81l2.39-2.39a.7.7 0 0 0 0-.99.7.7 0 0 0-.99 0L5.84 5.58h-.4c-.9 0-2.77 0-2.77 2.56 0 .97.2 1.61.62 2.03q.37.36.84.45.44.1.9.08h15.28q.46 0 .88-.08c.84-.2 1.48-.8 1.48-2.48 0-2.56-1.87-2.56-2.76-2.56"
              fill="currentColor"
            />
            <path
              d="M20.33 10.7H5.03q-.45.02-.9-.09l1.26 7.69c.29 1.72 1.04 3.7 4.37 3.7h5.61c3.37 0 3.97-1.69 4.33-3.58l1.51-7.81q-.43.1-.88.09m-4.78 4.35-3.25 3a.8.8 0 0 1-.51.2.7.7 0 0 1-.53-.22l-1.5-1.5a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.99.99 2.72-2.51a.76.76 0 0 1 1.06.04c.29.31.27.78-.04 1.06"
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
              d="M19.91 5.58h-.4L16.13 2.2a.7.7 0 0 0-.99 0 .7.7 0 0 0 0 .99l2.39 2.39H7.81l2.39-2.39a.7.7 0 0 0 0-.99.7.7 0 0 0-.99 0L5.84 5.58h-.4c-.9 0-2.77 0-2.77 2.56 0 .97.2 1.61.62 2.03q.37.36.84.45.44.1.9.08h15.28q.46 0 .88-.08c.84-.2 1.48-.8 1.48-2.48 0-2.56-1.87-2.56-2.76-2.56"
              fill="currentColor"
            />
            <path
              d="M19.76 12H5.58a1 1 0 0 0-.99 1.16l.84 5.14c.28 1.72 1.03 3.7 4.36 3.7h5.61c3.37 0 3.97-1.69 4.33-3.58l1.01-5.23a1 1 0 0 0-.98-1.19m-4.21 4.05-3.25 3a.74.74 0 0 1-1.04-.02l-1.5-1.5a.75.75 0 0 1 0-1.06.77.77 0 0 1 1.07 0l.99.99 2.72-2.51a.75.75 0 1 1 1.01 1.1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconShoppingBasketTick;
