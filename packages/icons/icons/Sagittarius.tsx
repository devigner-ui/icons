import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSagittarius = forwardRef<SVGSVGElement, IconProps>(
  function IconSagittarius(
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
              d="M12.67 3h9v9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m21.67 3-18 18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m7.27 6.6 10.8 10.8"
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
              d="M22.36 2.71a.8.8 0 0 0-.7-.47h-9a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h7.19L3.13 20.46a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22L20.91 4.8V12c0 .41.34.75.75.75s.75-.34.75-.75V3a1 1 0 0 0-.05-.29"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.07 18.15a.7.7 0 0 1-.53-.22L6.74 7.13a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l10.8 10.8c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22"
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
              d="M22.36 2.71a.8.8 0 0 0-.41-.41 1 1 0 0 0-.28-.05h-9a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h7.19L3.14 20.47a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22L20.92 4.81V12c0 .41.34.75.75.75s.75-.34.75-.75V3q0-.15-.06-.29"
              fill="currentColor"
            />
            <path
              d="M18.07 18.15a.7.7 0 0 1-.53-.22L6.74 7.13a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l10.8 10.8c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSagittarius;
