import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCat = forwardRef<SVGSVGElement, IconProps>(function IconCat(
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
            d="M19.1 10.66c1.11 1.31.88 2.92.88 4.34 0 3.9-5.27 5-7.98 5s-7.98-1.1-7.98-5c0-1.42-.23-3.03.88-4.34m14.2 0q-.3-.34-.72-.66m.72.66c.7.4.88-1.1.88-1.6V7.2c0-1.63-1.12-2.19-2.07-2.19-.96 0-2.88 1.56-3.52 1.56-.76 0-.91-.15-2.39-.15s-1.63.15-2.4.15C8.98 6.56 7.06 5 6.1 5s-2.08.56-2.08 2.19v1.87c0 .5.18 2 .88 1.6m0 0q.3-.34.72-.66"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.83 16c0 .17-.37.31-.81.31s-.8-.14-.8-.31.35-.31.8-.31c.44 0 .8.14.8.31"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.5 13.6c0 .43-.22.78-.48.78-.27 0-.49-.35-.49-.79 0-.43.22-.78.49-.78.26 0 .48.35.48.78"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.5 13.6c0 .43-.22.78-.48.78-.27 0-.49-.35-.49-.79 0-.43.22-.78.49-.78.26 0 .48.35.48.78"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 15.47a11 11 0 0 0-3.39-1.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.39 17.97c-.49-.31-1.62-1.1-2.42-1.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 15.47a11 11 0 0 1 3.39-1.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.61 17.97c.49-.31 1.62-1.1 2.42-1.1"
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
            d="M9.6 5.56c.77 0 .92-.15 2.4-.15s1.63.15 2.4.15c.63 0 2.55-1.56 3.5-1.56s2.08.56 2.08 2.19v1.87c0 .5-.18 2-.88 1.6 1.11 1.31.88 2.92.88 4.34 0 3.9-5.27 5-7.98 5s-7.98-1.1-7.98-5c0-1.42-.23-3.03.88-4.34-.7.4-.88-1.1-.88-1.6V6.2C4.02 4.56 5.14 4 6.09 4c.96 0 2.88 1.56 3.52 1.56"
            fill="currentColor"
          />
          <path
            d="M9.02 11.06c-.5 0-.82.32-.98.59q-.26.43-.26.94 0 .52.26.95c.16.27.49.59.98.59.48 0 .81-.32.98-.59q.25-.43.25-.95t-.25-.94c-.17-.27-.5-.59-.98-.59"
            fill="currentColor"
          />
          <path
            d="M14.04 11.65c.16-.27.49-.59.98-.59.48 0 .81.32.98.59q.25.43.25.94 0 .52-.25.95c-.17.27-.5.59-.98.59-.5 0-.82-.32-.98-.59a2 2 0 0 1-.26-.95q0-.52.26-.94"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.18 14.08q.39-.15.84-.14.46 0 .84.14.2.06.4.25c.14.12.32.35.32.67s-.18.55-.31.67q-.21.19-.4.25-.4.15-.85.14-.46 0-.84-.14a1 1 0 0 1-.41-.25 1 1 0 0 1-.3-.67c0-.32.17-.55.3-.67q.2-.19.4-.25"
            fill="currentColor"
          />
          <path
            d="M17.86 13.38c0-.42.34-.76.75-.76q.47.02.98.15a13 13 0 0 1 2.82 1.07.75.75 0 1 1-.82 1.26 12 12 0 0 0-2.36-.87q-.45-.1-.62-.1a.75.75 0 0 1-.75-.76"
            fill="currentColor"
          />
          <path
            d="M17.97 15.13a.75.75 0 0 0 0 1.5q.32 0 .98.34.52.29.9.54l.13.09a.75.75 0 0 0 .81-1.26l-.1-.07a13 13 0 0 0-1.04-.63 4 4 0 0 0-1.68-.52"
            fill="currentColor"
          />
          <path
            d="M3.82 14.51c-.7.24-1.26.49-1.41.59a.75.75 0 0 1-.82-1.26 13 13 0 0 1 2.81-1.06c.34-.09.7-.15.99-.15a.75.75 0 0 1 0 1.5q-.17 0-.63.1t-.94.28"
            fill="currentColor"
          />
          <path
            d="m4.02 17.6.13-.09q.38-.25.9-.54.66-.34.98-.34a.75.75 0 0 0 0-1.5c-.6 0-1.22.27-1.68.51-.4.22-.79.47-1.03.63l-.11.07a.75.75 0 0 0 .81 1.26"
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
            d="M11.75 6.4c-1.48 0-1.63.16-2.4.16C8.73 6.56 6.8 5 5.86 5s-2.08.56-2.08 2.19v1.87c0 .5.18 2 .88 1.6-.83.98-.91 2.12-.9 3.22a15 15 0 0 0-2.4.96.75.75 0 0 0 .8 1.26 9 9 0 0 1 1.64-.66q.07.65.33 1.19l-.02.01c-.4.22-.79.47-1.03.63l-.11.07a.75.75 0 1 0 .81 1.26l.13-.09q.38-.25.9-.54l.23-.12C6.76 19.47 9.87 20 11.75 20s4.99-.53 6.72-2.15l.23.12q.52.29.9.54l.13.09a.75.75 0 0 0 .81-1.26l-.1-.07a13 13 0 0 0-1.04-.63l-.02-.01q.26-.54.33-1.2a13 13 0 0 1 1.63.67.75.75 0 0 0 .82-1.26 10 10 0 0 0-2.41-.96c.01-1.1-.07-2.24-.9-3.22.7.4.88-1.1.88-1.6V7.2c0-1.63-1.12-2.19-2.07-2.19-.96 0-2.88 1.56-3.52 1.56-.76 0-.91-.15-2.39-.15m-.68 9.2q.32-.1.68-.1t.68.1q.16.05.32.17c.11.09.25.25.25.48s-.14.39-.25.48q-.16.12-.32.17-.32.1-.68.1t-.68-.1q-.16-.05-.32-.17a.6.6 0 0 1-.25-.48c0-.23.14-.39.25-.48q.17-.12.32-.17m2.85-3.1c.14-.23.4-.5.81-.5.4 0 .67.27.81.5q.21.37.21.81t-.21.81c-.14.23-.4.5-.81.5a1 1 0 0 1-.81-.5 1.6 1.6 0 0 1-.21-.8q0-.46.21-.82m-5.96 0c.14-.23.4-.5.81-.5.4 0 .67.27.81.5q.21.37.21.81t-.21.81c-.14.23-.4.5-.81.5a1 1 0 0 1-.81-.5 1.6 1.6 0 0 1-.21-.8q0-.46.21-.82"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCat;
