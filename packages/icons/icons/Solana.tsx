import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSolana = forwardRef<SVGSVGElement, IconProps>(function IconSolana(
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
            d="M20.67 3.5H6.17c-.31 0-.61.15-.8.4l-1.5 2a1 1 0 0 0 .8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2a1 1 0 0 0-.8-1.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.67 10h14.5c.31 0 .61.15.8.4l1.5 2a1 1 0 0 1-.8 1.6H6.17c-.31 0-.61-.15-.8-.4l-1.5-2a1 1 0 0 1 .8-1.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            d="M20.67 16.5H6.17c-.31 0-.61.15-.8.4l-1.5 2a1 1 0 0 0 .8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2a1 1 0 0 0-.8-1.6"
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
          <path d="M24.67 0h-24v24h24z" fill="none" />
          <path
            d="M20.67 3.5H6.17c-.31 0-.61.15-.8.4l-1.5 2a1 1 0 0 0 .8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2a1 1 0 0 0-.8-1.6"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.67 10h14.5c.31 0 .61.15.8.4l1.5 2a1 1 0 0 1-.8 1.6H6.17c-.31 0-.61-.15-.8-.4l-1.5-2a1 1 0 0 1 .8-1.6"
            fill="currentColor"
          />
          <path
            d="M20.67 16.5H6.17c-.31 0-.61.15-.8.4l-1.5 2a1 1 0 0 0 .8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2a1 1 0 0 0-.8-1.6"
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
            d="M20.67 3.5H6.17c-.31 0-.61.15-.8.4l-1.5 2a1 1 0 0 0 .8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2a1 1 0 0 0-.8-1.6"
            fill="currentColor"
          />
          <path
            d="M4.67 10h14.5c.31 0 .61.15.8.4l1.5 2a1 1 0 0 1-.8 1.6H6.17c-.31 0-.61-.15-.8-.4l-1.5-2a1 1 0 0 1 .8-1.6"
            fill="currentColor"
          />
          <path
            d="M20.67 16.5H6.17c-.31 0-.61.15-.8.4l-1.5 2a1 1 0 0 0 .8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2a1 1 0 0 0-.8-1.6"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSolana;
