import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFacemaskSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconFacemaskSquare(
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
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
            <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
            <path
              d="M16.5 21.5 17 15l-3.14-1.26a5 5 0 0 0-3.72 0L7 15l.5 6.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m7 15-4.5-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m7 19-3.5 1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m17 15 4.5-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m17 19 3.5 1.5"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12v.25q.15 0 .28.05L7 14.2l2.86-1.15a5.8 5.8 0 0 1 4.28 0L17 14.19l4.72-1.89q.15-.05.28-.05V12c0-4.71 0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46"
              fill="currentColor"
            />
            <path
              d="M10 10.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5S8.45 9 9 9s1 .67 1 1.5"
              fill="currentColor"
            />
            <path
              d="M16 10.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5.45-1.5 1-1.5 1 .67 1 1.5"
              fill="currentColor"
            />
            <path
              d="m22 13.81-4.29 1.71-.2 2.88 3.29 1.41q.12.05.21.14c.84-1.26.97-3.11.99-6.14"
              fill="currentColor"
            />
            <path
              d="M19.89 21.05 17.39 20l-.13 1.86a6 6 0 0 0 2.63-.8"
              fill="currentColor"
            />
            <path
              d="M15.75 21.96v-.01l.46-6.46-2.63-1.05a4.3 4.3 0 0 0-3.16 0L7.8 15.49l.46 6.46q1.57.06 3.75.05 2.18.01 3.75-.04"
              fill="currentColor"
            />
            <path
              d="m6.74 21.85-.14-1.86-2.49 1.06c.68.43 1.53.67 2.63.8"
              fill="currentColor"
            />
            <path
              d="M2.99 19.95q.09-.09.21-.14l3.3-1.4-.21-2.89L2 13.81c.02 3.03.15 4.88.99 6.14"
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
              d="m22 13.8-4.29 1.72-.2 2.88 3.29 1.41q.12.05.21.14c.84-1.26.97-3.11.99-6.14"
              fill="currentColor"
            />
            <path
              d="M19.89 21.05 17.39 20l-.13 1.85a6 6 0 0 0 2.63-.79"
              fill="currentColor"
            />
            <path
              d="M15.75 21.96v-.01l.46-6.46-2.63-1.05a4.3 4.3 0 0 0-3.16 0L7.8 15.49l.46 6.46q1.57.06 3.75.05 2.18.01 3.75-.04"
              fill="currentColor"
            />
            <path
              d="M6.74 21.84 6.6 20l-2.49 1.06q1 .63 2.63.8"
              fill="currentColor"
            />
            <path
              d="M2.99 19.95q.09-.09.21-.14l3.3-1.4-.21-2.89L2 13.81c.02 3.03.15 4.88.99 6.14"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.46 3.46C2 4.93 2 7.3 2 12v.25q.15 0 .28.05L7 14.2l2.86-1.15a5.8 5.8 0 0 1 4.28 0L17 14.19l4.72-1.89q.15-.05.28-.05V12c0-4.71 0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46M10 10.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5S8.45 9 9 9s1 .67 1 1.5m5 1.5c.55 0 1-.67 1-1.5S15.55 9 15 9s-1 .67-1 1.5.45 1.5 1 1.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFacemaskSquare;
