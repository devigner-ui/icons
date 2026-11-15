import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiChipText = forwardRef<SVGSVGElement, IconProps>(function IconAiChipText(
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

  /* In TwoTone the pins are the dimmed shapes and are clipped at the frame's
     outer edge, so their round caps do not sit over the frame. One tone
     skips the clip: there the caps hide inside the frame, and a clip would
     leave a hairline seam. */
  const clip = useId();
  const h = Number(strokeWidth) / 2;

  return (
    <>
      {variant === "Broken" ? (
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
            d="M9.83 18.5H8.5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-3.27"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 2.5v3m0 13v3M2.5 9h3m13 0h3M12 2.5v3m0 13v3M2.5 12h3m13 0h3M15 2.5v3m0 13v3M2.5 15h3m13 0h3m-12.18-.8v-2.64a1.76 1.76 0 0 1 3.52 0v2.64m-3.52-1.85h3.52m1.84-2.55v4.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : !fill ? (
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
          <defs>
            <clipPath id={clip}>
              <rect x="0" y="0" width={5.5 - h} height="24" />
              <rect x={18.5 + h} y="0" width={5.5 - h} height="24" />
              <rect x="0" y="0" width="24" height={5.5 - h} />
              <rect x="0" y={18.5 + h} width="24" height={5.5 - h} />
            </clipPath>
          </defs>
          <path
            d="M8.5 5.5h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            clipPath={duotone ? `url(#${clip})` : undefined}
            d="M9 2.5v3m0 13v3M2.5 9h3m13 0h3M12 2.5v3m0 13v3M2.5 12h3m13 0h3M15 2.5v3m0 13v3M2.5 15h3m13 0h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.32 14.2v-2.64a1.76 1.76 0 0 1 3.52 0v2.64m-3.52-1.85h3.52m1.84-2.55v4.4"
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
            d="M18.15 5.85c.59.58 1 1.5 1.08 2.4h2.27a.75.75 0 0 1 0 1.5h-2.25v1.5h2.25a.75.75 0 0 1 0 1.5h-2.25v1.5h2.25a.75.75 0 0 1 0 1.5h-2.27a4 4 0 0 1-1.08 2.4c-.58.59-1.5 1-2.4 1.08v2.27a.75.75 0 0 1-1.5 0v-2.25h-1.5v2.25a.75.75 0 0 1-1.5 0v-2.25h-1.5v2.25a.75.75 0 0 1-1.5 0v-2.27c-.9-.09-1.82-.5-2.4-1.08s-1-1.5-1.08-2.4H2.5a.75.75 0 0 1 0-1.5h2.25v-1.5H2.5a.75.75 0 0 1 0-1.5h2.25v-1.5H2.5a.75.75 0 0 1 0-1.5h2.27c.09-.9.5-1.82 1.08-2.4s1.5-1 2.4-1.08V2.5a.75.75 0 0 1 1.5 0v2.25h1.5V2.5a.75.75 0 0 1 1.5 0v2.25h1.5V2.5a.75.75 0 0 1 1.5 0v2.27c.9.09 1.82.5 2.4 1.08z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.57 14.2v-2.02c0-.66 0-1.29.33-1.88a2.53 2.53 0 0 1 4.43.15c.27.55.26 1.13.26 1.73v2.02a.75.75 0 0 1-1.5 0v-1.1h-2.02v1.1a.75.75 0 0 1-1.5 0zm3.48-2.9c-.23-.88-1.48-1-1.88-.19q-.1.23-.11.5h2.04q0-.15-.05-.3zm2.63-2.25c.42 0 .75.34.75.75v4.4a.75.75 0 0 1-1.5 0V9.8c0-.41.34-.75.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="M18.15 5.85c.59.58 1 1.5 1.08 2.4h2.27a.75.75 0 0 1 0 1.5h-2.25v1.5h2.25a.75.75 0 0 1 0 1.5h-2.25v1.5h2.25a.75.75 0 0 1 0 1.5h-2.27a4 4 0 0 1-1.08 2.4c-.58.59-1.5 1-2.4 1.08v2.27a.75.75 0 0 1-1.5 0v-2.25h-1.5v2.25a.75.75 0 0 1-1.5 0v-2.25h-1.5v2.25a.75.75 0 0 1-1.5 0v-2.27c-.9-.09-1.82-.5-2.4-1.08s-1-1.5-1.08-2.4H2.5a.75.75 0 0 1 0-1.5h2.25v-1.5H2.5a.75.75 0 0 1 0-1.5h2.25v-1.5H2.5a.75.75 0 0 1 0-1.5h2.27c.09-.9.5-1.82 1.08-2.4s1.5-1 2.4-1.08V2.5a.75.75 0 0 1 1.5 0v2.25h1.5V2.5a.75.75 0 0 1 1.5 0v2.25h1.5V2.5a.75.75 0 0 1 1.5 0v2.27c.9.09 1.82.5 2.4 1.08zm-8.83 9.1c.41 0 .75-.34.75-.75v-1.1h2.02v1.1a.75.75 0 0 0 1.5 0v-2.02c0-.6.01-1.18-.26-1.73a2.53 2.53 0 0 0-4.43-.15c-.34.6-.33 1.22-.33 1.88v2.02c0 .41.33.75.75.75zm2.78-3.35h-2.04q0-.25.1-.49c.41-.82 1.66-.7 1.9.2zm1.83-1.8v4.4a.75.75 0 0 0 1.5 0V9.8a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiChipText;
