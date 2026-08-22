import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFilterSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconFilterSquare(
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
              d="M8.83 6.65h7.67c.64 0 1.16.52 1.16 1.16v1.28c0 .47-.29 1.05-.58 1.34l-2.5 2.21c-.35.29-.58.87-.58 1.34v2.5c0 .35-.23.81-.52.99l-.81.51c-.76.47-1.8-.06-1.8-.99v-3.08c0-.41-.23-.93-.47-1.22l-2.21-2.33a2 2 0 0 1-.52-1.16V7.87c0-.7.52-1.22 1.16-1.22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
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
              d="M22.67 7.81v8.38c0 3.64-2.17 5.81-5.81 5.81H8.48l-.59-.02a6 6 0 0 1-3.09-1.03 4 4 0 0 1-1.08-1.08 6 6 0 0 1-1.05-3.68V7.81c0-3.44 1.94-5.57 5.22-5.78Q8.18 2 8.48 2h8.38q2.24 0 3.68 1.05.64.44 1.08 1.08a6 6 0 0 1 1.05 3.68"
              fill="currentColor"
            />
            <path
              d="M8.83 6.65h7.67c.64 0 1.16.52 1.16 1.16v1.28c0 .47-.29 1.05-.58 1.34l-2.5 2.21c-.35.29-.58.87-.58 1.34v2.5c0 .35-.23.81-.52.99l-.81.51c-.76.47-1.8-.06-1.8-.99v-3.08c0-.41-.23-.93-.47-1.22l-2.21-2.33a2 2 0 0 1-.52-1.16V7.87c0-.7.52-1.22 1.16-1.22"
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
              d="M21.62 4.13a4 4 0 0 0-1.08-1.08A6 6 0 0 0 16.86 2H8.48q-.3 0-.59.03c-3.28.21-5.22 2.34-5.22 5.78v8.38q0 2.24 1.05 3.68.44.64 1.08 1.08 1.24.9 3.09 1.03l.59.02h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81q0-2.25-1.05-3.68M9.13 10.68l-.49-.51a1.7 1.7 0 0 1-.47-1.05v-1.2c0-.63.47-1.1 1.05-1.1h2.14c.41 0 .66.45.44.8L9.95 10.6a.52.52 0 0 1-.82.08m8.04-1.66c0 .42-.26.94-.52 1.2l-2.25 1.99a1.7 1.7 0 0 0-.52 1.2v2.25c0 .31-.21.73-.47.89l-.74.47c-.68.42-1.62-.05-1.62-.89v-2.77a2 2 0 0 0-.42-1.1l-.24-.26a.54.54 0 0 1-.07-.64L13 7.06q.16-.24.44-.25h2.68c.58 0 1.05.47 1.05 1.05z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFilterSquare;
