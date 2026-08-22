import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCpuSetting = forwardRef<SVGSVGElement, IconProps>(
  function IconCpuSetting(
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
              d="M20.67 9.6c0-4-1.6-5.6-5.6-5.6h-4.8c-4 0-5.6 1.6-5.6 5.6v4.8c0 4 1.6 5.6 5.6 5.6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.02 8c-.55-.7-1.47-1-2.85-1h-3c-2.5 0-3.5 1-3.5 3.5v3c0 1.38.3 2.3.99 2.85"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.68 4V2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 4V2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.67 4V2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.67 8h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.68 20v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.67 8h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.67 12h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.67 16h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.38 18.59a1.59 1.59 0 1 0 0-3.18 1.59 1.59 0 0 0 0 3.18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.08 17.46v-.93a1 1 0 0 1 1-1c.96 0 1.35-.68.87-1.51a1 1 0 0 1 .37-1.37l.91-.53a.9.9 0 0 1 1.21.32l.06.1c.48.83 1.26.83 1.74 0l.06-.1a.9.9 0 0 1 1.21-.32l.91.53a1 1 0 0 1 .37 1.37c-.48.83-.09 1.51.87 1.51a1 1 0 0 1 1 1v.93a1 1 0 0 1-1 1c-.96 0-1.35.68-.87 1.51a1 1 0 0 1-.37 1.37l-.91.53a.9.9 0 0 1-1.21-.32l-.06-.1c-.48-.83-1.26-.83-1.74 0l-.06.1a.9.9 0 0 1-1.21.32l-.91-.53a1 1 0 0 1-.37-1.37c.48-.83.09-1.51-.87-1.51a1 1 0 0 1-1-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M20.67 9v2.92l-.78-.45a1.64 1.64 0 0 0-2.24.59l-.06.11c-.11.19-.2.24-.21.25-.02-.01-.12-.06-.23-.26l-.06-.1a1.6 1.6 0 0 0-.99-.75 1.6 1.6 0 0 0-1.24.16l-.91.53q-.63.36-.82 1.06t.17 1.34a1 1 0 0 1 .11.31c-.01.01-.11.07-.33.07-.97 0-1.76.79-1.76 1.75v.94c0 .96.79 1.75 1.76 1.75.22 0 .32.06.32.07.01.01.01.13-.1.31q-.11.2-.16.4H9.67a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5"
              fill="currentColor"
            />
            <path
              d="M17.93 9.74v1.97q-.16.15-.28.35l-.06.11c-.11.19-.2.24-.21.25-.02-.01-.12-.06-.23-.26l-.06-.1a1.6 1.6 0 0 0-.99-.75 1.6 1.6 0 0 0-1.24.16l-.91.53q-.63.36-.82 1.06t.17 1.34a1 1 0 0 1 .11.31c-.01.01-.11.07-.33.07-.97 0-1.76.79-1.76 1.75v.73h-.91a3 3 0 0 1-3-3V9.74a3 3 0 0 1 3-3h4.52a3 3 0 0 1 3 3"
              fill="currentColor"
            />
            <path
              d="M9.73 2.75V4h-.06q-.75 0-1.44.21V2.75a.75.75 0 1 1 1.5 0"
              fill="currentColor"
            />
            <path
              d="M13.42 2.75V4h-1.5V2.75c0-.41.34-.75.75-.75s.75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M17.12 2.75v1.46A5 5 0 0 0 15.67 4h-.05V2.75c0-.41.34-.75.75-.75s.75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M22.67 8.3c0 .42-.33.75-.75.75h-1.25V9q0-.76-.21-1.45h1.46c.42 0 .75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M9.73 20v1.25a.75.75 0 1 1-1.5 0v-1.46q.69.21 1.44.21z"
              fill="currentColor"
            />
            <path
              d="M4.88 7.55q-.21.7-.21 1.45v.05H3.42a.75.75 0 1 1 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M4.67 11.25v1.5H3.42a.75.75 0 1 1 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M4.88 16.45H3.42a.75.75 0 1 1 0-1.5h1.25V15q0 .75.21 1.45"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.66 15.53c-.68 0-1.07-.34-1.07-.84q0-.3.2-.67a1 1 0 0 0-.37-1.37l-.91-.53a.9.9 0 0 0-1.21.32l-.06.1c-.48.83-1.26.83-1.74 0l-.06-.1a.87.87 0 0 0-1.2-.32l-.92.53a1 1 0 0 0-.51.87q0 .26.14.5.21.37.21.67c0 .5-.4.84-1.08.84-.55 0-1.01.45-1.01 1v.94c0 .55.46 1 1.01 1 .68 0 1.08.34 1.08.84q0 .3-.21.67a1 1 0 0 0 .37 1.37l.92.53c.41.25.96.1 1.2-.32l.06-.1c.48-.83 1.26-.83 1.74 0l.06.1c.25.42.79.57 1.21.32l.91-.53a1 1 0 0 0 .51-.87q0-.26-.14-.5-.2-.36-.2-.67c0-.5.39-.84 1.07-.84a1 1 0 0 0 1.01-1v-.94a1 1 0 0 0-1.01-1m-4.29 3.19a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44"
              fill="currentColor"
            />
            <path
              d="M19.09 17a1.72 1.72 0 1 1-3.44 0 1.72 1.72 0 0 1 3.44 0"
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
            <path d="M20.58 8.08" fill="currentColor" />
            <path
              d="M22.67 8.3c0 .42-.33.75-.75.75h-1.25v1.84c0 .33-.36.54-.65.37a1.8 1.8 0 0 0-1.41-.2c-.3.07-.68-.13-.68-.44v-.88a3 3 0 0 0-3-3h-4.52a3 3 0 0 0-3 3v4.52a3 3 0 0 0 3 3h.45c.12 0 .21.1.21.21 0 .96.7 1.77 1.62 1.96.17.03.29.24.23.4a.2.2 0 0 1-.22.17H9.73v1.25a.75.75 0 1 1-1.5 0v-1.47a5 5 0 0 1-3.33-3.33H3.42a.75.75 0 1 1 0-1.5h1.25v-2.2H3.42a.75.75 0 1 1 0-1.5h1.25v-2.2H3.42a.75.75 0 1 1 0-1.5H4.9a5 5 0 0 1 3.33-3.33V2.75a.75.75 0 1 1 1.5 0V4h2.19V2.75c0-.41.34-.75.75-.75s.75.34.75.75V4h2.2V2.75c0-.41.34-.75.75-.75s.75.34.75.75v1.48a5 5 0 0 1 3.32 3.32h1.48c.42 0 .75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M21.66 15.53c-.68 0-1.07-.34-1.07-.84q0-.3.2-.67a1 1 0 0 0-.37-1.37l-.91-.53a.9.9 0 0 0-1.21.32l-.06.1c-.48.83-1.26.83-1.74 0l-.06-.1a.87.87 0 0 0-1.2-.32l-.92.53a1 1 0 0 0-.51.87q0 .26.14.5.21.37.21.67c0 .5-.4.84-1.08.84-.55 0-1.01.45-1.01 1v.94c0 .55.46 1 1.01 1 .68 0 1.08.34 1.08.84q0 .3-.21.67a1 1 0 0 0 .37 1.37l.92.53c.41.25.96.1 1.2-.32l.06-.1c.48-.83 1.26-.83 1.74 0l.06.1c.25.42.79.57 1.21.32l.91-.53a1 1 0 0 0 .51-.87q0-.26-.14-.5-.2-.36-.2-.67c0-.5.39-.84 1.07-.84a1 1 0 0 0 1.01-1v-.94a1 1 0 0 0-1.01-1m-4.29 3.19a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44"
              fill="currentColor"
            />
            <path
              d="M16.92 10.02v.57c0 .34-.45.55-.77.47-.5-.13-1-.06-1.41.19l-.91.53a2 2 0 0 0-1.01 1.92c.03.39-.24.85-.6 1.02-.47.23-.85.64-1.03 1.14-.08.22-.27.39-.5.39a2.26 2.26 0 0 1-2.27-2.27v-3.96a2.26 2.26 0 0 1 2.27-2.27h3.96a2.26 2.26 0 0 1 2.27 2.27"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCpuSetting;
