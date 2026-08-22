import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRam = forwardRef<SVGSVGElement, IconProps>(function IconRam(
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
            d="M4.17 7v10c0 3 1.47 5 5 5h7c3.47 0 5-2 5-5v-1.17c0-.53-.21-1.04-.59-1.41l-.83-.83a2 2 0 0 1-.59-1.41V10a1 1 0 0 1 1-1 1 1 0 0 0 1-1V7c0-3-1.53-5-5-5h-7C5.64 2 4.17 4 4.17 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.66 21.97 8.65 19a2 2 0 0 1 2-2h4.01a2 2 0 0 1 2 1.99l.03 2.99"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.64 7.78h-6"
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
            d="M19.17 10v2.17a2 2 0 0 0 .59 1.42l.82.82a2 2 0 0 1 .59 1.42V17c0 2.85-1.38 4.8-4.49 4.98l-.02-2.99a2 2 0 0 0-2-1.99h-4.01a2 2 0 0 0-2 2l.01 2.98C5.5 21.8 4.17 19.85 4.17 17V7c0-3 1.47-5 5-5h7c3.47 0 5 2 5 5v1a1 1 0 0 1-1 1 1 1 0 0 0-1 1"
            fill="currentColor"
          />
          <path
            d="m16.68 21.98-.51.02h-7q-.27 0-.51-.02L8.65 19a2 2 0 0 1 2-2h4.01a2 2 0 0 1 2 1.99z"
            fill="currentColor"
          />
          <path
            d="M14.64 8.53h-6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6a.75.75 0 1 1 0 1.5"
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
            d="M20.17 9a1 1 0 0 0 1-1V7c0-3-1.53-5-5-5h-7c-3.53 0-5 2-5 5v10c0 2.31.88 4.03 2.9 4.68.3.1.59-.14.59-.46L7.65 19a3 3 0 0 1 3-3h4.01a3 3 0 0 1 3 2.98l.02 2.25c0 .31.3.55.6.45 1.98-.67 2.89-2.38 2.89-4.68v-1.17a2 2 0 0 0-.59-1.42l-.82-.82a2 2 0 0 1-.59-1.42V10a1 1 0 0 1 1-1m-5.53-.47h-6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6a.75.75 0 1 1 0 1.5"
            fill="currentColor"
          />
          <path
            d="M16.68 20.97a1 1 0 0 1-1 1.01H9.66a1 1 0 0 1-1-1L8.65 19a2 2 0 0 1 2-2h4.01a2 2 0 0 1 2 1.99z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRam;
