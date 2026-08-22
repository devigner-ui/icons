import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEthereum = forwardRef<SVGSVGElement, IconProps>(function IconEthereum(
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
            d="M11.12 3.05 7.39 7.71c-.85 1.06-.55 2.42.66 3.02l3.73 1.87c.49.24 1.29.24 1.78 0l3.73-1.87c1.21-.61 1.51-1.97.66-3.02l-3.73-4.66c-.85-1.07-2.25-1.07-3.1 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 2.3v5.26"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m8.47 10.71 4.2-3.15 4.2 3.15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m9.44 14.43 1.61.72a4 4 0 0 0 3.25 0l1.61-.72c1.44-.64 2.77 1.1 1.77 2.32l-3.46 4.23c-.85 1.04-2.24 1.04-3.1 0l-3.45-4.23c-1.01-1.22.32-2.96 1.77-2.32"
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
            opacity={duotone ? "0.4" : "1"}
            d="M18.17 11.49q-.16.13-.35.22l-1.09.55-3.07 1.53c-.55.28-1.44.28-1.98 0l-3.07-1.53-1.09-.55q-.18-.1-.35-.22c-1.06-.74-1.25-2.09-.4-3.16l4.17-5.2q.4-.49.89-.7a1.9 1.9 0 0 1 1.67 0q.5.22.89.7l4.17 5.2c.86 1.08.67 2.43-.39 3.16"
            fill="currentColor"
          />
          <path
            d="M18.17 11.49q-.16.13-.35.22l-1.09.55-4.06-3.05-4.06 3.06-1.09-.55q-.18-.1-.35-.22a.8.8 0 0 1 .31-.48l4.35-3.27V2.44a1.9 1.9 0 0 1 1.67 0v5.31l4.35 3.27a.8.8 0 0 1 .32.47"
            fill="currentColor"
          />
          <path
            d="m9.44 14.43 1.61.72a4 4 0 0 0 3.25 0l1.61-.72c1.44-.64 2.77 1.1 1.77 2.32l-3.46 4.23c-.85 1.04-2.24 1.04-3.1 0l-3.45-4.23c-1.01-1.22.32-2.96 1.77-2.32"
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
            d="m9.44 14.43 1.61.72a4 4 0 0 0 3.25 0l1.61-.72c1.44-.64 2.77 1.1 1.77 2.32l-3.46 4.23c-.85 1.04-2.24 1.04-3.1 0l-3.45-4.23c-1.01-1.22.32-2.96 1.77-2.32"
            fill="currentColor"
          />
          <path
            d="M9.24 11.67a.5.5 0 0 0 .08.85l2.35 1.17c.55.28 1.44.28 1.98 0L16 12.52a.5.5 0 0 0 .08-.85l-3.11-2.34a.5.5 0 0 0-.6 0z"
            fill="currentColor"
          />
          <path
            d="m18.55 8.24-4.17-5.2-.26-.28c-.26-.25-.63-.02-.63.34v4.3q0 .25.2.4l4.15 3.12.18.13c.18.13.43.13.58-.03.7-.76.69-1.86-.05-2.78"
            fill="currentColor"
          />
          <path
            d="m6.78 8.33 4.15-5.28.25-.28c.26-.25.63-.03.63.34v4.37a.5.5 0 0 1-.2.4l-4.13 3.17-.17.13c-.18.13-.43.13-.59-.04-.68-.77-.67-1.87.06-2.81"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconEthereum;
