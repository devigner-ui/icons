import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLadle = forwardRef<SVGSVGElement, IconProps>(function IconLadle(
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
            d="M2 5.68a3.68 3.68 0 0 1 7.37 0V15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M22 14.5v1.18a6.32 6.32 0 0 1-12.63 0v-1.05M22 14.5c0 1.38-2.95 2.5-6 2.5s-6.63-.99-6.63-2.37M22 14.5c0-1.38-2.95-2.5-6-2.5s-6.63 1.25-6.63 2.63"
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
            d="M16 17c3.05 0 6-1.12 6-2.5S19.05 12 16 12s-6.63 1.12-6.63 2.5S12.95 17 16 17"
            fill="currentColor"
          />
          <path
            d="M6.43 2.5A2.93 2.93 0 0 0 3.5 5.43a.75.75 0 1 1-1.5 0 4.43 4.43 0 0 1 8.87 0V13c-.9.41-1.49.93-1.5 1.48V5.43A2.93 2.93 0 0 0 6.43 2.5"
            fill="currentColor"
          />
          <path
            d="M9.37 14.52q.02.48.56.91C11.05 16.35 13.68 17 16 17c3.05 0 6-1.12 6-2.5v1.18a6.32 6.32 0 1 1-12.63 0V14.5z"
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
            d="M5.68 2.75a2.93 2.93 0 0 0-2.93 2.93.75.75 0 1 1-1.5 0 4.43 4.43 0 0 1 8.87 0v6.06q-.54.27-.98.62a4 4 0 0 0-.52.51V5.68a2.93 2.93 0 0 0-2.94-2.93"
            fill="currentColor"
          />
          <path
            d="M8.63 16.14a7.07 7.07 0 0 0 14.09.23l-.21.2c-.5.47-1.14.82-1.8 1.09-1.33.53-3.02.84-4.71.84a15 15 0 0 1-4.9-.82 7 7 0 0 1-1.96-1.04q-.25-.2-.5-.5"
            fill="currentColor"
          />
          <path
            d="M22 14.5c0 1.38-2.95 2.5-6 2.5s-6.5-1.12-6.5-2.5S12.95 12 16 12s6 1.12 6 2.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLadle;
