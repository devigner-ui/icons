import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBanknotes = forwardRef<SVGSVGElement, IconProps>(
  function IconBanknotes(
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
            d="M2.08 7.5c.09-.97.31-1.63.8-2.12.88-.88 2.3-.88 5.12-.88h5c2.83 0 4.24 0 5.12.88.82.82.88 2.12.88 4.6m-.07 3.5c-.1.98-.32 1.65-.81 2.14-.88.88-2.3.88-5.12.88H8c-2.83 0-4.24 0-5.12-.88S2 13.32 2 10.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 7.58c.98.1 1.63.3 2.12.8.88.88.88 2.3.88 5.12s0 4.24-.88 5.12-2.3.88-5.12.88h-5c-2.83 0-4.24 0-5.12-.88-.5-.49-.7-1.14-.8-2.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 12.5v-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 12.5v-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
              d="M2 10.5c0-2.83 0-4.24.88-5.12S5.18 4.5 8 4.5h5c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12 0 4.24-.88 5.12-2.3.88-5.12.88H8c-2.83 0-4.24 0-5.12-.88S2 13.32 2 10.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19 7.58c.98.1 1.63.3 2.12.8.88.88.88 2.3.88 5.12s0 4.24-.88 5.12-2.3.88-5.12.88h-5c-2.83 0-4.24 0-5.12-.88-.5-.49-.7-1.14-.8-2.12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M13 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 12.5v-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5 12.5v-4"
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
              d="M8.5 10.21c0-.92.76-1.66 1.7-1.66.92 0 1.68.74 1.68 1.66 0 .93-.76 1.67-1.69 1.67s-1.68-.74-1.68-1.67"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 10.21c0-2.69 0-4.04.85-4.87.84-.84 2.2-.84 4.93-.84h4.82c2.73 0 4.1 0 4.94.84.85.83.85 2.18.85 4.87 0 2.7 0 4.05-.85 4.88s-2.21.84-4.94.84H7.78c-2.72 0-4.09 0-4.93-.84C2 14.26 2 12.91 2 10.21m5.06 0c0-1.7 1.4-3.09 3.13-3.09a3.1 3.1 0 0 1 3.13 3.1c0 1.7-1.4 3.09-3.13 3.09a3.1 3.1 0 0 1-3.13-3.1m-2.9 1.91c0 .4.33.71.73.71s.72-.32.72-.71V8.31c0-.4-.32-.71-.72-.71s-.72.32-.72.71zm11.33.71a.7.7 0 0 1-.72-.71V8.31c0-.4.32-.71.72-.71s.73.32.73.71v3.81c0 .4-.33.71-.73.71"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.07 15.73q0 .23.04.43a3.5 3.5 0 0 0 1.2 2.38c.57.51 1.27.74 2.1.85s1.9.11 3.21.11h4.93c1.32 0 2.38 0 3.21-.11a3.6 3.6 0 0 0 2.18-.94c.58-.57.83-1.3.95-2.15.11-.82.11-1.87.11-3.18v-.1c0-1.3 0-2.35-.11-3.18a3.5 3.5 0 0 0-1.2-2.38 3.7 3.7 0 0 0-2.1-.85l-.4-.04c.2.83.2 1.98.2 3.64 0 2.7 0 4.05-.85 4.88s-2.21.84-4.94.84H7.78c-1.7 0-2.87 0-3.71-.2"
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
              d="M20.94 7.69c.58.57.83 1.3.95 2.15.11.83.11 1.88.11 3.18v.1c0 1.3 0 2.36-.11 3.18a3.5 3.5 0 0 1-.95 2.15 3.6 3.6 0 0 1-2.18.94c-.83.11-1.9.11-3.21.11h-4.93c-1.32 0-2.38 0-3.21-.11a3.6 3.6 0 0 1-2.18-.94 3 3 0 0 1-.74-1.2c.87.1 1.95.1 3.2.1h5c1.29 0 2.4 0 3.28-.11a4.3 4.3 0 0 0 2.6-1.14 4.2 4.2 0 0 0 1.14-2.56c.12-.87.12-1.96.12-3.23v-.19c0-1.23 0-2.3-.1-3.16q.68.21 1.21.73"
              fill="currentColor"
            />
            <path
              d="M10.2 8.55c-.94 0-1.7.74-1.7 1.66 0 .93.76 1.67 1.7 1.67.92 0 1.68-.74 1.68-1.67s-.76-1.66-1.69-1.66"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.85 5.34C2 6.17 2 7.52 2 10.2c0 2.7 0 4.05.85 4.88.84.84 2.2.84 4.93.84h4.82c2.73 0 4.1 0 4.94-.84.85-.83.85-2.18.85-4.88s0-4.04-.85-4.87-2.21-.83-4.94-.83H7.78c-2.72 0-4.09 0-4.93.84m4.21 4.87c0-1.7 1.4-3.09 3.13-3.09a3.1 3.1 0 0 1 3.14 3.1c0 1.7-1.4 3.09-3.14 3.09a3.1 3.1 0 0 1-3.13-3.1m8.43 2.62a.7.7 0 0 1-.72-.71V8.31c0-.4.32-.71.72-.71s.73.32.73.71v3.81c0 .4-.33.71-.73.71m-11.32-.71c0 .4.32.71.72.71s.72-.32.72-.71V8.31c0-.4-.32-.71-.72-.71s-.72.32-.72.71z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBanknotes;
