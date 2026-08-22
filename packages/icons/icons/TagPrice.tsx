import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTagPrice = forwardRef<SVGSVGElement, IconProps>(function IconTagPrice(
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
            opacity={duotone ? "0.4" : "1"}
            d="M4.73 16.14c-1.55-1.55-2.32-2.32-2.6-3.32-.3-1-.05-2.07.44-4.2l.29-1.23c.4-1.8.62-2.69 1.23-3.3s1.5-.82 3.3-1.23l1.23-.29c2.13-.49 3.2-.73 4.2-.45 1 .3 1.77 1.06 3.32 2.6l1.83 1.84c2.69 2.69 4.03 4.03 4.03 5.7s-1.34 3.02-4.03 5.7c-2.7 2.7-4.04 4.04-5.7 4.04-1.68 0-3.02-1.34-5.71-4.03z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M15.39 15.39c.59-.59.66-1.46.18-1.95-.5-.48-1.36-.4-1.95.18s-1.45.67-1.94.18c-.5-.49-.41-1.36.17-1.95m3.54 3.54.35.35m-.35-.35c-.4.4-.94.56-1.39.47m-2.5-4.36.35.35m0 0c.34-.33.76-.5 1.15-.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <circle
            cx="8.60699"
            cy="8.87939"
            r="2"
            transform="rotate(-45 8.60699 8.87939)"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="m17.97 6.56-1.83-1.83c-1.55-1.55-2.32-2.32-3.32-2.6-1-.3-2.07-.05-4.2.44l-1.23.29c-1.8.41-2.69.62-3.3 1.23s-.82 1.5-1.23 3.3l-.29 1.23c-.49 2.13-.73 3.2-.45 4.2.29 1 1.06 1.77 2.6 3.32l1.84 1.83c2.69 2.69 4.03 4.03 5.7 4.03s3.02-1.34 5.7-4.03c2.7-2.7 4.04-4.04 4.04-5.7 0-1.68-1.34-3.02-4.03-5.71"
            fill="currentColor"
          />
          <path
            d="M11.15 14.33c-.68-.67-.67-1.64-.27-2.4a.75.75 0 0 1 1.04-1.05q.52-.28 1.09-.27a.75.75 0 0 1-.02 1.5c-.17 0-.4.08-.6.27-.4.4-.3.78-.18.89.1.1.5.2.88-.18.79-.78 2.14-1.04 3-.18.68.68.67 1.64.27 2.4a.75.75 0 0 1-1.04 1.05 2.2 2.2 0 0 1-1.47.24.75.75 0 0 1 .3-1.47c.18.03.46-.03.7-.27.4-.39.3-.78.19-.88-.11-.11-.5-.22-.89.17-.78.79-2.14 1.05-3 .18"
            fill="currentColor"
          />
          <path
            d="M10.02 10.3A2 2 0 1 0 7.2 7.46a2 2 0 0 0 2.83 2.82"
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
            d="m16.14 4.73 1.83 1.83c2.69 2.69 4.03 4.03 4.03 5.7s-1.34 3.02-4.03 5.7c-2.7 2.7-4.04 4.04-5.7 4.04-1.68 0-3.02-1.34-5.71-4.03l-1.83-1.83c-1.55-1.55-2.32-2.32-2.6-3.32-.3-1-.05-2.07.44-4.2l.29-1.23c.4-1.8.62-2.69 1.23-3.3s1.5-.82 3.3-1.23l1.23-.29c2.13-.49 3.2-.73 4.2-.45 1 .3 1.77 1.06 3.32 2.6m-5 9.6c-.67-.67-.66-1.64-.26-2.4a.75.75 0 0 1 1.04-1.05q.52-.28 1.09-.27a.75.75 0 0 1-.02 1.5c-.17 0-.4.08-.6.27-.4.4-.3.78-.18.89.1.1.5.2.88-.18.79-.78 2.14-1.04 3-.18.68.68.67 1.64.27 2.4a.75.75 0 0 1-1.04 1.05 2.2 2.2 0 0 1-1.47.24.75.75 0 1 1 .3-1.47c.18.03.46-.03.7-.27.4-.39.3-.78.19-.88-.11-.11-.5-.22-.89.17-.78.79-2.14 1.05-3 .18m-1.12-4.04A2 2 0 1 0 7.2 7.47a2 2 0 0 0 2.83 2.82"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTagPrice;
