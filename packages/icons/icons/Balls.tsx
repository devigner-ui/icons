import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBalls = forwardRef<SVGSVGElement, IconProps>(function IconBalls(
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
            d="M16.02 8.08c-2.02.2-4.16.8-5.65 2.29s-2.1 3.63-2.3 5.65m7.95-7.94a19 19 0 0 1 3.23-.02 2.9 2.9 0 0 1 2.69 2.7 19 19 0 0 1-.02 3.22m-5.9-5.9 5.9 5.9m0 0c-.2 2.02-.8 4.16-2.29 5.65s-3.63 2.1-5.65 2.3m0 0a19 19 0 0 1-3.23 0 2.9 2.9 0 0 1-2.69-2.68 19 19 0 0 1 .02-3.23m5.9 5.9-5.9-5.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 8.25a6.5 6.5 0 0 0-5.72-6.2 6.5 6.5 0 1 0-1.12 12.94M9.22 2s-.14 2.36 1.35 5.2q.7 1.29 1.43 2.11M3 5.93S4.93 6.98 6.43 9.8 7.78 15 7.78 15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m12.5 17.5 5-5m-2 0 2 2m-5 1 2 2M14 14l2 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
          <g opacity={duotone ? "0.3" : "1"}>
            <path
              d="M9.28 2.05a6.5 6.5 0 0 1 5.71 6.16c-.98.17-1.97.45-2.86.9q-.7-.77-1.38-1.91C9.13 4.39 9.28 2.05 9.28 2.05"
              fill="currentColor"
            />
            <path
              d="m3.22 12.29-.03-.04-.32-.5a6.5 6.5 0 0 1-.27-5.99 13 13 0 0 1 4.5 5.88c.7 1.9.62 3.28.62 3.31a6.5 6.5 0 0 1-4.5-2.66"
              fill="currentColor"
            />
          </g>
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16.02 8.08c-2.02.2-4.16.8-5.65 2.29s-2.1 3.63-2.3 5.65l5.9 5.9c2.03-.2 4.17-.8 5.66-2.29s2.1-3.63 2.3-5.65z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.25 2.87a6.5 6.5 0 0 1 4.03-.82s-.15 2.34 1.47 5.15q.67 1.14 1.38 1.91-.98.49-1.76 1.26a8.4 8.4 0 0 0-2.16 4.62l-.49-.04a9 9 0 0 0-.77-3.72 12 12 0 0 0-.7-1.43A13 13 0 0 0 2.6 5.76a6.5 6.5 0 0 1 2.65-2.89"
            fill="currentColor"
          />
          <path
            d="M19.25 8.06a19 19 0 0 0-3.23.02l5.9 5.9a19 19 0 0 0 .02-3.23 2.9 2.9 0 0 0-2.7-2.69"
            fill="currentColor"
          />
          <path
            d="M10.75 21.94a19 19 0 0 0 3.23-.02l-5.9-5.9a19 19 0 0 0-.02 3.23 2.9 2.9 0 0 0 2.7 2.69"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.96 12.31c.2-.2.54-.2.74 0l.62.62.63-.62a.52.52 0 1 1 .74.74l-.62.63.62.62a.52.52 0 1 1-.74.74l-.63-.62-.58.58.62.62a.53.53 0 0 1-.74.74l-.62-.62-.58.58.62.63a.52.52 0 1 1-.74.74l-.62-.62-.63.62a.52.52 0 1 1-.74-.74l.62-.63-.62-.62a.52.52 0 1 1 .74-.74l.63.62.58-.58-.62-.62a.53.53 0 0 1 .74-.74l.62.62.58-.58-.62-.63a.5.5 0 0 1 0-.74"
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
            d="M21.99 12.99 17.02 8q1.21-.04 2.23.05a2.9 2.9 0 0 1 2.69 2.7q.08 1 .05 2.23"
            fill="currentColor"
          />
          <path
            d="M10.75 21.94a2.9 2.9 0 0 1-2.69-2.7q-.08-1-.05-2.22l4.97 4.97a20 20 0 0 1-2.23-.05"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.37 10.37a8.5 8.5 0 0 1 4.71-2.17l6.72 6.72a8.5 8.5 0 0 1-2.17 4.71 8.5 8.5 0 0 1-4.71 2.17L8.2 15.08c.28-1.72.9-3.45 2.17-4.71m4.6 1.6c.3-.3.77-.3 1.06 0l.47.47.47-.47a.75.75 0 0 1 1.06 1.06l-.47.47.47.47a.75.75 0 0 1-1.06 1.06l-.47-.47-.44.44.47.47a.75.75 0 0 1-1.06 1.06l-.47-.47-.44.44.47.47a.75.75 0 0 1-1.06 1.06l-.47-.47-.47.47a.75.75 0 1 1-1.06-1.06l.47-.47-.47-.47a.75.75 0 0 1 1.06-1.06l.47.47.44-.44-.47-.47a.75.75 0 0 1 1.06-1.06l.47.47.44-.44-.47-.47a.75.75 0 0 1 0-1.06"
            fill="currentColor"
          />
          <path
            d="M5.93 10.5a11 11 0 0 0-2.36-2.64 7 7 0 0 0-1.06-.69l-.32-.14a6.64 6.64 0 0 0 4.56 7.89h.02s.06-.68.15-1.11c.07-.32.14-.53.22-.8q-.36-1.13-1.2-2.51"
            fill="currentColor"
          />
          <path
            d="M9.63 3.31a11.5 11.5 0 0 0 2.14 4.31c.66-.3 1.22-.5 2.04-.7.36-.08.95-.16.95-.16v-.02A6.6 6.6 0 0 0 9.4 2.07l.02.21q.04.37.2 1.03"
            fill="currentColor"
          />
          <path
            d="M7.9 2.13v-.1A6.4 6.4 0 0 0 2.7 5.6l.4.17.01.01.03.01.38.2q.36.21.97.66a12 12 0 0 1 3.48 4.43 8 8 0 0 1 2.47-2.71 13 13 0 0 1-2.5-5.9z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBalls;
