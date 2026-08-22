import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMagnetWave = forwardRef<SVGSVGElement, IconProps>(
  function IconMagnetWave(
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
              d="M18 18v1.5c0 .83-.67 1.5-1.5 1.5H11a9 9 0 1 1 0-18h5.5c.83 0 1.5.67 1.5 1.5V6c0 .83-.67 1.5-1.5 1.5h-5.56a4.5 4.5 0 0 0 0 9h5.56c.83 0 1.5.67 1.5 1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.44 3v4.5m0 9V21"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.5 6S23 7.8 23 12s-1.5 6-1.5 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.5 9s.5.9.5 3-.5 3-.5 3"
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
              d="M14.5 3H11a9 9 0 1 0 0 18h3.5v-4.5h-3.56a4.5 4.5 0 0 1 0-9h3.56z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M23.5 14.85q-.24 1.2-.55 2a8 8 0 0 1-.86 1.61v.01h-.01v.01a.75.75 0 0 1-1.16-.96l.03-.04.14-.21q.2-.3.46-.96.25-.63.46-1.62a14 14 0 0 0 .24-2.69q0-.75-.06-1.4a11 11 0 0 0-.64-2.9 6 6 0 0 0-.63-1.22.75.75 0 0 1 1.16-.96v.02l.1.11.2.31q.26.4.57 1.2c.3.78.6 1.85.73 3.24q.07.75.07 1.6"
                fill="currentColor"
              />
              <path d="M23.75 12q-.01 1.64-.25 2.85z" fill="currentColor" />
            </g>
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.16 8.64a.75.75 0 0 0-1.32.72l.04.1q.06.12.14.44c.11.42.23 1.11.23 2.1a9 9 0 0 1-.37 2.55l-.04.08v.02a.75.75 0 0 0 1.32.71L19.5 15l.66.36.01-.03.1-.22q.1-.22.2-.64a10 10 0 0 0 .28-2.47 10 10 0 0 0-.27-2.47 5 5 0 0 0-.3-.86zL19.5 9z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M14.5 7.5h2c.83 0 1.5-.67 1.5-1.5V4.5c0-.83-.67-1.5-1.5-1.5h-2z"
                fill="currentColor"
              />
              <path
                d="M14.5 16.5V21h2c.83 0 1.5-.67 1.5-1.5V18c0-.83-.67-1.5-1.5-1.5z"
                fill="currentColor"
              />
            </g>
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
              d="M13.7 3H11a9 9 0 1 0 0 18h2.7v-4.5h-2.76a4.5 4.5 0 0 1 0-9h2.75z"
              fill="currentColor"
            />
            <path
              d="M15.2 7.5h1.3c.83 0 1.5-.67 1.5-1.5V4.5c0-.83-.67-1.5-1.5-1.5h-1.3z"
              fill="currentColor"
            />
            <path
              d="M15.2 16.5V21h1.3c.83 0 1.5-.67 1.5-1.5V18c0-.83-.67-1.5-1.5-1.5z"
              fill="currentColor"
            />
            <path
              d="M20.16 8.64a.75.75 0 0 0-1.32.71v.02l.04.08q.06.13.14.45c.11.42.23 1.11.23 2.1a9 9 0 0 1-.37 2.55l-.04.08v.01a.75.75 0 0 0 1.32.72L19.5 15l.66.36.01-.03.1-.22q.1-.22.2-.64a10 10 0 0 0 .28-2.47 10 10 0 0 0-.27-2.47 5 5 0 0 0-.3-.86zL19.5 9z"
              fill="currentColor"
            />
            <path
              d="M23.5 14.85q-.24 1.2-.55 2a8 8 0 0 1-.86 1.61v.01h-.01v.01a.75.75 0 0 1-1.16-.96l.03-.04.14-.21q.2-.3.46-.96.25-.63.46-1.62a14 14 0 0 0 .24-2.69q0-.75-.06-1.4a11 11 0 0 0-.64-2.9 6 6 0 0 0-.63-1.22.75.75 0 0 1 1.16-.96v.02l.1.11.2.31q.26.4.57 1.2c.3.78.6 1.85.73 3.24q.07.75.07 1.6"
              fill="currentColor"
            />
            <path d="M23.75 12q-.01 1.64-.25 2.85z" fill="currentColor" />
          </svg>
        )}
      </>
    );
  },
);

export default IconMagnetWave;
