import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGoogle = forwardRef<SVGSVGElement, IconProps>(function IconGoogle(
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
            d="M22.26 10.18h-9.39v3.71h5.51a5 5 0 0 1-2.04 3.24 6 6 0 0 1-3.47 1 6 6 0 0 1-5.69-4.16 6.2 6.2 0 0 1 .2-4.5 6 6 0 0 1 5.49-3.61c1.88 0 3.14.81 3.87 1.49l2.82-2.76A9.98 9.98 0 0 0 3.94 16.48l.01-.01v.01a10 10 0 0 0 8.92 5.51c2.7 0 4.97-.89 6.62-2.42 1.89-1.74 2.98-4.31 2.98-7.36 0-.81-.07-1.41-.21-2.03"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            d="m12.87 5.87-.2.01V2.01l.2-.01c2.26 0 4.2.69 5.79 1.86a1 1 0 0 1 .1 1.52l-1.39 1.36a1 1 0 0 1-1.25.12 5.6 5.6 0 0 0-3.25-.99"
            fill="currentColor"
          />
          <path
            d="M22.47 12.22a9.8 9.8 0 0 1-2.98 7.36A9.5 9.5 0 0 1 12.87 22l-.2-.01v-3.87l.2.01c1.49 0 2.62-.41 3.47-1a5 5 0 0 0 2.04-3.24h-4.51a1 1 0 0 1-1-1v-1.71a1 1 0 0 1 1-1h7.55c.51 0 .94.38.99.89q.06.52.06 1.15"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.17 10.02q-.31.94-.32 1.98 0 1.04.33 1.98a6 6 0 0 0 5.49 4.14v3.87a10 10 0 0 1-8.72-5.5h-.01a10 10 0 0 1 8.73-14.48v3.87a6 6 0 0 0-5.5 4.14"
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
            d="M22.41 11.07a1 1 0 0 0-.99-.89h-7.55a1 1 0 0 0-1 1v1.71a1 1 0 0 0 1 1h4.51a5 5 0 0 1-2.04 3.24c-.85.59-1.98 1-3.47 1l-.2-.01a6 6 0 0 1-5.49-4.14 6.2 6.2 0 0 1 .2-4.5 6 6 0 0 1 5.29-3.6l.2-.01c1.43 0 2.5.47 3.25.99.39.27.91.21 1.25-.12l1.39-1.36a1 1 0 0 0-.1-1.52 9.6 9.6 0 0 0-5.99-1.85A9.96 9.96 0 0 0 2.87 12a10 10 0 0 0 1.07 4.49h.01a10 10 0 0 0 8.72 5.5l.2.01c2.7 0 4.97-.89 6.62-2.42a9.8 9.8 0 0 0 2.98-7.36 10 10 0 0 0-.06-1.15"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGoogle;
