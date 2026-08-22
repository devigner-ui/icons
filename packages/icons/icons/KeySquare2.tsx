import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconKeySquare2 = forwardRef<SVGSVGElement, IconProps>(
  function IconKeySquare2(
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
              d="M17.26 11.44a4.73 4.73 0 1 0-4.74-4.72c0 1.2.55 2.09.55 2.09l-5.73 5.7c-.26.26-.62.93 0 1.54l.66.66c.26.22.9.53 1.43 0l.78-.77c.77.77 1.65.33 1.98-.1.55-.78-.11-1.55-.11-1.55l.22-.21c1.06 1.05 1.98.43 2.32 0 .55-.77 0-1.54 0-1.54-.23-.44-.67-.44-.11-.99l.66-.66c.53.44 1.61.55 2.1.55"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.26 8.37a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M22 6.72c0 2.6-2.12 4.72-4.74 4.72-.48 0-1.56-.1-2.1-.55l-.65.66c-.4.39-.29.5-.12.69q.12.11.23.3s.55.77 0 1.54c-.34.43-1.26 1.05-2.32 0l-.22.21s.66.77.11 1.54c-.33.44-1.21.88-1.98.11l-.78.77c-.52.53-1.17.22-1.43 0l-.66-.66c-.62-.61-.26-1.28 0-1.54l5.73-5.7s-.55-.88-.55-2.09a4.73 4.73 0 0 1 9.48 0m-3.09 0a1.65 1.65 0 1 1-3.3 0 1.65 1.65 0 0 1 3.3 0"
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
              d="M22 6.72c0 2.6-2.12 4.72-4.74 4.72-.48 0-1.56-.1-2.1-.55l-.65.66c-.4.39-.29.5-.12.69q.12.11.23.3s.55.77 0 1.54c-.34.43-1.26 1.05-2.32 0l-.22.21s.66.77.11 1.54c-.33.44-1.21.88-1.98.11l-.78.77c-.52.53-1.17.22-1.43 0l-.66-.66c-.62-.61-.26-1.28 0-1.54l5.73-5.7s-.55-.88-.55-2.09a4.73 4.73 0 0 1 9.48 0m-3.09 0a1.65 1.65 0 1 1-3.3 0 1.65 1.65 0 0 1 3.3 0"
              fill="currentColor"
            />
            <path
              d="M13.2 2a6.2 6.2 0 0 0-1.9 6.46l-5.02 5a2.5 2.5 0 0 0 0 3.65l.66.66.09.08c.3.25.77.54 1.37.62.66.1 1.45-.06 2.09-.69q.58.14 1.16.03a3 3 0 0 0 1.76-1.1q.2-.29.31-.56l.29-.04a3 3 0 0 0 1.82-1.16c.53-.74.59-1.5.5-2.08a6.2 6.2 0 0 0 5.68-2.1L21.99 12c0 4.71 0 7.07-1.46 8.54S16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconKeySquare2;
