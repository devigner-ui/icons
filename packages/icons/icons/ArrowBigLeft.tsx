import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArrowBigLeft = forwardRef<SVGSVGElement, IconProps>(
  function IconArrowBigLeft(
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
            d="M11.5 15h4.39m3.47-.19q.68-.34.99-1.04c.15-.37.15-.84.15-1.77s0-1.4-.15-1.77a2 2 0 0 0-1.08-1.08C18.9 9 18.43 9 17.5 9h-6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5 9v-.54c0-2.09 0-3.13-.6-3.4-.6-.28-1.32.44-2.75 1.86l-3.57 3.55c-.72.72-1.08 1.08-1.08 1.53s.36.81 1.08 1.53l3.57 3.55c1.43 1.42 2.15 2.14 2.75 1.86.6-.27.6-1.31.6-3.4V15"
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
              d="M11.5 15h6c.93 0 1.4 0 1.77-.15q.75-.33 1.08-1.08c.15-.37.15-.84.15-1.77s0-1.4-.15-1.77a2 2 0 0 0-1.08-1.08C18.9 9 18.43 9 17.5 9h-6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.5 9v-.54c0-2.09 0-3.13-.6-3.4-.6-.28-1.32.44-2.75 1.86l-3.57 3.55c-.72.72-1.08 1.08-1.08 1.53s.36.81 1.08 1.53l3.57 3.55c1.43 1.42 2.15 2.14 2.75 1.86.6-.27.6-1.31.6-3.4V15"
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
              d="M11.5 15h6c.93 0 1.4 0 1.77-.15q.75-.33 1.08-1.08c.15-.37.15-.84.15-1.77s0-1.4-.15-1.77a2 2 0 0 0-1.08-1.08C18.9 9 18.43 9 17.5 9h-6Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M11.5 9v-.54c0-2.09 0-3.13-.6-3.4-.6-.28-1.32.44-2.75 1.86l-3.57 3.55c-.72.72-1.08 1.08-1.08 1.53s.36.81 1.08 1.53l3.57 3.55c1.43 1.42 2.15 2.14 2.75 1.86.6-.27.6-1.31.6-3.4V15Z"
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
              d="M11.5 15h6c.93 0 1.4 0 1.77-.15q.75-.33 1.08-1.08c.15-.37.15-.84.15-1.77s0-1.4-.15-1.77a2 2 0 0 0-1.08-1.08C18.9 9 18.43 9 17.5 9h-6v-.54c0-2.09 0-3.13-.6-3.4-.6-.28-1.32.44-2.75 1.86l-3.57 3.55c-.72.72-1.08 1.08-1.08 1.53s.36.81 1.08 1.53l3.57 3.55c1.43 1.42 2.15 2.14 2.75 1.86.6-.27.6-1.31.6-3.4z"
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

export default IconArrowBigLeft;
