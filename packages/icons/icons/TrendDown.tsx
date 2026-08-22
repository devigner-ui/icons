import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTrendDown = forwardRef<SVGSVGElement, IconProps>(
  function IconTrendDown(
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
                d="m17.17 14.5-4.2-4.2-1.6 2.4-3.2-3.2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.17 14.5h2v-2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M17.55 12.47a.7.7 0 0 0-.7-.7.7.7 0 0 0-.7.7v.18l-2.72-2.72a.7.7 0 0 0-.56-.2.7.7 0 0 0-.51.31l-1.02 1.52-2.36-2.38a.7.7 0 0 0-.99 0 .7.7 0 0 0 0 .99l2.98 2.98q.23.23.56.2.33-.04.51-.31l1.02-1.52 2.11 2.11h-.18a.7.7 0 0 0-.7.7c0 .39.31.7.7.7h1.86q.14 0 .27-.05a.7.7 0 0 0 .38-.38l.05-.27z"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m.69 12.33q0 .13-.05.27a.7.7 0 0 1-.38.38l-.27.05h-1.86a.7.7 0 0 1-.7-.7c0-.39.31-.7.7-.7h.18l-2.11-2.11-1.02 1.52a.7.7 0 0 1-.51.31.7.7 0 0 1-.56-.2l-2.98-2.98a.7.7 0 0 1 0-.99.7.7 0 0 1 .99 0l2.38 2.38 1.02-1.52q.19-.27.51-.31.33-.03.56.2l2.72 2.72v-.18c0-.39.31-.7.7-.7s.7.31.7.7v1.86z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTrendDown;
