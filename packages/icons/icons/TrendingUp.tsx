import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTrendingUp = forwardRef<SVGSVGElement, IconProps>(
  function IconTrendingUp(
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
              d="m22 7-7.38 7.33c-1 1-1.5 1.5-2.11 1.5-.62 0-1.12-.5-2.12-1.5l-.24-.23c-1-1-1.5-1.5-2.12-1.5-.61 0-1.11.5-2.11 1.5L2 18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 12.55V7h-5.58"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.67 7c0-.41.33-.75.75-.75H22c.41 0 .75.34.75.75v5.55a.75.75 0 0 1-1.5 0v-4.8h-4.83a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m20.19 7.75-6.1 6.05c-.51.51-.85.84-1.12 1.05-.26.2-.38.22-.46.22s-.2-.02-.47-.22-.6-.54-1.12-1.05l-.28-.27q-.69-.72-1.24-1.15a2.2 2.2 0 0 0-1.37-.52c-.53 0-.97.22-1.37.52q-.54.43-1.24 1.15l-3.95 3.94a.75.75 0 1 0 1.06 1.06l3.92-3.9c.51-.51.84-.84 1.12-1.05.26-.2.38-.22.46-.22s.2.02.47.22.6.54 1.12 1.05l.28.27q.7.72 1.24 1.15c.39.3.83.52 1.37.52.53 0 .97-.22 1.36-.52q.55-.43 1.24-1.15l6.14-6.1V7.76z"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.67 7c0-.41.33-.75.75-.75H22c.41 0 .75.34.75.75v5.55a.75.75 0 0 1-1.5 0V8.8l-6.14 6.1q-.69.72-1.24 1.15c-.39.3-.83.52-1.36.52s-.98-.22-1.37-.52q-.54-.43-1.24-1.15l-.28-.27c-.51-.51-.85-.84-1.12-1.05-.26-.2-.38-.22-.47-.22s-.2.02-.46.22c-.28.2-.6.54-1.12 1.05l-3.92 3.9a.75.75 0 0 1-1.06-1.06l3.95-3.94q.7-.72 1.24-1.15c.4-.3.84-.52 1.37-.52s.98.22 1.37.52q.55.43 1.24 1.15l.28.27c.51.51.85.84 1.12 1.05.26.2.38.22.47.22s.2-.02.46-.22c.27-.2.6-.54 1.12-1.05l6.1-6.05h-3.77a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTrendingUp;
