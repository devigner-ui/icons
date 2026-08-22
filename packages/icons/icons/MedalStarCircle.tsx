import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMedalStarCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconMedalStarCircle(
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
              opacity={duotone ? "0.4" : "1"}
              d="M17 8V6c0-1.89 0-2.83-.59-3.41C15.83 2 14.9 2 13 2h-2c-1.89 0-2.83 0-3.41.59C7 3.17 7 4.1 7 6v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.15 12.02c.38-.68.57-1.02.85-1.02s.47.34.85 1.02l.1.18c.11.2.16.29.25.35q.1.1.4.14l.19.04c.74.17 1.1.25 1.2.53.08.29-.17.58-.67 1.17l-.13.15c-.15.17-.22.25-.25.36s-.02.21 0 .43l.02.2c.08.8.11 1.18-.12 1.36-.23.17-.57.01-1.26-.3l-.18-.09c-.2-.09-.3-.13-.4-.13s-.2.04-.4.13l-.18.09c-.69.31-1.03.47-1.26.3-.23-.18-.2-.57-.12-1.35l.02-.2c.02-.23.03-.34 0-.44a1 1 0 0 0-.25-.36l-.13-.15c-.5-.59-.75-.88-.66-1.17s.45-.36 1.2-.53l.18-.04c.21-.05.32-.07.4-.14.09-.06.14-.16.25-.35z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              cx="12"
              cy="14.0004"
              r="8"
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
              d="M13 2h-2c-1.89 0-2.83 0-3.41.59C7 3.17 7 4.1 7 6v4h10V6c0-1.89 0-2.83-.59-3.41C15.83 2 14.9 2 13 2"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-11c-.28 0-.47.34-.85 1.02l-.1.18c-.11.2-.16.29-.25.35q-.1.1-.4.14l-.19.04c-.74.17-1.1.25-1.2.53-.08.29.17.58.67 1.17l.13.15c.15.17.22.25.25.36s.02.21 0 .43l-.02.2c-.08.8-.11 1.18.12 1.36.23.17.57.01 1.26-.3l.18-.09c.2-.09.3-.13.4-.13s.2.04.4.13l.18.09c.69.31 1.03.47 1.26.3.23-.18.2-.57.12-1.35l-.02-.2a1 1 0 0 1 0-.44q.03-.13.25-.36l.13-.15c.5-.59.75-.88.66-1.17s-.45-.36-1.2-.53l-.18-.04c-.21-.05-.32-.07-.4-.14a1 1 0 0 1-.25-.35l-.1-.18c-.38-.68-.57-1.02-.85-1.02"
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
              d="M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-11c-.28 0-.47.34-.85 1.02l-.1.18c-.11.2-.16.29-.25.35q-.1.1-.4.14l-.19.04c-.74.17-1.1.25-1.2.53-.08.29.17.58.67 1.17l.13.15c.15.17.22.25.25.36s.02.21 0 .43l-.02.2c-.08.8-.11 1.18.12 1.36.23.17.57.01 1.26-.3l.18-.09c.2-.09.3-.13.4-.13s.2.04.4.13l.18.09c.69.31 1.03.47 1.26.3.23-.18.2-.57.12-1.35l-.02-.2a1 1 0 0 1 0-.44q.03-.13.25-.36l.13-.15c.5-.59.75-.88.66-1.17s-.45-.36-1.2-.53l-.18-.04c-.21-.05-.32-.07-.4-.14a1 1 0 0 1-.25-.35l-.1-.18c-.38-.68-.57-1.02-.85-1.02"
              fill="currentColor"
            />
            <path
              d="M11 2h2c1.89 0 2.83 0 3.41.59.58.57.59 1.5.59 3.33a9.5 9.5 0 0 0-10 0c0-1.83 0-2.76.59-3.33C8.17 2 9.1 2 11 2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMedalStarCircle;
