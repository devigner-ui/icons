import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStarSlash = forwardRef<SVGSVGElement, IconProps>(
  function IconStarSlash(
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
            d="M16.05 7.67a2 2 0 0 1-.55-.64l-1.76-3.52c-.95-1.91-2.51-1.91-3.47 0L8.5 7.03q-.2.38-.59.67"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m5.28 18.65.57-2.47c.13-.58-.1-1.39-.52-1.81l-2.48-2.48C1.4 10.43 1.86 8.95 3.9 8.61"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M20.1 8.61c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48a2.2 2.2 0 0 0-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-3-1.77a2.2 2.2 0 0 0-1.97 0l-2.99 1.77"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 2 2 22"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
              d="m5.28 18.65.57-2.47c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53A2.2 2.2 0 0 0 8.5 7.03l1.76-3.52c.95-1.91 2.51-1.91 3.47 0l1.76 3.52q.18.35.55.64"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.1 8.61c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48a2.2 2.2 0 0 0-.52 1.81l.7 3.07c.57 2.43-.72 3.37-2.87 2.1l-2.99-1.77a2.2 2.2 0 0 0-1.98 0l-3 1.77"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 2 2 22"
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
              d="M18.7 14.46a2 2 0 0 0-.44 1.54l.69 3.01c.29 1.25.11 2.19-.51 2.64a1.5 1.5 0 0 1-.9.27 3.6 3.6 0 0 1-1.77-.58l-2.93-1.74a1.8 1.8 0 0 0-1.68 0l-2.93 1.74c-1.11.65-2.06.76-2.67.31l-.11-.1L18.8 8.2l1.17.2c1.06.18 1.77.66 2 1.36s-.08 1.51-.84 2.27z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.74 16a2 2 0 0 0-.44-1.54l-2.43-2.43c-.76-.76-1.06-1.57-.84-2.27s.94-1.18 2-1.36l3.12-.52c.45-.08 1-.48 1.21-.89l1.72-3.45C10.58 2.55 11.26 2 12 2s1.42.55 1.92 1.54l1.72 3.45c.13.26.4.51.69.68L5.07 18.93z"
              fill="currentColor"
            />
            <path
              d="M21.77 2.23a.77.77 0 0 0-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L21.77 3.31a.74.74 0 0 0 0-1.08"
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
              d="M18.7 14.46a2 2 0 0 0-.44 1.53l.69 3.02c.29 1.25.11 2.19-.51 2.64a1.5 1.5 0 0 1-.9.27 3.6 3.6 0 0 1-1.77-.58l-2.93-1.74a1.8 1.8 0 0 0-1.68 0l-2.93 1.74c-1.11.65-2.06.76-2.67.31l-.11-.1L18.07 8.93a2 2 0 0 1 1.75-.56l.15.03c1.06.18 1.77.66 2 1.36s-.08 1.51-.84 2.27z"
              fill="currentColor"
            />
            <path
              d="M5.74 16a2 2 0 0 0-.44-1.54l-2.43-2.43c-.76-.76-1.06-1.57-.84-2.27s.94-1.18 2-1.36l3.12-.52c.45-.08 1-.48 1.21-.89l1.72-3.45C10.58 2.55 11.26 2 12 2s1.42.55 1.92 1.54l1.72 3.45c.13.26.4.51.69.68L5.07 18.93z"
              fill="currentColor"
            />
            <path
              d="M21.77 2.23a.77.77 0 0 0-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L21.77 3.31a.74.74 0 0 0 0-1.08"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStarSlash;
