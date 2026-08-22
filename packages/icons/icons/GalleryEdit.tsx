import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGalleryEdit = forwardRef<SVGSVGElement, IconProps>(
  function IconGalleryEdit(
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
              d="M22 12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m2 12.5 1.75-1.53a2.3 2.3 0 0 1 3.14.1l4.3 4.3a2 2 0 0 0 2.56.21l.3-.2a3 3 0 0 1 3.73.22L21 18.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m18.56 2.94.42-.42a1.77 1.77 0 0 1 2.5 2.5l-.42.42m-2.5-2.5s.05.88.84 1.66c.78.79 1.66.84 1.66.84m-2.5-2.5-3.83 3.83c-.26.26-.4.39-.5.53q-.2.25-.34.55c-.08.16-.14.34-.25.68l-.37 1.12m7.8-4.21-3.84 3.83c-.26.26-.39.4-.53.5q-.25.2-.55.34c-.16.08-.34.14-.68.25l-1.12.37m0 0-.72.25a.48.48 0 0 1-.6-.6l.24-.73m1.08 1.08-1.08-1.08"
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
              d="M22 12.7q.02 2.2-.1 3.74a8 8 0 0 1-.74 3.01q-.29.54-.73.98a5.3 5.3 0 0 1-3.23 1.4c-1.32.17-3 .17-5.15.17h-.1c-2.15 0-3.83 0-5.15-.18a5.3 5.3 0 0 1-3.23-1.39 5 5 0 0 1-1.33-2.8c-.2-1.11-.23-2.5-.24-4.23v-1.45c0-2.15 0-3.83.18-5.15a5.3 5.3 0 0 1 1.39-3.23 5.3 5.3 0 0 1 3.23-1.4C7.97 2.03 9.47 2 11.3 2a.7.7 0 1 1 0 1.4c-1.85 0-3.23.01-4.31.16-1.19.16-1.9.46-2.44 1-.53.52-.83 1.24-1 2.43-.15 1.2-.15 2.8-.15 5.01v.78l.93-.81c.84-.74 2.12-.7 2.92.1l3.99 3.99c.64.64 1.64.72 2.38.2l.28-.2a2.8 2.8 0 0 1 3.47.22l2.64 2.37c.26-.56.42-1.29.5-2.32.08-.97.1-2.15.1-3.63a.7.7 0 0 1 1.39 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.5 11c-2.12 0-3.18 0-3.84-.66S13 8.62 13 6.5s0-3.18.66-3.84S15.38 2 17.5 2s3.18 0 3.84.66S22 4.38 22 6.5s0 3.18-.66 3.84-1.72.66-3.84.66m2.21-6.71c.39.38.39 1 0 1.39l-.06.06a.2.2 0 0 1-.2.06q-.09 0-.21-.05a1.6 1.6 0 0 1-1.04-1.2.2.2 0 0 1 .06-.2l.06-.06a1 1 0 0 1 1.4 0m-2.36 3.75-.3.28-.3.19-.38.14-1.02.34a.27.27 0 0 1-.34-.34l.34-1.02.14-.38q.09-.16.2-.3.07-.1.27-.3l1.8-1.8c.04-.04.12-.02.14.04A2 2 0 0 0 19.1 6.1c.06.02.08.1.04.14z"
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
              d="M22 12.7q.02 2.2-.1 3.74a8 8 0 0 1-.74 3.01q-.29.54-.73.98a5.3 5.3 0 0 1-3.23 1.4c-1.32.17-3 .17-5.15.17h-.1c-2.15 0-3.83 0-5.15-.18a5.3 5.3 0 0 1-3.23-1.39 5 5 0 0 1-1.33-2.8c-.2-1.11-.23-2.5-.24-4.23v-1.45c0-2.15 0-3.83.18-5.15a5.3 5.3 0 0 1 1.39-3.23 5.3 5.3 0 0 1 3.23-1.4C7.97 2.03 9.47 2 11.3 2a.7.7 0 1 1 0 1.4c-1.85 0-3.23.01-4.31.16-1.19.16-1.9.46-2.44 1-.53.52-.83 1.24-1 2.43-.15 1.2-.15 2.8-.15 5.01v.78l.93-.81c.84-.74 2.12-.7 2.92.1l3.99 3.99c.64.64 1.64.72 2.38.2l.28-.2a2.8 2.8 0 0 1 3.47.22l2.64 2.37c.26-.56.42-1.29.5-2.32.08-.97.1-2.15.1-3.63a.7.7 0 0 1 1.39 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.5 11c-2.12 0-3.18 0-3.84-.66S13 8.62 13 6.5s0-3.18.66-3.84S15.38 2 17.5 2s3.18 0 3.84.66S22 4.38 22 6.5s0 3.18-.66 3.84-1.72.66-3.84.66m2.21-6.71c.39.38.39 1 0 1.39l-.06.06a.2.2 0 0 1-.2.06q-.09 0-.21-.05a1.6 1.6 0 0 1-1.04-1.2.2.2 0 0 1 .06-.2l.06-.06a1 1 0 0 1 1.4 0m-2.36 3.75-.3.28-.3.19-.38.14-1.02.34a.27.27 0 0 1-.34-.34l.34-1.02.14-.38q.09-.16.2-.3.07-.1.27-.3l1.8-1.8c.04-.04.12-.02.14.04A2 2 0 0 0 19.1 6.1c.06.02.08.1.04.14z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGalleryEdit;
