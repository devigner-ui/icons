import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEthereumClassic = forwardRef<SVGSVGElement, IconProps>(
  function IconEthereumClassic(
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
            d="m6.9 9.1 4.77-2.12a.8.8 0 0 1 .65 0l4.77 2.12c.42.19.81-.32.52-.68l-5-6.11a.77.77 0 0 0-1.24 0l-5 6.11c-.28.36.11.87.53.68Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m6.9 14.9 4.78 2.12q.33.14.65 0l4.78-2.12c.42-.19.81.32.52.68l-5 6.11a.77.77 0 0 1-1.24 0l-5-6.11c-.3-.36.08-.87.51-.68Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m16.01 12.62 1.23-.62L12 9.38 6.76 12 12 14.62l.8-.4"
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
              d="m6.9 9.1 4.77-2.12a.8.8 0 0 1 .65 0l4.77 2.12c.42.19.81-.32.52-.68l-5-6.11a.77.77 0 0 0-1.24 0l-5 6.11c-.28.36.11.87.53.68"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m6.9 14.9 4.78 2.12q.33.14.65 0l4.78-2.12c.42-.19.81.32.52.68l-5 6.11a.77.77 0 0 1-1.24 0l-5-6.11c-.3-.36.08-.87.51-.68"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 9.38 6.76 12 12 14.62 17.24 12z"
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
              opacity={duotone ? "0.4" : "1"}
              d="m6.9 9.1 4.77-2.12a.8.8 0 0 1 .65 0L17.1 9.1c.42.19.81-.32.52-.68l-5-6.11a.77.77 0 0 0-1.24 0l-5 6.11c-.29.36.1.87.52.68"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m6.9 14.9 4.78 2.12q.33.14.65 0l4.78-2.12c.42-.19.81.32.52.68l-5 6.11a.77.77 0 0 1-1.24 0l-5-6.11c-.3-.36.08-.87.51-.68"
              fill="currentColor"
            />
            <path
              d="m11.78 9.49-4.13 2.06a.5.5 0 0 0 0 .89l4.13 2.06a.5.5 0 0 0 .45 0l4.13-2.06a.5.5 0 0 0 0-.89l-4.13-2.06a.5.5 0 0 0-.45 0"
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
              d="m6.9 9.1 4.77-2.12a.8.8 0 0 1 .65 0l4.77 2.12c.42.19.81-.32.52-.68l-5-6.11a.77.77 0 0 0-1.24 0l-5 6.11c-.28.36.11.87.53.68"
              fill="currentColor"
            />
            <path
              d="m6.9 14.9 4.78 2.12q.33.14.65 0l4.78-2.12c.42-.19.81.32.52.68l-5 6.11a.77.77 0 0 1-1.24 0l-5-6.11c-.3-.36.08-.87.51-.68"
              fill="currentColor"
            />
            <path
              d="m11.78 9.49-4.13 2.06a.5.5 0 0 0 0 .89l4.13 2.06a.5.5 0 0 0 .45 0l4.13-2.06a.5.5 0 0 0 0-.89l-4.13-2.06a.5.5 0 0 0-.45 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconEthereumClassic;
