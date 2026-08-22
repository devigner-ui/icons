import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPinCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconPinCircle(
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
              d="m14.25 7.82.53-.53zm1.93 1.93-.53.54zm-5.57 5.72-.53.53zM8.53 13.4l.53-.53zm6.98-.42.28.7zm-1.4.56-.27-.7zm-3.64-3.65-.7-.27zm.56-1.4.7.28zm-1.9 2.62-.21-.72zm.52-.17-.33-.68zm.6-.54-.64-.4zm3.36 3.36.4.64zm-.71 1.13.72.2zm.17-.53.68.33zM7.84 12.6l-.7.27zm.29-1.12.47.58zm3.28 4.7-.27.69zm1.12-.3.58.48zm4.97-4.16-.73-.16zM12.3 6.5l-.16-.73zm-5.32 9.45a.75.75 0 1 0 1.07 1.07zm3.12-.99a.75.75 0 1 0-1.06-1.06zm3.61-6.6 1.94 1.93 1.06-1.07-1.93-1.93zm-2.57 6.58-2.08-2.08L8 13.92 10.08 16zm4.1-2.66-1.4.55.55 1.4 1.4-.56zm-4.07-2.12.55-1.4-1.39-.55-.55 1.4zm-1.84 1.66q.35-.09.65-.22l-.66-1.35c-.05.03-.1.05-.4.13zm.45-2.21-.17.38 1.27.8q.17-.28.29-.63zm.2 1.99q.56-.28.9-.81l-1.27-.8a1 1 0 0 1-.3.26zm3.86 1.23q-.34.13-.63.29l.8 1.27c.04-.03.1-.05.38-.17zm-.22 2.25c.08-.3.1-.35.13-.4l-1.35-.66q-.13.3-.22.65zm-.4-1.96q-.54.34-.82.9l1.35.66a1 1 0 0 1 .26-.29zm-4.16-.26q-.31-.3-.44-.45t-.08-.1l-1.4.55q.15.33.35.54l.5.52zm-.14-2.48-.7.2q-.27.1-.57.3l.95 1.17c-.02.02-.01 0 .12-.05l.6-.18zm-.38 1.93q-.05-.16.06-.26l-.95-1.16a1.7 1.7 0 0 0-.51 1.97zm1.54 3.7.51.5q.22.2.55.35l.55-1.4-.1-.08-.45-.44zm2.1-1.34-.18.6c-.05.14-.07.15-.05.13l1.16.95q.22-.3.3-.58.1-.28.21-.69zm-1.04 2.19c.7.28 1.5.07 1.97-.51l-1.16-.95a.2.2 0 0 1-.26.06zm4.5-6.57c.5.49.8.8 1 1.05.17.24.12.26.13.21l1.46.3c.12-.56-.12-1.03-.4-1.4q-.41-.54-1.12-1.23zm.15 3.38c.6-.24 1.14-.45 1.52-.67.4-.24.8-.57.92-1.14l-1.46-.3c0-.06.04-.01-.21.14-.27.15-.67.32-1.32.58zm-1.01-6.38q-.69-.7-1.23-1.13c-.37-.27-.84-.51-1.4-.4l.3 1.47c-.05.01-.03-.04.21.14.25.18.56.49 1.05.98zm-3.06 1.47c.26-.65.43-1.05.58-1.32.15-.26.2-.22.15-.2l-.3-1.47c-.58.11-.91.52-1.15.92-.22.38-.43.92-.67 1.52zm-3.67 8.26 2.05-2.06-1.06-1.06-2.06 2.05z"
              fill="currentColor"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="10"
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
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"
              fill="currentColor"
            />
            <path
              d="M16.56 9.43q.69.67 1.08 1.17c.26.34.45.74.35 1.2-.1.47-.43.76-.8.98q-.55.29-1.46.64L14.3 14c-.28.11-.36.15-.42.19a1 1 0 0 0-.36.4c-.03.06-.06.15-.14.43v.02l-.2.66q-.08.27-.26.5c-.41.5-1.1.67-1.7.44a2 2 0 0 1-.46-.31l-.5-.48-.7-.7-1.7 1.7a.5.5 0 0 1-.7-.7l1.7-1.7-.7-.7-.48-.5a2 2 0 0 1-.3-.47c-.24-.6-.07-1.28.43-1.69q.23-.17.5-.26l.66-.2h.01c.3-.08.38-.1.45-.14q.25-.12.4-.36L10 9.7l.57-1.43q.33-.91.64-1.46c.22-.37.5-.7.97-.8s.87.1 1.21.35q.5.39 1.17 1.08z"
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20m4.56-12.57q.69.67 1.08 1.17c.26.34.45.74.35 1.2-.1.47-.43.76-.8.98q-.55.29-1.46.64L14.3 14c-.28.11-.36.15-.42.19a1 1 0 0 0-.36.4c-.03.06-.06.15-.14.44v.01l-.2.66q-.09.26-.26.5c-.41.5-1.1.67-1.69.44a2 2 0 0 1-.47-.31l-.5-.48-.7-.7-1.7 1.7a.5.5 0 0 1-.7-.7l1.7-1.7-.7-.7-.48-.5a2 2 0 0 1-.3-.47c-.24-.6-.07-1.28.43-1.69q.23-.17.5-.26l.66-.2h.02c.28-.08.37-.1.44-.14q.24-.12.4-.36L10 9.7l.57-1.43q.34-.91.64-1.46c.22-.37.5-.7.97-.8s.87.1 1.21.35q.5.39 1.17 1.08z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPinCircle;
