import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBagCheck = forwardRef<SVGSVGElement, IconProps>(function IconBagCheck(
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
      {variant === "Broken" ? (
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
            d="m9 14.9 2 2 4-5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 7.15V5.4a3 3 0 1 1 6 0v1.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M19.93 15.44c.6 3.2.85 4.52.17 5.35-.68.82-2.02.86-5.34.86H9.23c-3.32 0-4.66-.04-5.34-.86-.68-.83-.43-2.15.17-5.35l.76-4c.43-2.3.64-3.24 1.25-3.76.62-.53 1.6-.53 3.9-.53h4.06c2.3 0 3.28 0 3.9.53.6.52.82 1.47 1.25 3.76l.15.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      ) : !fill ? (
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
            d="M4.82 11.44c.43-2.3.64-3.24 1.25-3.76.62-.53 1.6-.53 3.9-.53h4.06c2.3 0 3.28 0 3.9.53.6.52.82 1.47 1.25 3.76l.75 4c.6 3.2.85 4.52.17 5.35-.68.82-2.02.86-5.34.86H9.23c-3.32 0-4.66-.04-5.34-.86-.68-.83-.43-2.15.17-5.35z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m9 14.9 2 2 4-5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 7.15V5.4a3 3 0 1 1 6 0v1.75"
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
            d="M4.08 11.3c.44-2.35.66-3.52 1.5-4.2.82-.7 2.02-.7 4.39-.7h4.04c2.38 0 3.57 0 4.4.7.84.68 1.06 1.85 1.5 4.2l.75 4c.62 3.29.92 4.93.02 6.02s-2.56 1.08-5.91 1.08H9.23c-3.35 0-5.02 0-5.92-1.08-.9-1.09-.6-2.73.02-6.03z"
            fill="currentColor"
          />
          <path
            d="M9.75 5.4a2.25 2.25 0 0 1 4.5 0v1q.85 0 1.5.02V5.4a3.75 3.75 0 1 0-7.5 0v1.02q.65-.02 1.5-.02z"
            fill="currentColor"
          />
          <path
            d="M15.59 12.37a.75.75 0 1 0-1.18-.94l-3.47 4.35-1.41-1.41a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.12-.06z"
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
            d="M8.25 6.42V5.4a3.75 3.75 0 1 1 7.5 0v1.02c1.29.03 2.07.17 2.68.67.83.7 1.05 1.86 1.49 4.2l.75 4c.61 3.3.92 4.94.02 6.03s-2.57 1.08-5.92 1.08H9.23c-3.35 0-5.02 0-5.92-1.08-.9-1.09-.6-2.73.02-6.03l.75-4c.44-2.34.66-3.5 1.5-4.2.6-.5 1.38-.64 2.67-.67m1.5-1.02a2.25 2.25 0 0 1 4.5 0v1h-4.5zm5.72 5.91c.32.26.37.74.12 1.06l-4 5a.75.75 0 0 1-1.12.06l-2-2a.75.75 0 1 1 1.06-1.06l1.4 1.4 3.48-4.34a.75.75 0 0 1 1.06-.12"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBagCheck;
