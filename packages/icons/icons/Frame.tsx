import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFrame = forwardRef<SVGSVGElement, IconProps>(function IconFrame(
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
            d="M11.67 5v3h-2a1 1 0 0 0-1 1v2h-3V9a4 4 0 0 1 4-4z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.67 19v-3h2a1 1 0 0 0 1-1v-2h3v2a4 4 0 0 1-4 4z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.67 22h-6c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.86 2H8.49C4.85 2 2.68 4.17 2.68 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
            fill="currentColor"
          />
          <path
            d="M11.67 5.5v2a.5.5 0 0 1-.5.5h-1.5a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V9a4 4 0 0 1 4-4h1.5c.28 0 .5.22.5.5"
            fill="currentColor"
          />
          <path
            d="M13.67 18.5v-2c0-.28.22-.5.5-.5h1.5a1 1 0 0 0 1-1v-1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V15a4 4 0 0 1-4 4h-1.5a.5.5 0 0 1-.5-.5"
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
            d="M16.86 2H8.49C4.85 2 2.68 4.17 2.68 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-5.19 5.5a.5.5 0 0 1-.5.5h-1.5a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V9a4 4 0 0 1 4-4h1.5c.28 0 .5.22.5.5zm8 7.5a4 4 0 0 1-4 4h-1.5a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5h1.5a1 1 0 0 0 1-1v-1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFrame;
