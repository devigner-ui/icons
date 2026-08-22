import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSnow = forwardRef<SVGSVGElement, IconProps>(function IconSnow(
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
            d="M16.17 12q-.01.96-.47 1.75a3.5 3.5 0 1 1 .47-1.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.67 8.5V3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 21v-5.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.67 3h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.67 21h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.64 10.25 4.88 7.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m20.46 16.5-4.76-2.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m3.88 9.23 2-3.46"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m19.46 18.23 2-3.46"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m20.46 7.5-4.76 2.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.64 13.75 4.88 16.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m21.46 9.23-2-3.46"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m5.88 18.23-2-3.46"
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
            d="M10.67 3.75h1.25V8.5c0 .41.34.75.75.75s.75-.34.75-.75V3.75h1.25c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-4a.76.76 0 0 0-.75.75c0 .41.34.75.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.67 20.25h-1.25V15.5a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v4.75h-1.25a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h4c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.5 9.88q.19.1.37.1c.26 0 .51-.13.65-.38l.63-1.08 4.12 2.38q.17.1.37.1c.26 0 .51-.13.65-.38a.75.75 0 0 0-.27-1.02L5.91 7.22l.62-1.08a.75.75 0 0 0-1.29-.75l-2 3.46c-.22.37-.1.82.26 1.03"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.84 14.12a.74.74 0 0 0-1.02.27l-.63 1.08-4.12-2.37a.75.75 0 0 0-.75 1.29l4.11 2.38-.62 1.08a.75.75 0 0 0 .64 1.12c.26 0 .51-.13.65-.38l2-3.46c.22-.35.1-.8-.26-1.01"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.44 7.22 15.33 9.6a.74.74 0 0 0-.27 1.02c.14.24.39.38.65.38q.2 0 .37-.1l4.11-2.38.63 1.08c.14.24.39.38.65.38q.2 0 .37-.1a.74.74 0 0 0 .27-1.02l-2-3.46a.74.74 0 0 0-1.02-.27.74.74 0 0 0-.27 1.02z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m5.9 16.78 4.11-2.38a.74.74 0 0 0 .27-1.02.74.74 0 0 0-1.02-.27l-4.11 2.38-.63-1.08a.74.74 0 0 0-1.02-.27.74.74 0 0 0-.27 1.02l2 3.46c.14.24.39.38.65.38q.2 0 .37-.1a.74.74 0 0 0 .27-1.02z"
            fill="currentColor"
          />
          <path
            d="M16.17 12q-.01.96-.47 1.75a3.5 3.5 0 1 1 .47-1.75"
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
            d="M10.67 3.75h1.25V8.5c0 .41.34.75.75.75s.75-.34.75-.75V3.75h1.25c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-4a.76.76 0 0 0-.75.75c0 .41.34.75.75.75"
            fill="currentColor"
          />
          <path
            d="M14.67 20.25h-1.25V15.5a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v4.75h-1.25a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h4c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
            fill="currentColor"
          />
          <path
            d="M3.5 9.88q.19.1.37.1c.26 0 .51-.13.65-.38l.63-1.08 4.12 2.38q.17.1.37.1a.75.75 0 0 0 .38-1.4L5.9 7.22l.62-1.08a.75.75 0 0 0-1.29-.75l-2 3.46a.75.75 0 0 0 .27 1.03"
            fill="currentColor"
          />
          <path
            d="M21.84 14.12a.74.74 0 0 0-1.02.27l-.63 1.08-4.12-2.37a.75.75 0 0 0-.75 1.29l4.11 2.38-.62 1.08a.75.75 0 0 0 .64 1.12c.26 0 .51-.13.65-.38l2-3.46c.22-.35.1-.8-.26-1.01"
            fill="currentColor"
          />
          <path
            d="M19.44 7.22 15.32 9.6a.74.74 0 0 0-.27 1.02c.14.24.39.38.65.38q.2 0 .37-.1l4.11-2.38.63 1.08c.14.24.39.38.65.38q.2 0 .37-.1a.74.74 0 0 0 .27-1.02l-2-3.46a.74.74 0 0 0-1.02-.27.74.74 0 0 0-.27 1.02z"
            fill="currentColor"
          />
          <path
            d="m5.9 16.78 4.11-2.38a.74.74 0 0 0 .27-1.02.74.74 0 0 0-1.02-.27l-4.11 2.38-.63-1.08a.74.74 0 0 0-1.02-.27.74.74 0 0 0-.27 1.02l2 3.46c.14.24.39.38.65.38q.2 0 .37-.1a.74.74 0 0 0 .27-1.02z"
            fill="currentColor"
          />
          <path
            d="M16.17 12q-.01.96-.47 1.75a3.5 3.5 0 1 1 .47-1.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSnow;
