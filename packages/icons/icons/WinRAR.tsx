import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWinRAR = forwardRef<SVGSVGElement, IconProps>(function IconWinRAR(
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
            d="m12.27 3-.12.23C12 3.6 12 4.07 12 5v4m.27-6a2 2 0 0 1 .96-.85C13.6 2 14.07 2 15 2s1.4 0 1.77.15a2 2 0 0 1 .96.85m-5.46 0H5c-.93 0-1.4 0-1.77.15a2 2 0 0 0-1.08 1.08C2 4.6 2 5.07 2 6s0 1.4.15 1.77a2 2 0 0 0 1.08 1.08C3.6 9 4.07 9 5 9h7m5.73-6H19c.93 0 1.4 0 1.77.15a2 2 0 0 1 1.08 1.08C22 4.6 22 5.07 22 6s0 1.4-.15 1.77a2 2 0 0 1-1.08 1.08C20.4 9 19.93 9 19 9h-1m-.27-6 .12.23C18 3.6 18 4.07 18 5v4m0 0v6m-6-6v6m6 0v4c0 .93 0 1.4-.15 1.77l-.12.23m.27-6h1c.93 0 1.4 0 1.77.15a2 2 0 0 1 1.08 1.08c.15.37.15.84.15 1.77s0 1.4-.15 1.77a2 2 0 0 1-1.08 1.08c-.37.15-.84.15-1.77.15h-1.27M12 15H5c-.93 0-1.4 0-1.77.15a2 2 0 0 0-1.08 1.08C2 16.6 2 17.07 2 18s0 1.4.15 1.77a2 2 0 0 0 1.08 1.08C3.6 21 4.07 21 5 21h7.27M12 15v4c0 .93 0 1.4.15 1.77l.12.23m0 0a2 2 0 0 0 .96.85c.37.15.84.15 1.77.15s1.4 0 1.77-.15a2 2 0 0 0 .96-.85"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5 9c-.93 0-1.4 0-1.77.15a2 2 0 0 0-1.08 1.08C2 10.6 2 11.07 2 12s0 1.4.15 1.77a2 2 0 0 0 1.08 1.08C3.6 15 4.07 15 5 15m14-6c.93 0 1.4 0 1.77.15a2 2 0 0 1 1.08 1.08c.15.37.15.84.15 1.77s0 1.4-.15 1.77a2 2 0 0 1-1.08 1.08c-.37.15-.84.15-1.77.15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 11v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
          <g fill="currentColor" opacity={duotone ? "0.3" : "1"}>
            <path d="M4.67 9c-.94 0-1.4 0-1.77-.15a2 2 0 0 1-1.08-1.08c-.15-.37-.15-.84-.15-1.77s0-1.4.15-1.76A2 2 0 0 1 2.9 3.15C3.27 3 3.73 3 4.67 3h7.26l-.11.24c-.15.36-.15.83-.15 1.76v4zm17-3c0 .93 0 1.4-.16 1.77a2 2 0 0 1-1.08 1.08c-.37.15-.83.15-1.76.15h-1V5c0-.93 0-1.4-.16-1.76L17.4 3h1.27a5 5 0 0 1 1.76.15 2 2 0 0 1 1.08 1.09A5 5 0 0 1 21.67 6" />
          </g>
          <g fill="currentColor" opacity={duotone ? "0.7" : "1"}>
            <path d="M17.51 20.77a5 5 0 0 0 .16-1.77v-4h1a5 5 0 0 1 1.76.15 2 2 0 0 1 1.08 1.08c.16.37.16.84.16 1.77s0 1.4-.16 1.77a2 2 0 0 1-1.08 1.08 5 5 0 0 1-1.76.15H17.4zm-5.58.23H4.67c-.94 0-1.4 0-1.77-.15a2 2 0 0 1-1.08-1.09c-.15-.36-.15-.83-.15-1.76s0-1.4.15-1.76a2 2 0 0 1 1.08-1.09c.37-.15.83-.15 1.77-.15h7v4a5 5 0 0 0 .15 1.77z" />
          </g>
          <g fill="currentColor" opacity={duotone ? "0.5" : "1"}>
            <path d="M17.67 9h1a5 5 0 0 1 1.76.15 2 2 0 0 1 1.08 1.08c.16.37.16.84.16 1.77s0 1.4-.16 1.77a2 2 0 0 1-1.08 1.08 5 5 0 0 1-1.76.15h-1zm-6 0v6h-7c-.94 0-1.4 0-1.77-.15a2 2 0 0 1-1.08-1.08c-.15-.37-.15-.84-.15-1.77s0-1.4.15-1.76A2 2 0 0 1 2.9 9.15C3.27 9 3.73 9 4.67 9z" />
          </g>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M17.51 3.24A5 5 0 0 1 17.67 5v14c0 .93 0 1.4-.16 1.77a2 2 0 0 1-1.08 1.08c-.37.15-.83.15-1.76.15s-1.4 0-1.77-.15a2 2 0 0 1-1.08-1.09c-.15-.36-.15-.83-.15-1.76V5c0-.93 0-1.4.15-1.76l.11-.24a2 2 0 0 1 .97-.85c.37-.15.83-.15 1.77-.15s1.4 0 1.76.15a2 2 0 0 1 1.08 1.09M15.41 11a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
            clipRule="evenodd"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.85 3.23C18 3.6 18 4.07 18 5v14c0 .93 0 1.4-.15 1.77a2 2 0 0 1-1.08 1.08c-.37.15-.84.15-1.77.15s-1.4 0-1.77-.15a2 2 0 0 1-1.08-1.08C12 20.4 12 19.93 12 19V5c0-.93 0-1.4.15-1.77a2 2 0 0 1 1.08-1.08C13.6 2 14.07 2 15 2s1.4 0 1.77.15a2 2 0 0 1 1.08 1.08M15.75 11a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
            fill="currentColor"
          />
          <path
            d="M10.65 21a4 4 0 0 1-.13-.8q-.02-.5-.02-1.16V4.96q0-.65.02-1.16a4 4 0 0 1 .13-.8H5c-.93 0-1.4 0-1.77.15a2 2 0 0 0-1.08 1.08C2 4.6 2 5.07 2 6s0 1.4.15 1.77a2 2 0 0 0 1.08 1.08C3.6 9 4.07 9 5 9c-.93 0-1.4 0-1.77.15a2 2 0 0 0-1.08 1.08C2 10.6 2 11.07 2 12s0 1.4.15 1.77a2 2 0 0 0 1.08 1.08C3.6 15 4.07 15 5 15c-.93 0-1.4 0-1.77.15a2 2 0 0 0-1.08 1.08C2 16.6 2 17.07 2 18s0 1.4.15 1.77a2 2 0 0 0 1.08 1.08C3.6 21 4.07 21 5 21z"
            fill="currentColor"
          />
          <path
            d="M19.35 21c.7 0 1.1-.02 1.42-.15a2 2 0 0 0 1.08-1.08c.15-.37.15-.84.15-1.77s0-1.4-.15-1.77a2 2 0 0 0-1.08-1.08c-.3-.12-.66-.14-1.27-.15v4.04q0 .66-.02 1.16a4 4 0 0 1-.13.8"
            fill="currentColor"
          />
          <path
            d="M19.5 15c.61 0 .97-.03 1.27-.15a2 2 0 0 0 1.08-1.08c.15-.37.15-.84.15-1.77s0-1.4-.15-1.77a2 2 0 0 0-1.08-1.08c-.3-.12-.66-.14-1.27-.15z"
            fill="currentColor"
          />
          <path
            d="M19.5 9c.61 0 .97-.03 1.27-.15a2 2 0 0 0 1.08-1.08C22 7.4 22 6.93 22 6s0-1.4-.15-1.77a2 2 0 0 0-1.08-1.08A4 4 0 0 0 19.35 3a4 4 0 0 1 .13.8q.02.5.02 1.16z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWinRAR;
