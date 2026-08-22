import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStrongbox2 = forwardRef<SVGSVGElement, IconProps>(
  function IconStrongbox2(
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
                d="M8.67 19h8q3 0 3-3V8q0-3-3-3h-8q-3 0-3 3v8q0 3 3 3"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.67 9.5h2.48a2.5 2.5 0 0 1 0 5H5.67"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.67 9.99h-3"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.67 14h-3"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.87 12h.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M16.86 2H8.49C4.85 2 2.68 4.17 2.68 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M16.67 9.24h2a1 1 0 0 0 1-1V8a3 3 0 0 0-3-3h-8a3 3 0 0 0-3 3v.5a1 1 0 0 0 1 1h1.34c1.31 0 2.5.94 2.63 2.25a2.5 2.5 0 0 1-2.49 2.76H6.67a1 1 0 0 0-1 1v.5a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-.25a1 1 0 0 0-1-1h-2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2a1 1 0 0 0 1-1v-.51a1 1 0 0 0-1-1h-2a.75.75 0 0 1-.75-.75c0-.42.34-.76.75-.76"
              fill="currentColor"
            />
            <path
              d="M7.67 13h-1a1 1 0 0 1-1-1 1 1 0 0 1 1-1h1a1 1 0 0 1 1 1 1 1 0 0 1-1 1"
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
              d="M16.86 2H8.48c-3.64 0-5.8 2.17-5.8 5.81v8.37c0 3.65 2.16 5.82 5.8 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m2.81 6.24a1 1 0 0 1-1 1h-2a.75.75 0 1 0 0 1.5h2a1 1 0 0 1 1 1v.51a1 1 0 0 1-1 1h-2a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2a1 1 0 0 1 1 1V16a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-.5a1 1 0 0 1 1-1h1.48a2.5 2.5 0 0 0 2.5-2.76A2.63 2.63 0 0 0 8 9.5H6.67a1 1 0 0 1-1-1V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3zM5.67 12a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStrongbox2;
