import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSettingsHexagon = forwardRef<SVGSVGElement, IconProps>(
  function IconSettingsHexagon(
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
            d="M7.84 20.2C9.87 21.4 10.9 22 12 22s2.13-.6 4.16-1.8l.68-.4c2.03-1.21 3.05-1.81 3.6-2.8s.56-2.2.56-4.6M20.81 8q-.12-.55-.37-1c-.55-.99-1.57-1.59-3.6-2.8l-.68-.4C14.13 2.6 13.1 2 12 2s-2.13.6-4.16 1.8l-.68.4C5.13 5.42 4.1 6.02 3.56 7S3 9.2 3 11.6v.8c0 2.4 0 3.61.56 4.6q.33.59.94 1.08"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <circle
            cx="12"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
              d="M7.84 3.8C9.87 2.6 10.9 2 12 2s2.13.6 4.16 1.8l.68.4c2.03 1.21 3.05 1.81 3.6 2.8s.56 2.2.56 4.6v.8c0 2.41 0 3.61-.56 4.6-.55.99-1.57 1.6-3.6 2.8l-.68.4C14.13 21.4 13.1 22 12 22s-2.13-.6-4.16-1.8l-.68-.4c-2.03-1.2-3.05-1.81-3.6-2.8S3 14.81 3 12.4v-.8c0-2.4 0-3.61.56-4.6.55-.99 1.57-1.59 3.6-2.8z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              cx="12"
              cy="12.0005"
              r="3"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.98 2c-1.12 0-2.13.6-4.16 1.8l-.69.4C5.11 5.42 4.09 6.02 3.53 7c-.55.99-.55 2.2-.55 4.6v.8c0 2.41 0 3.61.55 4.6.56.99 1.58 1.6 3.6 2.8l.7.4c2.02 1.2 3.03 1.8 4.15 1.8 1.11 0 2.13-.6 4.15-1.8l.7-.4c2.02-1.2 3.03-1.81 3.6-2.8.55-.99.55-2.19.55-4.6v-.8c0-2.4 0-3.61-.56-4.6s-1.57-1.59-3.6-2.8l-.69-.4C14.11 2.6 13.09 2 11.98 2"
              fill="currentColor"
            />
            <path
              d="M11.98 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
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
              d="M11.98 2c-1.12 0-2.13.6-4.16 1.8l-.69.4C5.11 5.42 4.09 6.02 3.53 7c-.55.99-.55 2.2-.55 4.6v.8c0 2.41 0 3.61.55 4.6.56.99 1.58 1.6 3.6 2.8l.7.4c2.02 1.2 3.03 1.8 4.15 1.8 1.11 0 2.13-.6 4.15-1.8l.7-.4c2.02-1.2 3.03-1.81 3.6-2.8.55-.99.55-2.19.55-4.6v-.8c0-2.4 0-3.61-.56-4.6s-1.57-1.59-3.6-2.8l-.69-.4C14.11 2.6 13.09 2 11.98 2M8.23 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSettingsHexagon;
