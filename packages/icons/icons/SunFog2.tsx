import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSunFog2 = forwardRef<SVGSVGElement, IconProps>(function IconSunFog2(
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
            d="M19.17 12a6.5 6.5 0 1 0-13 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m5.66 4.99-.13-.13m14.15.13.13-.13zm-7.01-2.91V2zM2.75 12h-.08zm19.92 0h-.08z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.67 15h16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.67 18h12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.67 21h6"
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
            d="M19.15 12.25a.5.5 0 0 0 .5-.52 7 7 0 0 0-13.96 0 .5.5 0 0 0 .5.52z"
            fill="currentColor"
          />
          <path
            d="M22.67 13h-.08a1 1 0 0 1-1-1 1 1 0 0 1 1-1c.55 0 1.04.45 1.04 1s-.41 1-.96 1M2.75 13h-.08a1 1 0 0 1-1-1 1 1 0 0 1 1-1c.55 0 1.04.45 1.04 1s-.41 1-.96 1m16.93-7.01q-.4 0-.71-.29a1 1 0 0 1 0-1.41l.13-.13a1 1 0 1 1 1.41 1.41l-.13.13a1 1 0 0 1-.7.29m-14.02 0q-.4 0-.71-.29l-.13-.13a1 1 0 1 1 1.41-1.41l.13.13a1 1 0 0 1-.7 1.7m7.01-2.95c-.55 0-1-.41-1-.96V2a1 1 0 0 1 1-1 1 1 0 0 1 1 1c0 .55-.45 1.04-1 1.04"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.67 15.75h-16a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h16c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.67 18.75h-12a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.67 21.75h-6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M19.15 12.25a.5.5 0 0 0 .5-.52 7 7 0 0 0-13.96 0 .5.5 0 0 0 .5.52z"
            fill="currentColor"
          />
          <path
            d="M22.67 13h-.08a1 1 0 0 1-1-1 1 1 0 0 1 1-1c.55 0 1.04.45 1.04 1s-.41 1-.96 1M2.75 13h-.08a1 1 0 0 1-1-1 1 1 0 0 1 1-1c.55 0 1.04.45 1.04 1s-.41 1-.96 1m16.93-7.01q-.4 0-.71-.29a1 1 0 0 1 0-1.41l.13-.13a1 1 0 1 1 1.41 1.41l-.13.13a1 1 0 0 1-.7.29m-14.02 0q-.4 0-.71-.29l-.13-.14a1 1 0 1 1 1.41-1.41l.13.13a1 1 0 0 1 0 1.41q-.3.3-.7.3m7.01-2.95c-.55 0-1-.41-1-.96V2a1 1 0 0 1 1-1 1 1 0 0 1 1 1c0 .55-.45 1.04-1 1.04"
            fill="currentColor"
          />
          <path
            d="M20.67 15.75h-16a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h16c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M18.67 18.75h-12a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M15.67 21.75h-6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSunFog2;
