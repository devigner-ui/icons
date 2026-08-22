import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTrello = forwardRef<SVGSVGElement, IconProps>(function IconTrello(
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
            d="M15.67 22h-6c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.22 17.72H7.77c-.67 0-1.22-.55-1.22-1.22V7.52c0-.67.55-1.22 1.22-1.22h2.45c.67 0 1.22.55 1.22 1.22v8.98c0 .67-.55 1.22-1.22 1.22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.81 13.63h-2.94a1 1 0 0 1-.98-.98V7.26c0-.54.44-.98.98-.98h2.94c.54 0 .98.44.98.98v5.39c0 .54-.44.98-.98.98"
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
            d="M16.86 2H8.49C4.85 2 2.68 4.17 2.68 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
            fill="currentColor"
          />
          <path
            d="M10.22 17.72H7.77c-.67 0-1.22-.55-1.22-1.22V7.52c0-.67.55-1.22 1.22-1.22h2.45c.67 0 1.22.55 1.22 1.22v8.98c0 .67-.55 1.22-1.22 1.22"
            fill="currentColor"
          />
          <path
            d="M17.81 13.63h-2.94a1 1 0 0 1-.98-.98V7.26c0-.54.44-.98.98-.98h2.94c.54 0 .98.44.98.98v5.39c0 .54-.44.98-.98.98"
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
            d="M16.86 2H8.49C4.85 2 2.68 4.17 2.68 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-5.42 14.49c0 .67-.55 1.22-1.22 1.22H7.77c-.67 0-1.22-.55-1.22-1.22V7.51c0-.67.55-1.22 1.22-1.22h2.45c.67 0 1.22.55 1.22 1.22zm7.35-3.84c0 .54-.44.98-.98.98h-2.94a1 1 0 0 1-.98-.98V7.26c0-.54.44-.98.98-.98h2.94c.54 0 .98.44.98.98z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTrello;
