import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWifiRouter = forwardRef<SVGSVGElement, IconProps>(
  function IconWifiRouter(
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
            d="M7 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            fill="currentColor"
          />
          <path
            d="M10 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            fill="currentColor"
          />
          <path
            d="m7 12.5-4-7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m17 12.5 4-7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M14 16.5h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17.17 6.9A5.5 5.5 0 0 0 7 6.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M14.96 8.16a3 3 0 0 0-5.76 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M13.08 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            fill="currentColor"
          />
          <path
            d="M13 20.5H6c-1.89 0-2.83 0-3.41-.59C2 19.33 2 18.4 2 16.5s0-2.83.59-3.41c.58-.59 1.51-.59 3.41-.59h12c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41s0 2.83-.59 3.41c-.58.59-1.51.59-3.41.59h-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
              opacity={duotone ? "0.4" : "1"}
              d="M7 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              d="M2 16.5c0-1.89 0-2.83.59-3.41.58-.59 1.51-.59 3.41-.59h12c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41s0 2.83-.59 3.41c-.58.59-1.51.59-3.41.59H6c-1.89 0-2.83 0-3.41-.59C2 19.33 2 18.4 2 16.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m7 12.5-4-7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m17 12.5 4-7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14 16.5h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.17 6.9A5.5 5.5 0 0 0 7 6.9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.96 8.16a3 3 0 0 0-5.76 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M13.08 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.59 13.44C2 14.02 2 14.96 2 16.85s0 2.83.59 3.41c.58.59 1.52.59 3.41.59h12c1.89 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41s0-2.83-.59-3.41c-.58-.59-1.52-.59-3.41-.59H6c-1.89 0-2.83 0-3.41.59M6 17.85a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.65 5.48a.75.75 0 1 0-1.3.74l3.79 6.63h1.72l-.2-.37z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.35 5.48a.75.75 0 0 1 1.3.74l-3.79 6.63h-1.72l.2-.37z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.08 4.6A4.8 4.8 0 0 0 7.7 7.53a.75.75 0 1 1-1.38-.57 6.25 6.25 0 0 1 11.55 0 .75.75 0 0 1-1.39.57 4.8 4.8 0 0 0-4.39-2.93"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.08 7.1c-1.02 0-1.88.68-2.16 1.62a.75.75 0 0 1-1.44-.42 3.75 3.75 0 0 1 7.2 0 .75.75 0 0 1-1.44.42 2.25 2.25 0 0 0-2.16-1.62"
              fill="currentColor"
            />
            <path
              d="M13.08 8.85a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
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
              d="M12.08 4.6A4.8 4.8 0 0 0 7.7 7.53a.75.75 0 1 1-1.38-.57 6.25 6.25 0 0 1 11.55 0 .75.75 0 0 1-1.39.57 4.8 4.8 0 0 0-4.39-2.93"
              fill="currentColor"
            />
            <path
              d="M12.08 7.1c-1.02 0-1.88.68-2.16 1.62a.75.75 0 0 1-1.44-.42 3.75 3.75 0 0 1 7.2 0 .75.75 0 0 1-1.44.42 2.25 2.25 0 0 0-2.16-1.62"
              fill="currentColor"
            />
            <path
              d="M13.08 8.85a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.65 5.48a.75.75 0 1 0-1.3.74l3.79 6.63H6c-1.89 0-2.83 0-3.41.59C2 14.02 2 14.96 2 16.85s0 2.83.59 3.41c.58.59 1.52.59 3.41.59h12c1.89 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41s0-2.83-.59-3.41c-.58-.59-1.52-.59-3.41-.59h-.14l3.8-6.63a.75.75 0 0 0-1.31-.74l-4 7-.22.37H7.88l-.23-.37zM6 17.85a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWifiRouter;
