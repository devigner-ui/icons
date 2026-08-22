import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconXd = forwardRef<SVGSVGElement, IconProps>(function IconXd(
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
            d="M15.67 22h-6c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.63 8.47v7.06h-1.77a1.77 1.77 0 1 1 0-3.54h1.77"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m6.71 8.47 5.65 7.06"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m12.36 8.47-5.65 7.06"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M16.86 2H8.49C4.85 2 2.68 4.17 2.68 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
            fill="currentColor"
          />
          <path
            d="M18.63 7.72a.76.76 0 0 0-.75.75v2.78h-1.02a2.52 2.52 0 0 0 0 5.04h1.77c.41 0 .75-.34.75-.75V8.48a.75.75 0 0 0-.75-.76m-.75 7.06h-1.02c-.56 0-1.02-.46-1.02-1.02s.46-1.02 1.02-1.02h1.02z"
            fill="currentColor"
          />
          <path
            d="M12.83 7.88a.74.74 0 0 0-1.05.12l-2.24 2.8L7.3 8a.75.75 0 0 0-1.17.93l2.45 3.06-2.45 3.06c-.26.32-.21.8.12 1.05q.21.16.47.16.35 0 .59-.28l2.24-2.8 2.24 2.8q.24.27.59.28.25 0 .47-.16a.75.75 0 0 0 .12-1.05l-2.45-3.06 2.45-3.06a.76.76 0 0 0-.14-1.05"
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
            d="M15.84 13.77c0 .56.46 1.02 1.02 1.02h1.02v-2.03h-1.02a1 1 0 0 0-1.02 1.01"
            fill="currentColor"
          />
          <path
            d="M16.86 2H8.49C4.85 2 2.68 4.17 2.68 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-3.91 13.06c.26.32.21.8-.12 1.05a.7.7 0 0 1-.47.16.8.8 0 0 1-.59-.28l-2.24-2.8-2.24 2.8a.76.76 0 0 1-1.06.12.75.75 0 0 1-.12-1.05L8.56 12 6.11 8.94a.74.74 0 0 1 .12-1.05.74.74 0 0 1 1.05.12l2.24 2.8 2.24-2.8a.75.75 0 0 1 1.17.93L10.48 12zm6.43.47c0 .41-.34.75-.75.75h-1.77a2.52 2.52 0 0 1 0-5.04h1.02V8.46c0-.41.34-.75.75-.75s.75.34.75.75z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconXd;
