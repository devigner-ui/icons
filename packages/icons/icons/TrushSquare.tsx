import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTrushSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconTrushSquare(
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
                d="M18.57 9.05A66 66 0 0 0 12 8.72q-1.95 0-3.89.2l-1.34.13"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m10.38 8.39.14-.86c.1-.62.18-1.09 1.29-1.09h1.72c1.1 0 1.19.49 1.29 1.09l.14.85"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m17.16 9.13-.43 6.6c-.07 1.03-.13 1.83-1.96 1.83h-4.21c-1.83 0-1.89-.8-1.96-1.83l-.43-6.6"
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
              d="M16.86 2H8.49C4.85 2 2.68 4.17 2.68 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M17.53 8.46q-1.25-.11-2.36-.18l-.08-.48c-.07-.48-.22-1.47-1.73-1.47h-1.39c-1.49 0-1.65.95-1.73 1.46l-.08.47-1.28.09-1.09.11a.7.7 0 0 0-.61.75.7.7 0 0 0 .68.62h.07l1.08-.11q.9-.08 1.81-.13 1.83-.07 3.67.03 1.35.06 2.9.21h.06c.35 0 .65-.27.68-.62a.66.66 0 0 0-.6-.75"
              fill="currentColor"
            />
            <path
              d="M16.5 11.1a1 1 0 0 0-.67-.29H9.51q-.4.01-.67.29a1 1 0 0 0-.24.69l.31 3.96c.06.85.13 1.91 2.05 1.91h3.42c1.92 0 1.99-1.06 2.05-1.91l.31-3.96a1 1 0 0 0-.24-.69"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-.43 13.76c-.06.85-.13 1.91-2.05 1.91h-3.42c-1.91 0-1.99-1.06-2.05-1.91L8.6 11.8a1 1 0 0 1 .24-.7 1 1 0 0 1 .67-.29h6.32q.4.01.67.29.26.3.24.69zm1.04-5.94h-.06a56 56 0 0 0-6.57-.24q-.9.04-1.81.13l-1.09.11h-.07a.7.7 0 0 1-.68-.62.7.7 0 0 1 .61-.74l1.09-.11q.64-.06 1.28-.09l.08-.47c.08-.5.23-1.46 1.73-1.46h1.39c1.51 0 1.66.99 1.73 1.47l.08.48q1.11.06 2.36.18a.7.7 0 0 1 .62.75.7.7 0 0 1-.69.61"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTrushSquare;
