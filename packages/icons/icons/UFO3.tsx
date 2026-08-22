import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUFO3 = forwardRef<SVGSVGElement, IconProps>(function IconUFO3(
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
            d="M18.92 12.15c1.6 2.62 2.07 5 .98 6.1-1.63 1.62-6.12-.22-10.02-4.13S4.13 5.72 5.76 4.1c1.1-1.1 3.47-.63 6.1.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.48 5.44a4.73 4.73 0 0 1 6.7 0l.38.39a4.73 4.73 0 0 1 0 6.69q-.2.2-.46.17c-.5-.09-1.72-.56-3.98-2.81S11.4 6.4 11.31 5.9q-.03-.26.17-.46"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="12"
            cy="11.9999"
            r="1"
            transform="rotate(45 12 11.9999)"
            fill="currentColor"
          />
          <circle
            cx="9.17157"
            cy="7.75748"
            r="1"
            transform="rotate(45 9.17157 7.75748)"
            fill="currentColor"
          />
          <circle
            cx="16.2426"
            cy="14.8285"
            r="1"
            transform="rotate(45 16.2426 14.8285)"
            fill="currentColor"
          />
          <path
            d="m3.64 20.36 4.12-4.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m10 22 2.7-2.22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m2 14 2.22-2.7"
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
            d="M10.83 4.5c-2.2-1.12-4.12-1.35-5.07-.4-1.63 1.63.21 6.12 4.12 10.02 3.9 3.9 8.4 5.75 10.02 4.12.95-.95.72-2.86-.4-5.07q-.3.06-.67 0c-.95-.17-2.43-.9-4.77-3.23S11 6.12 10.83 5.17a2 2 0 0 1 0-.67m1.88 8.2a1 1 0 1 1-1.42-1.4 1 1 0 0 1 1.42 1.4M8.46 8.47a1 1 0 1 0 1.42-1.41 1 1 0 0 0-1.42 1.41m8.49 7.08a1 1 0 1 1-1.41-1.42 1 1 0 0 1 1.41 1.42"
            fill="currentColor"
          />
          <path
            d="M8.29 16.77a.75.75 0 0 0-1.06-1.06L3.1 19.83a.75.75 0 0 0 1.06 1.06z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.3 4.79a4.7 4.7 0 0 1 5.87.65l.39.39a4.7 4.7 0 0 1 .65 5.87h-.11c-.5-.1-1.72-.57-3.98-2.82S12.4 5.4 12.31 4.9z"
              fill="currentColor"
            />
            <path
              d="M4.8 11.77a.75.75 0 0 0-1.16-.95l-2.22 2.7a.75.75 0 1 0 1.16.96z"
              fill="currentColor"
            />
            <path
              d="M13.29 19.3c.26.32.21.8-.1 1.06l-2.71 2.22a.75.75 0 0 1-.96-1.16l2.71-2.22a.75.75 0 0 1 1.06.1"
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
            d="M10.83 4.5c-2.2-1.12-4.12-1.35-5.07-.4-1.63 1.63.21 6.12 4.12 10.02 3.9 3.9 8.4 5.75 10.02 4.12.95-.95.72-2.86-.4-5.07q-.3.06-.67 0c-.95-.17-2.43-.9-4.77-3.23S11 6.12 10.83 5.17a2 2 0 0 1 0-.67m1.88 8.2a1 1 0 1 1-1.42-1.4 1 1 0 0 1 1.42 1.4M8.46 8.47a1 1 0 1 0 1.42-1.41 1 1 0 0 0-1.42 1.41m8.49 7.08a1 1 0 1 1-1.41-1.42 1 1 0 0 1 1.41 1.42"
            fill="currentColor"
          />
          <path
            d="M12.3 4.79a4.7 4.7 0 0 1 5.87.65l.39.39a4.7 4.7 0 0 1 .65 5.87h-.11c-.5-.1-1.72-.57-3.98-2.82S12.4 5.4 12.31 4.9z"
            fill="currentColor"
          />
          <path
            d="M4.8 11.77a.75.75 0 0 0-1.16-.95l-2.22 2.7a.75.75 0 0 0 1.16.96z"
            fill="currentColor"
          />
          <path
            d="M8.29 16.77a.75.75 0 0 0-1.06-1.06L3.1 19.83a.75.75 0 0 0 1.06 1.06z"
            fill="currentColor"
          />
          <path
            d="M13.29 19.3c.26.32.21.8-.1 1.06l-2.71 2.22a.75.75 0 1 1-.96-1.16l2.71-2.22a.75.75 0 0 1 1.06.1"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconUFO3;
