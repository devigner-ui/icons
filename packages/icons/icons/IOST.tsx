import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconIOST = forwardRef<SVGSVGElement, IconProps>(function IconIOST(
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
            d="m11.66 2.6-6.5 3.82a2 2 0 0 0-.99 1.72v7.71a2 2 0 0 0 .99 1.72l6.5 3.82a2 2 0 0 0 2.03 0l6.5-3.82c.61-.36.99-1.02.99-1.72V8.14a2 2 0 0 0-.99-1.72l-6.5-3.82a2 2 0 0 0-2.03 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m17.67 9-5-3-5 3 10 6-5 3-5-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m12.17 10-2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m15.17 12-2 2"
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
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m11.66 2.6-6.5 3.82a2 2 0 0 0-.99 1.72v7.71a2 2 0 0 0 .99 1.72l6.5 3.82a2 2 0 0 0 2.03 0l6.5-3.82c.61-.36.99-1.02.99-1.72V8.14a2 2 0 0 0-.99-1.72l-6.5-3.82a2 2 0 0 0-2.03 0"
            fill="currentColor"
          />
          <path
            d="m18.06 14.36-2.61-1.57.26-.26a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-.52.52-1.8-1.08.38-.38a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-.65.65L9.13 9l3.54-2.13 4.61 2.77a.75.75 0 1 0 .77-1.29l-5-3a.8.8 0 0 0-.77 0l-5 3a.75.75 0 0 0 0 1.28l2.61 1.57-.26.26a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l.52-.52 1.8 1.08-.38.38a.75.75 0 0 0 0 1.06q.24.22.53.22t.53-.22l.65-.65 1.86 1.12-3.53 2.14-4.61-2.77a.75.75 0 0 0-1.03.26c-.21.36-.1.82.26 1.03l5 3q.18.1.39.11t.39-.11l5-3a.7.7 0 0 0 .36-.64.8.8 0 0 0-.37-.65"
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
            d="m20.18 6.42-6.5-3.82a2 2 0 0 0-2.03 0l-6.5 3.82a2 2 0 0 0-.99 1.72v7.71a2 2 0 0 0 .99 1.72l6.5 3.82a2 2 0 0 0 2.03 0l6.5-3.82c.61-.36.99-1.02.99-1.72V8.14c0-.7-.38-1.36-.99-1.72m-2.12 9.22-5 3a1 1 0 0 1-.39.11 1 1 0 0 1-.39-.11l-5-3a.75.75 0 0 1-.26-1.03.75.75 0 0 1 1.03-.26l4.61 2.77 3.54-2.13-1.86-1.12-.65.65a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.38-.38-1.8-1.08-.52.52a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.26-.26-2.61-1.57a.75.75 0 0 1 0-1.28l5-3a.8.8 0 0 1 .77 0l5 3c.36.21.47.67.26 1.03a.76.76 0 0 1-1.03.26l-4.61-2.77L9.13 9l1.86 1.12.65-.65a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.38.38 1.8 1.08.52-.52a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.26.26 2.61 1.57q.35.23.36.64c0 .26-.13.51-.35.64"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconIOST;
