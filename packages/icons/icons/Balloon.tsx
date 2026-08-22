import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBalloon = forwardRef<SVGSVGElement, IconProps>(function IconBalloon(
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
            d="M11.94 17.5c4.14.03 7.6-3.8 7.56-7.94A7.65 7.65 0 0 0 11.94 2 7.36 7.36 0 0 0 4.5 9.44c.03 4.14 3.3 8.03 7.44 8.06"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.5 9a3.03 3.03 0 0 0-3-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 19.85c.32 0 .48 0 .6-.02a1.1 1.1 0 0 0 .85-1.4c-.03-.1-.1-.23-.26-.5M12 19.84c-.32 0-.48 0-.6-.02a1.1 1.1 0 0 1-.85-1.4c.03-.1.1-.23.26-.5M12 19.84V22"
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
            d="M12 18c4.14.03 7.6-3.92 7.56-8.2A7.77 7.77 0 0 0 12 2a7.5 7.5 0 0 0-7.44 7.68C4.6 13.95 7.86 17.97 12 18"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.75 6c0-.42.34-.75.76-.75a3.8 3.8 0 0 1 3.74 3.74.75.75 0 0 1-1.5.02 2.3 2.3 0 0 0-2.26-2.26.75.75 0 0 1-.74-.76"
            fill="currentColor"
          />
          <path
            d="M13.18 17.9a7 7 0 0 1-2.35-.02l-.02.04c-.15.28-.23.41-.26.52-.2.62.2 1.26.86 1.39q.13.02.59.02c.32 0 .48 0 .6-.02a1.1 1.1 0 0 0 .85-1.4 3 3 0 0 0-.26-.5z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m11.25 19.79.16.04q.13.02.59.02c.32 0 .48 0 .6-.02l.15-.04v1.46a.75.75 0 0 1-1.5 0z"
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
            d="M19.5 9.56c.03 4.14-3.42 7.97-7.56 7.94s-7.4-3.92-7.44-8.06A7.36 7.36 0 0 1 11.94 2a7.65 7.65 0 0 1 7.56 7.56m-7-4.31a.75.75 0 0 0 0 1.5 2.3 2.3 0 0 1 2.25 2.26.75.75 0 0 0 1.5-.02 3.8 3.8 0 0 0-3.74-3.74"
            fill="currentColor"
          />
          <path
            d="M14.17 18.21a1.84 1.84 0 0 1-1.42 2.35V22a.75.75 0 0 1-1.5 0v-1.44a1.84 1.84 0 0 1-1.42-2.35l.01-.02a7.7 7.7 0 0 0 4.32 0z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBalloon;
