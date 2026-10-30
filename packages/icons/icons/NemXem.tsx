import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconNemXem = forwardRef<SVGSVGElement, IconProps>(function IconNemXem(
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
            d="M4.03 13.56A19 19 0 0 1 2 4.85s10-6 20 0c0 0 0 11-10 17 0 0-2.73-1.37-5.34-4.38"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2.1 6.92C5.21 17 12 9.85 12 9.85c-1-6 4.07-7.06 4.07-7.06l.59-.11"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M16.35 18.36S19 12.85 12 9.85"
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
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit={10}
            d="M2 4.8s10-6 20 0c0 0 0 11-10 17 0 0-10-5-10-17"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d="M2.1 6.9c3.1 10 9.9 2.9 9.9 2.9-1-6 4.1-7.1 4.1-7.1l.6-.1m-.3 15.7S19 12.8 12 9.8"
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
          <path d="M24-.15H0v24h24z" fill="none" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m16.36 18.34-.01.02A20 20 0 0 1 12 21.85S3.16 17.43 2.1 6.93C5.21 17 12 9.85 12 9.85c6.76 2.9 4.52 8.14 4.36 8.49"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M16.36 18.34c.16-.35 2.4-5.59-4.36-8.49-1-6 4.07-7.06 4.07-7.06l.59-.12h.01c1.74.41 3.53 1.1 5.33 2.18 0 0 0 7.5-5.64 13.49"
            fill="currentColor"
          />
          <path
            d="m16.66 2.67-.59.12S11 3.85 12 9.85c0 0-6.79 7.15-9.9-2.92v-.01q-.1-1-.1-2.07S8.72.82 16.66 2.67"
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
            d="m15.07 17.88-1.01 2.22a3.3 3.3 0 0 1-1.15 1.39 1.6 1.6 0 0 1-1.74.04 20.4 20.4 0 0 1-7.39-8.34c-.08-.16.14-.32.28-.22a5.3 5.3 0 0 0 3.08.97c1.86 0 3.54-.95 4.66-1.77a1 1 0 0 1 1.11-.08 5.3 5.3 0 0 1 2.24 2.49c.64 1.68-.06 3.23-.08 3.3"
            fill="currentColor"
          />
          <path
            d="M16.85 18.05c-.08.09-.24-.01-.2-.12.44-1.46 1.01-5.31-4.09-7.75a1 1 0 0 1-.58-.77 5.63 5.63 0 0 1 4.17-6.56q.6-.13 1.18.03 1.62.43 3.29 1.23c.95.46 1.5 1.46 1.36 2.51a22 22 0 0 1-5.13 11.43"
            fill="currentColor"
          />
          <path
            d="m10.56 10.21.03.2a.9.9 0 0 1-.41.97c-2.15 1.35-5.67 2.37-7.82-3.54-.2-.54-.32-.94-.36-1.52-.05-.76.38-1.63 1.06-1.95a23 23 0 0 1 9.97-2.12c.2.01.27.27.11.38-1.73 1.32-3.22 3.7-2.58 7.58"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconNemXem;
