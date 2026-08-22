import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShieldWarning = forwardRef<SVGSVGElement, IconProps>(
  function IconShieldWarning(
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
              d="M3 10.42c0-3.2 0-4.8.38-5.34.38-.53 1.88-1.05 4.88-2.08l.58-.2C10.4 2.28 11.19 2 12 2s1.6.27 3.16.8l.58.2c3 1.03 4.5 1.55 4.88 2.08.38.54.38 2.14.38 5.34v1.57c0 5.64-4.24 8.38-6.9 9.54-.72.31-1.08.47-2.1.47s-1.38-.16-2.1-.47C7.24 20.37 3 17.63 3 11.99z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M12 8v4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle cx="12" cy="15.0005" r="1" fill="currentColor" />
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
              d="M3 10.42c0-3.2 0-4.8.38-5.34.38-.53 1.88-1.05 4.88-2.08l.58-.2C10.4 2.28 11.19 2 12 2s1.6.27 3.16.8l.58.2c3 1.03 4.5 1.55 4.88 2.08.38.54.38 2.14.38 5.34v1.57c0 5.64-4.24 8.38-6.9 9.54-.72.31-1.08.47-2.1.47s-1.38-.16-2.1-.47C7.24 20.37 3 17.63 3 11.99z"
              fill="currentColor"
            />
            <path
              d="M12 7.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path d="M12 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
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
              d="M3 10.42c0-3.2 0-4.8.38-5.34.38-.53 1.88-1.05 4.88-2.08l.58-.2C10.4 2.28 11.19 2 12 2s1.6.27 3.16.8l.58.2c3 1.03 4.5 1.55 4.88 2.08.38.54.38 2.14.38 5.34v1.57c0 5.64-4.24 8.38-6.9 9.54-.72.31-1.08.47-2.1.47s-1.38-.16-2.1-.47C7.24 20.37 3 17.63 3 11.99zm9-3.17c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75M12 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconShieldWarning;
