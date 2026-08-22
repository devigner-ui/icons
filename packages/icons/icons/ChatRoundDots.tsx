import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconChatRoundDots = forwardRef<SVGSVGElement, IconProps>(
  function IconChatRoundDots(
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path d="M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
              <path
                d="M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                fill="currentColor"
              />
              <path
                d="M17 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                fill="currentColor"
              />
            </g>
            <path
              d="M12 22a10 10 0 1 0-8.96-5.55q.28.56.14 1.15l-.6 2.23a1.3 1.3 0 0 0 1.6 1.59l2.22-.6c.38-.1.8-.04 1.15.14A10 10 0 0 0 12 22"
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
              d="M12 23a11 11 0 1 0-9.85-6.1c.2.39.26.84.14 1.26l-.65 2.45a1.43 1.43 0 0 0 1.75 1.75l2.45-.65a1.8 1.8 0 0 1 1.26.14Q9.34 22.99 12 23"
              fill="currentColor"
            />
            <path
              d="M10.9 12a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0"
              fill="currentColor"
            />
            <path
              d="M6.5 12a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0"
              fill="currentColor"
            />
            <path
              d="M15.3 12a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0"
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
              d="M22 12a10 10 0 0 1-14.45 8.96 1.6 1.6 0 0 0-1.15-.14l-2.23.6a1.3 1.3 0 0 1-1.59-1.6l.6-2.22c.1-.38.04-.8-.14-1.15A10 10 0 1 1 22 12M6.5 12a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0m4.4 0a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0m5.5 1.1a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconChatRoundDots;
