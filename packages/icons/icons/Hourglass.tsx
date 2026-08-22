import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHourglass = forwardRef<SVGSVGElement, IconProps>(
  function IconHourglass(
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
              d="M14.96 9.07 12 12 9.04 9.07c-2.92-2.9-4.38-4.34-3.97-5.59q.05-.15.13-.31C5.8 2 7.87 2 12 2s6.2 0 6.8 1.17q.08.15.13.31c.41 1.25-1.05 2.7-3.97 5.6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.04 14.93 12 12l2.96 2.93c2.92 2.9 4.38 4.34 3.97 5.59q-.05.16-.13.31C18.2 22 16.13 22 12 22s-6.2 0-6.8-1.17q-.08-.15-.13-.31c-.41-1.25 1.05-2.7 3.97-5.6"
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
              d="M12 2C7.87 2 5.8 2 5.2 3.3q-.08.17-.13.35c-.41 1.38 1.05 3 3.97 6.2L11 12h2l1.96-2.14c2.92-3.22 4.38-4.83 3.97-6.21l-.13-.35C18.2 2 16.13 2 12 2"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.2 20.7C5.8 22 7.87 22 12 22s6.2 0 6.8-1.3q.08-.17.13-.35c.41-1.38-1.05-3-3.97-6.2L13 12h-2l-1.96 2.14c-2.92 3.22-4.38 4.83-3.97 6.21q.05.18.13.35"
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
              d="M5.2 3.3C5.8 2 7.87 2 12 2s6.2 0 6.8 1.3q.08.17.13.35c.41 1.38-1.05 3-3.97 6.2L13 12l1.96 2.14c2.92 3.22 4.38 4.83 3.97 6.21q-.05.18-.13.35C18.2 22 16.13 22 12 22s-6.2 0-6.8-1.3q-.08-.17-.13-.35c-.41-1.38 1.05-3 3.97-6.2L11 12 9.04 9.86C6.12 6.64 4.66 5.03 5.07 3.65q.05-.18.13-.35"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHourglass;
