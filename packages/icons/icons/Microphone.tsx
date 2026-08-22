import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMicrophone = forwardRef<SVGSVGElement, IconProps>(
  function IconMicrophone(
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
              d="M13 8h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13 11h4"
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
              d="M12 2a5.75 5.75 0 0 0-5.75 5.75v3a5.75 5.75 0 0 0 11.45.75H13a.75.75 0 0 1 0-1.5h4.75V8.5H13A.75.75 0 0 1 13 7h4.7A5.75 5.75 0 0 0 12 2"
              fill="currentColor"
            />
            <path
              d="M12.25 10.75c0 .41.34.75.75.75h4.7l.05-1.5H13a.75.75 0 0 0-.75.75"
              fill="currentColor"
            />
            <path
              d="M12.25 7.75c0 .41.34.75.75.75h4.75L17.7 7H13a.75.75 0 0 0-.75.75"
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
              d="M12 2a5.75 5.75 0 0 0-5.75 5.75v3a5.75 5.75 0 0 0 11.45.75H13a.75.75 0 0 1 0-1.5h4.75V8.5H13A.75.75 0 0 1 13 7h4.7A5.75 5.75 0 0 0 12 2"
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

export default IconMicrophone;
