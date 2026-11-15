import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiMic = forwardRef<SVGSVGElement, IconProps>(function IconAiMic(
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
            d="M9 6.79V5.5a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3v0a3 3 0 0 1-3-3V9.19"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.5 11a6.5 6.5 0 1 0 13 0M12 17.5V21"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 1.5c.23 1.65.85 2.28 2.5 2.5-1.65.22-2.27.85-2.5 2.5-.23-1.65-.85-2.28-2.5-2.5 1.65-.23 2.27-.85 2.5-2.5Z"
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
            d="M12 2.5za3 3 0 0 1 3 3v5a3 3 0 0 1-3 3v0a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.5 11a6.5 6.5 0 1 0 13 0M12 17.5V21"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 1.5c.23 1.65.85 2.28 2.5 2.5-1.65.22-2.27.85-2.5 2.5-.23-1.65-.85-2.28-2.5-2.5 1.65-.23 2.27-.85 2.5-2.5Z"
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
            d="M14.65 2.85c.32.32.62.76.8 1.19s.24 1.14.24 1.17a1 1 0 0 1 .06.3v4.99c0 1.66 0 0 0 0v.06a4 4 0 0 1-1.1 2.6 4 4 0 0 1-1.2.8c-.4.17-1.13.23-1.16.23a1 1 0 0 1-.36.06 4 4 0 0 1-2.58-1.1 4 4 0 0 1-.8-1.19 5 5 0 0 1-.24-1.17 1 1 0 0 1-.06-.3V5.5q0 0 0 0v-.06a4 4 0 0 1 1.1-2.6c.32-.31.76-.61 1.19-.8a5 5 0 0 1 1.17-.23 1 1 0 0 1 .36-.06 4 4 0 0 1 2.58 1.1z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M6.25 11a5.8 5.8 0 0 0 1.78 4.16 5.8 5.8 0 0 0 3.6 1.58A5.8 5.8 0 0 0 17.75 11a.75.75 0 0 1 1.5 0q0 1.42-.53 2.73a7.3 7.3 0 0 1-5.97 4.48V21a.75.75 0 0 1-1.5 0v-2.79a7.24 7.24 0 0 1-6.5-7.2.75.75 0 0 1 1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 1.1c.11.9.31 1.42.7 1.8s.9.59 1.8.7a.4.4 0 0 1 0 .8c-.9.11-1.42.31-1.8.7s-.59.9-.7 1.8a.4.4 0 0 1-.8 0c-.11-.9-.31-1.42-.7-1.8s-.9-.59-1.8-.7a.4.4 0 0 1 0-.8c.9-.11 1.42-.31 1.8-.7s.59-.9.7-1.8a.4.4 0 0 1 .8 0z"
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
            d="M14.65 2.85c.32.32.62.76.8 1.19s.24 1.14.24 1.17a1 1 0 0 1 .06.3v4.99c0 1.66 0 0 0 0v.06a4 4 0 0 1-1.1 2.6 4 4 0 0 1-1.2.8c-.4.17-1.13.23-1.16.23a1 1 0 0 1-.36.06 4 4 0 0 1-2.58-1.1 4 4 0 0 1-.8-1.19 5 5 0 0 1-.24-1.17 1 1 0 0 1-.06-.3V5.5q0 0 0 0v-.06a4 4 0 0 1 1.1-2.6c.32-.31.76-.61 1.19-.8a5 5 0 0 1 1.17-.23 1 1 0 0 1 .36-.06 4 4 0 0 1 2.58 1.1zM6.25 11a5.8 5.8 0 0 0 1.78 4.16 5.8 5.8 0 0 0 3.6 1.58A5.8 5.8 0 0 0 17.75 11a.75.75 0 0 1 1.5 0q0 1.42-.53 2.73a7.3 7.3 0 0 1-5.97 4.48V21a.75.75 0 0 1-1.5 0v-2.79a7.24 7.24 0 0 1-6.5-7.2.75.75 0 0 1 1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 1.1c.11.9.31 1.42.7 1.8s.9.59 1.8.7a.4.4 0 0 1 0 .8c-.9.11-1.42.31-1.8.7s-.59.9-.7 1.8a.4.4 0 0 1-.8 0c-.11-.9-.31-1.42-.7-1.8s-.9-.59-1.8-.7a.4.4 0 0 1 0-.8c.9-.11 1.42-.31 1.8-.7s.59-.9.7-1.8a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiMic;
