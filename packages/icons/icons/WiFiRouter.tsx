import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWiFiRouter = forwardRef<SVGSVGElement, IconProps>(
  function IconWiFiRouter(
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
              d="M7 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              d="M2 15c0-1.89 0-2.83.59-3.41C3.17 11 4.1 11 6 11h12c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41s0 2.83-.59 3.41C20.83 19 19.9 19 18 19H6c-1.89 0-2.83 0-3.41-.59C2 17.83 2 16.9 2 15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M7 11 3 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m17 11 4-7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14 15h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.17 5.4A5.5 5.5 0 0 0 7 5.4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.96 6.66a3 3 0 0 0-5.76 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M13.08 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
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
              d="M2.59 12.34C2 12.92 2 13.86 2 15.75s0 2.83.59 3.41c.58.59 1.52.59 3.41.59h12c1.89 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41s0-2.83-.59-3.41c-.58-.59-1.52-.59-3.41-.59H6c-1.89 0-2.83 0-3.41.59M6 16.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.65 4.38a.75.75 0 1 0-1.3.74l3.79 6.63h1.72l-.2-.37z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.35 4.38a.75.75 0 0 1 1.3.74l-3.79 6.63h-1.72l.2-.37z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.08 3.5A4.8 4.8 0 0 0 7.7 6.43a.75.75 0 1 1-1.38-.57 6.25 6.25 0 0 1 11.55 0 .75.75 0 0 1-1.39.57 4.8 4.8 0 0 0-4.39-2.93"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.08 6c-1.02 0-1.88.68-2.16 1.62a.75.75 0 0 1-1.44-.42 3.75 3.75 0 0 1 7.2 0 .75.75 0 0 1-1.44.42A2.25 2.25 0 0 0 12.08 6"
              fill="currentColor"
            />
            <path
              d="M13.08 7.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
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
              d="M12.08 3.5A4.8 4.8 0 0 0 7.7 6.43a.75.75 0 1 1-1.38-.57 6.25 6.25 0 0 1 11.55 0 .75.75 0 0 1-1.39.57 4.8 4.8 0 0 0-4.39-2.93"
              fill="currentColor"
            />
            <path
              d="M12.08 6c-1.02 0-1.88.68-2.16 1.62a.75.75 0 0 1-1.44-.42 3.75 3.75 0 0 1 7.2 0 .75.75 0 0 1-1.44.42A2.25 2.25 0 0 0 12.08 6"
              fill="currentColor"
            />
            <path
              d="M13.08 7.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.65 4.38a.75.75 0 1 0-1.3.74l3.79 6.63H6c-1.89 0-2.83 0-3.41.59C2 12.92 2 13.86 2 15.75s0 2.83.59 3.41c.58.59 1.52.59 3.41.59h12c1.89 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41s0-2.83-.59-3.41c-.58-.59-1.52-.59-3.41-.59h-.14l3.8-6.63a.75.75 0 0 0-1.31-.74l-4 7-.22.37H7.88l-.23-.37zM6 16.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWiFiRouter;
