import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMedalStar2 = forwardRef<SVGSVGElement, IconProps>(
  function IconMedalStar2(
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
              d="M10.56 5.78a3 3 0 0 1 2.88 0l4.79 2.62a3 3 0 0 1 1.56 2.63v4.94a3 3 0 0 1-1.56 2.63l-4.8 2.62a3 3 0 0 1-2.87 0L5.77 18.6a3 3 0 0 1-1.56-2.63v-4.94A3 3 0 0 1 5.77 8.4z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.15 11.52c.38-.68.57-1.02.85-1.02s.47.34.85 1.02l.1.18c.11.2.16.29.25.35q.1.1.4.14l.19.04c.74.17 1.1.25 1.2.53.08.29-.17.58-.67 1.17l-.13.15c-.15.17-.22.25-.25.36s-.02.21 0 .43l.02.2c.08.8.11 1.18-.12 1.36-.23.17-.57.01-1.26-.3l-.18-.09c-.2-.09-.3-.13-.4-.13s-.2.04-.4.13l-.18.09c-.69.31-1.03.47-1.26.3-.23-.18-.2-.57-.12-1.35l.02-.2c.02-.23.03-.34 0-.44a1 1 0 0 0-.25-.36l-.13-.15c-.5-.59-.75-.88-.66-1.17s.45-.36 1.2-.53l.18-.04c.21-.05.32-.07.4-.14.09-.06.14-.16.25-.35z"
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
              d="M12.8 2h-2c-1.9 0-2.83 0-3.42.59C6.8 3.17 6.8 4.1 6.8 6v3.5h10V6c0-1.89 0-2.83-.58-3.41C15.62 2 14.68 2 12.79 2"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.23 5.78a3 3 0 0 0-2.87 0L5.56 8.4A3 3 0 0 0 4 11.03v4.94a3 3 0 0 0 1.56 2.63l4.8 2.62a3 3 0 0 0 2.87 0l4.8-2.62a3 3 0 0 0 1.56-2.63v-4.94a3 3 0 0 0-1.57-2.63zm-1.44 4.72c-.28 0-.47.34-.85 1.02l-.1.18q-.13.28-.24.35-.12.1-.4.14l-.2.04c-.73.17-1.1.25-1.19.53s.17.58.67 1.17l.13.15c.14.17.21.25.25.36.03.1.02.21 0 .43l-.02.2c-.08.8-.12 1.18.11 1.36.23.17.58.01 1.27-.3l.18-.09c.2-.09.29-.13.4-.13.1 0 .2.04.4.13l.17.09c.7.31 1.04.47 1.27.3.23-.18.19-.57.11-1.35l-.02-.2c-.02-.23-.03-.34 0-.44q.04-.13.25-.36l.13-.15c.5-.59.76-.88.67-1.17-.1-.28-.46-.36-1.2-.53l-.19-.04c-.2-.05-.31-.07-.4-.14q-.1-.08-.24-.35l-.1-.18c-.38-.68-.57-1.02-.86-1.02"
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
              d="M13.44 5.78a3 3 0 0 0-2.88 0L5.76 8.4a3 3 0 0 0-1.55 2.63v4.94a3 3 0 0 0 1.56 2.63l4.8 2.62a3 3 0 0 0 2.87 0l4.79-2.62a3 3 0 0 0 1.56-2.63v-4.94a3 3 0 0 0-1.56-2.63zM12 10.5c-.28 0-.47.34-.85 1.02l-.1.18c-.11.2-.16.29-.25.35q-.1.1-.4.14l-.19.04c-.74.17-1.1.25-1.2.53-.08.29.17.58.67 1.17l.13.15c.15.17.22.25.25.36s.02.21 0 .43l-.02.2c-.08.8-.11 1.18.12 1.36.23.17.57.01 1.26-.3l.18-.09c.2-.09.3-.13.4-.13s.2.04.4.13l.18.09c.69.31 1.03.47 1.26.3.23-.18.2-.57.12-1.35l-.02-.2a1 1 0 0 1 0-.44q.03-.13.25-.36l.13-.15c.5-.59.75-.88.66-1.17s-.45-.36-1.2-.53l-.18-.04c-.21-.05-.32-.07-.4-.14a1 1 0 0 1-.25-.35l-.1-.18c-.38-.68-.57-1.02-.85-1.02"
              fill="currentColor"
            />
            <path
              d="M11 2h2c1.89 0 2.83 0 3.41.59C17 3.17 17 4.1 17 6v.02l-2.85-1.55a4.5 4.5 0 0 0-4.3 0L7 6.02V6c0-1.89 0-2.83.59-3.41C8.17 2 9.1 2 11 2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMedalStar2;
