import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShoppingBasket = forwardRef<SVGSVGElement, IconProps>(
  function IconShoppingBasket(
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
            d="M4.21 5.85zh15.56c1.23 0 2.22.15 2.22 2 0 2.15-.99 2-2.22 2H4.22C2.99 9.85 2 10 2 7.85"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.81 2 5.19 5.63"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m15.19 2 3.62 3.63"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.76 14v3.55"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.36 14v3.55"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m3.5 10 1.41 8.64C5.23 20.58 6 22 8.86 22h6.03c3.11 0 3.57-1.36 3.93-3.24L20.5 10"
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
              d="M2 7.85c0-1.85.99-2 2.22-2h15.56c1.23 0 2.22.15 2.22 2 0 2.15-.99 2-2.22 2H4.22C2.99 9.85 2 10 2 7.85"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M8.81 2 5.19 5.63"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m15.19 2 3.62 3.63"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.76 14v3.55"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
              <path
                d="M14.36 14v3.55"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
            </g>
            <path
              d="m3.5 10 1.41 8.64C5.23 20.58 6 22 8.86 22h6.03c3.11 0 3.57-1.36 3.93-3.24L20.5 10"
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
              d="M19.24 5.58h-.4L15.46 2.2a.7.7 0 0 0-.99 0 .7.7 0 0 0 0 .99l2.39 2.39H7.14l2.39-2.39a.7.7 0 0 0 0-.99.7.7 0 0 0-.99 0L5.17 5.58h-.4c-.9 0-2.77 0-2.77 2.56 0 .97.2 1.61.62 2.03q.37.36.84.45.44.1.9.08h15.28q.46 0 .88-.08c.84-.2 1.48-.8 1.48-2.48 0-2.56-1.87-2.56-2.76-2.56"
              fill="currentColor"
            />
            <path
              d="M19.65 10.7H4.36q-.46.01-.9-.08l1.26 7.68C5 20.02 5.75 22 9.08 22h5.61c3.37 0 3.97-1.69 4.33-3.58l1.51-7.8q-.43.09-.88.08m-9.04 6.46a.7.7 0 0 1-.7.7.7.7 0 0 1-.7-.7v-3.3c0-.39.31-.7.7-.7s.7.31.7.7zm4.28 0a.7.7 0 0 1-.7.7.7.7 0 0 1-.7-.7v-3.3c0-.39.31-.7.7-.7s.7.31.7.7z"
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
              d="M19.24 5.58h-.4L15.46 2.2a.7.7 0 0 0-.99 0 .7.7 0 0 0 0 .99l2.39 2.39H7.14l2.39-2.39a.7.7 0 0 0 0-.99.7.7 0 0 0-.99 0L5.17 5.58h-.4c-.9 0-2.77 0-2.77 2.56 0 .97.2 1.61.62 2.03q.37.36.84.45.44.1.9.08h15.28q.46 0 .88-.08c.84-.2 1.48-.8 1.48-2.48 0-2.56-1.87-2.56-2.76-2.56"
              fill="currentColor"
            />
            <path
              d="M19.05 12H4.87a1 1 0 0 0-.99 1.16l.84 5.14C5 20.02 5.75 22 9.08 22h5.61c3.37 0 3.97-1.69 4.33-3.58l1.01-5.23a1 1 0 0 0-.98-1.19m-8.44 6.45a.7.7 0 1 1-1.39 0v-3.3c0-.38.31-.7.7-.7a.7.7 0 0 1 .69.7zm4.28 0a.7.7 0 0 1-.7.7.7.7 0 0 1-.7-.7v-3.3c0-.38.32-.7.7-.7.39 0 .7.32.7.7z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconShoppingBasket;
