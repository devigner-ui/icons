import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHtml3 = forwardRef<SVGSVGElement, IconProps>(function IconHtml3(
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
            d="M4.79 2h15.77a1 1 0 0 1 .99 1.11l-1.8 16.22a1 1 0 0 1-.72.85l-6.08 1.74q-.27.08-.55 0l-6.08-1.74a1 1 0 0 1-.72-.85L3.8 3.11A1 1 0 0 1 4.79 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m8.17 6.98 9 .02-1 9-3.5 1-3.5-1-.5-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.67 11h8.06"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M4.79 2h15.77a1 1 0 0 1 .99 1.11l-1.8 16.22a1 1 0 0 1-.72.85l-6.08 1.74q-.27.08-.55 0l-6.08-1.74a1 1 0 0 1-.72-.85L3.8 3.11A1 1 0 0 1 4.79 2"
            fill="currentColor"
          />
          <path
            d="M17.73 6.5a.7.7 0 0 0-.56-.25l-9-.02a.75.75 0 1 0 0 1.5l8.16.02-.28 2.5H8.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h7.22l-.41 3.67-2.81.8-2.88-.82-.4-1.58a.76.76 0 0 0-.91-.55c-.4.1-.65.51-.55.91l.5 2c.06.26.26.47.52.54l3.5 1a1 1 0 0 0 .42 0l3.5-1a.7.7 0 0 0 .54-.64l1-9a.7.7 0 0 0-.18-.58"
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
            d="M20.55 2H4.79a1 1 0 0 0-.99 1.11l1.8 16.22a1 1 0 0 0 .72.85l6.08 1.74q.28.08.55 0l6.08-1.74a1 1 0 0 0 .72-.85l1.8-16.22a1 1 0 0 0-1-1.11m-3.63 14.08a.8.8 0 0 1-.54.64l-3.5 1a1 1 0 0 1-.42 0l-3.5-1a.7.7 0 0 1-.52-.54l-.5-2c-.1-.4.14-.81.55-.91.4-.1.81.14.91.55l.4 1.58 2.88.82 2.81-.8.41-3.67H8.67a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h7.38l.28-2.5-8.16-.02a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75l9 .02a.75.75 0 0 1 .75.83z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHtml3;
