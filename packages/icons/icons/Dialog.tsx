import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDialog = forwardRef<SVGSVGElement, IconProps>(function IconDialog(
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
            d="M10 22a8 8 0 1 0-7.22-4.55c.17.36.23.77.13 1.15l-.33 1.23a1.3 1.3 0 0 0 1.6 1.59l1.22-.33c.38-.1.8-.04 1.15.13q1.58.77 3.45.78"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18 14.5.2-.08q.56-.27 1.15-.13l.48.13a1.3 1.3 0 0 0 1.59-1.6l-.13-.47q-.14-.59.13-1.15.57-1.25.58-2.7A6.5 6.5 0 0 0 9.5 6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path d="M7.5 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path d="M11 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path
              d="M14.5 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 14a8 8 0 0 1-11.45 7.22 1.7 1.7 0 0 0-1.15-.13l-1.23.33a1.3 1.3 0 0 1-1.59-1.6l.33-1.22c.1-.38.04-.8-.13-1.15A8 8 0 1 1 18 14M6.5 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17.98 14.5.32-.13q.46-.23.94-.1l1 .26c.78.2 1.5-.51 1.29-1.3l-.27-1q-.1-.46.1-.93.63-1.29.64-2.8A6.5 6.5 0 0 0 9.5 6.02L10 6a8 8 0 0 1 7.98 8.5"
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
            d="M22 8.5a6.5 6.5 0 0 0-11.63-4 9.5 9.5 0 0 1 9.12 9.83l.34.09a1.3 1.3 0 0 0 1.59-1.6l-.13-.47q-.14-.59.13-1.15.57-1.25.58-2.7"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 14a8 8 0 0 1-11.45 7.22 1.7 1.7 0 0 0-1.15-.13l-1.23.33a1.3 1.3 0 0 1-1.59-1.6l.33-1.22c.1-.38.04-.8-.13-1.15A8 8 0 1 1 18 14M6.5 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDialog;
