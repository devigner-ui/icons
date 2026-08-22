import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRuble = forwardRef<SVGSVGElement, IconProps>(function IconRuble(
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
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="12"
            cy="12.0005"
            r="10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M9 14h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M10 12V8.2l.01-.36a1 1 0 0 1 .83-.83L11.2 7h2.3a2.5 2.5 0 0 1 0 5zm0 0v5m0-5H9"
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
            d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 13.25a.75.75 0 1 0 0 1.5h.25V17a.75.75 0 0 0 1.5 0v-2.25H12a.75.75 0 0 0 0-1.5h-1.25v-.5h2.75a3.25 3.25 0 0 0 0-6.5h-2.34q-.22 0-.43.02a1.75 1.75 0 0 0-1.48 1.9v3.08H9a.75.75 0 1 0 0 1.5h.25v.5zm4.5-2h-2.75V7.96q.04-.17.2-.2h2.55a1.75 1.75 0 1 1 0 3.5"
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
            d="M13.5 11.25h-2.75V7.96q.04-.17.2-.2H11l.2-.01h2.3a1.75 1.75 0 1 1 0 3.5"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0M8.25 14c0-.41.34-.75.75-.75h.25v-.5H9a.75.75 0 0 1 0-1.5h.25V8.16q0-.22.02-.43a1.75 1.75 0 0 1 1.9-1.48h2.33a3.25 3.25 0 0 1 0 6.5h-2.75v.5H12a.75.75 0 0 1 0 1.5h-1.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRuble;
