import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSupport = forwardRef<SVGSVGElement, IconProps>(function IconAiSupport(
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
            d="M4.5 13v-1a7.5 7.5 0 0 1 9.15-7.32m2.22.9A7.5 7.5 0 0 1 19.5 12v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 13H5c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-.5A1.5 1.5 0 0 1 3 16.5v-2c0-.83.67-1.5 1.5-1.5ZM19 13h.5c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H19a1.5 1.5 0 0 1-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5Zm0 5c0 1.7-1.3 3-3 3h-2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.3c.2 1.45.75 2 2.2 2.2-1.45.2-2 .75-2.2 2.2-.2-1.45-.75-2-2.2-2.2 1.45-.2 2-.75 2.2-2.2Z"
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
            d="M4.5 13v-1a7.5 7.5 0 0 1 15 0v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 13H5c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-.5A1.5 1.5 0 0 1 3 16.5v-2c0-.83.67-1.5 1.5-1.5ZM19 13h.5c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H19a1.5 1.5 0 0 1-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5Zm0 5c0 1.7-1.3 3-3 3h-2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.3c.2 1.45.75 2 2.2 2.2-1.45.2-2 .75-2.2 2.2-.2-1.45-.75-2-2.2-2.2 1.45-.2 2-.75 2.2-2.2Z"
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
            d="M3.75 14c0-.98-.06-1.98.06-2.96a8.23 8.23 0 0 1 9.9-7.11 8.25 8.25 0 0 1 6.47 6.98c.13 1.01.07 2.06.07 3.09a.75.75 0 0 1-1.5 0c0-.96.07-1.94-.06-2.9a6.75 6.75 0 0 0-13.4.11c-.1.92-.04 1.87-.04 2.79a.75.75 0 0 1-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M4.5 12.25H5c.57.03 1.23.3 1.6.66.36.37.62 1.02.65 1.59v2c-.03.57-.3 1.23-.66 1.6-.36.36-1.02.62-1.59.65h-.5a2.6 2.6 0 0 1-1.6-.66 2.6 2.6 0 0 1-.65-1.59v-2c.03-.57.3-1.23.66-1.6a2.6 2.6 0 0 1 1.59-.65zm14.5 0h.5c.57.03 1.23.3 1.6.66.36.37.62 1.02.65 1.59v2c-.03.57-.3 1.23-.66 1.6a2.6 2.6 0 0 1-1.41.63 3.65 3.65 0 0 1-2.96 2.96c-.44.08-.88.06-1.32.06h-1.9a.75.75 0 0 1 0-1.5h1.66c.42 0 .87.04 1.28-.04a2.2 2.2 0 0 0 1.74-1.64q-.47-.18-.77-.48a2.6 2.6 0 0 1-.66-1.59v-2c.03-.57.3-1.22.66-1.59a2.6 2.6 0 0 1 1.59-.66z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 7.9c.1.8.27 1.25.61 1.59s.8.51 1.6.61a.4.4 0 0 1 0 .8c-.8.1-1.26.27-1.6.61s-.51.8-.61 1.6a.4.4 0 0 1-.8 0c-.1-.8-.27-1.26-.61-1.6s-.8-.51-1.6-.61a.4.4 0 0 1 0-.8c.8-.1 1.26-.27 1.6-.61s.51-.8.61-1.6a.4.4 0 0 1 .8 0z"
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
            d="M3.8 11.04a8.23 8.23 0 0 1 9.9-7.11 8.25 8.25 0 0 1 6.56 8.48q.5.19.83.5c.37.36.63 1.02.66 1.59v2c-.03.57-.3 1.22-.66 1.59a2.6 2.6 0 0 1-1.41.64 3.65 3.65 0 0 1-2.97 2.96c-.43.08-.87.06-1.31.06h-1.9a.75.75 0 0 1 0-1.5h1.66c.42 0 .87.04 1.28-.04a2.2 2.2 0 0 0 1.74-1.64q-.47-.18-.77-.48a2.6 2.6 0 0 1-.66-1.59v-2c.03-.57.3-1.23.66-1.6a2.6 2.6 0 0 1 1.36-.62q-.01-.6-.08-1.17a6.75 6.75 0 0 0-13.4.1q-.05.52-.06 1.06c.5.09 1.04.32 1.36.64.37.37.63 1.02.66 1.59v2c-.03.57-.3 1.23-.66 1.6-.37.36-1.02.62-1.6.65h-.5a2.6 2.6 0 0 1-1.58-.66 2.6 2.6 0 0 1-.66-1.59v-2c.03-.57.3-1.23.66-1.6q.32-.3.82-.49 0-.7.07-1.37zm8.6-3.14c.1.8.27 1.25.61 1.59s.8.51 1.6.61a.4.4 0 0 1 0 .8c-.8.1-1.26.27-1.6.61s-.51.8-.61 1.6a.4.4 0 0 1-.8 0c-.1-.8-.27-1.26-.61-1.6s-.8-.51-1.6-.61a.4.4 0 0 1 0-.8c.8-.1 1.26-.27 1.6-.61s.51-.8.61-1.6a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiSupport;
