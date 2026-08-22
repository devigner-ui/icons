import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDent = forwardRef<SVGSVGElement, IconProps>(function IconDent(
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
              d="M12.67 18.15c-.72 0-1.32-.59-1.32-1.32V7.17c0-.72.59-1.32 1.32-1.32.72 0 1.32.59 1.32 1.32v9.66c0 .73-.6 1.32-1.32 1.32"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
            <path
              d="M7.35 8.93a1.3 1.3 0 0 1 1.8-.48l8.37 4.83a1.32 1.32 0 0 1-1.32 2.28l-8.37-4.83a1.3 1.3 0 0 1-.48-1.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
            <path
              d="M7.35 15.07a1.3 1.3 0 0 1 .48-1.8l8.37-4.83a1.32 1.32 0 0 1 1.32 2.28l-8.37 4.83c-.63.37-1.44.15-1.8-.48"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
          </g>
          <path
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            fill="currentColor"
          />
          <path
            d="m17.51 13.27-1.46-.84a.5.5 0 0 1 0-.87l1.46-.84a1.32 1.32 0 0 0-1.32-2.28l-1.46.84a.5.5 0 0 1-.75-.43V7.17a1.32 1.32 0 1 0-2.64 0v1.68c0 .38-.42.63-.75.43l-1.46-.84a1.32 1.32 0 0 0-1.32 2.28l1.46.84a.5.5 0 0 1 0 .87l-1.46.84a1.32 1.32 0 0 0 1.32 2.28l1.46-.84a.5.5 0 0 1 .75.43v1.68a1.32 1.32 0 1 0 2.64 0v-1.68c0-.38.42-.63.75-.43l1.46.84a1.32 1.32 0 0 0 1.32-2.28"
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
            d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m3.38 10.43 1.46.84a1.32 1.32 0 0 1-1.32 2.28l-1.46-.84a.5.5 0 0 0-.75.43v1.68a1.32 1.32 0 1 1-2.64 0v-1.68c0-.38-.42-.63-.75-.43l-1.46.84a1.32 1.32 0 0 1-1.32-2.28l1.46-.84a.5.5 0 0 0 0-.87l-1.46-.84a1.32 1.32 0 0 1 1.32-2.28l1.46.84a.5.5 0 0 0 .75-.43V7.17a1.32 1.32 0 1 1 2.64 0v1.68c0 .38.42.63.75.43l1.46-.84a1.32 1.32 0 0 1 1.32 2.28l-1.46.84a.5.5 0 0 0 0 .87"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDent;
