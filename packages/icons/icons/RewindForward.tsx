import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRewindForward = forwardRef<SVGSVGElement, IconProps>(
  function IconRewindForward(
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
              d="M19.31 8.9C21.11 10.22 22 10.88 22 12s-.9 1.78-2.69 3.1a26 26 0 0 1-2.74 1.75c-1.79.98-2.68 1.47-3.48.93-.8-.55-.88-1.68-1.02-3.95a29 29 0 0 1 0-3.66c.14-2.27.22-3.4 1.02-3.95.8-.54 1.7-.05 3.48.93a25 25 0 0 1 2.74 1.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.9 8.39a35 35 0 0 0-3.7-2.05C5.76 5.2 4.55 4.63 3.46 5.26 2.4 5.9 2.3 7.22 2.1 9.86Q2.01 11 2 12t.1 2.14c.19 2.64.29 3.97 1.37 4.6 1.09.63 2.3.06 4.72-1.08a35 35 0 0 0 3.72-2.05"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="m8.75 6.28-.05-.03a18 18 0 0 0-2.72-1.1 3 3 0 0 0-2.26.18 2.7 2.7 0 0 0-1.28 1.81c-.19.73-.26 1.67-.35 2.82v.06a27 27 0 0 0 0 3.96v.06c.09 1.15.16 2.09.35 2.82.2.77.55 1.4 1.28 1.81.72.41 1.47.4 2.26.18.75-.2 1.64-.6 2.72-1.1l.05-.03a34 34 0 0 0 2.89-1.5V7.78a30 30 0 0 0-2.89-1.5"
              fill="currentColor"
            />
            <path
              d="M12.62 6.22a2.4 2.4 0 0 0-.98 1.55v8.46c.15.63.41 1.18.98 1.55.61.4 1.25.38 1.88.18.57-.18 1.25-.54 2.03-.95l.06-.04a24 24 0 0 0 2.63-1.63l.05-.03c.79-.57 1.45-1.04 1.91-1.5.5-.52.82-1.08.82-1.81s-.32-1.3-.82-1.8c-.46-.47-1.12-.94-1.91-1.5l-.05-.04a25 25 0 0 0-2.63-1.63l-.06-.04c-.78-.41-1.46-.77-2.03-.95-.63-.2-1.27-.22-1.88.18"
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
              d="m8.7 6.25.05.03a34 34 0 0 1 2.89 1.5c.15-.64.41-1.19.98-1.56.61-.4 1.25-.38 1.88-.18.57.18 1.25.54 2.03.95l.06.04a24 24 0 0 1 2.63 1.63l.05.03c.79.57 1.45 1.04 1.91 1.5.5.52.82 1.08.82 1.81s-.32 1.3-.82 1.8c-.46.47-1.12.94-1.91 1.5l-.05.04a25 25 0 0 1-2.63 1.63l-.06.04c-.78.41-1.46.77-2.03.95-.63.2-1.27.22-1.88-.18a2.4 2.4 0 0 1-.98-1.55 30 30 0 0 1-2.89 1.5l-.05.02c-1.08.5-1.97.9-2.72 1.1-.8.22-1.54.23-2.26-.18a2.7 2.7 0 0 1-1.28-1.81c-.19-.73-.26-1.67-.35-2.82v-.06a27 27 0 0 1 0-3.96v-.06c.09-1.15.16-2.09.35-2.82.2-.77.55-1.4 1.28-1.81.72-.41 1.47-.4 2.26-.18.75.2 1.64.6 2.72 1.1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRewindForward;
