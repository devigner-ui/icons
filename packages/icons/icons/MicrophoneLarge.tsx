import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMicrophoneLarge = forwardRef<SVGSVGElement, IconProps>(
  function IconMicrophoneLarge(
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
              d="M6 8a6 6 0 1 1 12 0v5a6 6 0 0 1-12 0z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 6.5s.47-.5 2-.5 2 .5 2 .5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 9.5s.47-.5 2-.5 2 .5 2 .5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21 11v2a9 9 0 1 1-18 0v-2"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2a6.26 6.26 0 0 0-6.23 6.28v4.65A6.26 6.26 0 0 0 12 19.21a6.26 6.26 0 0 0 6.23-6.28V8.28A6.26 6.26 0 0 0 12 2M9.68 7.4a.7.7 0 0 1-.03-1l.5.48-.5-.48.01-.01.06-.06.13-.1q.15-.1.44-.23c.38-.15.93-.28 1.71-.28s1.33.13 1.71.28a2 2 0 0 1 .63.39v.01l-.48.47.49-.47a.7.7 0 0 1-.03 1 .7.7 0 0 1-.95 0v-.01l-.18-.1c-.19-.07-.56-.17-1.19-.17s-1 .1-1.2.18l-.16.09h-.01a.7.7 0 0 1-.95 0m0 2.78a.7.7 0 0 1-.03-.98l.5.47-.5-.48h.01l.06-.06.13-.1q.15-.12.44-.23c.38-.16.93-.29 1.71-.29s1.33.13 1.71.29a2 2 0 0 1 .63.38v.01l-.48.47.49-.46a.7.7 0 0 1-.03.98.7.7 0 0 1-.95 0l-.18-.1C13 10 12.63 9.9 12 9.9s-1 .1-1.2.18l-.16.09h-.01a.7.7 0 0 1-.95 0"
              fill="currentColor"
            />
            <path
              d="M9.65 9.2a.7.7 0 0 0 .03.98c.27.26.68.25.95 0l.18-.1c.19-.07.56-.17 1.19-.17s1 .1 1.2.18l.16.09h.01c.27.25.68.26.95 0a.7.7 0 0 0 .03-.99l-.5.47.5-.47h-.01l-.02-.03-.17-.13q-.15-.12-.44-.24A5 5 0 0 0 12 8.51c-.78 0-1.33.13-1.71.28a2 2 0 0 0-.63.4l.5.48z"
              fill="currentColor"
            />
            <path
              d="M9.65 6.4a.7.7 0 0 0 .03.99c.27.26.68.25.95 0l.18-.1c.19-.07.56-.17 1.19-.17s1 .1 1.2.18l.16.09h.01c.27.25.68.26.95 0a.7.7 0 0 0 .03-.99l-.5.47.5-.47-.01-.01-.2-.15Q14 6.12 13.72 6A5 5 0 0 0 12 5.72c-.78 0-1.33.13-1.71.28a2 2 0 0 0-.63.39zl.5.48z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.7 10.37a.7.7 0 0 1 .68.7v1.86A7.65 7.65 0 0 0 12 20.6c4.2 0 7.62-3.43 7.62-7.67v-1.86c0-.39.3-.7.69-.7s.69.31.69.7v1.86c0 5-4.03 9.07-9 9.07s-9-4.06-9-9.07v-1.86c0-.39.31-.7.7-.7"
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
              d="M3.7 10.37a.7.7 0 0 1 .68.7v1.86A7.65 7.65 0 0 0 12 20.6c4.2 0 7.62-3.43 7.62-7.67v-1.86c0-.39.3-.7.69-.7s.69.31.69.7v1.86c0 5-4.03 9.07-9 9.07s-9-4.06-9-9.07v-1.86c0-.39.31-.7.7-.7"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2a6.26 6.26 0 0 0-6.23 6.28v4.65A6.26 6.26 0 0 0 12 19.21a6.26 6.26 0 0 0 6.23-6.28V8.28A6.26 6.26 0 0 0 12 2M9.68 7.4a.7.7 0 0 1-.03-1l.5.48-.5-.48.01-.01.06-.06.13-.1q.15-.1.44-.23c.38-.15.93-.28 1.71-.28s1.33.13 1.71.28a2 2 0 0 1 .63.39v.01l-.48.47.49-.47a.7.7 0 0 1-.03 1 .7.7 0 0 1-.95 0v-.01l-.18-.1c-.19-.07-.56-.17-1.19-.17s-1 .1-1.2.18l-.16.09h-.01a.7.7 0 0 1-.95 0m0 2.78a.7.7 0 0 1-.03-.98l.5.47-.5-.48h.01l.06-.06.13-.1q.15-.12.44-.23c.38-.16.93-.29 1.71-.29s1.33.13 1.71.29a2 2 0 0 1 .63.38v.01l-.48.47.49-.46a.7.7 0 0 1-.03.98.7.7 0 0 1-.95 0l-.18-.1C13 10 12.63 9.9 12 9.9s-1 .1-1.2.18l-.16.09h-.01a.7.7 0 0 1-.95 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMicrophoneLarge;
