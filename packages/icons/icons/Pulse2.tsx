import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPulse2 = forwardRef<SVGSVGElement, IconProps>(function IconPulse2(
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
            d="M2 15h3c.63 0 .95 0 1.23.12s.5.35.94.81l1.14 1.2c.39.4.58.6.81.59s.4-.24.73-.7l3.63-5c.34-.47.5-.7.75-.72.24 0 .43.2.81.64l1.78 2.04c.44.5.66.75.96.89.29.13.63.13 1.3.13H22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
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
            d="M3.46 3.46C2 4.93 2 7.3 2 12v2.25h3.1c.53 0 1 0 1.43.18.43.19.75.52 1.11.9l.08.08 1.14 1.2c.1.12.29.1.38-.02l3.65-5.05c.15-.2.3-.42.46-.57.18-.19.45-.4.84-.42.4-.02.69.17.88.34q.26.23.5.53l1.81 2.06c.49.56.6.65.7.7.12.05.26.07 1 .07h2.91L22 12c0-4.71 0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46"
            fill="currentColor"
          />
          <path
            d="M2 14.25c.04 3.26.25 5.08 1.46 6.29C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46c1.2-1.21 1.42-3.03 1.45-6.29h-2.91c-.74 0-.88-.02-1-.07-.1-.05-.21-.14-.7-.7l-1.8-2.06q-.26-.31-.51-.53c-.2-.17-.48-.36-.88-.34s-.66.23-.84.42c-.15.15-.3.37-.46.57L9.24 16.6a.25.25 0 0 1-.38.02l-1.14-1.2-.08-.07a3 3 0 0 0-1.11-.9c-.43-.2-.9-.2-1.42-.19H2"
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
            d="M3.46 3.46C2 4.93 2 7.3 2 12v2.25h3.1c.53 0 1 0 1.43.18.43.19.75.52 1.11.9l.08.08 1.14 1.2.2.22.18-.24 3.65-5.05c.15-.2.3-.42.46-.57.18-.19.45-.4.84-.42.4-.02.69.17.88.34q.26.23.5.53l1.81 2.06c.49.56.6.65.7.7.12.05.26.07 1 .07h2.91L22 12c0-4.71 0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46"
            fill="currentColor"
          />
          <path
            d="M21.96 15.75h-3c-.55 0-1.05 0-1.5-.2s-.77-.58-1.13-1l-.08-.08-1.77-2.03-.21-.24-.18.26-3.66 5.04q-.22.31-.44.56c-.17.17-.43.38-.82.4s-.67-.14-.86-.29a5 5 0 0 1-.51-.5l-1.17-1.22c-.48-.5-.58-.6-.7-.64-.1-.05-.23-.06-.93-.06H2.04c.1 2.34.41 3.78 1.42 4.79C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46c1-1.01 1.32-2.45 1.42-4.79"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPulse2;
