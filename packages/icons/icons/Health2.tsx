import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHealth2 = forwardRef<SVGSVGElement, IconProps>(function IconHealth2(
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
            d="M9.64 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m2.64 12.7 6-.02c.75 0 1.59.57 1.87 1.27l1.14 2.88c.26.65.67.65.93 0l2.29-5.81c.22-.56.63-.58.91-.05l1.04 1.97a2.2 2.2 0 0 0 1.77 1.07h4.06"
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
            d="M22.67 7.81V14h-4.08a2.2 2.2 0 0 1-1.77-1.07l-1.04-1.97c-.28-.53-.68-.5-.9.05l-2.3 5.81c-.25.65-.67.65-.93 0l-1.14-2.88a2.2 2.2 0 0 0-1.86-1.27l-5.98.03V7.81C2.67 4.17 4.84 2 8.48 2h8.38c3.64 0 5.81 2.17 5.81 5.81"
            fill="currentColor"
          />
          <path
            d="M22.67 16.19V14h-4.08a2.2 2.2 0 0 1-1.77-1.07l-1.04-1.97c-.28-.53-.68-.5-.9.05l-2.3 5.81c-.25.65-.67.65-.93 0l-1.14-2.88a2.2 2.2 0 0 0-1.86-1.27l-5.98.03v3.49c0 3.58 2.1 5.74 5.63 5.8l.34.01h8l.44-.01c3.51-.08 5.59-2.23 5.59-5.8"
            fill="currentColor"
          />
          <path d="M2.67 12.7v3.31L2.64 15v-2.3z" fill="currentColor" />
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
            d="M22.67 7.81v4.69h-4.08c-.12-.01-.38-.16-.44-.27l-1.04-1.97c-.41-.78-1.12-1.22-1.88-1.18s-1.41.55-1.74 1.38l-1.38 3.46-.2-.52a3.7 3.7 0 0 0-3.27-2.23l-5.97.03V7.81C2.67 4.17 4.84 2 8.48 2h8.38c3.64 0 5.81 2.17 5.81 5.81"
            fill="currentColor"
          />
          <path
            d="M22.67 16.19V14h-4.08a2.2 2.2 0 0 1-1.77-1.07l-1.04-1.97c-.28-.53-.68-.5-.9.05l-2.3 5.81c-.25.65-.67.65-.93 0l-1.14-2.88a2.2 2.2 0 0 0-1.86-1.27l-5.98.03v3.49c0 3.58 2.1 5.74 5.63 5.8l.34.01h8l.44-.01c3.51-.08 5.59-2.23 5.59-5.8"
            fill="currentColor"
          />
          <path d="M2.67 12.7v3.31L2.64 15v-2.3z" fill="currentColor" />
        </svg>
      )}
    </>
  );
});

export default IconHealth2;
