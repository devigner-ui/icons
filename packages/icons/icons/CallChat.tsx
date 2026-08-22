import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCallChat = forwardRef<SVGSVGElement, IconProps>(function IconCallChat(
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
            d="M17 12a5 5 0 1 0-4.48-2.77q.15.27.07.57l-.3 1.11c-.13.49.31.93.8.8l1.11-.3q.3-.07.57.07 1.02.5 2.23.52"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m14.1 16.03-.54-.52zm.46-.48.54.51zm2.41-.34-.37.65zm1.91 1.1-.37.65zm.54 3.45.55.51zM18 21.26l-.54-.52zm-1.32.7.07.75zm-9.86-4.48.54-.52zM2 7.97 1.25 8zM8.48 9.5l.54.52zm.15-2.8.62-.44zM7.37 4.9l-.6.43zm-3.1-.3.54.52zM2.68 6.26l-.54-.52zm7.37 7.8.55-.52zm4.58 2.48.46-.48L14 15.03l-.45.48zm1.96-.68 1.9 1.1.76-1.3-1.91-1.1zm2.28 3.38-1.42 1.5 1.08 1.03 1.43-1.5zm-2.28 1.98c-1.43.14-5.18.02-9.24-4.26l-1.09 1.03c4.43 4.67 8.66 4.9 10.48 4.72zm-9.24-4.26c-3.88-4.08-4.53-7.52-4.6-9.03L1.25 8c.1 1.85.88 5.63 5.01 9.98zm1.37-6.64.3-.3-1.1-1.03-.28.3zm.52-4.06L7.99 4.48l-1.23.86 1.26 1.79zM3.72 4.09 2.15 5.74l1.09 1.04L4.8 5.13zm4.47 5.72-.54-.52-.06.06-.07.1q-.08.13-.16.33-.17.4-.08 1.1c.13.88.71 2.08 2.24 3.7l1.09-1.04c-1.43-1.5-1.78-2.43-1.85-2.88a1 1 0 0 1 .01-.38l.01-.02-.04.05v.01zm1.33 4.76c1.52 1.6 2.67 2.24 3.55 2.38q.67.09 1.1-.1a2 2 0 0 0 .45-.28l.01-.01.01-.01-.54-.52-.54-.52v-.01l.02-.01.03-.03q.02 0 0 0a1 1 0 0 1-.3 0c-.4-.06-1.27-.41-2.7-1.92zM7.99 4.47a2.75 2.75 0 0 0-4.27-.38L4.8 5.13c.52-.56 1.44-.51 1.95.21zM2.75 7.94q-.02-.61.49-1.15l-1.1-1.04a3 3 0 0 0-.89 2.27zm14.7 12.8q-.41.45-.85.49l.15 1.49a3 3 0 0 0 1.8-.94zM9.03 10.03a3 3 0 0 0 .23-3.76l-1.23.87c.42.6.36 1.39-.09 1.86zm9.49 6.94c.82.47.98 1.64.37 2.28l1.09 1.03a3 3 0 0 0-.71-4.6zm-3.41-.9c.39-.4.99-.5 1.5-.2l.75-1.3a2.7 2.7 0 0 0-3.34.47z"
            fill="currentColor"
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
            d="m14.56 15.55-.46.48s-1.08 1.14-4.04-1.97C7.11 10.94 8.2 9.8 8.2 9.8l.29-.3c.7-.75.77-1.95.15-2.82L7.37 4.91c-.76-1.08-2.23-1.22-3.1-.3L2.68 6.26A2.3 2.3 0 0 0 2 7.96c.1 1.69.81 5.3 4.82 9.52 4.24 4.47 8.23 4.64 9.86 4.48.51-.05.96-.33 1.32-.7l1.42-1.5a2.25 2.25 0 0 0-.54-3.45l-1.9-1.1a1.95 1.95 0 0 0-2.42.34"
            fill="currentColor"
          />
          <path
            d="M17 12a5 5 0 1 0-4.48-2.77q.15.27.07.57l-.3 1.11c-.13.49.31.93.8.8l1.11-.3q.3-.07.57.07 1.02.5 2.23.52"
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
            d="m14.56 15.55-.46.48s-1.08 1.14-4.04-1.97C7.11 10.94 8.2 9.8 8.2 9.8l.29-.3c.7-.75.77-1.95.15-2.82L7.37 4.91c-.76-1.08-2.23-1.22-3.1-.3L2.68 6.26A2.3 2.3 0 0 0 2 7.96c.1 1.69.81 5.3 4.82 9.52 4.24 4.47 8.23 4.64 9.86 4.48.51-.05.96-.33 1.32-.7l1.42-1.5a2.25 2.25 0 0 0-.54-3.45l-1.9-1.1a1.95 1.95 0 0 0-2.42.34"
            fill="currentColor"
          />
          <path
            d="M17 12a5 5 0 1 0-4.48-2.77q.15.27.07.57l-.3 1.11c-.13.49.31.93.8.8l1.11-.3q.3-.07.57.07 1.02.5 2.23.52"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCallChat;
