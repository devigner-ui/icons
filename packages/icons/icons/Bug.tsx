import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBug = forwardRef<SVGSVGElement, IconProps>(function IconBug(
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
            d="M19 15v-3.06A3.94 3.94 0 0 0 15.06 8H8.94A3.94 3.94 0 0 0 5 11.94V15a7 7 0 1 0 14 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M16.5 8.5v-1a4.5 4.5 0 1 0-9 0v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19 14h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5 14H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.5 3.5 17 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.5 3.5 7 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m20.5 20-2-.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m20.5 8-2 .8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m3.5 20 2-.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m3.5 8 2 .8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 21.5V15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 11.94V15a7 7 0 0 1-6.25 6.96V15a.75.75 0 0 0-1.5 0v6.96A7 7 0 0 1 5 15v-3.06A3.94 3.94 0 0 1 8.94 8h6.12A3.93 3.93 0 0 1 19 11.94"
            fill="currentColor"
          />
          <path d="M19 14.75v-1.5h3a.75.75 0 1 1 0 1.5z" fill="currentColor" />
          <path
            d="M17.5 19.34a7 7 0 0 0 .8-1.28l2.54 1.27a.75.75 0 1 1-.68 1.34z"
            fill="currentColor"
          />
          <path
            d="M5.7 18.06a7 7 0 0 0 .8 1.28l-2.66 1.33a.75.75 0 0 1-.68-1.34z"
            fill="currentColor"
          />
          <path d="M5 13.25H2a.75.75 0 1 0 0 1.5h3z" fill="currentColor" />
          <path
            d="m17.35 8.74 2.81-1.41a.75.75 0 1 1 .68 1.34l-2.42 1.2a4 4 0 0 0-1.07-1.13"
            fill="currentColor"
          />
          <path
            d="M6.65 8.74q-.66.46-1.07 1.14l-2.42-1.2a.75.75 0 0 1 .68-1.35z"
            fill="currentColor"
          />
          <path
            d="M16.5 8.27V7.5a4.5 4.5 0 1 0-9 0v.77q.68-.26 1.44-.27h6.12q.77 0 1.44.27"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M6.38 1.58a.75.75 0 0 0 .2 1.04L8.94 4.2q.6-.56 1.4-.88L7.41 1.38a.75.75 0 0 0-1.04.2"
              fill="currentColor"
            />
            <path
              d="M15.06 4.2a5 5 0 0 0-1.4-.88l2.92-1.94a.75.75 0 1 1 .84 1.24z"
              fill="currentColor"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 14.25c.41 0 .75.34.75.75v7h-1.5v-7c0-.41.34-.75.75-.75"
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
            d="M17.42 2.62a.75.75 0 1 0-.84-1.24l-2.91 1.94a4.5 4.5 0 0 0-3.34 0L7.42 1.38a.75.75 0 1 0-.84 1.24L8.94 4.2a4.5 4.5 0 0 0-1.36 2.47q.65-.17 1.36-.17h6.12q.71 0 1.36.17a4.5 4.5 0 0 0-1.36-2.47z"
            fill="currentColor"
          />
          <path
            d="M1.25 14c0-.41.34-.75.75-.75h3v-1.31q.02-1.27.7-2.25l-2.48-1a.75.75 0 0 1 .56-1.39l3.14 1.26Q7.82 8 8.94 8h6.12q1.12.01 2.02.56l3.14-1.26a.75.75 0 1 1 .56 1.4l-2.48.99q.68.98.7 2.25v1.31h3a.75.75 0 0 1 0 1.5h-3V15c0 1.18-.3 2.3-.8 3.27l2.58 1.03a.75.75 0 1 1-.56 1.4l-2.9-1.16a7 7 0 0 1-4.57 2.42V15a.75.75 0 0 0-1.5 0v6.96a7 7 0 0 1-4.58-2.42l-2.9 1.16a.75.75 0 1 1-.55-1.4l2.59-1.03A7 7 0 0 1 5 15v-.25H2a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBug;
