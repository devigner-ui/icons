import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconNotebookBookmark = forwardRef<SVGSVGElement, IconProps>(
  function IconNotebookBookmark(
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
              d="m20.08 3.02.03.75zm-3.58.47-.22-.72zM13.67 4.8l-.37-.65zM3.98 3.08l-.04.74zm3.02.4.2-.72zm3.28 1.4-.35.66zm3.35 15.19.35.66zM17 18.63l-.2-.72zm2.99-.4.04.74zm-9.62 1.84-.35.66zM7 18.63l.2-.72zm-2.99-.4-.04.74zm-1.26-2.09V5h-1.5v11.14zm20 0V4.94h-1.5v11.2zm-2.7-13.87a16 16 0 0 0-3.77.5l.44 1.44c.94-.29 2.27-.4 3.39-.44zm-3.77.5c-.99.3-2.1.88-2.98 1.38l.75 1.3c.85-.49 1.84-1 2.67-1.24zM3.94 3.82c.96.06 2.06.18 2.87.4l.38-1.46a18 18 0 0 0-3.16-.43zm2.87.4c.96.25 2.14.8 3.12 1.32l.7-1.33c-1-.52-2.3-1.15-3.44-1.45zm7.17 16.51c1-.53 2.22-1.1 3.21-1.37l-.38-1.45c-1.17.3-2.53.96-3.54 1.5zm3.21-1.37c.8-.21 1.88-.33 2.84-.39l-.1-1.5c-.97.07-2.17.19-3.12.44zm-6.46.05a17 17 0 0 0-3.54-1.5l-.38 1.45c1 .26 2.22.84 3.21 1.37zm-3.54-1.5c-.95-.25-2.15-.37-3.13-.44l-.1 1.5c.97.06 2.05.18 2.85.39zm14.06-1.77c0 .69-.57 1.29-1.31 1.33l.1 1.5a2.87 2.87 0 0 0 2.71-2.83zm1.5-11.2a2.63 2.63 0 0 0-2.7-2.67l.06 1.5c.61-.02 1.14.48 1.14 1.16zm-21.5 11.2a2.87 2.87 0 0 0 2.72 2.83l.1-1.5a1.37 1.37 0 0 1-1.32-1.33zm12.02 3.27c-.79.42-1.75.42-2.54 0l-.71 1.32a4.2 4.2 0 0 0 3.96 0zm.03-15.26c-.82.48-1.84.5-2.67.06l-.7 1.33c1.3.68 2.86.64 4.12-.09zM2.75 5c0-.7.55-1.21 1.19-1.18l.09-1.5A2.64 2.64 0 0 0 1.25 5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 5.85V21"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m5 9 4 1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m5 13 4 1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m19 13-4 1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M19 5.5v4.01c0 .28 0 .41-.1.47-.09.06-.22 0-.48-.13l-1.24-.59q-.12-.06-.18-.06-.07 0-.18.06l-1.24.6c-.26.11-.39.18-.49.12s-.09-.2-.09-.47V6.95"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.25 4.48v3.06c0 .1 0 .27.02.4.03.17.11.5.45.69.32.18.63.11.78.07q.2-.07.38-.16L17 8.01l1.12.53q.18.09.38.16c.15.04.46.11.79-.07.33-.2.41-.52.44-.69.02-.13.02-.3.02-.4v-4.5l.33-.02A1.9 1.9 0 0 1 22 4.93v11.21c0 1.12-.9 2.01-2.01 2.08-.97.06-2.11.18-2.99.41-1.08.29-1.99 1.07-3.37 1.44-.63.17-1.33.26-1.63.32V5.17c.32-.07 1.38-.2 1.67-.37zm5.48 8.34c.1.4-.15.8-.55.9l-4 1a.75.75 0 0 1-.36-1.45l4-1c.4-.1.8.15.9.55"
              fill="currentColor"
            />
            <path
              d="M18.25 3.15q-.95.1-1.75.34-.37.1-.75.27v3.18l.75-.36c.06-.03.26-.13.5-.13h.14q.27.07.35.13h.01l.75.36z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 5.21c-.33-.06-1.06-.16-1.72-.33C8.94 4.52 8.05 3.76 7 3.48c-.89-.23-2.04-.34-3.02-.4A1.9 1.9 0 0 0 2 5v11.14c0 1.11.9 2.01 2.01 2.08.97.06 2.11.18 2.99.41.49.13 1.22.44 1.87.73q1.5.68 3.13 1.03z"
              fill="currentColor"
            />
            <path
              d="M4.27 12.82c.1-.4.51-.65.91-.55l4 1a.75.75 0 1 1-.36 1.46l-4-1a.75.75 0 0 1-.55-.91"
              fill="currentColor"
            />
            <path
              d="M5.18 8.27a.75.75 0 1 0-.36 1.46l4 1a.75.75 0 0 0 .36-1.46z"
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
              d="M14.25 4.48v3.06c0 .1 0 .27.02.4.03.17.11.5.45.69.32.18.63.11.78.07q.2-.07.38-.16L17 8.01l1.12.53q.18.09.38.16c.15.04.46.11.79-.07.33-.2.41-.52.44-.69.02-.13.02-.3.02-.4v-4.5l.33-.02A1.9 1.9 0 0 1 22 4.93v11.21c0 1.12-.9 2.01-2.01 2.08-.97.06-2.11.18-2.99.41-1.08.29-2.37.9-3.37 1.44q-.43.23-.88.32V5.17q.48-.11.92-.37zm5.48 8.34c.1.4-.15.8-.55.9l-4 1a.75.75 0 1 1-.36-1.45l4-1c.4-.1.8.15.9.55"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.25 5.21a3 3 0 0 1-.97-.33A17 17 0 0 0 7 3.48c-.89-.23-2.04-.34-3.02-.4A1.9 1.9 0 0 0 2 5v11.14c0 1.12.9 2.01 2.01 2.08.97.06 2.11.18 2.99.41 1.08.29 2.37.9 3.37 1.44q.43.23.88.32zm-6.98 3.6c.1-.4.51-.64.91-.54l4 1a.75.75 0 1 1-.36 1.46l-4-1a.75.75 0 0 1-.55-.91m.91 3.46a.75.75 0 1 0-.36 1.46l4 1a.75.75 0 0 0 .36-1.46z"
              fill="currentColor"
            />
            <path
              d="M18.25 3.15q-.95.1-1.75.34-.37.1-.75.27v3.18l.75-.36c.06-.03.26-.13.5-.13h.14q.27.07.35.13h.01l.75.36z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconNotebookBookmark;
