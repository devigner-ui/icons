import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHashtag = forwardRef<SVGSVGElement, IconProps>(function IconHashtag(
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
            d="M10 3 5 21"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m19 3-5 18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 9H4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 16H2"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.2 2.28c.4.1.63.52.52.92l-5 18a.75.75 0 0 1-1.44-.4l5-18c.1-.4.52-.63.92-.52"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.2 2.28c.4.1.63.52.52.92l-5 18a.75.75 0 1 1-1.44-.4l5-18c.1-.4.52-.63.92-.52"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.25 9c0-.41.34-.75.75-.75h18a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 9"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.25 16c0-.41.34-.75.75-.75h18a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"
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
            d="M10.72 3.2a.75.75 0 1 0-1.44-.4L7.76 8.25H4a.75.75 0 0 0 0 1.5h3.35l-1.53 5.5H2a.75.75 0 0 0 0 1.5h3.4L4.28 20.8a.75.75 0 1 0 1.44.4l1.24-4.45h7.44l-1.12 4.05a.75.75 0 1 0 1.44.4l1.24-4.45H20a.75.75 0 0 0 0-1.5h-3.62l1.52-5.5H22a.75.75 0 0 0 0-1.5h-3.68l1.4-5.05a.75.75 0 1 0-1.44-.4l-1.52 5.45H9.32zm4.1 12.05 1.53-5.5H8.9l-1.52 5.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHashtag;
