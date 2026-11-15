import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiMagicWand = forwardRef<SVGSVGElement, IconProps>(function IconAiMagicWand(
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
            d="m7.97 14.05 8.77-8.77a1.4 1.4 0 0 1 1.98 0v0a1.4 1.4 0 0 1 0 1.98L7.26 18.72a1.4 1.4 0 0 1-1.98 0v0a1.4 1.4 0 0 1 0-1.98l1-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m14.5 7.5 2 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.5 3.6c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5 15.6c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.3 9.8c.13.92.48 1.27 1.4 1.4-.92.13-1.27.48-1.4 1.4-.13-.92-.48-1.27-1.4-1.4.92-.13 1.27-.48 1.4-1.4Z"
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
            d="M18.72 5.28za1.4 1.4 0 0 1 0 1.98L7.26 18.72a1.4 1.4 0 0 1-1.98 0v0a1.4 1.4 0 0 1 0-1.98L16.74 5.28a1.4 1.4 0 0 1 1.98 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m14.5 7.5 2 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.5 3.6c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5 15.6c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.3 9.8c.13.92.48 1.27 1.4 1.4-.92.13-1.27.48-1.4 1.4-.13-.92-.48-1.27-1.4-1.4.92-.13 1.27-.48 1.4-1.4Z"
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
            d="M19.88 6.27c0 .25-.07.57-.16.81-.1.23-.3.45-.3.46a1 1 0 0 1-.18.27L7.79 19.25q0 0 0 0l-.1.09c-.4.31-.97.54-1.42.54-.25 0-.57-.06-.8-.16s-.46-.3-.47-.3a1 1 0 0 1-.34-.28c-.31-.4-.54-.96-.54-1.41 0-.25.07-.57.16-.81.1-.23.3-.45.3-.46a1 1 0 0 1 .18-.26L16.21 4.75c.54-.54 0 0 0 0l.1-.09c.4-.31.97-.54 1.42-.54.25 0 .57.06.8.16s.46.3.47.3a1 1 0 0 1 .34.28c.31.4.54.96.54 1.41z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m14.51 6.45 3.04 3.04-1.06 1.06-3.04-3.04z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M5.9 3.2c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0zm13 12c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0zm1.8-5.8c.06.53.17.8.38 1.02.22.21.49.32 1.02.38a.4.4 0 0 1 0 .8c-.53.06-.8.17-1.02.38-.21.22-.32.49-.38 1.02a.4.4 0 0 1-.8 0c-.06-.53-.17-.8-.38-1.02-.22-.21-.49-.32-1.02-.38a.4.4 0 0 1 0-.8c.53-.06.8-.17 1.02-.38.21-.22.32-.49.38-1.02a.4.4 0 0 1 .8 0z"
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
            d="M19.88 6.27c0 .25-.07.57-.16.81-.1.23-.3.45-.3.46a1 1 0 0 1-.18.27l-1.69 1.68-3.04-3.04 1.7-1.7c.54-.55 0 0 0 0l.1-.09c.4-.31.97-.54 1.42-.54.25 0 .57.06.8.16s.46.3.47.3a1 1 0 0 1 .34.28c.31.4.54.96.54 1.41zM7.79 19.25q0 0 0 0l-.1.09c-.4.31-.97.54-1.42.54-.25 0-.57-.06-.8-.16s-.46-.3-.47-.3a1 1 0 0 1-.34-.28c-.31-.4-.54-.96-.54-1.41 0-.25.06-.57.16-.81.1-.23.3-.45.3-.46a1 1 0 0 1 .18-.26l8.69-8.69 3.04 3.04zM5.9 3.2c.12.86.3 1.36.68 1.73.37.37.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0zm13 12c.12.86.3 1.36.68 1.73.37.37.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0zm1.8-5.8c.07.53.18.8.4 1.02.2.21.48.32 1.01.38a.4.4 0 0 1 0 .8c-.53.06-.8.17-1.02.38-.21.22-.32.49-.38 1.02a.4.4 0 0 1-.8 0c-.06-.53-.17-.8-.38-1.02-.22-.21-.49-.32-1.02-.38a.4.4 0 0 1 0-.8c.53-.06.8-.17 1.02-.38.21-.22.32-.49.38-1.02a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiMagicWand;
