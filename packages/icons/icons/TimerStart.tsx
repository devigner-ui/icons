import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTimerStart = forwardRef<SVGSVGElement, IconProps>(
  function IconTimerStart(
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
              d="M12.67 8v5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 22a8.75 8.75 0 1 1 8.75-8.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.67 2h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.57 18.5v-1.16c0-1.43 1.02-2.02 2.26-1.3l1 .58 1 .58c1.24.72 1.24 1.89 0 2.61l-1 .58-1 .58c-1.24.72-2.26.13-2.26-1.3z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M12.67 13.75a.76.76 0 0 1-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M15.56 3.45H9.78a.73.73 0 0 1 0-1.45h5.78a.73.73 0 0 1 0 1.45"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.67 19.97v-2.94c0-1.27.76-2.03 2.03-2.03h2.94q.28 0 .53.06.17-.84.17-1.73a8.68 8.68 0 0 0-17.34 0 8.68 8.68 0 0 0 12.08 7.97 2 2 0 0 1-.41-1.33"
              fill="currentColor"
            />
            <path
              d="M20.64 15H17.7c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03m-.28 4.46-1.18.68a1.4 1.4 0 0 1-.7.21 1 1 0 0 1-.46-.12q-.49-.3-.5-1.05v-1.36q.01-.75.5-1.05.5-.28 1.16.09l1.18.68q.65.39.66.96 0 .57-.66.96"
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
              d="M15.56 3.45H9.78a.73.73 0 0 1 0-1.45h5.78a.73.73 0 0 1 0 1.45"
              fill="currentColor"
            />
            <path
              d="M20.64 15H17.7c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03m-.28 4.46-1.18.68a1.4 1.4 0 0 1-.7.21 1 1 0 0 1-.46-.12q-.49-.3-.5-1.05v-1.36q.01-.75.5-1.05.5-.28 1.16.09l1.18.68q.65.39.66.96 0 .57-.66.96"
              fill="currentColor"
            />
            <path
              d="M14.67 19.97v-2.94A2.87 2.87 0 0 1 17.7 14h2.94q.34 0 .66.06.03-.36.04-.73a8.7 8.7 0 0 0-8.67-8.68 8.68 8.68 0 0 0 0 17.35q1.27-.01 2.44-.36a3 3 0 0 1-.44-1.67M13.42 13c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTimerStart;
