import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCallMedicineRounded = forwardRef<SVGSVGElement, IconProps>(
  function IconCallMedicineRounded(
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
              d="M17 12a5 5 0 1 0-4.48-2.77q.15.27.07.57l-.3 1.11c-.13.49.31.93.8.8l1.11-.3q.3-.07.57.07 1.02.5 2.23.52"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M15 7h4m-2 2V5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m8.04 7.32.65 1.16a2.8 2.8 0 0 1-.58 3.35s-1.11 1.12.91 3.15 3.15.9 3.15.9a2.8 2.8 0 0 1 3.35-.57l1.16.65c1.59.89 1.78 3.1.38 4.5a4.6 4.6 0 0 1-3 1.53c-1.9.08-5.14-.4-8.4-3.66-3.24-3.25-3.73-6.49-3.65-8.4.04-1.13.7-2.16 1.53-3 1.4-1.39 3.61-1.2 4.5.39"
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
              d="M22 7a5 5 0 0 1-7.23 4.48 1 1 0 0 0-.57-.07l-1.11.3a.65.65 0 0 1-.8-.8l.3-1.11q.07-.3-.07-.57A5 5 0 1 1 22 7m-5-2.19c.52 0 .94.42.94.94v.31h.31a.94.94 0 1 1 0 1.88h-.31v.31a.94.94 0 1 1-1.88 0v-.31h-.31a.94.94 0 1 1 0-1.88h.31v-.31c0-.52.42-.94.94-.94"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m8.04 7.32.65 1.16a2.8 2.8 0 0 1-.58 3.35s-1.11 1.12.91 3.15 3.15.9 3.15.9a2.8 2.8 0 0 1 3.35-.57l1.16.65c1.59.89 1.78 3.1.38 4.5a4.6 4.6 0 0 1-3 1.53c-1.9.08-5.14-.4-8.4-3.66-3.24-3.25-3.73-6.49-3.65-8.4.04-1.13.7-2.16 1.53-3 1.4-1.39 3.61-1.2 4.5.39"
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
              d="M22 7a5 5 0 0 1-7.23 4.48 1 1 0 0 0-.57-.07l-1.11.3a.65.65 0 0 1-.8-.8l.3-1.11q.07-.3-.07-.57A5 5 0 1 1 22 7m-5-2.19c.52 0 .94.42.94.94v.31h.31a.94.94 0 1 1 0 1.88h-.31v.31a.94.94 0 1 1-1.88 0v-.31h-.31a.94.94 0 1 1 0-1.88h.31v-.31c0-.52.42-.94.94-.94"
              fill="currentColor"
            />
            <path
              d="m8.04 7.32.65 1.16a2.8 2.8 0 0 1-.58 3.35s-1.11 1.12.91 3.15 3.15.9 3.15.9a2.8 2.8 0 0 1 3.35-.57l1.16.65c1.59.89 1.78 3.1.38 4.5a4.6 4.6 0 0 1-3 1.53c-1.9.08-5.14-.4-8.4-3.66-3.24-3.25-3.73-6.49-3.65-8.4.04-1.13.7-2.16 1.53-3 1.4-1.39 3.61-1.2 4.5.39"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCallMedicineRounded;
