import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMiniMusicSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconMiniMusicSquare(
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
            d="M2 12.98V15c0 5 2 7 7 7h2"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 10V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M16.71 20.56a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 19.6v-5.64c0-1.2-.75-1.37-1.52-1.16l-2.9.79c-.51.14-.88.56-.88 1.16v5.82"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 19.6a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m16.71 16.43 5.3-1.44"
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
              d="M22 10V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M15.27 22a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 19.6v-5.64c0-1.2-.75-1.37-1.52-1.16l-2.89.79c-.52.14-.89.56-.89 1.16v5.82"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.56 21.04a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.71 16.43 22 14.99"
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
              d="M20.23 17.02a4.5 4.5 0 0 1-2.14 2.74 2.25 2.25 0 0 1 2.14-2.74"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.52 7.02v7.96l-.02.64-3.45.95v3.64q-.7.22-1.54.27l.04-.22a.74.74 0 0 0-1.49 0q0 .13.05.24H7.04c-3.45 0-5.52-2.06-5.52-5.52V7.02c0-3.46 2.07-5.52 5.52-5.52H15c3.45 0 5.52 2.06 5.52 5.52"
              fill="currentColor"
            />
            <path
              d="M21.83 11.75a1.8 1.8 0 0 0-1.31-.33 3 3 0 0 0-.52.09l-2.98.82c-.89.23-1.47.98-1.47 1.91v3.91a2.24 2.24 0 1 0 1.49 2.15l.01-.04v-3.69l3.45-.95.52-.14v1.68a2 2 0 0 0-.75-.14h-.04a2.25 2.25 0 0 0 .04 4.49c1.23 0 2.22-.99 2.24-2.21l.01-.04v-5.83q0-1.14-.69-1.68M14.81 21a.7.7 0 0 1-.7-.5l-.05-.24a.74.74 0 0 1 1.49 0q0 .12-.04.22a.7.7 0 0 1-.7.52m5.46-.99a.75.75 0 0 1-.74-.75c0-.4.34-.74.74-.74.41 0 .75.34.75.74 0 .41-.34.75-.75.75"
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
              opacity={duotone ? "0.4" : "1"}
              d="M20.23 17.02a4.5 4.5 0 0 1-2.14 2.74 2.25 2.25 0 0 1 2.14-2.74"
              fill="currentColor"
            />
            <path
              d="M20.52 7.02v1.96c0 .53-.41.95-.92 1.08l-2.95.82a3.4 3.4 0 0 0-2.6 3.36v1.54c0 .48-.34.88-.77 1.08a4 4 0 0 0-2.08 2.65c-.14.54-.58.99-1.13.99H7.04c-3.45 0-5.52-2.06-5.52-5.52V7.02c0-3.46 2.07-5.52 5.52-5.52H15c3.45 0 5.52 2.06 5.52 5.52"
              fill="currentColor"
            />
            <path
              d="M21.83 11.75a1.8 1.8 0 0 0-1.31-.33 3 3 0 0 0-.52.09l-2.98.82c-.89.23-1.47.98-1.47 1.91v3.91a2.24 2.24 0 1 0 1.49 2.15l.01-.04v-3.69l3.45-.95.52-.14v1.68a2 2 0 0 0-.75-.14h-.04a2.25 2.25 0 0 0 .04 4.49c1.23 0 2.22-.99 2.24-2.21l.01-.04v-5.83q0-1.14-.69-1.68M14.81 21a.7.7 0 0 1-.7-.5l-.05-.24a.74.74 0 0 1 1.49 0q0 .12-.04.22a.7.7 0 0 1-.7.52m5.46-.99a.75.75 0 0 1-.74-.75c0-.4.34-.74.74-.74.41 0 .75.34.75.74 0 .41-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMiniMusicSquare;
