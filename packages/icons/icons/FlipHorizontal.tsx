import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFlipHorizontal = forwardRef<SVGSVGElement, IconProps>(
  function IconFlipHorizontal(
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
              d="M2 18.11V5.9c0-1.7 0-2.56.54-2.84s1.24.22 2.62 1.2L6.74 5.4c.62.44.93.66 1.1.98.16.32.16.7.16 1.46v8.34c0 .76 0 1.14-.17 1.46-.16.32-.47.54-1.09.98l-1.58 1.13c-1.38 1-2.08 1.49-2.62 1.2C2 20.68 2 19.83 2 18.12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M22 18.11V5.9c0-1.7 0-2.56-.54-2.84s-1.24.22-2.62 1.2L17.26 5.4c-.62.44-.93.66-1.1.98-.16.32-.16.7-.16 1.46v8.34c0 .76 0 1.14.17 1.46.16.32.47.54 1.09.98l1.58 1.13c1.38 1 2.08 1.49 2.62 1.2.54-.27.54-1.12.54-2.83"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 14v-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 6V2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 22v-4"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M22 5.89V18.1c0 1.7 0 2.56-.54 2.84s-1.24-.22-2.62-1.2l-1.58-1.14c-.62-.44-.93-.66-1.1-.98-.16-.32-.16-.7-.16-1.46V7.83c0-.76 0-1.14.17-1.46.16-.32.47-.54 1.09-.98l1.58-1.13c1.38-.99 2.08-1.48 2.62-1.2.54.27.54 1.12.54 2.83"
                fill="currentColor"
              />
              <path
                d="M2 5.89V18.1c0 1.7 0 2.56.54 2.84s1.24-.22 2.62-1.2l1.58-1.14c.62-.44.93-.66 1.1-.98.16-.32.16-.7.16-1.46V7.83c0-.76 0-1.14-.17-1.46-.16-.32-.47-.54-1.09-.98L5.16 4.26c-1.38-.99-2.08-1.48-2.62-1.2C2 3.32 2 4.17 2 5.88"
                fill="currentColor"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22.75a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4c0 .41-.34.75-.75.75m0-8a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4c0 .41-.34.75-.75.75m0-8a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 1.5 0v4c0 .41-.34.75-.75.75"
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
              d="M2 18.11V5.9c0-1.7 0-2.56.54-2.84s1.24.22 2.62 1.2L6.74 5.4c.62.44.93.66 1.1.98.16.32.16.7.16 1.46v8.34c0 .76 0 1.14-.17 1.46-.16.32-.47.54-1.09.98l-1.58 1.13c-1.38.99-2.08 1.49-2.62 1.2C2 20.68 2 19.83 2 18.12"
              fill="currentColor"
            />
            <path
              d="M22 18.11V5.9c0-1.7 0-2.56-.54-2.84s-1.24.22-2.62 1.2L17.26 5.4c-.62.44-.93.66-1.1.98-.16.32-.16.7-.16 1.46v8.34c0 .76 0 1.14.17 1.46.16.32.47.54 1.09.98l1.58 1.13c1.38.99 2.08 1.49 2.62 1.2.54-.27.54-1.12.54-2.83"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75m0 8c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75m0 8c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFlipHorizontal;
