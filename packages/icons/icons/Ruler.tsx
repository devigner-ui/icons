import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRuler = forwardRef<SVGSVGElement, IconProps>(function IconRuler(
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
            d="M4.05 18.5C2.68 17.15 2 16.47 2 15.63s.68-1.53 2.05-2.9l8.67-8.67C14.1 2.68 14.77 2 15.62 2c.84 0 1.52.68 2.89 2.05l1.44 1.44C21.32 6.86 22 7.54 22 8.4c0 .84-.68 1.52-2.05 2.89l-8.67 8.67C9.9 21.32 9.23 22 8.38 22c-.84 0-1.52-.68-2.89-2.05z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m8.46 8.46 1.42 1.42"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m12.7 4.22 1.42 1.42"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m4.22 12.7 1.42 1.42"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m6.34 10.59 2.12 2.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m10.59 6.34 2.12 2.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M2 15.62c0 .84.68 1.52 2.05 2.89l1.44 1.44C6.86 21.32 7.54 22 8.4 22c.84 0 1.52-.68 2.89-2.05l8.67-8.67C21.32 9.9 22 9.23 22 8.38c0-.84-.68-1.52-2.05-2.89l-1.44-1.44C17.14 2.68 16.46 2 15.6 2c-.75 0-1.37.54-2.46 1.62L12.1 4.67l-1.07 1.07-1.05 1.05-1.07 1.07-1.05 1.05-1.07 1.07-1.05 1.05-1.07 1.07-1.05 1.05C2.54 14.24 2 14.86 2 15.62"
            fill="currentColor"
          />
          <path
            d="m13.24 3.7-.09-.08-1.05 1.05.08.08 1.41 1.42a.75.75 0 0 0 1.06-1.06z"
            fill="currentColor"
          />
          <path
            d="m11.12 5.81-.09-.07-1.05 1.05.08.08L12.18 9a.75.75 0 0 0 1.06-1.06z"
            fill="currentColor"
          />
          <path
            d="m9 7.93-.1-.07-1.04 1.05.07.08 1.42 1.42a.75.75 0 1 0 1.06-1.06z"
            fill="currentColor"
          />
          <path
            d="m6.87 10.06-.08-.08-1.05 1.05.07.09 2.12 2.12A.75.75 0 1 0 9 12.18z"
            fill="currentColor"
          />
          <path
            d="m4.75 12.18-.08-.08-1.05 1.05.07.09 1.42 1.41a.75.75 0 1 0 1.06-1.06z"
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
            d="M2 15.62c0 .84.68 1.52 2.05 2.89l1.44 1.44C6.86 21.32 7.54 22 8.4 22c.84 0 1.52-.68 2.89-2.05l8.67-8.67C21.32 9.9 22 9.23 22 8.38c0-.84-.68-1.52-2.05-2.89l-1.44-1.44C17.14 2.68 16.46 2 15.6 2c-.75 0-1.37.54-2.46 1.62l.09.07 1.41 1.42a.75.75 0 1 1-1.06 1.06l-1.41-1.42-.08-.08-1.07 1.07.09.07 2.12 2.12A.75.75 0 1 1 12.18 9l-2.12-2.12-.08-.08-1.07 1.07.08.07 1.42 1.42a.75.75 0 0 1-1.06 1.06L7.93 8.99l-.07-.08-1.07 1.07.08.08L9 12.18a.75.75 0 0 1-1.06 1.06l-2.12-2.12-.07-.09-1.07 1.07.08.08 1.42 1.41a.75.75 0 0 1-1.06 1.06L3.7 13.24l-.07-.09C2.54 14.24 2 14.86 2 15.62"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRuler;
