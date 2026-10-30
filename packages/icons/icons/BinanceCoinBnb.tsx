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
            d="M9.05 4.95 6 8l2 2 4-4 4 4 2-2-6-6"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m12 22-6-6 2-2 4 4 4-4 2 2z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m17.5 12 2.25-2.25L22 12l-2.25 2.25z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m2 12 2.25-2.25L6.5 12l-2.25 2.25z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9.52 12 12 9.53 14.47 12 12 14.48z"
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
              d="M12 2 6 8l2 2 4-4 4 4 2-2z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m12 22-6-6 2-2 4 4 4-4 2 2z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.75 9.75 17.5 12l2.25 2.25L22 12z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.25 9.75 2 12l2.25 2.25L6.5 12z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 9.53 9.52 12 12 14.48 14.47 12z"
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
              d="m11.65 2.35-5.3 5.3a.5.5 0 0 0 0 .71l1.29 1.29c.2.2.51.2.71 0l3.29-3.29c.2-.2.51-.2.71 0l3.29 3.29c.2.2.51.2.71 0l1.29-1.29a.5.5 0 0 0 0-.71l-5.29-5.29a.5.5 0 0 0-.7-.01"
              fill="currentColor"
            />
            <path
              d="m11.65 21.65-5.29-5.29a.5.5 0 0 1 0-.71l1.29-1.29c.2-.2.51-.2.71 0l3.29 3.29c.2.2.51.2.71 0l3.29-3.29c.2-.2.51-.2.71 0l1.29 1.29c.2.2.2.51 0 .71l-5.29 5.29a.5.5 0 0 1-.71 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m20.1 10.1 1.54 1.54c.2.2.2.51 0 .71L20.1 13.9a.5.5 0 0 1-.71 0l-1.54-1.54a.5.5 0 0 1 0-.71l1.54-1.54c.2-.2.52-.2.71-.01"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m4.6 10.1 1.54 1.54c.2.2.2.51 0 .71L4.6 13.9a.5.5 0 0 1-.71 0l-1.54-1.54a.5.5 0 0 1 0-.71L3.9 10.1a.5.5 0 0 1 .7 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m12.35 9.88 1.77 1.77c.2.2.2.51 0 .71l-1.77 1.77a.5.5 0 0 1-.71 0l-1.77-1.77a.5.5 0 0 1 0-.71l1.77-1.77c.2-.2.52-.2.71 0"
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
              d="M11.65 2.35 6.36 7.64a.5.5 0 0 0 0 .71l1.29 1.29c.2.2.51.2.71 0l3.29-3.29c.2-.2.51-.2.71 0l3.29 3.29c.2.2.51.2.71 0l1.29-1.29a.5.5 0 0 0 0-.71l-5.29-5.29a.5.5 0 0 0-.71 0"
              fill="currentColor"
            />
            <path
              d="m11.65 21.65-5.29-5.29a.5.5 0 0 1 0-.71l1.29-1.29c.2-.2.51-.2.71 0l3.29 3.29c.2.2.51.2.71 0l3.29-3.29c.2-.2.51-.2.71 0l1.29 1.29c.2.2.2.51 0 .71l-5.29 5.29a.5.5 0 0 1-.71 0"
              fill="currentColor"
            />
            <path
              d="m20.1 10.1 1.54 1.54c.2.2.2.51 0 .71l-1.54 1.54a.5.5 0 0 1-.71 0l-1.54-1.54a.5.5 0 0 1 0-.71l1.54-1.54c.2-.19.52-.19.71 0"
              fill="currentColor"
            />
            <path
              d="m4.6 10.1 1.54 1.54c.2.2.2.51 0 .71L4.6 13.89a.5.5 0 0 1-.71 0l-1.54-1.54a.5.5 0 0 1 0-.71l1.54-1.54c.2-.19.52-.19.71 0"
              fill="currentColor"
            />
            <path
              d="m12.35 9.88 1.77 1.77c.2.2.2.51 0 .71l-1.77 1.77a.5.5 0 0 1-.71 0l-1.77-1.77a.5.5 0 0 1 0-.71l1.77-1.77c.2-.2.52-.2.71 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBinanceCoinBnb;
