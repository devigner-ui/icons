import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSignpost2 = forwardRef<SVGSVGElement, IconProps>(
  function IconSignpost2(
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
              d="M12.75 2a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5V2z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.75 11a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5v-1z"
              fill="currentColor"
            />
            <path
              d="M8.7 3.5h6.8c1.4 0 2.1 0 2.61.34a2 2 0 0 1 .55.55c.34.5.34 1.2.34 2.61 0 1.4 0 2.1-.34 2.61a2 2 0 0 1-.55.55c-.5.34-1.2.34-2.61.34H8.7c-.65 0-.98 0-1.28-.1a2 2 0 0 1-.39-.17c-.27-.16-.5-.4-.93-.9-.85-.94-1.28-1.41-1.38-1.97a2 2 0 0 1 0-.72c.1-.56.53-1.03 1.38-1.98.44-.49.66-.73.93-.9a2 2 0 0 1 .39-.16c.3-.1.63-.1 1.28-.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M15.3 12.5H8.5c-1.4 0-2.1 0-2.61.34a2 2 0 0 0-.55.55C5 13.89 5 14.59 5 16c0 1.4 0 2.1.34 2.61a2 2 0 0 0 .55.55c.5.34 1.2.34 2.61.34h6.8c.65 0 .98 0 1.28-.1a2 2 0 0 0 .39-.17c.27-.16.5-.4.93-.9.85-.94 1.28-1.41 1.38-1.97a2 2 0 0 0 0-.72c-.1-.56-.53-1.03-1.38-1.98a5 5 0 0 0-.93-.9 2 2 0 0 0-.39-.16c-.3-.1-.63-.1-1.28-.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.75 20a.75.75 0 0 0-1.5 0zM14 22.75a.75.75 0 1 0 0-1.5zm-4-1.5a.75.75 0 0 0 0 1.5zM11.25 20v2h1.5v-2zM14 21.25h-4v1.5h4z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 7h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 16h6"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.75 10.5h-1.5v2h1.5zm-1.5-7h1.5V2a.75.75 0 0 0-1.5 0zm0 17.75V19.5h1.5v1.75H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 1 1 0-1.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5 10.5c1.4 0 2.1 0 2.61-.34a2 2 0 0 0 .55-.55C19 9.11 19 8.41 19 7c0-1.4 0-2.1-.34-2.61a2 2 0 0 0-.55-.55c-.5-.34-1.2-.34-2.61-.34H8.7c-.65 0-.98 0-1.28.1a2 2 0 0 0-.39.17c-.27.16-.5.4-.93.9-.85.94-1.28 1.41-1.38 1.97a2 2 0 0 0 0 .72c.1.56.53 1.03 1.38 1.98.44.49.66.73.93.9a2 2 0 0 0 .39.16c.3.1.63.1 1.28.1zM8.25 7c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 7"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.89 19.16c.5.34 1.2.34 2.61.34h6.8c.65 0 .98 0 1.28-.1a2 2 0 0 0 .39-.17c.27-.16.5-.4.93-.9.85-.94 1.28-1.41 1.38-1.97a2 2 0 0 0 0-.72c-.1-.56-.53-1.03-1.38-1.98a5 5 0 0 0-.93-.9 2 2 0 0 0-.39-.16c-.3-.1-.63-.1-1.28-.1H8.5c-1.4 0-2.1 0-2.61.34a2 2 0 0 0-.55.55C5 13.89 5 14.59 5 16c0 1.4 0 2.1.34 2.61a2 2 0 0 0 .55.55M8.25 16c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
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
              d="M18.11 10.16c-.5.34-1.2.34-2.61.34h-2.75v2h2.55c.65 0 .98 0 1.28.1a2 2 0 0 1 .39.17c.27.16.5.4.93.9.85.94 1.28 1.41 1.38 1.97a2 2 0 0 1 0 .72c-.1.56-.53 1.03-1.38 1.98-.44.49-.66.73-.93.9a2 2 0 0 1-.39.16c-.3.1-.63.1-1.28.1h-2.55v1.75H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 1 1 0-1.5h1.25V19.5H8.5c-1.4 0-2.1 0-2.61-.34a2 2 0 0 1-.55-.55C5 18.11 5 17.41 5 16c0-1.4 0-2.1.34-2.61a2 2 0 0 1 .55-.55c.5-.34 1.2-.34 2.61-.34h2.75v-2H8.7c-.65 0-.98 0-1.28-.1a2 2 0 0 1-.39-.17c-.27-.16-.5-.4-.93-.9-.85-.94-1.28-1.41-1.38-1.97a2 2 0 0 1 0-.72c.1-.56.53-1.03 1.38-1.98.44-.49.66-.73.93-.9a2 2 0 0 1 .39-.16c.3-.1.63-.1 1.28-.1h2.55V2a.75.75 0 0 1 1.5 0v1.5h2.75c1.4 0 2.1 0 2.61.34a2 2 0 0 1 .55.55c.34.5.34 1.2.34 2.61 0 1.4 0 2.1-.34 2.61a2 2 0 0 1-.55.55M9 6.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM8.25 16c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSignpost2;
