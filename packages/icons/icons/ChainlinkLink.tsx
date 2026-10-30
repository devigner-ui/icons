import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconChainlinkLink = forwardRef<SVGSVGElement, IconProps>(
  function IconChainlinkLink(
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
        {variant === "Broken" ? (
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
            d="M3 12.66v3.16c0 .65.46 1.43 1.03 1.75l7 3.89c.53.3 1.41.3 1.94 0l7-3.89A2.2 2.2 0 0 0 21 15.82V8.18c0-.65-.46-1.43-1.03-1.75l-7-3.89a2.2 2.2 0 0 0-1.94 0l-7 3.89A2.2 2.2 0 0 0 3 8.18"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      ) : !fill ? (
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
              d="M3 8.18v7.65c0 .65.46 1.43 1.03 1.75l7 3.89c.53.3 1.41.3 1.94 0l7-3.89A2.2 2.2 0 0 0 21 15.83V8.18c0-.65-.46-1.43-1.03-1.75l-7-3.89a2.2 2.2 0 0 0-1.94 0l-7 3.89A2.2 2.2 0 0 0 3 8.18"
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
            <path d="M24 0H0v24h24z" fill="none" />
            <path
              d="M3 8.18v7.65c0 .65.46 1.43 1.03 1.75l7 3.89c.53.3 1.41.3 1.94 0l7-3.89A2.2 2.2 0 0 0 21 15.83V8.18c0-.65-.46-1.43-1.03-1.75l-7-3.89a2.2 2.2 0 0 0-1.94 0l-7 3.89A2.2 2.2 0 0 0 3 8.18"
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
              d="M3 8.18v7.65c0 .65.46 1.43 1.03 1.75l7 3.89c.53.3 1.41.3 1.94 0l7-3.89A2.2 2.2 0 0 0 21 15.83V8.18c0-.65-.46-1.43-1.03-1.75l-7-3.89a2.2 2.2 0 0 0-1.94 0l-7 3.89A2.2 2.2 0 0 0 3 8.18"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconChainlinkLink;
