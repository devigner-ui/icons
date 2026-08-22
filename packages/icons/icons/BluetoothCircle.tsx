import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBluetoothCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconBluetoothCircle(
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
              d="m11 12 3.2-2.4c.53-.4.8-.6.8-.88s-.27-.48-.8-.88l-1.45-1.1c-.77-.56-1.15-.85-1.45-.7s-.3.63-.3 1.58zm0 0v4.38c0 .95 0 1.43.3 1.58s.68-.14 1.45-.7l1.45-1.1c.53-.4.8-.6.8-.88 0-.27-.27-.47-.8-.87zm0 0L8 9.5m3 2.5-3 2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              cx="12"
              cy="12"
              r="10"
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path d="M11.41 17.26" fill="currentColor" />
            <path d="M11.8 17.45" fill="currentColor" />
            <path d="M11.8 6.55" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.21 5.46c.28.15.6.4.94.66l1.54 1.15q.37.27.64.53c.2.2.42.5.42.92s-.22.72-.42.92a6 6 0 0 1-.64.53L12.25 12l2.44 1.83q.37.27.64.53c.2.2.42.5.42.92s-.22.72-.42.92a6 6 0 0 1-.64.53l-1.53 1.15q-.53.4-.95.66c-.28.15-.75.34-1.24.09-.5-.25-.63-.73-.67-1.05a9 9 0 0 1-.05-1.15V13.6l-1.77 1.48a.75.75 0 1 1-.96-1.16L9.82 12l-2.3-1.92a.75.75 0 1 1 .96-1.16l1.77 1.48V7.57c0-.43 0-.84.05-1.15.04-.32.17-.8.67-1.05.49-.25.96-.06 1.24.1m-.46 10.92V13.5l2 1.5.33.26.03.02-.03.02-.33.26-1.46 1.1-.53.39zm0-8.76v2.88l2-1.5.33-.26.03-.02-.03-.02-.33-.26-1.46-1.1-.53-.39zm.05-1.07"
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
              d="M11.75 16.38V13.5l2 1.5.33.26.03.02-.03.02-.33.26-1.46 1.1-.53.39z"
              fill="currentColor"
            />
            <path d="M11.41 17.26" fill="currentColor" />
            <path d="M11.8 17.45" fill="currentColor" />
            <path
              d="M11.75 7.62v2.88l2-1.5.33-.26.03-.02-.03-.02-.33-.26-1.46-1.1-.53-.39z"
              fill="currentColor"
            />
            <path d="M11.8 6.55" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20m1.15-15.88q-.51-.4-.94-.66c-.28-.15-.75-.34-1.24-.1-.5.26-.63.74-.67 1.06a9 9 0 0 0-.05 1.15v2.83L8.48 8.92a.75.75 0 0 0-.96 1.16L9.82 12l-2.3 1.92a.75.75 0 1 0 .96 1.16l1.77-1.48v2.83c0 .43 0 .84.05 1.15.04.32.17.8.67 1.05.49.25.96.06 1.24-.1q.42-.24.94-.65l1.54-1.15q.37-.27.64-.53c.2-.2.42-.5.42-.92s-.22-.72-.42-.92a6 6 0 0 0-.64-.53L12.25 12l2.44-1.83q.37-.27.64-.53c.2-.2.42-.5.42-.92s-.22-.72-.42-.92a6 6 0 0 0-.64-.53z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBluetoothCircle;
