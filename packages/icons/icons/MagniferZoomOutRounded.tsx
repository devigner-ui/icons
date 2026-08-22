import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMagniferZoomOutRounded = forwardRef<SVGSVGElement, IconProps>(
  function IconMagniferZoomOutRounded(
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="11"
              cy="11.0005"
              r="9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M9 11h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M21.81 20.98c-.06.09-.17.2-.4.43s-.34.34-.44.4c-.55.37-1.3.18-1.61-.4-.06-.1-.1-.26-.2-.57a4 4 0 0 1-.16-.62c-.05-.7.53-1.27 1.22-1.22.12.01.29.06.62.16.31.1.46.14.56.2.59.31.78 1.06.41 1.62"
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
              d="M17.82 19.7c-.09-1.1.82-2 1.9-1.92q.29.04.64.16l.07.02.64.23a1.8 1.8 0 0 1 .64 2.55q-.17.22-.41.46l-.05.05-.04.04q-.24.25-.46.41c-.87.58-2.04.28-2.53-.64q-.12-.25-.21-.58l-.02-.06-.02-.07q-.11-.36-.15-.65"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M11.16 20.31a9.16 9.16 0 1 0 0-18.31 9.16 9.16 0 0 0 0 18.31"
                fill="currentColor"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.02 11.16c0-.4.33-.73.73-.73h4.82a.72.72 0 1 1 0 1.45H8.75a.7.7 0 0 1-.73-.72"
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
              fill="currentColor"
              d="M11.01 2a9.02 9.02 0 1 0 .02 18.04A9.02 9.02 0 0 0 11 2m2.49 9.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75m8.49 7.2c-.33-.61-1.03-.95-1.97-.95-.71 0-1.32.29-1.68.79s-.44 1.17-.22 1.84c.43 1.3 1.18 1.59 1.59 1.64l.19.01c.44 0 1.12-.19 1.78-1.18.53-.77.63-1.54.31-2.15"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMagniferZoomOutRounded;
