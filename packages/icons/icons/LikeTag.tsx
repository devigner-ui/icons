import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLikeTag = forwardRef<SVGSVGElement, IconProps>(function IconLikeTag(
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
              d="m10.32 13.8 1.61 1.25c.21.21.68.31.99.31h1.98c.62 0 1.3-.47 1.46-1.09l1.25-3.79c.26-.73-.21-1.35-.99-1.35h-2.08a.52.52 0 0 1-.52-.62l.26-1.66c.1-.47-.21-.99-.68-1.14-.42-.16-.94.05-1.14.36l-2.13 3.17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
            <path
              d="M7.67 13.8V8.71c0-.73.31-.99 1.04-.99h.52c.73 0 1.04.26 1.04.99v5.09c0 .73-.31.99-1.04.99h-.52c-.73 0-1.04-.26-1.04-.99"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M18.67 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69a3 3 0 0 0-2.12-.87h-.75c-1.66 0-3-1.33-3-2.97V4.98a3 3 0 0 1 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91a3 3 0 0 1-3 2.97"
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
            opacity={duotone ? "0.4" : "1"}
            d="M18.67 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69a3 3 0 0 0-2.12-.87h-.75c-1.66 0-3-1.33-3-2.97V4.98a3 3 0 0 1 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91a3 3 0 0 1-3 2.97"
            fill="currentColor"
          />
          <path
            d="M17.25 9.57a1 1 0 0 0-.89-.42h-1.95a.4.4 0 0 1-.33-.15.5.5 0 0 1-.1-.37l.24-1.56c.1-.46-.21-.99-.67-1.14-.43-.16-.94.06-1.14.36l-1.94 2.88v-.36c0-.7-.3-.99-1.04-.99h-.49c-.74 0-1.04.29-1.04.99v4.78c0 .7.3.99 1.04.99h.49c.7 0 1-.27 1.03-.91l1.47 1.13c.2.2.65.31.97.31h1.85c.64 0 1.28-.48 1.42-1.07l1.17-3.56a.9.9 0 0 0-.09-.91"
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
            d="M18.67 2h-12c-1.66 0-3 1.33-3 2.97v10.91a3 3 0 0 0 3 2.97h.76c.8 0 1.56.31 2.12.87l1.71 1.69c.78.77 2.05.77 2.83 0l1.71-1.69a3 3 0 0 1 2.12-.87h.75c1.66 0 3-1.33 3-2.97V4.97a3 3 0 0 0-3-2.97m-1.32 8.5-1.17 3.56a1.5 1.5 0 0 1-1.42 1.07h-1.85c-.32 0-.77-.11-.97-.31l-1.47-1.15c-.03.64-.32.91-1.03.91h-.48c-.74 0-1.04-.29-1.04-.99V8.82c0-.7.3-.99 1.04-.99h.49c.74 0 1.04.29 1.04.99v.36l1.94-2.88a1 1 0 0 1 1.14-.36c.47.16.77.68.67 1.14L14 8.64q-.04.21.09.36t.33.15h1.95q.59 0 .89.42a1 1 0 0 1 .09.93"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLikeTag;
