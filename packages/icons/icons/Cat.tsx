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
            d="M19.98 8.56h.75v0zm-15.96 0h-.75zm15.08 1.6-.57.48.08.1.12.07zm-.27-1.26a.75.75 0 0 0-.89 1.2zM4.02 14.5h-.75v0zm2.04-4.4a.75.75 0 1 0-.89-1.2zM12 5.16c-.77 0-1.21.04-1.56.08-.34.04-.5.07-.83.07v1.5c.44 0 .72-.04 1.02-.08A10 10 0 0 1 12 6.66zm0 1.5c.7 0 1.08.03 1.37.07s.58.08 1.02.08v-1.5c-.32 0-.5-.03-.83-.07-.35-.04-.79-.08-1.56-.08zm2.4.15q.31-.02.55-.11l.47-.21.98-.56q.51-.3.95-.5.45-.2.56-.18v-1.5c-.41 0-.84.16-1.18.31-.36.16-.73.38-1.07.57q-.53.31-.93.52l-.3.14q-.12.03-.04.02zm3.5-1.56q.54 0 .91.3c.21.18.42.51.42 1.14h1.5c0-1-.35-1.77-.94-2.27a3 3 0 0 0-1.88-.67zm1.33 1.44v1.87h1.5V6.7zM9.61 5.3q.09.01-.04-.02l-.3-.14q-.4-.2-.93-.52-.52-.3-1.07-.57a3 3 0 0 0-1.18-.31v1.5q.1-.01.56.18.43.2.95.5.5.3.98.56.23.12.47.2.22.1.56.12zM6.09 3.75c-.6 0-1.32.18-1.88.67-.59.5-.94 1.27-.94 2.27h1.5c0-.63.2-.96.42-1.14.23-.2.56-.3.9-.3zM3.27 6.69v1.87h1.5V6.7zM12 20.25c1.43 0 3.54-.28 5.32-1.1s3.41-2.28 3.41-4.65h-1.5c0 1.53-1 2.58-2.54 3.28-1.53.7-3.4.97-4.69.97zm7.67-10.57a5 5 0 0 0-.84-.78l-.89 1.2q.36.27.59.54zm-.44-1.12c0 .2-.04.61-.14.9-.05.15-.08.15-.03.1a.4.4 0 0 1 .41-.05l-.74 1.3q.27.17.65.17.38-.04.62-.25c.29-.23.43-.56.51-.8.17-.48.22-1.07.22-1.36zM12 18.75c-1.28 0-3.16-.26-4.7-.97-1.52-.7-2.53-1.75-2.53-3.28h-1.5c0 2.37 1.63 3.83 3.4 4.65 1.79.82 3.9 1.1 5.33 1.1zM4.77 14.5c0-.79-.06-1.44.02-2.13.07-.64.25-1.22.68-1.73l-1.14-.96c-.68.8-.94 1.69-1.03 2.53-.09.8-.03 1.66-.03 2.29zm.7-3.86q.24-.27.59-.54l-.89-1.2q-.49.36-.84.78zm-2.2-2.07c0 .29.05.88.22 1.37.08.23.22.56.5.8q.25.2.63.24.38-.01.66-.17l-.75-1.3s.06-.04.17-.03q.17.02.24.08c.05.05.02.05-.03-.1-.1-.29-.14-.7-.14-.9z"
            fill="currentColor"
          />
          <path
            d="M12.83 15.5c0 .17-.37.31-.81.31s-.8-.14-.8-.31.35-.31.8-.31.8.14.8.31Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M15.5 13.1c0 .43-.22.78-.48.78-.27 0-.49-.35-.49-.79 0-.43.22-.78.49-.78.26 0 .48.35.48.78Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M9.5 13.1c0 .43-.22.78-.48.78-.27 0-.49-.35-.49-.79 0-.43.22-.78.49-.78.26 0 .48.35.48.78Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M22 14.97a11 11 0 0 0-3.39-1.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M20.39 17.47c-.49-.31-1.62-1.1-2.42-1.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M2 14.97a11 11 0 0 1 3.39-1.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M3.61 17.47c.49-.31 1.62-1.1 2.42-1.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M19.1 10.16c1.11 1.31.88 2.92.88 4.34 0 3.9-5.27 5-7.98 5s-7.98-1.1-7.98-5c0-1.42-.23-3.03.88-4.34m14.2 0q-.3-.34-.72-.66m.72.66c.7.4.88-1.1.88-1.6V6.7c0-1.63-1.12-2.19-2.07-2.19-.96 0-2.88 1.56-3.52 1.56-.76 0-.91-.15-2.39-.15s-1.63.15-2.4.15C8.98 6.06 7.06 4.5 6.1 4.5s-2.08.56-2.08 2.19v1.87c0 .5.18 2 .88 1.6m0 0q.3-.34.72-.66"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.83 15.5c0 .17-.37.31-.81.31s-.8-.14-.8-.31.35-.31.8-.31c.44 0 .8.14.8.31"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.5 13.1c0 .43-.22.78-.48.78-.27 0-.49-.35-.49-.79 0-.43.22-.78.49-.78.26 0 .48.35.48.78"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.5 13.1c0 .43-.22.78-.48.78-.27 0-.49-.35-.49-.79 0-.43.22-.78.49-.78.26 0 .48.35.48.78"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 14.97a11 11 0 0 0-3.39-1.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.39 17.47c-.49-.31-1.62-1.1-2.42-1.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 14.97a11 11 0 0 1 3.39-1.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.61 17.47c.49-.31 1.62-1.1 2.42-1.1"
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
            d="M9.6 6.06c.77 0 .92-.15 2.4-.15s1.63.15 2.4.15c.63 0 2.55-1.56 3.5-1.56s2.08.56 2.08 2.19v1.87c0 .5-.18 2-.88 1.6 1.11 1.31.88 2.92.88 4.34 0 3.9-5.27 5-7.98 5s-7.98-1.1-7.98-5c0-1.42-.23-3.03.88-4.34-.7.4-.88-1.1-.88-1.6V6.7c0-1.64 1.12-2.2 2.07-2.2.96 0 2.88 1.56 3.52 1.56"
            fill="currentColor"
          />
          <path
            d="M9.02 11.56c-.5 0-.82.32-.98.59q-.26.43-.26.94 0 .52.26.95c.16.27.49.59.98.59.48 0 .81-.32.98-.59q.25-.43.25-.95t-.25-.94c-.17-.27-.5-.59-.98-.59"
            fill="currentColor"
          />
          <path
            d="M14.04 12.15c.16-.27.49-.59.98-.59.48 0 .81.32.98.59q.25.43.25.94 0 .52-.25.95c-.17.27-.5.59-.98.59-.5 0-.82-.32-.98-.59a2 2 0 0 1-.26-.95q0-.52.26-.94"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.18 14.58q.39-.15.84-.14.46 0 .84.14.2.06.4.25c.14.12.32.35.32.67s-.18.55-.31.67q-.21.19-.4.25-.4.15-.85.14-.46 0-.84-.14a1 1 0 0 1-.41-.25 1 1 0 0 1-.3-.67c0-.32.17-.55.3-.67q.2-.19.4-.25"
            fill="currentColor"
          />
          <path
            d="M17.86 13.88c0-.42.34-.76.75-.76q.47.02.98.15a13 13 0 0 1 2.82 1.07.75.75 0 1 1-.82 1.26 12 12 0 0 0-2.36-.87q-.45-.1-.62-.1a.75.75 0 0 1-.75-.76"
            fill="currentColor"
          />
          <path
            d="M17.97 15.63a.75.75 0 0 0 0 1.5q.32 0 .98.34.52.29.9.54l.13.09a.75.75 0 0 0 .81-1.26l-.1-.07a13 13 0 0 0-1.04-.63 4 4 0 0 0-1.68-.52"
            fill="currentColor"
          />
          <path
            d="M3.82 15.01c-.7.24-1.26.49-1.41.59a.75.75 0 0 1-.82-1.26 13 13 0 0 1 2.81-1.06c.34-.09.7-.15.99-.15a.75.75 0 0 1 0 1.5q-.17 0-.63.1t-.94.28"
            fill="currentColor"
          />
          <path
            d="m4.02 18.1.13-.09q.38-.25.9-.54.66-.34.98-.34a.75.75 0 0 0 0-1.5c-.6 0-1.22.27-1.68.51-.4.22-.79.47-1.03.63l-.11.07a.75.75 0 0 0 .81 1.26"
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
            d="M12 5.9c-1.48 0-1.63.16-2.4.16-.62 0-2.55-1.56-3.49-1.56s-2.08.56-2.08 2.19v1.87c0 .5.18 2 .88 1.6-.83.98-.91 2.12-.9 3.22a15 15 0 0 0-2.4.96.75.75 0 0 0 .8 1.26 9 9 0 0 1 1.64-.66q.07.65.33 1.19l-.02.01c-.4.22-.79.47-1.03.63l-.11.07a.75.75 0 1 0 .81 1.26l.13-.09q.38-.25.9-.54l.23-.12c1.72 1.62 4.83 2.15 6.71 2.15s4.99-.53 6.72-2.15l.23.12q.52.29.9.54l.13.09a.75.75 0 0 0 .81-1.26l-.1-.07a13 13 0 0 0-1.04-.63l-.02-.01q.26-.54.33-1.2a13 13 0 0 1 1.63.67.75.75 0 0 0 .82-1.26 10 10 0 0 0-2.41-.96c.01-1.1-.07-2.24-.9-3.22.7.4.88-1.1.88-1.6V6.7c0-1.63-1.12-2.19-2.07-2.19-.96 0-2.88 1.56-3.52 1.56-.76 0-.91-.15-2.39-.15m-.68 9.2q.32-.1.68-.1t.68.1q.16.05.32.17c.11.09.25.25.25.48s-.14.39-.25.48q-.16.12-.32.17-.32.1-.68.1t-.68-.1q-.16-.05-.32-.17a.6.6 0 0 1-.25-.48c0-.23.14-.39.25-.48q.17-.12.32-.17m2.85-3.1c.14-.23.4-.5.81-.5.4 0 .67.27.81.5q.21.37.21.81t-.21.81c-.14.23-.4.5-.81.5a1 1 0 0 1-.81-.5 1.6 1.6 0 0 1-.21-.8q0-.46.21-.82m-5.96 0c.14-.23.4-.5.81-.5.4 0 .67.27.81.5q.21.37.21.81t-.21.81c-.14.23-.4.5-.81.5a1 1 0 0 1-.81-.5 1.6 1.6 0 0 1-.21-.8q0-.46.21-.82"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCat;
