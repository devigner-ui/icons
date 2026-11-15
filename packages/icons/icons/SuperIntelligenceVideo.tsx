import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSuperIntelligenceVideo = forwardRef<SVGSVGElement, IconProps>(function IconSuperIntelligenceVideo(
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
            d="M15.5 10.5 19.7 8c.8-.5 1.8.1 1.8 1v6c0 .9-1 1.5-1.8 1l-4.2-2.5m-5.95-3.04c-.65-.86-2.94-.86-3.26.39-.26.86 3.26 1.05 3.26 2.3-.32 1.25-2.6 1.25-3.26.39M11.7 9.6v4.8"
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
            d="M15.5 10.5 19.7 8c.8-.5 1.8.1 1.8 1v6c0 .9-1 1.5-1.8 1l-4.2-2.5V15a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.55 10.46c-.65-.86-2.94-.86-3.26.39-.26.86 3.26 1.05 3.26 2.3-.32 1.25-2.6 1.25-3.26.39M11.7 9.6v4.8"
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
            d="M5.5 5.25h7a4 4 0 0 1 2.65 1.1A4 4 0 0 1 16.25 9v.18l2.56-1.52c.7-.42 1.38-.78 2.2-.46.62.24 1.08.79 1.2 1.43.07.32.04.66.04.98v4.18c0 .46.03.93 0 1.38a1.94 1.94 0 0 1-2.59 1.64c-.55-.2-1.07-.6-1.57-.9l-1.84-1.09V15a4 4 0 0 1-1.1 2.65 4 4 0 0 1-2.65 1.1h-7a4 4 0 0 1-2.65-1.1A4 4 0 0 1 1.75 15V9a4 4 0 0 1 1.1-2.65 4 4 0 0 1 2.65-1.1z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.95 10.92c-.3-.36-1-.36-1.42-.26q-.16.04-.31.13.21.12.44.2c1.02.39 2.36.76 2.61 1.94a1 1 0 0 1-.03.52c-.67 1.77-3.4 1.9-4.55.54a.75.75 0 0 1 1.2-.9c.31.36 1.04.36 1.46.24q.22-.05.38-.2c-.08-.06-.2-.16-.26-.19a6 6 0 0 0-.78-.33c-.69-.26-1.83-.51-2.1-1.3-.27-.82.4-1.61 1.11-1.94 1.11-.5 2.64-.3 3.45.64a.75.75 0 0 1-1.2.9zm2.76-2.07c.42 0 .75.34.75.75v4.8a.75.75 0 0 1-1.5 0V9.6c0-.41.34-.75.75-.75z"
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
            d="M5.5 5.25h7a4 4 0 0 1 2.65 1.1A4 4 0 0 1 16.25 9v.18l2.56-1.52c.7-.42 1.38-.78 2.2-.46.62.24 1.08.79 1.2 1.43.07.32.04.66.04.98v4.18c0 .46.03.93 0 1.38a1.94 1.94 0 0 1-2.59 1.64c-.55-.2-1.07-.6-1.57-.9l-1.84-1.09V15a4 4 0 0 1-1.1 2.65 4 4 0 0 1-2.65 1.1h-7a4 4 0 0 1-2.65-1.1A4 4 0 0 1 1.75 15V9a4 4 0 0 1 1.1-2.65 4 4 0 0 1 2.65-1.1zm4.5 5.82c.33-.26.4-.73.15-1.06-.81-.95-2.34-1.15-3.45-.64-.7.32-1.39 1.11-1.1 1.94.26.79 1.4 1.04 2.09 1.3q.4.14.78.33l.26.18q-.17.15-.38.2c-.42.13-1.15.13-1.46-.24a.75.75 0 0 0-1.2.9c1.15 1.36 3.88 1.24 4.55-.53a.7.7 0 0 0 .03-.52c-.25-1.19-1.59-1.55-2.62-1.94q-.23-.09-.44-.2.15-.09.32-.13c.42-.1 1.11-.1 1.42.25.25.33.72.4 1.05.15zm.96-1.47v4.8a.75.75 0 0 0 1.5 0V9.6a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconSuperIntelligenceVideo;
