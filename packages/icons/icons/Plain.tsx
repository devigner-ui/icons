import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlain = forwardRef<SVGSVGElement, IconProps>(function IconPlain(
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
            d="M16.21 8.85a.75.75 0 0 0-1.05-1.07zm-5.55 5.49 5.55-5.5-1.05-1.06-5.55 5.49z"
            fill="currentColor"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="m16.25 7.76 5.17-5.17c-1.2-1.2-3.44-.44-7.94 1.06L8.33 5.36C4.7 6.57 2.88 7.18 2.37 8.06c-.5.85-.5 1.9 0 2.74.51.89 2.33 1.49 5.96 2.7.45.15.96.04 1.3-.29l5.5-5.45a.8.8 0 0 1 1.12 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18.64 15.67 1.71-5.15c1.5-4.5 2.25-6.74 1.07-7.93l-5.18 5.17c.31.3.3.8 0 1.12l-5.42 5.36a1.4 1.4 0 0 0-.32 1.43c1.21 3.63 1.81 5.45 2.7 5.96.85.5 1.89.5 2.73 0 .89-.51 1.5-2.33 2.7-5.96"
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
            d="m18.64 15.67 1.71-5.15c1.5-4.5 2.25-6.75 1.06-7.93-1.18-1.2-3.43-.44-7.93 1.06L8.33 5.36C4.7 6.57 2.88 7.18 2.37 8.06c-.5.85-.5 1.9 0 2.74.51.89 2.33 1.49 5.96 2.7.45.15.96.04 1.3-.29l5.5-5.45a.79.79 0 1 1 1.11 1.12l-5.42 5.36a1.4 1.4 0 0 0-.32 1.43c1.21 3.63 1.81 5.45 2.7 5.96.85.5 1.89.5 2.73 0 .89-.51 1.5-2.33 2.7-5.96"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPlain;
