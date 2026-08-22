import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCabinet = forwardRef<SVGSVGElement, IconProps>(function IconCabinet(
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
            d="M19 22v-1.5M5 22v-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M15 12v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M9 12v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M2 10c0-3.77 0-5.66 1.17-6.83S6.23 2 10 2h4c3.77 0 5.66 0 6.83 1.17S22 6.23 22 10v2c0 3.77 0 5.66-1.17 6.83S17.77 20 14 20h-4c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 20V8M2 8h20"
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M2 9.75V8h9.24v11.75H10c-1.8 0-3.18 0-4.25-.13v2.13a.75.75 0 0 1-1.5 0v-2.47a3 3 0 0 1-1.08-.7C2 17.4 2 15.52 2 11.75z"
              fill="currentColor"
            />
            <path
              d="M22 8v3.75c0 3.77 0 5.66-1.17 6.83q-.45.45-1.08.7v2.47a.75.75 0 0 1-1.5 0v-2.13c-1.07.13-2.7.13-4.51.13h-1V8z"
              fill="currentColor"
            />
          </g>
          <path
            d="M15.75 11.75a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"
            fill="currentColor"
          />
          <path
            d="M9.75 11.75a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"
            fill="currentColor"
          />
          <path
            d="M3.17 2.92C2.33 3.77 2.1 4.98 2.03 7v1h9.22v11.75h1.5V8h9.22V7c-.06-2.02-.3-3.23-1.14-4.08-1.17-1.17-3.06-1.17-6.83-1.17h-4c-3.77 0-5.66 0-6.83 1.17"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 9.75V8.5h9.25v11.25H10c-1.8 0-3.18 0-4.25-.13v2.13a.75.75 0 0 1-1.5 0v-2.47a3 3 0 0 1-1.08-.7C2 17.4 2 15.52 2 11.75zM9 11c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            d="M21.97 7H2.03c.06-2.02.3-3.23 1.14-4.08C4.34 1.75 6.23 1.75 10 1.75h4c3.77 0 5.66 0 6.83 1.17.84.85 1.08 2.06 1.14 4.08"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.75 8.5H22v3.25c0 3.77 0 5.66-1.17 6.83q-.45.45-1.08.7v2.47a.75.75 0 0 1-1.5 0v-2.13c-1.07.13-2.44.13-4.25.13h-1.25zM15 11c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCabinet;
