import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLamp = forwardRef<SVGSVGElement, IconProps>(function IconLamp(
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
            d="M9 22h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 22v-7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M4.96 7.44c.61-2.34.91-3.51 1.7-4.29a4 4 0 0 1 .76-.58C8.37 2 9.58 2 12 2s3.63 0 4.58.57a4 4 0 0 1 .76.58c.79.78 1.09 1.95 1.7 4.3l.08.32c.83 3.19 1.24 4.78.5 5.9l-.25.32C18.47 15 16.82 15 13.53 15h-3.06c-3.3 0-4.94 0-5.84-1l-.24-.33c-.75-1.12-.34-2.71.49-5.9z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.5 15v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.97 7.44c.6-2.34.91-3.51 1.7-4.29a4 4 0 0 1 .75-.58C8.37 2 9.58 2 12.01 2s3.63 0 4.58.57a4 4 0 0 1 .76.58c.78.78 1.09 1.95 1.7 4.3l.08.32c.83 3.19 1.24 4.78.49 5.9l-.25.32a2.4 2.4 0 0 1-1.11.7c-.6.14-1.25.22-1.5.25q-1.26.08-3.22.06h-3.06c-3.3 0-4.94 0-5.84-1l-.25-.33c-.75-1.12-.33-2.71.5-5.9z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.76 14.94V17a.75.75 0 1 0 1.5 0v-2.32a12 12 0 0 1-1.5.26"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.26 21.25V15h1.5v6.25z"
            fill="currentColor"
          />
          <path
            d="M11.26 21.25H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
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
            d="M6.67 3.15c-.79.78-1.1 1.95-1.7 4.3l-.09.32c-.82 3.19-1.24 4.78-.49 5.9l.25.32C5.54 15 7.18 15 10.48 15h.78v6.25H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25V15h.78q1.96.01 3.22-.06V17a.75.75 0 1 0 1.5 0v-2.32a2.4 2.4 0 0 0 1.36-1c.75-1.13.34-2.72-.5-5.91l-.07-.33c-.61-2.34-.92-3.51-1.7-4.29a4 4 0 0 0-.76-.58C15.64 2 14.43 2 12 2s-3.64 0-4.59.57a4 4 0 0 0-.75.58"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLamp;
