import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconChatRoundCheck = forwardRef<SVGSVGElement, IconProps>(
  function IconChatRoundCheck(
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
              d="M12 22a10 10 0 1 0-8.96-5.55q.28.56.14 1.15l-.6 2.23a1.3 1.3 0 0 0 1.6 1.59l2.22-.6c.38-.1.8-.04 1.15.14A10 10 0 0 0 12 22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 12.08 11 14l4-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
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
              d="M12 22a10 10 0 1 0-8.96-5.55q.28.56.14 1.15l-.6 2.23a1.3 1.3 0 0 0 1.6 1.59l2.22-.6c.38-.1.8-.04 1.15.14A10 10 0 0 0 12 22"
              fill="currentColor"
            />
            <path
              d="M15.53 9.47c.3.3.3.77 0 1.06l-4 4a.75.75 0 0 1-1.05.01l-2-1.92a.75.75 0 0 1 1.04-1.08l1.47 1.41 3.48-3.48c.3-.3.77-.3 1.06 0"
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
              d="M22 12a10 10 0 0 1-14.45 8.96 1.6 1.6 0 0 0-1.15-.14l-2.23.6a1.3 1.3 0 0 1-1.59-1.6l.6-2.22c.1-.38.04-.8-.14-1.15A10 10 0 1 1 22 12m-6.47-2.53c.3.3.3.77 0 1.06l-4 4a.75.75 0 0 1-1.05.01l-2-1.92a.75.75 0 0 1 1.04-1.08l1.47 1.41 3.48-3.48c.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconChatRoundCheck;
