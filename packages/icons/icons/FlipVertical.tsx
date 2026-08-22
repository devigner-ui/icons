import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFlipVertical = forwardRef<SVGSVGElement, IconProps>(
  function IconFlipVertical(
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
              d="M5.89 2H18.1c1.7 0 2.56 0 2.84.54s-.22 1.24-1.2 2.62L18.6 6.74c-.44.62-.66.93-.98 1.1-.32.16-.7.16-1.46.16H7.83c-.76 0-1.14 0-1.46-.17-.32-.16-.54-.47-.98-1.09L4.26 5.16c-.99-1.38-1.49-2.08-1.2-2.62C3.32 2 4.17 2 5.88 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M5.89 22H18.1c1.7 0 2.56 0 2.84-.54s-.22-1.24-1.2-2.62l-1.14-1.58c-.44-.62-.66-.93-.98-1.1-.32-.16-.7-.16-1.46-.16H7.83c-.76 0-1.14 0-1.46.17-.32.16-.54.47-.98 1.09l-1.13 1.58c-.99 1.38-1.49 2.08-1.2 2.62.27.54 1.12.54 2.83.54"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 12h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 12h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12h4"
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
                d="M18.11 22H5.9c-1.7 0-2.56 0-2.84-.54s.22-1.24 1.2-2.62l1.14-1.58c.44-.62.66-.93.98-1.1.32-.16.7-.16 1.46-.16h8.34c.76 0 1.14 0 1.46.17.32.16.54.47.98 1.09l1.13 1.58c1 1.38 1.49 2.08 1.2 2.62-.27.54-1.12.54-2.83.54"
                fill="currentColor"
              />
              <path
                d="M18.11 2H5.9c-1.7 0-2.56 0-2.84.54s.22 1.24 1.2 2.62L5.4 6.74c.44.62.66.93.98 1.1.32.16.7.16 1.46.16h8.34c.76 0 1.14 0 1.46-.17.32-.16.54-.47.98-1.09l1.13-1.58c1-1.38 1.49-2.08 1.2-2.62C20.68 2 19.83 2 18.12 2"
                fill="currentColor"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.25 12c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m8 0c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m8 0c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
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
              d="M18.11 22H5.9c-1.7 0-2.56 0-2.84-.54s.22-1.24 1.2-2.62l1.14-1.58c.44-.62.66-.93.98-1.1.32-.16.7-.16 1.46-.16h8.34c.76 0 1.14 0 1.46.17.32.16.54.47.98 1.09l1.13 1.58c.99 1.38 1.49 2.08 1.2 2.62-.27.54-1.12.54-2.83.54"
              fill="currentColor"
            />
            <path
              d="M18.11 2H5.9c-1.7 0-2.56 0-2.84.54s.22 1.24 1.2 2.62L5.4 6.74c.44.62.66.93.98 1.1.32.16.7.16 1.46.16h8.34c.76 0 1.14 0 1.46-.17.32-.16.54-.47.98-1.09l1.13-1.58c.99-1.38 1.49-2.08 1.2-2.62C20.68 2 19.83 2 18.12 2"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.25 12c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m8 0c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m8 0c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFlipVertical;
