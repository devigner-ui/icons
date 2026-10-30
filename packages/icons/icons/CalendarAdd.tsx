import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCalendarAdd = forwardRef<SVGSVGElement, IconProps>(
  function IconCalendarAdd(
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
            d="M18 15.75h-2m0 0h-2m2 0v-2m0 2v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M7 3.75v-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17 3.75v-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M21.5 8.75H10.75M2 8.75h3.88"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M14 21.75h-4c-3.77 0-5.66 0-6.83-1.17S2 17.52 2 13.75v-2c0-3.77 0-5.66 1.17-6.83S6.23 3.75 10 3.75h4c3.77 0 5.66 0 6.83 1.17S22 7.98 22 11.75v2c0 3.77 0 5.66-1.17 6.83-.65.65-1.53.94-2.83 1.07"
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
              d="M2 11.75c0-3.77 0-5.66 1.17-6.83S6.23 3.75 10 3.75h4c3.77 0 5.66 0 6.83 1.17S22 7.98 22 11.75v2c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-4c-3.77 0-5.66 0-6.83-1.17S2 17.52 2 13.75z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M18 15.75h-2m0 0h-2m2 0v-2m0 2v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 3.75v-1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17 3.75v-1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 8.75h20"
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
              d="M6.96 2c.42 0 .76.31.76.7v1.39l2.26-.01h6.3V2.7c0-.38.34-.69.76-.69s.76.31.76.7v1.45c1.45.1 2.4.37 3.1 1 .7.65.98 1.52 1.1 2.85v1H2V8c.12-1.33.4-2.2 1.1-2.84s1.65-.9 3.1-1V2.68c0-.38.34-.69.76-.69"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 14v-2c0-.84-.01-2.33-.03-3H2.01c-.02.67 0 2.16 0 3v2c0 3.77 0 5.66 1.17 6.83S6.23 22 10 22h4c3.77 0 5.66 0 6.83-1.17S22 17.77 22 14"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 13.25c.41 0 .75.34.75.75v1.25H18a.75.75 0 0 1 0 1.5h-1.25V18a.75.75 0 0 1-1.5 0v-1.25H14a.75.75 0 0 1 0-1.5h1.25V14c0-.41.34-.75.75-.75"
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
              d="M7.75 2.65a.75.75 0 1 0-1.5 0v1.58c-1.44.12-2.38.4-3.08 1.1-.7.69-.98 1.63-1.1 3.07h19.85c-.11-1.44-.4-2.38-1.1-3.08-.69-.7-1.63-.97-3.07-1.09V2.65a.75.75 0 0 0-1.5 0v1.51L14 4.15h-4l-2.25.01z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 12.15v2c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-4c-3.77 0-5.66 0-6.83-1.17S2 17.92 2 14.15v-2l.01-2.25H22zm-6 1.25c.41 0 .75.34.75.75v1.25H18a.75.75 0 0 1 0 1.5h-1.25v1.25a.75.75 0 0 1-1.5 0V16.9H14a.75.75 0 0 1 0-1.5h1.25v-1.25c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCalendarAdd;
