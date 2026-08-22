import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPhoneRounded = forwardRef<SVGSVGElement, IconProps>(
  function IconPhoneRounded(
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
              d="M5 6.93a4.7 4.7 0 0 1 1.54-3c1.4-1.39 3.61-1.2 4.5.39l.65 1.16a2.8 2.8 0 0 1-.58 3.35m5.96 10.16a4.6 4.6 0 0 0 3-1.53c1.39-1.4 1.2-3.61-.39-4.5l-1.16-.65a2.8 2.8 0 0 0-3.35.58"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5 6.93c-.07 1.91.42 5.15 3.67 8.4s6.49 3.74 8.4 3.66m-1.9-6.1s-1.12 1.11-3.15-.91-.9-3.15-.9-3.15"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="m10.69 6.48-.65-1.16c-.89-1.59-3.1-1.78-4.5-.38a4.6 4.6 0 0 0-1.53 3c-.06 1.46.21 3.72 1.83 6.17l4.27-4.28c.93-.92 1.16-2.3.58-3.35m3.48 7.4L9.9 18.17A10.4 10.4 0 0 0 16.07 20a4.6 4.6 0 0 0 3-1.53c1.39-1.4 1.2-3.61-.39-4.5l-1.16-.65a2.8 2.8 0 0 0-3.35.58"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.02 12.98c-2.02-2.03-.9-3.15-.9-3.15L5.83 14.1q.71 1.1 1.83 2.22t2.22 1.83l4.28-4.27s-1.12 1.11-3.15-.91"
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
              d="m10.04 5.32.65 1.16a2.8 2.8 0 0 1-.58 3.35s-1.11 1.12.91 3.15 3.15.9 3.15.9a2.8 2.8 0 0 1 3.35-.57l1.16.65c1.59.89 1.78 3.1.38 4.5a4.6 4.6 0 0 1-3 1.53c-1.9.08-5.14-.4-8.4-3.66-3.24-3.25-3.73-6.49-3.65-8.4.04-1.13.7-2.16 1.53-3 1.4-1.39 3.61-1.2 4.5.39"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPhoneRounded;
