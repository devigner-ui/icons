import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDocumentLike = forwardRef<SVGSVGElement, IconProps>(
  function IconDocumentLike(
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
              d="M21.67 7v10c0 3-1.5 5-5 5h-8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.17 4.5v2c0 1.1.9 2 2 2h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.15 15.49c-.33-1.03.06-2.3 1.13-2.65a1.5 1.5 0 0 1 1.66.52c.37-.57 1.1-.7 1.66-.52 1.08.35 1.46 1.62 1.14 2.65-.51 1.63-2.3 2.48-2.8 2.48a4 4 0 0 1-2.79-2.48"
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
              d="M21.67 7v10c0 3-1.5 5-5 5h-8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5"
              fill="currentColor"
            />
            <path
              d="M19.17 9.25h-2a2.75 2.75 0 0 1-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M8.15 15.49c-.33-1.03.06-2.3 1.13-2.65a1.5 1.5 0 0 1 1.66.52c.37-.57 1.1-.7 1.66-.52 1.08.35 1.46 1.62 1.14 2.65-.51 1.63-2.3 2.48-2.8 2.48a4 4 0 0 1-2.79-2.48"
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
              d="M16.67 2h-8c-3.5 0-5 2-5 5v10c0 3 1.5 5 5 5h8c3.5 0 5-2 5-5V7c0-3-1.5-5-5-5m-2.93 13.49c-.51 1.63-2.3 2.48-2.8 2.48a4 4 0 0 1-2.79-2.48c-.33-1.03.06-2.3 1.13-2.65a1.5 1.5 0 0 1 1.66.52c.37-.57 1.1-.7 1.66-.52 1.08.35 1.46 1.62 1.14 2.65m5.43-6.24h-2a2.75 2.75 0 0 1-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDocumentLike;
