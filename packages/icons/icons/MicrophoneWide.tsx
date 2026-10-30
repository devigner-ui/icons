import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMicrophoneWide = forwardRef<SVGSVGElement, IconProps>(
  function IconMicrophoneWide(
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
            d="M18 11.92V8A6 6 0 0 0 6.52 5.55M6 8.98V13a6 6 0 0 0 11.52 2.36"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 11v2a9 9 0 0 0 18 0v-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.11 7.48a8 8 0 0 1 5.5 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.03 10.48a7 7 0 0 1 3.67 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
              d="M12 19a6 6 0 0 0 6-6V8A6 6 0 0 0 6 8v5a6 6 0 0 0 6 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3 11v2a9 9 0 0 0 18 0v-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.11 7.48a8 8 0 0 1 5.5 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.03 10.48a7 7 0 0 1 3.67 0"
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
              opacity={duotone ? "0.4" : "1"}
              d="M12 21.93a9.16 9.16 0 0 1-9.15-9.15V10.9c0-.39.32-.7.7-.7s.7.32.7.7v1.88a7.75 7.75 0 0 0 15.48 0V10.9c0-.39.32-.7.7-.7s.7.32.7.7v1.88A9.13 9.13 0 0 1 12 21.93"
              fill="currentColor"
            />
            <path
              d="M12 2a6.1 6.1 0 0 0-6.1 6.1v4.69a6.11 6.11 0 0 0 12.2 0V8.1C18.1 4.74 15.36 2 12 2m2.18 8.59a.6.6 0 0 1-.75.43 6 6 0 0 0-3.12 0 .6.6 0 0 1-.75-.43.6.6 0 0 1 .43-.75 7 7 0 0 1 3.76 0 .6.6 0 0 1 .43.75m.85-2.77a.6.6 0 0 1-.78.36 7 7 0 0 0-4.74 0 .6.6 0 0 1-.79-.36.6.6 0 0 1 .37-.78 8.2 8.2 0 0 1 5.57 0c.32.12.48.47.37.78"
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
              d="M12 21.93a9.16 9.16 0 0 1-9.15-9.15V10.9c0-.39.32-.7.7-.7s.7.32.7.7v1.88a7.75 7.75 0 0 0 15.48 0V10.9c0-.39.32-.7.7-.7s.7.32.7.7v1.88A9.13 9.13 0 0 1 12 21.93"
              fill="currentColor"
            />
            <path
              d="M12 2a6.1 6.1 0 0 0-6.1 6.1v4.69a6.11 6.11 0 0 0 12.2 0V8.1C18.1 4.74 15.36 2 12 2m2.18 8.59a.6.6 0 0 1-.75.43 6 6 0 0 0-3.12 0 .6.6 0 0 1-.75-.43.6.6 0 0 1 .43-.75 7 7 0 0 1 3.76 0 .6.6 0 0 1 .43.75m.85-2.77a.6.6 0 0 1-.78.36 7 7 0 0 0-4.74 0 .6.6 0 0 1-.79-.36.6.6 0 0 1 .37-.78 8.2 8.2 0 0 1 5.57 0c.32.12.48.47.37.78"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMicrophoneWide;
