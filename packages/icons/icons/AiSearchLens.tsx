import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSearchLens = forwardRef<SVGSVGElement, IconProps>(function IconAiSearchLens(
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
            d="M15.7 5.1A7.5 7.5 0 1 0 17.14 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m16 16 4.5 4.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 7.1c.3 2.24 1.16 3.1 3.4 3.4-2.24.3-3.1 1.16-3.4 3.4-.3-2.24-1.16-3.1-3.4-3.4 2.24-.3 3.1-1.16 3.4-3.4Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M3 10.5a7.5 7.5 0 1 0 15 0 7.5 7.5 0 1 0-15 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {duotone ? (
            <path d="M21.03 19.97a.75.75 0 0 1-1.06 1.06l-4.2-4.19a8 8 0 0 0 1.07-1.06z" fill="currentColor" />
          ) : (
            <path
              d="m16 16 4.5 4.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          <path
            d="M10.5 7.1c.3 2.24 1.16 3.1 3.4 3.4-2.24.3-3.1 1.16-3.4 3.4-.3-2.24-1.16-3.1-3.4-3.4 2.24-.3 3.1-1.16 3.4-3.4Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M10.5 2.25c2.22 0 4.38.97 5.83 2.42a8.4 8.4 0 0 1 2.42 5.83c0 2.22-.96 4.38-2.42 5.83a8.4 8.4 0 0 1-5.83 2.42 8.4 8.4 0 0 1-5.83-2.42 8.4 8.4 0 0 1-2.42-5.83c0-2.22.97-4.38 2.42-5.83a8.4 8.4 0 0 1 5.83-2.42z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M21.03 19.97a.75.75 0 0 1-1.06 1.06l-4.2-4.19a8 8 0 0 0 1.07-1.06z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M10.9 6.7c.15 1.2.43 1.92.96 2.44.52.53 1.25.8 2.44.96a.4.4 0 0 1 0 .8c-1.2.15-1.92.43-2.44.96-.53.52-.8 1.25-.96 2.44a.4.4 0 0 1-.8 0c-.15-1.2-.43-1.92-.96-2.44-.52-.53-1.25-.8-2.44-.96a.4.4 0 0 1 0-.8c1.2-.15 1.92-.43 2.44-.96.53-.52.8-1.25.96-2.44a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="M10.5 2.25c2.22 0 4.38.97 5.83 2.42a8.4 8.4 0 0 1 2.42 5.83c0 1.96-.74 3.86-1.91 5.28l4.19 4.19a.75.75 0 1 1-1.06 1.06l-4.2-4.2a8.4 8.4 0 0 1-5.27 1.92 8.4 8.4 0 0 1-5.83-2.42 8.4 8.4 0 0 1-2.42-5.83c0-2.22.97-4.38 2.42-5.83a8.4 8.4 0 0 1 5.83-2.42zm0 4.1a.4.4 0 0 0-.4.35c-.15 1.2-.43 1.92-.96 2.44-.52.53-1.25.8-2.44.96a.4.4 0 0 0 0 .8c1.2.15 1.92.43 2.44.96.53.52.8 1.25.96 2.44a.4.4 0 0 0 .8 0c.15-1.2.43-1.92.96-2.44.52-.53 1.25-.8 2.44-.96a.4.4 0 0 0 0-.8c-1.2-.15-1.92-.43-2.44-.96-.53-.52-.8-1.25-.96-2.44a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiSearchLens;
