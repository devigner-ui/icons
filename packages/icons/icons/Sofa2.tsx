import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSofa2 = forwardRef<SVGSVGElement, IconProps>(function IconSofa2(
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
            d="M5.56 18h12.88c1.97 0 3.56-1.6 3.56-3.56V12a2 2 0 0 0-4 0v1.2a.8.8 0 0 1-.8.8H6.8a.8.8 0 0 1-.8-.8V12a2 2 0 0 0-4 0v2.44C2 16.41 3.6 18 5.56 18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m16.78 5.08-.15.73zm3.14 3.14.74-.15zM7.22 5.08l.15.73zM4.08 8.22l.73.15zM9 5.75h6v-1.5H9zm6 0c.97 0 1.34 0 1.63.06l.3-1.47c-.48-.1-1.04-.09-1.93-.09zM20.75 10c0-.9 0-1.45-.1-1.93l-1.46.3c.06.3.06.66.06 1.63zm-4.12-4.19a3.3 3.3 0 0 1 2.56 2.56l1.47-.3a4.8 4.8 0 0 0-3.73-3.73zM9 4.25a10 10 0 0 0-1.93.1l.3 1.46c.3-.06.66-.06 1.63-.06zM4.75 10c0-.97 0-1.34.06-1.63l-1.47-.3c-.1.48-.09 1.04-.09 1.93zm2.32-5.66a4.8 4.8 0 0 0-3.73 3.73l1.47.3A3.3 3.3 0 0 1 7.37 5.8zm4.18.66v9h1.5V5z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 19v-1M4 19v-1"
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
            d="M12.75 14h4.45a.8.8 0 0 0 .8-.8V12a2 2 0 0 1 4 0v2.44c0 1.09-.49 2.06-1.25 2.71V19a.75.75 0 0 1-1.5 0v-1.1q-.4.1-.8.1H5.54q-.4 0-.8-.1V19a.75.75 0 0 1-1.5 0v-1.85A3.6 3.6 0 0 1 2 14.45V12a2 2 0 0 1 4 0v1.2c0 .44.36.8.8.8h4.45V5h1.5z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M17.2 14h-4.45V5H15c.93 0 1.4 0 1.78.08A4 4 0 0 1 19.99 9H20v1a2 2 0 0 0-2 2v1.2a.8.8 0 0 1-.8.8"
              fill="currentColor"
            />
            <path
              d="M11.25 14H6.8a.8.8 0 0 1-.8-.8V12a2 2 0 0 0-2-2V9q.02-.48.08-.78a4 4 0 0 1 3.14-3.14C7.61 5 8.07 5 9 5h2.25z"
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
            d="M7 13v-1a3 3 0 0 0-3-3q.02-.48.08-.78a4 4 0 0 1 3.14-3.14C7.61 5 8.07 5 9 5h2.25v8z"
            fill="currentColor"
          />
          <path
            d="M12.75 13H17v-1a3 3 0 0 1 3-3q-.02-.48-.08-.78a4 4 0 0 0-3.14-3.14C16.39 5 15.93 5 15 5h-2.25z"
            fill="currentColor"
          />
          <path
            d="M18.44 18H5.56q-.42 0-.81-.1V19a.75.75 0 0 1-1.5 0v-1.85A3.6 3.6 0 0 1 2 14.45V12a2 2 0 0 1 4 0v1.2c0 .44.36.8.8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 0 1 4 0v2.44c0 1.09-.49 2.06-1.25 2.71V19a.75.75 0 0 1-1.5 0v-1.1q-.4.1-.8.1"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSofa2;
