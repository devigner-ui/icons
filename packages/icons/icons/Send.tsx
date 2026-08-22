import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSend = forwardRef<SVGSVGElement, IconProps>(function IconSend(
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
            opacity={duotone ? "0.4" : "1"}
            d="M4.17 22h17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m5.67 3.5 14 14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.67 13.77V3.5h10.27"
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
            d="M21.17 22.8h-17c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h17c.4 0 .8.3.8.8s-.4.8-.8.8"
            fill="currentColor"
          />
          <path
            d="M19.67 18.2c-.2 0-.4-.1-.5-.2l-14-14c-.3-.3-.3-.7 0-1s.8-.3 1.1 0l14 14c.3.3.3.8 0 1.1-.2.1-.4.1-.6.1"
            fill="currentColor"
          />
          <path
            d="M5.67 14.5c-.4 0-.8-.3-.8-.8V3.5c0-.4.3-.8.8-.8h10.3c.4 0 .8.3.8.8s-.3.8-.8.8h-9.5v9.5c0 .4-.4.7-.8.7"
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
            d="M21.17 21.25h-17a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h17c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
            fill="currentColor"
          />
          <path
            d="M5.67 14.52c.41 0 .75-.34.75-.75V5.31l12.72 12.72q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06L7.48 4.25h8.46c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75H5.67a.75.75 0 0 0-.75.75v10.27c0 .41.34.75.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSend;
