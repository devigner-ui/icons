import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLayoutStaggered = forwardRef<SVGSVGElement, IconProps>(
  function IconLayoutStaggered(
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M12.67 2v20"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.67 9.5h10"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.67 14.5h10"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="M22.67 7.81v6.69h-10V2h4.19c3.64 0 5.81 2.17 5.81 5.81"
              fill="currentColor"
            />
            <path
              d="M12.67 9.5V22H8.48c-3.64 0-5.81-2.17-5.81-5.81V9.5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.6" : "1"}
              d="M12.67 2v7.5h-10V7.81C2.67 4.17 4.84 2 8.48 2z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.6" : "1"}
              d="M22.67 14.5v1.69c0 3.64-2.17 5.81-5.81 5.81h-4.19v-7.5z"
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
              d="M16.86 2h-3.44v11.75h9.25V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M2.67 10.25v5.94c0 3.64 2.17 5.81 5.81 5.81h3.44V10.25z"
              fill="currentColor"
            />
            <path
              d="M11.92 2v6.75H2.67v-.94C2.67 4.17 4.84 2 8.48 2z"
              fill="currentColor"
            />
            <path
              d="M22.67 15.25v.94c0 3.64-2.17 5.81-5.81 5.81h-3.44v-6.75z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLayoutStaggered;
