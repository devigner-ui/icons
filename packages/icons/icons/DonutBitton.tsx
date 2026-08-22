import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDonutBitton = forwardRef<SVGSVGElement, IconProps>(
  function IconDonutBitton(
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
            <circle
              cx="12"
              cy="12.0001"
              r="3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M14.5 7 16 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m19 7 1-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m12 5-1-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m10.5 7-1.37.37"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 5 6 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m6.8 9.14-.6-1.28"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m12.5 22 .03.75a.75.75 0 0 0 .57-1.2zm.44-2.37.45.6zm6.54-4.83-.45-.6zm-4.86 4.06.6-.45zm.7-2.85.45.6zm2.93.16.6-.45zm3.38-1.45-.49.57a.75.75 0 0 0 1.2-.37zm-3.05 1.9-.6.45a.75.75 0 0 0 1.13.08zm.1-.1.54.53a.8.8 0 0 0 .2-.65zm-4.06 2.77-.23.72c.27.08.56 0 .76-.19zm.18-.18.53.53c.27-.27.3-.68.08-.98zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.94 4.81 10.75 10.75 10.75zM2.75 12c0-5.1 4.14-9.25 9.25-9.25v-1.5A10.75 10.75 0 0 0 1.25 12zM12 2.75c5.1 0 9.25 4.14 9.25 9.25h1.5c0-5.94-4.81-10.75-10.75-10.75zm1.1 18.8c-.23-.31-.2-.96.29-1.32l-.9-1.2a2.5 2.5 0 0 0-.6 3.42zm2.12-3.14c-.3-.4-.23-1.23.55-1.8l-.9-1.2c-1.22.9-1.79 2.63-.85 3.9zm.55-1.8c.77-.58 1.58-.4 1.88 0l1.2-.89c-.93-1.26-2.75-1.22-3.98-.32zm4.15-1.21c.5-.37 1-.3 1.22-.11l.97-1.14c-.86-.74-2.16-.64-3.08.04zm1.33-3.4q0 1.31-.35 2.51l1.45.41q.4-1.4.4-2.92zm-8.78 9.25H12v1.5h.53zm5.18-4.63.33.45 1.2-.9-.33-.45zm1.78-.22c-.05-.28.08-.7.5-1l-.9-1.2a2.6 2.6 0 0 0-1.08 2.45zm-.32.75.1-.1L18.17 16l-.1.1zm-5.72 3.08c.36-.26.75-.3 1-.22l.45-1.43a2.7 2.7 0 0 0-2.34.44zm.63-.93.18.25 1.2-.89-.18-.25zm1.13.52.18-.18-1.06-1.06-.18.18z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 13s2.2 2 4 2c1.21 0 2.6-.9 3.39-1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 15.5c-.5-.5-1.53-.86-2-1.28"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m16.65 8.98.07 1.4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M20.68 10.09 19 11.56"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m5.66 12.64.84-1.14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.68 10.35 3.6 8.94"
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
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 2a10 10 0 0 0-9.95 11.05C2.4 13.35 4.37 15 6 15c1.21 0 2.6-.9 3.39-1.5Q9.02 12.81 9 12a3 3 0 1 1 5 2.23c.48.41 1.1.77 1.8.77 1.7 0 1.7-2 3.38-2 1.08 0 1.93.81 2.4 1.4l.1.14A10 10 0 0 0 12 2"
              fill="currentColor"
            />
            <path
              d="m19.53 5.42-.06.05-1 1a.75.75 0 1 0 1.06 1.06l.9-.9q-.4-.64-.9-1.21"
              fill="currentColor"
            />
            <path
              d="m5.42 4.47.05.06 1 1a.75.75 0 1 0 1.06-1.06l-.9-.9q-.64.4-1.21.9"
              fill="currentColor"
            />
            <path
              d="M10.47 4.53a.75.75 0 1 1 1.06-1.06l1 1a.75.75 0 1 1-1.06 1.06z"
              fill="currentColor"
            />
            <path
              d="M16.6 5.45a.75.75 0 0 0-1.2-.9l-1.5 2a.75.75 0 1 0 1.2.9z"
              fill="currentColor"
            />
            <path
              d="M8.4 7.56c.12.4.53.64.93.53l1.36-.37a.75.75 0 1 0-.38-1.44l-1.37.36c-.4.1-.64.52-.53.92"
              fill="currentColor"
            />
            <path
              d="M17.47 10.35a.75.75 0 0 1-1.5.07l-.07-1.4a.75.75 0 0 1 1.5-.08z"
              fill="currentColor"
            />
            <path
              d="M18.44 12.06c.27.3.74.34 1.06.07l1.67-1.48a.75.75 0 0 0-.99-1.13L18.5 11a.75.75 0 0 0-.06 1.06"
              fill="currentColor"
            />
            <path
              d="M5.52 8.17a.75.75 0 1 1 1.37-.62l.58 1.28a.75.75 0 1 1-1.36.62z"
              fill="currentColor"
            />
            <path
              d="M6.94 10.9c.34.24.41.7.16 1.04l-.83 1.14a.75.75 0 1 1-1.21-.88l.83-1.14a.75.75 0 0 1 1.05-.16"
              fill="currentColor"
            />
            <path
              d="M2.86 8.98a.75.75 0 1 1 1.5-.08l.07 1.4a.75.75 0 1 1-1.5.1z"
              fill="currentColor"
            />
            <path
              d="M6 15c1.21 0 2.6-.9 3.39-1.5a3 3 0 0 0 4.62.73c.47.41 1.08.77 1.8.77.84 0 1.26-.5 1.68-1 .43-.5.85-1 1.7-1 1.07 0 1.92.81 2.4 1.4l.09.14-.05.18c-.54-.46-1.44-.45-2.15.07-.6.45-.9 1.14-.8 1.73l-.1.1-.33-.45c-.62-.83-1.93-.9-2.93-.16s-1.32 2.01-.7 2.85l.18.25-.18.18a1.9 1.9 0 0 0-1.68.34c-.8.59-.93 1.7-.45 2.36L12 22a10 10 0 0 1-9.95-8.95C2.4 13.35 4.37 15 6 15"
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
              d="M12.28 21.55a1.8 1.8 0 0 1 .66-1.92c.5-.37 1.08-.48 1.58-.37a.2.2 0 0 0 .18-.05.2.2 0 0 0 .01-.23l-.09-.12c-.61-.83-.3-2.1.68-2.84l-.47-.31-.18-.12-.64-.42a3.7 3.7 0 0 1-4.77-.63c-.4.22-.89.44-1.38.63-.8.31-1.73.58-2.53.58a6.4 6.4 0 0 1-2.92-.9 10 10 0 0 0 9.6 7.15c.2 0 .33-.24.27-.45"
              fill="currentColor"
            />
            <path
              d="M9.75 12a2.25 2.25 0 1 1 3.69 1.73l-.01.01q-.61.5-1.43.51c-1.24 0-2.25-1-2.25-2.25"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.48 14.8c.7-.53 1.6-.54 2.15-.08a10 10 0 0 0-1.2-8.1l-.9.91a.75.75 0 1 1-1.06-1.06l1-1 .06-.05a10 10 0 0 0-12.9-1.85l.9.9a.75.75 0 1 1-1.06 1.06l-1-1-.05-.06a10 10 0 0 0-3.38 8.37q.32.25.78.52c.82.48 1.75.89 2.51.89.52 0 1.25-.19 1.99-.48q.64-.25 1.14-.52a3.74 3.74 0 1 1 6.65.85l.37.24.17.11a10 10 0 0 1 1.42 1.06c.47.06.9.28 1.18.66l.28.37q.06.07.12.01l.03-.07c-.08-.59.21-1.25.8-1.68M16.45 4.4c.33.25.4.72.15 1.05l-1.5 2a.75.75 0 1 1-1.2-.9l1.5-2a.75.75 0 0 1 1.05-.15m-5.98-.93c-.3.3-.3.77 0 1.06l1 1a.75.75 0 1 0 1.06-1.06l-1-1a.75.75 0 0 0-1.06 0M8.41 7.56c.1.4.52.64.92.53l1.36-.37a.75.75 0 0 0-.38-1.44l-1.37.36c-.4.1-.64.52-.53.92M5.9 7.17a.75.75 0 0 0-.38 1l.59 1.28a.75.75 0 0 0 1.37-.62l-.59-1.28a.75.75 0 0 0-1-.38m10.85 3.97a.75.75 0 0 0 .72-.79l-.07-1.4a.75.75 0 0 0-1.5.06l.07 1.41c.02.42.37.74.78.72m1.69.92c.27.3.74.34 1.06.07l1.67-1.48a.75.75 0 0 0-.99-1.13L18.5 11a.75.75 0 0 0-.06 1.06m-11.5-1.17c.34.25.41.72.17 1.05l-.84 1.14a.75.75 0 0 1-1.21-.88l.83-1.14a.75.75 0 0 1 1.05-.17M3.56 8.2a.75.75 0 0 0-.7.79l.07 1.41a.75.75 0 0 0 1.5-.08L4.35 8.9a.75.75 0 0 0-.79-.71"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDonutBitton;
