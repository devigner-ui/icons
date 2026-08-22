import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTelescope = forwardRef<SVGSVGElement, IconProps>(
  function IconTelescope(
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
              d="m12.24 6.18-3.68 2.1c-.83.47-1.25.7-1.36 1.1-.1.41.14.82.62 1.65l.6 1.01c.47.8.7 1.2 1.1 1.31.4.1.8-.12 1.6-.58l3.74-2.12m-7.8-.93-3.64 2.06c-.85.49-1.28.73-1.4 1.15-.1.4.14.83.64 1.67.49.84.74 1.26 1.16 1.37s.84-.13 1.7-.61l3.63-2.07m12.2-8.1L20.3 3.4c-.5-.84-.75-1.26-1.17-1.37s-.84.13-1.7.61l-3.68 2.1c-.83.47-1.25.7-1.36 1.1-.1.41.14.82.62 1.65l1.12 1.9c.47.8.7 1.2 1.1 1.31s.8-.12 1.61-.58L20.58 8c.85-.48 1.28-.73 1.4-1.14.1-.41-.14-.83-.64-1.68"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m16 22-4-9.5L8 22"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M17.98 2.6c.46-.26.76-.43 1-.52s.33-.09.4-.07c.06.02.15.06.3.25.16.2.33.49.6.94l1.1 1.85c.27.45.44.75.54.98s.09.3.07.36-.06.14-.25.29q-.28.2-.97.58l-3.93 2.2q-.64.37-.95.5c-.21.08-.3.08-.35.06-.06-.01-.13-.05-.27-.23a9 9 0 0 1-.57-.89l-1.18-1.98a9 9 0 0 1-.53-.95c-.1-.22-.08-.3-.07-.36.02-.05.05-.13.24-.27.2-.15.49-.31.94-.57z"
                fill="currentColor"
              />
              <path
                d="m6.63 10.2-3.4 1.9q-.67.37-.97.58c-.2.15-.23.23-.25.29s-.02.15.07.36c.1.24.27.53.54.98s.44.74.6.94.23.23.3.25.17.02.4-.07q.33-.14 1-.53l3.38-1.89q-.23-.34-.5-.8l-.67-1.12q-.31-.5-.5-.9"
                fill="currentColor"
              />
            </g>
            <path
              d="m8.64 8.45 3.45-1.93q.19.39.5.9l1.21 2.04.5.8-1.54.87 4.18 9.79c.17.4-.02.85-.42 1.02a.8.8 0 0 1-1.04-.42L12 13.36l-3.48 8.16a.8.8 0 0 1-1.04.42.8.8 0 0 1-.42-1.02l3.7-8.67q-.58.33-.88.46c-.21.08-.3.07-.35.06-.06-.01-.14-.05-.28-.23a9 9 0 0 1-.57-.9l-.62-1.04a9 9 0 0 1-.53-.96c-.1-.21-.08-.3-.07-.35.01-.06.05-.13.24-.27q.28-.21.94-.57"
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
              d="M17.98 2.6c.46-.26.76-.43 1-.52s.33-.09.4-.07c.06.02.15.06.3.25.16.2.33.49.6.94l1.1 1.85c.27.45.44.75.54.98s.09.3.07.36-.06.14-.25.29q-.28.2-.97.58l-3.93 2.2q-.64.37-.95.5c-.21.08-.3.08-.35.06-.06-.01-.13-.05-.27-.23a9 9 0 0 1-.57-.89l-1.18-1.98a9 9 0 0 1-.53-.95c-.1-.22-.08-.3-.07-.36.02-.05.05-.13.24-.27.2-.15.49-.31.94-.57z"
              fill="currentColor"
            />
            <path
              d="m8.64 8.45 3.45-1.93q.19.39.5.9l1.21 2.04.5.8-1.54.87 4.18 9.79c.17.4-.02.85-.42 1.02a.8.8 0 0 1-1.04-.42L12 13.36l-3.48 8.16a.8.8 0 0 1-1.04.42.8.8 0 0 1-.42-1.02l3.7-8.67q-.58.33-.88.46c-.21.08-.3.07-.35.06-.06-.01-.14-.05-.28-.23a9 9 0 0 1-.57-.9l-.62-1.04a9 9 0 0 1-.53-.96c-.1-.21-.08-.3-.07-.35.01-.06.05-.13.24-.27q.28-.21.94-.57"
              fill="currentColor"
            />
            <path
              d="m6.63 10.2-3.4 1.9q-.67.37-.97.58c-.2.15-.23.23-.25.29s-.02.15.07.36c.1.24.27.53.54.98s.44.74.6.94.23.23.3.25.17.02.4-.07q.33-.14 1-.53l3.38-1.89q-.23-.34-.5-.8l-.67-1.12q-.31-.5-.5-.9"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTelescope;
