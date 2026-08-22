import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGalleryWide = forwardRef<SVGSVGElement, IconProps>(
  function IconGalleryWide(
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
              d="M2 13.44C2 9.67 2 7.78 3.17 6.6S6.23 5.44 10 5.44h4c3.77 0 5.66 0 6.83 1.17S22 9.67 22 13.44s0 5.65-1.17 6.83-3.06 1.17-6.83 1.17h-4c-3.77 0-5.66 0-6.83-1.17C2 19.09 2 17.2 2 13.44"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.99 6c.11-.93.34-1.57.83-2.06C5.77 3 7.28 3 10.31 3h3.2c3.04 0 4.55 0 5.49.94.49.49.72 1.13.84 2.06"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="17.5"
              cy="9.93726"
              r="1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m2 13.94 1.75-1.54a2.3 2.3 0 0 1 3.14.1l4.3 4.3a2 2 0 0 0 2.56.22l.3-.2a3 3 0 0 1 3.73.22l3.22 2.9"
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
              d="M18.51 10.08c0 .74-.62 1.33-1.4 1.33-.76 0-1.39-.6-1.39-1.33s.63-1.34 1.4-1.34 1.4.6 1.4 1.34"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.04 5.53a35 35 0 0 0-4.13-.13H10.1c-1.71 0-3.07 0-4.13.13-1.09.14-1.97.44-2.67 1.1s-1 1.52-1.15 2.57C2 10.2 2 11.5 2 13.15v.1c0 1.64 0 2.93.14 3.95.15 1.05.46 1.9 1.15 2.56.7.67 1.58.96 2.67 1.1 1.06.14 2.42.14 4.13.14h3.82c1.71 0 3.07 0 4.13-.14a4.5 4.5 0 0 0 2.67-1.1c.7-.67 1-1.51 1.15-2.56.14-1.02.14-2.31.14-3.95v-.1c0-1.64 0-2.94-.14-3.95a4 4 0 0 0-1.15-2.56 4.5 4.5 0 0 0-2.67-1.1M6.15 6.86c-.94.12-1.48.34-1.87.72s-.63.9-.75 1.8c-.1.71-.13 1.61-.13 2.79l.47-.4a2.93 2.93 0 0 1 3.87.13l4 3.82c.4.39 1.02.44 1.48.13l.28-.2a3.6 3.6 0 0 1 4.34.26l2.4 2.08q.15-.4.23-.97c.13-.91.13-2.12.13-3.82s0-2.91-.13-3.83c-.12-.9-.36-1.41-.75-1.79-.4-.38-.93-.6-1.87-.72-.96-.13-2.22-.13-3.99-.13h-3.72c-1.77 0-3.03 0-3.99.13"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M17.09 2.61c-.86-.11-1.96-.11-3.32-.11h-3.1c-1.36 0-2.45 0-3.31.11a3.7 3.7 0 0 0-2.22.92q-.5.5-.73 1.12.75-.34 1.72-.45c1.08-.14 2.47-.14 4.22-.14h3.91c1.75 0 3.14 0 4.22.14a6 6 0 0 1 1.52.37 3 3 0 0 0-.7-1.04 3.7 3.7 0 0 0-2.21-.92"
                fill="currentColor"
              />
            </g>
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
              d="M18.51 10.08c0 .74-.62 1.33-1.4 1.33-.76 0-1.39-.6-1.39-1.33s.63-1.34 1.4-1.34 1.4.6 1.4 1.34"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.04 5.53a35 35 0 0 0-4.13-.13H10.1c-1.71 0-3.07 0-4.13.13-1.09.14-1.97.44-2.67 1.1s-1 1.52-1.15 2.57C2 10.2 2 11.5 2 13.15v.1c0 1.64 0 2.93.14 3.95.15 1.05.46 1.9 1.15 2.56.7.67 1.58.96 2.67 1.1 1.06.14 2.42.14 4.13.14h3.82c1.71 0 3.07 0 4.13-.14a4.5 4.5 0 0 0 2.67-1.1c.7-.67 1-1.51 1.15-2.56.14-1.02.14-2.31.14-3.95v-.1c0-1.64 0-2.94-.14-3.95a4 4 0 0 0-1.15-2.56 4.5 4.5 0 0 0-2.67-1.1M6.15 6.86c-.94.12-1.48.34-1.87.72s-.63.9-.75 1.8c-.1.71-.13 1.61-.13 2.79l.47-.4a2.93 2.93 0 0 1 3.87.13l4 3.82c.4.39 1.02.44 1.48.13l.28-.2a3.6 3.6 0 0 1 4.34.26l2.4 2.08q.15-.4.23-.97c.13-.91.13-2.12.13-3.82s0-2.91-.13-3.83c-.12-.9-.36-1.41-.75-1.79-.4-.38-.93-.6-1.87-.72-.96-.13-2.22-.13-3.99-.13h-3.72c-1.77 0-3.03 0-3.99.13"
              fill="currentColor"
            />
            <path
              d="M17.09 2.61c-.86-.11-1.96-.11-3.32-.11h-3.1c-1.36 0-2.45 0-3.31.11a3.7 3.7 0 0 0-2.22.92q-.5.5-.73 1.12.75-.34 1.72-.45c1.08-.14 2.47-.14 4.22-.14h3.91c1.75 0 3.14 0 4.22.14a6 6 0 0 1 1.52.37 3 3 0 0 0-.7-1.04 3.7 3.7 0 0 0-2.21-.92"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGalleryWide;
