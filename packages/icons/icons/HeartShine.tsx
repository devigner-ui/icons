import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHeartShine = forwardRef<SVGSVGElement, IconProps>(
  function IconHeartShine(
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
              d="M12 2v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 20v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20 12h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m6 18 .34-.34"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M17.66 6.34 18 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m18 18-.34-.34"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M6.34 6.34 6 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m10.78 15.35.47-.58zM12 9.9l-.54.52a.75.75 0 0 0 1.08 0zm1.22 5.45.46.59zm-1.97-.58c-.63-.5-1.24-.95-1.73-1.5a2.8 2.8 0 0 1-.77-1.89h-1.5c0 1.22.5 2.14 1.14 2.87.6.7 1.38 1.25 1.93 1.69zm-2.5-3.39c0-.71.4-1.28.9-1.51.43-.21 1.1-.2 1.8.55l1.1-1.03c-1.1-1.16-2.43-1.4-3.54-.88a3.2 3.2 0 0 0-1.76 2.87zm1.57 4.56c.2.16.44.36.7.5.25.16.59.31.98.31v-1.5s-.07 0-.22-.1a5 5 0 0 1-.53-.38zm3.36 0c.55-.44 1.33-1 1.93-1.7a4.3 4.3 0 0 0 1.14-2.86h-1.5c0 .76-.3 1.35-.77 1.88-.49.56-1.1 1-1.73 1.5zm3.07-4.56c0-1.26-.7-2.38-1.76-2.87-1.1-.52-2.44-.28-3.53.88l1.08 1.03c.71-.75 1.38-.76 1.82-.55.5.23.89.8.89 1.51zm-4 3.39q-.32.25-.53.39c-.15.09-.21.09-.22.09v1.5c.4 0 .73-.15.98-.3.26-.15.5-.35.7-.51z"
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
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75M1.25 12c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M12 19.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M5.47 5.47c.3-.3.77-.3 1.06 0l.34.34a.75.75 0 0 1-1.06 1.06l-.34-.34a.75.75 0 0 1 0-1.06"
                fill="currentColor"
              />
              <path
                d="M18.53 5.47c.3.3.3.77 0 1.06l-.34.34a.75.75 0 0 1-1.06-1.06l.34-.34c.3-.3.77-.3 1.06 0"
                fill="currentColor"
              />
              <path
                d="M6.87 17.13c.3.29.3.76 0 1.06l-.34.34a.75.75 0 1 1-1.06-1.06l.34-.34c.3-.3.77-.3 1.06 0"
                fill="currentColor"
              />
              <path
                d="M17.13 17.13c.29-.3.76-.3 1.06 0l.34.34a.75.75 0 0 1-1.06 1.06l-.34-.34a.75.75 0 0 1 0-1.06"
                fill="currentColor"
              />
            </g>
            <path
              d="M7 11.06c0 2.54 2.01 3.9 3.48 5.11.52.43 1.02.83 1.52.83s1-.4 1.52-.83C14.99 14.96 17 13.6 17 11.06s-2.75-4.35-5-1.9c-2.25-2.45-5-.64-5 1.9"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75M5.47 5.47c.3-.3.77-.3 1.06 0l.34.34a.75.75 0 0 1-1.06 1.06l-.34-.34a.75.75 0 0 1 0-1.06m13.06 0c.3.3.3.77 0 1.06l-.34.34a.75.75 0 0 1-1.06-1.06l.34-.34c.3-.3.77-.3 1.06 0M1.25 12c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M6.87 17.13c.3.29.3.76 0 1.06l-.34.34a.75.75 0 1 1-1.06-1.06l.34-.34c.3-.3.77-.3 1.06 0m10.26 0c.29-.3.76-.3 1.06 0l.34.34a.75.75 0 0 1-1.06 1.06l-.34-.34a.75.75 0 0 1 0-1.06M12 19.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M7 11.06c0 2.54 2.01 3.9 3.48 5.11.52.43 1.02.83 1.52.83s1-.4 1.52-.83C14.99 14.96 17 13.6 17 11.06s-2.75-4.35-5-1.9c-2.25-2.45-5-.64-5 1.9"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHeartShine;
