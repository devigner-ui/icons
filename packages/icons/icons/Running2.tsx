import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRunning2 = forwardRef<SVGSVGElement, IconProps>(function IconRunning2(
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
            opacity={duotone ? "0.4" : "1"}
            cx="18.5"
            cy="4.50049"
            r="2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="m9 17-1 1.2c-.74.89-1.1 1.33-1.61 1.56-.5.24-1.08.24-2.23.24H3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.65 22a.75.75 0 0 0 1.5 0zm-1.09-5.75.46-.6zm1.19 1.01.59-.46zm.56 1.12.72-.18zm-.8-6.82a.75.75 0 0 0-1.01-1.11zm-2.66 1.6.7.27zm.07 1.56-.68.32zm2.73 5.22V22h1.5v-2.06zm-1.54-3.1a6 6 0 0 1 1.05.89l1.18-.93c-.31-.4-.72-.7-1.32-1.15zm3.04 3.1c0-.75 0-1.26-.12-1.74l-1.45.37a6 6 0 0 1 .07 1.37zm-1.99-2.21q.3.37.42.84l1.45-.37a4 4 0 0 0-.7-1.4zm-.66-7.28c-.42.38-.95.83-1.36 1.22l-.57.59c-.15.17-.33.4-.42.64l1.4.53c0 .02.02-.04.15-.2l.47-.47 1.33-1.2zm.52 5.2q-.72-.54-1.06-.83a1.4 1.4 0 0 1-.36-.42l-1.36.64q.27.51.72.9.45.38 1.15.9zm-2.87-2.75c-.26.7-.22 1.47.1 2.14l1.35-.64c-.15-.3-.16-.66-.04-.97z"
            fill="currentColor"
          />
          <path
            d="m5.44 8.82-.37-.65zm-1.81.16a.75.75 0 1 0 .74 1.3zm9.78-1.62-.29.7zm-2.96-.72-.06-.74zM21 12.75a.75.75 0 0 0 0-1.5zm-5.23-3.21-.67.33zM5.07 8.17l-1.44.81.74 1.3 1.44-.8zm8.62-1.5c-1.34-.56-2.08-.86-3.3-.77l.11 1.5c.82-.07 1.26.09 2.62.65zm-7.88 2.8c2.5-1.42 3.55-2 4.7-2.08l-.12-1.5c-1.56.12-2.95.93-5.32 2.28zm13.94 3.28H21v-1.5h-1.25zM15.1 9.87a5.2 5.2 0 0 0 4.65 2.88v-1.5a3.7 3.7 0 0 1-3.31-2.05zm1.34-.67a5.3 5.3 0 0 0-2.75-2.54l-.57 1.4a3.8 3.8 0 0 1 1.98 1.81z"
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
            d="M20.75 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.44 6.66A5.3 5.3 0 0 1 16.2 9.2a3.7 3.7 0 0 0 3.31 2.05h1.25a.75.75 0 0 1 0 1.5H19.5a5.2 5.2 0 0 1-4.65-2.88 3.8 3.8 0 0 0-1.98-1.82c-1.36-.56-1.8-.72-2.62-.66-1.14.08-2.2.66-4.7 2.08l-1.43.82a.75.75 0 1 1-.74-1.3l1.44-.82.17-.1c2.27-1.3 3.63-2.06 5.15-2.17 1.22-.1 1.96.21 3.3.76m-4.21 9.76c.32.27.36.74.1 1.06l-1 1.2-.1.12c-.64.77-1.11 1.34-1.77 1.64-.66.31-1.4.31-2.4.31H2.75a.75.75 0 0 1 0-1.5h1.16c1.22 0 1.6-.02 1.91-.16.32-.15.57-.43 1.35-1.37l1-1.2a.75.75 0 0 1 1.06-.1"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M13.3 10.5c.28.3.26.78-.05 1.06l-1.33 1.2q-.3.27-.47.48-.14.16-.14.18-.17.5.04.98c.04.09.13.2.36.42q.34.29 1.06.83l.07.05c.56.43.95.72 1.25 1.1q.49.62.7 1.4c.11.46.11.94.11 1.65V22a.75.75 0 0 1-1.5 0v-2.06a6 6 0 0 0-.07-1.37q-.12-.46-.42-.84a6 6 0 0 0-1.05-.89l-.02-.01q-.7-.52-1.13-.9-.46-.38-.72-.89a2.8 2.8 0 0 1-.1-2.14c.1-.25.28-.47.43-.64q.25-.3.57-.6a41 41 0 0 1 1.35-1.21.75.75 0 0 1 1.06.05"
              fill="currentColor"
            />
          </g>
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
            d="M20.75 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.44 6.66A5.3 5.3 0 0 1 16.2 9.2a3.7 3.7 0 0 0 3.31 2.05h1.25a.75.75 0 0 1 0 1.5H19.5a5.2 5.2 0 0 1-4.65-2.88 3.8 3.8 0 0 0-1.98-1.82c-1.36-.56-1.8-.72-2.62-.66-1.14.08-2.2.66-4.7 2.08l-1.43.82a.75.75 0 1 1-.74-1.3l1.44-.82.17-.1c2.27-1.3 3.63-2.06 5.15-2.17 1.22-.1 1.96.21 3.3.76m-.14 3.84c.28.3.26.78-.05 1.06l-.53.47a36 36 0 0 0-1.27 1.2l-.14.2q-.17.49.04.97c.04.09.13.2.36.42q.34.29 1.06.83l.07.05c.56.43.95.72 1.25 1.1q.49.62.7 1.4c.11.46.11.94.11 1.65V22a.75.75 0 0 1-1.5 0v-2.06a6 6 0 0 0-.07-1.37q-.12-.47-.42-.84a6 6 0 0 0-1.05-.89l-.02-.01q-.7-.52-1.13-.9-.46-.38-.72-.89a2.8 2.8 0 0 1-.1-2.14c.1-.24.28-.47.43-.64q.25-.3.57-.6a40 40 0 0 1 1.36-1.21.75.75 0 0 1 1.05.05m-4.07 5.92c.32.27.36.74.1 1.06l-1 1.2-.1.12c-.64.77-1.11 1.34-1.77 1.64-.66.31-1.4.31-2.4.31H2.75a.75.75 0 0 1 0-1.5h1.16c1.22 0 1.6-.02 1.91-.16.32-.15.57-.43 1.35-1.37l1-1.2a.75.75 0 0 1 1.06-.1"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRunning2;
