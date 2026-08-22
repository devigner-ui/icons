import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCursor = forwardRef<SVGSVGElement, IconProps>(function IconCursor(
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
            d="m12.64 15.26-1.2 1.2c-1.24 1.24-1.85 1.85-2.52 1.7-.66-.14-.96-.96-1.56-2.59l-2-5.45c-1.2-3.26-1.8-4.89-.97-5.73s2.47-.24 5.73.96l5.45 2.01c1.63.6 2.45.9 2.6 1.56.14.67-.47 1.28-1.7 2.51l-1.2 1.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m12.64 15.26 3.93 3.94c.41.4.62.61.84.7.3.13.65.13.95 0 .23-.09.43-.3.84-.7s.61-.61.7-.84q.2-.47 0-.95c-.09-.22-.3-.43-.7-.84l-3.94-3.93"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="m11.43 16.46 1.2-1.2 2.63-2.62 1.2-1.2c1.24-1.24 1.85-1.85 1.7-2.52-.14-.66-.96-.96-2.59-1.56l-5.45-2c-3.26-1.2-4.89-1.8-5.73-.97s-.24 2.47.96 5.73l2.01 5.45c.6 1.63.9 2.45 1.56 2.6.67.14 1.28-.47 2.51-1.7"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m12.64 15.26 3.93 3.94c.41.4.62.61.84.7.3.13.65.13.95 0 .23-.09.43-.3.84-.7s.61-.61.7-.84q.2-.47 0-.95c-.09-.22-.3-.43-.7-.84l-3.94-3.93z"
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
            d="m16.57 19.2-3.93-3.94-1.2 1.2c-1.24 1.24-1.85 1.85-2.52 1.7-.66-.14-.96-.96-1.56-2.59l-2-5.45c-1.2-3.26-1.8-4.89-.97-5.73s2.47-.24 5.73.96l5.45 2.01c1.63.6 2.45.9 2.6 1.56.14.67-.47 1.28-1.7 2.51l-1.2 1.2 3.93 3.94c.4.41.61.62.7.84.13.3.13.65 0 .95-.09.23-.3.43-.7.84s-.61.61-.84.7q-.47.2-.95 0c-.22-.09-.43-.3-.84-.7"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCursor;
