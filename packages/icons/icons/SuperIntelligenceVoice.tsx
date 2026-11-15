import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSuperIntelligenceVoice = forwardRef<SVGSVGElement, IconProps>(function IconSuperIntelligenceVoice(
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
            d="M6.5 8.72V7.5a5 5 0 0 1 5-5h1a5 5 0 0 1 5 5V10a5 5 0 0 1-5 5h-1a5 5 0 0 1-4.88-3.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 11.5a8.5 8.5 0 0 0 17 0M12 20v2m.48-14.54c-.57-.76-2.57-.76-2.85.33-.23.76 2.85.93 2.85 2.02-.28 1.09-2.28 1.09-2.85.33m4.74-3.44v4.2"
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.5 2.5h1a5 5 0 0 1 5 5V10a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5V7.5a5 5 0 0 1 5-5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 11.5a8.5 8.5 0 0 0 17 0M12 20v2m.48-14.54c-.57-.76-2.57-.76-2.85.33-.23.76 2.85.93 2.85 2.02-.28 1.09-2.28 1.09-2.85.33m4.74-3.44v4.2"
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
            d="M11.5 1.75h1c1.53.03 3.07.69 4.07 1.68 1 1 1.65 2.54 1.68 4.07V10a6 6 0 0 1-1.68 4.07c-1 1-2.54 1.65-4.07 1.68h-1a6 6 0 0 1-4.07-1.68c-1-1-1.65-2.54-1.68-4.07V7.5a6 6 0 0 1 1.68-4.07c1-1 2.54-1.65 4.07-1.68z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M11.88 7.9c-.23-.26-.78-.26-1.1-.2l-.14.05.36.14c.76.27 1.77.57 2.12 1.39a1 1 0 0 1 .1.39 1 1 0 0 1-.06.46c-.64 1.59-3.07 1.7-4.13.47a.75.75 0 0 1 1.2-.91c.24.28.82.27 1.14.19l.25-.1-.14-.08a5 5 0 0 0-.67-.29c-.63-.23-1.64-.46-1.88-1.18-.26-.8.37-1.54 1.06-1.84 1.02-.44 2.35-.24 3.09.61a.75.75 0 0 1-1.2.9zm2.5-1.95c.4 0 .74.34.74.75v4.2a.75.75 0 0 1-1.5 0V6.7c0-.41.34-.75.75-.75zM4.24 11.5a8 8 0 0 0 2.45 5.65 7.8 7.8 0 0 0 4.92 2.1 7.8 7.8 0 0 0 7.58-4.87q.54-1.4.55-2.88a.75.75 0 0 1 1.5 0 9 9 0 0 1-.66 3.44 9.4 9.4 0 0 1-7.84 5.78V22a.75.75 0 0 1-1.5 0v-1.28a9.25 9.25 0 0 1-8.5-9.22.75.75 0 0 1 1.5 0z"
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
            d="M11.5 1.75h1c1.53.03 3.07.69 4.07 1.68 1 1 1.65 2.54 1.68 4.07V10a6 6 0 0 1-1.68 4.07c-1 1-2.54 1.65-4.07 1.68h-1a6 6 0 0 1-4.07-1.68c-1-1-1.65-2.54-1.68-4.07V7.5a6 6 0 0 1 1.68-4.07c1-1 2.54-1.65 4.07-1.68zM4.25 11.5a8 8 0 0 0 2.45 5.65 7.8 7.8 0 0 0 4.92 2.1 7.8 7.8 0 0 0 7.58-4.87q.54-1.4.55-2.88a.75.75 0 0 1 1.5 0 9 9 0 0 1-.66 3.44 9.4 9.4 0 0 1-7.84 5.78V22a.75.75 0 0 1-1.5 0v-1.28a9.25 9.25 0 0 1-8.5-9.22.75.75 0 0 1 1.5 0zm8.69-3.45A.75.75 0 0 0 13.08 7c-.74-.85-2.07-1.05-3.09-.6-.69.3-1.32 1.03-1.06 1.83.24.72 1.25.95 1.88 1.18a6 6 0 0 1 .8.37l-.23.1c-.33.08-.9.1-1.15-.19a.75.75 0 0 0-1.2.9c1.06 1.24 3.49 1.13 4.13-.46a.7.7 0 0 0 .06-.46 1 1 0 0 0-.1-.4c-.35-.8-1.36-1.1-2.12-1.38l-.36-.14.15-.04c.31-.07.86-.07 1.1.2.24.33.71.4 1.05.14zm.68-1.35v4.2a.75.75 0 0 0 1.5 0V6.7a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconSuperIntelligenceVoice;
