import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCallSlash = forwardRef<SVGSVGElement, IconProps>(
  function IconCallSlash(
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
              d="m10.99 18.97.43.32q1.71 1.24 3.44 1.98 1.73.73 3.26.73 1.05 0 1.95-.38a4.5 4.5 0 0 0 2.32-2.2q.25-.54.25-1.09 0-.41-.16-.78a1.5 1.5 0 0 0-.55-.64l-3.31-2.35q-.37-.26-.7-.39a2 2 0 0 0-.61-.13q-.37 0-.71.21-.34.18-.72.56l-.76.75a.6.6 0 0 1-.41.17l-.25-.04-.18-.08q-.29-.15-.65-.42"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.4 13.22q-.78-.8-1.45-1.58a8 8 0 0 1-.93-1.28l-.08-.2-.03-.23q0-.24.16-.4l.76-.79q.36-.36.56-.71t.21-.71q0-.29-.14-.61a3 3 0 0 0-.4-.7L7.74 2.74a1.6 1.6 0 0 0-.67-.56A2 2 0 0 0 6.26 2q-1.12 0-2.08.94a5 5 0 0 0-1.15 1.67q-.36.9-.36 1.93 0 1.56.72 3.27a18 18 0 0 0 1.96 3.41 28 28 0 0 0 2.79 3.27"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m22.67 2-20 20"
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
              d="M22.67 18.33q0 .54-.25 1.09-.26.54-.68 1.02a4.5 4.5 0 0 1-1.64 1.18q-.9.38-1.96.38a8 8 0 0 1-3.26-.73 18 18 0 0 1-3.45-1.98q-.87-.64-1.7-1.35l3.26-3.26.02.01q.78.66 1.29.92l.18.08q.12.04.25.04.25 0 .4-.17l.77-.75q.37-.38.72-.56.34-.21.7-.21.3 0 .62.13.33.13.7.39l3.32 2.35q.39.27.55.64t.16.78"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.43 13.24 8.17 16.5l-.02-.01a30 30 0 0 1-2.8-3.27 18 18 0 0 1-1.94-3.36l-.02-.05a8 8 0 0 1-.72-3.27q0-1.02.36-1.93a4.4 4.4 0 0 1 1.15-1.67q.24-.24.49-.41h.01q.75-.54 1.59-.53.43 0 .81.18.36.16.62.5l.05.06 2.32 3.27q.27.37.4.7.14.32.14.61 0 .36-.21.71a3 3 0 0 1-.56.71l-.76.79a.5.5 0 0 0-.16.4q0 .12.03.23l.08.2q.27.5.93 1.28.67.78 1.45 1.58z"
              fill="currentColor"
            />
            <path
              d="M22.44 2.23a.77.77 0 0 0-1.09 0L2.9 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L22.44 3.31a.74.74 0 0 0 0-1.08"
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
              d="M22.67 18.33q0 .54-.25 1.09-.26.54-.68 1.02a4.5 4.5 0 0 1-1.64 1.18q-.9.38-1.96.38a8 8 0 0 1-3.26-.73 18 18 0 0 1-3.45-1.98q-.87-.64-1.7-1.35l3.26-3.26.02.01q.78.66 1.29.92l.18.08q.12.04.25.04.25 0 .4-.17l.77-.75q.37-.38.72-.56.34-.21.7-.21.3 0 .62.13.33.13.7.39l3.32 2.35q.39.27.55.64t.16.78"
              fill="currentColor"
            />
            <path
              d="M11.43 13.24 8.17 16.5l-.02-.01a30 30 0 0 1-2.8-3.27 18 18 0 0 1-1.94-3.36l-.02-.05a8 8 0 0 1-.72-3.27q0-1.02.36-1.93a4.4 4.4 0 0 1 1.15-1.67q.24-.24.49-.41h.01q.75-.54 1.59-.53.43 0 .81.18.36.16.62.5l.05.06 2.32 3.27q.27.37.4.7.14.32.14.61 0 .36-.21.71a3 3 0 0 1-.56.71l-.76.79a.5.5 0 0 0-.16.4q0 .12.03.23l.08.2q.27.5.93 1.28.67.78 1.45 1.58z"
              fill="currentColor"
            />
            <path
              d="M22.44 2.23a.77.77 0 0 0-1.09 0L2.9 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L22.44 3.31a.74.74 0 0 0 0-1.08"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCallSlash;
