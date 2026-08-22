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
              d="m5.95 18.65.57-2.47c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53a2.2 2.2 0 0 0 1.41-1.05l1.76-3.52c.95-1.91 2.51-1.91 3.47 0l1.76 3.52q.18.35.55.64"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.77 8.61c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48a2.2 2.2 0 0 0-.52 1.81l.7 3.07c.57 2.43-.72 3.37-2.87 2.1l-2.99-1.77a2.2 2.2 0 0 0-1.98 0l-3 1.77"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m22.67 2-20 20"
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
              d="M19.37 14.46a2 2 0 0 0-.44 1.54l.69 3.01c.29 1.25.11 2.19-.51 2.64a1.5 1.5 0 0 1-.9.27 3.6 3.6 0 0 1-1.77-.58l-2.93-1.74a1.8 1.8 0 0 0-1.68 0L8.9 21.34c-1.11.65-2.06.76-2.67.31l-.11-.1L19.47 8.2l1.17.2c1.06.18 1.77.66 2 1.36s-.08 1.51-.84 2.27z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.41 16a2 2 0 0 0-.44-1.54l-2.43-2.43c-.76-.76-1.06-1.57-.84-2.27s.94-1.18 2-1.36l3.12-.52c.45-.08 1-.48 1.21-.89l1.72-3.45c.5-.99 1.18-1.54 1.92-1.54s1.42.55 1.92 1.54l1.72 3.45c.13.26.4.51.69.68L5.74 18.93z"
              fill="currentColor"
            />
            <path
              d="M22.44 2.23a.77.77 0 0 0-1.09 0L2.9 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L22.44 3.31a.74.74 0 0 0 0-1.08"
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
              d="M19.37 14.46a2 2 0 0 0-.44 1.53l.69 3.02c.29 1.25.11 2.19-.51 2.64a1.5 1.5 0 0 1-.9.27 3.6 3.6 0 0 1-1.77-.58l-2.93-1.74a1.8 1.8 0 0 0-1.68 0L8.9 21.34c-1.11.65-2.06.76-2.67.31l-.11-.1L18.74 8.93a2 2 0 0 1 1.75-.56l.15.03c1.06.18 1.77.66 2 1.36s-.08 1.51-.84 2.27z"
              fill="currentColor"
            />
            <path
              d="M6.41 16a2 2 0 0 0-.44-1.54l-2.43-2.43c-.76-.76-1.06-1.57-.84-2.27s.94-1.18 2-1.36l3.12-.52c.45-.08 1-.48 1.21-.89l1.72-3.45c.5-.99 1.18-1.54 1.92-1.54s1.42.55 1.92 1.54l1.72 3.45c.13.26.4.51.69.68L5.74 18.93z"
              fill="currentColor"
            />
            <path
              d="M22.44 2.23a.77.77 0 0 0-1.09 0L2.9 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L22.44 3.31a.74.74 0 0 0 0-1.08"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStarSlash;
