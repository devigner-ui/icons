import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconClapperboardEdit = forwardRef<SVGSVGElement, IconProps>(
  function IconClapperboardEdit(
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
              d="M22 10.5c-.02-3.73-.16-5.74-1.46-7.04C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54c1.25 1.24 3.13 1.43 6.54 1.45"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.5 8h-19M7 8l3.5-5.5m3 5.5L17 2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m18.56 13.94.42-.42a1.77 1.77 0 1 1 2.5 2.5l-.42.42m-2.5-2.5s.05.88.84 1.66c.78.79 1.66.84 1.66.84m-2.5-2.5-3.83 3.83c-.26.26-.4.39-.5.53q-.2.25-.34.55c-.08.16-.14.34-.25.68l-.37 1.12-.13.36m7.92-4.57-3.83 3.83c-.26.26-.39.4-.53.5q-.25.2-.55.34c-.16.08-.34.14-.68.25l-1.12.37-.36.13m0 0-.36.12a.48.48 0 0 1-.6-.6l.11-.37m.85.85-.85-.85"
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
              d="M12 2c1.85 0 3.33 0 4.54.09L13.1 7.25H8.4L11.9 2z"
              fill="currentColor"
            />
            <path
              d="M3.46 3.46C4.72 2.21 6.62 2.03 10.1 2L6.6 7.25H2.1c.15-1.76.5-2.93 1.36-3.79"
              fill="currentColor"
            />
            <path
              d="M21.9 7.25c-.15-1.76-.5-2.93-1.36-3.79-.6-.6-1.35-.95-2.34-1.16l-3.3 4.95z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.5 22c-2.12 0-3.18 0-3.84-.66S13 19.62 13 17.5s0-3.18.66-3.84S15.38 13 17.5 13s3.18 0 3.84.66.66 1.72.66 3.84 0 3.18-.66 3.84-1.72.66-3.84.66m2.21-6.71c.39.38.39 1 0 1.39l-.06.06a.2.2 0 0 1-.2.06q-.09 0-.21-.05a1.6 1.6 0 0 1-1.04-1.2.2.2 0 0 1 .06-.2l.06-.06a1 1 0 0 1 1.4 0m-2.36 3.75-.3.28-.3.19-.38.14-1.02.34a.27.27 0 0 1-.34-.34l.34-1.02.14-.38q.09-.16.2-.3.07-.1.27-.3l1.8-1.8c.04-.04.12-.02.14.04a2 2 0 0 0 1.21 1.21c.06.02.08.1.04.14z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.03 8.75Q1.99 10.15 2 12c0 4.71 0 7.07 1.46 8.54C4.93 22 7.3 22 12 22q2.03.01 3.52-.04c-.88-.05-1.45-.2-1.86-.62-.66-.66-.66-1.72-.66-3.84s0-3.18.66-3.84S15.38 13 17.5 13s3.18 0 3.84.66c.41.41.57.98.63 1.86Q22 14.03 22 12q0-1.85-.03-3.25z"
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
              d="M12 2c1.85 0 3.33 0 4.54.09L13.1 7.25H8.4L11.9 2z"
              fill="currentColor"
            />
            <path
              d="M3.46 3.46C4.72 2.21 6.62 2.03 10.1 2L6.6 7.25H2.1c.15-1.76.5-2.93 1.36-3.79"
              fill="currentColor"
            />
            <path
              d="M2 12q0-1.85.03-3.25h19.94q.04 1.4.03 3.25v.26c-.57-.4-1.2-.58-1.83-.66-.71-.1-1.6-.1-2.58-.1h-.18c-.98 0-1.87 0-2.58.1-.78.1-1.58.34-2.23 1-.66.65-.9 1.45-1 2.23-.1.71-.1 1.6-.1 2.58v.18c0 .98 0 1.87.1 2.58.08.62.25 1.26.66 1.83H12c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              fill="currentColor"
            />
            <path
              d="M21.9 7.25c-.15-1.76-.5-2.93-1.36-3.79-.6-.6-1.35-.95-2.34-1.16l-3.3 4.95z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.5 22c-2.12 0-3.18 0-3.84-.66S13 19.62 13 17.5s0-3.18.66-3.84S15.38 13 17.5 13s3.18 0 3.84.66.66 1.72.66 3.84 0 3.18-.66 3.84-1.72.66-3.84.66m2.21-6.71c.39.38.39 1 0 1.39l-.06.06a.2.2 0 0 1-.2.06q-.09 0-.21-.05a1.6 1.6 0 0 1-1.04-1.2.2.2 0 0 1 .06-.2l.06-.06a1 1 0 0 1 1.4 0m-2.36 3.75-.3.28-.3.19-.38.14-1.02.34a.27.27 0 0 1-.34-.34l.34-1.02.14-.38q.09-.16.2-.3.07-.1.27-.3l1.8-1.8c.04-.04.12-.02.14.04a2 2 0 0 0 1.21 1.21c.06.02.08.1.04.14z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconClapperboardEdit;
