import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFire = forwardRef<SVGSVGElement, IconProps>(function IconFire(
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
      {variant === "Broken" ? (
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
            d="M3.5 12.44c0 7.11 5.29 8.89 7.93 8.89 1.36 0 3.32-.36 5.07-1.39m2.72-2.61a9 9 0 0 0 1.28-4.89c0-4.53-2.83-7.76-5.4-9.61-1.16-.84-2.6.08-2.6 1.5v.32c0 1.45-.6 4.08-2.3 5.17-.85.56-1.78-.28-1.88-1.3l-.09-.83c-.1-.98-1.1-1.57-1.87-.98a8 8 0 0 0-1.9 2.11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8.5 17.77c0 2.86 2.49 3.56 3.73 3.56 1.1 0 3.27-.71 3.27-3.56a2.8 2.8 0 0 0-1.16-2.27c-.4-.3-.96-.03-1.1.45-.17.62-.82 1.02-1.15.46-.3-.52-.3-1.28-.3-1.75 0-.63-.64-1.05-1.15-.67a4.8 4.8 0 0 0-2.14 3.78Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
        </svg>
      ) : !fill ? (
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
            d="M20.5 12.44c0 7.11-6.04 8.89-9.07 8.89-2.63 0-7.93-1.78-7.93-8.89a7 7 0 0 1 2.86-5.71c.78-.59 1.77 0 1.87.98l.09.83c.1 1.02 1.03 1.86 1.89 1.3 1.68-1.11 2.29-3.73 2.29-5.18v-.32c0-1.43 1.44-2.35 2.6-1.51 2.57 1.85 5.4 5.08 5.4 9.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.5 17.77c0 2.86 2.49 3.56 3.73 3.56 1.1 0 3.27-.71 3.27-3.56a2.8 2.8 0 0 0-1.16-2.27c-.4-.3-.96-.03-1.1.45-.17.62-.82 1.02-1.15.46-.3-.52-.3-1.28-.3-1.75 0-.63-.64-1.04-1.15-.67a4.8 4.8 0 0 0-2.14 3.78"
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
            d="M13.33 21.55c3.13-.62 7.17-2.87 7.17-8.69 0-5.29-3.87-8.81-6.66-10.43-.62-.36-1.34.11-1.34.83v1.82c0 1.45-.6 4.08-2.3 5.17-.85.56-1.78-.28-1.88-1.3l-.09-.83c-.1-.98-1.1-1.57-1.87-.98a7 7 0 0 0-2.86 5.72c0 7.11 5.29 8.89 7.93 8.89l.49-.01c.44-.06 0 .1 1.41-.19"
            fill="currentColor"
          />
          <path
            d="M8.5 18.19c0 2.62 2.11 3.43 3.42 3.55.44-.06 0 .1 1.41-.19 1.04-.37 2.17-1.3 2.17-3.36 0-1.3-.82-2.1-1.46-2.47-.2-.11-.42.03-.44.26-.06.72-.75 1.29-1.22.74a2.7 2.7 0 0 1-.59-1.64v-.59c0-.35-.35-.59-.66-.4-1.13.66-2.63 2.06-2.63 4.1"
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
            d="M13.33 21.55c3.13-.62 7.17-2.87 7.17-8.69 0-5.29-3.87-8.81-6.66-10.43-.62-.36-1.34.11-1.34.83v1.82c0 1.45-.6 4.08-2.3 5.17-.85.56-1.78-.28-1.88-1.3l-.09-.83c-.1-.98-1.1-1.57-1.87-.98a7 7 0 0 0-2.86 5.72c0 7.11 5.29 8.89 7.93 8.89l.49-.01c-1.3-.12-3.42-.93-3.42-3.55 0-2.04 1.5-3.43 2.63-4.1.3-.19.66.05.66.4v.6c0 .44.18 1.15.6 1.63.46.55 1.15-.02 1.2-.74.03-.23.25-.37.45-.26a2.9 2.9 0 0 1 1.46 2.47c0 2.05-1.13 3-2.17 3.36"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFire;
