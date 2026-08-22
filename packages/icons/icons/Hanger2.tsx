import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHanger2 = forwardRef<SVGSVGElement, IconProps>(function IconHanger2(
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
            d="M9.54 3.9c0-1.05.95-1.9 2.12-1.9s2.12.85 2.12 1.9q-.01.77-.49 1.3c-.6.65-1.49 1.3-1.49 2.15v.28m0 0c.73 0 1.47.2 2.08.61l7.44 5.01c1.3.88.61 2.75-1.02 2.75H18m-6.2-8.37c-.72 0-1.45.22-2.05.65l-7.1 4.99C1.39 14.17 2.1 16 3.7 16H6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6 18c0-1.89 0-2.83.59-3.41C7.17 14 8.1 14 10 14h4c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41s0 2.83-.59 3.41C16.83 22 15.9 22 14 22h-4c-1.89 0-2.83 0-3.41-.59C6 20.83 6 19.9 6 18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M6 18c0-1.89 0-2.83.59-3.41C7.17 14 8.1 14 10 14h4c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41s0 2.83-.59 3.41C16.83 22 15.9 22 14 22h-4c-1.89 0-2.83 0-3.41-.59C6 20.83 6 19.9 6 18"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.29 3.9c0-.56.53-1.15 1.37-1.15s1.37.6 1.37 1.16q0 .47-.29.78l-.38.38-.08.09q-.26.25-.53.55c-.26.31-.55.73-.66 1.23q-.95.15-1.77.73l-7.1 4.99a2.16 2.16 0 0 0-.82 2.58 2.4 2.4 0 0 0 2.3 1.51H6a6 6 0 0 1 .2-1.5H3.7c-.5 0-.8-.27-.9-.55-.1-.26-.06-.57.29-.82l7.1-4.99a3 3 0 0 1 1.62-.51q.9 0 1.66.48l7.43 5.01c.35.24.4.56.3.82-.1.28-.4.56-.9.56h-2.5q.18.55.2 1.5h2.3a2.4 2.4 0 0 0 2.31-1.53c.33-.9.08-1.95-.87-2.6l-7.44-5a4 4 0 0 0-1.61-.66l.2-.28.44-.46.08-.07.43-.45c.45-.48.7-1.11.7-1.8 0-1.53-1.37-2.65-2.88-2.65S8.79 2.37 8.79 3.91a.75.75 0 0 0 1.5 0"
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
            d="M10.29 3.9c0-.56.53-1.15 1.37-1.15s1.37.6 1.37 1.16q0 .47-.29.78l-.38.38-.08.09q-.26.25-.53.55c-.26.31-.55.73-.66 1.23q-.95.15-1.77.73l-7.1 4.99a2.16 2.16 0 0 0-.82 2.58 2.4 2.4 0 0 0 2.3 1.51H6V18c0 1.89 0 2.83.59 3.41C7.17 22 8.1 22 10 22h4c1.89 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41v-1.25h2.3a2.4 2.4 0 0 0 2.31-1.53c.33-.9.08-1.95-.87-2.6l-7.44-5a4 4 0 0 0-1.61-.66l.2-.28.44-.46.08-.07.43-.45c.45-.48.7-1.11.7-1.8 0-1.53-1.37-2.65-2.88-2.65S8.79 2.37 8.79 3.91a.75.75 0 0 0 1.5 0m7.52 11.35h2.49c.5 0 .8-.28.9-.56.1-.26.05-.58-.3-.82l-7.43-5a3 3 0 0 0-1.66-.49 3 3 0 0 0-1.63.51l-7.1 5c-.34.24-.38.55-.28.81.1.28.4.55.9.55h2.5q.11-.4.39-.66C7.17 14 8.1 14 10 14h4c1.89 0 2.83 0 3.41.59q.27.27.4.66"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHanger2;
