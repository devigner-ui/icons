import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMedalStarSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconMedalStarSquare(
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
            d="M17 6.25c0-1.89 0-2.83-.59-3.41-.58-.59-1.51-.59-3.41-.59h-2c-1.89 0-2.83 0-3.41.59C7 3.42 7 4.35 7 6.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M11.15 11.27c.38-.68.57-1.02.85-1.02s.47.34.85 1.02l.1.18c.11.2.16.29.25.35q.1.1.4.14l.19.04c.74.17 1.1.25 1.2.53.08.29-.17.58-.67 1.17l-.13.15c-.15.17-.22.25-.25.36s-.02.21 0 .43l.02.2c.08.8.11 1.18-.12 1.36-.23.17-.57.01-1.26-.3l-.18-.09c-.2-.09-.3-.13-.4-.13s-.2.04-.4.13l-.18.09c-.69.31-1.03.47-1.26.3-.23-.18-.2-.57-.12-1.35l.02-.2c.02-.23.03-.34 0-.44a1 1 0 0 0-.25-.36l-.13-.15c-.5-.59-.75-.88-.66-1.17s.45-.36 1.2-.53l.18-.04q.3-.06.4-.14c.09-.06.14-.16.25-.35z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M15.58 20.46c-1.76.88-2.64 1.32-3.58 1.32s-1.82-.44-3.58-1.32c-2.15-1.07-3.22-1.61-3.82-2.58S4 15.71 4 13.31v-1.06c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h4c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v1.06c0 2.4 0 3.6-.6 4.57q-.17.28-.4.52"
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
              opacity={duotone ? "0.4" : "1"}
              d="M17 6.25c0-1.89 0-2.83-.59-3.41-.58-.59-1.51-.59-3.41-.59h-2c-1.89 0-2.83 0-3.41.59C7 3.42 7 4.35 7 6.25"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.15 11.27c.38-.68.57-1.02.85-1.02s.47.34.85 1.02l.1.18c.11.2.16.29.25.35q.1.1.4.14l.19.04c.74.17 1.1.25 1.2.53.08.29-.17.58-.67 1.17l-.13.15c-.15.17-.22.25-.25.36s-.02.21 0 .43l.02.2c.08.8.11 1.18-.12 1.36-.23.17-.57.01-1.26-.3l-.18-.09c-.2-.09-.3-.13-.4-.13s-.2.04-.4.13l-.18.09c-.69.31-1.03.47-1.26.3-.23-.18-.2-.57-.12-1.35l.02-.2c.02-.23.03-.34 0-.44a1 1 0 0 0-.25-.36l-.13-.15c-.5-.59-.75-.88-.66-1.17s.45-.36 1.2-.53l.18-.04c.21-.05.32-.07.4-.14.09-.06.14-.16.25-.35z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M14 6.25h-4c-2.83 0-4.24 0-5.12.88S4 9.43 4 12.25v1.06c0 2.4 0 3.6.6 4.57s1.67 1.5 3.82 2.58c1.76.88 2.64 1.32 3.58 1.32s1.82-.44 3.58-1.32c2.15-1.07 3.23-1.61 3.82-2.58.6-.97.6-2.17.6-4.57v-1.06c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88"
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
              opacity={duotone ? "0.4" : "1"}
              d="M13 2.2h-2c-1.89 0-2.83 0-3.41.59C7 3.37 7 4.3 7 6.2v2h10v-2c0-1.89 0-2.83-.59-3.41-.58-.59-1.51-.59-3.41-.59"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 6.2h4c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v1.06c0 2.4 0 3.6-.6 4.57s-1.67 1.5-3.82 2.58c-1.76.88-2.64 1.32-3.58 1.32s-1.82-.44-3.58-1.32C6.27 19.34 5.2 18.8 4.6 17.83S4 15.66 4 13.26V12.2c0-2.83 0-4.24.88-5.12S7.18 6.2 10 6.2m2 4c-.28 0-.47.34-.85 1.02l-.1.18c-.11.2-.16.29-.25.35q-.1.1-.4.14l-.19.04c-.74.17-1.1.25-1.2.53-.08.29.17.58.67 1.17l.13.15c.15.17.22.25.25.36s.02.21 0 .43l-.02.2c-.08.8-.11 1.18.12 1.36.23.17.57.01 1.26-.3l.18-.09c.2-.09.3-.13.4-.13s.2.04.4.13l.18.09c.69.31 1.03.47 1.26.3.23-.18.2-.57.12-1.35l-.02-.2a1 1 0 0 1 0-.44q.03-.13.25-.36l.13-.15c.5-.59.75-.88.66-1.17s-.45-.36-1.2-.53l-.18-.04q-.3-.06-.4-.14a1 1 0 0 1-.25-.35l-.1-.18c-.38-.68-.57-1.02-.85-1.02"
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
              d="M10 6.2h4c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v1.06c0 2.4 0 3.6-.6 4.57s-1.67 1.5-3.82 2.58c-1.76.88-2.64 1.32-3.58 1.32s-1.82-.44-3.58-1.32C6.27 19.34 5.2 18.8 4.6 17.83S4 15.66 4 13.26V12.2c0-2.83 0-4.24.88-5.12S7.18 6.2 10 6.2m2 4c-.28 0-.47.34-.85 1.02l-.1.18c-.11.2-.16.29-.25.35q-.1.1-.4.14l-.19.04c-.74.17-1.1.25-1.2.53-.08.29.17.58.67 1.17l.13.15c.15.17.22.25.25.36s.02.21 0 .43l-.02.2c-.08.8-.11 1.18.12 1.36.23.17.57.01 1.26-.3l.18-.09c.2-.09.3-.13.4-.13s.2.04.4.13l.18.09c.69.31 1.03.47 1.26.3.23-.18.2-.57.12-1.35l-.02-.2a1 1 0 0 1 0-.44q.03-.13.25-.36l.13-.15c.5-.59.75-.88.66-1.17s-.45-.36-1.2-.53l-.18-.04q-.3-.06-.4-.14a1 1 0 0 1-.25-.35l-.1-.18c-.38-.68-.57-1.02-.85-1.02"
              fill="currentColor"
            />
            <path
              d="M11 2.2h2c1.89 0 2.83 0 3.41.59.42.41.54 1 .58 1.98q-1.25-.09-2.9-.07H9.9q-1.65-.02-2.89.07c.04-.98.16-1.57.58-1.98C8.17 2.2 9.1 2.2 11 2.2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMedalStarSquare;
