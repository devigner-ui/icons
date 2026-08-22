import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGalleryCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconGalleryCircle(
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="15"
              cy="9"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m20 17.6-2.22-2a3 3 0 0 0-3.74-.23l-.3.21a2 2 0 0 1-2.56-.22L6.9 11.07a2.3 2.3 0 0 0-3.14-.1l-1.47 1.28"
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
              d="M11.18 15.36 6.9 11.07a2.3 2.3 0 0 0-3.14-.1l-1 .9q-.04 0-.05.33a9.3 9.3 0 0 0 17.03 5.18l-.12-.12-1.83-1.66a3 3 0 0 0-3.74-.23l-.3.21a2 2 0 0 1-2.56-.22"
              fill="currentColor"
            />
            <path d="M15 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.25 12a10.75 10.75 0 1 1 21.5 0 10.75 10.75 0 0 1-21.5 0m19.73-2.23a9.31 9.31 0 1 1-17.96.02 9.25 9.25 0 0 1 17.96-.02"
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
            <path d="M17 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1.25a10.75 10.75 0 1 0 0 21.5 10.75 10.75 0 0 0 0-21.5m-.82 14.11L6.9 11.07a2.3 2.3 0 0 0-3.14-.1l-1 .9a9.25 9.25 0 1 1 16.86 5.4l-1.83-1.67a3 3 0 0 0-3.74-.23l-.3.21a2 2 0 0 1-2.56-.22"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGalleryCircle;
