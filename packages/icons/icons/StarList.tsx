import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStarList = forwardRef<SVGSVGElement, IconProps>(function IconStarList(
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
            d="m16.06 5.21 1.41 2.82c.19.39.7.76 1.13.84l2.55.42c1.63.27 2.01 1.45.84 2.63L20 13.91c-.33.33-.52.98-.41 1.45l.57 2.46c.45 1.94-.59 2.7-2.3 1.68l-2.39-1.42a1.7 1.7 0 0 0-1.58 0L11.5 19.5c-1.71 1.01-2.75.26-2.3-1.68l.57-2.46a1.8 1.8 0 0 0-.41-1.45l-1.99-1.99c-1.17-1.17-.79-2.35.84-2.63l2.55-.42c.43-.07.94-.45 1.13-.84l1.41-2.82c.75-1.53 1.99-1.53 2.76 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.67 5h-6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.67 19h-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.67 12h-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="m16.06 5.21 1.41 2.82c.19.39.7.76 1.13.84l2.55.42c1.63.27 2.01 1.45.84 2.63L20 13.91c-.33.33-.52.98-.41 1.45l.57 2.46c.45 1.94-.59 2.7-2.3 1.68l-2.39-1.42a1.7 1.7 0 0 0-1.58 0L11.5 19.5c-1.71 1.01-2.75.26-2.3-1.68l.57-2.46a1.8 1.8 0 0 0-.41-1.45l-1.99-1.99c-1.17-1.17-.79-2.35.84-2.63l2.55-.42c.43-.07.94-.45 1.13-.84l1.41-2.82c.75-1.53 1.99-1.53 2.76 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.67 5.75h-6A.76.76 0 0 1 1.92 5c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.67 19.75h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.67 12.75h-1a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="m16.06 5.21 1.41 2.82c.19.39.7.76 1.13.84l2.55.42c1.63.27 2.01 1.45.84 2.63L20 13.91c-.33.33-.52.98-.41 1.45l.57 2.46c.45 1.94-.59 2.7-2.3 1.68l-2.39-1.42a1.7 1.7 0 0 0-1.58 0L11.5 19.5c-1.71 1.01-2.75.26-2.3-1.68l.57-2.46c.09-.48-.1-1.13-.43-1.46l-1.99-1.99c-1.17-1.17-.79-2.35.84-2.63l2.55-.42c.43-.07.94-.45 1.13-.84l1.41-2.82c.77-1.52 2.01-1.52 2.78.01"
            fill="currentColor"
          />
          <path
            d="M8.67 5.75h-6A.76.76 0 0 1 1.92 5c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M5.67 19.75h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M3.67 12.75h-1a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconStarList;
