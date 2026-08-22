import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconChartFail = forwardRef<SVGSVGElement, IconProps>(
  function IconChartFail(
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m17.9 20.77 3.54-3.54"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m21.44 20.77-3.54-3.54"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.67 10.5v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 10.5v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.67 10.5v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 13V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h4"
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
              d="M16.67 20.97v-2.94c0-1.27.76-2.03 2.03-2.03h2.94q.6 0 1.03.22V7.81C22.67 4.17 20.5 2 16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.41a2 2 0 0 1-.22-1.03"
              fill="currentColor"
            />
            <path
              d="M7.67 14.25a.76.76 0 0 1-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M12.67 14.25a.76.76 0 0 1-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M17.67 14.25a.76.76 0 0 1-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M21.64 16H18.7c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03m.5 4.56c.25.25.25.66 0 .91a.67.67 0 0 1-.91 0l-1.06-1.06-1.05 1.06a.67.67 0 0 1-.91 0 .65.65 0 0 1 0-.91l1.06-1.06-1.06-1.05a.65.65 0 0 1 0-.91.65.65 0 0 1 .91 0l1.05 1.06 1.06-1.06a.65.65 0 0 1 .91 0c.25.25.25.66 0 .91l-1.06 1.05z"
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
              d="M22.64 7.21A5.8 5.8 0 0 0 16.86 2H8.48l-.6.03a5.8 5.8 0 0 0-5.21 5.78v8.38l.03.6A5.8 5.8 0 0 0 8.48 22h6.19a1 1 0 0 0 1-1v-2.97A3.03 3.03 0 0 1 18.7 15h2.97a1 1 0 0 0 1-1V7.81zM8.42 13.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75zm5 0c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75z"
              fill="currentColor"
            />
            <path
              d="M21.64 16H18.7c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03m.5 4.56c.25.25.25.66 0 .91a.7.7 0 0 1-.46.18.7.7 0 0 1-.46-.18l-1.06-1.06-1.04 1.06a.7.7 0 0 1-.47.18.6.6 0 0 1-.44-.18.65.65 0 0 1 0-.91l1.06-1.06-1.06-1.05a.65.65 0 0 1 0-.91.65.65 0 0 1 .91 0l1.04 1.06 1.06-1.06a.66.66 0 0 1 .92 0c.25.25.25.66 0 .91l-1.06 1.05z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconChartFail;
