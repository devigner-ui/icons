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
            d="M12.67 5 8.23 2 2.67 6l4.44 3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m12.67 5 4.44-3 5.56 4-4.44 3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m12.67 14-4.44 3-5.56-4 4.44-3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m12.67 14 4.44 3 5.56-4-4.44-3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.67 15.5v3.27l-6.58 3.04q-.42.18-.84 0l-6.58-3.04V15.5"
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
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m12.67 6-5.56 4-3.25-2.2a1 1 0 0 1-.02-1.64L7.67 3.4c.34-.24.8-.25 1.14-.02z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.48 7.8 18.23 10l-5.56-4 3.86-2.61a1 1 0 0 1 1.14.02l3.83 2.76a1 1 0 0 1-.02 1.63"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m12.67 14-4.44 3-2.56-1.84-1.84-1.32a1 1 0 0 1 .02-1.64L7.1 10z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.48 12.2a1 1 0 0 1 .02 1.64l-1.83 1.32L17.11 17l-4.44-3 5.56-4z"
            fill="currentColor"
          />
          <path
            d="M19.67 15.16v2.97c0 .39-.23.74-.58.91l-6 2.77q-.42.18-.84 0l-6-2.77a1 1 0 0 1-.58-.91v-2.97L8.23 17l4.44-3 4.44 3z"
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
            d="m12.67 6-5.56 4-3.25-2.2a1 1 0 0 1-.02-1.64L7.67 3.4c.34-.24.8-.25 1.14-.02z"
            fill="currentColor"
          />
          <path
            d="M21.48 7.8 18.23 10l-5.56-4 3.86-2.61a1 1 0 0 1 1.14.02l3.83 2.76a1 1 0 0 1-.02 1.63"
            fill="currentColor"
          />
          <path
            d="m12.67 14-4.44 3-2.56-1.84-1.84-1.32a1 1 0 0 1 .02-1.64L7.1 10z"
            fill="currentColor"
          />
          <path
            d="M21.48 12.2a1 1 0 0 1 .02 1.64l-1.84 1.32L17.1 17l-4.44-3 5.56-4z"
            fill="currentColor"
          />
          <path
            d="M19.35 17.34c.13-.1.32 0 .32.16v.73c0 .39-.23.74-.58.91l-6 2.77q-.42.18-.84 0l-6-2.77a1 1 0 0 1-.58-.91v-.73a.2.2 0 0 1 .32-.16l1.93 1.39c.17.12.4.13.57.01l3.9-2.64a.5.5 0 0 1 .56 0l3.9 2.64c.17.12.4.11.57-.01z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDropbox;
