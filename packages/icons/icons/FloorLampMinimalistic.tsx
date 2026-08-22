import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFloorLampMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconFloorLampMinimalistic(
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
              d="M9 22h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 22V8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 8c2.34 0 4.3-1.28 4.85-3.02C17 4.46 16.55 4 16 4H8c-.55 0-1.01.46-.85.98C7.7 6.72 9.66 8 12 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M12 2c1.66 0 3 .9 3 2H9c0-1.1 1.34-2 3-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 19v-1.06c0-1.28-.59-2.5-1.6-3.27l-3.88-2.78m-3.74-.2L5.3 8.43m-2.53 3.24c-.35.45-.27 1.12.26 1.3a3.05 3.05 0 0 0 3.48-1.09m-3.74-.2c-.89-.71-1.04-2-.34-2.9s1.98-1.05 2.87-.35m0 0c.35-.44 1.01-.53 1.32-.05a3.1 3.1 0 0 1-.1 3.5"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.25 22c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M12 8c2.34 0 4.3-1.28 4.85-3.02C17 4.46 16.55 4 16 4H8c-.55 0-1.01.46-.85.98C7.7 6.72 9.66 8 12 8"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 2c1.66 0 3 .9 3 2H9c0-1.1 1.34-2 3-2"
              fill="currentColor"
            />
            <path
              d="m6.45 11.98.07-.09a3.1 3.1 0 0 0 .1-3.5c-.3-.48-.96-.4-1.3.05l-2.54 3.24c-.35.45-.27 1.12.26 1.3 1.2.43 2.58.06 3.41-1"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 8q.37 0 .75-.04v13.29h-1.5V17.9c-.01-1.03-.49-2-1.3-2.63l-3.9-2.87a3 3 0 0 0 .86-1.23l3.94 2.9h.01q.21.16.39.34V7.96q.37.03.75.04"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.44 8.79c.7-.9 1.98-1.05 2.87-.35l-2.53 3.24c-.89-.7-1.04-2-.34-2.9"
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
              d="M14.6 3c-.52-.6-1.49-1-2.6-1s-2.08.4-2.6 1z"
              fill="currentColor"
            />
            <path
              d="M12.75 7.96c2-.24 3.6-1.43 4.1-2.98C17 4.46 16.55 4 16 4H8c-.55 0-1.01.46-.85.98.5 1.55 2.1 2.74 4.1 2.98v6.44l-.39-.33-3.9-2.78-.07-.06c.37-.93.27-2-.26-2.84-.3-.48-.97-.4-1.32.05l-2.53 3.24c-.35.45-.27 1.12.26 1.3 1 .36 2.14.16 2.97-.54l.07.06 3.87 2.77c.81.63 1.29 1.6 1.3 2.63v3.35H9a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5h-2.25z"
              fill="currentColor"
            />
            <path
              d="m2.16 10.86 2.2-2.83a2 2 0 0 0-1.92.76c-.48.6-.56 1.4-.28 2.07"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFloorLampMinimalistic;
