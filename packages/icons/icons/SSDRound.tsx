import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSSDRound = forwardRef<SVGSVGElement, IconProps>(function IconSSDRound(
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
            d="M21.55 15.48 19 5.12C18.5 3.52 17.6 3 16.5 3h-9c-1.1 0-2 .53-2.5 2.12L2.45 15.48m19.1 0a3.5 3.5 0 0 0-3.05-1.9h-13c-1.31 0-2.45.77-3.05 1.9m19.1 0q.44.82.45 1.81A3.6 3.6 0 0 1 18.5 21h-13A3.6 3.6 0 0 1 2 17.3q0-1 .45-1.82"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18 17v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.5 17v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 17v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.5 17v1"
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
            d="M5.5 13.59h13c1.31 0 2.45.76 3.05 1.9L19 5.11C18.5 3.52 17.6 3 16.5 3h-9c-1.1 0-2 .53-2.5 2.12L2.45 15.48a3.5 3.5 0 0 1 3.05-1.9"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.5 13.59h-13c-1.31 0-2.45.76-3.05 1.9a4 4 0 0 0-.45 1.8A3.6 3.6 0 0 0 5.5 21h13a3.6 3.6 0 0 0 3.5-3.7q0-1-.45-1.82a3.5 3.5 0 0 0-3.05-1.9m-.5 2.66c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75m-1.75.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zM13 16.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75m-1.75.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0z"
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
            d="M18.84 13.38c1.13 0 2.14.45 2.9 1.18l-2.37-9.38C18.84 3.54 17.9 3 16.74 3H7.26c-1.16 0-2.1.54-2.63 2.18l-2.36 9.38a4 4 0 0 1 2.89-1.18z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.16 14.4c-1.17 0-2.2.67-2.75 1.68A3.4 3.4 0 0 0 2 17.7C2 19.55 3.44 21 5.16 21h13.68A3.23 3.23 0 0 0 22 17.7q-.01-.9-.4-1.62a3.1 3.1 0 0 0-2.76-1.68zm6.05 3a.8.8 0 0 0-.79-.77.8.8 0 0 0-.79.77v1.03c0 .42.36.77.8.77.43 0 .78-.35.78-.77zm1.84-.77c.44 0 .8.34.8.77v1.03c0 .42-.36.77-.8.77a.8.8 0 0 1-.79-.77V17.4c0-.43.36-.77.8-.77m3.42.77a.8.8 0 0 0-.79-.77.8.8 0 0 0-.79.77v1.03c0 .42.36.77.8.77.43 0 .78-.35.78-.77zm2.64 0a.8.8 0 0 0-.8-.77.8.8 0 0 0-.78.77v1.03c0 .42.35.77.79.77.43 0 .79-.35.79-.77z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSSDRound;
