import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBath = forwardRef<SVGSVGElement, IconProps>(function IconBath(
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
            d="M3 13.08v-.14a1 1 0 0 1 .94-.94h16.12a1 1 0 0 1 .94 1.08l-.01.82a7.2 7.2 0 0 1-6.9 6.56 57 57 0 0 1-4.8-.04 7.2 7.2 0 0 1-6.28-6.52z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m6 20-1 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18 20 1 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M2 12h20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3 13V4.39a2.39 2.39 0 0 1 4.6-.9l.4.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m7.98 4.45.33.67zM6.36 6.19l.7.28zm4.22-1.81-.3.69zM6.35 8.74l-.7.28a.75.75 0 0 0 1 .41zm5.96-2.56.3.68a.75.75 0 0 0 .4-.96zM7.04 8.47a2.7 2.7 0 0 1 .02-2l-1.4-.56a4.2 4.2 0 0 0-.01 3.1zm4.97-2.98L6.05 8.05l.6 1.38 5.95-2.57zm-1.73-.42c.62.26 1.09.77 1.33 1.38L13 5.9a4 4 0 0 0-2.14-2.21zm-3.22 1.4c.25-.62.7-1.09 1.25-1.35l-.66-1.35a4 4 0 0 0-1.98 2.14zM8.3 5.12c.6-.3 1.32-.33 1.97-.05l.6-1.38a4 4 0 0 0-3.23.08z"
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 11h-.25a.75.75 0 0 0 0 1.5H2v.35a7.9 7.9 0 0 0 4.39 7.3q1.2.61 2.58.77a58 58 0 0 0 4.9.04h.01a7.4 7.4 0 0 0 4.5-1.6 8 8 0 0 0 3.1-5.66c.02-.25.02-.47.02-.85v-.21l-.02-.14h.27a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m5.12 19.35-.04.06-1 2a.75.75 0 1 0 1.34.68l.97-1.94c-.36-.22-1.11-.68-1.27-.8"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17.11 20.15.97 1.94a.75.75 0 1 0 1.34-.68l-1-2-.04-.06c-.2.16-.93.6-1.27.8"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.5 4.14a1.64 1.64 0 0 1 3.15-.61l.15.36 1.36-.64-.11-.28A3.14 3.14 0 0 0 2 4.14V11h1.5z"
            fill="currentColor"
          />
          <path
            d="M6.8 3.89a4.2 4.2 0 0 0-1.4 4.88.75.75 0 0 0 1 .41l5.95-2.57a.75.75 0 0 0 .4-.96 4 4 0 0 0-2.13-2.21 4 4 0 0 0-2.46-.2z"
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
            d="M3.5 4.14a1.64 1.64 0 0 1 3.15-.61l.15.36a4.2 4.2 0 0 0-1.4 4.88.75.75 0 0 0 1 .41l5.95-2.57a.75.75 0 0 0 .4-.96 4 4 0 0 0-2.13-2.21 4 4 0 0 0-2.46-.2l-.11-.27A3.14 3.14 0 0 0 2 4.14V11h-.25a.75.75 0 0 0 0 1.5H2v.35a7.9 7.9 0 0 0 3.12 6.5l-.04.06-1 2a.75.75 0 1 0 1.34.68l.97-1.94q1.2.61 2.58.77a58 58 0 0 0 4.9.04h.01a7.4 7.4 0 0 0 3.23-.8l.97 1.93a.75.75 0 0 0 1.34-.68l-1-2-.04-.06a8 8 0 0 0 3.1-5.65c.02-.25.02-.47.02-.85v-.21l-.02-.14h.27a.75.75 0 0 0 0-1.5H3.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBath;
