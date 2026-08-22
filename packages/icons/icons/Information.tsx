import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconInformation = forwardRef<SVGSVGElement, IconProps>(
  function IconInformation(
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
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.75 2.45a2 2 0 0 1 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58a2 2 0 0 1 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35a2 2 0 0 1-2.51 0l-1.58-1.35a2.3 2.3 0 0 0-1.26-.46H6.17a1.94 1.94 0 0 1-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59a2 2 0 0 1 0-2.5l1.35-1.59c.25-.3.45-.86.45-1.25V6.2c0-1.06.87-1.93 1.93-1.93H7.9c.4 0 .96-.21 1.26-.46z"
            />
            <g
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={duotone ? "0.4" : "1"}
            >
              <path strokeWidth={strokeWidth} d="M12 8.13v4.83" />
              <path
                strokeWidth={Number(strokeWidth) * 1.2}
                d="M12 16"
              />
            </g>
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
              d="M11.42 2.45a2 2 0 0 1 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58a2 2 0 0 1 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35a2 2 0 0 1-2.51 0l-1.58-1.35a2.3 2.3 0 0 0-1.26-.46H6.84a1.94 1.94 0 0 1-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59a2 2 0 0 1 0-2.5l1.35-1.59c.25-.3.45-.86.45-1.25V6.2c0-1.06.87-1.93 1.93-1.93h1.73c.4 0 .96-.21 1.26-.46z"
              fill="currentColor"
            />
            <path
              d="M12.67 16.87a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
              fill="currentColor"
            />
            <path
              d="M12.67 13.72a.76.76 0 0 1-.75-.75V8.13c0-.41.34-.75.75-.75s.75.34.75.75v4.83c0 .42-.33.76-.75.76"
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
              d="m22.23 10.74-1.35-1.58c-.25-.3-.46-.86-.46-1.26V6.2c0-1.06-.87-1.93-1.93-1.93h-1.7c-.4 0-.97-.21-1.27-.46l-1.58-1.35a2 2 0 0 0-2.51 0l-1.6 1.35c-.3.25-.86.46-1.26.46H6.84c-1.06 0-1.93.87-1.93 1.93v1.7c0 .39-.2.95-.45 1.25l-1.35 1.59c-.58.7-.58 1.82 0 2.5l1.35 1.59c.25.29.45.86.45 1.25v1.71c0 1.06.87 1.93 1.93 1.93h1.74c.39 0 .96.21 1.26.46l1.58 1.35a2 2 0 0 0 2.51 0l1.58-1.35c.3-.25.86-.46 1.26-.46h1.7c1.06 0 1.93-.87 1.93-1.93v-1.7c0-.4.21-.96.46-1.26l1.35-1.58c.61-.68.61-1.81.02-2.51M11.92 8.13c0-.41.34-.75.75-.75s.75.34.75.75v4.83c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75zm.75 8.74a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconInformation;
