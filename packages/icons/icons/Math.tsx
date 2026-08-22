import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMath = forwardRef<SVGSVGElement, IconProps>(function IconMath(
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
            d="M15.1 5.64h7.27"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.97 5.64h7.28"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.1 15.33h7.27"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.1 21.39h7.27"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.76 9.27V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m2.97 22 7.28-7.27"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m10.25 22-7.28-7.27"
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
            d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
            fill="currentColor"
          />
          <path
            d="M11.17 8.81h-4.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4.5c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M18.67 14.81h-4.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4.5c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M18.67 18.56h-4.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4.5c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M18.67 7.31h-1.48v-1.5a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.5h-1.52a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h1.52v1.5c0 .41.34.75.75.75s.75-.34.75-.75v-1.5h1.48c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
            fill="currentColor"
          />
          <path
            d="m9.98 15.94 1.72-1.72a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-1.72 1.72-1.72-1.72a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l1.72 1.72-1.72 1.72a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22L8.92 17l1.72 1.72q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06z"
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
            d="M16.86 2H8.48c-3.64 0-5.8 2.17-5.8 5.81v8.37c0 3.65 2.16 5.82 5.8 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2M11.7 17.66c.3.29.3.77 0 1.06a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22L8.92 17 7.2 18.72a.8.8 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 0 1 1.06 0c.3.29.3.77 0 1.06l-1.72 1.72zm-.53-8.85h-4.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4.5c.41 0 .75.34.75.75s-.34.75-.75.75m7.5 9.75h-4.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4.5c.41 0 .75.34.75.75s-.34.75-.75.75m0-3.75h-4.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4.5c.41 0 .75.34.75.75s-.34.75-.75.75m0-6H17.2v1.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-1.5h-1.52a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.52v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5h1.48c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMath;
