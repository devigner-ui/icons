import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTickerStar = forwardRef<SVGSVGElement, IconProps>(
  function IconTickerStar(
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
              d="M14 4h-4C6.22 4 4.33 4 3.16 5.17 2.28 6.05 2.06 7.33 2 9.5c0 .28.22.5.5.58a2 2 0 0 1 0 3.87c-.28.07-.5.29-.5.57.06 2.16.28 3.44 1.16 4.32C4.33 20 6.22 20 10 20h4c3.78 0 5.67 0 6.84-1.17.88-.88 1.1-2.16 1.16-4.32 0-.28-.22-.5-.5-.57a2 2 0 0 1 0-3.87c.28-.07.5-.3.5-.58-.06-2.16-.28-3.44-1.16-4.32C19.67 4 17.78 4 14 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M11.15 10.02c.38-.68.57-1.02.85-1.02s.47.34.85 1.02l.1.18c.11.2.16.29.25.35q.1.1.4.14l.19.04c.74.17 1.1.25 1.2.53.08.29-.17.58-.67 1.17l-.13.15c-.15.17-.22.25-.25.36s-.02.21 0 .43l.02.2c.08.8.11 1.18-.12 1.36-.23.17-.57.01-1.26-.3l-.18-.09c-.2-.09-.3-.13-.4-.13s-.2.04-.4.13l-.18.09c-.69.31-1.03.47-1.26.3-.23-.18-.2-.57-.12-1.35l.02-.2c.02-.23.03-.34 0-.44a1 1 0 0 0-.25-.36l-.13-.15c-.5-.59-.75-.88-.66-1.17s.45-.36 1.2-.53l.18-.04c.21-.05.32-.07.4-.14.09-.06.14-.16.25-.35z"
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
              d="M14 4h-4C6.22 4 4.33 4 3.16 5.17 2.28 6.05 2.06 7.33 2 9.5c0 .28.22.5.5.58a2 2 0 0 1 0 3.87c-.28.07-.5.29-.5.57.06 2.16.28 3.44 1.16 4.32C4.33 20 6.22 20 10 20h4c3.78 0 5.67 0 6.84-1.17.88-.88 1.1-2.16 1.16-4.32 0-.28-.22-.5-.5-.57a2 2 0 0 1 0-3.87c.28-.07.5-.3.5-.58-.06-2.16-.28-3.44-1.16-4.32C19.67 4 17.78 4 14 4"
              fill="currentColor"
            />
            <path
              d="m12.95 10.2-.1-.18C12.49 9.34 12.29 9 12 9s-.47.34-.86 1.02l-.1.18c-.1.2-.16.29-.24.35q-.1.1-.4.14l-.2.04c-.73.17-1.1.25-1.19.53s.17.58.67 1.17l.13.15c.14.17.22.25.25.36s.02.21 0 .43l-.02.2c-.08.8-.12 1.18.11 1.36.23.17.58.01 1.27-.3l.18-.09c.2-.09.3-.13.4-.13s.2.04.4.13l.18.09c.7.31 1.04.47 1.27.3.23-.18.19-.57.11-1.35l-.02-.2a1 1 0 0 1 0-.44q.04-.13.25-.36l.13-.15c.5-.59.76-.88.67-1.17s-.46-.36-1.2-.53l-.19-.04c-.21-.05-.31-.07-.4-.14a1 1 0 0 1-.25-.35"
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
              d="M10 4h4c3.78 0 5.67 0 6.84 1.17.88.88 1.1 2.16 1.16 4.32 0 .28-.22.5-.5.58a2 2 0 0 0 0 3.87c.28.07.5.29.5.57-.06 2.16-.28 3.44-1.16 4.32C19.67 20 17.78 20 14 20h-4c-3.78 0-5.67 0-6.84-1.17-.88-.88-1.1-2.16-1.16-4.32 0-.28.22-.5.5-.57a2 2 0 0 0 0-3.87c-.28-.07-.5-.3-.5-.58.06-2.16.28-3.44 1.16-4.32C4.33 4 6.22 4 10 4m2.95 6.2-.1-.18C12.48 9.34 12.29 9 12 9s-.47.34-.86 1.02l-.1.18c-.1.2-.16.29-.24.35-.09.07-.19.1-.4.14l-.2.04c-.73.17-1.1.25-1.19.53s.17.58.67 1.17l.13.15c.14.17.21.25.25.36.03.1.02.21 0 .43l-.02.2c-.08.8-.12 1.18.11 1.36.23.17.58.01 1.27-.3l.18-.09c.2-.09.3-.13.4-.13s.2.04.4.13l.18.09c.7.31 1.04.47 1.27.3.23-.18.19-.57.11-1.35l-.02-.2a1 1 0 0 1 0-.44q.04-.13.25-.36l.13-.15c.5-.59.76-.88.67-1.17s-.46-.36-1.2-.53l-.19-.04c-.21-.05-.31-.07-.4-.14a1 1 0 0 1-.25-.35"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTickerStar;
