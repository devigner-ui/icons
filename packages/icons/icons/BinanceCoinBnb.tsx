import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBinanceCoinBnb = forwardRef<SVGSVGElement, IconProps>(
  function IconBinanceCoinBnb(
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
              d="m12.67 2-6 6 2 2 4-4 4 4 2-2z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m12.67 22-6-6 2-2 4 4 4-4 2 2z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.42 9.75 18.17 12l2.25 2.25L22.67 12z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.92 9.75 2.67 12l2.25 2.25L7.17 12z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 9.53 10.19 12l2.48 2.48L15.14 12z"
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
            <path d="M24.67 0h-24v24h24z" fill="none" />
            <path
              d="m12.32 2.35-5.3 5.3a.5.5 0 0 0 0 .71l1.29 1.29c.2.2.51.2.71 0l3.29-3.29c.2-.2.51-.2.71 0l3.29 3.29c.2.2.51.2.71 0l1.29-1.29a.5.5 0 0 0 0-.71l-5.29-5.29a.5.5 0 0 0-.7-.01"
              fill="currentColor"
            />
            <path
              d="m12.32 21.65-5.29-5.29a.5.5 0 0 1 0-.71l1.29-1.29c.2-.2.51-.2.71 0l3.29 3.29c.2.2.51.2.71 0l3.29-3.29c.2-.2.51-.2.71 0l1.29 1.29c.2.2.2.51 0 .71l-5.29 5.29a.5.5 0 0 1-.71 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m20.77 10.1 1.54 1.54c.2.2.2.51 0 .71l-1.54 1.55a.5.5 0 0 1-.71 0l-1.54-1.54a.5.5 0 0 1 0-.71l1.54-1.54c.2-.2.52-.2.71-.01"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m5.27 10.1 1.54 1.54c.2.2.2.51 0 .71L5.27 13.9a.5.5 0 0 1-.71 0l-1.54-1.54a.5.5 0 0 1 0-.71l1.55-1.55a.5.5 0 0 1 .7 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m13.02 9.88 1.77 1.77c.2.2.2.51 0 .71l-1.77 1.77a.5.5 0 0 1-.71 0l-1.77-1.77a.5.5 0 0 1 0-.71l1.77-1.77c.2-.2.52-.2.71 0"
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
              d="M12.32 2.35 7.03 7.64a.5.5 0 0 0 0 .71l1.29 1.29c.2.2.51.2.71 0l3.29-3.29c.2-.2.51-.2.71 0l3.29 3.29c.2.2.51.2.71 0l1.29-1.29a.5.5 0 0 0 0-.71l-5.29-5.29a.5.5 0 0 0-.71 0"
              fill="currentColor"
            />
            <path
              d="m12.32 21.65-5.29-5.29a.5.5 0 0 1 0-.71l1.29-1.29c.2-.2.51-.2.71 0l3.29 3.29c.2.2.51.2.71 0l3.29-3.29c.2-.2.51-.2.71 0l1.29 1.29c.2.2.2.51 0 .71l-5.29 5.29a.5.5 0 0 1-.71 0"
              fill="currentColor"
            />
            <path
              d="m20.77 10.1 1.54 1.54c.2.2.2.51 0 .71l-1.54 1.54a.5.5 0 0 1-.71 0l-1.54-1.54a.5.5 0 0 1 0-.71l1.54-1.54c.2-.19.52-.19.71 0"
              fill="currentColor"
            />
            <path
              d="m5.27 10.1 1.54 1.54c.2.2.2.51 0 .71l-1.54 1.54a.5.5 0 0 1-.71 0l-1.54-1.54a.5.5 0 0 1 0-.71l1.54-1.54c.2-.19.52-.19.71 0"
              fill="currentColor"
            />
            <path
              d="m13.02 9.88 1.77 1.77c.2.2.2.51 0 .71l-1.77 1.77a.5.5 0 0 1-.71 0l-1.77-1.77a.5.5 0 0 1 0-.71l1.77-1.77c.2-.2.52-.2.71 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBinanceCoinBnb;
