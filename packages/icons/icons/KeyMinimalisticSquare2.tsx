import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconKeyMinimalisticSquare2 = forwardRef<SVGSVGElement, IconProps>(
  function IconKeyMinimalisticSquare2(
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
              d="m20.31 3.69.53-.53zm0 8.14.53.53zm-8.14-8.14.54.53zm-1.72 6.37-.53-.53zm-3.09 3.1.53.52zm3.49 3.48-.53-.53zm1.03-1.03.53.53zm2.06-2.06-.53-.53zm-6.93.6-.75.1zm.2 1.75-.75.08zm.9.9-.1.75zm1.73.2.08-.75zm-2.4-.61.53-.53zm.17.17-.53.53zm3.06-7.37-.73.19zm4.14 4.14-.19.73zm-3.86.3A.75.75 0 0 0 9.9 14.7zm8.83-9.41a5 5 0 0 1 0 7.08l1.06 1.06a6.5 6.5 0 0 0 0-9.2zm1.06-1.06a6.5 6.5 0 0 0-9.2 0l1.06 1.06a5 5 0 0 1 7.08 0zM9.92 9.53l-3.09 3.1 1.06 1.05 3.1-3.1zm1.46 7.64 1.03-1.03-1.06-1.06-1.03 1.03zm1.03-1.03 2.06-2.06-1.06-1.06-2.06 2.06zm-6.15-1.9.2 1.74 1.49-.16-.2-1.74zm1.76 3.3 1.74.2.16-1.5-1.74-.19zm-1.11-.62.17.17 1.06-1.06-.17-.17zm1.27-.87-.04-.02-1.06 1.07q.39.4.94.46zm-1.72-.07q.06.55.45.94l1.06-1.06-.02-.04zm3.86.13q-.16.15-.4.14l-.16 1.49c.6.06 1.2-.14 1.62-.57zm-3.49-3.49a2 2 0 0 0-.57 1.62l1.5-.16a.5.5 0 0 1 .13-.4zm4.57-3.61a5 5 0 0 1 1.3-4.8l-1.06-1.05a6.5 6.5 0 0 0-1.7 6.22zm8.38 2.29A5 5 0 0 1 15 12.6l-.37 1.46a6.5 6.5 0 0 0 6.22-1.7zm-5.3 2.78.04-.03h.1L15 12.6a1.7 1.7 0 0 0-1.58.42zm-3.5-3.5c.44-.43.55-1.05.42-1.57l-1.46.37v.1q0 .04-.02.05zm1.43 4.5-1.46-1.45L9.9 14.7l1.46 1.44z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.52 8.48a.9.9 0 0 1 0-1.3l-1.06-1.05a2.4 2.4 0 0 0 0 3.41zm1.3 0a.9.9 0 0 1-1.3 0l-1.06 1.06a2.4 2.4 0 0 0 3.42 0zm0-1.3c.35.36.35.94 0 1.3l1.06 1.06c.94-.94.94-2.47 0-3.41zm1.06-1.05a2.4 2.4 0 0 0-3.42 0l1.06 1.06a.9.9 0 0 1 1.3 0z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 15c-.06 2.79-.33 4.42-1.45 5.53C19.1 22 16.73 22 12.01 22s-7.08 0-8.54-1.47C2 19.07 2 16.71 2 12s0-7.08 1.47-8.54C4.58 2.33 6.2 2.06 9 2"
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
              d="M2 12c0-4.7 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.96 8.41a5.73 5.73 0 0 1-7.15 4.92.9.9 0 0 0-.87.22l-1.53 1.53-1.46-1.45A.75.75 0 1 0 9.9 14.7l1.45 1.44-.5.5c-.27.26-.64.4-1 .35l-1.75-.2a1 1 0 0 1-.49-.23l-.17-.17a1 1 0 0 1-.24-.49L7 14.16c-.03-.37.1-.74.36-1l3.1-3.1a.9.9 0 0 0 .21-.87 5.75 5.75 0 0 1 4.92-7.15q1.35.04 2.35.21a5.7 5.7 0 0 1 3.8 3.81q.19 1 .22 2.35M15 6.66A1.67 1.67 0 1 1 17.35 9a1.67 1.67 0 0 1-2.36-2.35"
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
              d="M9.62 18.98c.98.1 1.95-.23 2.64-.93l2.66-2.65A7.8 7.8 0 0 0 22 12.96c0 4.08-.1 6.21-1.46 7.58C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.83 2.1 6.96 2.01 11.05 2l-.29.27A7.8 7.8 0 0 0 8.6 9.08l-2.65 2.66a3.2 3.2 0 0 0-.93 2.64l.2 1.74c.06.64.35 1.23.8 1.68l.18.18c.45.45 1.04.74 1.68.8z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.96 8.41a5.73 5.73 0 0 1-7.15 4.92.9.9 0 0 0-.87.22l-1.53 1.53-1.46-1.45A.75.75 0 1 0 9.9 14.7l1.45 1.44-.5.5c-.27.26-.64.4-1 .35l-1.75-.2a1 1 0 0 1-.49-.23l-.17-.17a1 1 0 0 1-.24-.49L7 14.16c-.03-.37.1-.74.36-1l3.1-3.1a.9.9 0 0 0 .21-.87 5.75 5.75 0 0 1 4.92-7.15q1.35.04 2.35.21a5.7 5.7 0 0 1 3.8 3.81q.19 1 .22 2.35M15 6.66A1.67 1.67 0 1 1 17.35 9a1.67 1.67 0 0 1-2.36-2.35"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconKeyMinimalisticSquare2;
