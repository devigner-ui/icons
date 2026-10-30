import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStarsSparkles = forwardRef<SVGSVGElement, IconProps>(
  function IconStarsSparkles(
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
            d="M7.78 9.75c-2.09.48-3.13.72-3.38 1.52s.46 1.63 1.89 3.3l.37.43c.4.47.6.7.7 1s.06.6 0 1.24l-.06.58c-.22 2.22-.32 3.33.33 3.83s1.63.04 3.58-.86l.51-.23c.56-.26.84-.39 1.13-.39.3 0 .57.13 1.13.39l.5.23c1.96.9 2.94 1.35 3.6.86.64-.5.54-1.61.32-3.83m1.01-3.25c1.43-1.67 2.14-2.5 1.9-3.3-.26-.8-1.3-1.04-3.4-1.51l-.53-.13c-.6-.13-.9-.2-1.13-.38-.24-.18-.4-.45-.7-1l-.28-.5c-1.08-1.93-1.62-2.9-2.42-2.9s-1.34.97-2.42 2.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M5.34 1.85a5 5 0 0 0 .92 2.08c.63.63 2.09.92 2.09.92s-1.46.29-2.08.92-.92 2.08-.92 2.08-.29-1.46-.92-2.08-2.08-.92-2.08-.92 1.46-.29 2.08-.92.92-2.08.92-2.08Z"
            stroke="currentColor"
            strokeLinejoin="round"
          />
          <path
            d="M18.35 4.85h2m-1 1v-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
              d="M10.58 7.9C11.66 5.97 12.2 5 13 5s1.34.97 2.42 2.9l.28.5c.3.55.46.82.7 1s.53.25 1.13.38l.54.13c2.09.47 3.13.7 3.38 1.5s-.46 1.64-1.89 3.3l-.37.44c-.4.47-.6.7-.7 1s-.06.6 0 1.24l.06.58c.22 2.22.32 3.33-.33 3.83s-1.63.04-3.58-.86l-.51-.23c-.56-.26-.84-.39-1.13-.39-.3 0-.57.13-1.13.39l-.5.23c-1.96.9-2.94 1.35-3.6.86-.64-.5-.54-1.61-.32-3.83l.05-.58c.07-.63.1-.95 0-1.24-.09-.3-.29-.53-.7-1l-.36-.43c-1.43-1.67-2.14-2.5-1.9-3.3.26-.8 1.3-1.04 3.4-1.51l.53-.13c.6-.13.9-.2 1.13-.38.24-.18.4-.45.7-1z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.49 2a5 5 0 0 0 .92 2.08C7.04 4.71 8.5 5 8.5 5s-1.46.29-2.08.92S5.5 8 5.5 8s-.29-1.46-.92-2.08S2.5 5 2.5 5s1.46-.29 2.08-.92S5.5 2 5.5 2z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.5 5h2m-1 1V4"
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
              d="M10.38 7.7C11.46 5.77 12 4.8 12.8 4.8s1.34.97 2.42 2.9l.28.5c.3.55.46.82.7 1s.53.25 1.13.38l.54.13c2.09.47 3.13.7 3.38 1.5s-.46 1.64-1.89 3.3l-.37.44c-.4.47-.6.7-.7 1s-.06.6 0 1.24l.06.58c.22 2.22.32 3.33-.33 3.83s-1.63.04-3.58-.86l-.51-.23c-.56-.26-.84-.39-1.13-.39-.3 0-.57.13-1.13.39l-.5.23c-1.96.9-2.94 1.35-3.6.86-.64-.5-.54-1.61-.32-3.83l.05-.58c.07-.63.1-.95 0-1.24-.09-.3-.29-.53-.7-1l-.36-.43c-1.43-1.67-2.14-2.5-1.9-3.3.26-.8 1.3-1.04 3.4-1.51l.53-.13c.6-.13.9-.2 1.13-.38.24-.18.4-.45.7-1z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.17 2.3c.03-.1.22-.1.25 0 .14.48.4 1.2.79 1.58.4.4 1.1.65 1.59.79.1.03.1.22 0 .25-.48.14-1.2.4-1.58.79-.4.4-.65 1.1-.79 1.59-.03.1-.22.1-.25 0-.14-.48-.4-1.2-.79-1.58a4 4 0 0 0-1.59-.79c-.1-.03-.1-.22 0-.25.48-.14 1.2-.4 1.58-.79.4-.4.65-1.1.79-1.59"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.3 3.05c.41 0 .75.34.75.75v.25h.25a.75.75 0 0 1 0 1.5h-.25v.25a.75.75 0 0 1-1.5 0v-.25h-.25a.75.75 0 0 1 0-1.5h.25V3.8c0-.41.34-.75.75-.75"
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
              d="M10.38 7.7C11.46 5.77 12 4.8 12.8 4.8s1.34.97 2.42 2.9l.28.5c.3.55.46.82.7 1s.53.25 1.13.38l.54.13c2.09.47 3.13.7 3.38 1.5s-.46 1.64-1.89 3.3l-.37.44c-.4.47-.6.7-.7 1s-.06.6 0 1.24l.06.58c.22 2.22.32 3.33-.33 3.83s-1.63.04-3.58-.86l-.51-.23c-.56-.26-.84-.39-1.13-.39-.3 0-.57.13-1.13.39l-.5.23c-1.96.9-2.94 1.35-3.6.86-.64-.5-.54-1.61-.32-3.83l.05-.58c.07-.63.1-.95 0-1.24-.09-.3-.29-.53-.7-1l-.36-.43c-1.43-1.67-2.14-2.5-1.9-3.3.26-.8 1.3-1.04 3.4-1.51l.53-.13c.6-.13.9-.2 1.13-.38.24-.18.4-.45.7-1z"
              fill="currentColor"
            />
            <path
              d="M5.17 2.3c.03-.1.22-.1.25 0 .14.48.4 1.2.79 1.58.4.4 1.1.65 1.59.79.1.03.1.22 0 .25-.48.14-1.2.4-1.58.79-.4.4-.65 1.1-.79 1.59-.03.1-.22.1-.25 0-.14-.48-.4-1.2-.79-1.58a4 4 0 0 0-1.59-.79c-.1-.03-.1-.22 0-.25.48-.14 1.2-.4 1.58-.79.4-.4.65-1.1.79-1.59"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.3 3.05c.41 0 .75.34.75.75v.25h.25a.75.75 0 0 1 0 1.5h-.25v.25a.75.75 0 0 1-1.5 0v-.25h-.25a.75.75 0 0 1 0-1.5h.25V3.8c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStarsSparkles;
