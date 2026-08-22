import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmsStar = forwardRef<SVGSVGElement, IconProps>(function IconSmsStar(
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
            d="M22.67 11.5v4c0 3.5-2 5-5 5h-10c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m7.67 9 3.13 2.5c1.03.82 2.72.82 3.75 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m20.15 2.82.28.57c.14.28.49.54.8.6l.38.06c1.14.19 1.41 1.03.59 1.86l-.35.35c-.23.24-.36.7-.29 1.02l.05.21c.31 1.38-.42 1.91-1.62 1.19l-.26-.15a1.2 1.2 0 0 0-1.12 0l-.26.15c-1.21.73-1.94.19-1.62-1.19l.05-.21c.07-.32-.06-.78-.29-1.02l-.35-.35c-.82-.83-.55-1.67.59-1.86l.38-.06c.3-.05.66-.32.8-.6l.28-.57c.54-1.09 1.42-1.09 1.96 0"
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
            d="m20.15 2.82.28.57c.14.28.49.54.8.6l.38.06c1.14.19 1.41 1.03.59 1.86l-.35.35c-.23.24-.36.7-.29 1.02l.05.21c.31 1.38-.42 1.91-1.62 1.19l-.26-.15a1.2 1.2 0 0 0-1.12 0l-.26.15c-1.21.73-1.94.19-1.62-1.19l.05-.21c.07-.32-.06-.78-.29-1.02l-.35-.35c-.82-.83-.55-1.67.59-1.86l.38-.06c.3-.05.66-.32.8-.6l.28-.57c.54-1.09 1.42-1.09 1.96 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.67 9.67v5.83c0 3.5-2 5-5 5h-10c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h7.05q-.3.33-.44.77c-.29.9 0 1.88.8 2.69l.19.19c-.41 1.81.44 2.66.83 2.94.22.16.67.41 1.31.41.47 0 1.05-.14 1.72-.54l.04-.02.04.02c1.58.95 2.65.41 3.03.13q.2-.12.43-.42"
            fill="currentColor"
          />
          <path
            d="M12.67 12.87c-.84 0-1.69-.26-2.34-.79L7.2 9.58a.75.75 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0a.74.74 0 0 1 1.05.12c.26.32.21.8-.12 1.05-.64.53-1.49.79-2.33.79"
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
            d="m20.15 2.82.28.57c.14.28.49.54.8.6l.38.06c1.14.19 1.41 1.03.59 1.86l-.35.35c-.23.24-.36.7-.29 1.02l.05.21c.31 1.38-.42 1.91-1.62 1.19l-.26-.15a1.2 1.2 0 0 0-1.12 0l-.26.15c-1.21.73-1.94.19-1.62-1.19l.05-.21c.07-.32-.06-.78-.29-1.02l-.35-.36c-.82-.83-.55-1.67.59-1.86l.38-.06c.3-.05.66-.32.8-.6l.28-.57c.54-1.08 1.42-1.08 1.96.01"
            fill="currentColor"
          />
          <path
            d="M22.24 10.09c-.36.26-1.37.74-2.81 0a.6.6 0 0 0-.52 0 3.4 3.4 0 0 1-1.5.41c-.64 0-1.09-.25-1.31-.41-.37-.27-1.15-1.04-.88-2.67a.6.6 0 0 0-.13-.47c-.69-.79-1.07-1.85-.8-2.68.1-.33-.11-.77-.45-.77H7.67c-3 0-5 1.5-5 5v7c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-5.23c0-.19-.27-.29-.43-.18m-7.23 2c-.66.53-1.5.79-2.34.79s-1.69-.26-2.34-.79L7.2 9.59a.77.77 0 0 1-.12-1.06.75.75 0 0 1 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0a.74.74 0 0 1 1.05.12c.27.32.22.8-.11 1.06"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSmsStar;
