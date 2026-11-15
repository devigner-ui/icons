import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiTools = forwardRef<SVGSVGElement, IconProps>(function IconAiTools(
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
            d="m8.32 5.49-.99-.99a4 4 0 0 1 5.1 5.1l4.52 4.52a2 2 0 0 1 .58 1.28 2.2 2.2 0 0 1-2.13 2.13 2 2 0 0 1-1.28-.58L9.6 12.42a4 4 0 0 1-5.1-5.09l2.2 2.2 2.33-2.34"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.59 13.41za1.5 1.5 0 0 1 0 2.12l-2.83 2.83a1.5 1.5 0 0 1-2.12 0v0a1.5 1.5 0 0 1 0-2.12l2.83-2.83a1.5 1.5 0 0 1 2.12 0zm0 0 6.36-6.36"
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
            d="M15.4 17.53a2 2 0 0 1-1.28-.58L9.6 12.42a4 4 0 0 1-5.1-5.09l2.2 2.2L9.53 6.7l-2.2-2.2a4 4 0 0 1 5.1 5.1l4.52 4.52a2 2 0 0 1 .58 1.28 2.2 2.2 0 0 1-2.13 2.13z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.59 13.41za1.5 1.5 0 0 1 0 2.12l-2.83 2.83a1.5 1.5 0 0 1-2.12 0v0a1.5 1.5 0 0 1 0-2.12l2.83-2.83a1.5 1.5 0 0 1 2.12 0zm0 0 6.36-6.36"
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
            d="M5.04 6.8 6.7 8.47 8.47 6.7 6.8 5.04a.75.75 0 0 1 .3-1.24 5.1 5.1 0 0 1 4.92 1.12 4.8 4.8 0 0 1 1.24 4.44l4.23 4.23c.47.52.8 1.28.8 1.92a2.8 2.8 0 0 1-2.77 2.78 3.2 3.2 0 0 1-1.92-.8l-4.23-4.24a4.8 4.8 0 0 1-4.43-1.24A5.1 5.1 0 0 1 3.8 7.09a.75.75 0 0 1 1.24-.29z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m11.54 13.53 5.94-5.95a.75.75 0 1 0-1.06-1.06l-5.93 5.93-.12-.06c-.25-.1-.58-.17-.84-.17a2.6 2.6 0 0 0-1.6.66s.59-.58 0 0l-2.8 2.82a1 1 0 0 0-.18.26 2 2 0 0 0-.33.5c-.1.24-.16.58-.16.84 0 .48.24 1.07.57 1.5a1 1 0 0 0 .34.26 2 2 0 0 0 .5.33c.24.1.58.16.84.16.52 0 1.16-.28 1.59-.66q0 0 0 0l2.82-2.81a1 1 0 0 0 .17-.26s-.03.06 0 0c0 0 .23-.25.33-.5s.17-.58.17-.85q-.02-.46-.24-.95z"
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
            d="M5.04 6.8 6.7 8.47 8.47 6.7 6.8 5.04a.75.75 0 0 1 .3-1.24 5.1 5.1 0 0 1 4.92 1.12 4.8 4.8 0 0 1 1.24 4.44l.17.17 3-3.01a.75.75 0 1 1 1.06 1.06l-3 3 3 3.01c.47.52.8 1.28.8 1.92a2.8 2.8 0 0 1-2.77 2.78 3.2 3.2 0 0 1-1.92-.8l-2.04-2.05c-.1.2-.27.38-.27.38-.03.06 0 0 0 0q-.06.15-.18.26L8.3 18.9q0 0 0 0a2.7 2.7 0 0 1-1.6.65c-.26 0-.6-.06-.84-.16s-.48-.32-.5-.33a1 1 0 0 1-.33-.26 2.6 2.6 0 0 1-.57-1.5c0-.26.06-.6.16-.84s.32-.49.33-.5a1 1 0 0 1 .18-.26l2.4-2.4a4.6 4.6 0 0 1-2.6-1.3A5.1 5.1 0 0 1 3.8 7.1a.75.75 0 0 1 1.24-.29z"
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

export default IconAiTools;
