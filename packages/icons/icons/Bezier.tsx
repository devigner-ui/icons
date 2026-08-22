import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBezier = forwardRef<SVGSVGElement, IconProps>(function IconBezier(
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
            d="M3.67 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.67 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.67 7h-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.67 7h-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.17 16.5v2c0 .61-.37 1.14-.89 1.36a1.4 1.4 0 0 1-.61.14h-2a1.5 1.5 0 0 1-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.17 16.5v2c0 .83-.67 1.5-1.5 1.5h-2a1.4 1.4 0 0 1-.61-.14 1.5 1.5 0 0 1-.89-1.36v-2c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.67 5.5v3c0 .82-.68 1.5-1.5 1.5h-3c-.82 0-1.5-.68-1.5-1.5v-3c0-.82.68-1.5 1.5-1.5h3c.82 0 1.5.68 1.5 1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.67 7.73A7.5 7.5 0 0 1 19.64 15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m5.7 15-.03-.5a7.5 7.5 0 0 1 4-6.77"
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
          <path d="M3.67 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4" fill="currentColor" />
          <path d="M21.67 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4" fill="currentColor" />
          <path
            d="M8.17 16.5v2c0 .61-.37 1.14-.89 1.36a1.4 1.4 0 0 1-.61.14h-2a1.5 1.5 0 0 1-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5"
            fill="currentColor"
          />
          <path
            d="M22.17 16.5v2c0 .83-.67 1.5-1.5 1.5h-2a1.4 1.4 0 0 1-.61-.14 1.5 1.5 0 0 1-.89-1.36v-2c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5"
            fill="currentColor"
          />
          <path
            d="M15.67 5.5v3c0 .82-.68 1.5-1.5 1.5h-3c-.82 0-1.5-.68-1.5-1.5v-3c0-.82.68-1.5 1.5-1.5h3c.82 0 1.5.68 1.5 1.5"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.67 6.25h-4a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.57a8.4 8.4 0 0 0-3.28 7.34c.04.38.37.66.74.66h.09a.75.75 0 0 0 .66-.83q-.02-.2-.02-.41c0-2.6 1.41-5 3.59-6.1a.75.75 0 0 0 .33-1.01l-.02-.03a1 1 0 0 0 .11-.36.8.8 0 0 0-.77-.76"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.1 7.75h2.57c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-4a.76.76 0 0 0-.75.75q0 .2.11.36l-.02.03a.75.75 0 0 0 .33 1.01 6.8 6.8 0 0 1 3.59 6.1l-.02.41c-.05.41.25.78.66.83h.09c.38 0 .7-.28.74-.66q.04-.3.04-.59a8.5 8.5 0 0 0-3.34-6.74"
              fill="currentColor"
            />
          </g>
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
            d="M19.81 7.72A2 2 0 0 0 23.67 7a2 2 0 0 0-3.86-.72l-.14-.03h-4V5.5c0-.82-.68-1.5-1.5-1.5h-3c-.82 0-1.5.68-1.5 1.5v.75h-4q-.07 0-.14.03A2 2 0 0 0 1.67 7a2 2 0 0 0 3.86.72l.14.03h2.57A8.4 8.4 0 0 0 4.95 15h-.28c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2q.33 0 .61-.14c.52-.22.89-.75.89-1.36v-2c0-.83-.67-1.5-1.5-1.5h-.23l.01-.09q-.02-.2-.02-.41a6.8 6.8 0 0 1 3.26-5.9c.04.77.69 1.4 1.48 1.4h3a1.5 1.5 0 0 0 1.49-1.4 6.8 6.8 0 0 1 3.26 5.9l-.02.41.01.09h-.24c-.83 0-1.5.67-1.5 1.5v2c0 .61.37 1.14.89 1.36q.28.14.61.14h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-.28q.03-.25.03-.5a8.4 8.4 0 0 0-3.32-6.75h2.57q.07 0 .14-.03"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBezier;
