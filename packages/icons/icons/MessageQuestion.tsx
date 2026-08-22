import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMessageQuestion = forwardRef<SVGSVGElement, IconProps>(
  function IconMessageQuestion(
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
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M17 18.43h-4l-4.45 2.96A1 1 0 0 1 7 20.56v-2.13c-3 0-5-2-5-5v-6c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5"
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 11.36v-.21c0-.68.42-1.04.84-1.33.41-.28.82-.64.82-1.3a1.66 1.66 0 1 0-3.32 0M12 13.75"
              opacity={duotone ? "0.4" : "1"}
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
              d="M17.67 18.43h-4l-4.45 2.96a1 1 0 0 1-1.55-.83v-2.13c-3 0-5-2-5-5v-6c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5"
              fill="currentColor"
            />
            <path
              d="M12.67 12.11a.76.76 0 0 1-.75-.75v-.21c0-1.16.85-1.73 1.17-1.95.37-.25.49-.42.49-.68 0-.5-.41-.91-.91-.91s-.91.41-.91.91c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75 2.41 2.41 0 0 1 4.82 0c0 1.14-.84 1.71-1.15 1.92-.39.26-.51.43-.51.71v.21c0 .42-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M12.67 14.6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"
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
              d="M17.67 2.43h-10c-3 0-5 2-5 5v6c0 3 2 5 5 5v2.13a1 1 0 0 0 1.55.83l4.45-2.96h4c3 0 5-2 5-5v-6c0-3-2-5-5-5m-5 12.17a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m1.26-4.15c-.39.26-.51.43-.51.71v.21c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.21c0-1.16.85-1.73 1.17-1.95.37-.25.49-.42.49-.68 0-.5-.41-.91-.91-.91s-.91.41-.91.91c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75 2.41 2.41 0 0 1 4.82 0c0 1.14-.84 1.71-1.15 1.92"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMessageQuestion;
