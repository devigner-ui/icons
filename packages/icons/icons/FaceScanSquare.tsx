import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFaceScanSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconFaceScanSquare(
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
              d="M9 16a5 5 0 0 0 6 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
            <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 14c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 22c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 2C6.23 2 4.34 2 3.17 3.17S2 6.23 2 10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14 2c3.77 0 5.66 0 6.83 1.17S22 6.23 22 10"
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
              d="M21.3 13.16c.39 0 .7.32.7.7v.05c0 1.71 0 3.07-.14 4.13a4.4 4.4 0 0 1-1.15 2.67c-.7.7-1.58 1-2.67 1.15-1.06.14-2.42.14-4.13.14h-.05a.7.7 0 0 1 0-1.4c1.77 0 3.03 0 3.99-.13.94-.12 1.48-.36 1.87-.75.4-.4.63-.93.75-1.87.13-.96.13-2.22.13-3.99 0-.38.32-.7.7-.7"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.7 13.16c.38 0 .7.32.7.7 0 1.77 0 3.03.13 3.99.12.94.36 1.48.75 1.87.4.4.93.63 1.87.75.96.13 2.22.13 3.99.13a.7.7 0 1 1 0 1.4h-.05c-1.71 0-3.07 0-4.13-.14A4.4 4.4 0 0 1 3.3 20.7c-.7-.7-1-1.58-1.15-2.67C2 16.98 2 15.62 2 13.9v-.05c0-.38.31-.7.7-.7"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.09 2h.05a.7.7 0 1 1 0 1.4c-1.77 0-3.03 0-3.99.13-.94.12-1.48.36-1.87.75-.4.4-.63.93-.75 1.87-.13.96-.13 2.22-.13 3.99a.7.7 0 0 1-1.4 0v-.05c0-1.71 0-3.07.14-4.13A4.4 4.4 0 0 1 3.3 3.3c.7-.7 1.58-1 2.67-1.15C7.02 2 8.38 2 10.1 2"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.85 3.53c-.96-.13-2.22-.13-3.99-.13a.7.7 0 0 1 0-1.4h.05c1.71 0 3.07 0 4.13.14 1.09.15 1.97.46 2.67 1.15.7.7 1 1.58 1.15 2.67.14 1.06.14 2.42.14 4.13v.05a.7.7 0 1 1-1.4 0c0-1.77 0-3.03-.13-3.99-.12-.94-.36-1.48-.75-1.87-.4-.4-.93-.63-1.87-.75"
              fill="currentColor"
            />
            <path
              d="M10.37 10.43c0 .67-.36 1.22-.81 1.22s-.82-.55-.82-1.22.37-1.22.82-1.22.81.55.81 1.22"
              fill="currentColor"
            />
            <path
              d="M15.26 10.43c0 .67-.37 1.22-.82 1.22s-.81-.55-.81-1.22.36-1.22.81-1.22.82.55.82 1.22"
              fill="currentColor"
            />
            <path
              d="M9.92 14.42a.61.61 0 1 0-.72.98 4.7 4.7 0 0 0 5.6 0 .61.61 0 1 0-.72-.98 3.5 3.5 0 0 1-4.16 0"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M10.37 10.43c0 .68-.36 1.22-.81 1.22s-.82-.54-.82-1.22.37-1.22.82-1.22.81.55.81 1.22"
                fill="currentColor"
              />
              <path
                d="M15.26 10.43c0 .68-.37 1.22-.82 1.22s-.81-.54-.81-1.22.36-1.22.81-1.22.82.55.82 1.22"
                fill="currentColor"
              />
              <path
                d="M9.92 14.42a.61.61 0 0 0-.72.98 4.7 4.7 0 0 0 5.6 0 .61.61 0 1 0-.72-.98 3.5 3.5 0 0 1-4.16 0"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.14 4.56h3.72c2.63 0 3.95 0 4.76.82.82.81.82 2.13.82 4.76v3.72c0 2.63 0 3.95-.82 4.76-.81.82-2.13.82-4.76.82h-3.72c-2.63 0-3.95 0-4.76-.82-.82-.81-.82-2.13-.82-4.76v-3.72c0-2.63 0-3.95.82-4.76.81-.82 2.13-.82 4.76-.82m-1.07 9.98a.6.6 0 0 1 .85-.12 3.5 3.5 0 0 0 4.16 0 .61.61 0 1 1 .73.98 4.7 4.7 0 0 1-5.61 0 .6.6 0 0 1-.13-.86m5.37-2.89c.45 0 .82-.54.82-1.22s-.37-1.22-.82-1.22-.81.55-.81 1.22c0 .68.36 1.22.81 1.22m-4.88 0c.45 0 .81-.54.81-1.22s-.36-1.22-.81-1.22-.82.55-.82 1.22c0 .68.37 1.22.82 1.22"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.3 13.16c.39 0 .7.32.7.7v.05c0 1.71 0 3.07-.14 4.13a4.4 4.4 0 0 1-1.15 2.67c-.7.7-1.58 1-2.67 1.15-1.06.14-2.42.14-4.13.14h-.05a.7.7 0 0 1 0-1.4c1.77 0 3.03 0 3.99-.13.94-.12 1.48-.36 1.87-.75.4-.4.63-.93.75-1.87.13-.96.13-2.22.13-3.99 0-.38.32-.7.7-.7"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.7 13.16c.38 0 .7.32.7.7 0 1.77 0 3.03.13 3.99.12.94.36 1.48.75 1.87.4.4.93.63 1.87.75.96.13 2.22.13 3.99.13a.7.7 0 1 1 0 1.4h-.05c-1.71 0-3.07 0-4.13-.14A4.4 4.4 0 0 1 3.3 20.7c-.7-.7-1-1.58-1.15-2.67C2 16.98 2 15.62 2 13.9v-.05c0-.38.31-.7.7-.7"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.09 2h.05a.7.7 0 1 1 0 1.4c-1.77 0-3.03 0-3.99.13-.94.12-1.48.36-1.87.75-.4.4-.63.93-.75 1.87-.13.96-.13 2.22-.13 3.99a.7.7 0 0 1-1.4 0v-.05c0-1.71 0-3.07.14-4.13A4.4 4.4 0 0 1 3.3 3.3c.7-.7 1.58-1 2.67-1.15C7.02 2 8.38 2 10.1 2"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.85 3.53c-.96-.13-2.22-.13-3.99-.13a.7.7 0 0 1 0-1.4h.05c1.71 0 3.07 0 4.13.14 1.09.15 1.97.46 2.67 1.15.7.7 1 1.58 1.15 2.67.14 1.06.14 2.42.14 4.13v.05a.7.7 0 1 1-1.4 0c0-1.77 0-3.03-.13-3.99-.12-.94-.36-1.48-.75-1.87-.4-.4-.93-.63-1.87-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.38 5.38c-.82.81-.82 2.13-.82 4.76v3.72c0 2.63 0 3.95.82 4.76.81.82 2.13.82 4.76.82h3.72c2.63 0 3.95 0 4.76-.82.82-.81.82-2.13.82-4.76v-3.72c0-2.63 0-3.95-.82-4.76-.81-.82-2.13-.82-4.76-.82h-3.72c-2.63 0-3.95 0-4.76.82m3.69 9.16a.6.6 0 0 1 .85-.12 3.5 3.5 0 0 0 4.16 0 .61.61 0 0 1 .73.98 4.7 4.7 0 0 1-5.62 0 .6.6 0 0 1-.12-.86m6.19-4.11c0 .67-.37 1.22-.82 1.22s-.81-.55-.81-1.22.36-1.22.81-1.22.82.55.82 1.22m-5.7 1.22c.45 0 .81-.55.81-1.22s-.36-1.22-.81-1.22-.82.55-.82 1.22.37 1.22.82 1.22"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFaceScanSquare;
