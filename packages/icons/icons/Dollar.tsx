import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDollar = forwardRef<SVGSVGElement, IconProps>(function IconDollar(
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
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="12"
            cy="12.0005"
            r="10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 6v12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M15 9.5C15 8.12 13.66 7 12 7S9 8.12 9 9.5s1.34 2.5 3 2.5 3 1.12 3 2.5-1.34 2.5-3 2.5-3-1.12-3-2.5"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 5.25c.41 0 .75.34.75.75v.32c1.63.29 3 1.51 3 3.18a.75.75 0 0 1-1.5 0c0-.68-.56-1.4-1.5-1.65v3.47c1.63.29 3 1.51 3 3.18s-1.37 2.9-3 3.18V18a.75.75 0 0 1-1.5 0v-.32c-1.63-.29-3-1.51-3-3.18a.75.75 0 0 1 1.5 0c0 .68.56 1.4 1.5 1.65v-3.47c-1.63-.29-3-1.51-3-3.18s1.37-2.9 3-3.18V6c0-.41.34-.75.75-.75m-.75 2.6c-.94.25-1.5.97-1.5 1.65s.56 1.4 1.5 1.65zm3 6.65c0-.68-.56-1.4-1.5-1.65v3.3c.94-.25 1.5-.97 1.5-1.65"
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
            d="M11.25 7.85c-.94.25-1.5.97-1.5 1.65s.56 1.4 1.5 1.65z"
            fill="currentColor"
          />
          <path
            d="M12.75 12.85v3.3c.94-.25 1.5-.97 1.5-1.65s-.56-1.4-1.5-1.65"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0M12 5.25c.41 0 .75.34.75.75v.32c1.63.29 3 1.51 3 3.18a.75.75 0 0 1-1.5 0c0-.68-.56-1.4-1.5-1.65v3.47c1.63.29 3 1.51 3 3.18s-1.37 2.9-3 3.18V18a.75.75 0 0 1-1.5 0v-.32c-1.63-.29-3-1.51-3-3.18a.75.75 0 0 1 1.5 0c0 .68.56 1.4 1.5 1.65v-3.47c-1.63-.29-3-1.51-3-3.18s1.37-2.9 3-3.18V6c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDollar;
