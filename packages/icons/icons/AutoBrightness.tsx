import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAutoBrightness = forwardRef<SVGSVGElement, IconProps>(
  function IconAutoBrightness(
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
              d="M11.42 2.45a2 2 0 0 1 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58a2 2 0 0 1 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35a2 2 0 0 1-2.51 0l-1.58-1.35a2.3 2.3 0 0 0-1.26-.46H6.84a1.94 1.94 0 0 1-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59a2 2 0 0 1 0-2.5l1.35-1.59c.25-.3.45-.86.45-1.25V6.2c0-1.06.87-1.93 1.93-1.93h1.73c.4 0 .96-.21 1.26-.46z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m9.17 15.94 3.5-7.88 3.5 7.88"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinejoin="bevel"
              />
              <path
                d="M14.42 13.31h-3.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
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
              d="m15.48 16.24-2.81-6.33-2.81 6.33-1.38-.61 3.5-7.87h1.38l3.5 7.87z"
              fill="currentColor"
            />
            <path
              d="M14.42 14.06h-3.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3.5c.41 0 .75.34.75.75s-.34.75-.75.75"
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
              d="m22.23 10.74-1.35-1.58c-.25-.3-.46-.86-.46-1.26V6.2c0-1.06-.87-1.93-1.93-1.93h-1.7c-.4 0-.97-.21-1.27-.46l-1.58-1.35a2 2 0 0 0-2.51 0l-1.6 1.35c-.3.25-.86.46-1.26.46H6.84c-1.06 0-1.93.87-1.93 1.93v1.7c0 .39-.2.95-.45 1.25l-1.35 1.59c-.58.7-.58 1.82 0 2.5l1.35 1.59c.25.29.45.86.45 1.25v1.71c0 1.06.87 1.93 1.93 1.93h1.74c.39 0 .96.21 1.26.46l1.58 1.35a2 2 0 0 0 2.51 0l1.58-1.35c.3-.25.86-.46 1.26-.46h1.7c1.06 0 1.93-.87 1.93-1.93v-1.7c0-.4.21-.96.46-1.26l1.35-1.58c.61-.68.61-1.81.02-2.51m-6.75 5.5-.98-2.2-.09.02h-3.5l-.09-.02-.98 2.2-1.37-.61 3.5-7.88h1.37l3.5 7.88z"
              fill="currentColor"
            />
            <path d="M11.49 12.56h2.36l-1.18-2.65z" fill="currentColor" />
          </svg>
        )}
      </>
    );
  },
);

export default IconAutoBrightness;
