import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFloorLamp = forwardRef<SVGSVGElement, IconProps>(
  function IconFloorLamp(
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
              d="M12 22V7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 7a3 3 0 0 0 2.84-2.02c.18-.52-.29-.98-.84-.98h-4c-.55 0-1.02.46-.84.98A3 3 0 0 0 12 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M10 4a2 2 0 1 1 4 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 18v-1.06c0-1.28-.59-2.5-1.6-3.27l-3.88-2.78m-3.74-.2L5.3 7.43m-2.53 3.24c-.35.45-.27 1.12.26 1.3a3.05 3.05 0 0 0 3.48-1.09m-3.74-.2c-.89-.71-1.04-2-.34-2.9s1.98-1.05 2.87-.35m0 0c.35-.44 1.01-.53 1.32-.05a3.1 3.1 0 0 1-.1 3.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 18v-1.06c0-1.28.59-2.5 1.6-3.27l3.88-2.78m3.74-.2L18.7 7.43m2.53 3.24c.35.45.27 1.12-.26 1.3a3.05 3.05 0 0 1-3.48-1.09m3.74-.2c.89-.71 1.04-2 .34-2.9a2.03 2.03 0 0 0-2.87-.35m0 0c-.35-.44-1.01-.53-1.32-.05a3.1 3.1 0 0 0 .1 3.5"
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
              d="M12 7a3 3 0 0 0 2.84-2.02c.18-.52-.29-.98-.84-.98h-4c-.55 0-1.02.46-.84.98A3 3 0 0 0 12 7"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 2a2 2 0 0 1 2 2h-4c0-1.1.9-2 2-2"
              fill="currentColor"
            />
            <path
              d="m6.45 10.98.07-.09a3.1 3.1 0 0 0 .1-3.5c-.3-.48-.96-.4-1.3.05l-2.54 3.24c-.35.45-.27 1.12.26 1.3 1.2.43 2.58.06 3.41-1"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.44 7.79c.7-.9 1.98-1.05 2.87-.35l-2.53 3.24c-.89-.7-1.04-2-.34-2.9"
              fill="currentColor"
            />
            <path
              d="m17.55 10.98-.07-.09a3.1 3.1 0 0 1-.1-3.5c.3-.48.96-.4 1.3.05l2.54 3.24c.35.45.27 1.12-.26 1.3-1.2.43-2.58.06-3.41-1"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.56 7.79a2.03 2.03 0 0 0-2.87-.35l2.53 3.24c.89-.7 1.04-2 .34-2.9"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.25 22c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M12 7a3 3 0 0 0 .74-.1l.01.1v6.4l.39-.33 3.95-2.9a3 3 0 0 0 .86 1.23l-3.9 2.87a3.4 3.4 0 0 0-1.3 2.67v4.31h-1.5V16.9c-.01-1.03-.49-2-1.3-2.63l-3.9-2.87a3 3 0 0 0 .86-1.23l3.94 2.9h.01q.21.16.39.34V6.9A3 3 0 0 0 12 7"
                fill="currentColor"
              />
              <path d="M12 22.75" fill="currentColor" />
            </g>
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
              d="m13.75 3.06-3.6-.02A2 2 0 0 1 11.95 2c.77 0 1.44.43 1.8 1.06"
              fill="currentColor"
            />
            <path
              d="M12.75 7.03c1-.25 1.8-1 2.12-1.96.19-.53-.3-1-.86-1L9.9 4.03c-.57 0-1.05.47-.86 1a3.1 3.1 0 0 0 2.21 2v6.37l-.39-.34-3.9-2.78-.07-.06c.37-.93.27-2-.26-2.84-.3-.48-.97-.4-1.32.05l-2.53 3.24c-.35.45-.27 1.12.26 1.3 1 .36 2.14.16 2.97-.54l.07.06 3.87 2.77c.81.63 1.29 1.6 1.3 2.63v4.35H9a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5h-2.25v-4.31a3.4 3.4 0 0 1 1.3-2.67l3.87-2.77.13-.1c.84.73 2 .95 3.02.59.54-.19.61-.86.26-1.3L18.8 7.43c-.35-.44-1.01-.53-1.32-.05a3.1 3.1 0 0 0-.28 2.77l-.16.13-3.9 2.77v.01q-.21.16-.39.34z"
              fill="currentColor"
            />
            <path
              d="m2.16 9.86 2.2-2.83a2 2 0 0 0-1.92.76c-.48.6-.56 1.4-.28 2.07"
              fill="currentColor"
            />
            <path
              d="m19.74 7.03 2.22 2.83c.27-.67.19-1.47-.29-2.07a2 2 0 0 0-1.93-.76"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFloorLamp;
