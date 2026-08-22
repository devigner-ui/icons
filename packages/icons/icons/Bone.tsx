import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBone = forwardRef<SVGSVGElement, IconProps>(function IconBone(
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
            d="M10.93 16.63c-.4.4-.37 1.04-.22 1.58.28 1.01-.1 2.3-.85 3.05A2.52 2.52 0 1 1 6.3 17.7a2.52 2.52 0 0 1-3.56-3.56 3.4 3.4 0 0 1 3.05-.85c.54.15 1.19.17 1.58-.22m9.26-2.14c.4-.4 1.04-.37 1.58-.22 1.01.28 2.3-.1 3.05-.85A2.52 2.52 0 0 0 17.7 6.3a2.52 2.52 0 0 0-3.56-3.56 3.4 3.4 0 0 0-.85 3.05c.15.54.17 1.19-.22 1.58"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.16 11.46a.75.75 0 0 0-1.06-1.06zM13.6 7.9a.75.75 0 0 0-1.06-1.06zm-2.14 9.26 5.7-5.7-1.06-1.06-5.7 5.7zM7.9 13.6l5.7-5.7-1.06-1.06-5.7 5.7z"
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
            d="M13.29 5.79c-.28-1.01.1-2.3.85-3.05A2.52 2.52 0 0 1 17.7 6.3a2.52 2.52 0 0 1 3.56 3.56 3.4 3.4 0 0 1-3.05.85c-.54-.15-1.19-.17-1.58.22l-3.56-3.56c.4-.4.37-1.04.22-1.58m-5.92 7.28c-.4.4-1.04.37-1.58.22-1.01-.28-2.3.1-3.05.85A2.52 2.52 0 0 0 6.3 17.7a2.52 2.52 0 1 0 3.56 3.56 3.4 3.4 0 0 0 .85-3.05c-.15-.54-.17-1.19.22-1.58z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m10.93 16.63 5.7-5.7-3.56-3.56-5.7 5.7z"
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
            d="M14.14 2.74a3.4 3.4 0 0 0-.85 3.05c.15.54.17 1.19-.22 1.58l-5.7 5.7c-.4.4-1.04.37-1.58.22-1.01-.28-2.3.1-3.05.85A2.52 2.52 0 0 0 6.3 17.7a2.52 2.52 0 1 0 3.56 3.56 3.4 3.4 0 0 0 .85-3.05c-.15-.54-.17-1.19.22-1.58l5.7-5.7c.4-.4 1.04-.37 1.58-.22 1.01.28 2.3-.1 3.05-.85A2.52 2.52 0 0 0 17.7 6.3a2.52 2.52 0 0 0-3.56-3.56"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBone;
