import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiChatBot = forwardRef<SVGSVGElement, IconProps>(function IconAiChatBot(
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
            d="M21 11.26v2.24c0 2.2-1.8 4-4 4h-4l-3.4 2.9c-.5.4-1.1.1-1.1-.5v-2.4H7c-2.2 0-4-1.8-4-4v-6c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v1.36"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 8.5v2m6-2v2m-5.5 2.8c1.4.9 3.6.9 5 0"
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
            d="M8.5 17.5H7c-2.2 0-4-1.8-4-4v-6c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v6c0 2.2-1.8 4-4 4h-4l-3.4 2.9c-.5.4-1.1.1-1.1-.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 8.5v2m6-2v2m-5.5 2.8c1.4.9 3.6.9 5 0"
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
            d="M7.75 18.25H7a5 5 0 0 1-3.35-1.4 5 5 0 0 1-1.4-3.35v-6a5 5 0 0 1 1.4-3.35A5 5 0 0 1 7 2.74h10a5 5 0 0 1 3.36 1.4 5 5 0 0 1 1.39 3.35v6a5 5 0 0 1-1.4 3.36 5 5 0 0 1-3.35 1.4h-3.72l-3.21 2.74c-.45.28-1.14.4-1.53.21-.38-.18-.73-.8-.79-1.3z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M9 7.75c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75zm6 0c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75zm-5.1 4.92c1.23.76 2.97.76 4.2 0a.75.75 0 1 1 .8 1.26 5.7 5.7 0 0 1-5.8 0 .75.75 0 0 1 .8-1.26z"
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
            d="M7.75 18.25H7a5 5 0 0 1-3.35-1.4 5 5 0 0 1-1.4-3.35v-6a5 5 0 0 1 1.4-3.35A5 5 0 0 1 7 2.74h10a5 5 0 0 1 3.36 1.4 5 5 0 0 1 1.39 3.35v6a5 5 0 0 1-1.4 3.36 5 5 0 0 1-3.35 1.4h-3.72l-3.21 2.74c-.45.28-1.14.4-1.53.21-.38-.18-.73-.8-.79-1.3zm.5-9.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0zm6 0v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0zm-5.38 4.4a.75.75 0 0 0 .23 1.03 5.7 5.7 0 0 0 5.8 0 .75.75 0 0 0-.8-1.26 4.2 4.2 0 0 1-4.2 0 .75.75 0 0 0-1.03.22z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiChatBot;
