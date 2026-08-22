import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStickerCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconStickerCircle(
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
              d="M2 12a10 10 0 0 0 10 10c.65 0 1.25-.3 1.7-.76l7.54-7.53c.46-.46.76-1.06.76-1.71a10 10 0 0 0-20 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 22c0-2.8 0-4.19.4-5.31a7 7 0 0 1 4.29-4.3C17.8 12 19.2 12 22 12"
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
              d="m21.24 13.7-7.53 7.54-.37.31q-.6.43-1.34.45v-1.5c.02-1.83.08-2.91.4-3.81a7 7 0 0 1 4.29-4.3c.9-.31 1.98-.37 3.81-.39H22a2.3 2.3 0 0 1-.57 1.5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 2a10 10 0 0 1 10 10h-1.5c-1.83.02-2.91.08-3.81.4a7 7 0 0 0-4.3 4.29c-.31.9-.37 1.98-.39 3.81V22a10 10 0 0 1 0-20"
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
              d="M2 12a10 10 0 0 1 19.89-1.5h-.2c-2.5 0-4.13 0-5.5.48a8.5 8.5 0 0 0-5.21 5.21c-.48 1.37-.48 3-.48 5.5v.2A10 10 0 0 1 2 12"
              fill="currentColor"
            />
            <path
              d="m21.24 13.7-7.53 7.54-.37.31q-.6.43-1.34.45v-1.5c.02-1.83.08-2.91.4-3.81a7 7 0 0 1 4.29-4.3c.9-.31 1.98-.37 3.81-.39H22a2.3 2.3 0 0 1-.57 1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStickerCircle;
