import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCompassSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconCompassSquare(
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
              d="M13.02 14.56c-2.3.92-3.46 1.39-4.12.94a2 2 0 0 1-.4-.4c-.45-.66.02-1.81.94-4.12.2-.5.3-.74.46-.94l.14-.13c.2-.17.44-.27.94-.47 2.3-.92 3.46-1.39 4.12-.94q.25.15.4.4c.45.66-.02 1.81-.94 4.12-.2.5-.3.74-.46.94l-.14.14c-.2.16-.44.26-.94.46"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
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
              opacity={duotone ? "0.4" : "1"}
              d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54"
              fill="currentColor"
            />
            <path
              d="M13.02 14.56c.5-.2.74-.3.94-.46l.13-.14c.17-.2.27-.44.47-.94.92-2.3 1.39-3.46.94-4.12a2 2 0 0 0-.4-.4c-.66-.45-1.81.02-4.12.94-.5.2-.74.3-.94.46l-.14.14c-.16.2-.26.44-.46.94-.92 2.3-1.39 3.46-.94 4.12q.15.24.4.4c.66.45 1.81-.02 4.12-.94"
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
              d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22m1.96-7.9c-.2.16-.44.26-.94.46-2.3.92-3.46 1.39-4.12.94a2 2 0 0 1-.4-.4c-.45-.66.02-1.81.94-4.12.2-.5.3-.74.46-.94l.14-.13c.2-.17.44-.27.94-.47 2.3-.92 3.46-1.39 4.12-.94q.25.15.4.4c.45.66-.02 1.81-.94 4.12-.2.5-.3.74-.46.94z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCompassSquare;
