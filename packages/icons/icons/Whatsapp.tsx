import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWhatsapp = forwardRef<SVGSVGElement, IconProps>(function IconWhatsapp(
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
            d="M7.61 20.63A10 10 0 1 0 4.01 17l-1.34 5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.67 15.17q0 .27-.13.55-.13.27-.34.51-.37.4-.82.59-.45.2-.98.19-.77 0-1.63-.37a9 9 0 0 1-1.72-.99 15 15 0 0 1-3.04-3.04 9 9 0 0 1-.98-1.71 4 4 0 0 1-.36-1.64q0-.51.18-.97t.58-.84q.48-.47 1.04-.47.21 0 .41.09t.34.28l1.16 1.64q.14.19.2.35.07.16.07.31 0 .18-.11.36t-.28.36l-.38.4a.3.3 0 0 0-.08.2l.02.12.04.1a4 4 0 0 0 .47.64 18 18 0 0 0 1.53 1.53q.4.33.65.46l.09.04q.06.03.13.02.13 0 .21-.09l.38-.38q.2-.2.36-.28a.7.7 0 0 1 .67-.04q.17.07.35.2l1.66 1.18q.2.14.28.32z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.61 20.63A10 10 0 0 0 12.67 22c5.63 0 10.31-4.97 9.98-10.59A10 10 0 1 0 4 17l-.89 3.31a1 1 0 0 0 1.23 1.22z"
            fill="currentColor"
          />
          <path
            d="M17.67 15.17q0 .27-.13.55-.13.27-.34.51-.37.4-.82.59-.45.2-.98.19-.77 0-1.63-.37a9 9 0 0 1-1.72-.99 15 15 0 0 1-3.04-3.04 9 9 0 0 1-.98-1.71 4 4 0 0 1-.36-1.64q0-.51.18-.97t.58-.84q.48-.48 1.04-.47.21 0 .41.09t.34.28L11.37 9q.14.19.2.35.07.16.07.31 0 .18-.11.36t-.28.36l-.38.4a.3.3 0 0 0-.08.2l.02.12.04.1a4 4 0 0 0 .47.64 18 18 0 0 0 1.53 1.53q.4.33.65.46l.09.04q.06.02.13.02.13 0 .21-.09l.38-.38q.2-.2.36-.28a.7.7 0 0 1 .67-.04q.17.07.35.2l1.66 1.18q.2.14.28.32.03.16.04.37"
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
            d="M22.65 11.41A10 10 0 1 0 4 17l-.89 3.31a1 1 0 0 0 1.23 1.22l3.26-.9A10 10 0 0 0 12.66 22c5.64 0 10.32-4.97 9.99-10.59m-5.1 4.31q-.13.27-.34.51-.37.4-.82.59-.45.2-.98.19-.77 0-1.63-.37a9 9 0 0 1-1.72-.99 15 15 0 0 1-3.04-3.04 9 9 0 0 1-.98-1.71 4 4 0 0 1-.36-1.64q0-.52.18-.97.18-.46.58-.84.48-.47 1.04-.47.21 0 .41.09t.34.28l1.16 1.64q.14.19.2.35.07.16.07.31 0 .18-.11.36t-.28.36l-.38.4a.3.3 0 0 0-.08.2l.02.12.04.1a4 4 0 0 0 .47.64 18 18 0 0 0 1.53 1.53q.4.33.65.46l.09.04q.06.03.13.02.13 0 .21-.09l.38-.38q.2-.2.36-.28a.7.7 0 0 1 .67-.04q.17.07.35.2l1.66 1.18q.2.14.28.32.08.19.08.39z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWhatsapp;
