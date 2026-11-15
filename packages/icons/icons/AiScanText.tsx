import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiScanText = forwardRef<SVGSVGElement, IconProps>(function IconAiScanText(
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
            d="M3 8V6a3 3 0 0 1 3-3h2m0 18H6a3 3 0 0 1-3-3v-2m18 0v2a3 3 0 0 1-.66 1.88m-2.05 1.1L18 21h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 9.5h5m-5 3.5h9m-9 3.5H14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 2c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3Z"
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
            d="M3 8V6a3 3 0 0 1 3-3h2m13 13v2a3 3 0 0 1-3 3h-2m-8 0H6a3 3 0 0 1-3-3v-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 9.5h5m-5 3.5h9m-9 3.5H14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 2c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3Z"
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
            d="M3 8.75c.41 0 .75-.34.75-.75 0-.75-.08-1.55.02-2.3a2.2 2.2 0 0 1 .55-1.2c.92-1.03 2.44-.75 3.68-.75a.75.75 0 0 0 0-1.5c-.9 0-1.89-.1-2.78.08a3.8 3.8 0 0 0-2.89 2.9c-.19.88-.08 1.86-.08 2.77 0 .41.33.75.75.75zm18 6.5a.75.75 0 0 0-.75.75c0 .75.08 1.55-.02 2.3a2.2 2.2 0 0 1-.55 1.2c-.92 1.03-2.44.75-3.68.75a.75.75 0 0 0 0 1.5c.9 0 1.89.1 2.78-.08a3.8 3.8 0 0 0 2.89-2.9c.19-.88.08-1.87.08-2.77a.75.75 0 0 0-.75-.75zM8.75 21a.75.75 0 0 0-.75-.75c-.75 0-1.55.08-2.3-.02a2.2 2.2 0 0 1-1.2-.55c-1.03-.92-.75-2.44-.75-3.68a.75.75 0 0 0-1.5 0c0 .9-.1 1.89.08 2.78a3.8 3.8 0 0 0 2.9 2.89c.88.19 1.86.08 2.77.08.41 0 .75-.34.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.5 10.25h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0 0 1.5zm0 3.5h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5zm0 3.5H14a.75.75 0 0 0 0-1.5H7.5a.75.75 0 0 0 0 1.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.4 1.6c.14 1.06.38 1.7.84 2.16.47.46 1.1.7 2.16.84a.4.4 0 0 1 0 .8c-1.06.13-1.7.38-2.16.84s-.7 1.1-.84 2.16a.4.4 0 0 1-.8 0c-.14-1.06-.38-1.7-.84-2.16-.47-.47-1.1-.7-2.16-.85a.4.4 0 0 1 0-.79c1.06-.14 1.7-.38 2.16-.84.46-.47.7-1.1.84-2.16a.4.4 0 0 1 .8 0z"
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
            d="M3 8.75c.41 0 .75-.34.75-.75 0-.75-.08-1.55.02-2.3a2.2 2.2 0 0 1 .55-1.2c.92-1.03 2.44-.75 3.68-.75a.75.75 0 0 0 0-1.5c-.9 0-1.89-.1-2.78.08a3.8 3.8 0 0 0-2.89 2.9c-.19.88-.08 1.86-.08 2.77 0 .41.33.75.75.75zm18 6.5a.75.75 0 0 0-.75.75c0 .75.08 1.55-.02 2.3a2.2 2.2 0 0 1-.55 1.2c-.92 1.03-2.44.75-3.68.75a.75.75 0 0 0 0 1.5c.9 0 1.89.1 2.78-.08a3.8 3.8 0 0 0 2.89-2.9c.19-.88.08-1.87.08-2.77a.75.75 0 0 0-.75-.75zM8.75 21a.75.75 0 0 0-.75-.75c-.75 0-1.55.08-2.3-.02a2.2 2.2 0 0 1-1.2-.55c-1.03-.92-.75-2.44-.75-3.68a.75.75 0 0 0-1.5 0c0 .9-.1 1.89.08 2.78a3.8 3.8 0 0 0 2.9 2.89c.88.19 1.86.08 2.77.08.41 0 .75-.34.75-.75zM7.5 10.25h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0 0 1.5zm0 3.5h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5zm0 3.5H14a.75.75 0 0 0 0-1.5H7.5a.75.75 0 0 0 0 1.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.4 1.6c.14 1.06.38 1.7.84 2.16.47.46 1.1.7 2.16.84a.4.4 0 0 1 0 .8c-1.06.13-1.7.38-2.16.84s-.7 1.1-.84 2.16a.4.4 0 0 1-.8 0c-.14-1.06-.38-1.7-.84-2.16-.47-.47-1.1-.7-2.16-.85a.4.4 0 0 1 0-.79c1.06-.14 1.7-.38 2.16-.84.46-.47.7-1.1.84-2.16a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiScanText;
