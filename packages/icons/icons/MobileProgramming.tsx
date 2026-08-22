import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMobileProgramming = forwardRef<SVGSVGElement, IconProps>(
  function IconMobileProgramming(
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
              d="m9.6 2 .03 1.53c.02.81.69 1.47 1.5 1.47h3.02c.83 0 1.5-.68 1.5-1.5V2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m17.67 17-2 2 2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m20.67 17 2 2-2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.67 22h-5c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v7"
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
              d="M18.67 13a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-.84 6.27c.25.25.25.66 0 .92a.6.6 0 0 1-.46.19.6.6 0 0 1-.46-.19l-1.73-1.73a.66.66 0 0 1 0-.92l1.73-1.73a.66.66 0 0 1 .92 0c.25.25.25.66 0 .92L16.56 18zm4.32-.81-1.73 1.73a.6.6 0 0 1-.46.19.6.6 0 0 1-.46-.19.66.66 0 0 1 0-.92L20.77 18l-1.27-1.27a.66.66 0 0 1 0-.92.66.66 0 0 1 .92 0l1.73 1.73c.25.26.25.66 0 .92"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.67 7v7a5 5 0 0 0-6 8h-7c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h.93l.04 1.53c.02.81.69 1.47 1.5 1.47h3.03c.82 0 1.5-.68 1.5-1.5V2h1c3.5 0 5 2 5 5"
              fill="currentColor"
            />
            <path
              d="M15.67 2v1.5c0 .82-.68 1.5-1.5 1.5h-3.03c-.81 0-1.48-.66-1.5-1.47L9.6 2z"
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
              d="M18.67 13a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-.84 6.27c.25.25.25.66 0 .92a.6.6 0 0 1-.46.19.6.6 0 0 1-.46-.19l-1.73-1.73a.66.66 0 0 1 0-.92l1.73-1.73a.66.66 0 0 1 .92 0c.25.25.25.66 0 .92L16.56 18zm4.32-.81-1.73 1.73a.6.6 0 0 1-.46.19.6.6 0 0 1-.46-.19.66.66 0 0 1 0-.92L20.78 18l-1.27-1.27a.66.66 0 0 1 0-.92.66.66 0 0 1 .92 0l1.73 1.73c.24.26.24.66-.01.92"
              fill="currentColor"
            />
            <path
              d="M21.67 7v4.47a.5.5 0 0 1-.66.47 6.48 6.48 0 0 0-7.96 9.3.5.5 0 0 1-.43.76H8.67c-3.5 0-5-2-5-5V7c0-2.66 1.18-4.53 3.89-4.92a.5.5 0 0 1 .56.49l.03 1.01a3 3 0 0 0 3 2.92h3.02a3 3 0 0 0 3-3v-.93c0-.3.26-.54.55-.5 2.75.37 3.95 2.25 3.95 4.93"
              fill="currentColor"
            />
            <path
              d="M15.67 3v.5c0 .82-.68 1.5-1.5 1.5h-3.03a1.5 1.5 0 0 1-1.5-1.46l-.01-.51a1 1 0 0 1 1-1.03h4.04a1 1 0 0 1 1 1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMobileProgramming;
