import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTrash = forwardRef<SVGSVGElement, IconProps>(function IconTrash(
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
            d="M21.67 5.98q-5-.5-10.02-.5-2.97 0-5.94.3l-2.04.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m9.17 4.97.22-1.31C9.55 2.71 9.67 2 11.36 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m19.52 9.14-.65 10.07c-.11 1.57-.2 2.79-2.99 2.79H9.46c-2.79 0-2.88-1.22-2.99-2.79L5.82 9.14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11 16.5h3.33"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.17 12.5h5"
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
            d="M21.74 5.23q-2.41-.24-4.84-.37v-.01l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3h-2.62c-2.33 0-2.55 1.32-2.71 2.29l-.21 1.28q-1.4.08-2.79.21l-2.04.2a.75.75 0 0 0-.68.82c.04.41.4.71.82.67l2.04-.2a80 80 0 0 1 15.82.21h.08c.38 0 .71-.29.75-.68a.77.77 0 0 0-.69-.82"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.9 8.14a1.3 1.3 0 0 0-.91-.39H6.35A1.25 1.25 0 0 0 5.1 9.08l.62 10.26c.11 1.52.25 3.42 3.74 3.42h6.42c3.49 0 3.63-1.89 3.74-3.42l.62-10.25a1.3 1.3 0 0 0-.34-.95"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.25 17c0-.41.34-.75.75-.75h3.33a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.42 13c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
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
            d="M21.74 5.23q-2.41-.24-4.84-.37v-.01l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3h-2.62c-2.33 0-2.55 1.32-2.71 2.29l-.21 1.28q-1.4.08-2.79.21l-2.04.2a.75.75 0 0 0-.68.82c.04.41.4.71.82.67l2.04-.2a80 80 0 0 1 15.82.21h.08c.38 0 .71-.29.75-.68a.77.77 0 0 0-.69-.82"
            fill="currentColor"
          />
          <path
            d="M19.9 8.14a1.3 1.3 0 0 0-.91-.39H6.35A1.25 1.25 0 0 0 5.1 9.08l.62 10.26c.11 1.52.25 3.42 3.74 3.42h6.42c3.49 0 3.63-1.89 3.74-3.42l.62-10.25a1.3 1.3 0 0 0-.34-.95m-5.57 9.61H11a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3.33c.41 0 .75.34.75.75s-.34.75-.75.75m.84-4h-5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTrash;
