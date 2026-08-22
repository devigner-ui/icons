import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlain3 = forwardRef<SVGSVGElement, IconProps>(function IconPlain3(
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
            d="m18.64 15.67 1.71-5.15c1.5-4.5 2.25-6.75 1.06-7.93-1.18-1.2-3.43-.44-7.93 1.06L8.33 5.36C4.7 6.57 2.88 7.18 2.37 8.06c-.5.85-.5 1.9 0 2.74.51.89 2.33 1.49 5.96 2.7.58.2.87.3 1.12.46q.35.23.6.6c.16.24.26.53.45 1.11 1.21 3.63 1.81 5.45 2.7 5.96.85.5 1.89.5 2.73 0 .89-.51 1.5-2.33 2.7-5.96"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17.79 6.21-4.21 4.17"
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
            d="m20.35 10.52-1.71 5.15c-1.21 3.63-1.82 5.45-2.7 5.96-.85.5-1.9.5-2.74 0-.89-.51-1.49-2.33-2.7-5.96-.2-.58-.3-.87-.46-1.12a2 2 0 0 0-.6-.6c-.24-.16-.53-.25-1.11-.45-3.63-1.21-5.45-1.81-5.96-2.7-.5-.85-.5-1.89 0-2.73.51-.89 2.33-1.5 5.96-2.7l5.15-1.72c4.5-1.5 6.75-2.25 7.93-1.06 1.2 1.18.44 3.43-1.06 7.93"
            fill="currentColor"
          />
          <path
            d="M13.05 10.9a.75.75 0 0 1 0-1.06l4.21-4.16a.75.75 0 1 1 1.06 1.06l-4.21 4.17a.75.75 0 0 1-1.06 0"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="m20.35 10.52-1.71 5.15c-1.21 3.63-1.82 5.45-2.7 5.96-.85.5-1.9.5-2.74 0-.89-.51-1.49-2.33-2.7-5.96-.2-.58-.3-.87-.46-1.12a2 2 0 0 0-.6-.6c-.24-.16-.53-.25-1.11-.45-3.63-1.21-5.45-1.81-5.96-2.7-.5-.85-.5-1.89 0-2.73.51-.89 2.33-1.5 5.96-2.7l5.15-1.72c4.5-1.5 6.75-2.25 7.93-1.06 1.2 1.18.44 3.43-1.06 7.93m-7.3.38a.75.75 0 0 1 0-1.06l4.21-4.16a.75.75 0 1 1 1.06 1.06l-4.21 4.17a.75.75 0 0 1-1.06 0"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPlain3;
