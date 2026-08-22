import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSkateboarding = forwardRef<SVGSVGElement, IconProps>(
  function IconSkateboarding(
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
              d="m3 17 1.2 1.34a2 2 0 0 0 1.5.66h12.6a2 2 0 0 0 1.5-.66L21 17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="7"
              cy="21.0005"
              r="1"
              fill="currentColor"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="17"
              cy="21.0005"
              r="1"
              fill="currentColor"
            />
            <circle
              cx="19"
              cy="4.00049"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M15 16.5v-1.42a3 3 0 0 0-1.5-2.51l-.17-.12a2 2 0 0 1-.19-3.16l.15-.12.45-.36a1.74 1.74 0 0 0-2.01-2.83L8.5 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 15.5h.38c1.36 0 2.66-.54 3.62-1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.5 10a8 8 0 0 0 4 0"
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
            <path d="M21 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
            <path
              d="M11.33 5.35A2.49 2.49 0 0 1 14.2 9.4l-.44.35-.12.1c-.63.54-.57 1.52.11 1.98l.15.1h.01l.16.1a3.8 3.8 0 0 1 1.68 3.03v1.44a.75.75 0 0 1-1.5 0v-1.4a2.3 2.3 0 0 0-1-1.81l-.1-.06-.04-.03h-.02l-.18-.12a2.75 2.75 0 0 1-.1-4.49l.46-.36a.99.99 0 0 0-1.14-1.61L8.9 8.64a.75.75 0 0 1-.8-1.28z"
              fill="currentColor"
            />
            <path
              d="M2.5 16.44a.75.75 0 0 1 1.06.06l1.2 1.34c.24.26.58.41.93.41h12.62c.35 0 .7-.15.93-.41l1.2-1.34a.75.75 0 1 1 1.12 1l-1.2 1.34c-.53.58-1.27.91-2.05.91H5.69c-.78 0-1.52-.33-2.04-.91l-1.2-1.34a.75.75 0 0 1 .05-1.06"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path d="M8 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
              <path
                d="M18 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                fill="currentColor"
              />
              <path
                d="M15.77 9.82c.1-.4.51-.65.91-.55q1.82.45 3.64 0a.75.75 0 0 1 .36 1.46 9 9 0 0 1-4.36 0 .75.75 0 0 1-.55-.91"
                fill="currentColor"
              />
              <path
                d="M11.53 13.47c.3.3.3.77 0 1.06a6 6 0 0 1-4.15 1.72H7a.75.75 0 0 1 0-1.5h.38c1.16 0 2.27-.46 3.09-1.28.3-.3.77-.3 1.06 0"
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
            <path d="M21 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
            <path
              d="M11.33 5.35A2.49 2.49 0 0 1 14.2 9.4l-.44.35-.12.1c-.63.54-.57 1.52.11 1.98l.15.1h.01l.16.1a3.8 3.8 0 0 1 1.68 3.03v1.44a.75.75 0 0 1-1.5 0v-1.4a2.3 2.3 0 0 0-1-1.81l-.1-.06-.04-.03h-.02l-.18-.12a2.75 2.75 0 0 1-.1-4.49l.46-.36a.99.99 0 0 0-1.14-1.61L8.9 8.64a.75.75 0 0 1-.8-1.28z"
              fill="currentColor"
            />
            <path
              d="M2.5 16.44a.75.75 0 0 1 1.06.06l1.2 1.34c.24.26.58.41.93.41h12.62c.35 0 .7-.15.93-.41l1.2-1.34a.75.75 0 1 1 1.12 1l-1.2 1.34c-.53.58-1.27.91-2.05.91H5.69c-.78 0-1.52-.33-2.04-.91l-1.2-1.34a.75.75 0 0 1 .05-1.06"
              fill="currentColor"
            />
            <path d="M8 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path d="M18 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path
              d="M15.77 9.82c.1-.4.51-.65.91-.55q1.82.45 3.64 0a.75.75 0 1 1 .36 1.46 9 9 0 0 1-4.36 0 .75.75 0 0 1-.55-.91"
              fill="currentColor"
            />
            <path
              d="M11.53 13.47c.3.3.3.77 0 1.06a6 6 0 0 1-4.15 1.72H7a.75.75 0 0 1 0-1.5h.38c1.16 0 2.27-.46 3.09-1.28.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSkateboarding;
