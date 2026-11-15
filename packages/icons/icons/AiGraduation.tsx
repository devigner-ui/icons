import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiGraduation = forwardRef<SVGSVGElement, IconProps>(function IconAiGraduation(
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
            d="m8.04 3.84 2.01-1.31a3.9 3.9 0 0 1 3.94 0l6 3.93a3.2 3.2 0 0 1 0 5.34L14 15.73a3.9 3.9 0 0 1-3.94 0L4.03 11.8a3.2 3.2 0 0 1 0-5.34l2.01-1.31"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m5.63 13.08-.01 4.69c0 1.27.98 2.63 2.18 3.03l3.19 1.06c.55.18 1.46.18 2.02 0l3.19-1.06a3.4 3.4 0 0 0 2.18-3.03v-4.64"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.4 15V9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6.7c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M10.05 2.53 4.03 6.46a3.2 3.2 0 0 0 0 5.34l6.02 3.93c1.08.71 2.86.71 3.94 0l5.99-3.93a3.2 3.2 0 0 0 0-5.34l-6-3.93a3.9 3.9 0 0 0-3.94 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m5.63 13.08-.01 4.69c0 1.27.98 2.63 2.18 3.03l3.19 1.06c.55.18 1.46.18 2.02 0l3.19-1.06a3.4 3.4 0 0 0 2.18-3.03v-4.64"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.4 15V9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6.7c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M18.38 12.84v4.93c0 1.27-.99 2.63-2.18 3.03l-3.19 1.06c-.56.19-1.47.19-2.02 0L7.8 20.8a3.4 3.4 0 0 1-2.18-3.03l.01-4.93 4.42 2.88c1.08.71 2.86.71 3.94 0z"
            fill="currentColor"
          />
          <path
            d="m21.22 8.06.07.24.06.25.03.25.02.25v.26l-.03.26-.05.26-.07.25V15l-.01.15-.05.14-.07.13-.1.1-.1.1-.13.07-.14.05-.15.01-.15-.01-.14-.05-.13-.07-.1-.1-.1-.1-.07-.13-.04-.14-.02-.15v-3.06l-1.37.9L14 15.72l-.2.13-.23.1-.49.17-.51.1-.54.03-.53-.03-.52-.1-.48-.17-.23-.1-.2-.13-4.43-2.88-1.6-1.04-.32-.24-.28-.27-.25-.31-.2-.33-.17-.36-.12-.37-.07-.39-.02-.4.02-.4.07-.39.12-.37.17-.35.2-.34.25-.3.28-.28.32-.24 6.02-3.93.47-.23.49-.17.5-.1.51-.03.51.03.5.1.5.17.46.23 6.02 3.93.32.24.28.28.25.3.2.34.17.35zM12.4 6.3c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="M16.83 15.64a1 1 0 0 1 1.55.84v1.29c0 1.27-.99 2.63-2.18 3.03l-3.19 1.06c-.56.19-1.47.19-2.02 0L7.8 20.8a3.4 3.4 0 0 1-2.18-3.03v-1.3a1 1 0 0 1 1.54-.84l2.06 1.34c.79.53 1.79.79 2.79.79s2-.26 2.79-.79z"
            fill="currentColor"
          />
          <path
            d="m21.22 8.06.07.24.06.25.03.25.02.25v.26l-.03.26-.05.26-.07.25V15l-.01.15-.05.14-.07.13-.1.1-.1.1-.13.07-.14.05-.15.01-.15-.01-.14-.05-.13-.07-.1-.1-.1-.1-.07-.13-.04-.14-.02-.15v-3.06l-1.37.9L14 15.72l-.2.13-.23.1-.49.17-.51.1-.54.03-.53-.03-.52-.1-.48-.17-.23-.1-.2-.13-4.43-2.88-1.6-1.04-.32-.24-.28-.27-.25-.31-.2-.33-.17-.36-.12-.37-.07-.39-.02-.4.02-.4.07-.39.12-.37.17-.35.2-.34.25-.3.28-.28.32-.24 6.02-3.93.47-.23.49-.17.5-.1.51-.03.51.03.5.1.5.17.46.23 6.02 3.93.32.24.28.28.25.3.2.34.17.35zM12.4 6.3c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiGraduation;
