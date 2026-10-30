import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMirroringScreen = forwardRef<SVGSVGElement, IconProps>(
  function IconMirroringScreen(
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
            d="M22 11.95v3.55c0 3-2 5-5 5h-1"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 8.5v-1c0-3 2-5 5-5h10c3 0 5 2 5 5"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M3.7 11.21a9.75 9.75 0 0 1 8.6 8.61"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2.62 14.57a7.16 7.16 0 0 1 6.32 6.32"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M1.98 18.36a3.6 3.6 0 0 1 3.16 3.16"
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
              d="M2 8.5v-1c0-3 2-5 5-5h10c3 0 5 2 5 5v8c0 3-2 5-5 5h-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.69 11.21a9.75 9.75 0 0 1 8.61 8.61"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.62 14.57a7.16 7.16 0 0 1 6.32 6.32"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M1.98 18.36a3.6 3.6 0 0 1 3.16 3.16"
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
              d="M2 9V8a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5z"
              fill="currentColor"
            />
            <path
              d="M16.14 15.44a.75.75 0 0 1-.74-.65 7.06 7.06 0 0 0-6.27-6.27.75.75 0 0 1-.65-.84c.05-.41.43-.7.84-.65a8.55 8.55 0 0 1 7.57 7.57.75.75 0 0 1-.65.84z"
              fill="currentColor"
            />
            <path
              d="M13.44 16.3a.75.75 0 0 1-.74-.65 5 5 0 0 0-4.43-4.43.75.75 0 0 1-.65-.84c.05-.41.43-.7.84-.65a6.5 6.5 0 0 1 5.73 5.73.75.75 0 0 1-.65.84z"
              fill="currentColor"
            />
            <path
              d="M10.39 16.81a.75.75 0 0 1-.74-.65 2.1 2.1 0 0 0-1.89-1.89.75.75 0 0 1-.65-.84c.05-.41.43-.7.84-.65a3.65 3.65 0 0 1 3.19 3.19.75.75 0 0 1-.65.84z"
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
              d="M17 3H7a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5m-6.51 13.81-.1.01a.75.75 0 0 1-.74-.65 2.1 2.1 0 0 0-1.89-1.89.75.75 0 0 1-.65-.84c.05-.41.43-.7.84-.65a3.65 3.65 0 0 1 3.19 3.19c.05.4-.24.78-.65.83m3.05-.51-.1.01a.75.75 0 0 1-.74-.65 5 5 0 0 0-4.43-4.43.75.75 0 0 1-.65-.84c.05-.41.43-.7.84-.65a6.5 6.5 0 0 1 5.73 5.73c.05.4-.24.77-.65.83m2.7-.87-.1.01a.75.75 0 0 1-.74-.65 7.06 7.06 0 0 0-6.27-6.27.75.75 0 0 1-.65-.84c.05-.41.43-.7.84-.65a8.55 8.55 0 0 1 7.57 7.57.74.74 0 0 1-.65.83"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMirroringScreen;
