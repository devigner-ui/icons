import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVoiceCricle = forwardRef<SVGSVGElement, IconProps>(
  function IconVoiceCricle(
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
              d="M6.67 9.86v4.29"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.67 8.43v7.14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 7v10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.67 8.43v7.14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.67 9.86v4.29"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M6.67 14.89a.76.76 0 0 1-.75-.75V9.85c0-.41.34-.75.75-.75s.75.34.75.75v4.29c0 .42-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M9.67 16.32a.76.76 0 0 1-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14c0 .42-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M12.67 17.75a.76.76 0 0 1-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v10c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M15.67 16.32a.76.76 0 0 1-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14c0 .42-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M18.67 14.89a.76.76 0 0 1-.75-.75V9.85c0-.41.34-.75.75-.75s.75.34.75.75v4.29c0 .42-.34.75-.75.75"
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
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M7.42 14.14c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V9.86c0-.41.34-.75.75-.75s.75.34.75.75zm3 1.43c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75zm3 1.43c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75zm3-1.43c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75zm3-1.43c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V9.86c0-.41.34-.75.75-.75s.75.34.75.75z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVoiceCricle;
