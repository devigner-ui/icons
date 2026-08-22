import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCassette2 = forwardRef<SVGSVGElement, IconProps>(
  function IconCassette2(
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
              d="M2 12c0-3.77 0-5.66 1.17-6.83S6.23 4 10 4h4c3.77 0 5.66 0 6.83 1.17S22 8.23 22 12s0 5.66-1.17 6.83S17.77 20 14 20h-4c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M8.5 10.75a.75.75 0 0 0 0 1.5zm7.5 1.5a.75.75 0 0 0 0-1.5zm-7.5 3a.75.75 0 0 0 0 1.5zm7.5 1.5a.75.75 0 0 0 0-1.5zm1.25-3c0 .83-.67 1.5-1.5 1.5v1.5a3 3 0 0 0 3-3zm-1.5-1.5c.83 0 1.5.67 1.5 1.5h1.5a3 3 0 0 0-3-3zm-7.5 3a1.5 1.5 0 0 1-1.5-1.5h-1.5a3 3 0 0 0 3 3zm0-4.5a3 3 0 0 0-3 3h1.5c0-.83.67-1.5 1.5-1.5zm.25 1.5H16v-1.5H8.5zm0 4.5H16v-1.5H8.5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.75 15.25a1.5 1.5 0 0 1-1.5-1.5h-1.5a3 3 0 0 0 3 3zm0-4.5a3 3 0 0 0-3 3h1.5c0-.83.67-1.5 1.5-1.5zm-6 3c0 .83-.67 1.5-1.5 1.5v1.5a3 3 0 0 0 3-3zm-1.5-1.5c.83 0 1.5.67 1.5 1.5h1.5a3 3 0 0 0-3-3z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m17.5 4.5-.53 1.4c-.47 1.26-.7 1.89-1.22 2.24-.51.36-1.18.36-2.52.36h-2.46c-1.34 0-2 0-2.52-.36-.52-.35-.75-.98-1.22-2.24L6.5 4.5"
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
              opacity={duotone ? "0.4" : "1"}
              d="M13.23 8h-2.46c-1.34 0-2 0-2.52-.36-.52-.35-.75-.98-1.22-2.24L6.5 4h11l-.53 1.4c-.47 1.26-.7 1.89-1.22 2.24-.51.36-1.18.36-2.52.36"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M13.5 13.75a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0"
                fill="currentColor"
              />
              <path
                d="M6 13.75a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0"
                fill="currentColor"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.17 5.17C2 6.34 2 8.23 2 12s0 5.66 1.17 6.83S6.23 20 10 20h4c3.77 0 5.66 0 6.83-1.17S22 15.77 22 12s0-5.66-1.17-6.83c-.74-.74-1.76-1-3.35-1.11l-.5 1.34c-.48 1.26-.71 1.89-1.23 2.24-.51.36-1.18.36-2.52.36h-2.46c-1.34 0-2 0-2.52-.36-.52-.35-.75-.98-1.22-2.24l-.5-1.34c-1.6.1-2.62.37-3.36 1.11M15.75 16a2.25 2.25 0 0 0 0-4.5h-7.5a2.25 2.25 0 0 0 0 4.5z"
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
              d="M6.75 13.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
              fill="currentColor"
            />
            <path
              d="M10.85 15.25h2.3a3 3 0 0 1 0-3h-2.3a3 3 0 0 1 0 3"
              fill="currentColor"
            />
            <path
              d="M15.75 15.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m18.43 4.15-.77 2.06q-.32.9-.61 1.5c-.22.41-.47.78-.87 1.05q-.6.39-1.3.44-.66.06-1.61.05h-2.54q-.95.01-1.61-.05c-.47-.05-.9-.17-1.3-.44s-.65-.64-.87-1.06q-.29-.6-.61-1.5l-.77-2.05a4 4 0 0 0-2.4 1.02C2 6.34 2 8.23 2 12s0 5.66 1.17 6.83S6.23 20 10 20h4c3.77 0 5.66 0 6.83-1.17S22 15.77 22 12s0-5.66-1.17-6.83a4 4 0 0 0-2.4-1.02m-13.18 9.6a3 3 0 0 1 3.25-3H16q.14 0 .24.04a3 3 0 0 1-.24 5.96H8.25a3 3 0 0 1-3-3"
              fill="currentColor"
            />
            <path
              d="m16.87 4.03-.6 1.61c-.24.64-.4 1.07-.56 1.38-.15.3-.27.43-.38.5-.12.09-.28.15-.61.19-.35.04-.8.04-1.5.04h-2.45c-.69 0-1.14 0-1.49-.04-.33-.04-.49-.1-.6-.18a1.3 1.3 0 0 1-.4-.5c-.15-.32-.31-.75-.55-1.39l-.6-1.61Q8.32 3.99 10 4h4q1.66 0 2.87.03"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCassette2;
