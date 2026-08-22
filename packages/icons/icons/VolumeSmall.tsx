import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVolumeSmall = forwardRef<SVGSVGElement, IconProps>(
  function IconVolumeSmall(
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
              d="M3 11.72c.04-1.85.06-2.77.7-3.56.12-.14.29-.31.43-.43.79-.63 1.82-.63 3.9-.63.74 0 1.11 0 1.46-.1q.12-.02.22-.06c.35-.12.66-.33 1.27-.75 2.45-1.64 3.67-2.46 4.7-2.1q.29.1.55.28c.88.64.95 2.12 1.09 5.08.05 1.1.08 2.03.08 2.55s-.03 1.46-.08 2.55c-.14 2.96-.2 4.44-1.1 5.08a2 2 0 0 1-.55.29c-1.02.35-2.24-.47-4.69-2.11A6 6 0 0 0 9.5 17c-.35-.1-.72-.1-1.46-.1-2.08 0-3.11 0-3.9-.63a3 3 0 0 1-.43-.43c-.64-.8-.66-1.71-.7-3.56z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.45 8.42c.35-.2.79-.07.98.28l-.63.36.63-.36v.01l.02.02.1.23q.08.2.19.61A10 10 0 0 1 21 12a10 10 0 0 1-.26 2.43 5 5 0 0 1-.3.84v.02h-.01l-.63-.35.63.36a.7.7 0 0 1-.98.28.74.74 0 0 1-.28-.99l.04-.1q.05-.12.13-.43c.1-.42.22-1.09.22-2.06a9 9 0 0 0-.35-2.5l-.04-.08V9.4a.74.74 0 0 1 .28-1"
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
              d="M3 11.72c.04-1.85.06-2.77.7-3.56.12-.14.29-.31.43-.43.79-.63 1.82-.63 3.9-.63.74 0 1.11 0 1.46-.1q.12-.02.22-.06c.35-.12.66-.33 1.27-.75 2.45-1.64 3.67-2.46 4.7-2.1q.29.1.55.28c.88.64.95 2.12 1.09 5.08.05 1.1.08 2.03.08 2.55s-.03 1.46-.08 2.55c-.14 2.96-.2 4.44-1.1 5.08a2 2 0 0 1-.55.29c-1.02.35-2.24-.47-4.69-2.11A6 6 0 0 0 9.5 17c-.35-.1-.72-.1-1.46-.1-2.08 0-3.11 0-3.9-.63a3 3 0 0 1-.43-.43c-.64-.8-.66-1.71-.7-3.56z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.45 8.42c.35-.2.79-.07.98.28l-.63.36.63-.36v.01l.02.02.1.23q.08.2.19.61A10 10 0 0 1 21 12a10 10 0 0 1-.26 2.43 5 5 0 0 1-.3.84v.02h-.01l-.63-.35.63.36a.7.7 0 0 1-.98.28.74.74 0 0 1-.28-.99l.04-.1q.05-.12.13-.43c.1-.42.22-1.09.22-2.06a9 9 0 0 0-.35-2.5l-.04-.08V9.4a.74.74 0 0 1 .28-1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVolumeSmall;
