import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStop = forwardRef<SVGSVGElement, IconProps>(function IconStop(
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
            d="M9.97 21h5.4c4.5 0 6.3-1.8 6.3-6.3V9.3c0-4.5-1.8-6.3-6.3-6.3h-5.4c-4.5 0-6.3 1.8-6.3 6.3v5.4c0 4.5 1.8 6.3 6.3 6.3"
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
            d="m21.57 7.66-.78.47-.49.3-.93.55-13.94 8.36-.09.05-.53.32-.61.37a9 9 0 0 1-.53-3.38V9.3c0-4.5 1.8-6.3 6.3-6.3h5.4c3.91 0 5.78 1.36 6.2 4.66"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.67 9.2v5.5c0 4.5-1.8 6.3-6.3 6.3h-5.4c-2.44 0-4.09-.53-5.07-1.74l.3-.18.61-.37.53-.32.09-.05 13.94-8.36.93-.55z"
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
            d="m21.03 7.78-15.82 9.5c-.61.37-1.43 0-1.51-.71L3.67 16V8c0-3 2-5 5-5h8c3 0 4.23 1.54 4.81 3.65.12.44-.07.9-.45 1.13"
            fill="currentColor"
          />
          <path
            d="M21.67 11.09V16c0 3-2 5-5 5h-8c-.92 0-1.79-.25-2.53-.69-.64-.37-.6-1.31.03-1.69l13.98-8.39a1 1 0 0 1 1.52.86"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconStop;
