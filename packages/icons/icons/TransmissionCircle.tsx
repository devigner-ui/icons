import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTransmissionCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconTransmissionCircle(
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
              d="M8 9v6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 9v6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M8 12h5c.93 0 1.4 0 1.77-.15a2 2 0 0 0 1.08-1.08C16 10.4 16 9.93 16 9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M8 8.25c.41 0 .75.34.75.75v2.25h2.5V9a.75.75 0 0 1 1.5 0v2.25H13q.7 0 1.04-.02t.44-.07q.47-.2.67-.68c.04-.08.07-.2.08-.44.02-.24.02-.56.02-1.04a.75.75 0 0 1 1.5 0v.03q0 .66-.02 1.12t-.19.9a2.8 2.8 0 0 1-1.49 1.5q-.43.16-.9.18-.46.03-1.12.02h-.28V15a.75.75 0 0 1-1.5 0v-2.25h-2.5V15a.75.75 0 0 1-1.5 0V9c0-.41.34-.75.75-.75"
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
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0M8 8.25c.41 0 .75.34.75.75v2.25h2.5V9a.75.75 0 0 1 1.5 0v2.25H13q.7 0 1.04-.02t.44-.07q.47-.2.67-.68c.04-.08.07-.2.08-.44.02-.24.02-.56.02-1.04a.75.75 0 0 1 1.5 0v.03q0 .66-.02 1.12t-.19.9a2.8 2.8 0 0 1-1.49 1.5q-.43.16-.9.18-.46.03-1.12.02h-.28V15a.75.75 0 0 1-1.5 0v-2.25h-2.5V15a.75.75 0 0 1-1.5 0V9c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTransmissionCircle;
