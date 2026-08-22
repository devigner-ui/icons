import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDropperMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconDropperMinimalistic(
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
              d="M19 15.88V8c0-1.89 0-2.83-.59-3.41C17.83 4 16.9 4 15 4H9c-1.89 0-2.83 0-3.41.59C5 5.17 5 6.1 5 8v7.88c0 .76.32 1.49.88 2a9.05 9.05 0 0 0 12.24 0c.56-.51.88-1.24.88-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M19 8h-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M19 14h-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M14 11.92c0 1.15-.9 2.08-2 2.08s-2-.93-2-2.08c0-.72.78-1.68 1.37-2.3a.86.86 0 0 1 1.26 0c.59.62 1.37 1.58 1.37 2.3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M19 11h-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 21v1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14 4a2 2 0 1 0-4 0"
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
              d="M19 15.88V8c0-1.89 0-2.83-.59-3.41C17.83 4 16.9 4 15 4H9c-1.89 0-2.83 0-3.41.59C5 5.17 5 6.1 5 8v7.88c0 .76.32 1.49.88 2a9.05 9.05 0 0 0 12.24 0c.56-.51.88-1.24.88-2"
              fill="currentColor"
            />
            <path
              d="M14 11.92c0 1.15-.9 2.08-2 2.08s-2-.93-2-2.08c0-.72.78-1.68 1.37-2.3a.86.86 0 0 1 1.26 0c.59.62 1.37 1.58 1.37 2.3"
              fill="currentColor"
            />
            <path d="M19 7.25h-2a.75.75 0 0 0 0 1.5h2z" fill="currentColor" />
            <path d="M19 10.25h-2a.75.75 0 0 0 0 1.5h2z" fill="currentColor" />
            <path d="M19 13.25h-2a.75.75 0 0 0 0 1.5h2z" fill="currentColor" />
            <path d="M14 4a2 2 0 1 0-4 0z" fill="currentColor" />
            <path
              d="M11.25 20.24q.75.06 1.5 0v1.01a.75.75 0 0 1-1.5 0z"
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
              d="M19 11.75v1.5h-2a.75.75 0 0 0 0 1.5h2v1.13c0 .76-.32 1.49-.88 2a9 9 0 0 1-5.37 2.36v1.01a.75.75 0 1 1-1.5 0v-1.01a9 9 0 0 1-5.37-2.36 2.7 2.7 0 0 1-.88-2V8c0-1.89 0-2.83.59-3.41C6.17 4 7.1 4 9 4h6c1.89 0 2.83 0 3.41.59.5.5.58 1.26.59 2.66h-2a.75.75 0 0 0 0 1.5h2v1.5h-2a.75.75 0 0 0 0 1.5zM12 14c1.1 0 2-.93 2-2.08 0-.72-.78-1.68-1.37-2.3a.86.86 0 0 0-1.26 0c-.59.62-1.37 1.58-1.37 2.3 0 1.15.9 2.08 2 2.08"
              fill="currentColor"
            />
            <path d="M13.73 3a2 2 0 0 0-3.46 0z" fill="currentColor" />
          </svg>
        )}
      </>
    );
  },
);

export default IconDropperMinimalistic;
