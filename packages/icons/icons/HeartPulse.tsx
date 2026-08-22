import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHeartPulse = forwardRef<SVGSVGElement, IconProps>(
  function IconHeartPulse(
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
              d="M18 12h-.8c-.83 0-1.25 0-1.59.2-.34.19-.56.55-.98 1.26l-.03.05c-.4.66-.6 1-.89.99-.29 0-.48-.35-.85-1.02l-1.69-3.07c-.34-.63-.52-.95-.8-.96-.27-.02-.48.28-.9.87l-.27.4c-.44.63-.66.94-.99 1.11s-.7.17-1.47.17H6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m8.96 19.37.48-.58zM12 5.5l-.55.51a.75.75 0 0 0 1.1 0zm3.04 13.87.47.58zm-5.6-.58a29 29 0 0 1-4.47-4.43c-1.34-1.72-2.22-3.48-2.22-5.1h-1.5c0 2.13 1.13 4.22 2.54 6.02a31 31 0 0 0 4.7 4.67zM2.75 9.26c0-2.73 1.26-4.56 2.85-5.22 1.57-.65 3.75-.28 5.85 1.97l1.1-1.02c-2.4-2.58-5.22-3.3-7.53-2.33-2.28.95-3.77 3.42-3.77 6.6zm12.76 10.7a31 31 0 0 0 4.7-4.68c1.41-1.8 2.54-3.9 2.54-6.02h-1.5c0 1.62-.88 3.38-2.22 5.1a29 29 0 0 1-4.47 4.43zm7.24-10.7c0-3.18-1.5-5.65-3.77-6.6-2.3-.96-5.13-.25-7.53 2.33L12.55 6c2.1-2.25 4.28-2.62 5.85-1.97 1.6.66 2.85 2.5 2.85 5.22zM8.49 19.96c1.27 1.03 2.15 1.79 3.51 1.79v-1.5c-.72 0-1.17-.32-2.56-1.46zm6.07-1.17c-1.39 1.14-1.84 1.46-2.56 1.46v1.5c1.36 0 2.24-.76 3.51-1.8z"
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
              d="M2 9.26c0 3.75 4.02 7.71 6.96 10.11C10.3 20.46 10.96 21 12 21s1.7-.54 3.04-1.63c2.94-2.4 6.96-6.36 6.96-10.1 0-5.92-5.5-8.6-10-3.77C7.5.66 2 3.35 2 9.26"
              fill="currentColor"
            />
            <path
              d="m10.1 10.75.22-.33.2.35 1.7 3.1q.26.48.5.82c.17.23.48.55.98.56.49 0 .8-.3 1-.52.16-.2.34-.5.51-.8l.06-.09q.32-.54.48-.76.17-.2.23-.23a1 1 0 0 1 .31-.08c.21-.02.48-.02.9-.02H18a.75.75 0 0 0 0-1.5h-.83q-.6 0-1.02.03-.46.03-.9.26-.44.27-.7.65-.26.35-.55.85l-.05.08-.22.37-.21-.38-1.71-3.1q-.22-.44-.46-.77a1.3 1.3 0 0 0-.93-.54c-.47-.03-.8.23-.99.44-.17.19-.36.45-.54.7l-.3.45q-.34.48-.5.67a1 1 0 0 1-.22.2 1 1 0 0 1-.3.07c-.19.02-.44.02-.83.02H6a.75.75 0 0 0 0 1.5h.77q.54 0 .94-.02.43-.03.85-.23.41-.23.67-.57l.56-.75z"
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
              d="M8.96 19.37C6.02 16.97 2 13.01 2 9.27 2 3.34 7.5.66 12 5.5 16.5.66 22 3.35 22 9.26c0 3.75-4.02 7.71-6.96 10.11C13.7 20.46 13.04 21 12 21s-1.7-.54-3.04-1.63m1.13-8.62.23-.33.2.35 1.7 3.1q.26.48.5.82c.17.23.48.55.98.56.49 0 .8-.3 1-.52.16-.2.34-.5.51-.8l.06-.09q.32-.54.48-.76.17-.2.23-.23a1 1 0 0 1 .31-.08c.21-.02.48-.02.9-.02H18a.75.75 0 0 0 0-1.5h-.83q-.6 0-1.02.03-.46.03-.9.26-.44.27-.7.65-.26.35-.55.85l-.05.08-.22.37-.21-.38-1.71-3.1q-.22-.44-.46-.77a1.3 1.3 0 0 0-.93-.54c-.47-.03-.8.23-.99.44-.17.19-.36.45-.54.7l-.3.45q-.34.48-.5.67a1 1 0 0 1-.22.2 1 1 0 0 1-.3.07c-.19.02-.44.02-.83.02H6a.75.75 0 1 0 0 1.5h.77q.54 0 .94-.02.43-.03.85-.23.41-.23.67-.57.26-.3.56-.75z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHeartPulse;
