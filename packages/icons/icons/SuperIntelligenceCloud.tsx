import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSuperIntelligenceCloud = forwardRef<SVGSVGElement, IconProps>(function IconSuperIntelligenceCloud(
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
            d="M15.6 20H17a4.51 4.51 0 0 0 .6-9 6 6 0 0 0-11.7 1.4A3.84 3.84 0 1 0 7 20h6.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.48 13.96c-.57-.76-2.57-.76-2.85.33-.23.76 2.85.93 2.85 2.02-.28 1.09-2.28 1.09-2.85.33m4.74-3.44v4.2"
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
            d="M7 20h10a4.5 4.5 0 0 0 .6-9 6 6 0 0 0-11.7 1.4A3.8 3.8 0 0 0 7 20Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.48 13.96c-.57-.76-2.57-.76-2.85.33-.23.76 2.85.93 2.85 2.02-.28 1.09-2.28 1.09-2.85.33m4.74-3.44v4.2"
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
            d="M1.9 16.86c-.17-1.2.2-2.51.87-3.4a4.5 4.5 0 0 1 2.46-1.67A5.6 5.6 0 0 1 7 8.17a7 7 0 0 1 4.08-2.05 6.7 6.7 0 0 1 7.06 4.2 4.4 4.4 0 0 1 3.12 1.72 5.5 5.5 0 0 1 1.29 3.81 5.4 5.4 0 0 1-1.79 3.6 5.6 5.6 0 0 1-3.77 1.3H7.04a5 5 0 0 1-3.34-.87 4.8 4.8 0 0 1-1.8-3.02z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M11.88 14.4c-.23-.26-.78-.26-1.1-.2l-.14.05.36.14c.76.27 1.77.57 2.12 1.39a1 1 0 0 1 .1.39 1 1 0 0 1-.06.46c-.64 1.59-3.07 1.7-4.13.47a.75.75 0 0 1 1.2-.91c.24.28.82.27 1.14.19l.25-.1-.14-.08a5 5 0 0 0-.67-.29c-.63-.23-1.64-.46-1.88-1.18-.26-.8.37-1.54 1.06-1.84 1.02-.44 2.35-.24 3.09.61a.75.75 0 0 1-1.2.9zm2.5-1.95c.4 0 .74.34.74.75v4.2a.75.75 0 0 1-1.5 0v-4.2c0-.41.34-.75.75-.75z"
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
            d="M1.9 16.86c-.17-1.2.2-2.51.87-3.4a4.5 4.5 0 0 1 2.46-1.67A5.6 5.6 0 0 1 7 8.17a7 7 0 0 1 4.08-2.05 6.7 6.7 0 0 1 7.06 4.2 4.4 4.4 0 0 1 3.12 1.72 5.5 5.5 0 0 1 1.29 3.81 5.4 5.4 0 0 1-1.79 3.6 5.6 5.6 0 0 1-3.77 1.3H7.04a5 5 0 0 1-3.34-.87 4.8 4.8 0 0 1-1.8-3.02zm11.04-2.3a.76.76 0 0 0 .14-1.06c-.74-.85-2.07-1.05-3.09-.6-.69.3-1.32 1.03-1.06 1.83.24.72 1.25.95 1.88 1.18a6 6 0 0 1 .8.37l-.23.1c-.33.08-.9.1-1.15-.19a.75.75 0 0 0-1.2.9c1.06 1.24 3.49 1.13 4.13-.46a.7.7 0 0 0 .06-.46 1 1 0 0 0-.1-.4c-.35-.8-1.36-1.1-2.12-1.38l-.36-.14.15-.04c.31-.07.86-.07 1.1.2.24.33.71.4 1.05.14zm.68-1.36v4.2a.75.75 0 0 0 1.5 0v-4.2a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconSuperIntelligenceCloud;
