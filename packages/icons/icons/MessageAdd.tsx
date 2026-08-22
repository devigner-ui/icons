import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMessageAdd = forwardRef<SVGSVGElement, IconProps>(
  function IconMessageAdd(
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
              d="M16.67 2h-8q-6 0-6 6v13a1 1 0 0 0 1 1h13q6 0 6-6V8q0-6-6-6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M9.17 12h7"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.67 15.5v-7"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
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
              d="M16.67 2h-8q-6 0-6 6v13a1 1 0 0 0 1 1h13q6 0 6-6V8q0-6-6-6"
              fill="currentColor"
            />
            <path
              d="M16.17 11.25h-2.75V8.5a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v2.75H9.17a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.75v2.75c0 .41.34.75.75.75s.75-.34.75-.75v-2.75h2.75c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
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
              d="M16.67 2h-8q-6 0-6 6v13a1 1 0 0 0 1 1h13q6 0 6-6V8q0-6-6-6m-.5 10.75h-2.75v2.75c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-2.75H9.17a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.75V8.5c0-.41.34-.75.75-.75s.75.34.75.75v2.75h2.75c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMessageAdd;
