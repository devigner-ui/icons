import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLifebuoy = forwardRef<SVGSVGElement, IconProps>(function IconLifebuoy(
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
            d="M12.64 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m5.57 4.93 3.54 3.53"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m5.57 19.07 3.54-3.53"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m19.72 19.07-3.54-3.53"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m19.72 4.93-3.54 3.53"
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
            d="M22.64 12a10 10 0 0 1-3.48 7.57 9.95 9.95 0 0 1-14.1-1.05 9.95 9.95 0 0 1 1.07-14.1 9.9 9.9 0 0 1 13.03.01q.57.48 1.06 1.06A10 10 0 0 1 22.64 12"
            fill="currentColor"
          />
          <path
            d="m16.32 14.62 3.9 3.9q-.5.58-1.06 1.05l-3.9-3.9a4.5 4.5 0 0 1-5.21-.02l-3.93 3.93a11 11 0 0 1-1.06-1.06L9 14.59a4.5 4.5 0 0 1 0-5.18L5.07 5.48q.49-.58 1.06-1.06l3.92 3.93a4.5 4.5 0 0 1 5.21-.02l3.9-3.9q.57.48 1.06 1.06l-3.9 3.89a4.5 4.5 0 0 1 0 5.24"
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
            d="M8.17 12q.01-1 .41-1.86c.2-.44.17-.98-.17-1.32L5.83 6.24c-.41-.41-1.09-.39-1.42.09a9.9 9.9 0 0 0 0 11.34c.32.48 1 .5 1.41.1l2.58-2.59c.35-.34.38-.88.18-1.32A4.4 4.4 0 0 1 8.17 12"
            fill="currentColor"
          />
          <path
            d="M12.67 7.5q1 .01 1.86.41c.44.2.98.17 1.32-.17l2.55-2.55c.41-.41.4-1.09-.08-1.42a9.9 9.9 0 0 0-11.34 0c-.48.32-.5 1-.1 1.41l2.57 2.57c.35.35.89.38 1.33.17a4.4 4.4 0 0 1 1.89-.42"
            fill="currentColor"
          />
          <path
            d="M20.56 5.9a.5.5 0 0 0-.72-.03l-3.22 3.21a.54.54 0 0 0-.07.66 4.5 4.5 0 0 1 0 4.52c-.12.22-.1.49.07.66l3.22 3.22c.2.2.54.2.72-.04a9.94 9.94 0 0 0 0-12.2"
            fill="currentColor"
          />
          <path
            d="M12.67 16.5q-1.26-.02-2.26-.62a.54.54 0 0 0-.66.07L6.5 19.2c-.2.2-.2.54.04.72a9.94 9.94 0 0 0 12.2 0 .48.48 0 0 0 .04-.73l-3.22-3.22a.54.54 0 0 0-.65-.07q-1.01.58-2.24.6"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLifebuoy;
