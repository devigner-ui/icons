import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCropMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconCropMinimalistic(
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
              d="M22 19h-9c-3.77 0-5.66 0-6.83-1.17S5 14.77 5 11V2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 5h3c3.77 0 5.66 0 6.83 1.17S19 9.23 19 13v3M2 5h3m14 14v3"
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
              opacity={duotone ? "0.4" : "1"}
              d="M3.17 3.17C2 4.34 2 6.23 2 10v4c0 3.77 0 5.66 1.17 6.83S6.23 22 10 22h4c3.77 0 5.66 0 6.83-1.17S22 17.77 22 14v-4c0-3.77 0-5.66-1.17-6.83S17.77 2 14 2h-4C6.23 2 4.34 2 3.17 3.17"
              fill="currentColor"
            />
            <path
              d="M8.75 6a.75.75 0 0 0-1.5 0v1.25H6a.75.75 0 0 0 0 1.5h1.25v3.3c0 .9 0 1.65.08 2.24.08.63.27 1.2.73 1.65.45.46 1.02.65 1.65.73q.89.1 2.24.08h3.3V18a.75.75 0 0 0 1.5 0v-1.25H18a.75.75 0 0 0 0-1.5h-6c-.96 0-1.61 0-2.1-.07-.46-.06-.65-.17-.78-.3s-.24-.32-.3-.79c-.07-.48-.07-1.13-.07-2.09z"
              fill="currentColor"
            />
            <path
              d="M12 8.75c.96 0 1.61 0 2.1.07.46.06.65.17.78.3s.24.32.3.79c.07.48.07 1.13.07 2.09v1.47a.75.75 0 0 0 1.5 0v-1.52q.02-1.35-.08-2.24a2.7 2.7 0 0 0-.73-1.65 2.7 2.7 0 0 0-1.65-.73c-.59-.08-1.34-.08-2.24-.08h-1.52a.75.75 0 0 0 0 1.5z"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.17 3.17C2 4.34 2 6.23 2 10v4c0 3.77 0 5.66 1.17 6.83S6.23 22 10 22h4c3.77 0 5.66 0 6.83-1.17S22 17.77 22 14v-4c0-3.77 0-5.66-1.17-6.83S17.77 2 14 2h-4C6.23 2 4.34 2 3.17 3.17M8.75 6a.75.75 0 0 0-1.5 0v1.25H6a.75.75 0 0 0 0 1.5h1.25v3.3c0 .9 0 1.65.08 2.24.08.63.27 1.2.73 1.65.45.46 1.02.65 1.65.73q.89.1 2.24.08h3.3V18a.75.75 0 0 0 1.5 0v-1.25H18a.75.75 0 0 0 0-1.5h-6c-.96 0-1.61 0-2.1-.07-.46-.06-.65-.17-.78-.3s-.24-.32-.3-.79c-.07-.48-.07-1.13-.07-2.09zM12 8.75c.96 0 1.61 0 2.1.07.46.06.65.17.78.3s.24.32.3.79c.07.48.07 1.13.07 2.09v1.47a.75.75 0 0 0 1.5 0v-1.52q.02-1.35-.08-2.24a2.7 2.7 0 0 0-.73-1.65 2.7 2.7 0 0 0-1.65-.73c-.59-.08-1.34-.08-2.24-.08h-1.52a.75.75 0 0 0 0 1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCropMinimalistic;
