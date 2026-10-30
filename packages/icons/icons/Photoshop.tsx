import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPhotoshop = forwardRef<SVGSVGElement, IconProps>(
  function IconPhotoshop(
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
            d="M7.5 16V8h2a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M16.5 11h-1.25a1.25 1.25 0 0 0 0 2.5 1.25 1.25 0 0 1 0 2.5H14"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
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
              d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.5 16V8h2a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.5 11h-1.25a1.25 1.25 0 0 0 0 2.5 1.25 1.25 0 0 1 0 2.5H14"
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
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M24 0H0v24h24z"
              fill="none"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
              fill="currentColor"
            />
            <path
              d="M7.5 16.75a.76.76 0 0 1-.75-.75V8c0-.41.34-.75.75-.75h2a2.75 2.75 0 1 1 0 5.5H8.25V16c0 .41-.34.75-.75.75m.75-5.5H9.5a1.25 1.25 0 0 0 0-2.5H8.25z"
              fill="currentColor"
            />
            <path
              d="M15.25 16.75H14a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.25a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5 2 2 0 0 1-2-2c0-1.1.9-2 2-2h1.25c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25a.5.5 0 0 0-.5.5c0 .28.22.5.5.5a2 2 0 0 1 2 2 2 2 0 0 1-2 2"
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
              d="M9.5 8.75H8.25v2.5H9.5a1.25 1.25 0 0 0 0-2.5"
              fill="currentColor"
            />
            <path
              d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M9.5 12.75H8.25V16c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V8c0-.41.34-.75.75-.75h2a2.75 2.75 0 1 1 0 5.5m5.75 0a2 2 0 0 1 2 2 2 2 0 0 1-2 2H14a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.25a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5 2 2 0 0 1-2-2c0-1.1.9-2 2-2h1.25c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25a.5.5 0 0 0-.5.5c0 .28.22.5.5.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPhotoshop;
