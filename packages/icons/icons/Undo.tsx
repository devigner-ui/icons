import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUndo = forwardRef<SVGSVGElement, IconProps>(function IconUndo(
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
            opacity={duotone ? "0.4" : "1"}
            d="M7.8 18.31h8a5 5 0 0 0 0-10h-11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.1 10.81 4.54 8.25 7.1 5.69"
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
            d="M8.48 2h8.37c3.65 0 5.82 2.17 5.82 5.81v8.37c0 3.64-2.17 5.81-5.81 5.81H8.48c-3.64.01-5.81-2.16-5.81-5.8V7.81C2.67 4.17 4.84 2 8.48 2"
            fill="currentColor"
          />
          <path
            d="M14.59 8.98H9.44l.33-.33a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0L7.14 9.16a.75.75 0 0 0 0 1.06l1.57 1.57q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06l-.26-.26h5.08a2.33 2.33 0 0 1 0 4.66H9.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h4.92a3.83 3.83 0 1 0 0-7.65"
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
            d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-2.27 14.63H9.67a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4.92a2.33 2.33 0 0 0 0-4.66H9.52l.26.26c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-1.57-1.57a.75.75 0 0 1 0-1.06l1.57-1.57a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.34.33h5.15a3.83 3.83 0 1 1 0 7.65"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconUndo;
