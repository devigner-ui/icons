import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDocumentCode2 = forwardRef<SVGSVGElement, IconProps>(
  function IconDocumentCode2(
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
              d="M11.67 22h5c3.5 0 5-2 5-5V7c0-3-1.5-5-5-5h-8c-3.5 0-5 2-5 5v7"
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
              d="m4.67 17-2 2 2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m7.67 17 2 2-2 2"
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
              opacity={duotone ? "0.4" : "1"}
              d="M21.67 7v10c0 3-1.5 5-5 5h-7a5.01 5.01 0 0 0-6-8V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.17 3.75c.41 0 .75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5h-2a2.76 2.76 0 0 1-2.75-2.75v-2c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M6.67 13a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-.84 6.27c.25.25.25.66 0 .92a.6.6 0 0 1-.46.19.6.6 0 0 1-.46-.19l-1.73-1.73a.66.66 0 0 1 0-.92l1.73-1.73a.66.66 0 0 1 .92 0c.25.25.25.66 0 .92L4.56 18zm4.32-.81-1.73 1.73a.6.6 0 0 1-.46.19.6.6 0 0 1-.46-.19.66.66 0 0 1 0-.92L8.77 18 7.5 16.73a.66.66 0 0 1 0-.92.66.66 0 0 1 .92 0l1.73 1.73c.25.26.25.66 0 .92"
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
              d="M16.67 2h-8c-3.5 0-5 2-5 5v4.47c0 .35.34.59.66.47a6.52 6.52 0 0 1 7.95 9.31.5.5 0 0 0 .43.75h3.96c3.5 0 5-2 5-5V7c0-3-1.5-5-5-5m2.5 7.25h-2a2.75 2.75 0 0 1-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M6.67 13a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-.84 6.27c.25.25.25.66 0 .92a.6.6 0 0 1-.46.19.6.6 0 0 1-.46-.19l-1.73-1.73a.66.66 0 0 1 0-.92l1.73-1.73a.66.66 0 0 1 .92 0c.25.25.25.66 0 .92L4.56 18zm4.32-.81-1.73 1.73a.6.6 0 0 1-.46.19.6.6 0 0 1-.46-.19.66.66 0 0 1 0-.92L8.78 18l-1.27-1.27a.66.66 0 0 1 0-.92.66.66 0 0 1 .92 0l1.73 1.73c.24.26.24.66-.01.92"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDocumentCode2;
