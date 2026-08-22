import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconNoteSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconNoteSquare(
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
              d="M22.67 10V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M16.18 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.18 20v-6.99"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m19.49 12.07 2.21.74c.53.18.97.78.97 1.35v.59c0 .76-.59 1.19-1.31.95l-2.21-.74a1.5 1.5 0 0 1-.97-1.35v-.59c0-.77.59-1.19 1.31-.95"
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
              d="M21.67 7.52v7.96q0 .54-.07 1.03l-.13-.03-2.28-.76-.05-.02v4.61q-.72.4-1.62.56.16-.27.16-.62a1.34 1.34 0 0 0-2.67 0q0 .43.23.75H8.19c-3.45 0-5.52-2.06-5.52-5.52V7.52C2.67 4.06 4.74 2 8.19 2h7.96c3.45 0 5.52 2.06 5.52 5.52"
              fill="currentColor"
            />
            <path
              d="m22.29 12.1-.62-.21-1.67-.55a1.8 1.8 0 0 0-1.62.2c-.44.33-.7.86-.7 1.48v4.79q-.6-.35-1.34-.36a2.8 2.8 0 1 0 2.8 2.86V15.7l.05.02 2.28.76.13.03q.26.07.51.07.55 0 .98-.31c.45-.32.7-.85.7-1.47v-.6a2.3 2.3 0 0 0-1.5-2.1m-5.95 9.49c-.46 0-.86-.23-1.1-.59a1.34 1.34 0 1 1 2.44-.75q0 .35-.16.62c-.22.43-.67.72-1.18.72"
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
              d="m22.29 12.1-.62-.21-1.67-.55a1.8 1.8 0 0 0-1.62.2c-.44.33-.7.86-.7 1.48v4.79q-.6-.35-1.34-.36a2.8 2.8 0 1 0 2.8 2.86V15.7l.05.02 2.28.76.13.03q.26.07.51.07.55 0 .98-.31c.45-.32.7-.85.7-1.47v-.6a2.3 2.3 0 0 0-1.5-2.1m-5.95 9.49c-.46 0-.86-.23-1.1-.59a1.34 1.34 0 1 1 2.44-.75q0 .35-.16.62c-.22.43-.67.72-1.18.72"
              fill="currentColor"
            />
            <path
              d="M23.79 14.2v.6c0 .62-.25 1.15-.7 1.47q-.43.31-.98.31-.25 0-.51-.07l-.13-.03-2.28-.76-.05-.02v4.61a2.8 2.8 0 1 1-1.46-2.5v-4.79c0-.62.26-1.15.7-1.48a1.8 1.8 0 0 1 1.62-.2l1.67.55.62.21a2.3 2.3 0 0 1 1.5 2.1"
              fill="currentColor"
            />
            <path
              d="M21.67 7.52v2.1a.5.5 0 0 1-.66.47l-.54-.18a3.3 3.3 0 0 0-2.99.43 3.3 3.3 0 0 0-1.3 2.68v2.45c0 .27-.21.49-.48.53a4.3 4.3 0 0 0-3.65 4.25v.15c.01.31-.22.6-.54.6H8.19c-3.45 0-5.52-2.06-5.52-5.52V7.52C2.67 4.06 4.74 2 8.19 2h7.96c3.45 0 5.52 2.06 5.52 5.52"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconNoteSquare;
