import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShoppingBag = forwardRef<SVGSVGElement, IconProps>(
  function IconShoppingBag(
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
            d="M20.41 17.03H3.62l-.09.5C3.24 19.99 4 22 7.5 22h9c3.5 0 4.26-2.01 3.96-4.47l-.9-7.5C19.33 8.09 19 6.5 15.6 6.5H8.4c-3.4 0-3.74 1.59-3.97 3.53L4.1 12.7l-.09.73"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8 8V4.5C8 3 9 2 10.5 2h3C15 2 16 3 16 4.5V8"
            strokeWidth={strokeWidth}
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
              d="M8.4 6.5h7.2c3.4 0 3.74 1.59 3.97 3.53l.9 7.5C20.76 19.99 20 22 16.5 22H7.51C4 22 3.24 19.99 3.54 17.53l.9-7.5C4.66 8.09 5 6.5 8.4 6.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 8V4.5C8 3 9 2 10.5 2h3C15 2 16 3 16 4.5V8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.41 17.03H8"
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
              d="M16.49 22.4H7.51c-3.51 0-4.27-2.01-3.98-4.47l.9-7.5C4.66 8.49 5 6.9 8.4 6.9h7.2c3.4 0 3.74 1.59 3.97 3.53l.75 6.25.15 1.25.03.24c.21 2.35-.61 4.23-4.01 4.23"
              fill="currentColor"
            />
            <path
              d="M16 9.15a.76.76 0 0 1-.75-.75V4.9c0-1.08-.67-1.75-1.75-1.75h-3c-1.08 0-1.75.67-1.75 1.75v3.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V4.9a3.1 3.1 0 0 1 3.25-3.25h3a3.1 3.1 0 0 1 3.25 3.25v3.5c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="m20.5 18.17-.09.01H8a.75.75 0 1 1 0-1.5h12.32l.15 1.25z"
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
              d="M16 9.15a.76.76 0 0 1-.75-.75V4.9c0-1.08-.67-1.75-1.75-1.75h-3c-1.08 0-1.75.67-1.75 1.75v3.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V4.9a3.1 3.1 0 0 1 3.25-3.25h3a3.1 3.1 0 0 1 3.25 3.25v3.5c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M8 18.18a.75.75 0 1 1 0-1.5h11.76a.5.5 0 0 0 .5-.56l-.68-5.69C19.34 8.49 19 6.9 15.6 6.9H8.4c-3.4 0-3.74 1.59-3.97 3.53l-.9 7.5c-.29 2.46.47 4.47 3.98 4.47h8.98c3.16 0 4.09-1.63 4.04-3.75a.5.5 0 0 0-.5-.47z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconShoppingBag;
