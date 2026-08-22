import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEmptyWalletRemove = forwardRef<SVGSVGElement, IconProps>(
  function IconEmptyWalletRemove(
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
              d="M18.71 13.55a2 2 0 0 0-.6 1.63c.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19A3.77 3.77 0 0 1 18.41 22H8.3q.47-.4.79-.94.57-.92.58-2.06a4 4 0 0 0-6.5-3.12v-4.37a3.77 3.77 0 0 1 3.76-3.76h11.48a3.77 3.77 0 0 1 3.76 3.76v1.44h-2.02a2 2 0 0 0-1.44.6"
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
            <path
              d="M9.67 19a4 4 0 0 1-1.37 3 3.97 3.97 0 0 1-6.05-.94A3.97 3.97 0 0 1 5.67 15a4 4 0 0 1 4 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m6.74 20.04-2.12-2.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.72 17.96 4.6 20.07"
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
              d="M20.15 12.95h2.02v-1.44a3.77 3.77 0 0 0-3.76-3.76H6.93a3.77 3.77 0 0 0-3.76 3.76v6.73A3.77 3.77 0 0 0 6.93 22h11.48a3.77 3.77 0 0 0 3.76-3.76v-1.19h-1.9c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6M7.27 20.58a.77.77 0 0 1-1.06 0l-.53-.53-.55.55a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.55-.55-.53-.53a.75.75 0 0 1 0-1.06.77.77 0 0 1 1.07 0l.52.53.5-.51a.77.77 0 0 1 1.07 0c.29.3.29.77 0 1.07l-.51.5.53.52c.29.3.29.77 0 1.07"
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
            <path
              d="M5.67 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-1.58 3.46a.75.75 0 0 1 0-1.06.77.77 0 0 1 1.07 0l.52.53.5-.51a.77.77 0 0 1 1.07 0c.29.3.29.77 0 1.07l-.51.5.53.52c.29.3.29.77 0 1.07a.77.77 0 0 1-1.06 0l-.53-.53-.55.55a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.55-.55z"
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
              d="M5.67 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-1.58 3.46a.75.75 0 0 1 0-1.06.77.77 0 0 1 1.07 0l.52.53.5-.51a.77.77 0 0 1 1.07 0c.29.3.29.77 0 1.07l-.51.5.53.52c.29.3.29.77 0 1.07a.77.77 0 0 1-1.06 0l-.53-.53-.55.55a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.55-.55z"
              fill="currentColor"
            />
            <path
              d="M20.15 12.95h1.02a1 1 0 0 0 1-1v-.44a3.77 3.77 0 0 0-3.76-3.76H6.93a3.74 3.74 0 0 0-3.76 3.76v1.78c0 .38.4.62.76.5A5.5 5.5 0 0 1 11.17 19a6 6 0 0 1-.49 2.21c-.16.36.09.79.48.79h7.25a3.77 3.77 0 0 0 3.76-3.76v-.19a1 1 0 0 0-1-1h-.87c-.96 0-1.88-.59-2.13-1.52-.2-.76.04-1.5.54-1.98a2 2 0 0 1 1.44-.6m-5.48-.2h-5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconEmptyWalletRemove;
