import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEmojiSad = forwardRef<SVGSVGElement, IconProps>(function IconEmojiSad(
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
            d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.67 8.75c1-1 2.63-1 3.64 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.03 8.75c1-1 2.63-1 3.64 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.07 17.7h7.2c.5 0 .9-.4.9-.9a4.5 4.5 0 1 0-9 0c0 .5.4.9.9.9"
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
            fill="currentColor"
          />
          <path
            d="M11.31 9.5a.7.7 0 0 1-.53-.22 1.83 1.83 0 0 0-2.58 0 .75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06 3.34 3.34 0 0 1 4.7 0c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22"
            fill="currentColor"
          />
          <path
            d="M14.03 9.5a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06 3.34 3.34 0 0 1 4.7 0c.29.29.29.77 0 1.06a.75.75 0 0 1-1.06 0 1.83 1.83 0 0 0-2.58 0 .7.7 0 0 1-.53.22"
            fill="currentColor"
          />
          <path
            d="M12.67 11.92a4.9 4.9 0 0 0-4.88 4.88c0 .7.57 1.28 1.27 1.28h7.2c.7 0 1.27-.57 1.27-1.28a4.86 4.86 0 0 0-4.86-4.88"
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
            d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2M7.14 9.28a.75.75 0 0 1 0-1.06 3.34 3.34 0 0 1 4.7 0c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22 1.83 1.83 0 0 0-2.58 0c-.29.3-.77.3-1.06 0m9.13 8.8h-7.2c-.7 0-1.27-.57-1.27-1.28a4.89 4.89 0 0 1 9.76 0 1.3 1.3 0 0 1-1.29 1.28m1.93-8.8a.75.75 0 0 1-1.06 0 1.83 1.83 0 0 0-2.58 0 .7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06 3.34 3.34 0 0 1 4.7 0c.29.3.29.77 0 1.06"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconEmojiSad;
