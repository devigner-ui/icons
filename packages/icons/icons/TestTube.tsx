import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTestTube = forwardRef<SVGSVGElement, IconProps>(function IconTestTube(
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
            d="m9.75 2.5 8.4 4.82m-8.4-4.83-7.1 12.26a4.83 4.83 0 0 0 1.78 6.6 4.86 4.86 0 0 0 6.63-1.77l1.5-2.58 1.63-2.83 1.71-2.95 2.26-3.9M9.75 2.49 8.9 2m9.25 5.32.84.48"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m15.9 11.22-2.56-1.48m.85 4.43-4.2-2.41M12.55 17l-2.61-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 14.92c0 1.15-.9 2.08-2 2.08s-2-.93-2-2.08c0-.72.78-1.68 1.37-2.3a.86.86 0 0 1 1.26 0c.59.62 1.37 1.58 1.37 2.3"
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M20 17c1.1 0 2-.93 2-2.08 0-.72-.78-1.68-1.37-2.3a.86.86 0 0 0-1.26 0c-.59.62-1.37 1.58-1.37 2.3 0 1.15.9 2.08 2 2.08"
              fill="currentColor"
            />
            <path
              d="m16.28 10.57 1.5-2.6-8.4-4.83-6.73 11.6a4.83 4.83 0 0 0 1.78 6.61 4.86 4.86 0 0 0 6.63-1.77l1.12-1.93z"
              fill="currentColor"
            />
          </g>
          <path
            d="M9.3 1.35a.75.75 0 0 0-.77 1.3l.84.49 8.41 4.83.85.48a.75.75 0 1 0 .74-1.3l-9.24-5.3z"
            fill="currentColor"
          />
          <path
            d="m12.93 16.35-2.62-1.5a.75.75 0 1 0-.75 1.3l2.62 1.5z"
            fill="currentColor"
          />
          <path
            d="m14.56 13.53-4.2-2.42a.75.75 0 1 0-.75 1.3l4.2 2.41z"
            fill="currentColor"
          />
          <path
            d="m16.28 10.57-2.56-1.48a.75.75 0 0 0-.75 1.3l2.56 1.48z"
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
            d="M8.27 1.62a.75.75 0 0 1 1.02-.27l.84.5 9.24 5.3a.75.75 0 1 1-.74 1.3l-.85-.48-1.5 2.6-2.56-1.48a.75.75 0 1 0-.75 1.3l2.56 1.48-.97 1.66-4.2-2.42a.75.75 0 1 0-.75 1.3l4.2 2.41-.88 1.53-2.62-1.5a.75.75 0 1 0-.75 1.3l2.62 1.5-1.12 1.93a4.86 4.86 0 0 1-6.63 1.77 4.83 4.83 0 0 1-1.78-6.6l6.72-11.6v-.01l-.84-.5a.75.75 0 0 1-.26-1.02"
            fill="currentColor"
          />
          <path
            d="M20 17c1.1 0 2-.93 2-2.08 0-.72-.78-1.68-1.37-2.3a.86.86 0 0 0-1.26 0c-.59.62-1.37 1.58-1.37 2.3 0 1.15.9 2.08 2 2.08"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTestTube;
