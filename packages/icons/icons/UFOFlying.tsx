import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUFOFlying = forwardRef<SVGSVGElement, IconProps>(function IconUFOFlying(
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
            d="m4.34 19.36 4.12-4.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m10.7 21 2.7-2.22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m2.7 13 2.22-2.7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8.56 3c1.15.09 2.57.64 4.09 1.56M5.97 5.58c.17 2.13 1.9 5.23 4.7 8.02 3.91 3.91 8.4 5.76 10.03 4.13.83-.83.76-2.39-.01-4.23q-.38-.9-.97-1.87m-4.8-2.27c-2.26-2.25-2.73-3.48-2.82-3.97-.03-.18.06-.34.18-.46a4.73 4.73 0 0 1 6.69 0l.38.38a4.73 4.73 0 0 1 0 6.69q-.19.2-.46.18c-.33-.06-1-.3-2.1-1.15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M13.73 12.27a1 1 0 1 1-1.42-1.41 1 1 0 0 1 1.42 1.41Z"
            fill="currentColor"
          />
          <path
            d="M10.9 8.03A1 1 0 1 1 9.49 6.6a1 1 0 0 1 1.41 1.42Z"
            fill="currentColor"
          />
          <path
            d="M17.97 15.1a1 1 0 1 1-1.41-1.41 1 1 0 0 1 1.41 1.41Z"
            fill="currentColor"
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
            d="M19.67 11.48c1.6 2.62 2.07 5 .98 6.1-1.63 1.62-6.12-.22-10.02-4.13S4.88 5.05 6.51 3.43c1.1-1.1 3.47-.63 6.1.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.23 4.77a4.73 4.73 0 0 1 6.7 0l.38.39a4.73 4.73 0 0 1 0 6.69q-.2.2-.46.17c-.5-.09-1.72-.56-3.98-2.81s-2.72-3.48-2.81-3.98q-.03-.26.17-.46"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="12"
            cy="11.9999"
            r="1"
            transform="translate(0.75 -0.67) rotate(45 12 11.9999)"
            fill="currentColor"
          />
          <circle
            cx="9.17157"
            cy="7.75748"
            r="1"
            transform="translate(0.75 -0.67) rotate(45 9.17157 7.75748)"
            fill="currentColor"
          />
          <circle
            cx="16.2426"
            cy="14.8285"
            r="1"
            transform="translate(0.75 -0.67) rotate(45 16.2426 14.8285)"
            fill="currentColor"
          />
          <path
            d="m4.39 19.69 4.12-4.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m10.75 21.33 2.7-2.22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m2.75 13.33 2.22-2.7"
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
            d="M11.98 3.35C9.78 2.23 7.86 2 6.91 2.95c-1.63 1.63.21 6.12 4.12 10.02 3.9 3.9 8.4 5.75 10.02 4.12.95-.95.72-2.86-.4-5.07q-.3.06-.67 0c-.95-.17-2.43-.9-4.77-3.23s-3.06-3.82-3.23-4.77a2 2 0 0 1 0-.67m1.88 8.2a1 1 0 1 1-1.42-1.4 1 1 0 0 1 1.42 1.4M9.61 7.32a1 1 0 1 0 1.42-1.41 1 1 0 0 0-1.42 1.41m8.49 7.08a1 1 0 1 1-1.41-1.42 1 1 0 0 1 1.41 1.42"
            fill="currentColor"
          />
          <path
            d="M9.44 15.62a.75.75 0 0 0-1.06-1.06l-4.13 4.12a.75.75 0 0 0 1.06 1.06z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M13.45 3.64a4.7 4.7 0 0 1 5.87.65l.39.39a4.7 4.7 0 0 1 .65 5.87h-.11c-.5-.1-1.72-.57-3.98-2.82s-2.72-3.48-2.81-3.98z"
              fill="currentColor"
            />
            <path
              d="M5.95 10.62a.75.75 0 0 0-1.16-.95l-2.22 2.7a.75.75 0 1 0 1.16.96z"
              fill="currentColor"
            />
            <path
              d="M14.44 18.15c.26.32.21.8-.1 1.06l-2.71 2.22a.75.75 0 0 1-.96-1.16l2.71-2.22a.75.75 0 0 1 1.06.1"
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
            d="M11.98 3.35C9.78 2.23 7.86 2 6.91 2.95c-1.63 1.63.21 6.12 4.12 10.02 3.9 3.9 8.4 5.75 10.02 4.12.95-.95.72-2.86-.4-5.07q-.3.06-.67 0c-.95-.17-2.43-.9-4.77-3.23s-3.06-3.82-3.23-4.77a2 2 0 0 1 0-.67m1.88 8.2a1 1 0 1 1-1.42-1.4 1 1 0 0 1 1.42 1.4M9.61 7.32a1 1 0 1 0 1.42-1.41 1 1 0 0 0-1.42 1.41m8.49 7.08a1 1 0 1 1-1.41-1.42 1 1 0 0 1 1.41 1.42"
            fill="currentColor"
          />
          <path
            d="M13.45 3.64a4.7 4.7 0 0 1 5.87.65l.39.39a4.7 4.7 0 0 1 .65 5.87h-.11c-.5-.1-1.72-.57-3.98-2.82s-2.72-3.48-2.81-3.98z"
            fill="currentColor"
          />
          <path
            d="M5.95 10.62a.75.75 0 0 0-1.16-.95l-2.22 2.7a.75.75 0 0 0 1.16.96z"
            fill="currentColor"
          />
          <path
            d="M9.44 15.62a.75.75 0 0 0-1.06-1.06l-4.13 4.12a.75.75 0 0 0 1.06 1.06z"
            fill="currentColor"
          />
          <path
            d="M14.44 18.15c.26.32.21.8-.1 1.06l-2.71 2.22a.75.75 0 1 1-.96-1.16l2.71-2.22a.75.75 0 0 1 1.06.1"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconUFOFlying;
