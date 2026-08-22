import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEmptyWallet = forwardRef<SVGSVGElement, IconProps>(
  function IconEmptyWallet(
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
              d="M18.71 13.55a2 2 0 0 0-.6 1.63c.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19A3.77 3.77 0 0 1 18.41 22H6.93a3.77 3.77 0 0 1-3.76-3.76v-6.73a3.77 3.77 0 0 1 3.76-3.76h11.48a3.77 3.77 0 0 1 3.76 3.76v1.44h-2.02a2 2 0 0 0-1.44.6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.17 12.41V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3a1.9 1.9 0 0 1 2.57 1.78v3.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.23 13.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6h2.08c.56.02 1 .47 1 1.02"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.67 12h7"
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
              d="M18.71 13.55a2 2 0 0 0-.6 1.63c.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19A3.77 3.77 0 0 1 18.41 22H6.93a3.77 3.77 0 0 1-3.76-3.76v-6.73a3.77 3.77 0 0 1 3.76-3.76h11.48a3.77 3.77 0 0 1 3.76 3.76v1.44h-2.02a2 2 0 0 0-1.44.6"
              fill="currentColor"
            />
            <path
              d="M15.52 3.95v3.8H6.93a3.77 3.77 0 0 0-3.76 3.76V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3a1.9 1.9 0 0 1 2.57 1.78"
              fill="currentColor"
            />
            <path
              d="M23.23 13.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6h2.08c.56.02 1 .47 1 1.02"
              fill="currentColor"
            />
            <path
              d="M14.67 12.75h-7a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75"
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
              d="M15.52 3.95v3.8h-1.5v-3.8c0-.27-.24-.4-.4-.4l-.15.03-7.93 2.99c-.53.2-.87.7-.87 1.27v.67a3.7 3.7 0 0 0-1.5 3V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3q.33-.12.67-.12c1 0 1.9.81 1.9 1.9"
              fill="currentColor"
            />
            <path
              d="M22.17 14.5v1a.5.5 0 0 1-.49.5h-1.46c-.53 0-1.01-.39-1.05-.91a1 1 0 0 1 .99-1.09h1.51c.29.01.5.23.5.5"
              fill="currentColor"
            />
            <path
              d="M20.15 12.95h1.02a1 1 0 0 0 1-1v-.44a3.77 3.77 0 0 0-3.76-3.76H6.93a3.74 3.74 0 0 0-3.76 3.76v6.73A3.77 3.77 0 0 0 6.93 22h11.48a3.77 3.77 0 0 0 3.76-3.76v-.19a1 1 0 0 0-1-1h-.87c-.96 0-1.88-.59-2.13-1.52a2 2 0 0 1 .54-1.98 2 2 0 0 1 1.44-.6m-5.48-.2h-7a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconEmptyWallet;
