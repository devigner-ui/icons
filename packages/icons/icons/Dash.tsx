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
      {variant === "Broken" ? (
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
            d="M6 20.5H3.95L5 16.25h7.44c3.56 0 5.31-2.25 5.31-5.31v-.19c0-1.75-.75-3-3-3h-8.7L7.13 3.5H16c4 0 6 2.5 6 6V12c0 5-3 8.5-8.5 8.5h-2.56"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M11.5 10.5H4.31a2 2 0 0 0-1.94 1.51L2 13.5h7.19a2 2 0 0 0 1.94-1.51z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      ) : !fill ? (
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
            d="M7.12 3.5H16c4 0 6 2.5 6 6V12c0 5-3 8.5-8.5 8.5H3.94L5 16.25h7.44c3.56 0 5.31-2.25 5.31-5.31v-.19c0-1.75-.75-3-3-3H6.06z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.5 10.5H4.31a2 2 0 0 0-1.94 1.51L2 13.5h7.19a2 2 0 0 0 1.94-1.51z"
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
          <path d="M24 0H0v24h24z" fill="none" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.12 3.5H16c4 0 6 2.5 6 6V12c0 5-3 8.5-8.5 8.5H3.94L5 16.25h7.44c3.56 0 5.31-2.25 5.31-5.31v-.19c0-1.75-.75-3-3-3H6.06z"
            fill="currentColor"
          />
          <path
            d="M12.41 10.23H4.7c-1.08 0-2.02.74-2.29 1.78l-.25 1.02c-.09.37.19.73.57.73h7.71c1.08 0 2.02-.74 2.29-1.78l.25-1.02a.6.6 0 0 0-.57-.73"
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
            d="M7.12 3.5H16c4 0 6 2.5 6 6V12c0 5-3 8.5-8.5 8.5H3.94L5 16.25h7.44c3.56 0 5.31-2.25 5.31-5.31v-.19c0-1.75-.75-3-3-3H6.06z"
            fill="currentColor"
          />
          <path
            d="M12.41 10.23H4.7c-1.08 0-2.02.74-2.29 1.78l-.25 1.02c-.09.37.19.73.57.73h7.71c1.08 0 2.02-.74 2.29-1.78l.25-1.02a.6.6 0 0 0-.57-.73"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDash;
