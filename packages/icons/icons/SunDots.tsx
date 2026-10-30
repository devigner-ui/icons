import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSunDots = forwardRef<SVGSVGElement, IconProps>(function IconSunDots(
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
            d="M17.6 15.3a6.5 6.5 0 0 0-8.79-8.97M6.36 8.77a6.5 6.5 0 0 0 8.76 8.94"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m19.14 19.14-.13-.13m0-14.02.13-.13zM4.86 19.14l.13-.13zM12 2.08V2zM12 22v-.08zM2.08 12H2zM22 12h-.08zM4.99 4.99l-.13-.13z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m19.14 19.14-.13-.13m0-14.02.13-.13zM4.86 19.14l.13-.13zM12 2.08V2zM12 22v-.08zM2.08 12H2zM22 12h-.08zM4.99 4.99l-.13-.13z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14"
            fill="currentColor"
          />
          <path
            d="M12 22.96c-.55 0-1-.41-1-.96v-.08a1 1 0 0 1 1-1 1 1 0 0 1 1 1c0 .55-.45 1.04-1 1.04m7.14-2.82q-.4 0-.71-.29l-.13-.13a1 1 0 1 1 1.41-1.41l.13.13a1 1 0 0 1-.7 1.7m-14.28 0q-.4 0-.71-.29a1 1 0 0 1 0-1.41l.13-.13a1 1 0 1 1 1.41 1.41l-.13.13a1 1 0 0 1-.7.29M22 13h-.08a1 1 0 0 1-1-1 1 1 0 0 1 1-1c.55 0 1.04.45 1.04 1s-.41 1-.96 1M2.08 13H2a1 1 0 0 1-1-1 1 1 0 0 1 1-1c.55 0 1.04.45 1.04 1s-.41 1-.96 1m16.93-7.01q-.4 0-.71-.29a1 1 0 0 1 0-1.41l.13-.13a1 1 0 1 1 1.41 1.41l-.13.13a1 1 0 0 1-.7.29m-14.02 0q-.4 0-.71-.29l-.13-.14a1 1 0 1 1 1.41-1.41l.13.13a1 1 0 0 1 0 1.41q-.3.3-.7.3M12 3.04c-.55 0-1-.41-1-.96V2a1 1 0 0 1 1-1 1 1 0 0 1 1 1c0 .55-.45 1.04-1 1.04"
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
            d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14"
            fill="currentColor"
          />
          <path
            d="M12 22.96c-.55 0-1-.41-1-.96v-.08a1 1 0 0 1 1-1 1 1 0 0 1 1 1c0 .55-.45 1.04-1 1.04m7.14-2.82q-.4 0-.71-.29l-.13-.13a1 1 0 1 1 1.41-1.41l.13.13a1 1 0 0 1-.7 1.7m-14.28 0q-.4 0-.71-.29a1 1 0 0 1 0-1.41l.13-.13a1 1 0 1 1 1.41 1.41l-.13.13a1 1 0 0 1-.7.29M22 13h-.08a1 1 0 0 1-1-1 1 1 0 0 1 1-1c.55 0 1.04.45 1.04 1s-.41 1-.96 1M2.08 13H2a1 1 0 0 1-1-1 1 1 0 0 1 1-1c.55 0 1.04.45 1.04 1s-.41 1-.96 1m16.93-7.01q-.4 0-.71-.29a1 1 0 0 1 0-1.41l.13-.13a1 1 0 1 1 1.41 1.41l-.13.13a1 1 0 0 1-.7.29m-14.02 0q-.4 0-.71-.29l-.13-.14a1 1 0 1 1 1.41-1.41l.13.13a1 1 0 0 1 0 1.41q-.3.3-.7.3M12 3.04c-.55 0-1-.41-1-.96V2a1 1 0 0 1 1-1 1 1 0 0 1 1 1c0 .55-.45 1.04-1 1.04"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSunDots;
