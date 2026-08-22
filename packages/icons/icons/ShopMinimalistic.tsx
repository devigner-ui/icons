import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShopMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconShopMinimalistic(
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
              d="M21 22H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19 22v-7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5 22v-7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M16.53 2H7.47c-1.2 0-1.8 0-2.29.3-.48.3-.75.84-1.29 1.91L2.5 7.76c-.32.82-.6 1.79-.06 2.48A2 2 0 0 0 6 9a2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 0 0 3.57 1.24c.55-.7.26-1.66-.06-2.48l-1.4-3.55c-.54-1.07-.81-1.61-1.3-1.91-.48-.3-1.08-.3-2.28-.3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M19 14.25c.41 0 .75.34.75.75v6.25H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h1.25V15a.75.75 0 0 1 1.5 0v6.25h12.5V15c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M16.53 2H7.47c-1.2 0-1.8 0-2.29.3-.48.3-.75.84-1.29 1.91L2.5 7.76c-.32.82-.6 1.79-.06 2.48A2 2 0 0 0 6 9a2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 0 0 3.57 1.24c.55-.7.26-1.66-.06-2.48l-1.4-3.55c-.54-1.07-.81-1.61-1.3-1.91-.48-.3-1.08-.3-2.28-.3"
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
              d="M19 14.25c.41 0 .75.34.75.75v6.25H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h1.25V15a.75.75 0 0 1 1.5 0v6.25h12.5V15c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M16.53 2H7.47c-1.2 0-1.8 0-2.29.3-.48.3-.75.84-1.29 1.91L2.5 7.76c-.32.82-.6 1.79-.06 2.48A2 2 0 0 0 6 9a2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 0 0 3.57 1.24c.55-.7.26-1.66-.06-2.48l-1.4-3.55c-.54-1.07-.81-1.61-1.3-1.91-.48-.3-1.08-.3-2.28-.3"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconShopMinimalistic;
