import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiVideoCamera = forwardRef<SVGSVGElement, IconProps>(function IconAiVideoCamera(
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
            d="M6.83 18H5.5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9.23"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 10.5 19.7 8c.8-.5 1.8.1 1.8 1v6c0 .9-1 1.5-1.8 1l-4.2-2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 9.4c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
            d="M5.5 6h7a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.5 10.5 19.7 8c.8-.5 1.8.1 1.8 1v6c0 .9-1 1.5-1.8 1l-4.2-2.5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 9.4c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
            d="M5.5 5.25h7a4 4 0 0 1 2.65 1.1A4 4 0 0 1 16.25 9v6a4 4 0 0 1-1.1 2.65 4 4 0 0 1-2.65 1.1h-7a4 4 0 0 1-2.65-1.1A4 4 0 0 1 1.75 15V9a4 4 0 0 1 1.1-2.65 4 4 0 0 1 2.65-1.1z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m16.25 9.18 2.56-1.52c.7-.42 1.38-.78 2.2-.46.62.24 1.08.79 1.2 1.43.07.32.04.66.04.98v4.18c0 .46.03.93 0 1.38a1.94 1.94 0 0 1-2.59 1.64c-.55-.2-1.07-.6-1.57-.9l-1.84-1.09z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M9.4 9c.12.93.33 1.47.73 1.87s.94.61 1.87.73a.4.4 0 0 1 0 .8c-.93.12-1.47.33-1.87.73s-.61.94-.73 1.87a.4.4 0 0 1-.8 0c-.12-.93-.33-1.47-.73-1.87s-.94-.61-1.87-.73a.4.4 0 0 1 0-.8c.93-.12 1.47-.32 1.87-.73s.61-.94.73-1.87a.4.4 0 0 1 .8 0z"
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
            d="M5.5 5.25h7a4 4 0 0 1 2.65 1.1A4 4 0 0 1 16.25 9v.18l2.56-1.52c.7-.42 1.38-.78 2.2-.46.62.24 1.08.79 1.2 1.43.07.32.04.66.04.98v4.18c0 .46.03.93 0 1.38a1.94 1.94 0 0 1-2.59 1.64c-.55-.2-1.07-.6-1.57-.9l-1.84-1.09V15a4 4 0 0 1-1.1 2.65 4 4 0 0 1-2.65 1.1h-7a4 4 0 0 1-2.65-1.1A4 4 0 0 1 1.75 15V9a4 4 0 0 1 1.1-2.65 4 4 0 0 1 2.65-1.1zM9 8.65a.4.4 0 0 0-.4.35c-.12.93-.33 1.47-.73 1.87s-.94.61-1.87.73a.4.4 0 0 0 0 .8c.93.12 1.47.33 1.87.73s.61.94.73 1.87a.4.4 0 0 0 .8 0c.12-.93.33-1.47.73-1.87s.94-.61 1.87-.73a.4.4 0 0 0 0-.8c-.93-.12-1.47-.32-1.87-.73S9.52 9.93 9.4 9a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiVideoCamera;
