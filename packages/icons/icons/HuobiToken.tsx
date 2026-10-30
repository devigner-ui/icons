import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHuobiToken = forwardRef<SVGSVGElement, IconProps>(
  function IconHuobiToken(
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
            d="M17.85 12q-.63-.97-1.7-2s-.14 1-3.24 5c-2.91 3.77 1.3 6.64 1.8 6.97q.04.03.1 0c.46-.29 4.03-2.58 4.22-6.09"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13.76 7.79c0-2.3-.9-4.4-1.8-5.6-.3-.3-.8-.2-.9.2-.4 1.5-1.6 4.7-4.5 8.5-3.7 4.8-.3 10 3.2 11 1.9.5-.5-1-.8-4.1-.3-3.9 4.8-6.8 4.8-10Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
              opacity={duotone ? "0.4" : "1"}
              d="M16.16 10s-.15 1-3.25 5c-2.91 3.77 1.3 6.64 1.8 6.97q.04.03.1 0c.68-.42 8.25-5.29 1.35-11.97"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.76 7.79c0-2.3-.9-4.4-1.8-5.6-.3-.3-.8-.2-.9.2-.4 1.5-1.6 4.7-4.5 8.5-3.7 4.8-.3 10 3.2 11 1.9.5-.5-1-.8-4.1-.3-3.9 4.8-6.8 4.8-10"
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
            <path d="M24 0H0v24h24z" fill="none" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.16 10s-.15 1-3.25 5c-2.91 3.77 1.3 6.64 1.8 6.97q.04.03.1 0c.68-.42 8.25-5.29 1.35-11.97"
              fill="currentColor"
            />
            <path
              d="M13.76 7.79c0-2.3-.9-4.4-1.8-5.6-.3-.3-.8-.2-.9.2-.4 1.5-1.6 4.7-4.5 8.5-3.7 4.8-.3 10 3.2 11 1.9.5-.5-1-.8-4.1-.3-3.9 4.8-6.8 4.8-10"
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
              d="M16.16 10s-.15 1-3.25 5c-2.91 3.77 1.3 6.64 1.8 6.97q.04.03.1 0c.68-.42 8.25-5.29 1.35-11.97"
              fill="currentColor"
            />
            <path
              d="M13.76 7.79c0-2.3-.9-4.4-1.8-5.6-.3-.3-.8-.2-.9.2-.4 1.5-1.6 4.7-4.5 8.5-3.7 4.8-.3 10 3.2 11 1.9.5-.5-1-.8-4.1-.3-3.9 4.8-6.8 4.8-10"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHuobiToken;
