import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEmptyWalletChange = forwardRef<SVGSVGElement, IconProps>(
  function IconEmptyWalletChange(
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
              d="M3.18 13.24v-1.73a3.77 3.77 0 0 1 3.76-3.76h11.48a3.77 3.77 0 0 1 3.76 3.76v1.44h-2.02a2 2 0 0 0-1.44.6 2 2 0 0 0-.6 1.63c.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19A3.77 3.77 0 0 1 18.42 22h-5.48"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.18 12.41V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3a1.9 1.9 0 0 1 2.57 1.78v3.8"
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
              d="M3.68 16.5h5.34c.64 0 1.16.52 1.16 1.16v1.28"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.9 15.28 3.68 16.5l1.22 1.22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.18 21.78H4.84c-.64 0-1.16-.52-1.16-1.16v-1.28"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m8.96 23 1.22-1.22-1.22-1.22"
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
              d="M20.16 12.95h2.02v-1.44a3.77 3.77 0 0 0-3.76-3.76H6.94a3.77 3.77 0 0 0-3.76 3.76v3.65A4.5 4.5 0 1 1 9.02 22h9.4a3.77 3.77 0 0 0 3.76-3.76v-1.19h-1.9c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6"
              fill="currentColor"
            />
            <path
              d="M6.18 14a4.5 4.5 0 0 0-3.5 1.68A4.5 4.5 0 1 0 6.18 14m2.7 3.63c0 .31-.25.55-.55.55a.55.55 0 0 1-.55-.55v-.11a.2.2 0 0 0-.21-.22H5.31a.55.55 0 0 1-.48.81.6.6 0 0 1-.38-.16l-.81-.81-.12-.18a.6.6 0 0 1 0-.42l.12-.18.81-.8a.53.53 0 0 1 .77 0c.18.17.2.44.09.64h2.26c.72 0 1.31.59 1.31 1.32zM7.53 21.6a.5.5 0 0 1-.39-.16.5.5 0 0 1-.09-.64H4.79c-.72 0-1.31-.59-1.31-1.32v-.11c0-.31.25-.55.55-.55s.55.24.55.55v.11q.01.2.21.22h2.26a.55.55 0 0 1 .09-.65.55.55 0 0 1 .77 0l.81.81q.07.08.12.18a.6.6 0 0 1 0 .42l-.12.18-.81.8a.5.5 0 0 1-.38.16"
              fill="currentColor"
            />
            <path
              d="M15.53 3.95v3.8H6.94a3.77 3.77 0 0 0-3.76 3.76V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3a1.9 1.9 0 0 1 2.57 1.78"
              fill="currentColor"
            />
            <path
              d="M23.24 13.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6h2.08c.56.02 1 .47 1 1.02"
              fill="currentColor"
            />
            <path
              d="M14.68 12.75h-7a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75"
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
              d="M5.68 15a4 4 0 0 0-4 4 4 4 0 0 0 6.52 3.11A4 4 0 0 0 9.68 19a4 4 0 0 0-4-4m2.4 3.23c0 .28-.22.49-.49.49a.5.5 0 0 1-.49-.49v-.1q-.01-.18-.19-.2h-2a.48.48 0 0 1-.43.72.5.5 0 0 1-.34-.14l-.72-.72-.1-.16a.6.6 0 0 1 0-.37q.03-.09.1-.16l.72-.71c.2-.2.5-.2.68 0 .16.15.18.39.08.57h2.01c.64 0 1.16.52 1.16 1.17zm-1.2 3.53a.5.5 0 0 1-.35-.14.5.5 0 0 1-.08-.57h-2c-.65 0-1.17-.52-1.17-1.17v-.1c0-.28.22-.49.5-.49.26 0 .48.21.48.49v.1q.01.18.2.2h2a.5.5 0 0 1 .08-.58c.2-.19.5-.19.68 0l.72.72q.06.06.11.16.06.19 0 .37l-.1.15-.73.71a.5.5 0 0 1-.34.15"
              fill="currentColor"
            />
            <path
              d="M15.53 3.95v3.8h-1.5v-3.8c0-.27-.24-.4-.4-.4l-.15.03-7.93 2.99c-.53.2-.87.7-.87 1.27v.67a3.7 3.7 0 0 0-1.5 3V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3q.34-.12.67-.12c1 0 1.9.81 1.9 1.9"
              fill="currentColor"
            />
            <path
              d="M22.18 14.5v1a.5.5 0 0 1-.49.5h-1.46c-.53 0-1-.39-1.05-.91a1 1 0 0 1 1-1.09h1.5c.3.01.5.23.5.5"
              fill="currentColor"
            />
            <path
              d="M20.16 12.95h1.02a1 1 0 0 0 1-1v-.44a3.77 3.77 0 0 0-3.76-3.76H6.94a3.74 3.74 0 0 0-3.76 3.76v1.78c0 .38.4.62.76.5A5.5 5.5 0 0 1 11.18 19a6 6 0 0 1-.49 2.21c-.16.36.1.79.48.79h7.25a3.77 3.77 0 0 0 3.76-3.76v-.19a1 1 0 0 0-1-1h-.87c-.96 0-1.88-.59-2.13-1.52-.2-.76.04-1.5.54-1.98a2 2 0 0 1 1.44-.6m-5.48-.2h-5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconEmptyWalletChange;
