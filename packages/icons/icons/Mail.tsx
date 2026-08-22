import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMail = forwardRef<SVGSVGElement, IconProps>(function IconMail(
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
            d="M2 12c0-3.77 0-5.66 1.17-6.83S6.23 4 10 4h4c3.77 0 5.66 0 6.83 1.17S22 8.23 22 12s0 5.66-1.17 6.83S17.77 20 14 20h-4c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="m6 8 2.16 1.8C10 11.33 10.9 12.1 12 12.1s2-.77 3.84-2.3L18 8"
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
            fill="currentColor"
            d="M14 4h-4C6.23 4 4.34 4 3.17 5.17S2 8.23 2 12s0 5.66 1.17 6.83S6.23 20 10 20h4c3.77 0 5.66 0 6.83-1.17S22 15.77 22 12s0-5.66-1.17-6.83S17.77 4 14 4"
            opacity={duotone ? "0.4" : "1"}
          />
          <path
            fill="currentColor"
            d="M18.72 8.42a.8.8 0 0 0 .1-1.13.76.76 0 0 0-1.1-.1L15.5 9.12c-.97.83-1.64 1.4-2.21 1.78-.55.37-.92.5-1.28.5s-.73-.13-1.28-.5a26 26 0 0 1-2.2-1.78L6.28 7.19a.76.76 0 0 0-1.1.1.8.8 0 0 0 .1 1.13l2.28 1.97c.92.79 1.66 1.43 2.32 1.87.68.45 1.35.74 2.12.74s1.44-.29 2.12-.74c.66-.44 1.4-1.08 2.32-1.87z"
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
            d="M3.17 5.17C2 6.34 2 8.23 2 12s0 5.66 1.17 6.83S6.23 20 10 20h4c3.77 0 5.66 0 6.83-1.17S22 15.77 22 12s0-5.66-1.17-6.83S17.77 4 14 4h-4C6.23 4 4.34 4 3.17 5.17m15.4 2.35c.27.32.23.8-.09 1.06l-2.2 1.83c-.88.74-1.6 1.33-2.24 1.74-.66.43-1.3.7-2.04.7a3.7 3.7 0 0 1-2.04-.7c-.64-.4-1.36-1-2.24-1.74l-2.2-1.83a.75.75 0 1 1 .96-1.16l2.16 1.8c.93.78 1.58 1.32 2.13 1.67.53.34.88.46 1.23.46s.7-.12 1.23-.46c.55-.35 1.2-.89 2.13-1.67l2.16-1.8a.75.75 0 0 1 1.06.1"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMail;
