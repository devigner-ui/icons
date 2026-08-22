import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBitcoinCard = forwardRef<SVGSVGElement, IconProps>(
  function IconBitcoinCard(
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
              d="M2.67 8.5h11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.67 16.5h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.17 16.5h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 11.33v4.78c0 3.51-.89 4.39-4.44 4.39H7.11c-3.55 0-4.44-.88-4.44-4.39V7.89c0-3.51.89-4.39 4.44-4.39h6.84"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M17.67 3.25h3.13c.69 0 1.25.63 1.25 1.25 0 .69-.56 1.25-1.25 1.25h-3.13z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.67 5.75h3.57c.79 0 1.43.56 1.43 1.25s-.64 1.25-1.43 1.25h-3.57z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.43 8.25V9.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.43 2v1.25"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.86 3.25h-2.19"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.86 8.25h-2.19"
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
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 7.54v8.92a4.14 4.14 0 0 1-4.15 4.14H6.82a4.14 4.14 0 0 1-4.15-4.14V7.54A4.14 4.14 0 0 1 6.82 3.4h11.7a4.14 4.14 0 0 1 4.15 4.14"
              fill="currentColor"
            />
            <path
              d="M9.92 12.75h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M19.31 11.67q.22-.42.23-.92c0-1.07-.93-2-2-2h-.61v-.5a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v.5h-2.01a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h.25v3.5h-.25a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.01v.5c0 .41.34.75.75.75s.75-.34.75-.75v-.5h1.06c1.2 0 2.18-.9 2.18-2 0-.65-.34-1.21-.86-1.58m-3.7-1.42h1.94c.26 0 .5.28.5.5a.5.5 0 0 1-.5.5h-2.38v-1zm2.38 3.5h-2.82v-1H18c.37 0 .68.23.68.5s-.32.5-.69.5"
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
              d="M18.05 10.75c0-.22-.24-.5-.5-.5h-2.38v1h2.38a.5.5 0 0 0 .5-.5"
              fill="currentColor"
            />
            <path
              d="M17.99 12.75h-2.82v1h2.82c.37 0 .68-.23.68-.5s-.31-.5-.68-.5"
              fill="currentColor"
            />
            <path
              d="M18.52 3.4H6.82a4.14 4.14 0 0 0-4.15 4.14v8.92a4.14 4.14 0 0 0 4.15 4.14h11.7a4.14 4.14 0 0 0 4.15-4.14V7.54a4.14 4.14 0 0 0-4.15-4.14m-8.6 9.35h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75m8.07 2.5h-1.06v.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.5h-2.01a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.25v-3.5h-.25a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.01v-.5c0-.41.34-.75.75-.75s.75.34.75.75v.5h.61c1.07 0 2 .93 2 2q-.01.5-.23.92c.52.37.86.94.86 1.58 0 1.1-.98 2-2.18 2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBitcoinCard;
