import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGemini2 = forwardRef<SVGSVGElement, IconProps>(function IconGemini2(
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
            d="M12.67 22V3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.97 5.3 12.67 2l-3.3 3.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m5.67 7-2-2-2 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m23.67 7-2-2-2 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.67 6.04V11q0 6 6 6h6q6 0 6-6V6.04"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.67 20h6"
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
            d="m24.2 6.47-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 0 1.06c.29.29.77.29 1.06 0l.72-.72V11c0 3.58-1.67 5.25-5.25 5.25h-2.25V3.81l2.02 2.02q.24.22.53.22t.53-.22a.75.75 0 0 0 0-1.06l-3.3-3.3a.75.75 0 0 0-1.06 0l-3.3 3.3a.75.75 0 0 0 0 1.06c.29.29.77.29 1.06 0l2.02-2.02v12.44H9.67c-3.58 0-5.25-1.67-5.25-5.25V6.81l.72.72q.24.22.53.22t.53-.22a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 0 1.06c.29.29.77.29 1.06 0l.72-.72V11c0 4.42 2.33 6.75 6.75 6.75h2.25V22c0 .41.34.75.75.75s.75-.34.75-.75v-4.25h2.25c4.42 0 6.75-2.33 6.75-6.75V6.81l.72.72q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.67 20.75h-6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="m24.2 6.47-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 0 1.06c.29.29.77.29 1.06 0l.72-.72V11c0 3.58-1.67 5.25-5.25 5.25h-2.25V3.81l2.02 2.02q.24.22.53.22t.53-.22a.75.75 0 0 0 0-1.06l-3.3-3.3a.75.75 0 0 0-1.06 0l-3.3 3.3a.75.75 0 0 0 0 1.06c.29.29.77.29 1.06 0l2.02-2.02v12.44H9.67c-3.58 0-5.25-1.67-5.25-5.25V6.81l.72.72q.24.22.53.22t.53-.22a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 0 1.06c.29.29.77.29 1.06 0l.72-.72V11c0 4.42 2.33 6.75 6.75 6.75h2.25V22c0 .41.34.75.75.75s.75-.34.75-.75v-4.25h2.25c4.42 0 6.75-2.33 6.75-6.75V6.81l.72.72q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06"
            fill="currentColor"
          />
          <path
            d="M15.67 20.75h-6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGemini2;
