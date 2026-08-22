import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTrophyStar = forwardRef<SVGSVGElement, IconProps>(
  function IconTrophyStar(
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
              d="M12 16c-5.76 0-6.78-5.74-6.96-10.3-.05-1.26-.08-1.9.4-2.48s1.04-.68 2.18-.87C8.75 2.15 10.22 2 12 2s3.25.16 4.38.35c1.14.19 1.7.28 2.18.87s.45 1.22.4 2.49C18.78 10.26 17.76 16 12 16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 16v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M15.5 22h-7l.34-1.7a1 1 0 0 1 .98-.8h4.36a1 1 0 0 1 .98.8z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m19 5 .95.32c.99.33 1.48.5 1.77.88.28.4.28.92.28 1.96v.07c0 .87 0 1.3-.2 1.65s-.6.56-1.34.98L17.5 12.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m5 5-.95.32c-.99.33-1.48.5-1.77.88C2 6.6 2 7.12 2 8.16v.07c0 .87 0 1.3.2 1.65s.6.56 1.34.98L6.5 12.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M11.15 6.02c.38-.68.57-1.02.85-1.02s.47.34.85 1.02l.1.18c.11.2.16.29.25.35q.1.1.4.14l.19.04c.74.17 1.1.25 1.2.53.08.29-.17.58-.67 1.17l-.13.15c-.15.17-.22.25-.25.36s-.02.21 0 .43l.02.2c.08.8.11 1.18-.12 1.36-.23.17-.57.01-1.26-.3l-.18-.09c-.2-.09-.3-.13-.4-.13s-.2.04-.4.13l-.18.09c-.69.31-1.03.47-1.26.3-.23-.18-.2-.57-.12-1.35l.02-.2c.02-.23.03-.34 0-.44a1 1 0 0 0-.25-.36l-.13-.15c-.5-.59-.75-.88-.66-1.17s.45-.36 1.2-.53l.18-.04q.3-.06.4-.14c.09-.06.14-.16.25-.35z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 22H6"
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
              d="M12 16c-5.76 0-6.78-5.74-6.96-10.3-.05-1.26-.08-1.9.4-2.48s1.04-.68 2.18-.87C8.75 2.15 10.22 2 12 2s3.25.16 4.38.35c1.14.19 1.7.28 2.18.87s.45 1.22.4 2.49C18.78 10.26 17.76 16 12 16"
              fill="currentColor"
            />
            <path
              d="m17.64 12.42 2.82-1.56c.75-.42 1.13-.63 1.33-.98S22 9.1 22 8.23v-.07c0-1.04 0-1.56-.28-1.96s-.78-.55-1.77-.88L19 5l-.02.08-.02.63c-.09 2.22-.38 4.73-1.32 6.71"
              fill="currentColor"
            />
            <path
              d="M5.04 5.7c.09 2.23.38 4.74 1.32 6.72l-2.82-1.56c-.75-.42-1.13-.63-1.33-.98S2 9.1 2 8.23v-.07c0-1.04 0-1.56.28-1.96s.78-.55 1.77-.88L5 5l.02.09z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.25 22c0-.41.34-.75.75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.46 21.25H8.54l.3-1.75a1 1 0 0 1 .98-.8h4.36a1 1 0 0 1 .98.8z"
              fill="currentColor"
            />
            <path
              d="M12 16q-.38 0-.75-.03v2.73h1.5v-2.73q-.36.03-.75.03"
              fill="currentColor"
            />
            <path
              d="M11.15 6.02c.38-.68.57-1.02.85-1.02s.47.34.85 1.02l.1.18c.11.2.16.29.25.35q.1.1.4.14l.19.04c.74.17 1.1.25 1.2.53.08.29-.17.58-.67 1.17l-.13.15c-.15.17-.22.25-.25.36s-.02.21 0 .43l.02.2c.08.8.11 1.18-.12 1.36-.23.17-.57.01-1.26-.3l-.18-.09c-.2-.09-.3-.13-.4-.13s-.2.04-.4.13l-.18.09c-.69.31-1.03.47-1.26.3-.23-.18-.2-.57-.12-1.35l.02-.2c.02-.23.03-.34 0-.44a1 1 0 0 0-.25-.36l-.13-.15c-.5-.59-.75-.88-.66-1.17s.45-.36 1.2-.53l.18-.04q.3-.06.4-.14c.09-.06.14-.16.25-.35z"
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
              d="M22 8.16v.07c0 .87 0 1.3-.2 1.65s-.6.56-1.34.98l-.8.44c.55-1.85.73-3.84.8-5.53v-.23l.01-.05c.65.23 1.02.4 1.25.71.28.4.28.92.28 1.96"
              fill="currentColor"
            />
            <path
              d="M2 8.16v.07c0 .87 0 1.3.2 1.65s.6.56 1.34.98l.8.44a23 23 0 0 1-.8-5.53v-.23l-.01-.05c-.65.23-1.02.4-1.25.71C2 6.6 2 7.12 2 8.16"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2c1.78 0 3.25.16 4.38.35 1.14.19 1.7.28 2.18.87s.45 1.22.4 2.49c-.17 4.34-1.11 9.78-6.21 10.26v3.53h1.43a1 1 0 0 1 .98.8l.19.95H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h2.65l.19-.95a1 1 0 0 1 .98-.8h1.43v-3.53c-5.1-.48-6.04-5.92-6.21-10.26-.05-1.27-.08-1.9.4-2.49s1.04-.68 2.18-.87C8.75 2.15 10.22 2 12 2m.95 4.2-.1-.18C12.47 5.34 12.28 5 12 5s-.47.34-.85 1.02l-.1.18c-.11.2-.16.29-.25.35q-.1.1-.4.14l-.19.04c-.74.17-1.1.25-1.2.53-.08.29.17.58.67 1.17l.13.15c.15.17.22.25.25.36s.02.21 0 .43l-.02.2c-.08.8-.11 1.18.12 1.36.23.17.57.01 1.26-.3l.18-.09c.2-.09.3-.13.4-.13s.2.04.4.13l.18.09c.69.31 1.03.47 1.26.3.23-.18.2-.57.12-1.35l-.02-.2c-.02-.23-.03-.34 0-.44q.03-.13.25-.36l.13-.15c.5-.59.75-.88.66-1.17s-.45-.36-1.2-.53l-.18-.04q-.3-.06-.4-.14a1 1 0 0 1-.25-.35"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTrophyStar;
