import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPeople = forwardRef<SVGSVGElement, IconProps>(function IconPeople(
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
            d="M18 7.16h-.19a2.57 2.57 0 0 1-2.48-2.58A2.58 2.58 0 1 1 18 7.16Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M16.97 14.44a5.6 5.6 0 0 0 3.94-.72c1.41-.94 1.41-2.48 0-3.42a5.7 5.7 0 0 0-3.97-.71"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M5.97 7.16h.19a2.57 2.57 0 0 0 2.48-2.58 2.58 2.58 0 1 0-2.67 2.58Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7 14.44a5.6 5.6 0 0 1-3.94-.72c-1.41-.94-1.41-2.48 0-3.42a5.7 5.7 0 0 1 3.97-.71"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12 14.63h-.19a2.57 2.57 0 0 1-2.48-2.58A2.58 2.58 0 1 1 12 14.63Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.91 17.78a5.7 5.7 0 0 0-5.82 0c-1.4.94-1.4 2.48 0 3.42a5.7 5.7 0 0 0 5.82 0"
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
            opacity={duotone ? "0.4" : "1"}
            d="M18 7.16h-.2a2.57 2.57 0 0 1-2.47-2.58A2.58 2.58 0 1 1 18 7.16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.97 14.44a5.6 5.6 0 0 0 3.94-.72c1.4-.94 1.4-2.48 0-3.42a5.7 5.7 0 0 0-3.97-.71"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.97 7.16h.19a2.57 2.57 0 0 0 2.47-2.58 2.58 2.58 0 1 0-2.67 2.58"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 14.44a5.6 5.6 0 0 1-3.94-.72c-1.41-.94-1.41-2.48 0-3.42a5.7 5.7 0 0 1 3.97-.71"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 14.63h-.19a2.57 2.57 0 0 1-2.48-2.58A2.58 2.58 0 1 1 12 14.63"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.09 17.78c-1.41.94-1.41 2.48 0 3.42a5.7 5.7 0 0 0 5.82 0c1.41-.94 1.41-2.48 0-3.42a5.7 5.7 0 0 0-5.82 0"
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
            d="M17.53 7.57h-.21a2.9 2.9 0 1 1 .21 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.79 14.5a6.2 6.2 0 0 1-4.14.84q.57-1.24.59-2.69 0-1.52-.64-2.78c1.48-.2 3.05.08 4.18.83 1.58 1.04 1.58 2.75.01 3.8"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.44 7.57h.21a2.9 2.9 0 1 0-.21 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.55 12.65q.01 1.47.59 2.72a6.2 6.2 0 0 1-3.96-.86c-1.58-1.05-1.58-2.76 0-3.81a6 6 0 0 1 4-.85 6.4 6.4 0 0 0-.63 2.8"
            fill="currentColor"
          />
          <path
            d="M12.12 15.67h-.26a3.43 3.43 0 1 1 3.57-3.43 3.4 3.4 0 0 1-3.31 3.43"
            fill="currentColor"
          />
          <path
            d="M8.87 17.74c-1.51 1.01-1.51 2.67 0 3.67a6.1 6.1 0 0 0 6.26 0c1.51-1.01 1.51-2.67 0-3.67a6.1 6.1 0 0 0-6.26 0"
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
          <path d="M17.53 7.57h-.21a2.9 2.9 0 1 1 .21 0" fill="currentColor" />
          <path
            d="M20.79 14.5a6.2 6.2 0 0 1-4.14.84q.57-1.24.59-2.69 0-1.52-.64-2.78c1.48-.2 3.05.08 4.18.83 1.58 1.04 1.58 2.75.01 3.8"
            fill="currentColor"
          />
          <path d="M6.44 7.57h.21a2.89 2.89 0 1 0-.21 0" fill="currentColor" />
          <path
            d="M6.55 12.65q.01 1.47.59 2.72a6.2 6.2 0 0 1-3.96-.86c-1.58-1.05-1.58-2.76 0-3.81a6 6 0 0 1 4-.85 6.4 6.4 0 0 0-.63 2.8"
            fill="currentColor"
          />
          <path
            d="M12.12 15.67h-.26a3.4 3.4 0 0 1-3.31-3.43 3.45 3.45 0 0 1 6.89 0 3.43 3.43 0 0 1-3.32 3.43"
            fill="currentColor"
          />
          <path
            d="M8.87 17.74c-1.51 1.01-1.51 2.67 0 3.67a6.1 6.1 0 0 0 6.26 0c1.51-1.01 1.51-2.67 0-3.67a6.1 6.1 0 0 0-6.26 0"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPeople;
