import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUSB = forwardRef<SVGSVGElement, IconProps>(function IconUSB(
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
            d="M15.32 17.88a33 33 0 0 0 1.83-1.91c.65-.74 1.33-1.56 1.33-2.59 0-1.47-1.5-2.84-2.46-3.83-1.03-1.06-2.78-2.96-4.04-3.65a3 3 0 0 0-1.36-.38c-1.03-.01-1.9.7-2.63 1.35l-.22.2M5.28 9.52q-1.01.97-1.95 2.02c-.68.77-1.39 1.65-1.33 2.74.09 1.58 2.17 3.4 3.26 4.47 1.08 1.14 3.01 3.3 4.67 3.25 1.08-.03 1.94-.79 2.7-1.48l.2-.18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m9.86 18.75-4.6-4.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.29 12c.91-.92 3.41-3.15 3.66-4.33q.11-.57-.14-1.12c-.47-.97-2.63-3.08-3.49-3.8-.49-.42-1.09-.83-1.78-.74-1.18.16-3.63 2.98-4.55 3.91"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.26 18.75C6.34 19.86 8.21 22 9.86 22c1.08 0 1.95-.74 2.72-1.43.84-.75 1.63-1.57 2.43-2.37.73-.74 1.48-1.45 2.16-2.24.64-.73 1.31-1.56 1.31-2.58 0-1.52-1.62-2.99-2.63-4-1.19-1.2-3.46-3.84-5.23-3.86-1.03-.01-1.9.7-2.63 1.35q-1.3 1.19-2.51 2.45c-.72.72-1.45 1.42-2.13 2.18-.69.77-1.41 1.69-1.35 2.78.09 1.58 2.17 3.4 3.26 4.47Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m18.72 7.4-.71.71"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m16.6 5.28-.71.71"
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
            d="M5.26 18.75c1.08 1.14 3.01 3.3 4.67 3.25 1.08-.03 1.94-.79 2.7-1.48.81-.72 1.56-1.5 2.32-2.26s1.51-1.49 2.2-2.29c.65-.74 1.33-1.56 1.33-2.59 0-1.47-1.5-2.84-2.46-3.83-1.03-1.06-2.78-2.96-4.04-3.65a3 3 0 0 0-1.36-.38c-1.03-.01-1.9.7-2.63 1.35-.88.78-1.69 1.62-2.51 2.45-.73.73-1.47 1.44-2.15 2.22-.68.77-1.39 1.65-1.33 2.74.09 1.58 2.17 3.4 3.26 4.47z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m9.86 18.75-4.6-4.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.29 12c.91-.92 3.41-3.15 3.66-4.33q.11-.57-.14-1.12c-.47-.97-2.63-3.08-3.49-3.8-.49-.42-1.09-.83-1.78-.74-1.18.16-3.63 2.98-4.55 3.91"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.26 18.75C6.34 19.86 8.21 22 9.86 22c1.08 0 1.95-.74 2.72-1.43.84-.75 1.63-1.57 2.43-2.37.73-.74 1.48-1.45 2.16-2.24.64-.73 1.31-1.56 1.31-2.58 0-1.52-1.62-2.99-2.63-4-1.19-1.2-3.46-3.84-5.23-3.86-1.03-.01-1.9.7-2.63 1.35q-1.3 1.19-2.51 2.45c-.72.72-1.45 1.42-2.13 2.18-.69.77-1.41 1.69-1.35 2.78.09 1.58 2.17 3.4 3.26 4.47z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18.72 7.4-.71.71"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m16.6 5.28-.71.71"
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
            d="M19.83 10.44 18.3 12l-.11.11-.1-.09c-.48-.87-1.44-1.82-2.86-3.25-1.41-1.4-2.36-2.36-3.22-2.85l1.68-1.72C15.14 2.74 15.86 2 16.76 2s1.62.74 3.07 2.2S22 6.41 22 7.32s-.72 1.65-2.17 3.12"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 14.14c0 1.35 1.08 2.44 3.25 4.6C7.42 20.92 8.51 22 9.85 22c1.36 0 2.44-1.09 4.61-3.25l.77-.77c2.17-2.17 3.25-3.26 3.25-4.6 0-1.35-1.08-2.44-3.25-4.6-2.17-2.18-3.26-3.26-4.6-3.26-1.35 0-2.44 1.08-4.6 3.25l-.78.77C3.08 11.71 2 12.79 2 14.14m3.79-.53a.75.75 0 0 0-1.07 1.06l4.6 4.6a.75.75 0 1 0 1.07-1.05z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.25 6.87c.3.3.3.77 0 1.06l-.7.71a.75.75 0 0 1-1.07-1.06l.7-.7c.3-.3.77-.3 1.07 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.13 4.75c.29.3.29.77 0 1.06l-.71.71a.75.75 0 1 1-1.06-1.06l.7-.7c.3-.3.77-.3 1.07 0"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="m5.25 9.54.77-.77c2.17-2.17 3.26-3.25 4.6-3.25q.3 0 .6.07c1.1.28 2.16 1.34 4 3.18 1.59 1.58 2.6 2.59 3.02 3.54q.24.52.24 1.07c0 1.34-1.08 2.43-3.25 4.6l-.77.77C12.29 20.92 11.21 22 9.86 22s-2.44-1.08-4.6-3.25C3.07 16.58 2 15.49 2 14.15c0-1.36 1.08-2.44 3.25-4.61m-.53 4.07c.3-.3.77-.3 1.07 0l4.6 4.6a.75.75 0 0 1-1.06 1.07l-4.6-4.6a.75.75 0 0 1 0-1.07"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.83 4.17C21.28 5.62 22 6.34 22 7.24s-.72 1.62-2.17 3.07l-.64.63q-.15-.24-.33-.47c-.6-.79-1.48-1.66-2.5-2.69l-.14-.14a30 30 0 0 0-2.7-2.5l-.46-.33.63-.64C15.14 2.72 15.86 2 16.76 2s1.62.72 3.07 2.17m-.2 2.33c.28.3.28.77 0 1.06l-.72.7a.75.75 0 1 1-1.06-1.05l.71-.71c.3-.3.77-.3 1.06 0M17.5 4.38c.3.3.3.77 0 1.06l-.7.7a.75.75 0 1 1-1.07-1.05l.7-.71c.3-.3.78-.3 1.07 0"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconUSB;
