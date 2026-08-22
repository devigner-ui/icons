import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHtml5 = forwardRef<SVGSVGElement, IconProps>(function IconHtml5(
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
            d="M4.79 2h15.77a1 1 0 0 1 .99 1.11l-1.8 16.22a1 1 0 0 1-.72.85l-6.08 1.74q-.27.08-.55 0l-6.08-1.74a1 1 0 0 1-.72-.85L3.8 3.11A1 1 0 0 1 4.79 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.92 6.75h-8.5l.5 4.5h7.5l-.5 5-3.5 1-3.5-1v-2"
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
            d="M4.79 2h15.77a1 1 0 0 1 .99 1.11l-1.8 16.22a1 1 0 0 1-.72.85l-6.08 1.74q-.27.08-.55 0l-6.08-1.74a1 1 0 0 1-.72-.85L3.8 3.11A1 1 0 0 1 4.79 2"
            fill="currentColor"
          />
          <path
            d="m12.42 18-.21-.03-3.5-1a.75.75 0 0 1-.54-.72v-2c0-.41.34-.75.75-.75s.75.34.75.75v1.43l2.75.79 2.8-.8.37-3.67H8.92a.76.76 0 0 1-.75-.67l-.5-4.5A.75.75 0 0 1 8.42 6h8.5c.41 0 .75.34.75.75s-.34.75-.75.75H9.26l.33 3h6.83q.33 0 .56.25.21.25.19.58l-.5 5a.8.8 0 0 1-.54.65l-3.5 1z"
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
            d="M20.55 2H4.78a1 1 0 0 0-.99 1.11l1.8 16.22a1 1 0 0 0 .72.85l6.08 1.74q.28.08.55 0l6.08-1.74a1 1 0 0 0 .72-.85l1.8-16.22A1 1 0 0 0 20.55 2m-3.63 5.5H9.26l.33 3h6.83q.32 0 .56.25.21.25.19.58l-.5 5a.8.8 0 0 1-.54.65l-3.5 1a1 1 0 0 1-.42 0l-3.5-1a.75.75 0 0 1-.54-.72v-2c0-.41.34-.75.75-.75s.75.34.75.75v1.43l2.75.79 2.8-.8.37-3.67H8.92a.76.76 0 0 1-.75-.67l-.5-4.5a.75.75 0 0 1 .75-.83h8.5c.41 0 .75.34.75.75s-.34.74-.75.74"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHtml5;
