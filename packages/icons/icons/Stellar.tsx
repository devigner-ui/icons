import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStellar = forwardRef<SVGSVGElement, IconProps>(function IconStellar(
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
            d="M17.03 4.99a8.25 8.25 0 0 0-12.32 9.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m2.67 16 20-11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M8.29 18.99a8.25 8.25 0 0 0 12.29-9.35"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m22.67 8.5-20 11"
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
          <path d="M24.67 0h-24v24h24z" fill="none" />
          <path
            d="M23.33 4.64a.76.76 0 0 0-1.02-.3L5.37 13.66q-.19-.82-.2-1.66a7.5 7.5 0 0 1 11.46-6.37.75.75 0 1 0 .79-1.27A9.01 9.01 0 0 0 3.99 14.39l.01.02-1.69.93a.75.75 0 1 0 .72 1.32l20-11c.36-.2.5-.66.3-1.02"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M23.33 8.14a.76.76 0 0 0-1.02-.3L20.2 9l-.1.06-17.79 9.78a.75.75 0 1 0 .72 1.32l17.03-9.37q.1.6.11 1.21a7.5 7.5 0 0 1-11.48 6.36.75.75 0 0 0-1.03.24.74.74 0 0 0 .24 1.03A9.01 9.01 0 0 0 21.68 12q-.02-1-.24-1.96l1.6-.88c.35-.2.49-.66.29-1.02"
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
            d="M23.33 4.64a.76.76 0 0 0-1.02-.3L5.37 13.66q-.19-.82-.2-1.66a7.5 7.5 0 0 1 11.46-6.37.75.75 0 1 0 .79-1.27A9.01 9.01 0 0 0 3.99 14.39l.01.02-1.69.93a.75.75 0 1 0 .72 1.32l20-11c.36-.2.5-.66.3-1.02"
            fill="currentColor"
          />
          <path
            d="M23.33 8.14a.76.76 0 0 0-1.02-.3L20.2 9l-.1.06-17.79 9.78a.75.75 0 1 0 .72 1.32l17.03-9.37q.1.6.11 1.21a7.5 7.5 0 0 1-11.48 6.36.75.75 0 0 0-1.03.24.74.74 0 0 0 .24 1.03A9.01 9.01 0 0 0 21.68 12q-.02-1-.24-1.96l1.6-.88c.35-.2.49-.66.29-1.02"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconStellar;
