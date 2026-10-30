import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconThorchainRune = forwardRef<SVGSVGElement, IconProps>(
  function IconThorchainRune(
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
            d="m12.68 11.7 6.49-7.93c.7-.87-.22-2.12-1.26-1.68L8.97 5.84c-.71.3-.89 1.21-.35 1.76L9.9 8.9M6.08 21.91l10.3-4.34c.71-.3.89-1.21.35-1.76l-4.06-4.11-7.81 8.48c-.78.85.15 2.18 1.22 1.73Z"
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
              d="m6.08 21.91 10.3-4.34c.71-.3.89-1.21.35-1.76l-4.06-4.11-7.81 8.48c-.78.85.15 2.18 1.22 1.73M8.63 7.6l4.05 4.1 6.49-7.93c.71-.87-.22-2.12-1.26-1.68L8.97 5.84c-.7.29-.88 1.21-.34 1.76"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="m16.38 17.57-10.3 4.34c-1.07.45-2-.88-1.21-1.73l7.81-8.48 4.05 4.12c.54.54.36 1.46-.35 1.75"
              fill="currentColor"
            />
            <path
              d="m19.17 3.77-6.49 7.93-4.05-4.1a1.08 1.08 0 0 1 .35-1.76l8.94-3.75c1.04-.44 1.97.81 1.25 1.68"
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
              d="m16.38 17.57-10.3 4.34c-1.07.45-2-.88-1.21-1.73l7.81-8.48 4.05 4.12c.54.54.36 1.46-.35 1.75"
              fill="currentColor"
            />
            <path
              d="m19.17 3.77-6.49 7.93-4.05-4.1a1.08 1.08 0 0 1 .35-1.76l8.94-3.75c1.04-.44 1.97.81 1.25 1.68"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconThorchainRune;
