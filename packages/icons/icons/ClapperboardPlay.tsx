import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconClapperboardPlay = forwardRef<SVGSVGElement, IconProps>(
  function IconClapperboardPlay(
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.5 8h-19M7 8l3.5-5.5m3 5.5L17 2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15 14.5c0-.63-.66-1.06-1.99-1.91-1.34-.87-2-1.3-2.51-.99s-.5 1.18-.5 2.9 0 2.58.5 2.9 1.17-.12 2.51-.99c1.33-.85 1.99-1.28 1.99-1.91"
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
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 12q0-1.85.03-3.25h19.94q.04 1.4.03 3.25c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              fill="currentColor"
            />
            <path
              d="M15 14.5c0-.63-.66-1.06-1.99-1.91-1.34-.87-2-1.3-2.51-.99s-.5 1.18-.5 2.9 0 2.58.5 2.9 1.17-.12 2.51-.99c1.33-.85 1.99-1.28 1.99-1.91"
              fill="currentColor"
            />
            <path
              d="M12 2c1.85 0 3.33 0 4.54.09L13.1 7.25H8.4L11.9 2z"
              fill="currentColor"
            />
            <path
              d="M3.46 3.46C4.72 2.21 6.62 2.03 10.1 2L6.6 7.25H2.1c.15-1.76.5-2.93 1.36-3.79"
              fill="currentColor"
            />
            <path
              d="M21.9 7.25c-.15-1.76-.5-2.93-1.36-3.79-.6-.6-1.35-.95-2.34-1.16l-3.3 4.95z"
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
              d="M12 2c1.85 0 3.33 0 4.54.09L13.1 7.25H8.4L11.9 2z"
              fill="currentColor"
            />
            <path
              d="M3.46 3.46C4.72 2.21 6.62 2.03 10.1 2L6.6 7.25H2.1c.15-1.76.5-2.93 1.36-3.79"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 12q0-1.85.03-3.25h19.94q.04 1.4.03 3.25c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12m11.01.59c1.33.85 1.99 1.28 1.99 1.91s-.66 1.06-1.99 1.91c-1.34.87-2 1.3-2.51.99s-.5-1.18-.5-2.9 0-2.58.5-2.9 1.17.12 2.51.99"
              fill="currentColor"
            />
            <path
              d="M21.9 7.25c-.15-1.76-.5-2.93-1.36-3.79-.6-.6-1.35-.95-2.34-1.16l-3.3 4.95z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconClapperboardPlay;
