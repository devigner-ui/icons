import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmartSpeaker2 = forwardRef<SVGSVGElement, IconProps>(
  function IconSmartSpeaker2(
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
              d="m18.88 14.44.75-.04v-.01zm-13.73-.09-.74-.06v.01zm1.88 7.06-.39.65zm-1.67-1.86-.68.32zm13.26.04.67.32zm-1.67 1.83.38.65zm-4.93-.17c-1.36 0-2.32 0-3.06-.07a3.5 3.5 0 0 1-1.54-.41l-.78 1.29c.63.37 1.33.54 2.18.61q1.23.1 3.2.08zM4.4 14.3q-.16 2.04-.16 3.3c.02.88.12 1.61.43 2.27l1.36-.63a4 4 0 0 1-.29-1.66c-.01-.78.06-1.78.15-3.18zm3 6.47a3.6 3.6 0 0 1-1.37-1.53l-1.36.63a5 5 0 0 0 1.96 2.19zm10.72-6.29c.08 1.39.14 2.38.12 3.15a4 4 0 0 1-.31 1.63l1.35.65a5.4 5.4 0 0 0 .45-2.24c.03-.85-.03-1.92-.1-3.27zm-6.11 8.27q1.93.02 3.16-.08a5 5 0 0 0 2.15-.6l-.76-1.3c-.35.22-.8.34-1.53.41-.74.07-1.69.07-3.02.07zm5.92-3.49c-.3.64-.79 1.17-1.37 1.52l.76 1.29a5 5 0 0 0 1.96-2.16zm-.62-15.64c.03.12.02.31-.14.6q-.24.45-.9.98c-.88.7-2.23 1.39-3.83 1.83l.4 1.45a13 13 0 0 0 4.37-2.1q.82-.65 1.27-1.42c.29-.51.44-1.1.28-1.71zm-4.87 3.41c-1.6.45-3.1.56-4.2.4A3 3 0 0 1 7 7.06c-.27-.16-.36-.31-.4-.43L5.17 7c.16.61.59 1.06 1.1 1.35q.77.44 1.79.57c1.35.19 3.05.04 4.8-.44zm-5.83-.4c-.03-.12-.03-.31.14-.6q.24-.45.9-.98a11 11 0 0 1 3.83-1.83l-.4-1.45a13 13 0 0 0-4.37 2.1q-.82.66-1.27 1.42A2.3 2.3 0 0 0 5.16 7zm4.87-3.41c1.6-.45 3.1-.56 4.2-.4q.82.11 1.24.37c.27.16.36.32.4.43l1.44-.37A2.2 2.2 0 0 0 17.7 1.9c-.5-.3-1.13-.48-1.8-.57a12 12 0 0 0-4.8.44zM5.9 14.42l.7-8-1.49-.13-.7 8zM17.34 3.75l.8 10.75 1.49-.11-.8-10.76z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.71 13.84c.75.75 2.66 1.91 7.29 1.91v-1.5c-4.4 0-5.85-1.1-6.22-1.47zM12 15.75c4.75 0 6.63-1.22 7.34-1.97l-1.09-1.03c-.32.34-1.74 1.5-6.25 1.5z"
              fill="currentColor"
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
              d="M18.05 3.44q.03.12.03.25c.06 1.42-2.27 3.18-5.43 4.06-3.36.94-6.38.52-6.76-.93a1 1 0 0 1-.03-.46c.16-1.38 2.42-3.03 5.43-3.86 3.36-.94 6.38-.52 6.76.94"
              fill="currentColor"
            />
            <path
              d="M12.65 7.75c-3.36.94-6.38.52-6.76-.93a1 1 0 0 1-.03-.39l-.61 6.88C5.8 13.87 7.49 15 12 15c4.63 0 6.28-1.19 6.8-1.73l-.72-9.58c.06 1.42-2.27 3.18-5.43 4.06"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.03 21.41c.98.59 2.31.59 4.99.59 2.64 0 3.96 0 4.93-.58a4.3 4.3 0 0 0 1.67-1.83c.5-1.04.42-2.41.26-5.15l-.09-1.17C18.3 13.8 16.63 15 12 15c-4.51 0-6.2-1.13-6.75-1.7l-.1 1.05c-.19 2.77-.28 4.15.21 5.2a4.3 4.3 0 0 0 1.67 1.86"
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
              d="M11.5 3.22c1.6-.45 3.09-.56 4.18-.4q.84.11 1.25.37c.27.16.36.32.4.43.02.12.01.31-.15.6q-.24.45-.9.98c-.88.7-2.23 1.39-3.83 1.83s-3.1.56-4.2.4a3 3 0 0 1-1.24-.37c-.27-.16-.36-.31-.4-.43-.02-.12-.02-.31.15-.6q.24-.45.9-.98a11 11 0 0 1 3.83-1.83"
              fill="currentColor"
            />
            <path
              d="M18.21 5.38q-.4.53-1 1a13 13 0 0 1-4.36 2.1c-1.75.48-3.45.63-4.8.44a5 5 0 0 1-1.8-.57q-.29-.16-.53-.4l-.39 4.38.45.45c.37.37 1.83 1.47 6.22 1.47 4.5 0 5.93-1.16 6.25-1.5l.47-.5z"
              fill="currentColor"
            />
            <path
              d="m5.15 14.35.02-.13c.97.71 2.94 1.53 6.83 1.53 3.93 0 5.9-.84 6.86-1.55l.02.24c.16 2.74.24 4.1-.26 5.15a4.3 4.3 0 0 1-1.67 1.83c-.97.58-2.3.58-4.93.58-2.68 0-4.01 0-4.99-.59a4.3 4.3 0 0 1-1.67-1.86c-.5-1.05-.4-2.43-.2-5.2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmartSpeaker2;
