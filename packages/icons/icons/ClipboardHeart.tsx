import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconClipboardHeart = forwardRef<SVGSVGElement, IconProps>(
  function IconClipboardHeart(
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
            d="m12 10.97-.53.53a.75.75 0 0 0 1.06 0zm-1 5.35-.44.6zm1 .5v-.76zm-.55-1.1c-.57-.42-1.28-1-1.83-1.63q-.86-1-.87-1.71h-1.5c0 1.02.61 1.97 1.24 2.7.66.74 1.46 1.4 2.07 1.85zm-2.7-3.34c0-.94.42-1.4.83-1.56.43-.16 1.13-.08 1.89.68l1.06-1.06C11.5 9.39 10.2 9 9.07 9.4c-1.14.42-1.82 1.56-1.82 2.97zm4.7 4.55c.6-.45 1.4-1.1 2.06-1.86.63-.72 1.24-1.67 1.24-2.7h-1.5q0 .72-.87 1.72a12 12 0 0 1-1.83 1.63zm3.3-4.55c0-1.41-.68-2.55-1.82-2.97-1.12-.41-2.42-.02-3.46 1.03l1.06 1.06c.76-.76 1.46-.84 1.89-.68.41.15.83.62.83 1.56zm-6.2 4.55c.4.28.83.63 1.45.63v-1.5l-.1-.03c-.1-.05-.21-.14-.45-.31zm2-1.21-.45.31q-.09.05-.1.03v1.5c.62 0 1.06-.35 1.44-.63z"
            fill="currentColor"
          />
          <path
            d="M8 3.5C8 2.67 8.67 2 9.5 2h5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 8 4.5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M21 16c0 2.83 0 4.24-.88 5.12S17.82 22 15 22H9c-2.83 0-4.24 0-5.12-.88S3 18.82 3 16v-3m13-9c2.18.01 3.35.11 4.12.88.88.88.88 2.3.88 5.12v2M8 4c-2.18.01-3.35.11-4.12.88S3 6.83 3 9"
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
              opacity={duotone ? "0.4" : "1"}
              d="M16 4c2.18.01 3.35.1 4.12.88.88.88.88 2.29.88 5.12v6c0 2.83 0 4.24-.88 5.12S17.82 22 15 22H9c-2.83 0-4.24 0-5.12-.88S3 18.82 3 16v-6c0-2.83 0-4.24.88-5.12C4.65 4.1 5.82 4 8 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m12 11.7-.52.53c.3.28.75.28 1.04 0zm0 4.13v-.75zm-.51-1.07c-.42-.3-.88-.69-1.23-1.1-.37-.42-.51-.75-.51-.96h-1.5c0 .77.44 1.45.87 1.95a9 9 0 0 0 1.48 1.32zM9.75 12.7c0-.58.26-.83.5-.91s.7-.06 1.23.44l1.04-1.08c-.83-.79-1.86-1.1-2.77-.78-.94.33-1.5 1.23-1.5 2.33zm3.65 3.27a9 9 0 0 0 1.48-1.32c.43-.5.87-1.18.87-1.95h-1.5q.02.32-.5.97c-.36.4-.82.78-1.24 1.1zm2.35-3.27c0-1.1-.56-2-1.5-2.33-.9-.32-1.94 0-2.77.78l1.04 1.08c.52-.5.99-.53 1.24-.44.23.08.49.33.49.9zm-5.15 3.27c.37.27.78.6 1.4.6v-1.5l-.1-.02-.41-.29zm1.91-1.2-.42.28q-.07.04-.09.03v1.5c.62 0 1.03-.34 1.4-.6z"
              fill="currentColor"
            />
            <path
              d="M8 3.5C8 2.67 8.67 2 9.5 2h5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 8 4.5z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M21 16v-6c0-2.83 0-4.24-.88-5.12C19.35 4.1 18.17 4 16 4H8c-2.18.01-3.35.1-4.12.88C3 5.76 3 7.17 3 10v6c0 2.83 0 4.24.88 5.12S6.18 22 9 22h6c2.83 0 4.24 0 5.12-.88S21 18.82 21 16"
              fill="currentColor"
            />
            <path
              d="M8 3.5C8 2.67 8.67 2 9.5 2h5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 8 4.5z"
              fill="currentColor"
            />
            <path
              d="M9 12.7c0 .98 1.16 2.02 2.04 2.67.42.3.63.46.96.46s.54-.16.96-.46c.88-.65 2.04-1.69 2.04-2.67 0-1.68-1.65-2.3-3-1-1.35-1.3-3-.68-3 1"
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
              d="M9.5 2C8.67 2 8 2.67 8 3.5v1C8 5.33 8.67 6 9.5 6h5c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 4.04c-1.26.07-2.05.27-2.62.84C3 5.76 3 7.17 3 10v6c0 2.83 0 4.24.88 5.12S6.18 22 9 22h6c2.83 0 4.24 0 5.12-.88S21 18.82 21 16v-6c0-2.83 0-4.24-.88-5.12-.57-.57-1.36-.77-2.62-.84v.46a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zm4.54 11.33C10.16 14.72 9 13.68 9 12.7c0-1.68 1.65-2.3 3-1 1.35-1.3 3-.68 3 1 0 .98-1.16 2.02-2.04 2.67-.42.3-.63.46-.96.46s-.54-.16-.96-.46"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconClipboardHeart;
