import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconChair = forwardRef<SVGSVGElement, IconProps>(function IconChair(
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
            d="M17 21v-5M7 21v-5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M15.5 12h-7c-1.65 0-2.47 0-2.99.59-.28.32-.41.76-.47 1.41-.07.9-.11 1.35.19 1.68S6.02 16 7 16h10c.98 0 1.48 0 1.77-.32.3-.33.26-.78.19-1.68-.06-.65-.19-1.09-.47-1.41-.52-.59-1.34-.59-2.99-.59"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 8c0-1.87 0-2.8.4-3.5a3 3 0 0 1 1.1-1.1C9.2 3 10.13 3 12 3s2.8 0 3.5.4a3 3 0 0 1 1.1 1.1c.4.7.4 1.63.4 3.5v4H7z"
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
            d="M7.4 4.5C7 5.2 7 6.13 7 8v4.03q.65-.04 1.43-.03h7.13q.8 0 1.44.03V8c0-1.87 0-2.8-.4-3.5a3 3 0 0 0-1.1-1.1C14.8 3 13.87 3 12 3s-2.8 0-3.5.4a3 3 0 0 0-1.1 1.1"
            fill="currentColor"
          />
          <path
            d="M6.25 16c-.5-.03-.8-.1-1.01-.32-.3-.33-.26-.78-.18-1.68.05-.65.18-1.09.46-1.41C6.03 12 6.86 12 8.51 12h6.98c1.65 0 2.48 0 2.99.59.28.32.4.76.46 1.41.08.9.12 1.35-.18 1.68-.2.22-.5.3-1.01.31V21a.75.75 0 0 1-1.5 0v-5h-8.5v5a.75.75 0 0 1-1.5 0z"
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
            d="M7.4 4.5C7 5.2 7 6.13 7 8v3.03q.65-.04 1.43-.03h7.13q.8 0 1.44.03V8c0-1.87 0-2.8-.4-3.5a3 3 0 0 0-1.1-1.1C14.8 3 13.87 3 12 3s-2.8 0-3.5.4a3 3 0 0 0-1.1 1.1"
            fill="currentColor"
          />
          <path
            d="M6.25 16c-.5-.03-.8-.1-1.01-.32-.3-.33-.26-.78-.18-1.68.05-.65.18-1.09.46-1.41C6.03 12 6.86 12 8.51 12h6.98c1.65 0 2.48 0 2.99.59.28.32.4.76.46 1.41.08.9.12 1.35-.18 1.68-.2.22-.5.3-1.01.31V21a.75.75 0 0 1-1.5 0v-5h-8.5v5a.75.75 0 0 1-1.5 0z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconChair;
