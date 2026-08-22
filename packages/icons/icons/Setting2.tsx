import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSetting2 = forwardRef<SVGSVGElement, IconProps>(function IconSetting2(
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
            d="M12.67 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.67 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85a1.9 1.9 0 0 1 .7-2.59l1.73-.99a1.67 1.67 0 0 1 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19a1.67 1.67 0 0 1 2.28-.6l1.73.99a1.9 1.9 0 0 1 .7 2.59c-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76a1.9 1.9 0 0 1-1.9 1.9c-1.81 0-2.55 1.28-1.64 2.85a1.9 1.9 0 0 1-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19a1.67 1.67 0 0 1-2.28.6l-1.73-.99a1.9 1.9 0 0 1-.7-2.59c.91-1.57.17-2.85-1.64-2.85a1.9 1.9 0 0 1-1.9-1.9"
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.67 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85a1.9 1.9 0 0 1 .7-2.59l1.73-.99a1.67 1.67 0 0 1 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19a1.67 1.67 0 0 1 2.28-.6l1.73.99a1.9 1.9 0 0 1 .7 2.59c-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76a1.9 1.9 0 0 1-1.9 1.9c-1.81 0-2.55 1.28-1.64 2.85a1.9 1.9 0 0 1-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19a1.67 1.67 0 0 1-2.28.6l-1.73-.99a1.9 1.9 0 0 1-.7-2.59c.91-1.57.17-2.85-1.64-2.85a1.9 1.9 0 0 1-1.9-1.9"
            fill="currentColor"
          />
          <path
            d="M12.67 15.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5"
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
            d="M20.77 9.22c-1.81 0-2.55-1.28-1.65-2.85a1.9 1.9 0 0 0-.7-2.59l-1.73-.99a1.67 1.67 0 0 0-2.28.6l-.11.19c-.9 1.57-2.38 1.57-3.29 0l-.11-.19a1.64 1.64 0 0 0-2.26-.6l-1.73.99a1.9 1.9 0 0 0-.7 2.6c.91 1.56.17 2.84-1.64 2.84a1.9 1.9 0 0 0-1.9 1.9v1.76c0 1.04.85 1.9 1.9 1.9 1.81 0 2.55 1.28 1.64 2.85a1.9 1.9 0 0 0 .7 2.59l1.73.99c.79.47 1.81.19 2.28-.6l.11-.19c.9-1.57 2.38-1.57 3.29 0l.11.19a1.67 1.67 0 0 0 2.28.6l1.73-.99a1.9 1.9 0 0 0 .7-2.59c-.91-1.57-.17-2.85 1.64-2.85a1.9 1.9 0 0 0 1.9-1.9v-1.76a1.9 1.9 0 0 0-1.91-1.9m-8.1 6.03a3.26 3.26 0 0 1 0-6.5 3.26 3.26 0 0 1 0 6.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSetting2;
