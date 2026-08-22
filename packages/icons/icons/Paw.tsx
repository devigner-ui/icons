import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPaw = forwardRef<SVGSVGElement, IconProps>(function IconPaw(
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
            d="M7.57 15.38c1.59-3.23 2.38-4.85 3.52-5.23q.92-.3 1.82 0c1.14.38 1.93 2 3.52 5.23l.88 1.79c.4.83.61 1.25.66 1.53a1.95 1.95 0 0 1-1.84 2.3c-.29 0-.73-.11-1.61-.36-.51-.13-.76-.2-1.02-.25q-1.5-.3-3 0c-.26.05-.51.12-1.02.25-.88.25-1.32.37-1.6.36a1.95 1.95 0 0 1-1.85-2.3c.05-.28.25-.7.66-1.53z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.14 5.53c.42 1.63 1.58 2.71 2.6 2.42 1.03-.29 1.53-1.85 1.12-3.48-.42-1.63-1.58-2.71-2.6-2.42-1.03.29-1.53 1.85-1.12 3.48"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.86 5.53c-.42 1.63-1.58 2.71-2.6 2.42-1.03-.29-1.53-1.85-1.12-3.48.42-1.63 1.58-2.71 2.6-2.42 1.03.29 1.53 1.85 1.12 3.48"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.2 12.3c.45 1.2 1.51 1.93 2.36 1.63.86-.3 1.19-1.52.74-2.73-.45-1.2-1.51-1.93-2.36-1.63-.86.3-1.19 1.52-.74 2.73"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.8 12.3c-.45 1.2-1.51 1.93-2.36 1.63-.86-.3-1.19-1.52-.74-2.73.45-1.2 1.51-1.93 2.36-1.63.86.3 1.19 1.52.74 2.73"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M6.14 5.53c.42 1.63 1.58 2.71 2.6 2.42 1.03-.29 1.53-1.85 1.12-3.48-.42-1.63-1.58-2.71-2.6-2.42-1.03.29-1.53 1.85-1.12 3.48"
            fill="currentColor"
          />
          <path
            d="M17.86 5.53c-.42 1.63-1.58 2.71-2.6 2.42-1.03-.29-1.53-1.85-1.12-3.48.42-1.63 1.58-2.71 2.6-2.42 1.03.29 1.53 1.85 1.12 3.48"
            fill="currentColor"
          />
          <path
            d="M2.2 12.3c.45 1.2 1.51 1.93 2.36 1.63.86-.3 1.19-1.52.74-2.73-.45-1.2-1.51-1.93-2.36-1.63-.86.3-1.19 1.52-.74 2.73"
            fill="currentColor"
          />
          <path
            d="M21.8 12.3c-.45 1.2-1.51 1.93-2.36 1.63-.86-.3-1.19-1.52-.74-2.73.45-1.2 1.51-1.93 2.36-1.63.86.3 1.19 1.52.74 2.73"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.57 15.38c1.59-3.23 2.38-4.85 3.52-5.23q.92-.3 1.82 0c1.14.38 1.93 2 3.52 5.23l.88 1.79c.4.83.61 1.25.66 1.53a1.95 1.95 0 0 1-1.84 2.3c-.29 0-.73-.11-1.61-.36-.51-.13-.76-.2-1.02-.25q-1.5-.3-3 0c-.26.05-.51.12-1.02.25-.88.25-1.32.37-1.6.36a1.95 1.95 0 0 1-1.85-2.3c.05-.28.25-.7.66-1.53z"
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
            d="M7.57 15.38c1.59-3.23 2.38-4.85 3.52-5.23q.92-.3 1.82 0c1.14.38 1.93 2 3.52 5.23l.88 1.79c.4.83.61 1.25.66 1.53a1.95 1.95 0 0 1-1.84 2.3c-.29 0-.73-.11-1.61-.36-.51-.13-.76-.2-1.02-.25q-1.5-.3-3 0c-.26.05-.51.12-1.02.25-.88.25-1.32.37-1.6.36a1.95 1.95 0 0 1-1.85-2.3c.05-.28.25-.7.66-1.53z"
            fill="currentColor"
          />
          <path
            d="M6.14 5.53c.42 1.63 1.58 2.71 2.6 2.42 1.03-.29 1.53-1.85 1.12-3.48-.42-1.63-1.58-2.71-2.6-2.42-1.03.29-1.53 1.85-1.12 3.48"
            fill="currentColor"
          />
          <path
            d="M17.86 5.53c-.42 1.63-1.58 2.71-2.6 2.42-1.03-.29-1.53-1.85-1.12-3.48.42-1.63 1.58-2.71 2.6-2.42 1.03.29 1.53 1.85 1.12 3.48"
            fill="currentColor"
          />
          <path
            d="M2.2 12.3c.45 1.2 1.51 1.93 2.36 1.63.86-.3 1.19-1.52.74-2.73-.45-1.2-1.51-1.93-2.36-1.63-.86.3-1.19 1.52-.74 2.73"
            fill="currentColor"
          />
          <path
            d="M21.8 12.3c-.45 1.2-1.51 1.93-2.36 1.63-.86-.3-1.19-1.52-.74-2.73.45-1.2 1.51-1.93 2.36-1.63.86.3 1.19 1.52.74 2.73"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPaw;
