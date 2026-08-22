import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTerminal = forwardRef<SVGSVGElement, IconProps>(function IconTerminal(
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
            d="m7 7 1.23 1.06c.51.44.77.66.77.94s-.26.5-.77.94L7 11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11 11h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 21c3.75 0 5.62 0 6.94-.95a5 5 0 0 0 1.1-1.11C21 17.62 21 15.75 21 12s0-5.62-.95-6.94a5 5 0 0 0-1.11-1.1C17.62 3 15.75 3 12 3s-5.62 0-6.94.95a5 5 0 0 0-1.1 1.11C3 6.38 3 8.25 3 12s0 5.62.95 6.94a5 5 0 0 0 1.11 1.1C6.38 21 8.25 21 12 21"
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
            opacity={duotone ? "0.4" : "1"}
            d="M12.05 2.25c1.83 0 3.27 0 4.41.12 1.17.13 2.11.4 2.92.98q.74.53 1.27 1.27c.59.8.85 1.75.98 2.92.12 1.14.12 2.67.12 4.5 0 1.84 0 3.28-.12 4.42a6 6 0 0 1-.98 2.92q-.53.74-1.27 1.27a6 6 0 0 1-2.92.98c-1.14.12-2.67.12-4.5.12-1.84 0-3.28 0-4.42-.12a6 6 0 0 1-2.92-.98 6 6 0 0 1-1.27-1.27 6 6 0 0 1-.98-2.92 45 45 0 0 1-.12-4.41c0-1.84 0-3.37.12-4.51.13-1.17.4-2.11.98-2.92q.53-.74 1.27-1.27a6 6 0 0 1 2.92-.98 47 47 0 0 1 4.5-.12"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.6 6.51a.75.75 0 0 1 1.06-.08L8.88 7.5l.04.03q.35.3.62.57c.18.2.38.5.38.91 0 .4-.2.7-.38.9q-.27.29-.62.58l-.04.03-1.22 1.06a.75.75 0 0 1-.98-1.14L7.9 9.37 8.33 9l-.43-.37-1.22-1.06A.75.75 0 0 1 6.6 6.5"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.42 11c0-.41.33-.75.75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
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
            d="M12.05 2.25c1.83 0 3.27 0 4.41.12 1.17.13 2.11.4 2.92.98q.74.53 1.27 1.27c.59.8.85 1.75.98 2.92.12 1.14.12 2.67.12 4.5 0 1.84 0 3.28-.12 4.42a6 6 0 0 1-.98 2.92q-.53.74-1.27 1.27a6 6 0 0 1-2.92.98c-1.14.12-2.67.12-4.5.12-1.84 0-3.28 0-4.42-.12a6 6 0 0 1-2.92-.98 6 6 0 0 1-1.27-1.27 6 6 0 0 1-.98-2.92 45 45 0 0 1-.12-4.41c0-1.84 0-3.37.12-4.51.13-1.17.4-2.11.98-2.92q.53-.74 1.27-1.27a6 6 0 0 1 2.92-.98 47 47 0 0 1 4.5-.12m-5.8 4.1a1 1 0 0 1 1.4-.1l1.27 1.08q.35.3.64.6c.2.22.44.58.44 1.07s-.25.85-.44 1.07q-.29.3-.64.6l-1.27 1.09a1 1 0 0 1-1.3-1.52L7.57 9.2 7.8 9l-.22-.19-1.22-1.05a1 1 0 0 1-.1-1.41M12 10a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTerminal;
