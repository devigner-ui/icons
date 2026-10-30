import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUserHandUp = forwardRef<SVGSVGElement, IconProps>(
  function IconUserHandUp(
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
            d="M9 13h8a3.37 3.37 0 0 1 3.35 2.98L21 21.5M9 13a7.5 7.5 0 0 1-5.62-5.47L3 6m6 7v5c0 1.89 0 2.83.59 3.41.58.59 1.52.59 3.41.59s2.83 0 3.41-.59C17 20.83 17 19.9 17 18v-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <circle
            cx="13"
            cy="6"
            r="4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
              d="m21 21.5-.65-5.52A3.37 3.37 0 0 0 17 13H9c-3 0-4.93-2.73-5.62-5.47L3 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 13v5c0 1.89 0 2.83.59 3.41.58.59 1.52.59 3.41.59s2.83 0 3.41-.59C17 20.83 17 19.9 17 18v-5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="13"
              cy="6"
              r="4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M2.82 5.27c.4-.1.8.15.9.55l.39 1.53a6.7 6.7 0 0 0 4.97 4.9H17c2.1 0 3.85 1.57 4.1 3.64l.64 5.52a.75.75 0 0 1-1.48.18l-.65-5.52A2.6 2.6 0 0 0 17 13.75H8.92l-.08-.02a8.2 8.2 0 0 1-6.19-6.02l-.38-1.53c-.1-.4.15-.8.55-.9"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 13.75V18c0 1.89 0 2.83.59 3.41.58.59 1.52.59 3.41.59s2.83 0 3.41-.59C17 20.83 17 19.9 17 18v-4.25z"
              fill="currentColor"
            />
            <circle cx="13" cy="6" r="4" fill="currentColor" />
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
            <path d="M13 9.6a4 4 0 1 0 0-8 4 4 0 0 0 0 8" fill="currentColor" />
            <path
              d="M3.73 5.42a.75.75 0 1 0-1.46.36l.38 1.53a8.2 8.2 0 0 0 5.6 5.87v4.47q-.02 1.35.08 2.24c.08.63.27 1.2.73 1.66s1.02.64 1.65.72q.89.1 2.24.08h.1q1.35.02 2.24-.08c.63-.08 1.2-.27 1.65-.73.46-.45.65-1.02.73-1.65q.1-.89.08-2.24v-4.2c.98.3 1.73 1.15 1.86 2.22l.65 5.52a.75.75 0 0 0 1.48-.18l-.64-5.52a4.1 4.1 0 0 0-4.1-3.64H9.08a6.7 6.7 0 0 1-4.97-4.9z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUserHandUp;
