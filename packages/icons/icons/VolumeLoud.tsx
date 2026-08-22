import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVolumeLoud = forwardRef<SVGSVGElement, IconProps>(
  function IconVolumeLoud(
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
              d="M1.53 10.97c.08-1.2.12-1.81.43-2.4.28-.52.83-1.04 1.38-1.3C3.94 7 4.63 7 6 7c.51 0 .77 0 1.02-.04a3 3 0 0 0 .7-.22c.24-.1.45-.24.88-.52l.22-.14c2.54-1.68 3.81-2.52 4.88-2.16q.3.11.58.3c.92.65 1 2.16 1.13 5.17.05 1.12.09 2.08.09 2.61s-.04 1.49-.09 2.6c-.14 3.02-.2 4.53-1.13 5.18q-.27.18-.58.3c-1.07.36-2.34-.48-4.88-2.16l-.22-.14c-.43-.28-.64-.42-.87-.52a3 3 0 0 0-.71-.22C6.77 17 6.52 17 6 17c-1.37 0-2.06 0-2.66-.28a3.2 3.2 0 0 1-1.38-1.3c-.31-.58-.35-1.18-.43-2.4a17 17 0 0 1 0-2.05"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20 6s1.5 1.8 1.5 6-1.5 6-1.5 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 9s.5.9.5 3-.5 3-.5 3"
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
              d="M2 11.72c.04-1.85.06-2.77.67-3.56.11-.14.28-.31.41-.43.76-.63 1.75-.63 3.74-.63.7 0 1.06 0 1.4-.1l.2-.06a6 6 0 0 0 1.23-.75c2.34-1.64 3.5-2.46 4.49-2.1q.29.1.53.28c.85.64.91 2.12 1.04 5.08.05 1.1.08 2.03.08 2.55s-.03 1.46-.08 2.55c-.13 2.96-.2 4.44-1.04 5.08q-.24.18-.53.29c-.98.35-2.15-.47-4.5-2.11A6 6 0 0 0 8.23 17c-.34-.1-.7-.1-1.4-.1-1.99 0-2.98 0-3.74-.63-.13-.12-.3-.29-.4-.43-.62-.8-.64-1.71-.68-3.56z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.49 5.55c.3-.26.73-.22.97.1l-.53.47.53-.47.01.01a3 3 0 0 1 .27.42q.24.39.52 1.17c.38 1.04.74 2.6.74 4.75s-.36 3.71-.74 4.75a8 8 0 0 1-.79 1.59v.01l-.54-.47.53.47a.66.66 0 0 1-.97.1.8.8 0 0 1-.1-1.03h.01l.03-.05.13-.2q.17-.3.42-.95c.31-.87.64-2.25.64-4.22s-.33-3.35-.64-4.22a6 6 0 0 0-.58-1.2"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.76 8.42c.33-.2.75-.07.93.28l-.6.36.6-.36.01.01.01.02.1.23q.08.2.18.61c.13.54.25 1.34.25 2.43s-.12 1.89-.25 2.43a5 5 0 0 1-.28.84v.02h-.01l-.6-.35.6.36a.67.67 0 0 1-.94.28.76.76 0 0 1-.28-.99q.03-.03.04-.1.06-.12.13-.43c.1-.42.21-1.09.21-2.06a9 9 0 0 0-.34-2.5l-.03-.08V9.4a.76.76 0 0 1 .27-1"
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
              d="M2 11.72c.04-1.85.06-2.77.67-3.56.11-.14.28-.31.41-.43.76-.63 1.75-.63 3.74-.63.7 0 1.06 0 1.4-.1l.2-.06a6 6 0 0 0 1.23-.75c2.34-1.64 3.5-2.46 4.49-2.1q.29.1.53.28c.85.64.91 2.12 1.04 5.08.05 1.1.08 2.03.08 2.55s-.03 1.46-.08 2.55c-.13 2.96-.2 4.44-1.04 5.08q-.24.18-.53.29c-.98.35-2.15-.47-4.5-2.11A6 6 0 0 0 8.23 17c-.34-.1-.7-.1-1.4-.1-1.99 0-2.98 0-3.74-.63-.13-.12-.3-.29-.4-.43-.62-.8-.64-1.71-.68-3.56z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.49 5.55c.3-.26.73-.22.97.1l-.53.47.53-.47.01.01a3 3 0 0 1 .27.42q.24.39.52 1.17c.38 1.04.74 2.6.74 4.75s-.36 3.7-.74 4.75a8 8 0 0 1-.79 1.59v.01l-.54-.47.53.47a.66.66 0 0 1-.97.1.77.77 0 0 1-.09-1.04l.03-.04.13-.2q.16-.3.42-.95c.31-.87.64-2.25.64-4.22s-.33-3.35-.64-4.22a6 6 0 0 0-.58-1.2"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.76 8.42c.33-.2.75-.07.93.28l-.6.36.6-.36.01.01.01.02.1.23q.08.2.18.61c.13.54.25 1.34.25 2.43s-.12 1.89-.25 2.43a5 5 0 0 1-.28.84v.02h-.01l-.6-.35.6.36a.67.67 0 0 1-.94.28.76.76 0 0 1-.28-.99q.03-.03.04-.1.06-.12.13-.43c.1-.42.21-1.09.21-2.06a9 9 0 0 0-.34-2.5l-.03-.08V9.4a.76.76 0 0 1 .27-1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVolumeLoud;
