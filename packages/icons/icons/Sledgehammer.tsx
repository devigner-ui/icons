import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSledgehammer = forwardRef<SVGSVGElement, IconProps>(
  function IconSledgehammer(
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
              d="M7.61 4.6C9.35 2.87 10.21 2 11.3 2c1.07 0 1.94.87 3.68 2.6l4.42 4.42c1.73 1.74 2.6 2.6 2.6 3.68s-.87 1.95-2.6 3.69c-1.74 1.73-2.6 2.6-3.69 2.6-1.07 0-1.94-.87-3.68-2.6l-4.42-4.42c-1.73-1.74-2.6-2.6-2.6-3.68s.87-1.95 2.6-3.69"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m11.3 15.65-5.53 5.52c-.34.35-.51.52-.69.62-.48.28-1.08.28-1.56 0-.18-.1-.35-.27-.7-.62s-.5-.5-.61-.69a1.6 1.6 0 0 1 0-1.56c.1-.18.27-.35.62-.7l5.52-5.51"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m18.66 8.29.37-.37c.34-.34.51-.52.61-.7.28-.48.28-1.07 0-1.56a4 4 0 0 0-.61-.69 4 4 0 0 0-.7-.61 1.6 1.6 0 0 0-1.56 0 4 4 0 0 0-.69.61l-.37.37"
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
              d="M7.6 4.6C9.34 2.87 10.2 2 11.3 2c1.07 0 1.94.87 3.68 2.6l4.42 4.42c1.73 1.74 2.6 2.6 2.6 3.68s-.87 1.95-2.6 3.69c-1.74 1.73-2.6 2.6-3.69 2.6-1.07 0-1.94-.87-3.68-2.6L7.6 11.97C5.87 10.23 5 9.37 5 8.29s.87-1.95 2.6-3.69"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m8.34 12.7-5.51 5.53c-.35.34-.52.51-.62.69a1.6 1.6 0 0 0 0 1.56c.1.18.27.35.62.7s.5.5.69.61c.48.28 1.08.28 1.56 0 .18-.1.35-.27.7-.62l5.51-5.51z"
                fill="currentColor"
              />
              <path
                d="m18.66 8.3.37-.38c.34-.34.51-.52.61-.7.28-.48.28-1.07 0-1.56-.1-.17-.27-.35-.61-.69s-.52-.51-.7-.61a1.6 1.6 0 0 0-1.56 0 4 4 0 0 0-.69.61l-.37.37z"
                fill="currentColor"
              />
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
              d="M7.6 4.6C9.34 2.87 10.2 2 11.3 2c1.07 0 1.94.87 3.68 2.6l4.42 4.42c1.73 1.74 2.6 2.6 2.6 3.68s-.87 1.95-2.6 3.69c-1.74 1.73-2.6 2.6-3.69 2.6-1.07 0-1.94-.87-3.68-2.6L7.6 11.97C5.87 10.23 5 9.37 5 8.29s.87-1.95 2.6-3.69"
              fill="currentColor"
            />
            <path
              d="m7.28 13.77-4.45 4.46c-.35.34-.52.51-.62.69a1.6 1.6 0 0 0 0 1.56c.1.18.27.35.62.7s.5.5.69.61c.48.28 1.08.28 1.56 0 .18-.1.35-.27.7-.62l4.45-4.45z"
              fill="currentColor"
            />
            <path d="m8.34 12.7 2.95 2.95z" fill="currentColor" />
            <path
              d="M19.67 7.18c.25-.47.25-1.05-.03-1.52-.1-.17-.27-.35-.61-.69s-.52-.51-.7-.61a1.6 1.6 0 0 0-1.51-.03z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSledgehammer;
