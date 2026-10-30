import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFloorLampTwoShades = forwardRef<SVGSVGElement, IconProps>(
  function IconFloorLampTwoShades(
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
        {variant === "Broken" ? (
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
            d="M11.55 22h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M14.55 22v-9m0-5v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M14.55 8c2.34 0 4.3-1.28 4.85-3.02.15-.52-.3-.98-.85-.98h-8c-.55 0-1.01.46-.85.98C10.25 6.72 12.21 8 14.55 8Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M14.55 2c1.66 0 3 .9 3 2h-6c0-1.1 1.34-2 3-2Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M14.55 19v-1.06c0-1.28-.59-2.5-1.6-3.27l-3.88-2.78m0 0a3.1 3.1 0 0 0 .1-3.5c-.3-.48-.96-.4-1.3.05l-2.54 3.24m0 0c-.35.45-.27 1.12.26 1.3a3.05 3.05 0 0 0 3.48-1.09m-3.74-.2c-.89-.71-1.04-2-.34-2.9s1.98-1.05 2.87-.35"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      ) : !fill ? (
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
              d="M11.55 22h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M14.55 22V8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M14.55 8c2.34 0 4.3-1.28 4.85-3.02.15-.52-.3-.98-.85-.98h-8c-.55 0-1.01.46-.85.98C10.25 6.72 12.21 8 14.55 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M14.55 2c1.66 0 3 .9 3 2h-6c0-1.1 1.34-2 3-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.55 19v-1.06c0-1.28-.59-2.5-1.6-3.27l-3.88-2.78m-3.74-.2 2.52-3.26m-2.53 3.24c-.35.45-.27 1.12.26 1.3a3.05 3.05 0 0 0 3.48-1.09m-3.74-.2c-.89-.71-1.04-2-.34-2.9s1.98-1.05 2.87-.35m0 0c.35-.44 1.01-.53 1.32-.05a3.1 3.1 0 0 1-.1 3.5"
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
              d="M10.8 21.6c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M14.55 7.6c2.34 0 4.3-1.28 4.85-3.02.15-.52-.3-.98-.85-.98h-8c-.55 0-1.01.46-.85.98.55 1.74 2.51 3.02 4.85 3.02"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.55 1.6c1.66 0 3 .9 3 2h-6c0-1.1 1.34-2 3-2"
              fill="currentColor"
            />
            <path
              d="m9 11.58.07-.09a3.1 3.1 0 0 0 .1-3.5c-.3-.48-.96-.4-1.3.05l-2.54 3.24c-.35.45-.27 1.12.26 1.3 1.2.43 2.58.06 3.41-1"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.55 7.6q.37 0 .75-.04v13.29h-1.5V17.5c-.01-1.03-.49-2-1.3-2.63L8.6 12a3 3 0 0 0 .86-1.23l3.94 2.9h.01q.21.16.39.34V7.56q.37.03.75.04"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.99 8.39c.7-.9 1.98-1.05 2.87-.35l-2.53 3.24c-.89-.7-1.04-2-.34-2.9"
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
              d="M17.15 2.6c-.52-.6-1.49-1-2.6-1s-2.08.4-2.6 1z"
              fill="currentColor"
            />
            <path
              d="M15.3 7.56c2-.24 3.6-1.43 4.1-2.98.15-.52-.3-.98-.85-.98h-8c-.55 0-1.01.46-.85.98.5 1.55 2.1 2.74 4.1 2.98V14l-.39-.33-3.9-2.78-.07-.06c.37-.93.27-2-.26-2.84-.3-.48-.97-.4-1.32.05l-2.53 3.24c-.35.45-.27 1.12.26 1.3 1 .36 2.14.16 2.97-.54l.07.06 3.87 2.77c.81.63 1.29 1.6 1.3 2.63v3.35h-2.25a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5H15.3z"
              fill="currentColor"
            />
            <path
              d="m4.71 10.46 2.2-2.83a2 2 0 0 0-1.92.76c-.48.6-.56 1.4-.28 2.07"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFloorLampTwoShades;
