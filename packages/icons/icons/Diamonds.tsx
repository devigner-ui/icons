import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDiamonds = forwardRef<SVGSVGElement, IconProps>(function IconDiamonds(
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
            d="M16.96 2.15H8.37c-1.7 0-2.45.85-2.91 1.89L2.9 9.8a3.5 3.5 0 0 0 .56 3.43l6.86 7.54a3.14 3.14 0 0 0 4.71 0l6.85-7.55a3.4 3.4 0 0 0 .55-3.43l-2.56-5.76c-.46-1.03-1.21-1.88-2.91-1.88"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.17 8h17"
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
            d="m21.88 13.24-6.85 7.54a3.13 3.13 0 0 1-4.72 0l-6.85-7.54A3.5 3.5 0 0 1 2.9 9.8L3.7 8h17.94l.8 1.8a3.5 3.5 0 0 1-.56 3.44"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.64 8H3.7l1.76-3.96C5.93 3 6.67 2.15 8.37 2.15h8.6c1.7 0 2.44.85 2.91 1.89z"
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
            d="m22.44 9.8-.8-1.8-1.76-3.96c-.47-1.04-1.21-1.89-2.91-1.89h-8.6c-1.7 0-2.44.85-2.91 1.89L3.7 8l-.8 1.8a3.5 3.5 0 0 0 .56 3.44l6.85 7.54a3.13 3.13 0 0 0 4.72 0l6.85-7.54a3.5 3.5 0 0 0 .56-3.44"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDiamonds;
