import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSun = forwardRef<SVGSVGElement, IconProps>(function IconSun(
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
          <circle
            cx="12"
            cy="12"
            r="6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 2v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 21v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M22 12h-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M3 12H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m19.07 4.93-.4.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m5.32 18.68-.4.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m19.07 19.07-.4-.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m5.32 5.32-.4-.4"
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
          <path d="M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75M1.25 12c0-.41.34-.75.75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0c0-.41.34-.75.75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75M12 20.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M4.4 4.4c.3-.3.77-.3 1.06 0l.4.4a.75.75 0 0 1-1.07 1.05l-.4-.4a.75.75 0 0 1 0-1.05"
              fill="currentColor"
            />
            <path
              d="M19.6 4.4c.3.3.3.77 0 1.06l-.4.4a.75.75 0 0 1-1.05-1.07l.39-.4a.77.77 0 0 1 1.06 0"
              fill="currentColor"
            />
            <path
              d="M18.15 18.15c.29-.3.77-.3 1.06 0l.4.39a.75.75 0 0 1-1.07 1.06l-.4-.4a.75.75 0 0 1 0-1.05"
              fill="currentColor"
            />
            <path
              d="M5.85 18.15c.3.3.3.77 0 1.06l-.4.4a.75.75 0 1 1-1.05-1.07l.4-.4a.74.74 0 0 1 1.05 0"
              fill="currentColor"
            />
          </g>
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
          <path d="M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75M4.4 4.4c.3-.3.77-.3 1.06 0l.4.4a.75.75 0 0 1-1.07 1.05l-.4-.4a.75.75 0 0 1 0-1.05m15.2 0c.3.3.3.77 0 1.06l-.4.4a.75.75 0 0 1-1.05-1.07l.4-.4a.76.76 0 0 1 1.05 0M1.25 12c0-.41.34-.75.75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0c0-.41.34-.75.75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-2.1 6.15c.3-.3.77-.3 1.06 0l.4.4a.75.75 0 1 1-1.07 1.05l-.4-.4a.75.75 0 0 1 0-1.05m-12.3 0c.3.3.3.77 0 1.06l-.4.4a.75.75 0 1 1-1.05-1.07l.4-.4a.74.74 0 0 1 1.05 0m6.15 2.1c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSun;
