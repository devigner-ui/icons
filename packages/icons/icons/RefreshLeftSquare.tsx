import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRefreshLeftSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconRefreshLeftSquare(
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
            d="M10.33 7.51q.75-.24 1.67-.25a5 5 0 1 1-4.16 2.22"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m9.62 7.65 1.66-1.91"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m9.62 7.65 1.94 1.42"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 14v1c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M10.33 7.51q.75-.24 1.67-.25a5 5 0 1 1-4.16 2.22"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m9.62 7.65 1.66-1.91"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m9.62 7.65 1.94 1.42"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
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
              d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
              fill="currentColor"
            />
            <path
              d="m12 6.51-.43.03.28-.32a.76.76 0 0 0-.07-1.06.76.76 0 0 0-1.06.07L9.05 7.14l-.02.03-.02.02-.05.11-.06.14-.02.14-.01.14q0 .07.04.14l.05.13.09.12.07.09.03.02.02.02 1.94 1.42q.2.14.44.14c.23 0 .46-.11.61-.31A.76.76 0 0 0 12 8.44l-.56-.41q.27-.04.56-.04a4.26 4.26 0 0 1 0 8.5 4.26 4.26 0 0 1-3.54-6.61.75.75 0 0 0-.21-1.04.75.75 0 0 0-1.04.21A5.75 5.75 0 1 0 12 6.51"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M12 18.01a5.76 5.76 0 0 1-4.78-8.94.75.75 0 1 1 1.24.83 4.26 4.26 0 1 0 7.79 2.36A4.26 4.26 0 0 0 12 8.01q-.28 0-.56.04l.56.41c.33.24.41.71.16 1.05a.8.8 0 0 1-.61.31 1 1 0 0 1-.44-.14L9.17 8.25l-.02-.02-.03-.02-.07-.09L8.96 8l-.05-.13-.03-.14.01-.14.02-.14q.01-.07.05-.14l.05-.11.03-.02.02-.03 1.67-1.91a.75.75 0 0 1 1.06-.07c.31.27.34.75.07 1.06l-.28.32.43-.03A5.76 5.76 0 0 1 12 18.01"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRefreshLeftSquare;
