import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDocumentFilter = forwardRef<SVGSVGElement, IconProps>(
  function IconDocumentFilter(
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
              d="M4.02 2h8.9c.74 0 1.35.61 1.35 1.35v1.48c0 .54-.34 1.21-.67 1.55l-2.9 2.56c-.4.34-.67 1.01-.67 1.55v2.9c0 .4-.27.94-.61 1.15l-.94.61c-.88.54-2.09-.07-2.09-1.15v-3.57c0-.47-.27-1.08-.54-1.42l-2.56-2.7a2.2 2.2 0 0 1-.61-1.35V3.41C2.67 2.61 3.28 2 4.02 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 12v3c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-3.12-.78-5.08-2.59-6.1a9 9 0 0 0-2.46-.66"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.67 13h5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.67 17h7"
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
              d="M3.9 1h8.13c.68 0 1.23.56 1.23 1.25v1.37c0 .5-.31 1.12-.62 1.43L9.99 7.42c-.37.31-.62.94-.62 1.43v2.68c0 .37-.25.87-.55 1.06l-.86.56c-.8.5-1.91-.06-1.91-1.06V8.78c0-.44-.25-1-.49-1.31l-2.34-2.5a2 2 0 0 1-.55-1.25V2.29C2.67 1.56 3.22 1 3.9 1"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.67 2h-2.4a.5.5 0 0 0-.5.5v1.12c0 .99-.53 1.96-1.05 2.49L11 8.54l-.11.25v2.75c0 .91-.54 1.9-1.28 2.35l-.82.53a2.76 2.76 0 0 1-4.12-1.55v-2.66a.5.5 0 0 0-.15-.35l-1-1c-.32-.31-.85-.09-.85.35V17a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"
              fill="currentColor"
            />
            <path
              d="M18.67 13.75h-5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M18.67 17.75h-7a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75"
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
              d="M3.9 1h8.13c.68 0 1.23.56 1.23 1.25v1.37c0 .5-.31 1.12-.62 1.43L10 7.43c-.37.31-.61.93-.61 1.43v2.68c0 .37-.25.87-.55 1.06l-.87.57c-.8.5-1.91-.06-1.91-1.06V8.8c0-.44-.25-1-.49-1.31l-2.34-2.5a2 2 0 0 1-.56-1.24V2.31C2.67 1.56 3.22 1 3.9 1"
              fill="currentColor"
            />
            <path
              d="M17.67 2h-2.4a.5.5 0 0 0-.5.5v1.12c0 .99-.53 1.96-1.05 2.49L11 8.54l-.11.25v2.75c0 .91-.54 1.9-1.28 2.35l-.82.53a2.76 2.76 0 0 1-3.97-1.15 2 2 0 0 1-.15-.83V10.2a.5.5 0 0 0-.15-.35l-1-1a.5.5 0 0 0-.85.35V17a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5m1 15.75h-7a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75m0-4h-5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDocumentFilter;
