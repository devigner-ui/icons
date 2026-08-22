import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSnowflake = forwardRef<SVGSVGElement, IconProps>(
  function IconSnowflake(
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
              d="M12 2v16m0 4v-4m0 0 3 3m-3-3-3 3m6-18-3 3-3-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.34 7 6.8 9m0 0 5.2 3M6.8 9 5.7 4.9M6.8 9l-4.1 1.1M12 12l5.2 3M12 12l5.2-3M12 12l-5.2 3m10.4 0 3.46 2m-3.46-2 4.1-1.1M17.2 15l1.1 4.1M20.65 7 17.2 9m0 0 1.1-4.1M17.2 9l4.1 1.1M6.8 15l-3.46 2m3.46-2-4.1-1.1M6.8 15l-1.1 4.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1.25c.41 0 .75.34.75.75v2.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.78 2.78V17.7l2.78 2.78a.75.75 0 1 1-1.06 1.06l-1.72-1.72V22a.75.75 0 0 1-1.5 0v-2.19l-1.72 1.72a.75.75 0 0 1-1.06-1.06l2.78-2.78V6.3L8.47 3.53a.75.75 0 0 1 1.06-1.06l1.72 1.72V2c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.51 4.18c.4-.1.81.13.92.53l1.02 3.8L12 11.13l4.55-2.62 1.02-3.8a.75.75 0 0 1 1.45.39l-.63 2.35 1.9-1.1a.75.75 0 0 1 .75 1.3l-1.9 1.1 2.35.62a.75.75 0 0 1-.39 1.45l-3.8-1.01L13.5 12l3.8 2.2 3.8-1.02a.75.75 0 0 1 .39 1.45l-2.35.63 1.9 1.1a.75.75 0 0 1-.75 1.29l-1.9-1.1.63 2.35a.75.75 0 0 1-1.45.4l-1.02-3.8L12 12.86l-4.55 2.62-1.02 3.8a.75.75 0 1 1-1.45-.39l.63-2.34-1.9 1.09a.75.75 0 1 1-.75-1.3l1.9-1.1-2.35-.62a.75.75 0 1 1 .39-1.45l3.8 1.02 3.8-2.2-3.8-2.2-3.8 1.02a.75.75 0 1 1-.39-1.45l2.35-.63-1.9-1.09a.75.75 0 1 1 .75-1.3l1.9 1.1-.63-2.35c-.1-.4.13-.81.53-.92"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1.25c.41 0 .75.34.75.75v2.19l1.72-1.72a.75.75 0 0 1 1.06 1.06l-2.78 2.78v4.4l3.8-2.2 1.02-3.8a.75.75 0 1 1 1.45.39l-.63 2.35 1.9-1.1a.75.75 0 0 1 .75 1.3l-1.9 1.1 2.35.62a.75.75 0 0 1-.39 1.45L17.3 9.8 13.5 12l3.8 2.2 3.8-1.02a.75.75 0 0 1 .39 1.45l-2.35.63 1.9 1.1a.75.75 0 1 1-.75 1.29l-1.9-1.1.63 2.35a.75.75 0 0 1-1.45.4l-1.02-3.8-3.8-2.2v4.39l2.78 2.78a.75.75 0 1 1-1.06 1.06l-1.72-1.72V22a.75.75 0 0 1-1.5 0v-2.19l-1.72 1.72a.75.75 0 0 1-1.06-1.06l2.78-2.78v-4.4l-3.8 2.2-1.02 3.8a.75.75 0 1 1-1.45-.39l.63-2.35-1.9 1.1a.75.75 0 1 1-.75-1.3l1.9-1.1-2.35-.62a.75.75 0 1 1 .39-1.45l3.8 1.02 3.8-2.2-3.8-2.2-3.8 1.02a.75.75 0 1 1-.39-1.45l2.35-.63-1.9-1.09a.75.75 0 0 1 .75-1.3l1.9 1.1-.63-2.35a.75.75 0 0 1 1.45-.4l1.02 3.8 3.8 2.2V6.31L8.47 3.53a.75.75 0 0 1 1.06-1.06l1.72 1.72V2c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSnowflake;
