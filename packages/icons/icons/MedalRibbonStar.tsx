import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMedalRibbonStar = forwardRef<SVGSVGElement, IconProps>(
  function IconMedalRibbonStar(
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
              d="M11.15 7.02c.38-.68.57-1.02.85-1.02s.47.34.85 1.02l.1.18c.11.2.16.29.25.35q.1.1.4.14l.19.04c.74.17 1.1.25 1.2.53.08.29-.17.58-.67 1.17l-.13.15c-.15.17-.22.25-.25.36s-.02.21 0 .43l.02.2c.08.8.11 1.18-.12 1.36-.23.17-.57.01-1.26-.3l-.18-.09c-.2-.09-.3-.13-.4-.13s-.2.04-.4.13l-.18.09c-.69.31-1.03.47-1.26.3-.23-.18-.2-.57-.12-1.35l.02-.2c.02-.23.03-.34 0-.44a1 1 0 0 0-.25-.36l-.13-.15c-.5-.59-.75-.88-.66-1.17s.45-.36 1.2-.53l.18-.04q.3-.06.4-.14c.09-.06.14-.16.25-.35z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m7.35 15-.64 2.32c-.62 2.3-.94 3.44-.52 4.07q.23.34.57.51c.66.33 1.66-.2 3.68-1.24.67-.35 1-.53 1.36-.56q.2-.03.4 0c.35.03.69.2 1.36.56 2.02 1.05 3.02 1.57 3.68 1.24q.34-.19.57-.51c.42-.63.1-1.77-.52-4.07L16.65 15"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-10c-.28 0-.47.34-.85 1.02l-.1.18c-.11.2-.16.29-.25.35q-.1.1-.4.14l-.19.04c-.74.17-1.1.25-1.2.53-.08.29.17.58.67 1.17l.13.15c.15.17.22.25.25.36s.02.21 0 .43l-.02.2c-.08.8-.11 1.18.12 1.36.23.17.57.01 1.26-.3l.18-.09c.2-.09.3-.13.4-.13s.2.04.4.13l.18.09c.69.31 1.03.47 1.26.3.23-.18.2-.57.12-1.35l-.02-.2a1 1 0 0 1 0-.44q.03-.13.25-.36l.13-.15c.5-.59.75-.88.66-1.17s-.45-.36-1.2-.53l-.18-.04q-.3-.06-.4-.14a1 1 0 0 1-.25-.35l-.1-.18C12.47 6.34 12.28 6 12 6"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.71 17.32 7.35 15 8 13h8l.65 2 .64 2.32c.62 2.3.94 3.44.52 4.07q-.22.34-.57.51c-.66.33-1.66-.2-3.68-1.24-.67-.35-1-.53-1.36-.56a2 2 0 0 0-.4 0c-.35.03-.69.2-1.36.56-2.02 1.05-3.02 1.57-3.68 1.24q-.34-.19-.57-.51c-.42-.63-.1-1.77.52-4.07"
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
              d="M12 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-10c-.28 0-.47.34-.85 1.02l-.1.18c-.11.2-.16.29-.25.35q-.1.1-.4.14l-.19.04c-.74.17-1.1.25-1.2.53-.08.29.17.58.67 1.17l.13.15c.15.17.22.25.25.36s.02.21 0 .43l-.02.2c-.08.8-.11 1.18.12 1.36.23.17.57.01 1.26-.3l.18-.09c.2-.09.3-.13.4-.13s.2.04.4.13l.18.09c.69.31 1.03.47 1.26.3.23-.18.2-.57.12-1.35l-.02-.2a1 1 0 0 1 0-.44q.03-.13.25-.36l.13-.15c.5-.59.75-.88.66-1.17s-.45-.36-1.2-.53l-.18-.04q-.3-.06-.4-.14a1 1 0 0 1-.25-.35l-.1-.18C12.47 6.34 12.28 6 12 6"
              fill="currentColor"
            />
            <path
              d="m7.1 15.94-.39 1.38c-.62 2.3-.94 3.44-.52 4.07q.23.34.57.51c.66.33 1.66-.2 3.68-1.24.67-.35 1-.53 1.36-.56q.2-.03.4 0c.35.03.69.2 1.36.56 2.02 1.05 3.02 1.57 3.68 1.24q.34-.19.57-.51c.42-.63.1-1.77-.52-4.07l-.38-1.38a8.5 8.5 0 0 1-9.82 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMedalRibbonStar;
