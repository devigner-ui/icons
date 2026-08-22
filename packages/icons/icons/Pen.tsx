import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPen = forwardRef<SVGSVGElement, IconProps>(function IconPen(
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
            d="m15.29 3.15-.93.93-8.52 8.52c-.58.58-.87.87-1.12 1.18q-.44.57-.74 1.22c-.18.36-.3.75-.56 1.52l-1.1 3.28-.27.8a1.06 1.06 0 0 0 1.35 1.35l.8-.27 3.28-1.1A11 11 0 0 0 9 20.02q.65-.3 1.22-.74c.31-.25.6-.54 1.18-1.12l8.52-8.52.93-.93a3.93 3.93 0 0 0-5.56-5.56"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.36 4.08s.12 1.97 1.85 3.7a6.3 6.3 0 0 0 3.71 1.86M4.2 21.68 2.32 19.8"
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
            d="M20.85 8.71a3.93 3.93 0 0 0-5.56-5.56l-.89.89.04.11a8.8 8.8 0 0 0 5.52 5.45z"
            fill="currentColor"
          />
          <path
            d="m14.44 4-.04.04.04.11a8.8 8.8 0 0 0 5.52 5.45l-8.56 8.56c-.58.58-.87.87-1.18 1.11q-.57.45-1.22.75c-.36.18-.75.3-1.52.56L3.4 21.95a1.06 1.06 0 0 1-1.35-1.35l1.37-4.08c.25-.77.38-1.16.56-1.53q.3-.65.74-1.2c.25-.32.54-.61 1.12-1.2z"
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
            d="m11.4 18.16 7.4-7.4a10.3 10.3 0 0 1-5.57-5.56l-7.4 7.4c-.57.58-.86.87-1.1 1.18q-.45.57-.75 1.22c-.18.36-.3.75-.56 1.52L2.05 20.6a1.06 1.06 0 0 0 1.35 1.35l4.08-1.37A11 11 0 0 0 9 20.02q.65-.3 1.22-.74c.31-.25.6-.54 1.18-1.12"
            fill="currentColor"
          />
          <path
            d="M20.85 8.71a3.93 3.93 0 0 0-5.56-5.56l-.89.89a9 9 0 0 0 2.13 3.43 9 9 0 0 0 3.43 2.13z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPen;
