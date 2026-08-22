import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEraser = forwardRef<SVGSVGElement, IconProps>(function IconEraser(
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
            d="m5.5 11.41.54.53zM3 14.95h-.75zM9.05 21v.75zM11.4 5.5l-.53-.52zm6.55 6.56-5.9 5.9 1.06 1.07 5.9-5.9zm-11.92-.12 5.9-5.9-1.06-1.06-5.9 5.9zm0 6.03a22 22 0 0 1-1.82-1.94c-.36-.48-.47-.79-.47-1.08h-1.5c0 .75.31 1.38.78 2q.7.87 1.94 2.08zm-1.07-7.09q-1.24 1.21-1.94 2.08a3.2 3.2 0 0 0-.78 2h1.5c0-.3.1-.6.47-1.09.38-.5.97-1.08 1.82-1.93zm7.09 7.09a21 21 0 0 1-1.93 1.8c-.48.37-.8.48-1.08.48v1.5c.75 0 1.37-.31 1.99-.78.6-.45 1.26-1.12 2.08-1.94zm-7.09 1.06q1.22 1.25 2.09 1.94a3.2 3.2 0 0 0 1.99.78v-1.5c-.3 0-.6-.1-1.08-.47-.5-.38-1.08-.96-1.93-1.81zm13-13c.84.86 1.43 1.44 1.8 1.94.37.48.48.79.48 1.08h1.5c0-.75-.31-1.38-.78-2-.46-.59-1.12-1.25-1.94-2.07zm1.06 7.1c.82-.83 1.48-1.5 1.94-2.1.47-.6.78-1.23.78-1.98h-1.5c0 .29-.1.6-.47 1.08-.38.5-.97 1.08-1.82 1.93zm0-8.15c-.82-.82-1.5-1.5-2.09-1.95a3.2 3.2 0 0 0-1.99-.78v1.5c.3 0 .6.1 1.08.47.5.38 1.08.97 1.93 1.82zm-7.09 1.06c.85-.85 1.44-1.44 1.93-1.82.48-.36.8-.47 1.08-.47v-1.5c-.75 0-1.37.31-1.99.78-.6.46-1.26 1.13-2.08 1.95z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.24 17.84a.75.75 0 0 0 1.06-1.06zM7.22 9.7a.75.75 0 1 0-1.06 1.06zm7.08 7.08L7.22 9.7l-1.06 1.06 7.08 7.08z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 21h12"
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
            d="M14.95 3c-1.04 0-1.87.84-3.54 2.5L6.5 10.43l7.09 7.08 4.9-4.9c1.68-1.7 2.51-2.53 2.51-3.57s-.84-1.87-2.5-3.54C16.81 3.84 15.98 3 14.94 3"
            fill="currentColor"
          />
          <path
            d="M13.59 17.5 6.5 10.42l-1 .99C3.85 13.08 3 13.91 3 14.95s.84 1.88 2.5 3.55C7.19 20.17 8.02 21 9.06 21s1.87-.83 3.54-2.5z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path d="M9.03 21H9z" fill="currentColor" />
            <path
              d="M9.06 21c.8 0 1.48-.5 2.51-1.5H21a.75.75 0 0 1 0 1.5z"
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
            d="M11.41 5.5c1.67-1.66 2.5-2.5 3.54-2.5s1.87.84 3.54 2.5C20.17 7.19 21 8.02 21 9.06s-.84 1.87-2.5 3.54l-4.2 4.2-7.08-7.1z"
            fill="currentColor"
          />
          <path
            d="m6.16 10.76 7.08 7.08-.65.66-1.02 1H21a.75.75 0 0 1 0 1.5H9c-1.02-.02-1.85-.86-3.5-2.5C3.85 16.83 3 15.99 3 14.95c0-1.03.84-1.87 2.5-3.54z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconEraser;
