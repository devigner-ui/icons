import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHelp = forwardRef<SVGSVGElement, IconProps>(function IconHelp(
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
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m15 9 4-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m5 19 4-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 9 5 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m19 19-4-4"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20m0-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
            fill="currentColor"
          />
          <path
            d="m5.48 19.58 4.27-4.27a4 4 0 0 1-1.06-1.06l-4.27 4.27q.5.57 1.06 1.06"
            fill="currentColor"
          />
          <path
            d="m4.42 5.48 4.27 4.27q.43-.63 1.06-1.06L5.48 4.42q-.58.48-1.06 1.06"
            fill="currentColor"
          />
          <path
            d="m14.25 8.7 4.27-4.28q.57.5 1.06 1.06l-4.27 4.27a4 4 0 0 0-1.06-1.06"
            fill="currentColor"
          />
          <path
            d="m19.58 18.52-4.27-4.27q-.43.63-1.06 1.06l4.27 4.27q.57-.5 1.06-1.06"
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
            d="M19.58 18.52a9.96 9.96 0 0 0 0-13.04l-4.27 4.27a4 4 0 0 1 0 4.5z"
            fill="currentColor"
          />
          <path
            d="M18.52 19.58a9.96 9.96 0 0 1-13.04 0l4.27-4.27a4 4 0 0 0 4.5 0z"
            fill="currentColor"
          />
          <path
            d="m4.42 18.52 4.27-4.27a4 4 0 0 1 0-4.5L4.42 5.48a9.96 9.96 0 0 0 0 13.04"
            fill="currentColor"
          />
          <path
            d="M12 8q-1.26.01-2.25.7L5.48 4.41a9.96 9.96 0 0 1 13.04 0l-4.27 4.27A4 4 0 0 0 12 8"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHelp;
