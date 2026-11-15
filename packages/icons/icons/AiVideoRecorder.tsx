import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiVideoRecorder = forwardRef<SVGSVGElement, IconProps>(function IconAiVideoRecorder(
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
            d="M9.33 8h3.17a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H9.4M7 19H5.5a3 3 0 0 1-3-3v-5c0-.77.29-1.47.77-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m15.5 12 4.2-2.5c.8-.5 1.8.1 1.8 1V16c0 .9-1 1.5-1.8 1l-4.2-2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.3 4c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
            d="M9.33 8h3.17a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-5c0-.77.29-1.47.77-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m15.5 12 4.2-2.5c.8-.5 1.8.1 1.8 1V16c0 .9-1 1.5-1.8 1l-4.2-2.5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.3 4c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
            d="M12.5 7.25a4 4 0 0 1 2.65 1.1 4 4 0 0 1 1.1 2.65v5a4 4 0 0 1-1.1 2.65 4 4 0 0 1-2.65 1.1h-7a4 4 0 0 1-2.65-1.1A4 4 0 0 1 1.75 16v-5a4 4 0 0 1 1.1-2.65q.13-.14.3-.26c.2.05.3.13.41.24.2.2.27.35.35 1.06a1.4 1.4 0 0 0 2.78 0c.07-.7.14-.86.34-1.06S7.38 8.07 8.1 8a1.4 1.4 0 0 0 1.05-.74z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m16.23 10.69 2.58-1.53c.7-.42 1.37-.78 2.2-.46.6.23 1.07.78 1.2 1.42.07.32.04.66.04.98v3.83c0 .4.03.84 0 1.26a1.94 1.94 0 0 1-2.6 1.62c-.54-.2-1.06-.6-1.56-.9l-1.84-1.1V11z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M5.7 3.6c.12.93.32 1.47.73 1.87s.94.61 1.87.73a.4.4 0 0 1 0 .8c-.93.12-1.47.32-1.87.73s-.61.94-.73 1.87a.4.4 0 0 1-.8 0c-.12-.93-.32-1.47-.73-1.87S3.23 7.12 2.3 7a.4.4 0 0 1 0-.8c.93-.12 1.47-.33 1.87-.73s.61-.94.73-1.87a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="M12.5 7.25a4 4 0 0 1 2.65 1.1c.57.57.98 1.46 1.08 2.34l2.58-1.53c.7-.42 1.37-.78 2.2-.46.6.23 1.07.78 1.2 1.42.07.32.04.66.04.98v3.83c0 .4.03.84 0 1.26a1.94 1.94 0 0 1-2.6 1.62c-.54-.2-1.06-.6-1.56-.9l-1.84-1.1V16a4 4 0 0 1-1.1 2.65 4 4 0 0 1-2.65 1.1h-7a4 4 0 0 1-2.65-1.1A4 4 0 0 1 1.75 16v-5a4 4 0 0 1 1.1-2.65q.13-.14.3-.26c.2.05.3.12.41.24.2.2.27.35.35 1.06a1.4 1.4 0 0 0 2.78 0c.07-.71.14-.86.34-1.06S7.38 8.06 8.1 8a1.4 1.4 0 0 0 1.05-.74z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M5.7 3.6c.12.93.32 1.47.73 1.87s.94.61 1.87.73a.4.4 0 0 1 0 .8c-.93.12-1.47.32-1.87.73s-.61.94-.73 1.87a.4.4 0 0 1-.8 0c-.12-.93-.32-1.47-.73-1.87S3.23 7.12 2.3 7a.4.4 0 0 1 0-.8c.93-.12 1.47-.33 1.87-.73s.61-.94.73-1.87a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiVideoRecorder;
