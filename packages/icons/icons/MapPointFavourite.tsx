import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMapPointFavourite = forwardRef<SVGSVGElement, IconProps>(
  function IconMapPointFavourite(
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
              d="M4 10.14C4 5.64 7.58 2 12 2s8 3.65 8 8.14c0 4.47-2.55 9.67-6.54 11.53-.93.44-2 .44-2.92 0C6.55 19.81 4 14.61 4 10.14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m11.04 11.52-.45.6zm.96-3.8-.53.53c.3.29.77.29 1.06 0zm.96 3.8.45.6zM12 12v-.75zm-.5-1.08a8 8 0 0 1-1.23-1.13q-.54-.67-.52-1.03h-1.5c0 .78.43 1.47.87 2a9 9 0 0 0 1.47 1.36zM9.75 8.76c0-.62.28-.89.5-.97.24-.09.7-.07 1.22.46l1.06-1.07c-.82-.81-1.87-1.14-2.8-.8S8.26 7.65 8.26 8.76zm3.66 3.36a9 9 0 0 0 1.47-1.37 3.2 3.2 0 0 0 .87-2h-1.5q.02.38-.52 1.04c-.35.42-.8.82-1.23 1.13zm2.34-3.36c0-1.11-.55-2.04-1.49-2.38-.92-.34-1.97-.01-2.79.8l1.06 1.07c.53-.53.98-.55 1.22-.46.22.08.5.35.5.97zm-5.16 3.36c.36.28.78.63 1.41.63v-1.5l-.08-.03c-.09-.04-.2-.12-.42-.3zm1.91-1.2c-.22.18-.33.26-.42.3q-.06.04-.08.03v1.5c.63 0 1.05-.35 1.41-.63z"
              fill="currentColor"
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
              d="M10.54 21.67c.93.44 2 .44 2.92 0C17.45 19.81 20 14.61 20 10.14 20 5.64 16.42 2 12 2s-8 3.65-8 8.14c0 4.47 2.55 9.67 6.54 11.53"
              fill="currentColor"
            />
            <path
              d="M10.72 13.33C9.55 12.4 8 10.89 8 9.46 8 7.03 10.2 6.13 12 8c1.8-1.87 4-.97 4 1.46 0 1.43-1.55 2.94-2.72 3.87-.56.45-.84.67-1.28.67s-.72-.22-1.28-.67"
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
              d="M12 2c-4.42 0-8 3.65-8 8.14 0 4.47 2.55 9.67 6.54 11.53.93.44 2 .44 2.92 0C17.45 19.81 20 14.61 20 10.14 20 5.64 16.42 2 12 2M9 8.76c0 1.02 1.16 2.1 2.04 2.76.42.32.63.48.96.48s.54-.16.96-.48c.88-.67 2.04-1.74 2.04-2.76 0-1.74-1.65-2.38-3-1.04-1.35-1.34-3-.7-3 1.04"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMapPointFavourite;
