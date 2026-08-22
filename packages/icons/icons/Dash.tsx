import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDash = forwardRef<SVGSVGElement, IconProps>(function IconDash(
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
            d="M7.79 3.5h8.88c4 0 6 2.5 6 6V12c0 5-3 8.5-8.5 8.5H4.61l1.06-4.25h7.44c3.56 0 5.31-2.25 5.31-5.31v-.19c0-1.75-.75-3-3-3H6.73z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.17 10.5H4.98a2 2 0 0 0-1.94 1.51l-.37 1.49h7.19a2 2 0 0 0 1.94-1.51z"
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
          <path d="M24.67 0h-24v24h24z" fill="none" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.79 3.5h8.88c4 0 6 2.5 6 6V12c0 5-3 8.5-8.5 8.5H4.61l1.06-4.25h7.44c3.56 0 5.31-2.25 5.31-5.31v-.19c0-1.75-.75-3-3-3H6.73z"
            fill="currentColor"
          />
          <path
            d="M13.08 10.23H5.37c-1.08 0-2.02.74-2.29 1.78l-.25 1.02c-.09.37.19.73.57.73h7.71c1.08 0 2.02-.74 2.29-1.78l.25-1.02a.6.6 0 0 0-.57-.73"
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
            d="M7.79 3.5h8.88c4 0 6 2.5 6 6V12c0 5-3 8.5-8.5 8.5H4.61l1.06-4.25h7.44c3.56 0 5.31-2.25 5.31-5.31v-.19c0-1.75-.75-3-3-3H6.73z"
            fill="currentColor"
          />
          <path
            d="M13.08 10.23H5.37c-1.08 0-2.02.74-2.29 1.78l-.25 1.02c-.09.37.19.73.57.73h7.71c1.08 0 2.02-.74 2.29-1.78l.25-1.02a.6.6 0 0 0-.57-.73"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDash;
