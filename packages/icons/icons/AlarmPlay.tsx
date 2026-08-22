import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAlarmPlay = forwardRef<SVGSVGElement, IconProps>(
  function IconAlarmPlay(
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="13.0005"
              r="9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M13.89 10.94c1.07.87 1.61 1.31 1.61 2.06s-.54 1.19-1.61 2.07a15 15 0 0 1-1.65 1.16c-1.07.66-1.6.98-2.09.62s-.52-1.12-.61-2.63a22 22 0 0 1 0-2.44c.09-1.51.13-2.27.61-2.63s1.02-.03 2.1.62a15 15 0 0 1 1.64 1.17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m3.5 4.5 4-2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m20.5 4.5-4-2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
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
                d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
                fill="currentColor"
              />
            </g>
            <path
              d="M13.03 10.28q-.37-.26-.79-.51c-1.07-.65-1.6-.98-2.09-.62s-.52 1.12-.61 2.63a22 22 0 0 0 0 2.44c.09 1.51.13 2.27.61 2.63s1.02.04 2.1-.62a15 15 0 0 0 1.64-1.16c1.07-.88 1.61-1.32 1.61-2.07s-.54-1.19-1.61-2.06q-.46-.37-.86-.66"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.24 2.34c.21.34.11.78-.23 1l-3.9 2.4a.72.72 0 1 1-.77-1.23l3.9-2.4a.74.74 0 0 1 1 .23"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.76 2.34a.73.73 0 0 1 1-.23l3.9 2.41c.34.21.44.66.23 1a.73.73 0 0 1-1 .23l-3.9-2.41a.7.7 0 0 1-.23-1"
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
              d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18m1.03-11.72q-.37-.26-.79-.51c-1.07-.65-1.6-.98-2.09-.62s-.52 1.12-.61 2.63a22 22 0 0 0 0 2.44c.09 1.51.13 2.27.61 2.63s1.02.04 2.1-.62a15 15 0 0 0 1.64-1.16c1.07-.88 1.61-1.32 1.61-2.07s-.54-1.19-1.61-2.06q-.46-.38-.86-.66"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.14 1.6c.22.35.1.82-.24 1.04l-4 2.5a.75.75 0 0 1-.8-1.28l4-2.5a.75.75 0 0 1 1.04.24m7.72 0a.75.75 0 0 1 1.04-.24l4 2.5a.75.75 0 1 1-.8 1.28l-4-2.5a.75.75 0 0 1-.24-1.04"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAlarmPlay;
