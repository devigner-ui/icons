import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconZoom = forwardRef<SVGSVGElement, IconProps>(function IconZoom(
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.67 9.68v2.8a2.77 2.77 0 0 0 2.79 2.77l3.68-.03c.51 0 .92-.42.92-.92v-2.77a2.77 2.77 0 0 0-2.77-2.77H7.6a.9.9 0 0 0-.93.92"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.67 9.24v5.54l-2.77-1.85v-1.84z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.92 9.68v2.8a2.77 2.77 0 0 0 2.79 2.77l3.68-.03c.51 0 .92-.42.92-.92v-2.77a2.77 2.77 0 0 0-2.77-2.77H7.85a.9.9 0 0 0-.93.92"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.42 10.02V14c0 .43-.48.69-.84.45l-1.92-1.28a.5.5 0 0 1-.24-.45V11.3q0-.29.24-.45l1.92-1.28c.36-.24.84.02.84.45"
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
            d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m1.63 12.29c0 .51-.41.92-.92.92l-3.68.03a2.77 2.77 0 0 1-2.79-2.77v-2.8c0-.51.41-.92.92-.92h3.69a2.77 2.77 0 0 1 2.77 2.77zm4.12-.29c0 .43-.48.69-.84.45l-1.92-1.28a.5.5 0 0 1-.24-.45V11.3q0-.29.24-.45l1.92-1.28c.36-.24.84.02.84.45z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconZoom;
