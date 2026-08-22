import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconListHeartMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconListHeartMinimalistic(
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
              d="M20 6H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 16H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 11H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m16.49 16.3.45-.6zm1.01-6.2-.54.53a.75.75 0 0 0 1.08 0zm1.01 6.2.44.61zm-1.01.51v-.75zm-.57-1.1a14 14 0 0 1-2.12-1.9c-.68-.78-1.06-1.5-1.06-2.1h-1.5c0 1.17.7 2.25 1.43 3.09.76.86 1.68 1.6 2.37 2.11zm-3.18-4c0-1.1.5-1.69 1-1.88.52-.19 1.35-.09 2.21.8l1.08-1.05c-1.16-1.18-2.59-1.61-3.81-1.15-1.24.46-1.98 1.72-1.98 3.29zm5.2 5.2c.69-.5 1.6-1.25 2.37-2.11.73-.84 1.43-1.92 1.43-3.09h-1.5q-.02.92-1.06 2.1c-.66.75-1.48 1.42-2.12 1.9zm3.8-5.2c0-1.56-.74-2.82-1.98-3.28-1.22-.46-2.65-.03-3.8 1.15l1.07 1.05c.86-.89 1.69-.99 2.2-.8.52.2 1.01.78 1.01 1.88zm-6.7 5.2c.39.3.83.65 1.45.65v-1.5l-.1-.03-.46-.33zm2.02-1.2-.47.32-.1.03v1.5c.62 0 1.06-.36 1.45-.65z"
              fill="currentColor"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.25 6c0-.41.34-.75.75-.75h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
                fill="currentColor"
              />
            </g>
            <path
              d="M13 11.72c0 1.75 2.16 3.61 3.49 4.59.45.33.68.5 1.01.5s.56-.17 1.01-.5c1.33-.98 3.49-2.84 3.49-4.6 0-2.67-2.48-3.67-4.5-1.6-2.02-2.07-4.5-1.07-4.5 1.6"
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
              d="M2.25 6c0-.41.34-.75.75-.75h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M13 11.72c0 1.75 2.16 3.61 3.49 4.59.45.33.68.5 1.01.5s.56-.17 1.01-.5c1.33-.98 3.49-2.84 3.49-4.6 0-2.67-2.48-3.67-4.5-1.6-2.02-2.07-4.5-1.07-4.5 1.6"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconListHeartMinimalistic;
