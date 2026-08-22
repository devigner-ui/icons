import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconScanner = forwardRef<SVGSVGElement, IconProps>(function IconScanner(
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
            d="M10 22c-3.77 0-5.66 0-6.83-1.17S2 18.77 2 15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 15c0 3.77 0 4.66-1.17 5.83S17.77 22 14 22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14 2c3.77 0 5.66 0 6.83 1.17S22 5.23 22 9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 2C6.23 2 4.34 2 3.17 3.17S2 5.23 2 9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M2 12h20"
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
            opacity={duotone ? "0.4" : "1"}
            d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46"
            fill="currentColor"
          />
          <path
            d="M10 5.75a.75.75 0 1 0 0-1.5q-1.62-.02-2.72.16c-.75.13-1.4.38-1.92.88-.45.44-.76.88-.92 1.5A9 9 0 0 0 4.25 9a.75.75 0 1 0 1.5.02 8 8 0 0 1 .14-1.83c.08-.3.2-.51.5-.8.25-.23.58-.4 1.15-.5.6-.1 1.37-.12 2.46-.13"
            fill="currentColor"
          />
          <path
            d="M14 4.25a.75.75 0 0 0 0 1.5c1.09 0 1.87.03 2.46.14.57.1.9.26 1.14.49.3.29.43.5.51.8.1.36.13.88.14 1.83a.75.75 0 0 0 1.5-.02c0-.92-.04-1.62-.19-2.2a3 3 0 0 0-.92-1.5 3.5 3.5 0 0 0-1.92-.88A18 18 0 0 0 14 4.25"
            fill="currentColor"
          />
          <path
            d="M5 11.25a.75.75 0 0 0 0 1.5h14a.75.75 0 1 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M5.75 15a.75.75 0 0 0-1.5 0c0 .93.04 1.63.19 2.2a3 3 0 0 0 .92 1.5c.53.5 1.17.76 1.92.89.74.13 1.63.15 2.72.16a.75.75 0 0 0 0-1.5c-1.09 0-1.87-.03-2.46-.14-.57-.1-.9-.26-1.14-.49a1.6 1.6 0 0 1-.51-.8 8 8 0 0 1-.14-1.83"
            fill="currentColor"
          />
          <path
            d="M19.75 15a.75.75 0 1 0-1.5 0c0 .94-.04 1.46-.14 1.82-.08.3-.2.51-.5.8-.25.23-.58.4-1.15.5-.6.1-1.37.12-2.46.13a.75.75 0 0 0 0 1.5q1.62.02 2.72-.16c.75-.13 1.4-.38 1.92-.88.45-.44.76-.88.92-1.5.15-.58.18-1.28.19-2.2"
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
            d="M2 12c0-4.7 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12m8-6.25a.75.75 0 1 0 0-1.5q-1.62-.02-2.72.16c-.75.13-1.4.38-1.92.88-.45.44-.76.88-.92 1.5A9 9 0 0 0 4.25 9a.75.75 0 1 0 1.5.02 8 8 0 0 1 .14-1.83c.08-.3.2-.51.5-.8.25-.23.58-.4 1.15-.5.6-.1 1.37-.12 2.46-.13m4-1.5a.75.75 0 0 0 0 1.5c1.09 0 1.87.03 2.46.14.57.1.9.26 1.14.49.3.29.43.5.51.8.1.36.13.88.14 1.83a.75.75 0 0 0 1.5-.02c0-.92-.04-1.62-.19-2.2a3 3 0 0 0-.92-1.5 3.5 3.5 0 0 0-1.92-.88A18 18 0 0 0 14 4.26m-9 7a.75.75 0 0 0 0 1.5h14a.75.75 0 1 0 0-1.5zM5.75 15a.75.75 0 0 0-1.5.02c0 .92.04 1.62.19 2.2.16.62.47 1.06.92 1.5.53.5 1.17.75 1.92.88.74.13 1.63.15 2.72.16a.75.75 0 0 0 0-1.5c-1.09 0-1.87-.03-2.46-.14-.57-.1-.9-.26-1.14-.49a1.6 1.6 0 0 1-.51-.8A8 8 0 0 1 5.75 15m14 .02a.75.75 0 1 0-1.5-.02c0 .95-.04 1.47-.14 1.83-.08.3-.2.51-.5.8-.25.23-.58.4-1.15.5-.6.1-1.37.12-2.46.13a.75.75 0 0 0 0 1.5q1.62.02 2.72-.16c.75-.13 1.4-.38 1.92-.88.45-.44.76-.88.92-1.5.15-.58.18-1.28.19-2.2"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconScanner;
