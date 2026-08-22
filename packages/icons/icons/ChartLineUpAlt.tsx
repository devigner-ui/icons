import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconChartLineUpAlt = forwardRef<SVGSVGElement, IconProps>(
  function IconChartLineUpAlt(
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
              d="M22 22H12c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12V2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m19 7-3.12 3.93c-.48.6-.71.9-.99 1.05a1.5 1.5 0 0 1-1.35.02c-.28-.13-.54-.42-1.04-1s-.75-.87-1.04-1a1.5 1.5 0 0 0-1.35.02 4 4 0 0 0-1 1.05L6 15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              d="M2.75 2a.75.75 0 0 0-1.5 0v10.06c0 2.3 0 4.11.19 5.53a5.7 5.7 0 0 0 1.5 3.48c.89.9 2.03 1.3 3.47 1.49 1.42.19 3.22.19 5.53.19H22a.75.75 0 0 0 0-1.5H12c-2.38 0-4.09 0-5.39-.18-1.27-.17-2.05-.5-2.62-1.06-.56-.57-.9-1.35-1.06-2.62-.18-1.3-.18-3.01-.18-5.39z"
              fill="currentColor"
            />
            <path
              d="M19.59 7.47a.75.75 0 1 0-1.18-.94l-3.12 3.93-.53.66a1 1 0 0 1-.22.2.8.8 0 0 1-.68 0 1 1 0 0 1-.23-.18l-.56-.63-.02-.02-.62-.69a2 2 0 0 0-.64-.48c-.65-.31-1.4-.3-2.03.04q-.37.22-.62.51l-.6.72-3.13 3.94a.75.75 0 0 0 1.18.94l3.12-3.93.53-.66.22-.2a.8.8 0 0 1 .68 0q.04-.02.23.18t.56.63l.02.02.62.69q.28.3.64.48c.65.31 1.4.3 2.04-.04q.36-.22.62-.51l.58-.72z"
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
              d="M2.75 2a.75.75 0 0 0-1.5 0v10.06c0 2.3 0 4.11.19 5.53a5.7 5.7 0 0 0 1.5 3.48c.89.9 2.03 1.3 3.47 1.49 1.42.19 3.22.19 5.53.19H22a.75.75 0 0 0 0-1.5H12c-2.38 0-4.09 0-5.39-.18-1.27-.17-2.05-.5-2.62-1.06-.56-.57-.9-1.35-1.06-2.62-.18-1.3-.18-3.01-.18-5.39z"
              fill="currentColor"
            />
            <path
              d="M19.59 7.47a.75.75 0 1 0-1.18-.94l-3.12 3.93-.53.66a1 1 0 0 1-.22.2.8.8 0 0 1-.68 0 1 1 0 0 1-.23-.18l-.56-.63-.02-.02-.62-.69a2 2 0 0 0-.64-.48c-.65-.31-1.4-.3-2.03.04q-.37.22-.62.51l-.6.72-3.13 3.94a.75.75 0 1 0 1.18.94l3.12-3.93.53-.66.22-.2a.8.8 0 0 1 .68 0q.04-.02.23.18t.56.63l.02.02.62.69q.28.3.64.48c.65.31 1.4.3 2.04-.04q.36-.22.62-.51l.58-.72z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconChartLineUpAlt;
