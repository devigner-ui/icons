import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconChatRoundUnread = forwardRef<SVGSVGElement, IconProps>(
  function IconChatRoundUnread(
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
              cx="3"
              cy="3"
              r="3"
              transform="matrix(-1 0 0 1 22 2.00024)"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14 2.2q-.98-.2-2-.2a10 10 0 0 0-8.96 14.45q.28.56.14 1.15l-.6 2.23a1.3 1.3 0 0 0 1.6 1.59l2.22-.6c.38-.1.8-.04 1.15.14A10 10 0 0 0 21.8 10"
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
            <path d="M22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.23 2.54A10 10 0 0 0 2 12c0 1.6.38 3.11 1.04 4.45q.28.56.14 1.15l-.6 2.23a1.3 1.3 0 0 0 1.6 1.59l2.22-.6c.38-.1.8-.04 1.15.14a10 10 0 0 0 13.92-12.2q-1.09.72-2.47.74a4.5 4.5 0 0 1-3.77-6.96"
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
              d="M12 22a10 10 0 0 0 9.65-12.62c-.08-.31-.45-.44-.75-.3q-.87.41-1.9.42a4.5 4.5 0 0 1-4.08-6.4c.14-.3.01-.67-.3-.75a10.01 10.01 0 0 0-11.58 14.1q.28.56.14 1.15l-.6 2.23a1.3 1.3 0 0 0 1.6 1.59l2.22-.6c.38-.1.8-.04 1.15.14A10 10 0 0 0 12 22"
              fill="currentColor"
            />
            <circle cx="19" cy="5.00024" r="3" fill="currentColor" />
          </svg>
        )}
      </>
    );
  },
);

export default IconChatRoundUnread;
