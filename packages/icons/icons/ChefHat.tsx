import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconChefHat = forwardRef<SVGSVGElement, IconProps>(function IconChefHat(
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
            d="M12.76 22.01 8.34 22c-.93-.01-2.19.09-2.85-.7-.49-.58-.47-1.49-.48-2.21q-.03-2.26-.01-4.51a4.8 4.8 0 0 1-2.89-5.49m1.73-2.97a5 5 0 0 1 3.9-1.06 4.5 4.5 0 0 1 8.52-.01c5.84-.62 8.01 7.04 2.74 9.53 0 1.53.03 3.06-.01 4.59-.02.7 0 1.56-.48 2.13-.53.63-1.43.7-2.25.7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 6.5a5 5 0 0 1 .24-1.44"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 6.5q-.02-.74-.24-1.45"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 18h14"
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
            d="M19 14.58c0 1.53.03 3.06-.01 4.59-.02.7 0 1.56-.48 2.13-.68.81-1.99.7-2.94.7q-3.61.02-7.23 0c-.93-.01-2.19.09-2.85-.7-.49-.58-.47-1.49-.48-2.21q-.03-2.26-.01-4.51C-.28 12.2 1.94 4.32 7.74 5.06a4.5 4.5 0 0 1 8.52-.01c5.84-.62 8.01 7.04 2.74 9.53z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 6.5a5 5 0 0 1 .24-1.44"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 6.5q-.02-.74-.24-1.45"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5 18h14"
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
            d="M19 18H5c.01 1.4.08 2.91.59 3.41C6.17 22 7.1 22 9 22h6c1.89 0 2.83 0 3.41-.59.5-.5.58-2.01.59-3.41"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 5a5 5 0 0 0-2 9.58V18h14v-3.42a5 5 0 0 0-2.74-9.53 4.5 4.5 0 0 0-8.52 0A5 5 0 0 0 7 5"
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
            d="M7 5a5 5 0 0 0-2 9.58v2.67h14v-2.67a5 5 0 0 0-2.74-9.53 4.5 4.5 0 0 0-8.52 0A5 5 0 0 0 7 5"
            fill="currentColor"
          />
          <path
            d="M19 18.75H5c.01 1.4.08 2.16.59 2.66C6.17 22 7.1 22 9 22h6c1.89 0 2.83 0 3.41-.59.5-.5.58-1.26.59-2.66"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconChefHat;
