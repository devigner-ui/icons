import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLightning = forwardRef<SVGSVGElement, IconProps>(
  function IconLightning(
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
              d="M13.2 8h-2.4c-2.26 0-3.4 0-4.1.7-.7.68-.7 1.8-.7 4.03v2.54c0 2.23 0 3.35.7 4.04s1.84.69 4.1.69h2.4M10.8 8h2.4c2.26 0 3.4 0 4.1.7.7.68.7 1.8.7 4.03v2.54c0 2.23 0 3.35-.7 4.04s-1.84.69-4.1.69h-2.4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 20v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m12 12-1.5 2h3L12 16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11 5h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M15.5 8V5.5c0-1.4 0-2.1-.34-2.61a2 2 0 0 0-.55-.55C14.11 2 13.41 2 12 2c-1.4 0-2.1 0-2.61.34a2 2 0 0 0-.55.55c-.34.5-.34 1.2-.34 2.61V8"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5 19.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.8 8h2.4c2.26 0 3.4 0 4.1.7.7.68.7 1.8.7 4.03v2.54c0 2.23 0 3.35-.7 4.04s-1.84.69-4.1.69h-2.4c-2.26 0-3.4 0-4.1-.7-.7-.68-.7-1.8-.7-4.03v-2.54c0-2.23 0-3.35.7-4.04S8.54 8 10.8 8m1.8 4.45a.75.75 0 1 0-1.2-.9l-1.5 2a.75.75 0 0 0 .6 1.2H12l-.6.8a.75.75 0 1 0 1.2.9l1.5-2a.75.75 0 0 0-.6-1.2H12z"
              fill="currentColor"
            />
            <path
              d="M10.25 4.75c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.8 8h2.4c2.26 0 3.4 0 4.1.7.7.68.7 1.8.7 4.03v2.54c0 2.23 0 3.35-.7 4.04s-1.84.69-4.1.69h-2.4c-2.26 0-3.4 0-4.1-.7-.7-.68-.7-1.8-.7-4.03v-2.54c0-2.23 0-3.35.7-4.04S8.54 8 10.8 8m1.8 4.45a.75.75 0 1 0-1.2-.9l-1.5 2a.75.75 0 0 0 .6 1.2H12l-.6.8a.75.75 0 1 0 1.2.9l1.5-2a.75.75 0 0 0-.6-1.2H12z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.5 5.5c0-1.4 0-2.1.34-2.61a2 2 0 0 1 .55-.55C9.89 2 10.59 2 12 2c1.4 0 2.1 0 2.61.34a2 2 0 0 1 .55.55c.34.5.34 1.2.34 2.61v2.55Q14.61 8 13.2 8h-2.4q-1.41-.01-2.3.05z"
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
              d="M10.8 8h2.4c2.26 0 3.4 0 4.1.7.7.68.7 1.8.7 4.03v2.54c0 2.23 0 3.35-.7 4.04s-1.84.69-4.1.69h-2.4c-2.26 0-3.4 0-4.1-.7-.7-.68-.7-1.8-.7-4.03v-2.54c0-2.23 0-3.35.7-4.04S8.54 8 10.8 8m1.8 4.45a.75.75 0 1 0-1.2-.9l-1.5 2a.75.75 0 0 0 .6 1.2H12l-.6.8a.75.75 0 1 0 1.2.9l1.5-2a.75.75 0 0 0-.6-1.2H12z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.73 7q-1.28-.01-2.23.05V5.5c0-1.4 0-2.1.34-2.61a2 2 0 0 1 .55-.55C9.89 2 10.59 2 12 2c1.4 0 2.1 0 2.61.34a2 2 0 0 1 .55.55c.34.5.34 1.2.34 2.61v1.55q-.95-.06-2.23-.05zM11 3.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.2 8h-2.4c-2.26 0-3.4 0-4.1.7-.7.68-.7 1.8-.7 4.03v2.54c0 2.23 0 3.35.7 4.04s1.84.69 4.1.69h.45v2a.75.75 0 0 0 1.5 0v-2h.45c2.26 0 3.4 0 4.1-.7.7-.68.7-1.8.7-4.03v-2.54c0-2.23 0-3.35-.7-4.04S15.46 8 13.2 8m-.75 3.4c.33.25.4.72.15 1.05l-.6.8h1.5a.75.75 0 0 1 .6 1.2l-1.5 2a.75.75 0 1 1-1.2-.9l.6-.8h-1.5a.75.75 0 0 1-.6-1.2l1.5-2a.75.75 0 0 1 1.05-.15"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLightning;
