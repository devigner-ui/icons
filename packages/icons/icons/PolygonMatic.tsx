import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPolygonMatic = forwardRef<SVGSVGElement, IconProps>(
  function IconPolygonMatic(
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
              d="m12.67 12.1-4.5 2.6-4.5-2.6V6.9l4.5-2.6 4.5 2.6v1.57"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m12.67 12.1 4.5-2.6 4.5 2.6v5.19l-4.5 2.6-4.5-2.6v-1.65"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
            <path d="M24.67 0h-24v24h24z" fill="none" />
            <path
              d="m22.05 11.45-4.5-2.6a.8.8 0 0 0-.75 0l-4.5 2.6-.01.01-4.12 2.38-3.75-2.17V7.33l3.75-2.17 3.75 2.17v1.14c0 .41.34.75.75.75s.75-.34.75-.75V6.9a.7.7 0 0 0-.38-.65l-4.5-2.6a.8.8 0 0 0-.75 0l-4.5 2.6a.8.8 0 0 0-.38.65v5.2c0 .27.14.52.38.65l4.5 2.6q.18.1.38.1t.38-.1l4.5-2.6.01-.01 4.12-2.38 3.75 2.17v4.33l-3.75 2.17-3.75-2.17v-1.22a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.65c0 .27.14.52.38.65l4.5 2.6q.18.1.38.1t.38-.1l4.5-2.6a.8.8 0 0 0 .38-.65v-5.2a.8.8 0 0 0-.4-.64"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.17 8.35v2.31a1 1 0 0 0 .5.87l2 1.15a1 1 0 0 0 1 0l2-1.15a1 1 0 0 0 .5-.87V8.35a1 1 0 0 0-.5-.87l-2-1.15a1 1 0 0 0-1 0l-2 1.15a1 1 0 0 0-.5.87"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.17 13.55v2.31a1 1 0 0 0 .5.87l2 1.15a1 1 0 0 0 1 0l2-1.15a1 1 0 0 0 .5-.87v-2.31a1 1 0 0 0-.5-.87l-2-1.15a1 1 0 0 0-1 0l-2 1.15a1 1 0 0 0-.5.87"
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
              d="m22.05 11.45-4.5-2.6a.8.8 0 0 0-.75 0l-4.5 2.6-.01.01-4.12 2.38-3.75-2.17V7.34l3.75-2.17 3.75 2.17v1.14c0 .41.34.75.75.75s.75-.34.75-.75V6.9a.7.7 0 0 0-.38-.65l-4.5-2.6a.8.8 0 0 0-.75 0l-4.5 2.6a.8.8 0 0 0-.38.65v5.2c0 .27.14.52.38.65l4.5 2.6q.18.1.38.1t.38-.1l4.5-2.6.01-.01 4.12-2.38 3.75 2.17v4.33l-3.75 2.17-3.75-2.17v-1.22a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.65c0 .27.14.52.38.65l4.5 2.6q.18.1.38.1t.38-.1l4.5-2.6a.8.8 0 0 0 .38-.65v-5.2a.8.8 0 0 0-.4-.64"
              fill="currentColor"
            />
            <path
              d="M5.17 8.35v2.31a1 1 0 0 0 .5.87l2 1.15a1 1 0 0 0 1 0l2-1.15a1 1 0 0 0 .5-.87V8.35a1 1 0 0 0-.5-.87l-2-1.15a1 1 0 0 0-1 0l-2 1.15a1 1 0 0 0-.5.87"
              fill="currentColor"
            />
            <path
              d="M14.17 13.55v2.31a1 1 0 0 0 .5.87l2 1.15a1 1 0 0 0 1 0l2-1.15a1 1 0 0 0 .5-.87v-2.31a1 1 0 0 0-.5-.87l-2-1.15a1 1 0 0 0-1 0l-2 1.15a1 1 0 0 0-.5.87"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPolygonMatic;
