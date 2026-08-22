import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconNexo = forwardRef<SVGSVGElement, IconProps>(function IconNexo(
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
            d="m12.67 6 5-3 5 3v12l-5 3-10-6V9l10 6V9z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m12.67 6-5-3-5 3v12l5 3 4.7-3.13"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
          <path d="M24.67 0h-24v24h24z" fill="none" />
          <path
            d="m12.67 6 5-3 5 3v12l-5 3-10-6V9l10 6V9z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m12.67 18-5 3-5-3V6l5-3 10 6v6l-10-6v6z"
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
            d="M22.67 6.28v11.43a.5.5 0 0 1-.24.43l-2.89 1.73a.5.5 0 0 1-.51 0l-9.61-5.59a.5.5 0 0 1-.25-.43v-1.33a.5.5 0 0 1 .76-.43l8.49 5.09a.5.5 0 0 0 .76-.43V8.42a.5.5 0 0 0-.24-.43l-4.08-2.45a.5.5 0 0 1 0-.86l2.57-1.55q.26-.15.52 0l4.5 2.7q.2.18.22.45"
            fill="currentColor"
          />
          <path
            d="m11.96 18.43-4.03 2.42c-.16.1-.36.1-.51 0l-4.5-2.7a.5.5 0 0 1-.24-.43V6.29a.5.5 0 0 1 .24-.43l4.5-2.7c.16-.1.36-.1.51 0l9.5 5.7a.5.5 0 0 1 .24.43v4.83a.5.5 0 0 1-.76.43L8.42 9.46a.5.5 0 0 0-.76.43v4.83q0 .28.24.43l4.04 2.43c.34.19.34.65.02.85"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconNexo;
