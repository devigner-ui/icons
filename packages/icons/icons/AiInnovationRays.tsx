import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiInnovationRays = forwardRef<SVGSVGElement, IconProps>(function IconAiInnovationRays(
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
            d="M14.2 17.99h.2v-1.03c0-.78.35-1.55.95-2.07a5.59 5.59 0 1 0-6.7 0c.6.52.94 1.3.94 2.07v1.03h2.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 21h4M12 2.5V1M4.73 6.7l-1.3-.75m15.85.75 1.3-.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.3c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
            d="M9.6 17.99h4.8v-1.03c0-.78.35-1.55.95-2.07a5.59 5.59 0 1 0-6.7 0c.6.52.94 1.3.94 2.07z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 21h4M12 2.5V1M4.73 6.7l-1.3-.75m15.85.75 1.3-.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.3c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
            d="M8.84 16.96c.03-.62-.14-1.08-.64-1.47a6.7 6.7 0 0 1-2.25-3.18 6.7 6.7 0 0 1 .03-3.9A6.7 6.7 0 0 1 8.3 5.29 6.5 6.5 0 0 1 12 4.08c1.32 0 2.69.46 3.7 1.2a6.5 6.5 0 0 1 2.32 3.14c.41 1.25.4 2.7.03 3.9a6.5 6.5 0 0 1-2.2 3.14q-.75.58-.7 1.5v1.03c0 .41-.33.75-.74.75H9.59a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M9.25 21c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75zM12 3.25a.75.75 0 0 1-.75-.75V1a.75.75 0 0 1 1.5 0v1.5c0 .41-.34.75-.75.75zM5.38 7.08a.75.75 0 0 1-1.03.27l-1.3-.75a.75.75 0 0 1 .75-1.3l1.3.75c.36.2.48.67.28 1.03zm13.25 0a.75.75 0 0 1 .27-1.03l1.3-.75a.75.75 0 0 1 .75 1.3l-1.3.75a.75.75 0 0 1-1.02-.27z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 7.9c.12.93.33 1.47.73 1.87s.94.61 1.87.73a.4.4 0 0 1 0 .8c-.93.12-1.47.33-1.87.73s-.61.94-.73 1.87a.4.4 0 0 1-.8 0c-.12-.93-.33-1.47-.73-1.87s-.94-.61-1.87-.73a.4.4 0 0 1 0-.8c.93-.12 1.47-.33 1.87-.73s.61-.94.73-1.87a.4.4 0 0 1 .8 0z"
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
            d="M8.84 16.96c.03-.62-.14-1.08-.64-1.47a6.7 6.7 0 0 1-2.25-3.18 6.7 6.7 0 0 1 .03-3.9A6.7 6.7 0 0 1 8.3 5.29 6.5 6.5 0 0 1 12 4.08c1.32 0 2.69.46 3.7 1.2a6.5 6.5 0 0 1 2.32 3.14c.41 1.25.4 2.7.03 3.9a6.5 6.5 0 0 1-2.2 3.14q-.75.58-.7 1.5v1.03c0 .41-.33.75-.74.75H9.59a.75.75 0 0 1-.75-.75zM9.25 21c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75zM12 3.25a.75.75 0 0 1-.75-.75V1a.75.75 0 0 1 1.5 0v1.5c0 .41-.34.75-.75.75zM5.38 7.08a.75.75 0 0 1-1.03.27l-1.3-.75a.75.75 0 0 1 .75-1.3l1.3.75c.36.2.48.67.28 1.03zm13.25 0a.75.75 0 0 1 .27-1.03l1.3-.75a.75.75 0 0 1 .75 1.3l-1.3.75a.75.75 0 0 1-1.02-.27zM12 7.55a.4.4 0 0 0-.4.35c-.12.93-.33 1.47-.73 1.87s-.94.61-1.87.73a.4.4 0 0 0 0 .8c.93.12 1.47.33 1.87.73s.61.94.73 1.87a.4.4 0 0 0 .8 0c.12-.93.33-1.47.73-1.87s.94-.61 1.87-.73a.4.4 0 0 0 0-.8c-.93-.12-1.47-.33-1.87-.73s-.61-.94-.73-1.87a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiInnovationRays;
