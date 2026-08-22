import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSunrise = forwardRef<SVGSVGElement, IconProps>(function IconSunrise(
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
            d="M8 22h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5 19h14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 16h20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 6a6 6 0 0 0-4.5 9.97h9A6 6 0 0 0 12 6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="m12 10 .53-.53a.75.75 0 0 0-1.06 0zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm-4-1.06a.75.75 0 1 0 1.06 1.06zM12.75 16v-6h-1.5v6zm-1.28-5.47 2 2 1.06-1.06-2-2zm0-1.06-2 2 1.06 1.06 2-2z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 2v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 12h-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.25 22c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75M1.25 12c0-.41.34-.75.75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0c0-.41.34-.75.75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.25 12q.02 1.79.83 3.25H2a.75.75 0 0 0 0 1.5h9.25v-4.94l-.72.72a.75.75 0 1 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72v4.94H22a.75.75 0 0 0 0-1.5h-4.08q.81-1.46.83-3.25a6.75 6.75 0 0 0-13.5 0"
            fill="currentColor"
          />
          <path
            d="M12.53 9.47a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 1 0 1.06 1.06l.72-.72v4.94h1.5v-4.94l.72.72a.75.75 0 1 0 1.06-1.06z"
            fill="currentColor"
          />
          <path
            d="M4.25 19c0-.41.34-.75.75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75"
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.25 19c0-.41.34-.75.75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m3 3c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75M4.4 4.4c.3-.3.77-.3 1.06 0l.4.4a.75.75 0 0 1-1.07 1.05l-.4-.4a.75.75 0 0 1 0-1.05m15.2 0c.3.3.3.77 0 1.06l-.4.4a.75.75 0 0 1-1.05-1.07l.4-.4a.76.76 0 0 1 1.05 0M1.25 12c0-.41.34-.75.75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0c0-.41.34-.75.75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M5.25 12q.02 1.79.83 3.25H2a.75.75 0 0 0 0 1.5h9.25v-4.94l-.72.72a.75.75 0 1 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72v4.94H22a.75.75 0 0 0 0-1.5h-4.08q.81-1.46.83-3.25a6.75 6.75 0 0 0-13.5 0"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSunrise;
