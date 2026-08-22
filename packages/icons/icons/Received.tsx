import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconReceived = forwardRef<SVGSVGElement, IconProps>(function IconReceived(
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
            d="m5.67 17.5 14-14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.67 7.23V17.5h10.27"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.17 22h17"
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
            d="M5.67 18.2c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l14-14c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-14 14c-.2.2-.4.2-.6.2"
            fill="currentColor"
          />
          <path
            d="M15.97 18.2H5.67c-.4 0-.8-.3-.8-.8V7.2c0-.4.3-.8.8-.8s.8.3.8.8v9.5h9.5c.4 0 .8.3.8.8s-.4.7-.8.7"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.17 22.8h-17c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h17c.4 0 .8.3.8.8s-.4.8-.8.8"
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
            d="M5.38 18.19q.14.06.29.06h10.27c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75H7.48L20.2 4.03a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0L6.42 15.69V7.23a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75V17.5a.8.8 0 0 0 .46.69"
            fill="currentColor"
          />
          <path
            d="M21.17 21.25h-17a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h17c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconReceived;
