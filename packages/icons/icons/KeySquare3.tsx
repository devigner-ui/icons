import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconKeySquare3 = forwardRef<SVGSVGElement, IconProps>(
  function IconKeySquare3(
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
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M16.95 13.61a4.2 4.2 0 0 1-4.18 1.03l-2.6 2.58c-.17.19-.54.31-.81.27l-1.2-.16c-.4-.05-.76-.43-.82-.82l-.16-1.2c-.04-.26.09-.63.27-.82l2.58-2.58a4.17 4.17 0 1 1 6.92 1.7"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m11.12 16.28-.85-.86"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.06 10.7"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M16.56 8.11a3.8 3.8 0 0 0-6.29 3.8l-2.35 2.35a1 1 0 0 0-.24.74l.15 1.09c.05.36.39.7.75.75l1.09.16c.24.03.57-.07.74-.25l.41-.41c.1-.09.1-.25 0-.35l-.97-.97a.4.4 0 0 1 0-.53.4.4 0 0 1 .53 0l.97.97c.09.09.25.09.35 0l1.06-1.05a3.8 3.8 0 0 0 3.8-.93 3.8 3.8 0 0 0 0-5.37M13.92 12a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5"
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
              d="M13.92 12a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
              fill="currentColor"
            />
            <path
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-.3 11.47a3.8 3.8 0 0 1-3.8.93l-1.06 1.05c-.09.09-.25.09-.35 0l-.97-.97a.4.4 0 0 0-.53 0c-.15.14-.14.38 0 .53l.97.97c.1.1.1.26 0 .35l-.41.41a1 1 0 0 1-.74.26l-1.09-.15a1 1 0 0 1-.75-.75l-.15-1.09a1 1 0 0 1 .24-.74l2.35-2.35a3.79 3.79 0 1 1 6.29 1.55"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconKeySquare3;
