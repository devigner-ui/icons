import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRulerAngular = forwardRef<SVGSVGElement, IconProps>(
  function IconRulerAngular(
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
              d="M2 6v12.5c0 1.4 0 2.1.34 2.61a2 2 0 0 0 .55.55c.5.34 1.2.34 2.61.34 1.4 0 2.1 0 2.61-.34a2 2 0 0 0 .55-.55c.34-.5.34-1.2.34-2.61V11c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3h7.5c1.4 0 2.1 0 2.61-.34a2 2 0 0 0 .55-.55c.34-.5.34-1.2.34-2.61 0-1.4 0-2.1-.34-2.61a2 2 0 0 0-.55-.55C20.61 2 19.91 2 18.5 2H6c-1.89 0-2.83 0-3.41.59C2 3.17 2 4.1 2 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 2v2m6-2v2M9 2v3m6-3v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12h2m-2 6h2m-2-3h3M2 9h3"
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
              d="M6 2h12.75c1.24 0 1.89.02 2.36.34a2 2 0 0 1 .55.55c.34.5.34 1.2.34 2.61 0 1.4 0 2.1-.34 2.61a2 2 0 0 1-.55.55c-.5.34-1.2.34-2.61.34H11c-.94 0-1.41 0-1.7.3-.3.29-.3.76-.3 1.7v7.5c0 1.4 0 2.1-.34 2.61a2 2 0 0 1-.55.55c-.5.34-1.2.34-2.61.34-1.4 0-2.1 0-2.61-.34a2 2 0 0 1-.55-.55C2.02 20.64 2 20 2 18.75V6c0-1.89 0-2.83.59-3.41C3.17 2 4.1 2 6 2"
              fill="currentColor"
            />
            <path d="M4 17.25H2v1.5h2a.75.75 0 0 0 0-1.5" fill="currentColor" />
            <path d="M5 14.25H2v1.5h3a.75.75 0 0 0 0-1.5" fill="currentColor" />
            <path d="M4 11.25H2v1.5h2a.75.75 0 0 0 0-1.5" fill="currentColor" />
            <path d="M5 8.25H2v1.5h3a.75.75 0 0 0 0-1.5" fill="currentColor" />
            <path d="M9.75 5V2h-1.5v3a.75.75 0 0 0 1.5 0" fill="currentColor" />
            <path
              d="M12.75 4V2h-1.5v2a.75.75 0 0 0 1.5 0"
              fill="currentColor"
            />
            <path
              d="M15.75 5V2h-1.5v3a.75.75 0 0 0 1.5 0"
              fill="currentColor"
            />
            <path
              d="M18.75 4V2h-1.5v2a.75.75 0 0 0 1.5 0"
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
              d="M8.25 2H6c-1.89 0-2.83 0-3.41.59C2 3.17 2 4.1 2 6v2.25h3a.75.75 0 0 1 0 1.5H2v1.5h2a.75.75 0 0 1 0 1.5H2v1.5h3a.75.75 0 0 1 0 1.5H2v1.5h2a.75.75 0 0 1 0 1.5H2c0 1.24.02 1.89.34 2.36a2 2 0 0 0 .55.55c.5.34 1.2.34 2.61.34 1.4 0 2.1 0 2.61-.34a2 2 0 0 0 .55-.55c.34-.5.34-1.2.34-2.61V11c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3h7.5c1.4 0 2.1 0 2.61-.34a2 2 0 0 0 .55-.55c.34-.5.34-1.2.34-2.61 0-1.4 0-2.1-.34-2.61a2 2 0 0 0-.55-.55C20.64 2.02 20 2 18.75 2v2a.75.75 0 0 1-1.5 0V2h-1.5v3a.75.75 0 0 1-1.5 0V2h-1.5v2a.75.75 0 0 1-1.5 0V2h-1.5v3a.75.75 0 0 1-1.5 0z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRulerAngular;
