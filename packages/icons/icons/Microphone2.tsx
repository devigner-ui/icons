import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMicrophone2 = forwardRef<SVGSVGElement, IconProps>(
  function IconMicrophone2(
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
              d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.5 8H17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.5 11H17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 8h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 11h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20 10v1a8 8 0 0 1-8 8m-8-9v1a8 8 0 0 0 8 8m0 0v3"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 9c.41 0 .75.34.75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.72v2.28a.75.75 0 0 1-1.5 0v-2.28a8.75 8.75 0 0 1-8-8.72v-1c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.75 7.75A.75.75 0 0 0 9 7H6.3a5.75 5.75 0 0 1 11.4 0h-4.2a.75.75 0 0 0 0 1.5h4.25V10H13.5a.75.75 0 0 0 0 1.5h4.2a5.75 5.75 0 0 1-11.4 0H9A.75.75 0 0 0 9 10H6.25V8.5H9c.41 0 .75-.34.75-.75"
              fill="currentColor"
            />
            <path
              d="M12.75 10.75c0 .41.34.75.75.75h4.2l.05-1.5H13.5a.75.75 0 0 0-.75.75"
              fill="currentColor"
            />
            <path
              d="M12.75 7.75c0 .41.34.75.75.75h4.25L17.7 7h-4.2a.75.75 0 0 0-.75.75"
              fill="currentColor"
            />
            <path
              d="M9.75 7.75A.75.75 0 0 0 9 7H6.3l-.05 1.5H9c.41 0 .75-.34.75-.75"
              fill="currentColor"
            />
            <path
              d="M9.75 10.75A.75.75 0 0 0 9 10H6.25l.05 1.5H9c.41 0 .75-.34.75-.75"
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
              d="M9.75 7.75A.75.75 0 0 0 9 7H6.3a5.75 5.75 0 0 1 11.4 0h-4.2a.75.75 0 0 0 0 1.5h4.25V10H13.5a.75.75 0 0 0 0 1.5h4.2a5.75 5.75 0 0 1-11.4 0H9A.75.75 0 0 0 9 10H6.25V8.5H9c.41 0 .75-.34.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 9c.41 0 .75.34.75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.72v2.28a.75.75 0 0 1-1.5 0v-2.28a8.75 8.75 0 0 1-8-8.72v-1c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMicrophone2;
