import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGlobus = forwardRef<SVGSVGElement, IconProps>(function IconGlobus(
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
            d="M12 22v-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M4 16.56A10.31 10.31 0 1 0 18.56 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 4.55c.59.56 1.8 2.07 1.93 3.69.13 1.51 1.1 2.74 2.57 2.76.57 0 1.14-.42 1.14-1q0-.28-.08-.54c-.06-.24-.07-.51.06-.8.46-.97 1.36-1.23 2.07-1.77.32-.23.61-.48.74-.68.35-.55.7-1.66.52-2.21M13.3 17a2.8 2.8 0 0 1 0-2.48c.66-1.24 2.86-1.24 2.86-1.24 1.69-.02 2.3-.79 2.58-1.47M19 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M10 22h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="12"
            cy="10.0002"
            r="7"
            fill="currentColor"
          />
          <path
            d="M9.6 8.21A6 6 0 0 0 7.8 4.9l-.3-.26a7 7 0 0 1 8.64-.28c.16.5-.15 1.53-.48 2.03-.11.18-.38.4-.68.62-.66.47-1.5.71-1.93 1.59a1 1 0 0 0-.06.71q.07.24.07.49c0 .52-.53.9-1.06.9-1.38-.01-2.28-1.12-2.4-2.49"
            fill="currentColor"
          />
          <path
            d="M13 14.4c.7-1.31 3-1.31 3-1.31 2.4-.02 2.73-1.48 2.95-2.22a7 7 0 0 1-5.98 6.06c-.22-.47-.5-1.54.04-2.54"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 1.5a.75.75 0 0 1 1.06-.06 11.06 11.06 0 0 1-6.31 19.26v.55H14a.75.75 0 1 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25v-.5a11 11 0 0 1-7.8-3.69.75.75 0 0 1 1.1-1 9.56 9.56 0 1 0 13.5-13.5A.75.75 0 0 1 18 1.5"
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
            d="M8.39 5.08a10 10 0 0 0-.5-.75A7 7 0 0 1 15.6 4l-.07.3c-.1.4-.27.78-.41 1q-.07.13-.61.55l-.56.36-.07.04q-.3.17-.61.38c-.5.34-1 .79-1.34 1.52a2 2 0 0 0-.12 1.46q.05.2.05.39.02.06-.1.16a.5.5 0 0 1-.32.12c-1.08-.01-1.93-.9-2.05-2.33a7 7 0 0 0-1.01-2.87"
            fill="currentColor"
          />
          <path
            d="M16.65 14.5q.4 0 .75-.04a7 7 0 0 1-3.42 2.26c-.05-.38-.02-.84.2-1.27.2-.36.69-.63 1.34-.8a6 6 0 0 1 1.11-.14z"
            fill="currentColor"
          />
          <path
            d="M5 10c0-1.72.62-3.3 1.65-4.51l.3.46c.4.66.71 1.41.78 2.15.17 1.97 1.48 3.83 3.7 3.86.96.01 2.13-.71 2.12-1.97q0-.43-.1-.81a.4.4 0 0 1 .01-.32c.17-.36.42-.6.77-.84l.52-.32.07-.05q.34-.2.7-.45c.35-.26.8-.62 1.03-1 .18-.29.36-.67.5-1.06a7 7 0 0 1 1.78 6.4q-.09.3-.3.6c-.24.3-.72.68-1.9.69h-.03l-.43.02q-.42.04-1.05.18c-.76.18-1.87.6-2.42 1.64a4 4 0 0 0-.38 2.32L12 17a7 7 0 0 1-7-7"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 1.5a.75.75 0 0 1 1.06-.06 11.06 11.06 0 0 1-6.31 19.26v.55H14a.75.75 0 1 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25v-.5a11 11 0 0 1-7.8-3.69.75.75 0 0 1 1.1-1 9.56 9.56 0 1 0 13.5-13.5A.75.75 0 0 1 18 1.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGlobus;
