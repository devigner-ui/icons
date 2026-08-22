import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCar = forwardRef<SVGSVGElement, IconProps>(function IconCar(
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
            d="M16.18 2.83H9.16c-2.49 0-3.04 1.24-3.36 2.76L4.67 11h16l-1.13-5.41c-.32-1.52-.87-2.76-3.36-2.76"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.66 19.82A2 2 0 0 1 20.63 22h-1.88c-1.08 0-1.23-.46-1.42-1.03l-.2-.6c-.28-.82-.46-1.37-1.9-1.37h-5.12c-1.44 0-1.65.62-1.9 1.37l-.2.6c-.19.57-.34 1.03-1.42 1.03H4.71a2 2 0 0 1-2.03-2.18l.56-6.09c.14-1.5.43-2.73 3.05-2.73h12.76c2.62 0 2.91 1.23 3.05 2.73z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.67 8h-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.67 8h-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.67 3v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.17 5h3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.67 15h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.67 15h3"
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
            d="M22.85 13.66c-.15-1.65-.6-3.41-3.8-3.41H6.29c-3.21 0-3.64 1.76-3.8 3.41l-.56 6.09c-.07.76.18 1.52.7 2.09a2.8 2.8 0 0 0 2.08.91h1.88c1.62 0 1.93-.93 2.13-1.54l.2-.6c.23-.69.29-.86 1.19-.86h5.12c.9 0 .93.1 1.19.86l.2.6c.2.61.5 1.54 2.13 1.54h1.88c.79 0 1.55-.33 2.08-.91.52-.57.77-1.33.7-2.09z"
            fill="currentColor"
          />
          <path
            d="M21.67 7.25h-1.02l-.38-1.81c-.36-1.75-1.11-3.36-4.09-3.36H9.16c-2.98 0-3.73 1.61-4.09 3.36l-.38 1.81H3.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h.71l-.42 2q.79-.48 2.33-.5h12.76q1.54.02 2.33.5l-.42-2h.71c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
            fill="currentColor"
          />
          <path
            d="M9.67 15.75h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M18.67 15.75h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M22.42 8c0 .41-.34.75-.75.75h-18A.76.76 0 0 1 2.92 8c0-.41.34-.75.75-.75h1.02l.38-1.81c.36-1.75 1.11-3.36 4.09-3.36h7.02c2.98 0 3.73 1.61 4.09 3.36l.38 1.81h1.02c.41 0 .75.34.75.75"
            fill="currentColor"
          />
          <path
            d="M22.85 13.66c-.15-1.65-.6-3.41-3.8-3.41H6.29c-3.21 0-3.64 1.76-3.8 3.41l-.56 6.09c-.07.76.18 1.52.7 2.09a2.8 2.8 0 0 0 2.08.91h1.88c1.62 0 1.93-.93 2.13-1.54l.2-.6c.23-.69.29-.86 1.19-.86h5.12c.9 0 .93.1 1.19.86l.2.6c.2.61.5 1.54 2.13 1.54h1.88c.79 0 1.55-.33 2.08-.91.52-.57.77-1.33.7-2.09zM9.67 15.75h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.4 0 .75.34.75.75s-.34.75-.75.75m9 0h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.4 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCar;
