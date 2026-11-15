import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCloudSpark = forwardRef<SVGSVGElement, IconProps>(
  function IconAiCloudSpark(
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

    /* Bold and Bulk cut the cloud around the sparkle with the same rounded
       shape as AiClipboard, so the gap matches across the AI icons. */
    const cut = useId();

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
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 6.13c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.08 12.96a4 4 0 0 0-1.63-.4"
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.92 5.73c2.21-2.1 5.97-2.47 8.42-.4m5.57 6.2c1.49 2.1 1.53 5.23-.64 7.15a5.3 5.3 0 0 1-3.64 1.4H5.54c-4.67-.34-4.68-7.14 0-7.48h.05a8 8 0 0 1-.48-2.98"
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
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 6.13c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.67 12.07c1.1 2 .98 4.7-.95 6.4a5.2 5.2 0 0 1-3.54 1.36H5.4c-4.54-.33-4.55-6.93 0-7.26h.04c-2.53-7.1 5.8-10.7 9.76-6.8"
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.08 12.96a4 4 0 0 0-1.63-.4"
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
            <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="white" />
              <path d="M16.41 6.07a1.59 1.59 0 0 1 3.19 0c0 .64.43 1.06 1.06 1.06a1.59 1.59 0 0 1 0 3.19c-.64 0-1.06.43-1.06 1.06a1.59 1.59 0 0 1-3.19 0c0-.64-.43-1.06-1.06-1.06a1.59 1.59 0 0 1 0-3.19c.64 0 1.06-.43 1.06-1.06z" fill="black" />
            </mask>
            <path
              fill="currentColor"
              d="M20.4 11.17c-1.59-2.05-2.88-3.19-4.6-5.14-2.2-2.5-5.69-2.46-8.06-1.12a6.2 6.2 0 0 0-2.91 7.24 4.1 4.1 0 0 0-3.1 4.04 4.1 4.1 0 0 0 3.95 4.17h10.34c1.42 0 2.77-.52 3.81-1.48 2.45-2.14 2.2-5.61.57-7.71"
              mask={`url(#${cut})`}
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              fill="currentColor"
              d="M18.4 5.73c.12.93.33 1.47.73 1.87s.94.61 1.87.73a.4.4 0 0 1 0 .8c-.93.12-1.47.32-1.87.73s-.61.94-.73 1.87a.4.4 0 0 1-.8 0c-.12-.93-.33-1.47-.73-1.87s-.94-.61-1.87-.73a.4.4 0 0 1 0-.8c.93-.12 1.47-.32 1.87-.73s.61-.94.73-1.87a.4.4 0 0 1 .8 0z"
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
            <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="white" />
              <path d="M16.41 6.07a1.59 1.59 0 0 1 3.19 0c0 .64.43 1.06 1.06 1.06a1.59 1.59 0 0 1 0 3.19c-.64 0-1.06.43-1.06 1.06a1.59 1.59 0 0 1-3.19 0c0-.64-.43-1.06-1.06-1.06a1.59 1.59 0 0 1 0-3.19c.64 0 1.06-.43 1.06-1.06z" fill="black" />
            </mask>
            <path
              fill="currentColor"
              d="M20.4 11.17c-1.59-2.05-2.88-3.19-4.6-5.14-2.2-2.5-5.69-2.46-8.06-1.12a6.2 6.2 0 0 0-2.91 7.24 4.1 4.1 0 0 0-3.1 4.04 4.1 4.1 0 0 0 3.95 4.17h10.34c1.42 0 2.77-.52 3.81-1.48 2.45-2.14 2.2-5.61.57-7.71"
              mask={`url(#${cut})`}
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              fill="currentColor"
              d="M18.4 5.73c.12.93.33 1.47.73 1.87s.94.61 1.87.73a.4.4 0 0 1 0 .8c-.93.12-1.47.32-1.87.73s-.61.94-.73 1.87a.4.4 0 0 1-.8 0c-.12-.93-.33-1.47-.73-1.87s-.94-.61-1.87-.73a.4.4 0 0 1 0-.8c.93-.12 1.47-.32 1.87-.73s.61-.94.73-1.87a.4.4 0 0 1 .8 0z"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAiCloudSpark;
