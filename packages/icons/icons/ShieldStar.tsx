import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShieldStar = forwardRef<SVGSVGElement, IconProps>(
  function IconShieldStar(
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
              d="M3 10.42c0-3.2 0-4.8.38-5.34.38-.53 1.88-1.05 4.88-2.08l.58-.2C10.4 2.28 11.19 2 12 2s1.6.27 3.16.8l.58.2c3 1.03 4.5 1.55 4.88 2.08.38.54.38 2.14.38 5.34v1.57c0 5.64-4.24 8.38-6.9 9.54-.72.31-1.08.47-2.1.47s-1.38-.16-2.1-.47C7.24 20.37 3 17.63 3 11.99z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M10.86 8.36c.5-.9.76-1.36 1.14-1.36s.63.45 1.14 1.36l.13.24c.14.26.22.39.33.47.11.09.25.12.53.18l.25.06c.99.22 1.48.33 1.6.71.11.38-.22.77-.9 1.55l-.17.2c-.19.23-.28.34-.32.48-.05.14-.03.28 0 .58l.02.27c.1 1.05.15 1.57-.15 1.8-.3.24-.77.03-1.69-.4l-.24-.1c-.26-.13-.4-.19-.53-.19-.14 0-.27.06-.53.18l-.24.11c-.92.43-1.38.64-1.69.4-.3-.23-.25-.75-.15-1.8l.02-.27c.03-.3.05-.44 0-.58-.04-.14-.13-.25-.32-.47l-.18-.2c-.67-.8-1-1.18-.89-1.56.12-.38.61-.49 1.6-.71l.25-.06c.28-.06.42-.1.53-.18s.19-.21.33-.47z"
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
              d="M3.38 5.08C3 5.62 3 7.22 3 10.42v1.57c0 5.64 4.24 8.38 6.9 9.54.72.31 1.08.47 2.1.47s1.38-.16 2.1-.47c2.66-1.16 6.9-3.9 6.9-9.54v-1.57c0-3.2 0-4.8-.38-5.34-.37-.53-1.88-1.05-4.88-2.08l-.58-.2C13.6 2.28 12.81 2 12 2s-1.6.27-3.16.8l-.58.2c-3 1.03-4.5 1.55-4.88 2.08"
              fill="currentColor"
            />
            <path
              d="m10.86 8.36-.13.24c-.14.26-.22.39-.33.47-.11.09-.25.12-.53.18l-.25.06c-.99.22-1.48.33-1.6.71-.11.38.22.77.9 1.55l.17.2c.19.23.28.34.32.48.05.14.03.28 0 .58l-.02.27c-.1 1.05-.15 1.57.15 1.8.3.24.77.03 1.69-.4l.24-.1c.26-.13.4-.19.53-.19.14 0 .27.06.53.18l.24.11c.92.43 1.38.64 1.69.4.3-.23.25-.75.15-1.8l-.02-.27c-.03-.3-.05-.44 0-.58.04-.14.13-.25.32-.47l.18-.2c.67-.8 1-1.18.89-1.56-.12-.38-.61-.49-1.6-.71l-.25-.06c-.28-.06-.42-.1-.53-.18a2 2 0 0 1-.33-.47l-.13-.24C12.64 7.46 12.38 7 12 7s-.63.45-1.14 1.36"
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
              d="M3.38 5.08C3 5.62 3 7.22 3 10.42v1.57c0 5.64 4.24 8.38 6.9 9.54.72.31 1.08.47 2.1.47s1.38-.16 2.1-.47c2.66-1.16 6.9-3.9 6.9-9.54v-1.57c0-3.2 0-4.8-.38-5.34-.37-.53-1.88-1.05-4.88-2.08l-.58-.2C13.6 2.28 12.81 2 12 2s-1.6.27-3.16.8l-.58.2c-3 1.03-4.5 1.55-4.88 2.08m7.48 3.28-.13.24c-.14.26-.22.39-.33.47-.11.09-.25.12-.53.18l-.25.06c-.99.22-1.48.33-1.6.71-.11.38.22.77.9 1.55l.17.2c.19.23.28.34.32.48.05.14.03.28 0 .58l-.02.27c-.1 1.05-.15 1.57.15 1.8.3.24.77.03 1.69-.4l.24-.1c.26-.13.4-.19.53-.19.14 0 .27.06.53.18l.24.11c.92.43 1.38.64 1.69.4.3-.23.25-.75.15-1.8l-.02-.27c-.03-.3-.05-.44 0-.58.04-.14.13-.25.32-.47l.18-.2c.67-.8 1-1.18.89-1.56-.12-.38-.61-.49-1.6-.71l-.25-.06c-.28-.06-.42-.1-.53-.18s-.19-.21-.33-.47l-.13-.24C12.64 7.46 12.38 7 12 7s-.63.45-1.14 1.36"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconShieldStar;
