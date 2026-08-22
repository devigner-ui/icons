import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconReceiveSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconReceiveSquare(
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
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m9.67 11.51 3 3 3-3"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.67 14.51v-8"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.67 16.51c3.89 1.3 8.11 1.3 12 0"
                stroke="currentColor"
                strokeWidth={strokeWidth}
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
              opacity={duotone ? "0.4" : "1"}
              d="M16.86 2H8.49C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M12.14 15.04a.8.8 0 0 0 .53.22.8.8 0 0 0 .53-.22l3-3a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-1.72 1.72V6.51a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v6.19l-1.72-1.72a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06z"
              fill="currentColor"
            />
            <path
              d="M19.38 16.28a.75.75 0 0 0-.95-.47 18.3 18.3 0 0 1-11.53 0 .75.75 0 0 0-.95.47c-.13.39.08.82.47.95a19.7 19.7 0 0 0 12.48 0c.4-.14.61-.56.48-.95"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-7.72 8.98a.75.75 0 0 1 1.06 0l1.72 1.72V6.51c0-.41.34-.75.75-.75s.75.34.75.75v6.19l1.72-1.72a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-3 3a.8.8 0 0 1-.53.22.8.8 0 0 1-.53-.22l-3-3a.75.75 0 0 1 0-1.06m9.77 6.24a19.7 19.7 0 0 1-12.48 0 .75.75 0 0 1-.47-.95.74.74 0 0 1 .95-.47 18.3 18.3 0 0 0 11.53 0c.39-.13.82.08.95.47.12.4-.09.82-.48.95"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconReceiveSquare;
