import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconChatRoundCall = forwardRef<SVGSVGElement, IconProps>(
  function IconChatRoundCall(
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
              d="M12 16V8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 14v-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 14v-4"
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
              d="M12 22a10 10 0 1 0-8.96-5.55q.28.56.14 1.15l-.6 2.23a1.3 1.3 0 0 0 1.6 1.59l2.22-.6c.38-.1.8-.04 1.15.14A10 10 0 0 0 12 22"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 6.78a.83.83 0 0 0-.83.82v8.8a.82.82 0 1 0 1.65 0V7.6a.83.83 0 0 0-.82-.82"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.6 8.98a.83.83 0 0 0-.83.82v4.4a.82.82 0 1 0 1.65 0V9.8a.8.8 0 0 0-.82-.82"
              fill="currentColor"
            />
            <path
              d="M15.57 9.8a.83.83 0 0 1 1.65 0v4.4a.82.82 0 1 1-1.65 0z"
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
              d="M22 12a10 10 0 0 1-14.45 8.96 1.6 1.6 0 0 0-1.15-.14l-2.23.6a1.3 1.3 0 0 1-1.59-1.6l.6-2.22c.1-.38.04-.8-.14-1.15A10 10 0 1 1 22 12M12 7.25c.41 0 .75.34.75.75v8a.75.75 0 1 1-1.5 0V8c0-.41.34-.75.75-.75M8.75 10a.75.75 0 0 0-1.5 0v4a.75.75 0 1 0 1.5 0zM16 9.25c.41 0 .75.34.75.75v4a.75.75 0 1 1-1.5 0v-4c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconChatRoundCall;
