import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTransmissionSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconTransmissionSquare(
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
            <rect
              opacity={duotone ? "0.4" : "1"}
              x="2"
              y="2.00049"
              width="20"
              height="20"
              rx="5"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46M8 8.25c.41 0 .75.34.75.75v2.25h2.5V9a.75.75 0 0 1 1.5 0v2.25H13q.7 0 1.04-.02t.44-.07q.47-.2.67-.68c.04-.08.07-.2.08-.44.02-.24.02-.56.02-1.04a.75.75 0 0 1 1.5 0v.03q0 .66-.02 1.12t-.19.9a2.8 2.8 0 0 1-1.49 1.5q-.43.16-.9.18-.46.03-1.12.02h-.28V15a.75.75 0 0 1-1.5 0v-2.25h-2.5V15a.75.75 0 0 1-1.5 0V9c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTransmissionSquare;
