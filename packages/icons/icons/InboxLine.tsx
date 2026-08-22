import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconInboxLine = forwardRef<SVGSVGElement, IconProps>(
  function IconInboxLine(
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 13h3.16c.9 0 1.36 0 1.76.18.4.19.69.53 1.28 1.22l.6.7c.6.7.89 1.03 1.28 1.22.4.18.85.18 1.76.18h.32c.9 0 1.36 0 1.76-.18.4-.19.69-.53 1.28-1.22l.6-.7c.6-.69.89-1.03 1.28-1.22.4-.18.85-.18 1.76-.18H22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 7h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 10.5h4"
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
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              fill="currentColor"
            />
            <path
              d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46c1.35-1.36 1.45-3.48 1.46-7.54h-3.16c-.9 0-1.36 0-1.76.18-.4.19-.69.53-1.28 1.22l-.6.7c-.6.7-.89 1.03-1.28 1.22-.4.18-.85.18-1.76.18h-.32c-.9 0-1.36 0-1.76-.18-.4-.19-.69-.53-1.28-1.22l-.6-.7c-.6-.69-.89-1.03-1.28-1.22-.4-.18-.85-.18-1.76-.18H2c0 4.06.1 6.18 1.46 7.54"
              fill="currentColor"
            />
            <path
              d="M8 6.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M10 9.75a.75.75 0 1 0 0 1.5h4a.75.75 0 1 0 0-1.5z"
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
              fill="currentColor"
              d="M3.5 20.5C5 22 7.3 22 12 22s7.1 0 8.5-1.5c1.3-1.3 1.4-3.2 1.5-6.8h-3.2c-1 0-1.2 0-1.4.1-.2 0-.4.3-1 1l-.7.8c-.5.6-.9 1.1-1.5 1.3-.6.3-1.2.3-1.9.3h-.6c-.8 0-1.4 0-1.9-.3-.6-.3-.9-.7-1.5-1.3l-.7-.8c-.6-.7-.8-.9-1-1-.2 0-.5-.1-1.4-.1H2c0 3.6.2 5.5 1.5 6.8"
            />
            <path
              fill="currentColor"
              d="M20.5 3.5C19 2 16.7 2 12 2S4.9 2 3.5 3.5 2 7.3 2 12v.2h3.3c.8 0 1.4 0 1.9.3.6.3.9.7 1.5 1.3l.7.8c.6.7.8.9 1 1 .2 0 .5.1 1.4.1h.3c1 0 1.2 0 1.4-.1.2 0 .4-.3 1-1l.7-.8c.5-.6.9-1.1 1.5-1.3.6-.3 1.2-.3 1.9-.3h3.3V12c0-4.7 0-7.1-1.5-8.5ZM14 11.2h-4c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h4c.4 0 .8.3.8.8s-.3.8-.8.8m2-3.4H8c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h8c.4 0 .8.3.8.8s-.3.8-.8.8"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconInboxLine;
