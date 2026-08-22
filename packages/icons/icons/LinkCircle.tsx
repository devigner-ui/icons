import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLinkCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconLinkCircle(
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
              opacity={duotone ? "0.4" : "1"}
              d="M8.61 14.51a3 3 0 0 1-1.52-1.32A3.2 3.2 0 0 1 8.2 8.95l2.34-1.45a2.85 2.85 0 0 1 4.03 1.05c.8 1.46.31 3.36-1.1 4.24l-.32.22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.78 9.45c.62.23 1.17.68 1.52 1.32.8 1.46.31 3.36-1.1 4.24l-2.35 1.45c-1.4.88-3.23.4-4.03-1.05a3.2 3.2 0 0 1 1.11-4.24l.31-.22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="m8.61 15.26-.26-.05a3.7 3.7 0 0 1-1.92-1.66c-1-1.8-.38-4.15 1.37-5.24l2.34-1.45a3.63 3.63 0 0 1 5.1 1.32c1 1.8.37 4.15-1.38 5.24l-.26.19a.76.76 0 0 1-1.05-.17.76.76 0 0 1 .17-1.05l.31-.22c1.12-.7 1.5-2.15.9-3.26a2 2 0 0 0-1.33-1.04 2 2 0 0 0-1.66.26L8.6 9.58a2.47 2.47 0 0 0-.85 3.24q.4.7 1.13.98c.4.14.6.57.44.96-.1.31-.4.5-.7.5"
              fill="currentColor"
            />
            <path
              d="M13.33 17.65q-.45 0-.9-.12a3.6 3.6 0 0 1-2.26-1.76c-1-1.8-.38-4.15 1.37-5.24l.26-.19a.76.76 0 0 1 1.05.17c.24.34.16.81-.17 1.05l-.3.22a2.5 2.5 0 0 0-.9 3.26q.46.8 1.32 1.04c.56.15 1.15.06 1.66-.26l2.34-1.45a2.47 2.47 0 0 0 .85-3.24q-.4-.7-1.13-.98a.74.74 0 0 1-.44-.96.74.74 0 0 1 .96-.44c.81.3 1.5.89 1.92 1.66 1 1.8.38 4.15-1.37 5.24l-2.34 1.45q-.9.54-1.92.55"
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
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M9.32 14.77c-.1.3-.4.49-.7.49l-.26-.05a3.7 3.7 0 0 1-1.92-1.66c-1-1.8-.38-4.15 1.37-5.24l2.34-1.45a3.63 3.63 0 0 1 5.1 1.32c1 1.8.37 4.15-1.38 5.24l-.26.19a.76.76 0 0 1-1.05-.17.76.76 0 0 1 .17-1.05l.31-.22c1.12-.7 1.5-2.15.9-3.26a2 2 0 0 0-1.33-1.04 2 2 0 0 0-1.66.26L8.6 9.59a2.47 2.47 0 0 0-.85 3.24q.4.7 1.13.98c.4.14.6.57.45.96m8.27.88-2.34 1.45a3.6 3.6 0 0 1-5.08-1.33c-1-1.8-.38-4.15 1.37-5.24l.26-.19a.76.76 0 0 1 1.05.17c.24.34.16.81-.17 1.05l-.3.22a2.5 2.5 0 0 0-.9 3.26q.46.8 1.32 1.04c.56.15 1.15.06 1.66-.26l2.34-1.45a2.47 2.47 0 0 0 .85-3.24q-.4-.7-1.13-.98a.74.74 0 0 1-.44-.96.74.74 0 0 1 .96-.44c.81.3 1.5.89 1.92 1.66 1 1.8.38 4.15-1.37 5.24"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLinkCircle;
