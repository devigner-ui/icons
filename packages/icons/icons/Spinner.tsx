import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSpinner = forwardRef<SVGSVGElement, IconProps>(function IconSpinner(
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
            d="M12 20v-4m0-8V4m8 8h-4m-8 0H4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m17.66 6.34-2.83 2.83m-5.66 5.66-2.83 2.83m0-11.32 2.83 2.83m5.66 5.66 2.83 2.83"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M12 20v-4m0-8V4m8 8h-4m-8 0H4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17.66 6.34-2.83 2.83m-5.66 5.66-2.83 2.83m0-11.32 2.83 2.83m5.66 5.66 2.83 2.83"
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
            d="M12.75 4v4a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 1.5 0zM4 11.25h4a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5zm16 1.5h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5zM11.25 20v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M18.19 6.87 15.36 9.7a.75.75 0 0 1-1.06-1.06l2.83-2.83a.75.75 0 0 1 1.06 1.06z"
              fill="currentColor"
            />
            <path
              d="M6.87 5.81 9.7 8.64A.75.75 0 0 1 8.64 9.7L5.81 6.87a.75.75 0 0 1 1.06-1.06z"
              fill="currentColor"
            />
            <path
              d="m5.81 17.13 2.83-2.83a.75.75 0 0 1 1.06 1.06l-2.83 2.83a.75.75 0 0 1-1.06-1.06z"
              fill="currentColor"
            />
            <path
              d="m17.13 18.19-2.83-2.83a.75.75 0 0 1 1.06-1.06l2.83 2.83a.75.75 0 0 1-1.06 1.06z"
              fill="currentColor"
            />
          </g>
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.75 4v4a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 1.5 0zm5.44 2.87L15.36 9.7a.75.75 0 0 1-1.06-1.06l2.83-2.83a.75.75 0 0 1 1.06 1.06zM6.87 5.81 9.7 8.64A.75.75 0 0 1 8.64 9.7L5.81 6.87a.75.75 0 0 1 1.06-1.06zM4 11.25h4a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5zm16 1.5h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5zM5.81 17.13l2.83-2.83a.75.75 0 0 1 1.06 1.06l-2.83 2.83a.75.75 0 0 1-1.06-1.06zm11.32 1.06-2.83-2.83a.75.75 0 0 1 1.06-1.06l2.83 2.83a.75.75 0 0 1-1.06 1.06zM11.25 20v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSpinner;
