import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSyringe = forwardRef<SVGSVGElement, IconProps>(function IconSyringe(
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
            d="m6.18 10.55.53.53zm7.27 7.27.53.53zM17.74 9l-.53.53zm1.28 1.56.7-.26zm-1.28 2.97L17.2 13zm1.28-1.56.7.25zM15 6.26l.53-.53zm-1.56-1.28-.26.7zm-2.97 1.28.53.53zm1.56-1.28.26.7zm7.45 2.46a.75.75 0 0 0 1.06-1.06zm-1.85-3.97a.75.75 0 0 0-1.06 1.06zm-3.16 3.32 2.75 2.75 1.06-1.06-2.75-2.75zm2.75 6.22-4.29 4.28 1.06 1.06 4.29-4.28zM6.7 11.08 11 6.79 9.93 5.73l-4.28 4.29zm0 6.2a4.4 4.4 0 0 1 0-6.2l-1.06-1.06a5.9 5.9 0 0 0 0 8.33zm6.21 0a4.4 4.4 0 0 1-6.2 0l-1.07 1.07a5.9 5.9 0 0 0 8.33 0zm4.29-7.74.83.86c.18.21.24.33.28.43l1.4-.52a3 3 0 0 0-.55-.89q-.35-.4-.9-.94zm1.06 4.53q.56-.55.9-.95.37-.4.56-.89l-1.41-.51c-.04.1-.1.22-.28.43l-.83.86zm.05-3.24q.15.44 0 .89l1.4.51a2.8 2.8 0 0 0 0-1.92zm-2.8-5.1q-.54-.55-.94-.9a3 3 0 0 0-.9-.56l-.5 1.41c.09.04.21.1.42.28.22.19.47.45.86.83zM10.99 6.8l.86-.83c.21-.18.34-.24.43-.28l-.51-1.4q-.5.18-.9.55-.39.35-.94.9zm2.7-2.52a2.8 2.8 0 0 0-1.92 0l.51 1.41q.44-.15.9 0zM18.02 6l1.45 1.45 1.06-1.06-1.45-1.46zm1.06-1.07-1.46-1.45-1.06 1.06L18.02 6z"
            fill="currentColor"
          />
          <path
            d="M17.1 14.18 9.81 6.91"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.18 17.82 4 20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.83 7.1a.75.75 0 1 0 1.06 1.07zM19.08 6a.75.75 0 1 0-1.06-1.07zm-2.19 2.18L19.08 6l-1.06-1.07-2.19 2.19z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.38 16.9a.75.75 0 1 0 1.06-1.07zm-1.83-3.95A.75.75 0 0 0 11.5 14zm.2 5.58a.75.75 0 0 0 1.05-1.06zm-.6-2.7a.75.75 0 1 0-1.05 1.05zm3.29 0-2.89-2.88L11.5 14l2.89 2.88zm-1.64 1.64-1.64-1.65-1.06 1.06 1.64 1.65z"
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M17.8 9.11 14.9 6.2c-.8-.8-1.2-1.2-1.65-1.37a2.2 2.2 0 0 0-1.5 0c-.45.17-.85.57-1.65 1.37l-4.54 4.54a5.45 5.45 0 0 0 7.71 7.71l4.54-4.54c.8-.8 1.2-1.2 1.37-1.65q.26-.75 0-1.5c-.17-.45-.57-.85-1.37-1.65"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.56 3.23a.8.8 0 0 1 1.12 0l3.09 3.09a.8.8 0 1 1-1.13 1.12l-3.08-3.08a.8.8 0 0 1 0-1.13"
              fill="currentColor"
            />
          </g>
          <path
            d="M17.73 13.99 10 6.27 8.9 7.4l7.71 7.71z"
            fill="currentColor"
          />
          <path
            d="M5.03 17.85a6 6 0 0 0 1.12 1.13l-1.8 1.79a.8.8 0 1 1-1.12-1.13z"
            fill="currentColor"
          />
          <path
            d="m16.9 8.22-1.12-1.13 1.76-1.75 1.12 1.12z"
            fill="currentColor"
          />
          <path
            d="m15.37 16.35-3.06-3.06a.8.8 0 0 0-1.13 1.12l3.06 3.06z"
            fill="currentColor"
          />
          <path
            d="m13.63 18.08-1.74-1.74a.8.8 0 0 0-1.13 1.12l1.67 1.68q.45-.3.83-.69z"
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
            d="M17.78 3.23a.77.77 0 1 0-1.09 1.09l.95.95-1.7 1.7-.86-.87c-.78-.78-1.17-1.16-1.6-1.32a2 2 0 0 0-1.46 0c-.44.16-.82.54-1.6 1.32l-.12.12 7.48 7.48.12-.12c.78-.78 1.16-1.16 1.32-1.6q.26-.73 0-1.45c-.16-.44-.54-.83-1.32-1.6l-.87-.87 1.7-1.7.95.95a.77.77 0 0 0 1.1-1.1z"
            fill="currentColor"
          />
          <path
            d="M6.02 10.5 9.2 7.3l7.48 7.49-1.15 1.15-2.97-2.96a.77.77 0 1 0-1.1 1.09l2.98 2.96-.6.6-1.69-1.7a.77.77 0 1 0-1.09 1.1l1.62 1.62a5.3 5.3 0 0 1-6.09-.16l-2.28 2.28a.77.77 0 1 1-1.1-1.09L5.5 17.4a5.3 5.3 0 0 1 .5-6.9"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSyringe;
