import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStarFallDashes = forwardRef<SVGSVGElement, IconProps>(
  function IconStarFallDashes(
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
            d="M8.72 14.5c-.94 1.49-1.41 2.23-1.09 2.84s1.22.68 3.02.82l.47.04c.5.04.76.06.99.18s.39.32.72.72l.3.37c1.17 1.42 1.76 2.13 2.42 2.04.67-.1.98-.93 1.6-2.59l.15-.43c.18-.47.27-.71.44-.88s.4-.26.88-.44l.43-.16c1.66-.61 2.5-.92 2.59-1.58.09-.67-.62-1.26-2.04-2.43m-1.3-2.48c-.15-1.8-.22-2.7-.83-3.02-.6-.32-1.35.15-2.85 1.1l-.38.24c-.43.26-.64.4-.88.43-.25.03-.5-.04-1-.18l-.45-.13c-1.75-.5-2.63-.74-3.1-.27-.46.46-.21 1.34.28 3.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m13.9 6.5-.5-.5M9.9 2.5l2 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6.9 6.5 4.4 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m6.4 12-1.5-1.5M2.4 8l.5.5"
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
              d="M15.22 8.41c1.56-.92 2.33-1.38 2.9-1.06.57.33.56 1.23.53 3.02v.46c-.02.5-.02.76.07.98.1.23.28.4.65.73l.33.3c1.29 1.18 1.93 1.77 1.78 2.43s-1 .96-2.69 1.55l-.43.15c-.48.17-.72.26-.9.43-.2.16-.3.4-.51.87l-.2.42c-.75 1.65-1.13 2.47-1.8 2.55-.66.09-1.17-.63-2.18-2.05l-.27-.37c-.28-.4-.43-.6-.64-.72-.2-.12-.46-.15-.95-.2l-.46-.03c-1.75-.16-2.63-.24-2.89-.85-.25-.61.28-1.35 1.34-2.82l.27-.38c.3-.42.45-.63.5-.87.06-.24.02-.5-.08-.99l-.08-.45c-.33-1.75-.5-2.62.01-3.08.5-.46 1.34-.2 3.01.31l.43.14c.48.14.72.22.96.19s.46-.17.9-.43z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m14 6.75-.5-.5M10 2.75l2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m7 6.75-2.5-2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.5 12.25 5 10.75m-2.5-2.5.5.5"
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
              d="M15.62 8.81c1.56-.92 2.33-1.38 2.9-1.06.57.33.56 1.23.53 3.02v.46c-.02.5-.02.76.07.98.1.23.28.4.65.73l.33.3c1.29 1.18 1.93 1.77 1.78 2.43s-1 .96-2.69 1.55l-.43.15c-.48.17-.72.26-.9.43-.2.16-.3.4-.51.87l-.2.42c-.75 1.65-1.13 2.47-1.8 2.55-.66.09-1.17-.63-2.18-2.05l-.27-.37c-.28-.4-.43-.6-.64-.72-.2-.12-.46-.15-.95-.2l-.46-.03c-1.75-.16-2.63-.24-2.89-.85-.25-.61.28-1.35 1.34-2.82l.27-.38c.3-.42.45-.63.5-.87.06-.24.02-.5-.08-.99l-.08-.45c-.33-1.75-.5-2.62.01-3.08.5-.46 1.34-.2 3.01.31l.43.14c.48.14.72.22.96.19s.46-.17.9-.43z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.87 2.62c.3-.3.77-.3 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06m-5.5 1.5c.3-.3.77-.3 1.06 0l2.5 2.5a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06m9 2c.3-.3.77-.3 1.06 0l.5.5a.75.75 0 0 1-1.06 1.06l-.5-.5a.75.75 0 0 1 0-1.06m-11 2c.3-.3.77-.3 1.06 0l.5.5a.75.75 0 0 1-1.06 1.06l-.5-.5a.75.75 0 0 1 0-1.06m2.5 2.5c.3-.3.77-.3 1.06 0l1.5 1.5a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06"
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
              d="M15.62 8.81c1.56-.92 2.33-1.38 2.9-1.06.57.33.56 1.23.53 3.02v.46c-.02.5-.02.76.07.98.1.23.28.4.65.73l.33.3c1.29 1.18 1.93 1.77 1.78 2.43s-1 .96-2.69 1.55l-.43.15c-.48.17-.72.26-.9.43-.2.16-.3.4-.51.87l-.2.42c-.75 1.65-1.13 2.47-1.8 2.55-.66.09-1.17-.63-2.18-2.05l-.27-.37c-.28-.4-.43-.6-.64-.72-.2-.12-.46-.15-.95-.2l-.46-.03c-1.75-.16-2.63-.24-2.89-.85-.25-.61.28-1.35 1.34-2.82l.27-.38c.3-.42.45-.63.5-.87.06-.24.02-.5-.08-.99l-.08-.45c-.33-1.75-.5-2.62.01-3.08.5-.46 1.34-.2 3.01.31l.43.14c.48.14.72.22.96.19s.46-.17.9-.43z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.87 2.62c.3-.3.77-.3 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06m-5.5 1.5c.3-.3.77-.3 1.06 0l2.5 2.5a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06m9 2c.3-.3.77-.3 1.06 0l.5.5a.75.75 0 0 1-1.06 1.06l-.5-.5a.75.75 0 0 1 0-1.06m-11 2c.3-.3.77-.3 1.06 0l.5.5a.75.75 0 0 1-1.06 1.06l-.5-.5a.75.75 0 0 1 0-1.06m2.5 2.5c.3-.3.77-.3 1.06 0l1.5 1.5a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStarFallDashes;
