import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMagniferRounded = forwardRef<SVGSVGElement, IconProps>(
  function IconMagniferRounded(
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
              opacity={duotone ? "0.4" : "1"}
              d="M20.13 11.14a9.1 9.1 0 0 1-9.07 9.15c-5 0-9.06-4.1-9.06-9.15A9.1 9.1 0 0 1 11.06 2c5.01 0 9.07 4.1 9.07 9.14"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.82 19.7c-.09-1.1.82-2 1.9-1.92q.29.04.64.16l.07.02.64.23a1.8 1.8 0 0 1 .64 2.55q-.17.22-.41.46l-.05.05-.04.04q-.24.25-.46.41c-.87.58-2.04.28-2.53-.64q-.12-.25-.21-.58l-.02-.06-.02-.07q-.11-.36-.15-.65"
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
              d="M17.82 19.7c-.09-1.1.82-2 1.9-1.92q.29.04.64.16l.07.02.06.02q.33.09.58.2a1.8 1.8 0 0 1 .64 2.56q-.17.22-.41.46l-.05.05-.04.04q-.24.25-.46.41c-.87.58-2.04.28-2.53-.64a3 3 0 0 1-.23-.64l-.02-.07q-.12-.36-.15-.65"
              fill="currentColor"
            />
            <path
              d="M20.13 11.14a9.1 9.1 0 0 1-9.07 9.15c-5 0-9.06-4.1-9.06-9.15A9.1 9.1 0 0 1 11.06 2c5.01 0 9.07 4.1 9.07 9.14"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMagniferRounded;
