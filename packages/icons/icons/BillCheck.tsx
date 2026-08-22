import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBillCheck = forwardRef<SVGSVGElement, IconProps>(
  function IconBillCheck(
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
              d="M16.76 2H7.24c-1.16 0-1.74 0-2.21.16A3 3 0 0 0 3.16 4.1C3 4.58 3 5.18 3 6.37v14c0 .86.98 1.32 1.6.75a.95.95 0 0 1 1.3 0l.47.44c.65.59 1.61.59 2.26 0s1.6-.59 2.24 0 1.61.59 2.26 0 1.6-.59 2.24 0 1.61.59 2.26 0l.48-.44a.95.95 0 0 1 1.28 0c.63.57 1.61.11 1.61-.75v-14c0-1.2 0-1.79-.16-2.27-.3-.91-1-1.63-1.88-1.94C18.5 2 17.91 2 16.76 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m9.5 10.4 1.43 1.6 3.57-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 15.5h9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              d="M7.25 2h9.5c1.16 0 1.74 0 2.21.16a3 3 0 0 1 1.88 1.94c.16.48.16 1.08.16 2.27v14c0 .86-.98 1.32-1.6.75a.95.95 0 0 0-1.3 0l-.48.44c-.64.59-1.6.59-2.25 0a1.66 1.66 0 0 0-2.24 0c-.65.59-1.61.59-2.26 0a1.66 1.66 0 0 0-2.24 0c-.65.59-1.61.59-2.26 0l-.48-.44a.95.95 0 0 0-1.28 0c-.63.57-1.61.11-1.61-.75v-14c0-1.2 0-1.79.16-2.27.3-.91 1-1.63 1.88-1.94C5.5 2 6.09 2 7.24 2"
              fill="currentColor"
            />
            <path
              d="M15.06 8.5a.75.75 0 0 0-1.12-1l-3.01 3.37-.87-.97a.75.75 0 0 0-1.12 1l1.43 1.6a.75.75 0 0 0 1.12 0z"
              fill="currentColor"
            />
            <path
              d="M7.5 14.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5z"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.25 2h9.5c1.16 0 1.74 0 2.21.16a3 3 0 0 1 1.88 1.94c.16.48.16 1.08.16 2.27v14c0 .86-.98 1.32-1.6.75a.95.95 0 0 0-1.3 0l-.48.44c-.64.59-1.6.59-2.25 0a1.66 1.66 0 0 0-2.24 0c-.65.59-1.61.59-2.26 0a1.66 1.66 0 0 0-2.24 0c-.65.59-1.61.59-2.26 0l-.48-.44a.95.95 0 0 0-1.28 0c-.63.57-1.61.11-1.61-.75v-14c0-1.2 0-1.79.16-2.27.3-.91 1-1.63 1.88-1.94C5.5 2 6.09 2 7.24 2m7.81 6.5a.75.75 0 0 0-1.12-1l-3.01 3.37-.87-.97a.75.75 0 0 0-1.12 1l1.43 1.6a.75.75 0 0 0 1.12 0zM7.5 14.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBillCheck;
