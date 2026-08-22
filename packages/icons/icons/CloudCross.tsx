import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloudCross = forwardRef<SVGSVGElement, IconProps>(
  function IconCloudCross(
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
              d="M17.28 20a5.3 5.3 0 0 0 3.62-1.39c3.27-2.86 1.52-8.6-2.79-9.14C16.57.13 3.1 3.67 6.29 12.56"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.95 12.97a4 4 0 0 0-1.71-.4c-4.66.33-4.65 7.11 0 7.44"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.49 9.89q.79-.4 1.66-.41"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m13.06 18.59-2.83 2.82"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m13.06 21.41-2.83-2.82"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="M14.14 14.39H11.2c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03m.5 4.55c.25.25.25.66 0 .91a.67.67 0 0 1-.91 0l-1.06-1.06-1.05 1.06a.67.67 0 0 1-.91 0 .65.65 0 0 1 0-.91l1.06-1.06-1.06-1.05a.65.65 0 0 1 0-.91.65.65 0 0 1 .91 0l1.05 1.06 1.06-1.06a.65.65 0 0 1 .91 0c.25.25.25.66 0 .91l-1.06 1.05z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.41 11.74a5.5 5.5 0 0 0-4.04-3.87c-.56-2.5-2.1-4.29-4.28-4.97a6.9 6.9 0 0 0-6.87 1.79 6.3 6.3 0 0 0-1.44 6.11 4.1 4.1 0 0 0-3.11 4.06 4.1 4.1 0 0 0 3.97 4.18h2.53v-2.63c0-1.27.76-2.03 2.03-2.03h2.94c1.27 0 2.03.76 2.03 2.03v2.63h.85c1.42 0 2.78-.53 3.82-1.48a5.5 5.5 0 0 0 1.57-5.82"
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
              d="M20.84 17.57q-.8.73-1.8 1.11a1 1 0 0 1-1.37-.94v-1.32a3.53 3.53 0 0 0-3.53-3.53H11.2a3.53 3.53 0 0 0-3.53 3.53V18a1 1 0 0 1-1 1h-.45a4.1 4.1 0 0 1-3.55-4.14c0-1.68.98-3.54 3.11-4.06a6.3 6.3 0 0 1 1.43-6.11 6.9 6.9 0 0 1 6.87-1.79c2.19.67 3.73 2.47 4.28 4.97a5.5 5.5 0 0 1 4.05 3.87 5.5 5.5 0 0 1-1.57 5.83"
              fill="currentColor"
            />
            <path
              d="M14.14 14.39H11.2c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03m.5 4.55c.25.25.25.66 0 .91a.67.67 0 0 1-.91 0l-1.06-1.06-1.05 1.06a.67.67 0 0 1-.91 0 .65.65 0 0 1 0-.91l1.06-1.06-1.06-1.05a.65.65 0 0 1 0-.91.65.65 0 0 1 .91 0l1.05 1.06 1.06-1.06a.65.65 0 0 1 .91 0c.25.25.25.66 0 .91l-1.06 1.05z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCloudCross;
