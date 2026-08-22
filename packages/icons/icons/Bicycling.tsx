import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBicycling = forwardRef<SVGSVGElement, IconProps>(
  function IconBicycling(
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
              cx="15"
              cy="4.00049"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="6"
              cy="18.0005"
              r="3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="18"
              cy="18.0005"
              r="3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M18.5 10h-2.03c-1.22 0-1.83 0-2.38-.23-.55-.22-.98-.65-1.85-1.51l-.57-.58c-.79-.78-1.18-1.17-1.64-1.13-.47.05-.78.5-1.42 1.41L7.4 9.73c-.64.92-.97 1.39-.84 1.84s.65.68 1.68 1.13l1.48.65c1.36.59 2.04.89 2.37 1.49s.21 1.33-.02 2.8L12 18"
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
            <path d="M17 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m12.16 7.12.61.6c.91.9 1.23 1.2 1.6 1.36.39.16.82.17 2.1.17h2.03a.75.75 0 0 1 0 1.5h-2.17c-1.08 0-1.83 0-2.52-.28a7 7 0 0 1-2-1.58l-.1-.1-.57-.58c-.41-.4-.66-.65-.86-.8l-.19-.1-.16.13c-.17.19-.37.47-.7.95L8 10.16a10 10 0 0 0-.65 1l-.07.2v.02l.17.12c.22.13.54.28 1.08.51l1.52.67q.98.41 1.61.76c.45.26.83.57 1.08 1.04.25.46.31.95.29 1.46q-.04.74-.23 1.78l-.06.4a.75.75 0 1 1-1.48-.24l.06-.36c.12-.75.2-1.25.21-1.64.02-.36-.03-.55-.1-.68-.08-.14-.2-.28-.53-.46-.33-.2-.8-.4-1.5-.7l-1.47-.65-.04-.02q-.73-.3-1.23-.6a1.7 1.7 0 0 1-.83-1c-.14-.48 0-.91.18-1.28.17-.34.44-.72.73-1.15l.03-.04L8 7.53l.03-.04q.43-.65.8-1.07c.28-.3.63-.57 1.13-.61s.9.16 1.21.4c.3.22.63.55 1 .9"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 14.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 14.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
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
            <path d="M17 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m12.16 7.12.61.6c.91.9 1.23 1.2 1.6 1.36.39.16.82.17 2.1.17h2.03a.75.75 0 0 1 0 1.5h-2.17c-1.08 0-1.83 0-2.52-.28a7 7 0 0 1-2-1.58l-.1-.1-.57-.58c-.41-.4-.66-.65-.86-.8l-.19-.1-.16.13c-.17.19-.37.47-.7.95L8 10.16a10 10 0 0 0-.65 1l-.07.2v.02l.17.12c.22.13.54.28 1.08.51l1.52.67q.98.41 1.61.76c.45.26.83.57 1.08 1.04.25.46.31.95.29 1.46q-.04.74-.23 1.78l-.06.4a.75.75 0 1 1-1.48-.24l.06-.36c.12-.75.2-1.25.21-1.64.02-.36-.03-.55-.1-.68-.08-.14-.2-.28-.53-.46-.33-.2-.8-.4-1.5-.7l-1.47-.65-.04-.02q-.74-.3-1.23-.6a1.7 1.7 0 0 1-.83-1c-.14-.48 0-.91.18-1.28q.28-.5.73-1.15l.03-.04L8 7.53l.03-.04q.43-.65.8-1.07c.28-.3.63-.57 1.13-.61s.9.16 1.22.4c.3.22.62.55.98.9M6 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M2.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M18 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M14.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBicycling;
