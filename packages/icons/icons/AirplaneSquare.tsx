import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAirplaneSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconAirplaneSquare(
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
            d="m9.86 19 1.68-1.42a.8.8 0 0 1 .93 0L14.14 19c.39.2.87 0 1-.42l.33-.96a.8.8 0 0 0-.17-.74l-1.64-1.65a1 1 0 0 1-.21-.51v-1.85c0-.42.3-.62.7-.46l3.35 1.44c.55.24 1-.06 1-.66v-.93c0-.48-.35-1.04-.8-1.23l-3.94-1.7a.5.5 0 0 1-.3-.46V6.8c0-.68-.5-1.48-1.1-1.79a.8.8 0 0 0-.7 0 2.2 2.2 0 0 0-1.1 1.79v2.07c0 .18-.13.39-.29.46l-3.94 1.7c-.44.19-.81.75-.81 1.23v.93c0 .6.45.9 1.01.66l3.35-1.44c.38-.17.7.04.7.46v1.85c0 .17-.1.4-.21.51L8.7 16.87a.8.8 0 0 0-.17.74l.32.96c.14.43.61.63 1.01.43Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 12.95V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
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
              opacity={duotone ? "0.4" : "1"}
              d="m9.86 19 1.68-1.42a.8.8 0 0 1 .93 0L14.13 19c.39.2.87 0 1-.42l.33-.96a.8.8 0 0 0-.17-.74l-1.64-1.65a1 1 0 0 1-.21-.51v-1.85c0-.42.31-.62.7-.46l3.35 1.44c.55.24 1-.06 1-.66v-.93c0-.48-.35-1.04-.8-1.23l-3.94-1.7a.5.5 0 0 1-.3-.46V6.8c0-.68-.5-1.48-1.1-1.79a.8.8 0 0 0-.7 0 2.2 2.2 0 0 0-1.1 1.79v2.07c0 .18-.13.39-.29.46l-3.93 1.7c-.44.19-.81.75-.81 1.23v.93c0 .6.45.9 1 .66l3.36-1.44c.38-.17.7.04.7.46v1.85c0 .17-.1.4-.21.51L8.7 16.87a.8.8 0 0 0-.17.74l.32.96c.14.43.61.63 1.01.43"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
              fill="currentColor"
            />
            <path
              d="m9.86 19 1.68-1.42a.8.8 0 0 1 .93 0L14.13 19c.39.2.87 0 1-.42l.33-.96a.8.8 0 0 0-.17-.74l-1.64-1.65a1 1 0 0 1-.21-.51v-1.85c0-.42.31-.62.7-.46l3.35 1.44c.55.24 1-.06 1-.66v-.93c0-.48-.35-1.04-.8-1.23l-3.94-1.7a.5.5 0 0 1-.3-.46V6.8c0-.68-.5-1.48-1.1-1.79a.8.8 0 0 0-.7 0 2.2 2.2 0 0 0-1.1 1.79v2.07c0 .18-.13.39-.29.46l-3.93 1.7c-.44.19-.81.75-.81 1.23v.93c0 .6.45.9 1 .66l3.36-1.44c.38-.17.7.04.7.46v1.85c0 .17-.1.4-.21.51L8.7 16.87a.8.8 0 0 0-.17.74l.32.96c.14.43.61.63 1.01.43"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2m2.32 11.19c0 .6-.46.9-1.01.66l-3.35-1.44c-.39-.16-.7.04-.7.46v1.85c0 .16.09.39.21.51l1.64 1.65c.17.17.25.51.17.74l-.32.96c-.14.42-.62.62-1.01.42l-1.67-1.42a.8.8 0 0 0-.93 0L9.86 19c-.4.2-.87 0-1.01-.43l-.32-.96a.8.8 0 0 1 .17-.74l1.67-1.64a1 1 0 0 0 .21-.51v-1.85c0-.42-.32-.63-.7-.46l-3.35 1.44c-.56.24-1.01-.06-1.01-.66v-.93c0-.48.37-1.04.81-1.23l3.94-1.7c.16-.07.3-.28.3-.46V6.8c0-.68.49-1.49 1.1-1.79a.8.8 0 0 1 .69 0c.6.31 1.1 1.11 1.1 1.79v2.07c0 .18.13.39.3.46l3.94 1.7c.45.19.81.75.81 1.23z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAirplaneSquare;
