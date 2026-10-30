import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArrowBigDown = forwardRef<SVGSVGElement, IconProps>(
  function IconArrowBigDown(
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
            d="M15 12.5V8.11m-.19-3.47a2 2 0 0 0-1.04-.99c-.37-.15-.84-.15-1.77-.15s-1.4 0-1.77.15q-.75.33-1.08 1.08C9 5.1 9 5.57 9 6.5v6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12.5h-.54c-2.09 0-3.13 0-3.4.6-.28.6.44 1.32 1.86 2.75l3.55 3.57c.72.72 1.08 1.08 1.53 1.08s.81-.36 1.53-1.08l3.55-3.57c1.42-1.43 2.14-2.15 1.86-2.75-.27-.6-1.31-.6-3.4-.6H15"
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
              d="M15 12.5v-6c0-.93 0-1.4-.15-1.77a2 2 0 0 0-1.08-1.08c-.37-.15-.84-.15-1.77-.15s-1.4 0-1.77.15q-.75.33-1.08 1.08C9 5.1 9 5.57 9 6.5v6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 12.5h-.54c-2.09 0-3.13 0-3.4.6-.28.6.44 1.32 1.86 2.75l3.55 3.57c.72.72 1.08 1.08 1.53 1.08s.81-.36 1.53-1.08l3.55-3.57c1.42-1.43 2.14-2.15 1.86-2.75-.27-.6-1.31-.6-3.4-.6H15"
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
              d="M15 12.5v-6c0-.93 0-1.4-.15-1.77a2 2 0 0 0-1.08-1.08c-.37-.15-.84-.15-1.77-.15s-1.4 0-1.77.15q-.75.33-1.08 1.08C9 5.1 9 5.57 9 6.5v6Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M9 12.5h-.54c-2.09 0-3.13 0-3.4.6-.28.6.44 1.32 1.86 2.75l3.55 3.57c.72.72 1.08 1.08 1.53 1.08s.81-.36 1.53-1.08l3.55-3.57c1.42-1.43 2.14-2.15 1.86-2.75-.27-.6-1.31-.6-3.4-.6H15Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
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
              d="M15 12.5v-6c0-.93 0-1.4-.15-1.77a2 2 0 0 0-1.08-1.08c-.37-.15-.84-.15-1.77-.15s-1.4 0-1.77.15q-.75.33-1.08 1.08C9 5.1 9 5.57 9 6.5v6h-.54c-2.09 0-3.13 0-3.4.6-.28.6.44 1.32 1.86 2.75l3.55 3.57c.72.72 1.08 1.08 1.53 1.08s.81-.36 1.53-1.08l3.55-3.57c1.42-1.43 2.14-2.15 1.86-2.75-.27-.6-1.31-.6-3.4-.6z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconArrowBigDown;
