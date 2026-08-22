import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTeaCup = forwardRef<SVGSVGElement, IconProps>(function IconTeaCup(
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
            d="M2.32 12.7a5 5 0 0 1-.07-.82 2 2 0 0 1 1.65-1.85c.17-.03.39-.03.82-.03h10.56c.43 0 .65 0 .82.03a2 2 0 0 1 1.65 1.85c0 .18-.02.4-.07.82l-.4 3.43A5.5 5.5 0 0 1 11.81 21H8.19a5.5 5.5 0 0 1-5.47-4.87z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17 17h2a3 3 0 1 0 0-6h-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 2a1.4 1.4 0 0 0 0 2c.55.55.55 1.45 0 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m5 7.5.12-.12c.5-.5.56-1.3.13-1.88a1.44 1.44 0 0 1 .13-1.88l.12-.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m14.5 7.5.12-.12c.5-.5.56-1.3.13-1.88a1.44 1.44 0 0 1 .13-1.88L15 3.5"
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
            d="M2.25 11.88c-.01.18.02.4.07.82l.4 3.43A5.5 5.5 0 0 0 8.19 21h3.62a5.5 5.5 0 0 0 5.02-3.25H19a3.75 3.75 0 1 0 0-7.5h-2.28a2 2 0 0 0-.62-.22c-.17-.03-.39-.03-.82-.03H4.72c-.43 0-.65 0-.82.03a2 2 0 0 0-1.65 1.85m15.49-.13v.13c.02.18 0 .4-.06.82l-.4 3.43-.01.12H19a2.25 2.25 0 1 0 0-4.5z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.53 1.47c.3.3.3.77 0 1.06a.66.66 0 0 0 0 .94c.85.84.85 2.22 0 3.06a.75.75 0 0 1-1.06-1.06.66.66 0 0 0 0-.94 2.16 2.16 0 0 1 0-3.06c.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.03 2.97c.3.3.3.77 0 1.06l-.12.12a.7.7 0 0 0-.06.9c.65.87.57 2.1-.2 2.86l-.12.12a.75.75 0 1 1-1.06-1.06l.12-.12a.7.7 0 0 0 .06-.9 2.2 2.2 0 0 1 .2-2.86l.12-.12c.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.53 2.97c.3.3.3.77 0 1.06l-.12.12a.7.7 0 0 0-.06.9c.65.87.57 2.1-.2 2.86l-.12.12a.75.75 0 1 1-1.06-1.06l.12-.12a.7.7 0 0 0 .06-.9 2.2 2.2 0 0 1 .2-2.86l.12-.12c.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
          </g>
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
            d="M2.25 11.88c-.01.18.02.4.07.82l.4 3.43A5.5 5.5 0 0 0 8.19 21h3.62a5.5 5.5 0 0 0 5.02-3.25H19a3.75 3.75 0 1 0 0-7.5h-2.28a2 2 0 0 0-.62-.22c-.17-.03-.39-.03-.82-.03H4.72c-.43 0-.65 0-.82.03a2 2 0 0 0-1.65 1.85m15.49-.13v.13c.02.18 0 .4-.06.82l-.4 3.43-.01.12H19a2.25 2.25 0 1 0 0-4.5z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.53 1.47c.3.3.3.77 0 1.06a.66.66 0 0 0 0 .94c.85.84.85 2.22 0 3.06a.75.75 0 0 1-1.06-1.06.66.66 0 0 0 0-.94 2.16 2.16 0 0 1 0-3.06c.3-.3.77-.3 1.06 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.03 2.97c.3.3.3.77 0 1.06l-.12.12a.7.7 0 0 0-.06.9c.65.87.57 2.1-.2 2.86l-.12.12a.75.75 0 1 1-1.06-1.06l.12-.12a.7.7 0 0 0 .06-.9 2.2 2.2 0 0 1 .2-2.86l.12-.12c.3-.3.77-.3 1.06 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.53 2.97c.3.3.3.77 0 1.06l-.12.12a.7.7 0 0 0-.06.9c.65.87.57 2.1-.2 2.86l-.12.12a.75.75 0 1 1-1.06-1.06l.12-.12a.7.7 0 0 0 .06-.9 2.2 2.2 0 0 1 .2-2.86l.12-.12c.3-.3.77-.3 1.06 0"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTeaCup;
