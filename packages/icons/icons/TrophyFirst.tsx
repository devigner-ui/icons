import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTrophyFirst = forwardRef<SVGSVGElement, IconProps>(
  function IconTrophyFirst(
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
            d="M10.63 2.03a30 30 0 0 1 5.75.32c1.14.19 1.7.28 2.18.87s.45 1.22.4 2.49c-.1 2.43-.43 5.19-1.6 7.24m-2.45 2.42q-1.2.62-2.91.63c-5.76 0-6.78-5.74-6.96-10.3-.05-1.26-.08-1.9.4-2.48.41-.49.88-.64 1.71-.79"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m11 8 1.5-1.5v4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m19 5 .95.32c.99.33 1.48.5 1.77.88.28.4.28.92.28 1.96v.07c0 .87 0 1.3-.2 1.65s-.6.56-1.34.98L17.5 12.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m5 5-.95.32c-.99.33-1.48.5-1.77.88C2 6.6 2 7.12 2 8.16v.07c0 .87 0 1.3.2 1.65s.6.56 1.34.98L6.5 12.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 22h-7l.34-1.7a1 1 0 0 1 .98-.8h4.36a1 1 0 0 1 .98.8z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 22H6"
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
              d="M12 16c-5.76 0-6.78-5.74-6.96-10.3-.05-1.26-.08-1.9.4-2.48s1.04-.68 2.18-.87C8.75 2.15 10.22 2 12 2s3.25.16 4.38.35c1.14.19 1.7.28 2.18.87s.45 1.22.4 2.49C18.78 10.26 17.76 16 12 16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m11 8 1.5-1.5v4"
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
              d="M12 15.6c-5.76 0-6.78-5.74-6.96-10.3-.05-1.26-.08-1.9.4-2.48s1.04-.68 2.18-.87c1.13-.2 2.6-.35 4.38-.35s3.25.16 4.38.35c1.14.19 1.7.28 2.18.87s.45 1.22.4 2.49C18.78 9.86 17.76 15.6 12 15.6"
              fill="currentColor"
            />
            <path
              d="m17.64 12.02 2.82-1.56c.75-.42 1.13-.63 1.33-.98S22 8.7 22 7.83v-.07c0-1.04 0-1.56-.28-1.96s-.78-.55-1.77-.88L19 4.6l-.02.08-.02.63c-.09 2.22-.38 4.73-1.32 6.71"
              fill="currentColor"
            />
            <path
              d="M5.04 5.3c.09 2.23.38 4.74 1.32 6.72l-2.82-1.56c-.75-.42-1.13-.63-1.33-.98S2 8.7 2 7.83v-.07c0-1.04 0-1.56.28-1.96s.78-.55 1.77-.88L5 4.6l.02.09z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.25 21.6c0-.41.34-.75.75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.46 20.85H8.54l.3-1.75a1 1 0 0 1 .98-.8h4.36a1 1 0 0 1 .98.8z"
              fill="currentColor"
            />
            <path
              d="M12 15.6q-.38 0-.75-.03v2.73h1.5v-2.73q-.36.03-.75.03"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.79 5.4c.28.12.46.4.46.7v4a.75.75 0 0 1-1.5 0V7.91l-.22.22a.75.75 0 1 1-1.06-1.06l1.5-1.5a.8.8 0 0 1 .82-.16"
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
              d="M22 7.76v.07c0 .87 0 1.3-.2 1.65s-.6.56-1.34.98l-.8.44c.55-1.85.73-3.84.8-5.53v-.23l.01-.05c.65.23 1.02.4 1.25.71.28.4.28.92.28 1.96"
              fill="currentColor"
            />
            <path
              d="M2 7.76v.07c0 .87 0 1.3.2 1.65s.6.56 1.34.98l.8.44a23 23 0 0 1-.8-5.53v-.23l-.01-.05c-.65.23-1.02.4-1.25.71C2 6.2 2 6.72 2 7.76"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.38 1.95c-1.13-.2-2.6-.35-4.38-.35s-3.25.16-4.38.35c-1.14.19-1.7.28-2.18.87s-.45 1.22-.4 2.49c.17 4.34 1.11 9.78 6.21 10.26v3.53H9.82a1 1 0 0 0-.98.8l-.19.95H6a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-2.65l-.19-.95a1 1 0 0 0-.98-.8h-1.43v-3.53c5.1-.48 6.04-5.92 6.21-10.26.05-1.27.08-1.9-.4-2.49-.47-.59-1.04-.68-2.18-.87m-3.6 3.46c.29.11.47.39.47.69v4a.75.75 0 0 1-1.5 0V7.91l-.22.22a.75.75 0 1 1-1.06-1.06l1.5-1.5a.8.8 0 0 1 .82-.16"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTrophyFirst;
