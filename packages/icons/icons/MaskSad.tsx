import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMaskSad = forwardRef<SVGSVGElement, IconProps>(function IconMaskSad(
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
            d="M21 12V6.72c0-2.2 0-3.29-.7-3.89-.71-.6-1.8-.41-3.96-.05l-1.05.17a21 21 0 0 1-3.29.41c-.83 0-1.65-.13-3.29-.4l-1.05-.18c-2.16-.36-3.25-.54-3.95.05S3 4.53 3 6.72V12c0 5.49 4.24 8.15 6.9 9.29.72.3 1.08.46 2.1.46s1.38-.16 2.1-.46c2.66-1.14 6.9-3.8 6.9-9.29"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M6.5 9c.3-.58 1.08-1 2-1s1.7.42 2 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M13.5 9c.3-.58 1.08-1 2-1s1.7.42 2 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8.5 15s1.05-1 3.5-1 3.5 1 3.5 1"
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
            d="M21 6.2v5.2c0 5.41-4.24 8.03-6.9 9.15-.72.3-1.08.45-2.1.45a4.3 4.3 0 0 1-2.1-.45C7.24 19.43 3 16.8 3 11.4V6.2c0-2.16 0-3.24.7-3.83.71-.59 1.8-.4 3.96-.05l1.05.17c1.64.27 2.46.4 3.29.4s1.65-.13 3.29-.4l1.05-.17c2.16-.36 3.25-.54 3.95.05S21 4.05 21 6.21"
            fill="currentColor"
          />
          <path
            d="M7.17 8.78c.12-.24.59-.57 1.33-.57s1.2.33 1.33.57c.18.37.63.52 1 .33a.73.73 0 0 0 .34-.99c-.46-.9-1.57-1.39-2.67-1.39s-2.21.49-2.67 1.4c-.19.36-.04.8.33.98.38.19.83.04 1.01-.33"
            fill="currentColor"
          />
          <path
            d="M15.5 8.2c-.74 0-1.2.34-1.33.58a.76.76 0 0 1-1 .33.73.73 0 0 1-.34-.99c.46-.9 1.57-1.39 2.67-1.39s2.21.49 2.67 1.4c.19.36.04.8-.33.98a.76.76 0 0 1-1.01-.33c-.12-.24-.59-.57-1.33-.57"
            fill="currentColor"
          />
          <path
            d="M8 13.81a.75.75 0 0 0-.04 1.06c.28.3.75.3 1.05.03l.01-.01.1-.08q.15-.1.51-.27c.48-.2 1.25-.43 2.37-.43s1.9.23 2.37.43a3 3 0 0 1 .6.35H15v.01c.3.27.77.26 1.05-.03a.73.73 0 0 0-.02-1.05H16l-.02-.03-.26-.2a5 5 0 0 0-.75-.4 7 7 0 0 0-2.97-.55c-1.33 0-2.3.26-2.97.55a5 5 0 0 0-1.01.6z"
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
            d="M21 11.4V6.2c0-2.15 0-3.23-.7-3.82-.71-.59-1.8-.4-3.96-.05l-1.05.17c-1.64.27-2.46.4-3.29.4s-1.65-.13-3.29-.4l-1.05-.17c-2.16-.36-3.25-.54-3.95.05S3 4.05 3 6.21v5.2c0 5.4 4.24 8.02 6.9 9.14.72.3 1.08.45 2.1.45s1.38-.15 2.1-.45c2.66-1.12 6.9-3.74 6.9-9.14M8 13.82a.75.75 0 0 0-.04 1.06c.28.3.75.3 1.05.03l.01-.01.1-.08q.15-.1.51-.27c.48-.2 1.25-.43 2.37-.43s1.9.23 2.37.43a3 3 0 0 1 .6.35H15v.01c.3.27.77.26 1.05-.03a.73.73 0 0 0-.02-1.05H16l-.02-.03-.26-.2a5 5 0 0 0-.75-.4 7 7 0 0 0-2.97-.55c-1.33 0-2.3.26-2.97.55a5 5 0 0 0-1.01.6zm.5-5.6c-.74 0-1.2.33-1.33.57a.76.76 0 0 1-1 .33.73.73 0 0 1-.34-.99c.46-.9 1.57-1.39 2.67-1.39s2.21.49 2.67 1.4c.19.36.04.8-.33.98a.76.76 0 0 1-1.01-.33c-.12-.24-.59-.57-1.33-.57m7 0c-.74 0-1.2.33-1.33.57a.76.76 0 0 1-1 .33.73.73 0 0 1-.34-.99c.46-.9 1.57-1.39 2.67-1.39s2.21.49 2.67 1.4c.19.36.04.8-.33.98a.76.76 0 0 1-1.01-.33c-.12-.24-.59-.57-1.33-.57"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMaskSad;
