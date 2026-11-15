import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiScanImage = forwardRef<SVGSVGElement, IconProps>(function IconAiScanImage(
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
            d="M2.5 7V5.5a3 3 0 0 1 3-3H7m10 0h1.5a3 3 0 0 1 3 3V7M7 21.5H5.5a3 3 0 0 1-3-3V17m19 0v1.5c0 .67-.22 1.3-.6 1.8m-2.02 1.18-.38.02H17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 6.5h6A2.5 2.5 0 0 1 17.5 9v6a2.5 2.5 0 0 1-2.5 2.5H9A2.5 2.5 0 0 1 6.5 15V9A2.5 2.5 0 0 1 9 6.5Zm-2.4 8.7L9 13c.6-.5 1.4-.5 2 0l3.2 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 8.4c.14 1.06.54 1.46 1.6 1.6-1.06.14-1.46.54-1.6 1.6-.14-1.06-.54-1.46-1.6-1.6 1.06-.14 1.46-.54 1.6-1.6Z"
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
            d="M2.5 7V5.5a3 3 0 0 1 3-3H7m10 0h1.5a3 3 0 0 1 3 3V7m0 10v1.5a3 3 0 0 1-3 3H17m-10 0H5.5a3 3 0 0 1-3-3V17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 6.5h6A2.5 2.5 0 0 1 17.5 9v6a2.5 2.5 0 0 1-2.5 2.5H9A2.5 2.5 0 0 1 6.5 15V9A2.5 2.5 0 0 1 9 6.5Zm-2.4 8.7L9 13c.6-.5 1.4-.5 2 0l3.2 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 8.4c.14 1.06.54 1.46 1.6 1.6-1.06.14-1.46.54-1.6 1.6-.14-1.06-.54-1.46-1.6-1.6 1.06-.14 1.46-.54 1.6-1.6Z"
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
            d="M1.75 7c0-.75-.07-1.55.08-2.29a3.8 3.8 0 0 1 2.88-2.88c.74-.16 1.54-.08 2.29-.08a.75.75 0 0 1 0 1.5c-.62 0-1.28-.07-1.89.03a2.2 2.2 0 0 0-1.17.6C3.07 4.7 3.25 5.9 3.25 7a.75.75 0 0 1-1.5 0zM17 1.75c.75 0 1.55-.07 2.29.08a3.8 3.8 0 0 1 2.88 2.88c.15.74.08 1.54.08 2.29a.75.75 0 0 1-1.5 0c0-.62.07-1.28-.03-1.89a2.2 2.2 0 0 0-.6-1.17c-.83-.87-2.03-.69-3.12-.69a.75.75 0 0 1 0-1.5zM22.25 17c0 .75.08 1.55-.08 2.29a3.8 3.8 0 0 1-2.88 2.88c-.74.15-1.54.08-2.29.08a.75.75 0 0 1 0-1.5c.62 0 1.28.07 1.89-.03a2.2 2.2 0 0 0 1.17-.6c.87-.83.69-2.03.69-3.12a.75.75 0 0 1 1.5 0zM7 22.25c-.75 0-1.55.08-2.29-.08a3.8 3.8 0 0 1-2.88-2.88c-.16-.74-.08-1.54-.08-2.29a.75.75 0 0 1 1.5 0c0 .62-.07 1.28.03 1.89a2.2 2.2 0 0 0 .6 1.17c.83.87 2.02.69 3.12.69a.75.75 0 0 1 0 1.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M9 5.75h6c.84.03 1.75.4 2.3.95s.92 1.46.95 2.3v6c-.03.84-.4 1.75-.95 2.3s-1.46.92-2.3.95H9a3.6 3.6 0 0 1-2.3-.95 3.6 3.6 0 0 1-.95-2.3V9c.03-.84.4-1.75.95-2.3A3.6 3.6 0 0 1 9 5.75zm-2.95 9.96c.28.3.75.32 1.06.04l1.85-1.7c.26-.24.54-.6.9-.66.52-.1.88.4 1.2.7l2.63 2.46a.75.75 0 0 0 1.02-1.1L12.1 13c-.72-.68-1.44-1.28-2.5-1.09-.69.13-1.15.59-1.64 1.04l-1.86 1.7a.75.75 0 0 0-.04 1.06zM14 7.65a.4.4 0 0 0-.4.35c-.07.6-.2.91-.44 1.16-.25.25-.56.37-1.16.44a.4.4 0 0 0 0 .8c.6.07.91.2 1.16.44.24.25.37.56.44 1.16a.4.4 0 0 0 .8 0c.07-.6.2-.91.44-1.16.25-.24.56-.37 1.16-.44a.4.4 0 0 0 0-.8c-.6-.07-.91-.2-1.16-.44-.24-.25-.37-.56-.44-1.16a.4.4 0 0 0-.4-.35z"
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
            d="M1.75 7c0-.75-.07-1.55.08-2.29a3.8 3.8 0 0 1 2.88-2.88c.74-.16 1.54-.08 2.29-.08a.75.75 0 0 1 0 1.5c-.62 0-1.28-.07-1.89.03a2.2 2.2 0 0 0-1.17.6C3.07 4.7 3.25 5.9 3.25 7a.75.75 0 0 1-1.5 0zM17 1.75c.75 0 1.55-.07 2.29.08a3.8 3.8 0 0 1 2.88 2.88c.15.74.08 1.54.08 2.29a.75.75 0 0 1-1.5 0c0-.62.07-1.28-.03-1.89a2.2 2.2 0 0 0-.6-1.17c-.83-.87-2.03-.69-3.12-.69a.75.75 0 0 1 0-1.5zM22.25 17c0 .75.08 1.55-.08 2.29a3.8 3.8 0 0 1-2.88 2.88c-.74.15-1.54.08-2.29.08a.75.75 0 0 1 0-1.5c.62 0 1.28.07 1.89-.03a2.2 2.2 0 0 0 1.17-.6c.87-.83.69-2.03.69-3.12a.75.75 0 0 1 1.5 0zM7 22.25c-.75 0-1.55.08-2.29-.08a3.8 3.8 0 0 1-2.88-2.88c-.16-.74-.08-1.54-.08-2.29a.75.75 0 0 1 1.5 0c0 .62-.07 1.28.03 1.89a2.2 2.2 0 0 0 .6 1.17c.83.87 2.02.69 3.12.69a.75.75 0 0 1 0 1.5zm2-16.5h6c.84.03 1.75.4 2.3.95s.92 1.46.95 2.3v6c-.03.84-.4 1.75-.95 2.3s-1.46.92-2.3.95H9a3.6 3.6 0 0 1-2.3-.95 3.6 3.6 0 0 1-.95-2.3V9c.03-.84.4-1.75.95-2.3A3.6 3.6 0 0 1 9 5.75zm-2.95 9.96c.28.3.75.32 1.06.04l1.85-1.7c.26-.24.54-.6.9-.66.52-.1.88.4 1.2.7l2.63 2.46a.75.75 0 0 0 1.02-1.1L12.1 13c-.72-.68-1.44-1.28-2.5-1.09-.69.13-1.15.59-1.64 1.04l-1.86 1.7a.75.75 0 0 0-.04 1.06zM14 7.65a.4.4 0 0 0-.4.35c-.07.6-.2.91-.44 1.16-.25.25-.56.37-1.16.44a.4.4 0 0 0 0 .8c.6.07.91.2 1.16.44.24.25.37.56.44 1.16a.4.4 0 0 0 .8 0c.07-.6.2-.91.44-1.16.25-.24.56-.37 1.16-.44a.4.4 0 0 0 0-.8c-.6-.07-.91-.2-1.16-.44-.24-.25-.37-.56-.44-1.16a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiScanImage;
