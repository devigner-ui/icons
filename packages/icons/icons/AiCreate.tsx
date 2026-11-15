import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCreate = forwardRef<SVGSVGElement, IconProps>(function IconAiCreate(
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
            d="M14.83 11.5H13.5a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-1.27"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.44 9.1V6.58a1.68 1.68 0 0 1 3.36 0V9.1m-3.36-1.76h3.36m1.76-2.44v4.2M2.5 14h2.3c.6 0 1.2.2 1.6.6L7.8 16H11a1.3 1.3 0 0 1 0 2.6H8.3M5 21h7.5l6-3.6c.6-.4.8-1.2.4-1.8s-1.1-.8-1.7-.5l-3 1.6"
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
            d="M13.5 2.5h5a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.44 9.1V6.58a1.68 1.68 0 0 1 3.36 0V9.1m-3.36-1.76h3.36m1.76-2.44v4.2M2.5 14h2.3c.6 0 1.2.2 1.6.6L7.8 16H11a1.3 1.3 0 0 1 0 2.6H8.3M5 21h7.5l6-3.6c.6-.4.8-1.2.4-1.8s-1.1-.8-1.7-.5l-3 1.6"
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
            d="M13.5 1.75h5a4 4 0 0 1 2.65 1.1 4 4 0 0 1 1.1 2.65v3a4 4 0 0 1-1.1 2.65 4 4 0 0 1-2.65 1.1h-5a4 4 0 0 1-2.65-1.1 4 4 0 0 1-1.1-2.65v-3a4 4 0 0 1 1.1-2.65 4 4 0 0 1 2.65-1.1z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.69 9.1V7.18c0-.68 0-1.32.38-1.91a2.45 2.45 0 0 1 4.26.3c.24.52.22 1.06.22 1.61V9.1a.75.75 0 0 1-1.5 0V8.09h-1.86v1a.75.75 0 0 1-1.5 0zM16 6.32c-.23-.78-1.32-.9-1.7-.19q-.12.21-.13.46h1.88q-.01-.15-.05-.27zm2.55-2.17c.42 0 .75.34.75.75v4.2a.75.75 0 0 1-1.5 0V4.9c0-.41.34-.75.75-.75zM2.5 13.25h1.77c.68 0 1.33.01 1.95.32.73.36 1.33 1.08 1.9 1.68h2.3c.58 0 1.14-.01 1.66.3a2.07 2.07 0 0 1-.13 3.57c-.48.25-.99.23-1.51.23H8.3a.75.75 0 0 1 0-1.5h2.38c.19 0 .4.03.57-.06.43-.23.37-.88-.1-1.02-.33-.1-.75-.02-1.1-.02H7.8a1 1 0 0 1-.29-.06 1 1 0 0 1-.24-.16l-1-1c-.22-.22-.43-.47-.7-.61-.41-.2-.86-.17-1.3-.17H2.5a.75.75 0 0 1 0-1.5zm2.5 7h7.3l3.93-2.36 1.23-.74c.23-.14.5-.25.7-.43.38-.35.13-1.02-.4-1-.2 0-.39.14-.56.23l-1.17.62-1.48.8a.75.75 0 1 1-.7-1.33l2.32-1.24c.5-.26.97-.57 1.54-.59a2.1 2.1 0 0 1 1.8 3.2c-.45.7-1.4 1.1-2.1 1.52l-4.52 2.71a1 1 0 0 1-.4.1H5a.75.75 0 0 1 0-1.5z"
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
            d="M13.5 1.75h5a4 4 0 0 1 2.65 1.1 4 4 0 0 1 1.1 2.65v3a4 4 0 0 1-1.1 2.65 4 4 0 0 1-2.65 1.1h-5a4 4 0 0 1-2.65-1.1 4 4 0 0 1-1.1-2.65v-3a4 4 0 0 1 1.1-2.65 4 4 0 0 1 2.65-1.1zm-11 11.5h1.77c.68 0 1.33.01 1.95.32.73.36 1.32 1.08 1.9 1.68h2.3c.58 0 1.14-.01 1.66.3a2.07 2.07 0 0 1-.13 3.57c-.48.25-.99.23-1.51.23H8.3a.75.75 0 0 1 0-1.5h2.38c.19 0 .4.03.57-.06.43-.23.37-.88-.1-1.02-.33-.1-.75-.02-1.1-.02H7.8a1 1 0 0 1-.29-.06 1 1 0 0 1-.24-.16l-1-1c-.22-.22-.43-.47-.7-.61-.41-.2-.86-.17-1.3-.17H2.5a.75.75 0 0 1 0-1.5zm2.5 7h7.3l3.93-2.36 1.23-.74c.23-.14.5-.25.7-.43.38-.35.13-1.02-.4-1-.2 0-.39.14-.56.23l-1.17.62-1.48.8a.75.75 0 1 1-.7-1.33l2.32-1.24c.5-.26.97-.57 1.54-.59a2.1 2.1 0 0 1 1.8 3.2c-.45.7-1.4 1.1-2.1 1.52l-4.52 2.71a1 1 0 0 1-.4.1H5a.75.75 0 0 1 0-1.5zm8.44-10.4c.41 0 .75-.34.75-.75V8.09h1.86v1a.75.75 0 0 0 1.5 0v-1.9c0-.55.02-1.1-.22-1.61a2.45 2.45 0 0 0-4.26-.3c-.38.6-.38 1.23-.38 1.91V9.1c0 .41.33.75.75.75zm2.62-3.26h-1.88q0-.25.12-.45c.39-.72 1.48-.6 1.71.18q.04.12.05.27zM17.8 4.9v4.2a.75.75 0 0 0 1.5 0V4.9a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiCreate;
