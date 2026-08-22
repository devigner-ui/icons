import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEmptyWalletTime = forwardRef<SVGSVGElement, IconProps>(
  function IconEmptyWalletTime(
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
              d="M18.72 13.55a2 2 0 0 0-.6 1.63c.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19A3.77 3.77 0 0 1 18.42 22H8.32a3.98 3.98 0 0 0-2.64-7 4 4 0 0 0-2.5.88v-4.37a3.77 3.77 0 0 1 3.76-3.76h11.48a3.77 3.77 0 0 1 3.76 3.76v1.44h-2.02a2 2 0 0 0-1.44.6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.18 11.51V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3a1.9 1.9 0 0 1 2.57 1.78v3.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.24 13.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6h2.08c.56.02 1 .47 1 1.02"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.68 12h7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.68 19a4 4 0 0 1-4 4 4 4 0 1 1 4-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.93 17.75v1.5L4.68 20"
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
              d="M5.68 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8m1 4.25c0 .26-.14.51-.36.64l-1.25.75a.75.75 0 0 1-1.03-.25.75.75 0 0 1 .26-1.03l.89-.53v-1.08c0-.41.34-.75.75-.75s.75.34.75.75z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.16 12.95h2.02v-1.44a3.77 3.77 0 0 0-3.76-3.76H6.94a3.77 3.77 0 0 0-3.76 3.76v4.37A4 4 0 0 1 8.3 22h10.1a3.77 3.77 0 0 0 3.77-3.76v-1.19h-1.9c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6"
              fill="currentColor"
            />
            <path
              d="M15.53 3.95v3.8h-8.6a3.77 3.77 0 0 0-3.75 3.76V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3a1.9 1.9 0 0 1 2.57 1.78"
              fill="currentColor"
            />
            <path
              d="M23.24 13.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6h2.08c.56.02 1 .47 1 1.02"
              fill="currentColor"
            />
            <path
              d="M14.68 12.75h-7a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h7c.4 0 .75.34.75.75s-.34.75-.75.75"
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
              d="M5.68 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8m1 4.25c0 .26-.14.51-.36.64l-1.25.75a.75.75 0 0 1-1.03-.25.75.75 0 0 1 .26-1.03l.89-.53v-1.08a.74.74 0 0 1 .74-.75c.4 0 .75.34.75.75z"
              fill="currentColor"
            />
            <path
              d="M15.53 3.95v3.8h-1.5v-3.8c0-.27-.24-.4-.4-.4l-.15.03-7.93 2.99c-.53.2-.87.7-.87 1.27v.67a3.7 3.7 0 0 0-1.5 3V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3q.34-.12.67-.12c1 0 1.9.81 1.9 1.9"
              fill="currentColor"
            />
            <path
              d="M22.18 14.5v1a.5.5 0 0 1-.5.5h-1.45c-.53 0-1.01-.39-1.05-.91a1 1 0 0 1 .99-1.09h1.5c.3.01.5.23.5.5"
              fill="currentColor"
            />
            <path
              d="M20.16 12.95h1.02a1 1 0 0 0 1-1v-.44a3.77 3.77 0 0 0-3.76-3.76H6.94a3.74 3.74 0 0 0-3.76 3.76v1.78c0 .38.4.62.76.5A5.5 5.5 0 0 1 11.18 19a6 6 0 0 1-.5 2.21c-.15.36.1.79.49.79h7.25a3.77 3.77 0 0 0 3.76-3.76v-.19a1 1 0 0 0-1-1h-.87c-.96 0-1.88-.59-2.13-1.52-.2-.76.04-1.5.54-1.98a2 2 0 0 1 1.44-.6m-5.48-.2h-5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5c.4 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconEmptyWalletTime;
