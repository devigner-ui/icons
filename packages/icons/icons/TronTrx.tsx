import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTronTrx = forwardRef<SVGSVGElement, IconProps>(function IconTronTrx(
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
            d="m6.64 12.83 3.16 7.91c.35.89 1.13 1 1.71.25l9.38-11.94c.3-.38.27-.98-.08-1.32L17.68 4.6a1 1 0 0 0-.57-.28L4.15 2.58c-.93-.12-1.41.49-1.06 1.36l1.76 4.41"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m10.45 21.35 1-11-7.99-7.1"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m17.45 4.35-6 6 9.04-1.81"
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
            d="m3.06 3.94 6.72 16.8c.35.89 1.13 1 1.71.25l9.38-11.94c.3-.38.27-.98-.08-1.32L17.66 4.6a1 1 0 0 0-.57-.28L4.12 2.58c-.94-.13-1.41.48-1.06 1.36"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m10.42 21.35 1-11-7.99-7.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m17.42 4.35-6 6 9.04-1.81"
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
          <path d="M24.4.3H.4v24h24z" fill="none" />
          <path
            d="M21.06 8.34q0 .36-.21.66l-9.38 11.94c-.34.43-.74.58-1.08.46l.01-.1 1-11 9.04-1.81z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m21.06 8.34-.62.15-9.04 1.81 5.95-5.95q.18.08.29.19l3.13 3.13a1 1 0 0 1 .29.67"
            fill="currentColor"
          />
          <path
            d="M17.35 4.35 11.4 10.3 3.41 3.2l-.35-.34v-.01q.31-.4 1.04-.32l12.96 1.73q.14.02.29.09"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m11.4 10.3-1 11-.01.1q-.39-.14-.63-.71L3.04 3.89q-.24-.64.02-1.03l.35.34z"
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
            d="M19.4 10.53c.52-.1.88.49.56.91l-6.95 8.85c-.35.45-1.07.16-1.01-.4l.7-7.6a.6.6 0 0 1 .46-.51z"
            fill="currentColor"
          />
          <path
            d="M21.64 7.69c.22.24.1.63-.21.7l-8.44 1.69c-.55.11-.91-.56-.51-.96L17.5 4.1c.23-.23.6-.22.82.01z"
            fill="currentColor"
          />
          <path
            d="M14.69 3.19c.47.06.66.63.33.97l-3.56 3.56a.57.57 0 0 1-.78.02L5.34 2.99c-.42-.37-.1-1.06.45-.99z"
            fill="currentColor"
          />
          <path
            d="M10.72 10.07c.27.24.4.59.38.94l-.86 10.46c-.05.6-.88.72-1.1.16L2.29 3.96c-.22-.56.46-1.03.91-.63z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTronTrx;
