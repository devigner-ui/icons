import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFolderPathConnect = forwardRef<SVGSVGElement, IconProps>(
  function IconFolderPathConnect(
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
              opacity={duotone ? "0.4" : "1"}
              d="M16.5 7.5h-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M5 5.22c0-.58 0-.86.05-1.1a2.7 2.7 0 0 1 2.23-2.07C7.54 2 7.85 2 8.46 2l.54.01a3 3 0 0 1 1.91.93l.39.36c.57.53.86.8 1.2.97q.29.15.6.23c.37.1.77.1 1.58.1h.26c1.84 0 2.77 0 3.36.5l.16.15c.54.55.54 1.4.54 3.12V9.8c0 2.45 0 3.68-.82 4.44s-2.14.76-4.78.76h-2.8c-2.64 0-3.96 0-4.78-.76S5 12.25 5 9.8z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 20h-8M2 20h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 18v-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              cx="12"
              cy="20.0001"
              r="2"
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
              opacity={duotone ? "0.4" : "1"}
              d="M2 20c0-.41.34-.75.75-.75h8.5V15h1.5v4.25h8.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 20"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 9.8V8.37c0-1.71 0-2.57-.54-3.12l-.16-.15c-.6-.5-1.52-.5-3.36-.5h-.26c-.8 0-1.21 0-1.59-.1q-.3-.08-.6-.23a6 6 0 0 1-1.19-.97l-.39-.36-.38-.34A3 3 0 0 0 9 2h-.54c-.61 0-.92 0-1.18.05a2.7 2.7 0 0 0-2.23 2.07C5 4.36 5 4.64 5 5.22V9.8c0 2.45 0 3.68.82 4.44s2.14.76 4.78.76h2.8c2.64 0 3.96 0 4.78-.76S19 12.25 19 9.8m-5.5-3.05a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <circle cx="12" cy="20.0001" r="2" fill="currentColor" />
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
              d="M19 8.37V9.8c0 2.45 0 3.68-.82 4.44s-2.14.76-4.78.76h-.65v3l-.01.14c.5.2.91.6 1.11 1.11h7.4a.75.75 0 0 1 0 1.5h-7.4a2 2 0 0 1-3.7 0h-7.4a.75.75 0 0 1 0-1.5h7.4a2 2 0 0 1 1.11-1.11l-.01-.14v-3h-.65c-2.64 0-3.96 0-4.78-.76S5 12.25 5 9.8V5.22c0-.58 0-.86.05-1.1a2.7 2.7 0 0 1 2.23-2.07C7.54 2 7.85 2 8.46 2l.54.01a3 3 0 0 1 1.91.93l.39.36c.57.53.86.8 1.2.97q.29.15.6.23c.37.1.77.1 1.58.1h.26c1.84 0 2.77 0 3.36.5l.16.15c.54.55.54 1.4.54 3.12m-6.25-.87c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFolderPathConnect;
