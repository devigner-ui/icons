import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDropbox = forwardRef<SVGSVGElement, IconProps>(function IconDropbox(
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
            d="M12 5 7.56 2 2 6l4.44 3z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m12 5 4.44-3L22 6l-4.44 3z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m12 14-4.44 3L2 13l4.44-3 2.08 1.5 1.62 1.16z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m12 14 4.44 3L22 13l-4.44-3z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M5 18.77V15.5"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M19 15.5v3.27l-6.58 3.04q-.42.18-.84 0l-1.9-.88"
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
            d="M12 5 7.56 2 2 6l4.44 3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m12 5 4.44-3L22 6l-4.44 3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m12 14-4.44 3L2 13l4.44-3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m12 14 4.44 3L22 13l-4.44-3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19 15.5v3.27l-6.58 3.04q-.42.18-.84 0L5 18.77V15.5"
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
            d="M24-.55H0v24h24z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m12 5.45-5.56 4-3.25-2.2a1 1 0 0 1-.02-1.64L7 2.85c.34-.24.8-.25 1.14-.02z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m20.81 7.25-3.25 2.2-5.56-4 3.86-2.61a1 1 0 0 1 1.14.02l3.83 2.76a1 1 0 0 1-.02 1.63"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m12 13.45-4.44 3L5 14.61l-1.84-1.32a1 1 0 0 1 .02-1.64l3.25-2.2z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.81 11.65a1 1 0 0 1 .02 1.64L19 14.61l-2.56 1.84-4.44-3 5.56-4z"
            fill="currentColor"
          />
          <path
            d="M19 14.61v2.97c0 .39-.23.74-.58.91l-6 2.77q-.42.18-.84 0l-6-2.77a1 1 0 0 1-.58-.91v-2.97l2.56 1.84 4.44-3 4.44 3z"
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
            d="m12 5.33-5.56 4-3.25-2.2a1 1 0 0 1-.02-1.64L7 2.73c.34-.24.8-.25 1.14-.02z"
            fill="currentColor"
          />
          <path
            d="m20.81 7.13-3.25 2.2-5.56-4 3.86-2.61a1 1 0 0 1 1.14.02l3.83 2.76a1 1 0 0 1-.02 1.63"
            fill="currentColor"
          />
          <path
            d="m12 13.33-4.44 3L5 14.49l-1.84-1.32a1 1 0 0 1 .02-1.64l3.25-2.2z"
            fill="currentColor"
          />
          <path
            d="M20.81 11.53a1 1 0 0 1 .02 1.64l-1.84 1.32-2.56 1.84-4.44-3 5.56-4z"
            fill="currentColor"
          />
          <path
            d="M18.68 16.67c.13-.1.32 0 .32.16v.73c0 .39-.23.74-.58.91l-6 2.77q-.42.18-.84 0l-6-2.77a1 1 0 0 1-.58-.91v-.73a.2.2 0 0 1 .32-.16l1.93 1.39c.17.12.4.13.57.01l3.9-2.64a.5.5 0 0 1 .56 0l3.9 2.64c.17.12.4.11.57-.01z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDropbox;
