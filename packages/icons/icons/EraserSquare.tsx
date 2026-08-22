import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEraserSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconEraserSquare(
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
              d="m7.67 11.6.53.54zM6 13.98h-.75zM10.03 18v.75zm1.58-10.33-.53-.53zm1.04 8.4a.75.75 0 1 0 1.06-1.06zM9 10.3a.75.75 0 1 0-1.06 1.06zm6.81 1.57-3.94 3.94 1.06 1.06 3.94-3.94zm-7.6.28 3.94-3.94-1.06-1.06-3.94 3.94zm0 3.66a16 16 0 0 1-1.19-1.26c-.22-.3-.26-.46-.26-.57h-1.5c0 .57.24 1.04.57 1.48q.5.6 1.32 1.41zm-1.06-4.72q-.83.8-1.32 1.41c-.33.43-.57.9-.57 1.48h1.5c0-.12.04-.27.26-.57.24-.31.62-.7 1.19-1.26zm4.72 4.72c-.57.57-.94.95-1.26 1.19-.3.22-.45.26-.57.26v1.5a2.4 2.4 0 0 0 1.48-.57q.6-.5 1.41-1.32zm-4.72 1.06q.8.82 1.41 1.32c.44.33.9.57 1.48.57v-1.5c-.11 0-.27-.04-.57-.26-.31-.24-.69-.62-1.26-1.19zM15.8 8.2c.57.57.95.95 1.19 1.26.22.3.26.46.26.57h1.5a2.4 2.4 0 0 0-.57-1.48q-.5-.6-1.32-1.41zm1.06 4.72q.82-.8 1.32-1.41c.33-.43.57-.9.57-1.48h-1.5c0 .12-.04.27-.26.57-.24.32-.62.7-1.19 1.26zm0-5.78q-.8-.83-1.41-1.32a2.4 2.4 0 0 0-1.48-.57v1.5c.11 0 .27.04.57.26.31.24.69.62 1.26 1.2zM12.14 8.2c.57-.57.94-.95 1.26-1.19.3-.22.45-.26.57-.26v-1.5a2.4 2.4 0 0 0-1.48.57q-.6.5-1.41 1.32zm1.57 6.81L9 10.3l-1.06 1.06 4.72 4.72z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.7 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46"
              fill="currentColor"
            />
            <path
              d="M8.99 10.29 13.7 15l2.62-2.62c1.11-1.1 1.67-1.67 1.67-2.36s-.56-1.25-1.67-2.36S14.66 6 13.97 6s-1.25.56-2.36 1.67z"
              fill="currentColor"
            />
            <path
              d="m12.4 16.33.25-.26-4.72-4.72-.26.26C6.56 12.72 6 13.28 6 13.97s.56 1.25 1.67 2.36S9.34 18 10.03 18c.7 0 1.25-.56 2.36-1.67"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46M9 10.3l4.7 4.7 2.62-2.62c1.11-1.1 1.67-1.67 1.67-2.36s-.56-1.25-1.67-2.36S14.66 6 13.97 6s-1.25.56-2.36 1.67zm3.4 6.04.26-.26-4.72-4.72-.26.26C6.56 12.72 6 13.28 6 13.97s.56 1.25 1.67 2.36S9.34 18 10.03 18c.7 0 1.25-.56 2.36-1.67"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconEraserSquare;
