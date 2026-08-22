import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCardEdit = forwardRef<SVGSVGElement, IconProps>(function IconCardEdit(
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
            d="M2.67 8.5h9.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.67 16.5h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.17 16.5h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.67 12.03v4.08c0 3.51-.9 4.39-4.44 4.39H7.1c-3.55 0-4.44-.88-4.44-4.39V7.89c0-3.51.89-4.39 4.44-4.39h8.06"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m19.75 4.13-3.71 3.71a1.3 1.3 0 0 0-.31.62l-.2 1.42c-.07.51.29.87.8.8l1.42-.2c.2-.03.48-.17.62-.31l3.7-3.71c.65-.64.95-1.38 0-2.32-.94-.95-1.68-.65-2.32-.01"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.22 4.66a3.4 3.4 0 0 0 2.32 2.32"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M22.67 7.77V9h-20V7.54A4.14 4.14 0 0 1 6.82 3.4h9.85v2.57c0 1.27.76 2.03 2.03 2.03h2.94q.6 0 1.03-.23"
            fill="currentColor"
          />
          <path
            d="M2.67 9v7.46a4.14 4.14 0 0 0 4.15 4.14h11.7a4.14 4.14 0 0 0 4.15-4.14V9zm6 8.25h-2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75m6.5 0h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M21.64 1H18.7c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03V3.03c0-1.27-.76-2.03-2.03-2.03m-1.96 5.57a.3.3 0 0 1-.15.07l-1.04.15-.1.01a.5.5 0 0 1-.37-.15.5.5 0 0 1-.14-.47l.15-1.04.07-.15 1.7-1.7.09.23.12.22q.05.1.11.16l.15.2a2 2 0 0 0 .33.32l.15.12.17.11.23.12.23.09zm2.39-2.39-.32.32a.1.1 0 0 1-.08.04h-.03a2.2 2.2 0 0 1-1.5-1.5.1.1 0 0 1 .03-.11l.33-.33q.8-.8 1.58 0 .4.4.4.79-.01.39-.41.79"
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
            d="M14.17 4.61v2.93a1.2 1.2 0 0 1-1.2 1.21h-9.1c-.68 0-1.2-.56-1.2-1.23A4.15 4.15 0 0 1 6.8 3.4h6.15c.67 0 1.21.54 1.21 1.21"
            fill="currentColor"
          />
          <path
            d="M2.67 11.46v5a4.14 4.14 0 0 0 4.14 4.14h11.71a4.15 4.15 0 0 0 4.15-4.15v-4.99a1.2 1.2 0 0 0-1.2-1.21H3.87a1.2 1.2 0 0 0-1.2 1.21m6 5.79h-2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75m6.5 0h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M20.64 1.75H17.7c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03V3.78c0-1.27-.76-2.03-2.03-2.03m-1.96 5.57a.3.3 0 0 1-.15.07l-1.04.15-.1.01a.5.5 0 0 1-.37-.15.5.5 0 0 1-.14-.47l.15-1.04.07-.15 1.7-1.7.1.23.11.22q.05.1.11.16l.11.15.04.05a2 2 0 0 0 .33.32l.15.12.17.11.46.21zm2.4-2.39-.34.33q-.01.03-.07.03h-.03a2.2 2.2 0 0 1-1.5-1.5.1.1 0 0 1 .03-.11l.33-.33q.8-.8 1.58 0 .4.4.4.79t-.4.79"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCardEdit;
