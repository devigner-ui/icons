import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWallet3 = forwardRef<SVGSVGElement, IconProps>(function IconWallet3(
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
            d="M13.67 11.15h-6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.67 11.15V6.53a3.7 3.7 0 0 1 3.69-3.69h5.62c2.04 0 3.69 1.27 3.69 3.31"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.15 12.2c-.5.48-.74 1.22-.54 1.98.25.93 1.17 1.52 2.13 1.52h.93v1.45a4 4 0 0 1-4 4h-10a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4h10c2.2 0 4 1.8 4 4v1.45h-1.08a2 2 0 0 0-1.44.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.67 12.62v2.06c0 .56-.46 1.02-1.03 1.02h-1.93c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6h2.05c.57 0 1.03.46 1.03 1.02"
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
            d="M15.67 6.15h-9a4 4 0 0 0-4 4V6.54a3.7 3.7 0 0 1 3.69-3.69h5.62c2.04 0 3.69 1.26 3.69 3.3"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.15 12.2c-.5.49-.74 1.23-.54 1.98.25.93 1.17 1.52 2.13 1.52h.93v1.45a4 4 0 0 1-4 4h-10a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4h10c2.2 0 4 1.8 4 4v1.45h-1.08a2 2 0 0 0-1.44.6"
            fill="currentColor"
          />
          <path
            d="M22.67 12.62v2.06c0 .56-.46 1.02-1.03 1.02h-1.93c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6h2.05c.57 0 1.03.46 1.03 1.02"
            fill="currentColor"
          />
          <path
            d="M13.67 11.9h-6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M22.67 12.62v2.06c0 .56-.46 1.02-1.03 1.02h-1.93c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6h2.05c.57 0 1.03.46 1.03 1.02"
            fill="currentColor"
          />
          <path
            d="M16.05 13.96a3.5 3.5 0 0 1 1.05-2.83 3.5 3.5 0 0 1 2.5-1.03h.56c.28 0 .51-.23.47-.51a4 4 0 0 0-3.96-3.44h-10a4 4 0 0 0-4 4v7a4 4 0 0 0 4 4h10a4 4 0 0 0 3.96-3.44c.04-.28-.19-.51-.47-.51h-.45c-1.9 0-3.5-1.42-3.66-3.24m-2.38-2.06h-6a.75.75 0 1 1 0-1.5h6c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M14.88 3.98c.26.27.03.67-.35.67H6.7c-1.09 0-2.1.32-2.96.87-.39.25-.92-.02-.73-.45A3.7 3.7 0 0 1 6.4 2.85h5.62a4 4 0 0 1 2.87 1.13"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWallet3;
