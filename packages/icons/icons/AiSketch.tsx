import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSketch = forwardRef<SVGSVGElement, IconProps>(function IconAiSketch(
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
            d="M3.5 18.5q.9-1.77 1.8-3.23m1.37-1.97C8.72 10.63 10.68 9.34 12 10c1.8.9-2.5 6.3-.6 7.2 1.6.8 4.1-3.7 5.6-3.1 1.1.5-.2 2.6.8 3.1.7.4 1.8-.3 2.7-1.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 2c.32 2.31 1.19 3.18 3.5 3.5-2.31.32-3.18 1.19-3.5 3.5-.32-2.31-1.19-3.18-3.5-3.5 2.31-.32 3.18-1.19 3.5-3.5Z"
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
            d="M3.5 18.5c3-6 6.5-9.5 8.5-8.5 1.8.9-2.5 6.3-.6 7.2 1.6.8 4.1-3.7 5.6-3.1 1.1.5-.2 2.6.8 3.1.7.4 1.8-.3 2.7-1.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 2c.32 2.31 1.19 3.18 3.5 3.5-2.31.32-3.18 1.19-3.5 3.5-.32-2.31-1.19-3.18-3.5-3.5 2.31-.32 3.18-1.19 3.5-3.5Z"
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
            d="M3.17 19.17c.37.19.82.04 1-.33 1.22-2.43 2.64-4.9 4.6-6.8.5-.5 1.07-.97 1.71-1.26.3-.13.63-.24.96-.18.34.06.29.24.23.57-.06.42-.21.84-.36 1.24-.4 1.12-.98 2.25-1.13 3.45-.08.64.02 1.32.52 1.77.53.47 1.27.5 1.9.25.94-.37 1.68-1.16 2.4-1.84.4-.37.8-.76 1.26-1.05q.15-.11.35-.18h.09c.07.25.01.55-.01.81-.05.52-.11 1.08.12 1.57q.16.36.48.58c1.27.91 2.85-.37 3.74-1.24a.75.75 0 1 0-1.06-1.06 7 7 0 0 1-1.06.85q-.16.1-.33.17a.7.7 0 0 1-.42.05c-.09-.46.06-.97.06-1.43 0-.72-.26-1.44-.97-1.72-.56-.22-1.17-.04-1.67.25-.9.52-1.61 1.34-2.39 2.03-.3.27-.63.56-1 .75-.12.07-.36.2-.5.09-.09-.08-.03-.37-.02-.46.06-.46.22-.9.37-1.34.42-1.16 1.05-2.35 1.15-3.6.07-.94-.38-1.71-1.32-1.95-1.4-.36-2.78.57-3.77 1.45-2.29 2.04-3.91 4.84-5.27 7.55a.75.75 0 0 0 .33 1z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M17.4 1.6c.16 1.22.44 1.97.99 2.52.54.54 1.29.82 2.51.98a.4.4 0 0 1 0 .8c-1.22.16-1.97.44-2.51.98-.55.55-.83 1.3-1 2.52a.4.4 0 0 1-.79 0c-.16-1.22-.44-1.97-.98-2.52-.55-.54-1.3-.82-2.52-.98a.4.4 0 0 1 0-.8c1.22-.16 1.97-.44 2.52-.98.54-.55.82-1.3.98-2.52a.4.4 0 0 1 .8 0z"
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
            d="M3.17 19.17c.37.19.82.04 1-.33 1.22-2.43 2.64-4.9 4.6-6.8.5-.5 1.07-.97 1.71-1.26.3-.13.63-.24.96-.18.34.06.29.24.23.57-.06.42-.21.84-.36 1.24-.4 1.12-.98 2.25-1.13 3.45-.08.64.02 1.32.52 1.77.53.47 1.27.5 1.9.25.94-.37 1.68-1.16 2.4-1.84.4-.37.8-.76 1.26-1.05q.15-.11.35-.18h.09c.07.25.01.55-.01.81-.05.52-.11 1.08.12 1.57q.16.36.48.58c1.27.91 2.85-.37 3.74-1.24a.75.75 0 1 0-1.06-1.06 7 7 0 0 1-1.06.85q-.16.1-.33.17a.7.7 0 0 1-.42.05c-.09-.46.06-.97.06-1.43 0-.72-.26-1.44-.97-1.72-.56-.22-1.17-.04-1.67.25-.9.52-1.61 1.34-2.39 2.03-.3.27-.63.56-1 .75-.12.07-.36.2-.5.09-.09-.08-.03-.37-.02-.46.06-.46.22-.9.37-1.34.42-1.16 1.05-2.35 1.15-3.6.07-.94-.38-1.71-1.32-1.95-1.4-.36-2.78.57-3.77 1.45-2.29 2.04-3.91 4.84-5.27 7.55a.75.75 0 0 0 .33 1z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M17.4 1.6c.16 1.22.44 1.97.99 2.52.54.54 1.29.82 2.51.98a.4.4 0 0 1 0 .8c-1.22.16-1.97.44-2.51.98-.55.55-.83 1.3-1 2.52a.4.4 0 0 1-.79 0c-.16-1.22-.44-1.97-.98-2.52-.55-.54-1.3-.82-2.52-.98a.4.4 0 0 1 0-.8c1.22-.16 1.97-.44 2.52-.98.54-.55.82-1.3.98-2.52a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiSketch;
