import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBombSparks = forwardRef<SVGSVGElement, IconProps>(
  function IconBombSparks(
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
            d="m17.75 6.33-2 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m20.25 6.83 1 .5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m16.75 2.83.5 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m19.75 4.33 1-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6.5 7.33a7.5 7.5 0 1 1-2.75 2.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            <circle
              cx="10.25"
              cy="13.83"
              r="7.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m17.75 6.33-2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m20.25 6.83 1 .5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m16.75 2.83.5 1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m19.75 4.33 1-1"
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
              d="M17.35 14.15a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"
              fill="currentColor"
            />
            <path
              d="M17.02 2.82a.75.75 0 1 0-1.34.67l.5 1a.75.75 0 1 0 1.34-.67z"
              fill="currentColor"
            />
            <path
              d="M20.19 6.48a.75.75 0 1 0-.68 1.34l1 .5a.75.75 0 1 0 .68-1.34z"
              fill="currentColor"
            />
            <path
              d="M20.88 4.18a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06z"
              fill="currentColor"
            />
            <path
              d="m15.65 9.4 2.23-2.22a.75.75 0 0 0-1.06-1.06L14.6 8.34q.58.48 1.06 1.06"
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
              d="M16.01 2.48a.75.75 0 0 1 1.01.34l.5 1a.75.75 0 1 1-1.34.67l-.5-1a.75.75 0 0 1 .33-1.01"
              fill="currentColor"
            />
            <path
              d="M19.18 6.82a.75.75 0 0 1 1-.34l1 .5a.75.75 0 1 1-.67 1.34l-1-.5a.75.75 0 0 1-.33-1"
              fill="currentColor"
            />
            <path
              d="M20.88 4.18a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06z"
              fill="currentColor"
            />
            <path
              d="M17.35 14.15a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"
              fill="currentColor"
            />
            <path
              d="m17.88 7.18-1.16 1.17a9 9 0 0 0-1.06-1.06l1.16-1.16a.75.75 0 1 1 1.06 1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBombSparks;
