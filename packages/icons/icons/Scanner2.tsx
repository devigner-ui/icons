import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconScanner2 = forwardRef<SVGSVGElement, IconProps>(function IconScanner2(
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
            d="M6 13s1.8-2 6-2 6 2 6 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 14c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 22c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 2C6.23 2 4.34 2 3.17 3.17S2 6.23 2 10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14 2c3.77 0 5.66 0 6.83 1.17S22 6.23 22 10"
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
            d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46"
            fill="currentColor"
          />
          <path
            d="M7.36 12.61a.75.75 0 0 0 1.28.78l.03-.05.14-.17q.18-.24.6-.57a4 4 0 0 1 2.59-.85 4.2 4.2 0 0 1 3.33 1.6l.03.04a.75.75 0 0 0 1.28-.78v-.01l-.08-.12-.22-.27A5.7 5.7 0 0 0 12 10.25a5.7 5.7 0 0 0-4.56 2.23zl.64.4z"
            fill="currentColor"
          />
          <path
            d="M19 13.25c.41 0 .75.34.75.75v.05c0 1.14 0 2.06-.1 2.8-.1.76-.32 1.42-.85 1.95s-1.2.75-1.96.85c-.73.1-1.65.1-2.79.1H14a.75.75 0 0 1 0-1.5c1.2 0 2.02 0 2.64-.08.6-.08.9-.23 1.1-.43s.34-.5.43-1.1c.08-.62.08-1.44.08-2.64 0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            d="M5.75 14a.75.75 0 0 0-1.5 0v.05c0 1.14 0 2.06.1 2.8.1.76.32 1.42.85 1.95s1.2.75 1.96.85c.73.1 1.65.1 2.79.1H10a.75.75 0 0 0 0-1.5c-1.2 0-2.02 0-2.64-.08-.6-.08-.9-.23-1.1-.43s-.34-.5-.43-1.1A22 22 0 0 1 5.75 14"
            fill="currentColor"
          />
          <path
            d="M9.95 4.25H10a.75.75 0 0 1 0 1.5c-1.2 0-2.02 0-2.64.09-.6.08-.9.22-1.1.42s-.34.5-.43 1.1A22 22 0 0 0 5.75 10a.75.75 0 0 1-1.5 0v-.05c0-1.14 0-2.06.1-2.8.1-.76.32-1.42.85-1.95s1.2-.75 1.96-.85c.73-.1 1.65-.1 2.79-.1"
            fill="currentColor"
          />
          <path
            d="M14 5.75c1.2 0 2.02 0 2.64.09.6.08.9.22 1.1.42s.34.5.43 1.1c.08.62.08 1.44.08 2.64a.75.75 0 0 0 1.5 0v-.05c0-1.14 0-2.06-.1-2.8a3.2 3.2 0 0 0-.85-1.95 3.2 3.2 0 0 0-1.96-.85c-.73-.1-1.65-.1-2.79-.1H14a.75.75 0 0 0 0 1.5"
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
            d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46m3.9 9.15a.75.75 0 0 0 1.28.78l.03-.05.14-.17q.18-.24.6-.57a4 4 0 0 1 2.59-.85 4.2 4.2 0 0 1 3.33 1.6l.03.04a.75.75 0 0 0 1.28-.78l-.64.4.64-.4v-.01l-.08-.12-.22-.27A5.7 5.7 0 0 0 12 10.25a5.7 5.7 0 0 0-4.56 2.23zl.64.4zm11.64.64c.41 0 .75.34.75.75v.05c0 1.14 0 2.06-.1 2.8-.1.76-.32 1.42-.85 1.95s-1.2.75-1.96.85c-.73.1-1.65.1-2.79.1H14a.75.75 0 0 1 0-1.5c1.2 0 2.02 0 2.64-.08.6-.08.9-.23 1.1-.43s.34-.5.43-1.1c.08-.62.08-1.44.08-2.64 0-.41.34-.75.75-.75M5.75 14a.75.75 0 0 0-1.5 0v.05c0 1.14 0 2.06.1 2.8.1.76.32 1.42.85 1.95s1.2.75 1.96.85c.73.1 1.65.1 2.79.1H10a.75.75 0 0 0 0-1.5c-1.2 0-2.02 0-2.64-.08-.6-.08-.9-.23-1.1-.43s-.34-.5-.43-1.1A22 22 0 0 1 5.75 14m4.2-9.75H10a.75.75 0 0 1 0 1.5c-1.2 0-2.02 0-2.64.09-.6.08-.9.22-1.1.42s-.34.5-.43 1.1A22 22 0 0 0 5.75 10a.75.75 0 0 1-1.5 0v-.05c0-1.14 0-2.06.1-2.8.1-.76.32-1.42.85-1.95s1.2-.75 1.96-.85c.73-.1 1.65-.1 2.79-.1M14 5.75c1.2 0 2.02 0 2.64.09.6.08.9.22 1.1.42s.34.5.43 1.1c.08.62.08 1.44.08 2.64a.75.75 0 0 0 1.5 0v-.05c0-1.14 0-2.06-.1-2.8a3.2 3.2 0 0 0-.85-1.95 3.2 3.2 0 0 0-1.96-.85c-.73-.1-1.65-.1-2.79-.1H14a.75.75 0 0 0 0 1.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconScanner2;
