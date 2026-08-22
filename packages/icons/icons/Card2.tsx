import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCard2 = forwardRef<SVGSVGElement, IconProps>(function IconCard2(
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
            d="M10 16.5H6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 13.5H6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 10h20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14 15c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3s1.41 0 1.7.3c.3.29.3.76.3 1.7s0 1.41-.3 1.7c-.29.3-.76.3-1.7.3s-1.41 0-1.7-.3c-.3-.29-.3-.76-.3-1.7"
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
            d="M10 20h4c3.77 0 5.66 0 6.83-1.17S22 15.77 22 12v-2H2v2c0 3.77 0 5.66 1.17 6.83S6.23 20 10 20"
            fill="currentColor"
          />
          <path
            d="M5.25 13.5c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M5.25 16.5c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.2 12.3a9 9 0 0 0-1.16-.05h-.08q-.66-.01-1.16.04c-.35.05-.73.16-1.04.47-.3.31-.42.69-.47 1.04q-.05.5-.04 1.16v.09q-.01.65.04 1.15c.05.35.16.73.47 1.04.31.3.69.42 1.04.47q.5.05 1.16.04h.08q.66.01 1.16-.04c.35-.05.73-.16 1.04-.47.3-.31.42-.69.47-1.04q.05-.5.04-1.15v-.1q.01-.65-.04-1.15a1.7 1.7 0 0 0-.47-1.04c-.31-.3-.69-.42-1.04-.47m-2.37 1.52-.01.02-.04.16c-.03.21-.03.5-.03 1a9 9 0 0 0 .07 1.17l.02.01.16.04c.21.03.5.03 1 .03a9 9 0 0 0 1.17-.07l.01-.02.04-.16c.03-.21.03-.5.03-1a9 9 0 0 0-.07-1.17l-.02-.01-.16-.04c-.21-.03-.5-.03-1-.03a9 9 0 0 0-1.17.07"
            fill="currentColor"
          />
          <path
            d="M10 4h4c3.79 0 5.68 0 6.85 1.12.85.8 1.08 1.96 1.15 3.88v1H2V9c.07-1.92.3-3.08 1.15-3.88C4.32 4 6.2 4 9.99 4"
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
            d="M14 4h-4C6.23 4 4.34 4 3.17 5.17c-.84.85-1.08 2.06-1.14 4.08h19.94c-.06-2.02-.3-3.23-1.14-4.08C19.66 4 17.77 4 14 4"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 20h-4c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12v-1.25h20V12c0 3.77 0 5.66-1.17 6.83S17.77 20 14 20m2.04-7.75q.66-.01 1.16.04c.35.05.73.16 1.04.47.3.31.42.69.47 1.04q.05.5.04 1.16v.09q.01.65-.04 1.15c-.05.35-.16.73-.47 1.04-.31.3-.69.42-1.04.47q-.5.05-1.16.04h-.08q-.66.01-1.16-.04a1.7 1.7 0 0 1-1.04-.47c-.3-.31-.42-.69-.47-1.04a9 9 0 0 1-.04-1.15v-.09q-.01-.66.04-1.16c.05-.35.16-.73.47-1.04.31-.3.69-.42 1.04-.47q.5-.05 1.16-.04zM5.25 13.5c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M14.82 13.82h.02l.16-.04c.21-.03.5-.03 1-.03a9 9 0 0 1 1.17.07l.01.02q.02.03.04.16c.03.21.03.5.03 1a9 9 0 0 1-.07 1.17l-.02.01-.16.04c-.21.03-.5.03-1 .03a9 9 0 0 1-1.17-.07l-.01-.02-.04-.16c-.03-.21-.03-.5-.03-1a9 9 0 0 1 .07-1.17"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCard2;
