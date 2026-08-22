import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMap = forwardRef<SVGSVGElement, IconProps>(function IconMap(
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
            d="M3 8.71c0-1.47 0-2.21.4-2.64q.2-.23.49-.36c.53-.24 1.23 0 2.63.46a7 7 0 0 0 2.14.52 3 3 0 0 0 .59-.08c.52-.12.99-.44 1.93-1.06l1.38-.92c1.2-.8 1.8-1.2 2.49-1.3.68-.09 1.37.14 2.73.6l1.17.39c.99.33 1.48.5 1.77.88.28.4.28.92.28 1.96v8.13c0 1.47 0 2.21-.4 2.64q-.2.23-.49.36c-.53.24-1.23 0-2.63-.46-1.07-.36-1.6-.54-2.14-.52a3 3 0 0 0-.59.08c-.52.12-.99.44-1.93 1.06l-1.38.92c-1.2.8-1.8 1.2-2.49 1.3-.68.09-1.37-.14-2.73-.6l-1.17-.39c-.99-.33-1.48-.5-1.77-.88C3 18.4 3 17.88 3 16.84z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 6.64V20.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 3v14"
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M3 8.71v8.13c0 1.04 0 1.56.28 1.96s.78.55 1.77.88l1.17.4c1.36.45 2.05.68 2.73.58H9v-14l-.34.03c-.54.02-1.07-.16-2.14-.52-1.4-.46-2.1-.7-2.63-.46q-.29.12-.5.36C3 6.5 3 7.24 3 8.71"
              fill="currentColor"
            />
            <path
              d="M21 15.3V7.15c0-1.04 0-1.56-.28-1.96s-.78-.55-1.77-.88l-1.17-.4c-1.36-.45-2.05-.68-2.73-.58H15v14l.34-.03c.54-.02 1.07.16 2.14.52 1.4.46 2.1.7 2.63.46q.29-.12.5-.36c.39-.43.39-1.17.39-2.64"
              fill="currentColor"
            />
          </g>
          <path
            d="M9.25 6.61 9 6.66v14c.67-.1 1.27-.5 2.44-1.29l1.38-.92c.94-.62 1.4-.94 1.93-1.06l.25-.05v-14c-.67.1-1.27.5-2.44 1.29l-1.38.92c-.94.62-1.4.94-1.93 1.06"
            fill="currentColor"
          />
          <path d="m17.48 17.83.25.08z" fill="currentColor" />
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
            d="M2.44 5.15C2 5.65 2 6.49 2 8.2v9.4c0 1.2 0 1.8.31 2.25.32.46.87.65 1.97 1.03l1.3.45c.7.24 1.23.43 1.69.55.3.08.56-.15.56-.46V6.27a.55.55 0 0 0-.42-.52c-.4-.1-.86-.26-1.5-.48-1.55-.54-2.33-.81-2.92-.54q-.32.15-.55.42"
            fill="currentColor"
          />
          <path
            d="m12.62 3.48-1.54 1.07q-.8.56-1.3.86a.5.5 0 0 0-.28.46v15.05c0 .37.38.6.7.4l1.18-.8 1.54-1.07q.8-.56 1.3-.86.27-.16.28-.46V3.08c0-.37-.38-.6-.7-.4z"
            fill="currentColor"
          />
          <path
            d="m19.72 3.12-1.3-.45a26 26 0 0 0-1.69-.55c-.3-.08-.56.15-.56.46v15.15c0 .25.18.46.42.52.4.1.86.26 1.5.48 1.55.54 2.33.81 2.92.54q.32-.15.55-.42c.44-.5.44-1.34.44-3.05V6.41c0-1.2 0-1.8-.31-2.26-.32-.46-.87-.65-1.97-1.03"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMap;
