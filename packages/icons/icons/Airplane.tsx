import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAirplane = forwardRef<SVGSVGElement, IconProps>(function IconAirplane(
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
            d="m9.7 21.69 2.33-1.96c.35-.3.93-.3 1.28 0l2.33 1.96a1 1 0 0 0 1.4-.58l.44-1.33c.11-.32 0-.79-.24-1.03l-2.27-2.28c-.17-.16-.3-.48-.3-.71v-2.85c0-.42.31-.62.7-.46l4.91 2.12c.77.33 1.4-.08 1.4-.92v-1.29a2 2 0 0 0-1.12-1.7l-5.59-2.41a.6.6 0 0 1-.3-.46v-3c0-.94-.69-2.05-1.53-2.48-.3-.15-.65-.15-.95 0a3.1 3.1 0 0 0-1.53 2.49v3c0 .18-.14.39-.3.46l-5.58 2.41a2 2 0 0 0-1.12 1.69v1.29c0 .84.63 1.25 1.4.92l4.91-2.12c.38-.17.7.04.7.46v2.85c0 .23-.13.55-.29.71l-2.27 2.28c-.24.24-.35.7-.24 1.03l.44 1.33c.18.58.84.86 1.39.58"
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
            d="M10.63 14.04v-1.11c0-.43-.32-.64-.71-.47L4.9 14.62c-.8.34-1.43-.08-1.43-.93v-1.32c0-.68.5-1.47 1.14-1.73l5.7-2.45c.16-.08.3-.29.3-.47V4.66c0-.96.71-2.11 1.56-2.55.3-.15.66-.15.96 0a3.2 3.2 0 0 1 1.57 2.54v3.06c0 .18.14.39.3.47l1.04.44z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.86 12.37v1.32c0 .85-.64 1.27-1.43.93l-5.01-2.16c-.4-.16-.71.04-.71.47v2.91c0 .23.13.56.3.72l2.32 2.33c.24.24.35.72.24 1.05l-.45 1.36c-.2.59-.87.86-1.42.59l-2.38-2a1.04 1.04 0 0 0-1.31 0l-2.38 2a1 1 0 0 1-1.4-.59l-.45-1.36c-.11-.34 0-.81.24-1.05l2.32-2.33c.16-.16.29-.49.29-.72v-1.8l5.42-5.42 4.67 2.01a2 2 0 0 1 1.14 1.74"
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
            d="m20.72 10.63-4.67-2.01L15 8.18a.6.6 0 0 1-.3-.47V4.65c0-.96-.71-2.1-1.57-2.54-.3-.15-.66-.15-.96 0a3.2 3.2 0 0 0-1.56 2.55v3.06c0 .18-.14.39-.3.47l-5.7 2.45a2 2 0 0 0-1.14 1.73v1.32c0 .85.64 1.27 1.43.93l5-2.16c.4-.17.72.04.72.47v2.91c0 .23-.13.56-.3.72l-2.31 2.33c-.24.24-.35.71-.24 1.05l.45 1.36a1 1 0 0 0 1.4.59l2.38-2c.36-.31.95-.31 1.3 0l2.39 2c.55.27 1.22 0 1.42-.59l.45-1.36c.11-.33 0-.81-.24-1.05L15 16.56c-.17-.16-.3-.49-.3-.72v-2.91c0-.43.3-.63.7-.47l5.02 2.16c.79.34 1.43-.08 1.43-.93v-1.32c0-.68-.51-1.47-1.14-1.74"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAirplane;
