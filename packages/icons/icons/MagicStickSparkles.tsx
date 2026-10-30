import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMagicStickSparkles = forwardRef<SVGSVGElement, IconProps>(
  function IconMagicStickSparkles(
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
        {variant === "Broken" ? (
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
            d="M12.65 9.27 7.57 4.19a2.88 2.88 0 1 0-4.08 4.08l12.24 12.24a2.88 2.88 0 0 0 4.08-4.08l-3.08-3.08"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m5.65 10.35 4-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M15.75 2.65a.48.48 0 0 1 .9 0l.43 1.1q.08.2.27.28l1.1.43c.4.16.4.74 0 .9l-1.1.43a.5.5 0 0 0-.27.28l-.43 1.1a.48.48 0 0 1-.9 0l-.43-1.1a.5.5 0 0 0-.27-.28l-1.1-.43a.49.49 0 0 1 0-.9l1.1-.43a.5.5 0 0 0 .27-.28z"
            stroke="currentColor"
          />
          <path
            d="M19.62 9.48a.48.48 0 0 1 .9 0l.15.4q.08.19.28.27l.4.16c.4.16.4.74 0 .9l-.4.16a.5.5 0 0 0-.28.27l-.15.4a.48.48 0 0 1-.9 0l-.16-.4a.5.5 0 0 0-.27-.27l-.4-.16a.49.49 0 0 1 0-.9l.4-.16a.5.5 0 0 0 .27-.27z"
            stroke="currentColor"
          />
          <path
            d="M4.78 15.65a.48.48 0 0 1 .9 0l.16.4q.08.2.27.28l.4.16c.4.16.4.74 0 .9l-.4.16a.5.5 0 0 0-.27.27l-.16.4a.48.48 0 0 1-.9 0l-.15-.4a.5.5 0 0 0-.28-.27l-.4-.16a.49.49 0 0 1 0-.9l.4-.16a.5.5 0 0 0 .28-.27z"
            stroke="currentColor"
          />
        </svg>
      ) : !fill ? (
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
              d="M3.49 8.27a2.88 2.88 0 1 1 4.08-4.08l12.24 12.24a2.88 2.88 0 0 1-4.08 4.08z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m5.65 10.35 4-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M15.75 2.65a.48.48 0 0 1 .9 0l.43 1.1q.08.2.27.28l1.1.43c.4.16.4.74 0 .9l-1.1.43a.5.5 0 0 0-.27.28l-.43 1.1a.48.48 0 0 1-.9 0l-.43-1.1a.5.5 0 0 0-.27-.28l-1.1-.43a.49.49 0 0 1 0-.9l1.1-.43a.5.5 0 0 0 .27-.28z"
              stroke="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.62 9.48a.48.48 0 0 1 .9 0l.15.4q.08.19.28.27l.4.16c.4.16.4.74 0 .9l-.4.16a.5.5 0 0 0-.28.27l-.15.4a.48.48 0 0 1-.9 0l-.16-.4a.5.5 0 0 0-.27-.27l-.4-.16a.49.49 0 0 1 0-.9l.4-.16a.5.5 0 0 0 .27-.27z"
              stroke="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.78 15.65a.48.48 0 0 1 .9 0l.16.4q.08.2.27.28l.4.16c.4.16.4.74 0 .9l-.4.16a.5.5 0 0 0-.27.27l-.16.4a.48.48 0 0 1-.9 0l-.15-.4a.5.5 0 0 0-.28-.27l-.4-.16a.49.49 0 0 1 0-.9l.4-.16a.5.5 0 0 0 .28-.27z"
              stroke="currentColor"
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
              d="M3.34 4.34a2.9 2.9 0 0 0 0 4.08l1.6 1.59c0-.01.55.5.56.49l4-4c.01-.01-.5-.56-.49-.57L7.42 4.34a2.9 2.9 0 0 0-4.08 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.63 15.8a.48.48 0 0 1 .9 0l.16.4q.08.2.27.28l.4.16c.4.16.4.74 0 .9l-.4.16a.5.5 0 0 0-.27.27l-.16.4a.48.48 0 0 1-.9 0l-.15-.4a.5.5 0 0 0-.28-.27l-.4-.16a.49.49 0 0 1 0-.9l.4-.16a.5.5 0 0 0 .28-.27z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.47 9.63a.48.48 0 0 1 .9 0l.15.4q.08.19.28.27l.4.16c.4.16.4.74 0 .9l-.4.16a.5.5 0 0 0-.28.27l-.15.4a.48.48 0 0 1-.9 0l-.16-.4a.5.5 0 0 0-.27-.27l-.4-.16a.49.49 0 0 1 0-.9l.4-.16a.5.5 0 0 0 .27-.27z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.6 2.8a.48.48 0 0 1 .9 0l.43 1.1q.08.2.27.28l1.1.43c.4.16.4.74 0 .9l-1.1.43a.5.5 0 0 0-.27.28l-.43 1.1a.48.48 0 0 1-.9 0l-.43-1.1a.5.5 0 0 0-.27-.28l-1.1-.43a.49.49 0 0 1 0-.9l1.1-.43a.5.5 0 0 0 .27-.28z"
              fill="currentColor"
            />
            <path
              d="M10.07 6.99c-.01.01-.56-.5-.57-.49l-4 4c-.01.01.5.56.49.57l9.59 9.59a2.88 2.88 0 1 0 4.08-4.08z"
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
              d="M3.34 4.34a2.9 2.9 0 0 0 0 4.08l1.6 1.59.03-.04 4-4 .04-.04-1.59-1.59a2.9 2.9 0 0 0-4.08 0"
              fill="currentColor"
            />
            <path
              d="m10.07 6.99-.04.04-4 4-.04.04 9.59 9.59a2.88 2.88 0 0 0 4.08-4.08z"
              fill="currentColor"
            />
            <path
              d="M15.6 2.8a.48.48 0 0 1 .9 0l.43 1.1q.08.2.27.28l1.1.43c.4.16.4.74 0 .9l-1.1.43a.5.5 0 0 0-.27.28l-.43 1.1a.48.48 0 0 1-.9 0l-.43-1.1a.5.5 0 0 0-.27-.28l-1.1-.43a.49.49 0 0 1 0-.9l1.1-.43a.5.5 0 0 0 .27-.28z"
              fill="currentColor"
            />
            <path
              d="M19.47 9.63a.48.48 0 0 1 .9 0l.15.4q.08.19.28.27l.4.16c.4.16.4.74 0 .9l-.4.16a.5.5 0 0 0-.28.27l-.15.4a.48.48 0 0 1-.9 0l-.16-.4a.5.5 0 0 0-.27-.27l-.4-.16a.49.49 0 0 1 0-.9l.4-.16a.5.5 0 0 0 .27-.27z"
              fill="currentColor"
            />
            <path
              d="M4.63 15.8a.48.48 0 0 1 .9 0l.16.4q.08.2.27.28l.4.16c.4.16.4.74 0 .9l-.4.16a.5.5 0 0 0-.27.27l-.16.4a.48.48 0 0 1-.9 0l-.15-.4a.5.5 0 0 0-.28-.27l-.4-.16a.49.49 0 0 1 0-.9l.4-.16a.5.5 0 0 0 .28-.27z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMagicStickSparkles;
