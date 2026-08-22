import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFlashlightOn = forwardRef<SVGSVGElement, IconProps>(
  function IconFlashlightOn(
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
              d="M9 22v-4.34c0-.82 0-1.23-.15-1.6a4 4 0 0 0-1.02-1.23l-3.24-3.24a2 2 0 0 1-.51-.62c-.08-.19-.08-.39-.08-.8V10c0-.94 0-1.41.3-1.7C4.58 8 5.05 8 6 8h12c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7v.17c0 .41 0 .61-.08.8-.07.18-.22.33-.5.62l-3.25 3.24c-.58.58-.87.87-1.02 1.23-.15.37-.15.78-.15 1.6V22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M15 16H9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.5 11h15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 5V2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M8 5 6 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m16 5 2-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 19v2"
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
              d="M9 19v-1.34c0-.82 0-1.23-.15-1.6L8.82 16h6.36l-.03.06c-.15.37-.15.78-.15 1.6V20c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3h-2c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 18.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20 10.17V10c0-.94 0-1.41-.3-1.7-.29-.3-.76-.3-1.7-.3H6c-.94 0-1.41 0-1.7.3-.3.29-.3.76-.3 1.7v.17c0 .41 0 .61.08.8l.01.03h15.82l.01-.03c.08-.19.08-.39.08-.8"
              fill="currentColor"
            />
            <path
              d="m16.17 14.83 3.24-3.24c.28-.28.42-.42.5-.59H4.09c.08.17.22.31.5.59l3.24 3.24c.54.54.83.83.99 1.17h6.36a5 5 0 0 1 1-1.17"
              fill="currentColor"
            />
            <path
              d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"
              fill="currentColor"
            />
            <path
              d="M6.53 2.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06-1.06z"
              fill="currentColor"
            />
            <path
              d="M18.53 2.47a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l2-2c.3-.3.3-.77 0-1.06"
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
              d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"
              fill="currentColor"
            />
            <path
              d="M6.53 2.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06-1.06z"
              fill="currentColor"
            />
            <path
              d="M18.53 2.47a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l2-2c.3-.3.3-.77 0-1.06"
              fill="currentColor"
            />
            <path
              d="M20 10v.25H4V10c0-.94 0-1.41.3-1.7C4.58 8 5.05 8 6 8h12c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7"
              fill="currentColor"
            />
            <path
              d="m16.17 14.83-.42.42h-7.5l-.42-.42-3.08-3.08h14.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 20v-2.34l-.01-.91h6.03q-.03.35-.02.9V20c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3h-2c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7m3-1.75c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFlashlightOn;
