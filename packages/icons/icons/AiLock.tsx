import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiLock = forwardRef<SVGSVGElement, IconProps>(function IconAiLock(
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
            d="M10.4 21.5H7.5A3.5 3.5 0 0 1 4 18v-4.5A3.5 3.5 0 0 1 7.5 10h9a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-3.7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 10V7.5a4.5 4.5 0 0 1 9 0V10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 13.15c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
            d="M7.5 10h9a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 18v-4.5A3.5 3.5 0 0 1 7.5 10Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.5 10V7.5a4.5 4.5 0 0 1 9 0V10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 13.15c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
            d="M7.5 9.25h9a4.6 4.6 0 0 1 3 1.25 4.6 4.6 0 0 1 1.25 3V18a4.6 4.6 0 0 1-1.25 3 4.6 4.6 0 0 1-3 1.25h-9a4.6 4.6 0 0 1-3-1.25 4.6 4.6 0 0 1-1.25-3v-4.5a4.6 4.6 0 0 1 1.25-3 4.6 4.6 0 0 1 3-1.25z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.35 5.07a5.3 5.3 0 0 1 8.86-.7c.5.66.84 1.46.97 2.28.14.87.1 1.8.08 2.69a5 5 0 0 0-.76-.09h-.74c.04-1.35.11-2.77-.69-3.91a3.74 3.74 0 0 0-6.44.51 5 5 0 0 0-.38 2.36v1.04H7.5q-.38 0-.76.09c-.03-1.46-.08-2.95.61-4.27"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 12.75c.12.93.33 1.47.73 1.87s.94.61 1.87.73a.4.4 0 0 1 0 .8c-.93.12-1.47.33-1.87.73s-.61.94-.73 1.87a.4.4 0 0 1-.8 0c-.12-.93-.33-1.47-.73-1.87s-.94-.61-1.87-.73a.4.4 0 0 1 0-.8c.93-.12 1.47-.33 1.87-.73s.61-.94.73-1.87a.4.4 0 0 1 .8 0z"
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
            d="M19.5 10.5a4.6 4.6 0 0 1 1.25 3V18a4.6 4.6 0 0 1-1.25 3 4.6 4.6 0 0 1-3 1.25h-9a4.6 4.6 0 0 1-3-1.25 4.6 4.6 0 0 1-1.25-3v-4.5a4.6 4.6 0 0 1 1.25-3 4.5 4.5 0 0 1 2.24-1.16c-.02-1.46-.08-2.95.6-4.27a5.3 5.3 0 0 1 8.87-.7c.5.66.84 1.46.97 2.28.14.87.1 1.8.08 2.69.86.17 1.68.6 2.25 1.16zm-4.43-5.16q-.41-.58-1-.97a3.8 3.8 0 0 0-5.44 1.48 5 5 0 0 0-.38 2.36v1.04h7.51c.04-1.35.1-2.77-.7-3.91zM12 12.4a.4.4 0 0 0-.4.35c-.12.93-.33 1.47-.73 1.87s-.94.61-1.87.73a.4.4 0 0 0 0 .8c.93.12 1.47.33 1.87.73s.61.94.73 1.87a.4.4 0 0 0 .8 0c.12-.93.33-1.47.73-1.87s.94-.61 1.87-.73a.4.4 0 0 0 0-.8c-.93-.12-1.47-.33-1.87-.73s-.61-.94-.73-1.87a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiLock;
