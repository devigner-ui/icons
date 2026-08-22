import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEnjinCoin = forwardRef<SVGSVGElement, IconProps>(
  function IconEnjinCoin(
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
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M16.42 8h-5a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.42 12h-8"
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
            <path d="M24.67 0h-24v24h24z" fill="none" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M16.42 12.75c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75H9.17V11a2.25 2.25 0 0 1 2.25-2.25h5c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-5A3.75 3.75 0 0 0 7.67 11v2a3.75 3.75 0 0 0 3.75 3.75h5c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-5A2.25 2.25 0 0 1 9.17 13v-.25z"
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
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m3.75 9.25c.41 0 .75.34.75.75s-.34.75-.75.75H9.17V13a2.25 2.25 0 0 0 2.25 2.25h5c.41 0 .75.34.75.75s-.34.75-.75.75h-5A3.75 3.75 0 0 1 7.67 13v-2a3.75 3.75 0 0 1 3.75-3.75h5c.41 0 .75.34.75.75s-.34.75-.75.75h-5A2.25 2.25 0 0 0 9.17 11v.25z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconEnjinCoin;
