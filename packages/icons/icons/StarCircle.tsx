import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStarCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconStarCircle(
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
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M10.86 9.36c.5-.9.76-1.36 1.14-1.36s.63.45 1.14 1.36l.13.24c.14.26.22.39.33.47.11.09.25.12.53.18l.25.06c.99.22 1.48.33 1.6.7.11.39-.22.78-.9 1.56l-.17.2c-.19.23-.28.34-.32.48-.05.13-.03.28 0 .58l.02.27c.1 1.05.15 1.57-.15 1.8-.3.24-.77.02-1.69-.4l-.24-.1c-.26-.13-.4-.19-.53-.19-.14 0-.27.06-.53.18l-.24.11c-.92.42-1.38.64-1.69.4-.3-.23-.25-.75-.15-1.8l.02-.27c.03-.3.05-.45 0-.58-.04-.14-.13-.25-.32-.48l-.18-.2c-.67-.78-1-1.17-.89-1.55.12-.38.61-.49 1.6-.71l.25-.06c.28-.06.42-.1.53-.18s.19-.21.33-.47z"
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
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"
              fill="currentColor"
            />
            <path
              d="m10.41 8.5.17-.3c.63-1.13.95-1.7 1.42-1.7s.79.57 1.42 1.7l.17.3c.18.32.27.48.4.59.15.1.32.14.67.22l.32.08c1.23.27 1.84.41 2 .88.14.47-.28.96-1.12 1.94l-.22.26c-.24.28-.35.42-.4.59s-.04.36 0 .73l.03.34c.12 1.3.19 1.96-.2 2.25-.38.3-.96.03-2.1-.5l-.3-.14c-.33-.15-.5-.23-.67-.23s-.34.08-.66.23l-.3.14c-1.15.53-1.73.8-2.11.5-.39-.3-.32-.94-.2-2.25l.04-.34c.03-.37.05-.56 0-.73s-.17-.31-.41-.6l-.22-.25c-.84-.98-1.26-1.47-1.11-1.94s.76-.6 1.99-.88l.32-.08c.35-.08.52-.11.66-.22s.23-.27.41-.6"
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20M10.86 9.36l-.13.24c-.14.26-.22.39-.33.47-.11.09-.25.12-.53.18l-.25.06c-.99.22-1.48.33-1.6.7-.11.39.22.78.9 1.56l.17.2c.19.23.28.34.32.48.05.13.03.28 0 .58l-.02.27c-.1 1.05-.15 1.57.15 1.8.3.24.77.02 1.69-.4l.24-.1c.26-.13.4-.19.53-.19.14 0 .27.06.53.18l.24.11c.92.42 1.38.64 1.69.4.3-.23.25-.75.15-1.8l-.02-.27c-.03-.3-.05-.45 0-.58.04-.14.13-.25.32-.48l.18-.2c.67-.78 1-1.17.89-1.55-.12-.38-.61-.49-1.6-.71l-.25-.06c-.28-.06-.42-.1-.53-.18s-.19-.21-.33-.47l-.13-.24C12.64 8.46 12.38 8 12 8s-.63.45-1.14 1.36"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStarCircle;
