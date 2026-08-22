import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCassette = forwardRef<SVGSVGElement, IconProps>(function IconCassette(
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
            d="M2 12c0-3.77 0-5.66 1.17-6.83S6.23 4 10 4h4c3.77 0 5.66 0 6.83 1.17S22 8.23 22 12s0 5.66-1.17 6.83S17.77 20 14 20h-4c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.5 13.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 13.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="m17.5 4.5-.53 1.4c-.47 1.26-.7 1.89-1.22 2.24-.51.36-1.18.36-2.52.36h-2.46c-1.34 0-2 0-2.52-.36-.52-.35-.75-.98-1.22-2.24L6.5 4.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 4v4.5"
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
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4v4h-1.23c-1.34 0-2 0-2.52-.36-.52-.35-.75-.98-1.22-2.24L6.5 4z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.97 5.4 17.5 4H12v4h1.23c1.34 0 2 0 2.52-.36.52-.35.75-.98 1.22-2.24"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.17 5.17C2 6.34 2 8.23 2 12s0 5.66 1.17 6.83S6.23 20 10 20h4c3.77 0 5.66 0 6.83-1.17S22 15.77 22 12s0-5.66-1.17-6.83c-.74-.74-1.76-1-3.35-1.11l-.5 1.34c-.48 1.26-.71 1.89-1.23 2.24-.51.36-1.18.36-2.52.36h-2.46c-1.34 0-2 0-2.52-.36-.52-.35-.75-.98-1.22-2.24l-.5-1.34c-1.6.1-2.62.37-3.36 1.11m5.08 6.33a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m7.5 0a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
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
            d="M10 4h1.25v3.75h-.48c-.69 0-1.14 0-1.49-.04-.33-.04-.49-.1-.6-.18a1.3 1.3 0 0 1-.4-.5c-.15-.32-.31-.75-.55-1.39l-.6-1.61Q8.32 3.99 10 4"
            fill="currentColor"
          />
          <path
            d="M15.75 12.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
            fill="currentColor"
          />
          <path
            d="M6.75 13.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.17 5.17a4 4 0 0 1 2.4-1.02l.77 2.06q.32.9.61 1.5c.22.41.47.78.87 1.05q.6.39 1.3.44.66.06 1.61.05h2.54q.95.01 1.61-.05c.47-.05.9-.17 1.3-.44s.65-.64.87-1.06q.29-.6.61-1.5l.77-2.05c1.07.15 1.82.44 2.4 1.02C22 6.34 22 8.23 22 12s0 5.66-1.17 6.83S17.77 20 14 20h-4c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12s0-5.66 1.17-6.83m9.58 8.58a3 3 0 1 1 6 0 3 3 0 0 1-6 0m-4.5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
            fill="currentColor"
          />
          <path
            d="M16.88 4.03Q15.66 3.99 14 4h-1.25v3.75h.48c.68 0 1.14 0 1.49-.04.33-.04.49-.1.6-.18.12-.08.24-.21.39-.5.16-.32.32-.75.56-1.39z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCassette;
