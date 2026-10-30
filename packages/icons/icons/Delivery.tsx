import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDelivery = forwardRef<SVGSVGElement, IconProps>(function IconDelivery(
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
            d="M7.9 15.26a.75.75 0 0 0 1.45-.4zM6.49 7.27l.72-.2v0zM5.1 5.92l-.2.72zm-1.5-1.2a.75.75 0 1 0-.4 1.45zm16.99 11a.75.75 0 1 0-.38-1.45zm-10 1.84a2.13 2.13 0 0 1-1.57 2.61l.38 1.46a3.63 3.63 0 0 0 2.64-4.47zm-1.57 2.61a2.24 2.24 0 0 1-2.74-1.51l-1.44.4a3.74 3.74 0 0 0 4.56 2.57zm-2.74-1.51a2.13 2.13 0 0 1 1.58-2.62l-.38-1.45a3.63 3.63 0 0 0-2.64 4.47zm1.58-2.62a2.24 2.24 0 0 1 2.74 1.52l1.44-.4a3.74 3.74 0 0 0-4.56-2.57zm1.5-1.17L7.2 7.07l-1.45.4 2.16 7.8zM5.3 5.2l-1.7-.48-.4 1.45 1.7.47zm1.9 1.87A2.7 2.7 0 0 0 5.3 5.2l-.4 1.44c.43.12.75.44.85.83zm4.3 11.02 9.09-2.36-.38-1.46-9.08 2.36z"
            fill="currentColor"
          />
          <path
            d="M19.56 6.24c-.48-1.76-.72-2.64-1.44-3.04-.7-.4-1.61-.16-3.42.31l-1.92.5c-1.81.47-2.72.7-3.13 1.4-.41.69-.17 1.56.32 3.32l.51 1.86c.48 1.76.73 2.64 1.44 3.04s1.62.16 3.43-.31l1.92-.5c1.8-.47 2.71-.7 3.13-1.4.22-.38.25-.81.15-1.42"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M7.9 15.26a.75.75 0 1 0 1.45-.4zM6.49 7.27l.72-.2zM5.1 5.92l-.2.72zm-1.5-1.2a.75.75 0 1 0-.4 1.45zm16.99 11a.75.75 0 1 0-.38-1.45zm-10 1.84a2.13 2.13 0 0 1-1.57 2.62l.38 1.45a3.63 3.63 0 0 0 2.64-4.47zm-1.57 2.62a2.24 2.24 0 0 1-2.74-1.52l-1.44.4a3.74 3.74 0 0 0 4.56 2.57zm-2.74-1.52a2.13 2.13 0 0 1 1.58-2.62l-.38-1.45a3.63 3.63 0 0 0-2.64 4.47zm1.58-2.62a2.24 2.24 0 0 1 2.74 1.52l1.44-.4a3.74 3.74 0 0 0-4.56-2.57zm1.5-1.17L7.2 7.07l-1.45.4 2.16 7.8zM5.3 5.2l-1.7-.48-.4 1.45 1.7.47zm1.9 1.87A2.7 2.7 0 0 0 5.3 5.2l-.4 1.44c.43.12.75.44.85.83zm4.3 11.02 9.09-2.36-.38-1.46-9.08 2.36z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.97 8.73c-.49-1.76-.73-2.63-.32-3.32.41-.7 1.32-.93 3.13-1.4l1.92-.5c1.8-.47 2.71-.7 3.42-.3.72.4.96 1.27 1.44 3.03l.52 1.86c.48 1.75.73 2.63.32 3.32-.42.7-1.32.93-3.13 1.4l-1.92.5c-1.81.47-2.72.7-3.43.3s-.96-1.27-1.44-3.03z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M2.78 5.25c.1-.4.52-.64.92-.53l1.7.48a2.7 2.7 0 0 1 1.9 1.87l2.15 7.8.16.54c.63.23 1.18.68 1.52 1.26l.31-.1 8.87-2.3a.75.75 0 1 1 .38 1.46l-8.84 2.3-.33.1a2.9 2.9 0 0 1-2.2 2.77 3 3 0 0 1-3.66-2.04 2.9 2.9 0 0 1 2.35-3.6L5.85 7.47A1.2 1.2 0 0 0 5 6.64l-1.7-.47a.75.75 0 0 1-.52-.92"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m10.06 8.73.52 1.86c.48 1.76.73 2.64 1.44 3.04s1.62.16 3.43-.31l1.92-.5c1.8-.47 2.71-.7 3.12-1.4.42-.69.17-1.57-.31-3.32l-.52-1.86c-.48-1.76-.72-2.64-1.44-3.04-.71-.4-1.61-.16-3.42.31l-1.92.5c-1.81.47-2.72.7-3.13 1.4-.41.69-.17 1.56.31 3.32"
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
            d="m10.06 8.73.52 1.86c.48 1.76.73 2.64 1.44 3.04s1.62.16 3.43-.31l1.92-.5c1.8-.47 2.71-.7 3.12-1.4.42-.69.17-1.57-.31-3.32l-.52-1.86c-.48-1.76-.72-2.64-1.44-3.04-.71-.4-1.61-.16-3.42.31l-1.92.5c-1.81.47-2.72.7-3.13 1.4-.41.69-.17 1.56.31 3.32"
            fill="currentColor"
          />
          <path
            d="M2.78 5.25c.1-.4.52-.64.92-.53l1.7.48a2.7 2.7 0 0 1 1.9 1.87l2.15 7.8.16.54c.63.23 1.18.68 1.52 1.26l.31-.1 8.87-2.3a.75.75 0 1 1 .38 1.46l-8.84 2.3-.33.1a2.9 2.9 0 0 1-2.2 2.77 3 3 0 0 1-3.66-2.04 2.9 2.9 0 0 1 2.35-3.6L5.85 7.47A1.2 1.2 0 0 0 5 6.64l-1.7-.47a.75.75 0 0 1-.52-.92"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDelivery;
