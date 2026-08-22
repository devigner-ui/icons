import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGift2 = forwardRef<SVGSVGElement, IconProps>(function IconGift2(
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
            d="M20.64 10h-16v8c0 3 1 4 4 4h8c3 0 4-1 4-4z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.17 7v1c0 1.1-.53 2-2 2h-15c-1.53 0-2-.9-2-2V7c0-1.1.47-2 2-2h15c1.47 0 2 .9 2 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.31 5H6.79a.94.94 0 0 1 .03-1.3l1.42-1.42a.96.96 0 0 1 1.35 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.54 5h-5.52l2.72-2.72a.96.96 0 0 1 1.35 0l1.42 1.42c.36.36.37.93.03 1.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.61 10v5.14a1 1 0 0 0 1.55.84l.94-.62a1 1 0 0 1 1.1 0l.89.6a1 1 0 0 0 1.55-.83V10z"
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
            d="M20.64 10v8c0 3-1 4-4 4h-8c-3 0-4-1-4-4v-8z"
            fill="currentColor"
          />
          <path
            d="M22.17 7v1c0 1.1-.53 2-2 2h-15c-1.53 0-2-.9-2-2V7c0-1.1.47-2 2-2h15c1.47 0 2 .9 2 2"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.31 5H6.79a.94.94 0 0 1 .03-1.3l1.42-1.42a.96.96 0 0 1 1.35 0z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.54 5h-5.52l2.72-2.72a.96.96 0 0 1 1.35 0l1.42 1.42c.36.36.37.93.03 1.3"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.61 10v5.14a1 1 0 0 0 1.55.84l.94-.62a1 1 0 0 1 1.1 0l.89.6a1 1 0 0 0 1.55-.83V10z"
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
            d="M20.67 12v6a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4v-6a1 1 0 0 1 1-1h1.97a1 1 0 0 1 1 1v3.14a2 2 0 0 0 2 2.01q.58 0 1.09-.33l.95-.62.88.59a2 2 0 0 0 3.11-1.66V12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1"
            fill="currentColor"
          />
          <path
            d="M22.17 7v1c0 1.1-.53 2-2 2h-15c-1.53 0-2-.9-2-2V7c0-1.1.47-2 2-2h15c1.47 0 2 .9 2 2"
            fill="currentColor"
          />
          <path
            d="M12.31 5H6.79a.94.94 0 0 1 .03-1.3l1.42-1.42a.96.96 0 0 1 1.35 0z"
            fill="currentColor"
          />
          <path
            d="M18.54 5h-5.52l2.72-2.72a.96.96 0 0 1 1.35 0l1.42 1.42c.36.36.37.93.03 1.3"
            fill="currentColor"
          />
          <path
            d="M14.64 11a1 1 0 0 1 1 1v3.13a1 1 0 0 1-1.55.83l-.9-.6a1 1 0 0 0-1.1 0l-.94.62a1 1 0 0 1-1.54-.83V12a1 1 0 0 1 1-1z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGift2;
