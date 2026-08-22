import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBus2 = forwardRef<SVGSVGElement, IconProps>(function IconBus2(
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
            d="M17.57 22h-9.8a3.1 3.1 0 0 1-3.1-3.1V5.1A3.1 3.1 0 0 1 7.77 2h9.8a3.1 3.1 0 0 1 3.1 3.1v13.8a3.1 3.1 0 0 1-3.1 3.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.17 13h-13a1.5 1.5 0 0 1-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5h13c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.17 5h5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.16 17.7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.16 17.7h.01"
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
            d="M17.57 22h-9.8a3.1 3.1 0 0 1-3.1-3.1V5.1A3.1 3.1 0 0 1 7.77 2h9.8a3.1 3.1 0 0 1 3.1 3.1v13.8a3.1 3.1 0 0 1-3.1 3.1"
            fill="currentColor"
          />
          <path d="M20.67 8h-16v5h16z" fill="currentColor" />
          <path
            d="m8.67 18.75-.24-.02-.24-.08-.21-.11-.19-.16a1.2 1.2 0 0 1-.37-.88q0-.51.37-.88.08-.09.19-.16a1 1 0 0 1 .45-.19 1.26 1.26 0 0 1 1.49 1.23q0 .51-.37.88c-.23.24-.55.37-.88.37"
            fill="currentColor"
          />
          <path
            d="m16.67 18.75-.24-.02q-.12-.02-.24-.08l-.21-.11-.19-.16a1.2 1.2 0 0 1-.37-.88q0-.51.37-.88.08-.09.19-.16l.21-.11.24-.08q.24-.05.49 0 .1.02.23.08l.21.11q.11.07.19.16.37.37.37.88t-.37.88l-.19.16-.21.11-.23.08z"
            fill="currentColor"
          />
          <path
            d="M15.17 5.75h-5A.76.76 0 0 1 9.42 5c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M4.67 13.5v5.4a3.1 3.1 0 0 0 3.1 3.1h9.8a3.1 3.1 0 0 0 3.1-3.1v-5.4a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.5.5m4.88 4.88c-.23.24-.55.37-.88.37l-.24-.02-.24-.08-.21-.11q-.11-.07-.19-.16a1.2 1.2 0 0 1-.37-.88q0-.51.37-.88.08-.09.19-.16a1 1 0 0 1 .45-.19 1.26 1.26 0 0 1 1.49 1.23q0 .51-.37.88m8 0q-.08.09-.19.16l-.21.11-.23.08-.25.02-.24-.02q-.12-.02-.24-.08l-.21-.11q-.11-.07-.19-.16a1.2 1.2 0 0 1-.37-.88q0-.51.37-.88.08-.09.19-.16l.21-.11.24-.08q.24-.04.49 0 .1.02.23.08l.21.11q.11.07.19.16.37.37.37.88t-.37.88"
            fill="currentColor"
          />
          <path
            d="M17.57 2h-9.8a3.1 3.1 0 0 0-3.1 3.1v2.4c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V5.1a3.1 3.1 0 0 0-3.1-3.1m-2.4 3.75h-5A.76.76 0 0 1 9.42 5c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M20.17 12h-15a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5h15c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBus2;
