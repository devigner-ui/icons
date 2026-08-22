import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRefreshRightSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconRefreshRightSquare(
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
                d="M14.34 7.51a6 6 0 0 0-1.67-.25 5 5 0 1 0 4.16 2.22"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m15.05 7.65-1.66-1.91"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m15.05 7.65-1.94 1.42"
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
              d="M17.45 9.07a.75.75 0 0 0-1.04-.21.76.76 0 0 0-.21 1.04 4.26 4.26 0 1 1-7.79 2.36 4.26 4.26 0 0 1 4.25-4.25q.28 0 .56.04l-.55.41a.75.75 0 0 0-.16 1.05q.25.3.61.31a1 1 0 0 0 .44-.14l1.94-1.42.02-.02.03-.02.07-.09q.05-.05.09-.12l.05-.13.04-.14q.01-.07-.01-.14l-.02-.14-.06-.14-.05-.11-.02-.02-.02-.03-1.67-1.91a.75.75 0 0 0-1.06-.07.76.76 0 0 0-.07 1.06l.28.32-.43-.03a5.76 5.76 0 1 0 4.78 2.54"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-4.19 16.01a5.76 5.76 0 0 1 0-11.5l.43.03-.28-.32a.76.76 0 0 1 .07-1.06.76.76 0 0 1 1.06.07l1.67 1.91.02.03.02.02.05.11.06.14.02.14.01.14q0 .07-.04.14l-.05.14-.09.12-.07.09-.03.02-.02.02-1.94 1.42a.7.7 0 0 1-.44.14.8.8 0 0 1-.61-.31.76.76 0 0 1 .16-1.05l.56-.41-.56-.03a4.26 4.26 0 0 0 0 8.5 4.26 4.26 0 0 0 3.54-6.61.75.75 0 0 1 .21-1.04.75.75 0 0 1 1.04.21 5.75 5.75 0 0 1-4.79 8.94"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRefreshRightSquare;
