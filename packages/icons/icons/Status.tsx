import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStatus = forwardRef<SVGSVGElement, IconProps>(function IconStatus(
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
            d="M2.45 14.97a10 10 0 0 0 7.53 6.82"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2.05 10.98a10 10 0 0 1 19.9 0"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.01 21.8a10 10 0 0 0 7.53-6.78"
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
            d="M2.45 14.97a10 10 0 0 0 7.53 6.82"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.05 10.98a10 10 0 0 1 19.9 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.01 21.8a10 10 0 0 0 7.53-6.78"
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
            d="M10.24 14.99A1.8 1.8 0 0 0 9 14.47H3.92a1.74 1.74 0 0 0-1.58 2.49 10.8 10.8 0 0 0 6.09 5.43q.28.1.57.1.54 0 1-.32c.47-.33.75-.87.75-1.44l.01-4.5a1.8 1.8 0 0 0-.52-1.24"
            fill="currentColor"
          />
          <path
            d="M22.48 9.85A10.7 10.7 0 0 0 12 1.5c-5.05 0-9.36 3.43-10.48 8.35-.12.52 0 1.05.34 1.47s.84.66 1.38.66h17.53a1.74 1.74 0 0 0 1.71-2.13"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.56 15.35a1.8 1.8 0 0 0-1.5-.84L15 14.5a1.74 1.74 0 0 0-1.75 1.75l.01 4.48a1.76 1.76 0 0 0 1.75 1.76q.29 0 .56-.1a11 11 0 0 0 6.07-5.38c.26-.53.23-1.15-.08-1.66"
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
            d="M9 14.47H3.92a1.74 1.74 0 0 0-1.58 2.49 10.8 10.8 0 0 0 6.09 5.43q.28.1.57.1.54 0 1-.32c.47-.33.75-.87.75-1.44l.01-4.5c0-.47-.18-.91-.51-1.24A1.8 1.8 0 0 0 9 14.47"
            fill="currentColor"
          />
          <path
            d="M22.48 9.85A10.7 10.7 0 0 0 12 1.5c-5.05 0-9.36 3.43-10.48 8.35-.12.52 0 1.05.34 1.47s.84.66 1.38.66h17.53a1.74 1.74 0 0 0 1.71-2.13"
            fill="currentColor"
          />
          <path
            d="M20.06 14.52 15 14.51a1.74 1.74 0 0 0-1.75 1.75l.01 4.48a1.76 1.76 0 0 0 1.75 1.76q.29 0 .56-.1a11 11 0 0 0 6.07-5.38 1.7 1.7 0 0 0-.08-1.65 1.7 1.7 0 0 0-1.5-.85"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconStatus;
