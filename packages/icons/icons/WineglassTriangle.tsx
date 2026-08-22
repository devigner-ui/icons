import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWineglassTriangle = forwardRef<SVGSVGElement, IconProps>(
  function IconWineglassTriangle(
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
              d="M16.24 21H7.76M4.7 3h14.6c1.5 0 2.26 1.8 1.22 2.86l-7.8 7.98a1 1 0 0 1-1.43 0l-7.8-7.98A1.69 1.69 0 0 1 4.7 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 14.57V21"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.47 9.75h9.06"
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
              d="M19.3 3H4.7C3.2 3 2.44 4.8 3.48 5.86l7.8 7.98a1 1 0 0 0 1.43 0l7.8-7.98A1.69 1.69 0 0 0 19.3 3"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 21c0-.41.34-.75.76-.75h8.48a.75.75 0 1 1 0 1.5H7.76A.75.75 0 0 1 7 21"
              fill="currentColor"
            />
            <path
              d="M11.29 13.84a1 1 0 0 0 1.42 0L16.47 10H7.53z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.29 13.84a1 1 0 0 0 1.43 0l.03-.04v6.45h-1.5V13.8z"
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
              d="M19.3 3H4.7C3.2 3 2.44 4.8 3.48 5.86L6.24 9h11.52l2.76-3.14A1.69 1.69 0 0 0 19.3 3"
              fill="currentColor"
            />
            <path
              d="M16.45 10.5h-8.9l3.7 4.22v5.53h-3.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-3.5v-5.53z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWineglassTriangle;
