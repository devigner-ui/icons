import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloudAdd = forwardRef<SVGSVGElement, IconProps>(function IconCloudAdd(
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
              d="M6.21 11.12c-4.68.33-4.68 7.14 0 7.47h1.92"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.26 11.12C3.05 2.19 16.59-1.38 18.14 8c4.33.55 6.08 6.32 2.8 9.19a5.3 5.3 0 0 1-3.64 1.4h-.09"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M17.67 16.53a4.7 4.7 0 0 1-.73 2.57 4.96 4.96 0 0 1-8.81-.51 5 5 0 1 1 9.54-2.06"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m11.11 16.53.99.99 2.13-1.97"
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
            d="M20.94 17.19a5.3 5.3 0 0 1-3.64 1.4h-.09q.45-.94.46-2.06a5 5 0 1 0-9.54 2.06H6.21c-4.68-.33-4.68-7.14 0-7.47h.05C3.05 2.19 16.59-1.38 18.14 8c4.33.55 6.08 6.32 2.8 9.19"
            fill="currentColor"
          />
          <path
            d="M12.67 11.53a5 5 0 1 0 0 10 5 5 0 0 0 0-10m2.07 4.57-2.13 1.97a.8.8 0 0 1-.51.2.7.7 0 0 1-.53-.22l-.99-.99a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.48.48 1.6-1.48a.75.75 0 0 1 1.06.04c.28.3.26.77-.04 1.06"
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
            d="M12.67 11.53a5 5 0 1 0 0 10 5 5 0 0 0 0-10m2.07 4.57-2.13 1.97a.8.8 0 0 1-.51.2.7.7 0 0 1-.53-.22l-.99-.99a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.48.48 1.6-1.48a.75.75 0 0 1 1.06.04c.28.3.26.77-.04 1.06"
            fill="currentColor"
          />
          <path
            d="M20.87 17.07q-.54.48-1.17.81c-.36.18-.72-.17-.66-.57q.06-.43.06-.9c0-3.58-2.92-6.5-6.5-6.5a6.5 6.5 0 0 0-6.36 7.83c.07.35-.2.7-.55.61-3.95-.96-3.97-7.04.45-7.35h.05C2.98 2.07 16.52-1.5 18.07 7.88c4.33.55 6.08 6.32 2.8 9.19"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCloudAdd;
