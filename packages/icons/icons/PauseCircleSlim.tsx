import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPauseCircleSlim = forwardRef<SVGSVGElement, IconProps>(
  function IconPauseCircleSlim(
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
            d="M20.11 17.82A9.99 9.99 0 0 0 11.97 2c-2.13 0-4.1.66-5.72 1.79M3.79 6.25a10 10 0 0 0 13.83 14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.72 14.53V9.47c0-.48-.2-.67-.71-.67h-1.3c-.51 0-.71.19-.71.67v5.06c0 .48.2.67.71.67H10c.52 0 .72-.19.72-.67Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 14.53V9.47c0-.48-.2-.67-.71-.67H14c-.51 0-.71.19-.71.67v5.06c0 .48.2.67.71.67h1.29c.51 0 .71-.19.71-.67Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
              d="M11.97 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.72 14.53V9.47c0-.48-.2-.67-.71-.67h-1.3c-.51 0-.71.19-.71.67v5.06c0 .48.2.67.71.67H10c.52 0 .72-.19.72-.67"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 14.53V9.47c0-.48-.2-.67-.71-.67H14c-.51 0-.71.19-.71.67v5.06c0 .48.2.67.71.67h1.29c.51 0 .71-.19.71-.67"
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
              d="M11.97 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M10.72 15.03V8.97c0-.48-.2-.67-.71-.67h-1.3c-.51 0-.71.19-.71.67v6.06c0 .48.2.67.71.67H10c.52 0 .72-.19.72-.67"
              fill="currentColor"
            />
            <path
              d="M16 15.03V8.97c0-.48-.2-.67-.71-.67H14c-.51 0-.71.19-.71.67v6.06c0 .48.2.67.71.67h1.29c.51 0 .71-.19.71-.67"
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
              d="M11.97 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m-1.25 13.03c0 .48-.2.67-.71.67h-1.3c-.51 0-.71-.19-.71-.67V8.97c0-.48.2-.67.71-.67H10c.51 0 .71.19.71.67zm5.28 0c0 .48-.2.67-.71.67H14c-.51 0-.71-.19-.71-.67V8.97c0-.48.2-.67.71-.67h1.29c.51 0 .71.19.71.67z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPauseCircleSlim;
