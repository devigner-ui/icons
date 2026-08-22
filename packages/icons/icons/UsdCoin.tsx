import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUsdCoin = forwardRef<SVGSVGElement, IconProps>(function IconUsdCoin(
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
            d="M17.62 16.95a7 7 0 0 0 0-9.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.72 7.05a7 7 0 0 0 0 9.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M10.34 13.63c0 .9.7 1.63 1.56 1.63h1.76a1.4 1.4 0 0 0 1.36-1.42c0-.85-.37-1.16-.93-1.35l-2.81-.98c-.55-.19-.93-.5-.93-1.35 0-.79.61-1.42 1.36-1.42h1.76c.86 0 1.56.73 1.56 1.63"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 7.8v8.4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
          <path d="M24.67 0h-24v24h24z" fill="none" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            fill="currentColor"
          />
          <path
            d="M17.62 17.7a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06A6.2 6.2 0 0 0 18.92 12c0-1.67-.65-3.24-1.83-4.42a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0 7.7 7.7 0 0 1 0 10.96.7.7 0 0 1-.53.22"
            fill="currentColor"
          />
          <path
            d="M7.72 17.7a.7.7 0 0 1-.53-.22 7.7 7.7 0 0 1 0-10.96.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06A6.2 6.2 0 0 0 6.42 12c0 1.67.65 3.24 1.83 4.42.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22"
            fill="currentColor"
          />
          <path
            d="m14.32 11.78-.9-.32V9.48h.03c.44 0 .81.4.81.88 0 .41.34.75.75.75s.75-.34.75-.75a2.35 2.35 0 0 0-2.31-2.38h-.03V7.8a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v.18h-.23c-1.16 0-2.11.98-2.11 2.17q0 1.56 1.43 2.06l.9.32v1.98h-.03c-.44 0-.81-.4-.81-.88a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75 2.35 2.35 0 0 0 2.31 2.38h.03v.18c0 .41.34.75.75.75s.75-.34.75-.75v-.18h.23c1.16 0 2.11-.98 2.11-2.17q.01-1.56-1.43-2.06m-2.81-.98c-.32-.11-.43-.17-.43-.64 0-.37.27-.67.61-.67h.23v1.46zm2.14 3.72h-.23v-1.46l.41.14c.32.11.43.17.43.64-.01.37-.28.68-.61.68"
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
            d="M13.42 14.52h.23c.33 0 .61-.3.61-.67 0-.47-.11-.53-.43-.64l-.41-.14z"
            fill="currentColor"
          />
          <path
            d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M8.25 16.42c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22 7.7 7.7 0 0 1 0-10.96.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06A6.2 6.2 0 0 0 6.42 12c0 1.67.65 3.24 1.83 4.42m6.07-4.64q1.44.5 1.43 2.06c0 1.2-.94 2.17-2.11 2.17h-.23v.18c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.18h-.03a2.35 2.35 0 0 1-2.31-2.38c0-.41.34-.75.75-.75s.75.34.75.75c0 .49.36.88.81.88h.03v-1.98l-.9-.32q-1.44-.5-1.43-2.06c0-1.2.94-2.17 2.11-2.17h.23V7.8c0-.41.34-.75.75-.75s.75.34.75.75v.18h.03a2.35 2.35 0 0 1 2.31 2.38c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75c0-.49-.36-.88-.81-.88h-.03v1.98zm3.83 5.7a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06A6.2 6.2 0 0 0 18.92 12c0-1.67-.65-3.24-1.83-4.42a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0 7.7 7.7 0 0 1 0 10.96"
            fill="currentColor"
          />
          <path
            d="M11.09 10.16c0 .47.11.53.43.64l.41.14V9.48h-.23c-.34 0-.61.31-.61.68"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconUsdCoin;
