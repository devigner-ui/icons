import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMedalRibbonsStar = forwardRef<SVGSVGElement, IconProps>(
  function IconMedalRibbonsStar(
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
              d="m12 16.07-3.77 3.9c-.54.56-.81.84-1.04.94-.52.22-1.1.03-1.37-.45a4 4 0 0 1-.24-1.35 4 4 0 0 0-.12-.82c-.15-.4-.45-.72-.84-.87a3 3 0 0 0-.8-.13 4 4 0 0 1-1.3-.24 1.16 1.16 0 0 1-.43-1.42c.1-.24.36-.52.9-1.08L5.46 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m12 16.07 3.77 3.9c.54.56.81.84 1.04.94.52.22 1.1.03 1.37-.45.12-.21.16-.59.24-1.35.04-.43.06-.64.12-.82.15-.4.45-.72.84-.87.17-.06.38-.09.8-.13a4 4 0 0 0 1.3-.24c.46-.28.64-.88.43-1.42-.1-.24-.36-.52-.9-1.08L18.54 12"
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
              d="m12 16.07-3.77 3.9c-.54.56-.81.84-1.04.94-.52.22-1.1.03-1.37-.45a4 4 0 0 1-.24-1.35 4 4 0 0 0-.12-.82c-.15-.4-.45-.72-.84-.87a3 3 0 0 0-.8-.13c-.73-.08-1.1-.12-1.3-.24a1.16 1.16 0 0 1-.43-1.42c.1-.24.36-.52.9-1.08L5.46 12l1.23-1.24zl5.3-5.3L18.55 12l2.47 2.55c.54.56.8.84.9 1.08.21.54.03 1.13-.43 1.42-.2.12-.57.16-1.3.24-.42.04-.63.07-.8.13-.39.15-.7.46-.84.87-.06.18-.08.4-.12.82a4 4 0 0 1-.24 1.35c-.27.48-.85.67-1.37.45-.23-.1-.5-.38-1.04-.94z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-10c-.28 0-.47.34-.85 1.02l-.1.18c-.11.2-.16.29-.25.35q-.1.1-.4.14l-.19.04c-.74.17-1.1.25-1.2.53-.08.29.17.58.67 1.17l.13.15c.15.17.22.25.25.36s.02.21 0 .43l-.02.2c-.08.8-.11 1.18.12 1.36.23.17.57.01 1.26-.3l.18-.09c.2-.09.3-.13.4-.13s.2.04.4.13l.18.09c.69.31 1.03.47 1.26.3.23-.18.2-.57.12-1.35l-.02-.2a1 1 0 0 1 0-.44q.03-.13.25-.36l.13-.15c.5-.59.75-.88.66-1.17s-.45-.36-1.2-.53l-.18-.04q-.3-.06-.4-.14a1 1 0 0 1-.25-.35l-.1-.18C12.47 6.34 12.28 6 12 6"
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
              d="M4.5 13 3 14.54c-.55.56-.82.84-.91 1.08-.21.54-.03 1.14.43 1.42.2.12.57.16 1.3.24.42.04.63.07.8.13.39.15.7.46.84.87.06.18.08.4.12.82.08.76.12 1.14.24 1.35.27.48.85.67 1.37.45.23-.1.5-.38 1.04-.94l2.48-2.57A8.5 8.5 0 0 1 4.5 13"
              fill="currentColor"
            />
            <path
              d="m13.29 17.4 2.48 2.57c.54.56.81.84 1.04.94.52.22 1.1.03 1.37-.45.12-.21.16-.59.24-1.35.04-.43.06-.64.12-.82.15-.4.45-.72.84-.87.17-.06.38-.09.8-.13.73-.08 1.1-.12 1.3-.24.46-.28.64-.88.43-1.42-.1-.24-.36-.52-.9-1.08L19.5 13a8.5 8.5 0 0 1-6.22 4.41"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMedalRibbonsStar;
