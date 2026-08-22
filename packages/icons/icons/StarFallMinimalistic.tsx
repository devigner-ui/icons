import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStarFallMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconStarFallMinimalistic(
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
              d="M14.72 8.16c1.56-.92 2.33-1.38 2.9-1.06.57.33.56 1.23.53 3.02v.46c-.02.5-.02.76.07.98.1.23.28.4.65.73l.33.3c1.29 1.18 1.93 1.77 1.78 2.43s-1 .96-2.69 1.55l-.43.15c-.48.17-.72.26-.9.43-.2.16-.3.4-.51.87l-.2.42c-.75 1.65-1.13 2.47-1.8 2.55-.66.09-1.17-.63-2.18-2.05l-.27-.37c-.28-.4-.43-.6-.64-.72-.2-.12-.46-.15-.95-.2l-.46-.03c-1.75-.16-2.63-.24-2.89-.85-.25-.61.28-1.35 1.34-2.82l.27-.38c.3-.42.45-.63.5-.87.06-.24.02-.5-.08-.99l-.08-.45c-.33-1.75-.5-2.62.01-3.08.5-.46 1.34-.2 3.01.31l.43.14c.48.14.72.22.96.19s.46-.17.9-.43z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.5 6.5 13 6M9.5 2.5l2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.5 6.5 4 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m6 12-1.5-1.5M2 8l.5.5"
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
              d="M14.72 8.16c1.56-.92 2.33-1.38 2.9-1.06.57.33.56 1.23.53 3.02v.46c-.02.5-.02.76.07.98.1.23.28.4.65.73l.33.3c1.29 1.18 1.93 1.77 1.78 2.43s-1 .96-2.69 1.55l-.43.15c-.48.17-.72.26-.9.43-.2.16-.3.4-.51.87l-.2.42c-.75 1.65-1.13 2.47-1.8 2.55-.66.09-1.17-.63-2.18-2.05l-.27-.37c-.28-.4-.43-.6-.64-.72-.2-.12-.46-.15-.95-.2l-.46-.03c-1.75-.16-2.63-.24-2.89-.85-.25-.61.28-1.35 1.34-2.82l.27-.38c.3-.42.45-.63.5-.87.06-.24.02-.5-.08-.99l-.08-.45c-.33-1.75-.5-2.62.01-3.08.5-.46 1.34-.2 3.01.31l.43.14c.48.14.72.22.96.19s.46-.17.9-.43z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.97 1.97c.3-.3.77-.3 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06m-5.5 1.5c.3-.3.77-.3 1.06 0l2.5 2.5a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06m9 2c.3-.3.77-.3 1.06 0l.5.5a.75.75 0 0 1-1.06 1.06l-.5-.5a.75.75 0 0 1 0-1.06m-11 2c.3-.3.77-.3 1.06 0l.5.5a.75.75 0 0 1-1.06 1.06l-.5-.5a.75.75 0 0 1 0-1.06m2.5 2.5c.3-.3.77-.3 1.06 0l1.5 1.5a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06"
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
              d="M14.72 8.16c1.56-.92 2.33-1.38 2.9-1.06.57.33.56 1.23.53 3.02v.46c-.02.5-.02.76.07.98.1.23.28.4.65.73l.33.3c1.29 1.18 1.93 1.77 1.78 2.43s-1 .96-2.69 1.55l-.43.15c-.48.17-.72.26-.9.43-.2.16-.3.4-.51.87l-.2.42c-.75 1.65-1.13 2.47-1.8 2.55-.66.09-1.17-.63-2.18-2.05l-.27-.37c-.28-.4-.43-.6-.64-.72-.2-.12-.46-.15-.95-.2l-.46-.03c-1.75-.16-2.63-.24-2.89-.85-.25-.61.28-1.35 1.34-2.82l.27-.38c.3-.42.45-.63.5-.87.06-.24.02-.5-.08-.99l-.08-.45c-.33-1.75-.5-2.62.01-3.08.5-.46 1.34-.2 3.01.31l.43.14c.48.14.72.22.96.19s.46-.17.9-.43z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.97 1.97c.3-.3.77-.3 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06m-5.5 1.5c.3-.3.77-.3 1.06 0l2.5 2.5a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06m9 2c.3-.3.77-.3 1.06 0l.5.5a.75.75 0 0 1-1.06 1.06l-.5-.5a.75.75 0 0 1 0-1.06m-11 2c.3-.3.77-.3 1.06 0l.5.5a.75.75 0 0 1-1.06 1.06l-.5-.5a.75.75 0 0 1 0-1.06m2.5 2.5c.3-.3.77-.3 1.06 0l1.5 1.5a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStarFallMinimalistic;
