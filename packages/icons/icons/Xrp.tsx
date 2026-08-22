import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconXrp = forwardRef<SVGSVGElement, IconProps>(function IconXrp(
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
            d="M6.13 2H4.72c-.93 0-1.4 1.13-.74 1.79l5.73 5.73a4.2 4.2 0 0 0 5.93 0l5.73-5.73c.66-.66.19-1.79-.74-1.79h-1.41c-.83 0-1.63.33-2.22.92L13.42 6.5c-.41.41-1.07.41-1.48 0L8.36 2.92C7.76 2.33 6.96 2 6.13 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.13 21.97H4.72c-.93 0-1.4-1.13-.74-1.79l5.73-5.73a4.2 4.2 0 0 1 5.93 0l5.73 5.73c.66.66.19 1.79-.74 1.79h-1.41c-.83 0-1.63-.33-2.22-.92l-3.58-3.58a1.04 1.04 0 0 0-1.48 0l-3.58 3.58c-.6.59-1.4.92-2.23.92"
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
          <path d="M24.67 0h-24v24h24z" fill="none" />
          <path
            d="M6.13 2H4.72c-.93 0-1.4 1.13-.74 1.79l5.73 5.73a4.2 4.2 0 0 0 5.93 0l5.73-5.73c.65-.66.18-1.79-.75-1.79h-1.41c-.83 0-1.63.33-2.22.92L13.41 6.5c-.41.41-1.07.41-1.48 0L8.35 2.92A3 3 0 0 0 6.13 2"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.13 21.97H4.72c-.93 0-1.4-1.13-.74-1.79l5.73-5.73a4.2 4.2 0 0 1 5.93 0l5.73 5.73c.66.66.19 1.79-.74 1.79h-1.41c-.83 0-1.63-.33-2.22-.92l-3.58-3.58a1.04 1.04 0 0 0-1.48 0l-3.58 3.58c-.6.59-1.4.92-2.23.92"
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
            d="M6.13 2H4.72c-.93 0-1.4 1.13-.74 1.79l5.73 5.73a4.2 4.2 0 0 0 5.93 0l5.73-5.73c.66-.66.19-1.79-.74-1.79h-1.41c-.83 0-1.63.33-2.22.92L13.42 6.5c-.41.41-1.07.41-1.48 0L8.36 2.92C7.76 2.33 6.96 2 6.13 2"
            fill="currentColor"
          />
          <path
            d="M6.13 21.97H4.72c-.93 0-1.4-1.13-.74-1.79l5.73-5.73a4.2 4.2 0 0 1 5.93 0l5.73 5.73c.66.66.19 1.79-.74 1.79h-1.41c-.83 0-1.63-.33-2.22-.92l-3.58-3.58a1.04 1.04 0 0 0-1.48 0l-3.58 3.58c-.6.59-1.4.92-2.23.92"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconXrp;
