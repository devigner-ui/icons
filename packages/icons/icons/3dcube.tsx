import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const Icon3dcube = forwardRef<SVGSVGElement, IconProps>(function Icon3dcube(
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
            d="m13.59 2.26 6.51 3.51c.76.41.76 1.58 0 1.99l-6.51 3.51c-.58.31-1.26.31-1.84 0L5.24 7.76c-.76-.41-.76-1.58 0-1.99l6.51-3.51a2 2 0 0 1 1.84 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m4.28 10.13 6.05 3.03a2.2 2.2 0 0 1 1.23 1.99v5.72a1.1 1.1 0 0 1-1.61.99L3.9 18.83a2.2 2.2 0 0 1-1.23-1.99v-5.72c0-.83.87-1.36 1.61-.99"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m21.06 10.13-6.05 3.03a2.2 2.2 0 0 0-1.23 1.99v5.72c0 .83.87 1.36 1.61.99l6.05-3.03a2.2 2.2 0 0 0 1.23-1.99v-5.72a1.1 1.1 0 0 0-1.61-.99"
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
            d="M20 5.68 13.73 2.3a2.2 2.2 0 0 0-2.12 0L5.34 5.68c-.46.25-.74.73-.74 1.28 0 .54.28 1.03.74 1.28l6.27 3.38a2.2 2.2 0 0 0 2.12 0L20 8.24c.46-.25.74-.73.74-1.28s-.28-1.03-.74-1.28"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.58 12.79 4.74 9.87a1.43 1.43 0 0 0-2.07 1.28v5.51c0 .95.53 1.81 1.38 2.24l5.83 2.92a1.43 1.43 0 0 0 2.07-1.28v-5.51a2.5 2.5 0 0 0-1.37-2.24"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.99 9.93a1.4 1.4 0 0 0-1.39-.06l-5.83 2.92a2.5 2.5 0 0 0-1.38 2.24v5.51a1.4 1.4 0 0 0 1.43 1.43q.33 0 .64-.15l5.83-2.92a2.5 2.5 0 0 0 1.38-2.24v-5.51c0-.5-.25-.95-.68-1.22"
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
            d="M20 5.68 13.73 2.3a2.2 2.2 0 0 0-2.12 0L5.34 5.68c-.46.25-.74.73-.74 1.28 0 .54.28 1.03.74 1.28l6.27 3.38a2.2 2.2 0 0 0 2.12 0L20 8.24c.46-.25.74-.73.74-1.28s-.28-1.03-.74-1.28"
            fill="currentColor"
          />
          <path
            d="M10.58 12.79 4.74 9.87a1.43 1.43 0 0 0-2.07 1.28v5.51c0 .95.53 1.81 1.38 2.24l5.83 2.92a1.43 1.43 0 0 0 2.07-1.28v-5.51a2.5 2.5 0 0 0-1.37-2.24"
            fill="currentColor"
          />
          <path
            d="M21.99 9.93a1.4 1.4 0 0 0-1.39-.06l-5.83 2.92a2.5 2.5 0 0 0-1.38 2.24v5.51a1.4 1.4 0 0 0 1.43 1.43q.33 0 .64-.15l5.83-2.92a2.5 2.5 0 0 0 1.38-2.24v-5.51c0-.5-.25-.95-.68-1.22"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default Icon3dcube;
