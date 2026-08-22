import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCallReceived = forwardRef<SVGSVGElement, IconProps>(
  function IconCallReceived(
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
              d="M22.64 18.33q0 .54-.25 1.09-.25.54-.68 1.02a4.5 4.5 0 0 1-1.64 1.18q-.9.38-1.95.38a8 8 0 0 1-3.26-.73 18 18 0 0 1-3.44-1.98 29 29 0 0 1-3.28-2.8 28 28 0 0 1-2.79-3.27 18 18 0 0 1-1.96-3.41 8 8 0 0 1-.72-3.27q0-1.02.36-1.93a5 5 0 0 1 1.15-1.67A3 3 0 0 1 6.26 2q.43 0 .81.18.4.17.67.56l2.32 3.27q.27.37.4.7.14.32.14.61 0 .36-.21.71a3 3 0 0 1-.56.71l-.76.79a.5.5 0 0 0-.16.4q0 .12.03.23l.08.2q.27.5.93 1.28.67.78 1.45 1.58.8.8 1.59 1.47.78.66 1.29.92l.18.08q.12.04.25.04.25 0 .41-.17l.76-.75q.38-.38.72-.56.34-.21.71-.21.28 0 .61.13t.7.39l3.31 2.35q.39.27.55.64t.16.78"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m15.67 5.97 2 2 4-4"
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
              d="M17.67 8.72a.7.7 0 0 1-.53-.22l-2-2a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.47 1.47 3.47-3.46a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-4 4a1 1 0 0 1-.53.21"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m12.46 14.21-3.27 3.27q-.54-.48-1.05-.99a28 28 0 0 1-2.79-3.27 18 18 0 0 1-1.96-3.41 8 8 0 0 1-.72-3.27q0-1.02.36-1.93a5 5 0 0 1 1.15-1.67A3 3 0 0 1 6.26 2q.43 0 .81.18.4.17.67.56l2.32 3.27q.27.37.4.7.14.32.14.61 0 .36-.21.71a3 3 0 0 1-.56.71l-.76.79a.5.5 0 0 0-.16.4q0 .12.03.23l.08.2q.27.5.93 1.28.67.78 1.45 1.58.54.53 1.06.99"
              fill="currentColor"
            />
            <path
              d="M22.64 18.33q0 .43-.15.85l-.1.24q-.25.54-.68 1.02a4.5 4.5 0 0 1-1.64 1.18l-.03.01q-.89.36-1.92.37a8 8 0 0 1-3.26-.73 18 18 0 0 1-3.44-1.98q-.59-.43-1.15-.89l3.27-3.27q.42.31.74.48l.18.08q.12.04.25.04.25 0 .4-.17l.77-.75q.38-.38.72-.56.34-.21.7-.21.3 0 .62.13.33.13.7.39l3.31 2.35q.39.27.55.64t.16.78"
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
              d="M17.67 8.72a.7.7 0 0 1-.53-.22l-2-2a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.47 1.47 3.47-3.46a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-4 4a1 1 0 0 1-.53.21"
              fill="currentColor"
            />
            <path
              d="M11.72 14.95 9.87 16.8a1 1 0 0 1-1.41.01l-.33-.32a28 28 0 0 1-2.79-3.27 18 18 0 0 1-1.96-3.41 9 9 0 0 1-.71-3.27q0-1.02.36-1.93a5 5 0 0 1 1.15-1.67A3 3 0 0 1 6.26 2q.43 0 .81.18.4.17.67.56l2.32 3.27q.27.37.4.7.14.32.14.61 0 .36-.21.71a3 3 0 0 1-.56.71l-.76.79a.5.5 0 0 0-.16.4q0 .12.03.23l.08.2q.27.5.93 1.28.67.78 1.45 1.58l.31.3a1 1 0 0 1 .01 1.43"
              fill="currentColor"
            />
            <path
              d="M22.64 18.33q0 .43-.15.85l-.1.24q-.25.54-.68 1.02a4.5 4.5 0 0 1-1.64 1.18l-.03.01q-.89.36-1.92.37a8 8 0 0 1-3.26-.73 18 18 0 0 1-3.44-1.98q-.59-.43-1.15-.89l3.27-3.27q.42.31.74.48l.18.08q.12.04.25.04.25 0 .4-.17l.77-.75q.38-.38.72-.56.34-.21.7-.21.3 0 .62.13.33.13.7.39l3.31 2.35q.39.27.55.64t.16.78"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCallReceived;
