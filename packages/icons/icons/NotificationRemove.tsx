import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconNotificationRemove = forwardRef<SVGSVGElement, IconProps>(
  function IconNotificationRemove(
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
              d="M22 10.5V12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2h1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m22 2-5 5m0-5 5 5"
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
              d="M17.5 11c-2.12 0-3.18 0-3.84-.66S13 8.62 13 6.5s0-3.18.66-3.84S15.38 2 17.5 2s3.18 0 3.84.66S22 4.38 22 6.5s0 3.18-.66 3.84-1.72.66-3.84.66m-2.53-7.03c.3-.3.77-.3 1.06 0l1.47 1.47 1.47-1.47a.75.75 0 1 1 1.06 1.06L18.56 6.5l1.47 1.47a.75.75 0 0 1-1.06 1.06L17.5 7.56l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47-1.47-1.47a.75.75 0 0 1 0-1.06"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.54 20.54C22 19.07 22 16.7 22 12q.01-2.03-.04-3.52c-.05.88-.2 1.45-.62 1.86-.66.66-1.72.66-3.84.66s-3.18 0-3.84-.66S13 8.62 13 6.5s0-3.18.66-3.84c.41-.41.98-.57 1.86-.62Q14.03 1.99 12 2C7.29 2 4.93 2 3.46 3.46 2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46"
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
              d="M17.5 11c-2.12 0-3.18 0-3.84-.66S13 8.62 13 6.5s0-3.18.66-3.84S15.38 2 17.5 2s3.18 0 3.84.66S22 4.38 22 6.5s0 3.18-.66 3.84-1.72.66-3.84.66m-2.53-7.03c.3-.3.77-.3 1.06 0l1.47 1.47 1.47-1.47a.75.75 0 1 1 1.06 1.06L18.56 6.5l1.47 1.47a.75.75 0 0 1-1.06 1.06L17.5 7.56l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47-1.47-1.47a.75.75 0 0 1 0-1.06"
              fill="currentColor"
            />
            <path
              d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2h.26a4 4 0 0 0-.66 1.83c-.1.72-.1 1.6-.1 2.58v.18c0 .98 0 1.87.1 2.58.1.78.34 1.58 1 2.23.65.66 1.45.9 2.23 1 .71.1 1.6.1 2.58.1h.18c.98 0 1.87 0 2.58-.1a4 4 0 0 0 1.83-.66V12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconNotificationRemove;
