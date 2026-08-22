import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBlogger = forwardRef<SVGSVGElement, IconProps>(function IconBlogger(
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
            d="M6.67 9v6q0 3 3 3h6q3 0 3-3v-3a1 1 0 0 0-1-1 1 1 0 0 1-1-1V9q0-3-3-3h-4q-3 0-3 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.67 10h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.67 14h4"
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
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            d="M17.67 11a1 1 0 0 1-1-1V9q0-3-3-3h-4q-3 0-3 3v6q0 3 3 3h6q3 0 3-3v-3a1 1 0 0 0-1-1m-7-1.75h2c.41 0 .75.34.75.75s-.34.75-.75.75h-2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75m4 5.5h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.86 2H8.49C4.85 2 2.68 4.17 2.68 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
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
            d="M14.67 13.25h-4a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h4c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
            fill="currentColor"
          />
          <path
            d="M10.67 10.75h2c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-2a.76.76 0 0 0-.75.75c0 .41.34.75.75.75"
            fill="currentColor"
          />
          <path
            d="M16.86 2H8.49C4.85 2 2.68 4.17 2.68 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m1.81 13q0 3-3 3h-6q-3 0-3-3V9q0-3 3-3h4q3 0 3 3v1a1 1 0 0 0 1 1 1 1 0 0 1 1 1z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBlogger;
