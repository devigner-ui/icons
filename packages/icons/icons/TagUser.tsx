import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTagUser = forwardRef<SVGSVGElement, IconProps>(function IconTagUser(
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
            d="M21 8.95v6.93a3 3 0 0 1-3 2.97h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69a3 3 0 0 0-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.97A3 3 0 0 1 6 2h12c1.66 0 3 1.33 3 2.97"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12.07 8.95h-.15A1.95 1.95 0 1 1 13.94 7a1.9 1.9 0 0 1-1.87 1.95Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9.25 15.19a5.4 5.4 0 0 0 5.5 0c1.33-.89 1.33-2.34 0-3.23a5.4 5.4 0 0 0-5.5 0"
            strokeWidth={strokeWidth}
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
            d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69a3 3 0 0 0-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.97A3 3 0 0 1 6 2h12c1.66 0 3 1.33 3 2.97v10.91a3 3 0 0 1-3 2.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.07 8.95h-.15A1.95 1.95 0 1 1 13.94 7a1.9 1.9 0 0 1-1.87 1.95"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.25 11.96c-1.33.89-1.33 2.34 0 3.23a5.4 5.4 0 0 0 5.5 0c1.33-.89 1.33-2.34 0-3.23-1.51-1-3.98-1-5.5 0"
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
            d="M12.07 8.95h-.15A1.95 1.95 0 1 1 13.94 7a1.9 1.9 0 0 1-1.87 1.95"
            fill="currentColor"
          />
          <path
            d="M9.25 11.96c-1.33.89-1.33 2.34 0 3.23a5.4 5.4 0 0 0 5.5 0c1.33-.89 1.33-2.34 0-3.23-1.51-1-3.98-1-5.5 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18 2H6C4.34 2 3 3.33 3 4.97v10.91a3 3 0 0 0 3 2.97h.76c.8 0 1.56.31 2.12.87l1.71 1.69c.78.77 2.05.77 2.83 0l1.71-1.69a3 3 0 0 1 2.12-.87H18c1.66 0 3-1.33 3-2.97V4.97A3 3 0 0 0 18 2m-6 3.05a1.95 1.95 0 0 1 .07 3.9h-.15A1.95 1.95 0 0 1 10.04 7 1.97 1.97 0 0 1 12 5.05m2.75 10.14a5.4 5.4 0 0 1-5.5 0c-1.33-.88-1.33-2.34 0-3.23a5.4 5.4 0 0 1 5.5 0c1.33.89 1.33 2.34 0 3.23"
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
            d="M18 2H6C4.34 2 3 3.33 3 4.97v10.91a3 3 0 0 0 3 2.98h.76a3 3 0 0 1 2.12.87l1.71 1.69c.78.77 2.04.77 2.82 0l1.71-1.69a3 3 0 0 1 2.12-.87H18a3 3 0 0 0 3-2.98V4.97A3 3 0 0 0 18 2m-6 3.55a1.95 1.95 0 0 1 .07 3.9h-.15a1.95 1.95 0 0 1-1.88-1.95A1.97 1.97 0 0 1 12 5.55m2.75 9.14a5.4 5.4 0 0 1-5.5 0c-1.33-.88-1.33-2.34 0-3.23a5.4 5.4 0 0 1 5.5 0c1.33.89 1.33 2.34 0 3.23"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTagUser;
