import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBluetoothCircleNarrow = forwardRef<SVGSVGElement, IconProps>(
  function IconBluetoothCircleNarrow(
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
            d="m8.59 15.56 6.62-6.07a.6.6 0 0 0 .2-.45.6.6 0 0 0-.22-.44l-2.06-1.72c-.54-.45-.97-.24-.97.46v9.33c0 .7.44.9.97.46l2.06-1.72c.29-.24.3-.64.02-.89L8.59 8.45"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.14 17.82A9.99 9.99 0 0 0 12 2c-2.13 0-4.1.66-5.72 1.79M3.82 6.25a10 10 0 0 0 13.83 14"
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
              opacity={duotone ? "0.4" : "1"}
              d="m8.59 15.56 6.62-6.07a.57.57 0 0 0-.02-.89l-2.06-1.72c-.54-.45-.97-.24-.97.46v9.33c0 .7.44.9.97.46l2.06-1.72c.29-.24.3-.64.02-.89L8.59 8.45"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.12 6c.58-.28 1.15.02 1.49.3l2.06 1.72c.63.53.67 1.47.04 2.03L13.58 12l2.13 1.96c.63.56.6 1.5-.04 2.03l-2.06 1.72c-.34.28-.9.57-1.48.3s-.72-.89-.72-1.34v-2.68L9.1 16.11a.75.75 0 1 1-1.02-1.1l3.28-3-3.28-3A.75.75 0 0 1 9.1 7.9l2.31 2.12V7.34c0-.44.13-1.06.7-1.34m.79 7.43 1.66 1.52-1.66 1.39zm0-2.85v-2.9l1.66 1.38z"
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
            <path d="m12.9 10.59 1.67-1.53-1.67-1.39z" fill="currentColor" />
            <path d="m12.9 16.33 1.67-1.39-1.67-1.53z" fill="currentColor" />
            <path
              d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m3.72 11.95c.29.27.45.64.44 1.02s-.19.75-.49 1L13.6 17.7c-.38.32-.73.41-1 .41a1 1 0 0 1-.49-.1c-.22-.1-.72-.43-.72-1.34V14l-2.3 2.11a.75.75 0 0 1-1.06-.05.75.75 0 0 1 .05-1.06l3.28-3-3.28-3.01A.75.75 0 0 1 9.1 7.88L11.4 10V7.33c0-.9.5-1.23.72-1.34.21-.1.79-.27 1.49.3l2.06 1.72a1.33 1.33 0 0 1 .05 2.02L13.58 12z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBluetoothCircleNarrow;
