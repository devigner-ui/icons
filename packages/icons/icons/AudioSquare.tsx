import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAudioSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconAudioSquare(
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
            d="M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M11.74 15.18a2.12 2.12 0 1 1-4.24 0 2.12 2.12 0 0 1 4.24 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M11.74 15.18V7.77"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m13.13 6.77 2.34.78a1.6 1.6 0 0 1 1.03 1.43v.62c0 .81-.63 1.26-1.39 1l-2.34-.78a1.6 1.6 0 0 1-1.03-1.43v-.62c0-.8.62-1.26 1.39-1Z"
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
            <path
              d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M9.62 17.3a2.12 2.12 0 1 0 0-4.24 2.12 2.12 0 0 0 0 4.24"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.74 15.18V7.77"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m13.13 6.77 2.34.78a1.6 1.6 0 0 1 1.03 1.43v.62c0 .81-.63 1.26-1.39 1l-2.34-.78a1.6 1.6 0 0 1-1.03-1.43v-.62c0-.8.62-1.26 1.39-1"
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
              d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
              fill="currentColor"
            />
            <path
              d="m15.62 7.1-2.29-.76a1.8 1.8 0 0 0-1.62.2c-.45.32-.7.86-.7 1.47v4.79q-.6-.34-1.34-.35a2.8 2.8 0 0 0-2.8 2.8 2.8 2.8 0 0 0 2.8 2.8 2.8 2.8 0 0 0 2.8-2.8V10.7l.04.02 2.29.76q.32.1.64.11.55 0 .98-.31c.45-.32.7-.86.7-1.47V9.2a2.3 2.3 0 0 0-1.5-2.1m-5.95 9.49a1.34 1.34 0 1 1 1.34-1.33c0 .73-.6 1.33-1.34 1.33"
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
              d="M9.67 13.92c-.74 0-1.33.6-1.33 1.34s.6 1.33 1.33 1.33a1.34 1.34 0 1 0 0-2.67"
              fill="currentColor"
            />
            <path
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2m.93 7.8c0 .61-.26 1.15-.7 1.47q-.43.3-.98.31a2 2 0 0 1-.64-.11l-2.29-.76-.04-.02v4.56a2.8 2.8 0 0 1-2.8 2.8 2.8 2.8 0 0 1-2.8-2.8 2.8 2.8 0 0 1 4.14-2.45V8.02c0-.61.26-1.15.7-1.47.45-.32 1.04-.4 1.62-.2l2.29.76a2.3 2.3 0 0 1 1.51 2.09z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAudioSquare;
