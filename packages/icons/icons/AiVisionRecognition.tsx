import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiVisionRecognition = forwardRef<SVGSVGElement, IconProps>(function IconAiVisionRecognition(
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
            d="M5.54 12C7.04 9.08 9.28 7.58 12 7.58s4.96 1.5 6.46 4.42c-1.5 2.92-3.74 4.42-6.46 4.42S7.04 14.92 5.54 12z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 10c.18 1.32.68 1.82 2 2-1.32.18-1.82.68-2 2-.18-1.32-.68-1.82-2-2 1.32-.18 1.82-.68 2-2Z"
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
            d="M5.54 12C7.04 9.08 9.28 7.58 12 7.58s4.96 1.5 6.46 4.42c-1.5 2.92-3.74 4.42-6.46 4.42S7.04 14.92 5.54 12z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 10c.18 1.32.68 1.82 2 2-1.32.18-1.82.68-2 2-.18-1.32-.68-1.82-2-2 1.32-.18 1.82-.68 2-2Z"
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
            d="M4.87 11.66C6.5 8.59 9.07 6.83 12 6.83s5.5 1.76 7.13 4.83c.1.21.1.47 0 .68-1.62 3.07-4.2 4.83-7.13 4.83s-5.5-1.76-7.13-4.83a.8.8 0 0 1 0-.68zM12 9.25a.4.4 0 0 0-.4.35c-.1.73-.25 1.14-.56 1.45-.3.3-.71.46-1.44.55a.4.4 0 0 0 0 .8c.73.1 1.14.25 1.45.56.3.3.46.71.55 1.44a.4.4 0 0 0 .8 0c.1-.73.25-1.14.56-1.45.3-.3.71-.46 1.44-.55a.4.4 0 0 0 0-.8c-.73-.1-1.14-.25-1.45-.56-.3-.3-.46-.71-.55-1.44a.4.4 0 0 0-.4-.35z"
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
            d="M1.75 7c0-.75-.07-1.55.08-2.29a3.8 3.8 0 0 1 2.88-2.88c.74-.16 1.54-.08 2.29-.08a.75.75 0 0 1 0 1.5c-.62 0-1.28-.07-1.89.03a2.2 2.2 0 0 0-1.17.6C3.07 4.7 3.25 5.9 3.25 7a.75.75 0 0 1-1.5 0zM17 1.75c.75 0 1.55-.07 2.29.08a3.8 3.8 0 0 1 2.88 2.88c.15.74.08 1.54.08 2.29a.75.75 0 0 1-1.5 0c0-.62.07-1.28-.03-1.89a2.2 2.2 0 0 0-.6-1.17c-.83-.87-2.03-.69-3.12-.69a.75.75 0 0 1 0-1.5zM22.25 17c0 .75.08 1.55-.08 2.29a3.8 3.8 0 0 1-2.88 2.88c-.74.15-1.54.08-2.29.08a.75.75 0 0 1 0-1.5c.62 0 1.28.07 1.89-.03a2.2 2.2 0 0 0 1.17-.6c.87-.83.69-2.03.69-3.12a.75.75 0 0 1 1.5 0zM7 22.25c-.75 0-1.55.08-2.29-.08a3.8 3.8 0 0 1-2.88-2.88c-.16-.74-.08-1.54-.08-2.29a.75.75 0 0 1 1.5 0c0 .62-.07 1.28.03 1.89a2.2 2.2 0 0 0 .6 1.17c.83.87 2.02.69 3.12.69a.75.75 0 0 1 0 1.5zm-2.13-10.6C6.5 8.6 9.07 6.84 12 6.84s5.5 1.76 7.13 4.83c.1.21.1.47 0 .68-1.62 3.07-4.2 4.83-7.13 4.83s-5.5-1.76-7.13-4.83a.8.8 0 0 1 0-.68zM12 9.26a.4.4 0 0 0-.4.35c-.1.73-.25 1.14-.56 1.45-.3.3-.71.46-1.44.55a.4.4 0 0 0 0 .8c.73.1 1.14.25 1.45.56.3.3.46.71.55 1.44a.4.4 0 0 0 .8 0c.1-.73.25-1.14.56-1.45.3-.3.71-.46 1.44-.55a.4.4 0 0 0 0-.8c-.73-.1-1.14-.25-1.45-.56-.3-.3-.46-.71-.55-1.44a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiVisionRecognition;
