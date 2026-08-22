import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconProfileTick = forwardRef<SVGSVGElement, IconProps>(
  function IconProfileTick(
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
              opacity={duotone ? "0.4" : "1"}
              d="m15.11 19.05 1.52 1.52 3.04-3.04"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.83 10.87h-.33a4.43 4.43 0 1 1 4.6-4.43c0 2.4-1.9 4.35-4.27 4.43"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.66 21.81a9 9 0 0 1-5.01-1.38c-2.42-1.62-2.42-4.26 0-5.87 2.75-1.84 7.26-1.84 10.01 0"
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
            <path
              d="M12.67 2a4.75 4.75 0 0 0-.12 9.49h.29A4.74 4.74 0 0 0 12.67 2"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.75 14.16c-2.79-1.86-7.34-1.86-10.15 0-1.27.84-1.97 1.99-1.97 3.22s.7 2.37 1.96 3.21A9 9 0 0 0 12.67 22c1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.22-.7-2.37-1.96-3.2"
              fill="currentColor"
            />
            <path
              d="M12.04 19.26a.7.7 0 0 1-.44-.18l-1.26-1.26a.63.63 0 0 1 0-.88.63.63 0 0 1 .88 0l.82.82 2.08-2.08a.63.63 0 0 1 .88 0c.24.24.24.64 0 .88l-2.52 2.52a.6.6 0 0 1-.44.18"
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
              d="M12.67 2a4.75 4.75 0 0 0-.12 9.49h.29A4.74 4.74 0 0 0 12.67 2"
              fill="currentColor"
            />
            <path
              d="M17.75 14.16c-2.79-1.86-7.34-1.86-10.15 0-1.27.84-1.97 1.99-1.97 3.22s.7 2.37 1.96 3.21A9 9 0 0 0 12.67 22c1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.22-.7-2.37-1.96-3.2M15 16.56l-2.52 2.52a.6.6 0 0 1-.44.18.7.7 0 0 1-.44-.18l-1.26-1.26a.63.63 0 0 1 0-.88.63.63 0 0 1 .88 0l.82.82 2.08-2.08a.63.63 0 0 1 .88 0c.25.24.25.64 0 .88"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconProfileTick;
