import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCorkscrew = forwardRef<SVGSVGElement, IconProps>(
  function IconCorkscrew(
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
              d="m18.26 13.48-.53.53zm-7.74-7.74.53-.53zm3.1-3.1.53-.53zm7.74 7.74-.53.54zm.53-.53-7.74-7.74-1.07 1.06 7.75 7.75zM9.99 6.27 17.73 14l1.06-1.06-7.74-7.74zM17.73 14a2.94 2.94 0 0 0 4.16 0l-1.06-1.06c-.56.56-1.48.56-2.04 0zM10 2.11a2.94 2.94 0 0 0 0 4.16l1.06-1.06a1.44 1.44 0 0 1 0-2.04zm4.16 0a2.94 2.94 0 0 0-4.16 0l1.06 1.06a1.44 1.44 0 0 1 2.03 0zm6.68 8.8c.56.57.56 1.48 0 2.04l1.06 1.06a2.94 2.94 0 0 0 0-4.16z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M1.47 21.47a.75.75 0 0 0 1.06 1.06zm3.08-2.02-.53-.53zm.22-1.24-.68.32zm-.95-2-.68.31zm.79-.7-.4.63zm6.7 4.25.4-.63zm.75-.77-.62.43zm-5.6-8.03-.61.43zm.77-.76.42-.61zm5.54 3.87-.43.61zm.78-.74-.64.4zm-.64-1.05.64-.39zm2.01-2.14a.75.75 0 1 0-1.06-1.06zM2.53 22.53l2.55-2.55-1.06-1.06-2.55 2.55zm2.91-4.65-.94-2-1.36.64.95 2zM4.2 16.14l6.71 4.26.8-1.27-6.7-4.26zm8.47 2.42-5.6-8.02-1.22.85 5.6 8.03zM6.8 10.82l5.54 3.86.86-1.23L7.65 9.6zm7.4 2.12-.65-1.05-1.28.79.64 1.05zm-.6-1.47 1.32-1.33-1.06-1.06-1.33 1.32zm-.05.42a.35.35 0 0 1 .05-.43l-1.07-1.06c-.6.6-.71 1.55-.26 2.28zm-1.2 2.8c1.15.8 2.58-.55 1.84-1.75l-1.28.79a.2.2 0 0 1-.02-.15l.06-.1a.2.2 0 0 1 .11-.06q.1 0 .14.03zm-5.27-4.15q.04.04.03.14l-.05.11a.2.2 0 0 1-.12.06.2.2 0 0 1-.14-.03l.85-1.23c-1.18-.83-2.63.62-1.8 1.8zm3.83 9.86c1.2.76 2.57-.68 1.76-1.84l-1.23.86a.2.2 0 0 1-.03-.15q.01-.08.05-.1a.2.2 0 0 1 .11-.06q.1-.01.15.02zM4.5 15.88a.2.2 0 0 1-.05.24l-.11.04q-.08.01-.14-.02l.8-1.27c-1.09-.7-2.42.48-1.86 1.65zm.58 4.1c.55-.55.7-1.4.36-2.1l-1.35.65q.08.21-.07.39z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 12a2.15 2.15 0 1 1-4.3 0 2.15 2.15 0 0 1 4.3 0"
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
              d="M22 12a2.15 2.15 0 1 1-4.3 0 2.15 2.15 0 0 1 4.3 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.36 10.39 13.6 2.64a2.19 2.19 0 1 0-3.1 3.1l7.75 7.74q.26.26.57.41A2.15 2.15 0 1 1 22 11.96c0-.57-.2-1.14-.64-1.58"
              fill="currentColor"
            />
            <path
              d="m12.53 10.4 1.33-1.32.91.91.15.15-1.32 1.33a.35.35 0 0 0-.05.42l.64 1.05c.74 1.2-.7 2.55-1.85 1.74l-2.62-1.82-2-1.4L9 13.28l3.68 5.29c.81 1.16-.56 2.6-1.76 1.84L4.8 16.5l.64 1.37c.34.7.2 1.55-.36 2.1l-2.55 2.55a.75.75 0 0 1-1.06-1.06l2.55-2.55q.15-.17.07-.4l-.95-2c-.56-1.17.77-2.35 1.87-1.65l.54.35 5.31 3.37-3.18-4.57-1.83-2.63c-.83-1.18.62-2.63 1.8-1.8l3.52 2.45 1.23.86-.13-.22a1.84 1.84 0 0 1 .26-2.28"
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
              d="M19.36 8.38a3.65 3.65 0 0 0-3.12 3.08l-1.32-1.32-1.32 1.32a.35.35 0 0 0-.05.43l.64 1.05c.74 1.2-.7 2.55-1.85 1.74l-4.61-3.21 4.94 7.09c.81 1.16-.56 2.6-1.76 1.84L4.8 16.5l.64 1.37c.34.7.2 1.55-.36 2.1l-2.55 2.55a.75.75 0 0 1-1.06-1.06l2.55-2.55q.15-.17.07-.4l-.95-2c-.56-1.17.77-2.35 1.87-1.65l5.85 3.72-5.01-7.2c-.83-1.19.62-2.63 1.8-1.8l4.75 3.3-.13-.21a1.84 1.84 0 0 1 .26-2.28l1.33-1.32-3.34-3.34a2.19 2.19 0 1 1 3.1-3.1z"
              fill="currentColor"
            />
            <path
              d="M21.36 13.48c.42-.42.63-.96.64-1.51a2.15 2.15 0 1 0-3.18 1.92 2.2 2.2 0 0 0 2.54-.4"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCorkscrew;
