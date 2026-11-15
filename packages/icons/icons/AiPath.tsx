import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiPath = forwardRef<SVGSVGElement, IconProps>(function IconAiPath(
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
            d="M8.51 14.68 7 9l5-6.5L17 9l-2 7.5H9.51"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2.5V9m-1.4 1.5a1.4 1.4 0 1 0 2.8 0 1.4 1.4 0 0 0-2.8 0zm-.4 6h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2h-3.6A1.2 1.2 0 0 1 9 19.3v-1.6c0-.66.54-1.2 1.2-1.2z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M12 2.5 17 9l-2 7.5H9L7 9z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2.5V9m-1.4 1.5a1.4 1.4 0 1 0 2.8 0 1.4 1.4 0 0 0-2.8 0zm-.4 6h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2h-3.6A1.2 1.2 0 0 1 9 19.3v-1.6c0-.66.54-1.2 1.2-1.2z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="m17.59 8.54.03.03a.8.8 0 0 1 .1.63l-2 7.48-.05.16a.8.8 0 0 1-.69.4H8.84a.8.8 0 0 1-.57-.56l-2-7.48v-.04a.8.8 0 0 1 .14-.62l4.99-6.48.07-.1a.8.8 0 0 1 .85-.14 1 1 0 0 1 .28.24z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M11.25 2.5v6q-.47.19-.77.48c-.35.35-.63.98-.63 1.52s.28 1.17.63 1.52.98.63 1.52.63 1.17-.28 1.52-.63.63-.98.63-1.52-.28-1.17-.63-1.52q-.31-.3-.77-.48v-6a.75.75 0 0 0-1.5 0zM8.82 16.32c-.31.31-.54.9-.57 1.38v1.6c.03.49.26 1.07.57 1.38s.9.54 1.38.57h3.6a2.4 2.4 0 0 0 1.38-.57c.31-.31.54-.9.57-1.38v-1.6a2.4 2.4 0 0 0-.57-1.38c-.31-.31-.9-.54-1.38-.57h-3.6c-.48.03-1.07.26-1.38.57z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
            d="m12.64 2.12.09.23.02.15v6l.36.17.19.12.17.14.11.12.13.15.11.18.1.19.09.2.06.21.05.21.03.21-.01.31-.04.21-.06.21-.12.3-.1.19-.11.18-.19.22-.22.19-.18.11-.19.1-.3.12-.32.08-.31.03-.31-.03-.21-.05-.21-.06-.3-.14-.18-.1-.17-.12-.2-.2-.19-.24-.1-.18-.1-.2-.1-.31-.05-.21-.03-.21.01-.31.04-.21.06-.21.07-.2.1-.2.16-.27.13-.15.11-.12.17-.13.19-.12.36-.18v-6l.03-.22.08-.16-4.95 6.42-.08.14-.05.16-.02.16.01.2 1.82 6.82.18-.21.2-.18.22-.15.25-.15.33-.14.27-.08.34-.08.32-.03h3.6l.19.01.22.04.25.06.27.08.24.1.23.12.22.14.17.13.17.16.14.18 1.82-6.82.02-.16-.01-.21-.05-.15-.06-.11zm-.32-.3-.03-.01.05.02zm-.06-.02.02.01zm-.7.09-.09.07-.03.04.08-.08.1-.07zM8.82 16.32c-.31.31-.54.9-.57 1.38v1.6c.03.49.26 1.07.57 1.38s.9.54 1.38.57h3.6a2.4 2.4 0 0 0 1.38-.57c.31-.31.54-.9.57-1.38v-1.6a2.4 2.4 0 0 0-.57-1.38c-.31-.31-.9-.54-1.38-.57h-3.6c-.48.03-1.07.26-1.38.57z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiPath;
