import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUmbrella = forwardRef<SVGSVGElement, IconProps>(function IconUmbrella(
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
            d="M8.75 19a.75.75 0 0 0-1.5 0zm2.5-7v8h1.5v-8zm-2.5 8v-1h-1.5v1zM12 12.75h9.52v-1.5H12zm.48-11.5h-.96v1.5h.96zm-10 11.5H12v-1.5H2.48zm-1.23-1.23c0 .68.55 1.23 1.23 1.23v-1.5c.15 0 .27.12.27.27zm21.5 0c0-5.67-4.6-10.27-10.27-10.27v1.5a8.77 8.77 0 0 1 8.77 8.77zm-1.23 1.23c.68 0 1.23-.55 1.23-1.23h-1.5c0-.15.12-.27.27-.27zM10 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 22.75zm1.52-20c-5.67 0-10.27 4.6-10.27 10.27h1.5a8.77 8.77 0 0 1 8.77-8.77zM11.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 12.75 20z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.91 12C16.64 9.29 15.55 2 12 2S7.36 9.29 7.09 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M21.52 12H2.48a.5.5 0 0 1-.48-.48A9.5 9.5 0 0 1 11.52 2h.96A9.5 9.5 0 0 1 22 11.52c0 .27-.21.48-.48.48"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.25 20v-8h1.5v8a2.75 2.75 0 1 1-5.5 0v-1a.75.75 0 0 1 1.5 0v1a1.25 1.25 0 1 0 2.5 0"
            fill="currentColor"
          />
          <path
            d="M7.84 12c.14-1.35.48-3.73 1.18-5.77.36-1.04.8-1.94 1.33-2.57q.76-.91 1.65-.91.9 0 1.65.91c.52.63.97 1.53 1.33 2.57.7 2.04 1.04 4.42 1.18 5.77h1.5v-.08a29 29 0 0 0-1.27-6.18A10 10 0 0 0 14.8 2.7a5 5 0 0 0-.5-.53A10 10 0 0 0 12.48 2h-.96q-.93 0-1.82.17a5 5 0 0 0-.5.53 10 10 0 0 0-1.6 3.04 29 29 0 0 0-1.26 6.18V12z"
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
            d="M2.48 12a.5.5 0 0 1-.48-.48A9.5 9.5 0 0 1 9.16 2.3q-.22.3-.42.61a15 15 0 0 0-1.6 4.17A34 34 0 0 0 6.32 12z"
            fill="currentColor"
          />
          <path
            d="M22 11.52c0 .27-.21.48-.48.48h-3.85a39 39 0 0 0-.8-4.93c-.36-1.46-.87-3-1.61-4.17l-.42-.6A9.5 9.5 0 0 1 22 11.51"
            fill="currentColor"
          />
          <path
            d="M11.25 20v-8H7.83a38 38 0 0 1 .76-4.57c.35-1.41.81-2.76 1.42-3.74q.93-1.45 1.99-1.44 1.06-.02 1.99 1.44c.6.98 1.07 2.33 1.42 3.74a33 33 0 0 1 .76 4.57h-3.42v8a2.75 2.75 0 1 1-5.5 0v-1a.75.75 0 0 1 1.5 0v1a1.25 1.25 0 1 0 2.5 0"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconUmbrella;
