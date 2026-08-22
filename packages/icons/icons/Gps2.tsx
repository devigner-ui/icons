import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGps2 = forwardRef<SVGSVGElement, IconProps>(function IconGps2(
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
            d="M12.67 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 4V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.67 12h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 20v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.67 12h2"
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
            d="M12.67 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
            fill="currentColor"
          />
          <path
            d="M12.67 15.12a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24"
            fill="currentColor"
          />
          <path
            d="M13.42 2v2.04h-.01a6 6 0 0 0-1.48 0h-.01V2c0-.41.34-.75.75-.75s.75.34.75.75"
            fill="currentColor"
          />
          <path
            d="M4.67 12q0 .38.04.75H2.67a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.04q-.04.37-.04.75"
            fill="currentColor"
          />
          <path
            d="M13.42 19.96V22c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-2.04h.01a6 6 0 0 0 1.48 0z"
            fill="currentColor"
          />
          <path
            d="M23.42 12c0 .41-.34.75-.75.75h-2.04a6 6 0 0 0 0-1.5h2.04c.41 0 .75.34.75.75"
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
          <g clipPath="url(#clip0_12_64954)">
            <path
              d="M22.67 11.25h-2.04a8 8 0 0 0-7.21-7.21V2a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v2.04a8 8 0 0 0-7.21 7.21H2.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.04a8 8 0 0 0 7.21 7.21V22c0 .41.34.75.75.75s.75-.34.75-.75v-2.04a8 8 0 0 0 7.21-7.21h2.04c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75m-10 3.87a3.12 3.12 0 1 1 0-6.25 3.12 3.12 0 0 1 0 6.25"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath>
              <rect
                width="24"
                height="24"
                fill="none"
                transform="translate(0.669922)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
});

export default IconGps2;
