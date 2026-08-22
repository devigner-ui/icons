import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconModules = forwardRef<SVGSVGElement, IconProps>(function IconModules(
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
            d="M2.5 6.5a4 4 0 1 1 8 0v2.67c0 .3 0 .46-.03.59a1 1 0 0 1-.71.7c-.13.04-.28.04-.6.04H6.5a4 4 0 0 1-4-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.5 14.83c0-.3 0-.46.03-.59a1 1 0 0 1 .71-.7c.13-.04.28-.04.6-.04h2.66a4 4 0 1 1-4 4z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M2.5 17.5a4 4 0 0 1 4-4h2.4c.56 0 .84 0 1.05.11a1 1 0 0 1 .44.44c.11.21.11.49.11 1.05v2.4a4 4 0 0 1-8 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M13.5 6.5a4 4 0 1 1 4 4h-3.11a1 1 0 0 1-.88-.89l-.01-.25z"
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
            d="M2 17.5A4.5 4.5 0 0 1 6.5 13h2.7c.63 0 .95 0 1.19.12q.31.17.49.5c.12.24.12.55.12 1.18v2.7a4.5 4.5 0 1 1-9 0"
            fill="currentColor"
          />
          <path
            d="M13 6.5a4.5 4.5 0 1 1 4.5 4.5h-3.51a1.1 1.1 0 0 1-.98-1L13 9.71z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M2 6.5a4.5 4.5 0 0 1 9 0v3c0 .35 0 .52-.04.67-.1.38-.4.69-.8.8-.14.03-.31.03-.66.03h-3A4.5 4.5 0 0 1 2 6.5"
              fill="currentColor"
            />
            <path
              d="M13 14.5c0-.35 0-.52.04-.67.1-.38.4-.69.8-.8.14-.03.31-.03.66-.03h3a4.5 4.5 0 1 1-4.5 4.5z"
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
            d="M2 6.5a4.5 4.5 0 0 1 9 0v3c0 .35 0 .52-.04.67-.1.38-.4.69-.8.8-.14.03-.31.03-.66.03h-3A4.5 4.5 0 0 1 2 6.5"
            fill="currentColor"
          />
          <path
            d="M13 14.5c0-.35 0-.52.04-.67.1-.38.4-.69.8-.8.14-.03.31-.03.66-.03h3a4.5 4.5 0 1 1-4.5 4.5z"
            fill="currentColor"
          />
          <path
            d="M2 17.5A4.5 4.5 0 0 1 6.5 13h2.7c.63 0 .95 0 1.19.12q.31.17.49.5c.12.24.12.55.12 1.18v2.7a4.5 4.5 0 1 1-9 0"
            fill="currentColor"
          />
          <path
            d="M13 6.5a4.5 4.5 0 1 1 4.5 4.5h-3.51a1.1 1.1 0 0 1-.98-1L13 9.71z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconModules;
