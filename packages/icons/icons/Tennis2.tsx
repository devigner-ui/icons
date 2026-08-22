import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTennis2 = forwardRef<SVGSVGElement, IconProps>(function IconTennis2(
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
            d="M3.34 17A10 10 0 1 0 20.66 7 10 10 0 0 0 3.34 17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.2 2.07s-1.1 4.1 1.4 8.43 6.6 5.43 6.6 5.43M2.8 8.07s4.1 1.1 6.6 5.43 1.4 8.43 1.4 8.43"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray="1.5 2"
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
            d="M3.34 17A10 10 0 1 0 20.66 7 10 10 0 0 0 3.34 17"
            fill="currentColor"
          />
          <path
            d="M13.94 2.19a10 10 0 0 0-1.5-.18 7 7 0 0 0-.15.9.75.75 0 0 0 1.49.17l.13-.78v-.03h.01z"
            fill="currentColor"
          />
          <path
            d="M2.53 8.78a10 10 0 0 1 .6-1.4 7 7 0 0 1 .85.32.75.75 0 0 1-.6 1.38 8 8 0 0 0-.77-.28z"
            fill="currentColor"
          />
          <path
            d="M11.56 22a10 10 0 0 1-1.5-.19l.02-.07v-.01l.04-.19q.05-.21.1-.62a.75.75 0 0 1 1.49.18 10 10 0 0 1-.15.9"
            fill="currentColor"
          />
          <path
            d="M21.47 15.22a10 10 0 0 1-.6 1.4 7 7 0 0 1-.85-.32.75.75 0 1 1 .6-1.38l.73.27.04.01z"
            fill="currentColor"
          />
          <path
            d="M13.75 5.41a.75.75 0 1 0-1.49.14q.08.9.33 1.96a.75.75 0 1 0 1.46-.36q-.23-.93-.3-1.74"
            fill="currentColor"
          />
          <path
            d="M6.28 9a.75.75 0 1 0-.86 1.23q.67.46 1.35 1.12a.75.75 0 0 0 1.05-1.09Q7.03 9.53 6.28 9"
            fill="currentColor"
          />
          <path
            d="M14.84 9.35a.75.75 0 1 0-1.36.65 13 13 0 0 0 1 1.72.75.75 0 0 0 1.24-.85 12 12 0 0 1-.88-1.52"
            fill="currentColor"
          />
          <path
            d="M9.52 12.28a.75.75 0 0 0-1.24.85 12 12 0 0 1 .88 1.52.75.75 0 0 0 1.35-.65 13 13 0 0 0-.99-1.72"
            fill="currentColor"
          />
          <path
            d="M17.22 12.66a.75.75 0 1 0-1.04 1.08q.78.73 1.54 1.26a.75.75 0 1 0 .86-1.23q-.66-.46-1.36-1.11"
            fill="currentColor"
          />
          <path
            d="M11.41 16.5a.75.75 0 1 0-1.46.35q.23.93.3 1.74a.75.75 0 1 0 1.49-.14q-.08-.9-.33-1.96"
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
            d="M13.78 3.08q.05-.4.1-.62l.05-.27a9.97 9.97 0 0 1 7.53 13.04l-.11-.04a5 5 0 0 1-.74-.27.75.75 0 1 0-.59 1.38 10 10 0 0 0 .85.31A10 10 0 0 1 11.56 22a7 7 0 0 0 .15-.9.75.75 0 0 0-1.49-.17q-.05.4-.1.62l-.07.27A9.97 9.97 0 0 1 2.54 8.77l.85.31a.75.75 0 1 0 .59-1.38 10 10 0 0 0-.85-.31A10 10 0 0 1 12.44 2a7 7 0 0 0-.15.9.75.75 0 0 0 1.49.17m-.84 1.66c.41-.04.78.26.81.68q.07.8.3 1.73a.75.75 0 1 1-1.46.36q-.26-1.05-.33-1.96a.75.75 0 0 1 .68-.81m-7.7 4.44A.75.75 0 0 1 6.3 9q.75.52 1.53 1.27a.75.75 0 1 1-1.04 1.08q-.7-.66-1.36-1.12a.75.75 0 0 1-.18-1.05m8.6-.18a.75.75 0 0 1 1 .35 12 12 0 0 0 .88 1.52.75.75 0 1 1-1.24.85 13 13 0 0 1-1-1.72.75.75 0 0 1 .36-1m-5.36 3.09a.75.75 0 0 1 1.04.2 13 13 0 0 1 1 1.71.75.75 0 0 1-1.36.65 12 12 0 0 0-.88-1.52.75.75 0 0 1 .2-1.04m7.68.59c.3-.3.77-.31 1.06-.02q.7.65 1.36 1.11A.75.75 0 0 1 17.7 15q-.75-.53-1.53-1.26a.75.75 0 0 1-.02-1.06m-5.66 3.26c.4-.1.81.15.91.55q.26 1.05.33 1.96a.75.75 0 0 1-1.5.13q-.06-.8-.28-1.73c-.1-.4.14-.8.54-.9"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTennis2;
