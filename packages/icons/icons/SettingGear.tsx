import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSettingGear = forwardRef<SVGSVGElement, IconProps>(function IconSettingGear(
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
      {variant === "Broken" ? (
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
            d="M15 12a3 3 0 1 0-1.83 2.76"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m6.88 20.58 1.1.63c.78.47 1.8.19 2.27-.6l.11-.19c.9-1.57 2.38-1.57 3.3 0l.1.19a1.67 1.67 0 0 0 2.28.6l1.73-.99a1.9 1.9 0 0 0 .7-2.59c-.9-1.57-.17-2.85 1.64-2.85a1.9 1.9 0 0 0 1.9-1.9v-1.76a1.9 1.9 0 0 0-1.9-1.9c-1 0-1.69-.4-1.93-1.03-.19-.49-.1-1.13.3-1.82a1.9 1.9 0 0 0-.7-2.59l-.82-.46"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13.64 3.58c-.9 1.57-2.38 1.57-3.29 0l-.11-.19a1.66 1.66 0 0 0-2.27-.6l-1.73.99a1.9 1.9 0 0 0-.7 2.6c.91 1.56.17 2.84-1.64 2.84a1.9 1.9 0 0 0-1.9 1.9v1.76c0 1.04.85 1.9 1.9 1.9 1.81 0 2.55 1.28 1.64 2.85"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      ) : !fill ? (
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
            d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85a1.9 1.9 0 0 1 .7-2.59l1.73-.99a1.67 1.67 0 0 1 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19a1.67 1.67 0 0 1 2.28-.6l1.73.99a1.9 1.9 0 0 1 .7 2.59c-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76a1.9 1.9 0 0 1-1.9 1.9c-1.81 0-2.55 1.28-1.64 2.85a1.9 1.9 0 0 1-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19a1.67 1.67 0 0 1-2.28.6l-1.73-.99a1.9 1.9 0 0 1-.7-2.59c.91-1.57.17-2.85-1.64-2.85a1.9 1.9 0 0 1-1.9-1.9"
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
            d="M2 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85a1.9 1.9 0 0 1 .7-2.59l1.73-.99a1.67 1.67 0 0 1 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19a1.67 1.67 0 0 1 2.28-.6l1.73.99a1.9 1.9 0 0 1 .7 2.59c-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76a1.9 1.9 0 0 1-1.9 1.9c-1.81 0-2.55 1.28-1.64 2.85a1.9 1.9 0 0 1-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19a1.67 1.67 0 0 1-2.28.6l-1.73-.99a1.9 1.9 0 0 1-.7-2.59c.91-1.57.17-2.85-1.64-2.85a1.9 1.9 0 0 1-1.9-1.9"
            fill="currentColor"
          />
          <path
            d="M12 15.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5"
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
            d="M20.1 9.22c-1.81 0-2.55-1.28-1.65-2.85a1.9 1.9 0 0 0-.7-2.59l-1.73-.99a1.67 1.67 0 0 0-2.28.6l-.11.19c-.9 1.57-2.38 1.57-3.29 0l-.11-.19a1.64 1.64 0 0 0-2.26-.6l-1.73.99a1.9 1.9 0 0 0-.7 2.6c.91 1.56.17 2.84-1.64 2.84a1.9 1.9 0 0 0-1.9 1.9v1.76c0 1.04.85 1.9 1.9 1.9 1.81 0 2.55 1.28 1.64 2.85a1.9 1.9 0 0 0 .7 2.59l1.73.99c.79.47 1.81.19 2.28-.6l.11-.19c.9-1.57 2.38-1.57 3.29 0l.11.19a1.67 1.67 0 0 0 2.28.6l1.73-.99a1.9 1.9 0 0 0 .7-2.59c-.91-1.57-.17-2.85 1.64-2.85a1.9 1.9 0 0 0 1.9-1.9v-1.76a1.9 1.9 0 0 0-1.91-1.9M12 15.25a3.26 3.26 0 0 1 0-6.5 3.26 3.26 0 0 1 0 6.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSettingGear;
