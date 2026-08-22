import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconProfileCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconProfileCircle(
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
              d="M12.79 12.78h-.24a3.27 3.27 0 0 1 .12-6.55 3.28 3.28 0 0 1 .12 6.55"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.41 19.38a9.93 9.93 0 0 1-13.48 0c.1-.94.7-1.86 1.77-2.58 2.74-1.82 7.22-1.82 9.94 0 1.07.72 1.67 1.64 1.77 2.58"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
              d="M12.67 22.01a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M12.67 6.94a3.75 3.75 0 0 0-.05 7.49h.18a3.74 3.74 0 0 0-.13-7.49"
              fill="currentColor"
            />
            <path
              d="M19.45 19.36a10 10 0 0 1-13.56 0c.24-.91.89-1.74 1.84-2.38 2.73-1.82 7.17-1.82 9.88 0 .96.64 1.6 1.47 1.84 2.38"
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
              d="M22.67 12c0-5.51-4.49-10-10-10s-10 4.49-10 10c0 2.9 1.25 5.51 3.23 7.34l-.01.02.32.27.17.14.57.43.2.14q.29.2.6.36l.22.13a6 6 0 0 0 .87.41 9 9 0 0 0 1.62.51l.22.05q.42.09.85.13l.12.02a12 12 0 0 0 2.15-.02q.43-.04.85-.13l.22-.05q.37-.08.72-.19l.24-.08q.34-.11.66-.24l.24-.11.63-.3.22-.13.6-.36.2-.14q.3-.2.57-.43l.17-.14.32-.27-.01-.02A10 10 0 0 0 22.67 12m-5.06 4.97c-2.71-1.82-7.15-1.82-9.88 0q-.65.44-1.1 1A8.48 8.48 0 0 1 12.67 3.5a8.5 8.5 0 0 1 6.04 14.47 5 5 0 0 0-1.1-1"
              fill="currentColor"
            />
            <path
              d="M12.67 6.93a3.75 3.75 0 0 0-.05 7.49h.18a3.74 3.74 0 0 0-.13-7.49"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconProfileCircle;
