import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconForward10Seconds = forwardRef<SVGSVGElement, IconProps>(
  function IconForward10Seconds(
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
              d="M14.65 4.47 12.67 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.76 7.8a9 9 0 0 1 1.8 5.31 8.89 8.89 0 1 1-6.91-8.65"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.21 15.92v-5.34l-1.5 1.67"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.67 10.58a2 2 0 0 1 2 2v1.35a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-1.35a2 2 0 0 1 2-2"
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
              d="M20.36 7.35a.75.75 0 0 0-1.2.9 8 8 0 0 1 1.65 4.86 8.15 8.15 0 1 1-8.14-8.14q.86 0 1.8.22h.1l.08.02.08-.01.1-.02.15-.06.1-.05.04-.02.06-.07.1-.12.06-.13.04-.09v-.2l-.01-.14-.05-.13-.07-.14-.02-.04-1.98-2.47a.76.76 0 0 0-1.05-.12.76.76 0 0 0-.12 1.05l.82 1.02-.24-.01a9.65 9.65 0 0 0 0 19.28 9.65 9.65 0 0 0 9.64-9.64 9.5 9.5 0 0 0-1.94-5.75"
              fill="currentColor"
            />
            <path
              d="M10.21 16.67a.76.76 0 0 1-.75-.75v-3.39l-.2.21a.76.76 0 0 1-1.05.06.76.76 0 0 1-.06-1.06l1.5-1.67a.75.75 0 0 1 1.31.5v5.35c0 .42-.33.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M14.67 16.67a2.75 2.75 0 0 1-2.75-2.75v-1.35a2.75 2.75 0 1 1 5.5 0v1.35a2.75 2.75 0 0 1-2.75 2.75m0-5.34c-.69 0-1.25.56-1.25 1.25v1.35a1.25 1.25 0 0 0 2.5 0v-1.35c0-.69-.56-1.25-1.25-1.25"
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
              d="M20.36 7.35a.75.75 0 0 0-1.2.9 8 8 0 0 1 1.65 4.86 8.15 8.15 0 1 1-8.14-8.13q.86 0 1.8.22h.1l.08.02.08-.01.1-.02.15-.06.1-.05.04-.02.06-.07.1-.12.06-.13.04-.09v-.2l-.01-.14-.05-.13-.07-.14-.02-.04-1.98-2.47a.76.76 0 0 0-1.05-.12.76.76 0 0 0-.12 1.05l.82 1.02-.24-.01a9.65 9.65 0 0 0 0 19.28 9.65 9.65 0 0 0 9.64-9.64 9.5 9.5 0 0 0-1.94-5.76"
              fill="currentColor"
            />
            <path
              d="M10.21 16.67a.76.76 0 0 1-.75-.75v-3.39l-.2.22a.76.76 0 0 1-1.05.06.76.76 0 0 1-.06-1.06l1.5-1.67a.75.75 0 0 1 1.31.5v5.35c0 .41-.33.74-.75.74"
              fill="currentColor"
            />
            <path
              d="M14.67 16.67a2.75 2.75 0 0 1-2.75-2.75v-1.35a2.75 2.75 0 1 1 5.5 0v1.35a2.75 2.75 0 0 1-2.75 2.75m0-5.34c-.69 0-1.25.56-1.25 1.25v1.35a1.25 1.25 0 0 0 2.5 0v-1.35c0-.69-.56-1.25-1.25-1.25"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconForward10Seconds;
