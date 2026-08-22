import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEmptyWalletAdd = forwardRef<SVGSVGElement, IconProps>(
  function IconEmptyWalletAdd(
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
              d="M7.16 18.98H4.18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.67 17.52v2.99"
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
              d="M20.27 12.6h1.97v-1.4a3.67 3.67 0 0 0-3.66-3.66H7.4a3.67 3.67 0 0 0-3.66 3.66v4.26a3.9 3.9 0 0 1 5 5.95h9.84a3.67 3.67 0 0 0 3.66-3.66V16.6h-1.85c-1.05 0-2.02-.77-2.1-1.82-.06-.62.17-1.2.58-1.6q.56-.56 1.4-.58"
              fill="currentColor"
            />
            <path
              d="M15.76 3.84v3.7H7.4a3.67 3.67 0 0 0-3.66 3.66V7.63c0-1.16.71-2.19 1.8-2.6l7.72-2.92c1.2-.45 2.5.44 2.5 1.73"
              fill="currentColor"
            />
            <path
              d="M23.27 13.6v2a1 1 0 0 1-.97 1h-1.91c-1.05 0-2.02-.77-2.1-1.82a1.96 1.96 0 0 1 1.98-2.17h2.03a1 1 0 0 1 .97.99"
              fill="currentColor"
            />
            <path
              d="M14.94 12.41H8.12a.74.74 0 0 1-.73-.73c0-.4.33-.73.73-.73h6.82c.4 0 .73.33.73.73s-.33.73-.73.73"
              fill="currentColor"
            />
            <path
              d="M8.93 15.74a3.9 3.9 0 1 0-5.5 5.52 3.9 3.9 0 0 0 5.5-5.52m-3.47 1.3c0-.4.33-.73.73-.73s.73.33.74.73l-.01.72h.7c.4 0 .72.33.73.73 0 .41-.33.73-.74.74h-.7l.02.72a.74.74 0 0 1-.74.73.75.75 0 0 1-.73-.73v-.73H4.7a.7.7 0 0 1-.73-.73c0-.4.33-.73.73-.73h.76z"
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
              d="M8.93 21.25a3.9 3.9 0 1 0-5.52-5.5 3.9 3.9 0 0 0 5.52 5.5m-1.3-3.47c.4 0 .74.33.74.73a.75.75 0 0 1-.74.73H6.9v.7c0 .4-.33.72-.73.73a.75.75 0 0 1-.74-.74v-.7l-.72.01a.75.75 0 0 1-.73-.73.75.75 0 0 1 .73-.73h.73v-.76q0-.31.21-.52a.7.7 0 0 1 .52-.21c.4 0 .73.33.73.73v.76z"
              fill="currentColor"
            />
            <path
              d="M15.77 3.85v3.7H14.3v-3.7c0-.27-.24-.4-.4-.4l-.14.04-7.72 2.9c-.51.2-.85.69-.85 1.24v.65a3.6 3.6 0 0 0-1.46 2.93V7.63c0-1.16.71-2.19 1.8-2.6l7.72-2.92q.33-.1.66-.11c.97 0 1.85.79 1.85 1.85"
              fill="currentColor"
            />
            <path
              d="M22.24 14.12v.97c0 .26-.2.48-.48.49h-1.42c-.51 0-.98-.38-1.02-.89a.97.97 0 0 1 .96-1.06h1.47c.28 0 .49.22.49.49"
              fill="currentColor"
            />
            <path
              d="M20.27 12.6h1c.53 0 .97-.43.97-.97v-.43a3.67 3.67 0 0 0-3.66-3.66H7.4a3.64 3.64 0 0 0-3.66 3.66v1.74c0 .37.4.6.74.48a5.36 5.36 0 0 1 7.05 5.07c0 .7-.18 1.47-.48 2.16-.15.35.1.76.47.76h7.06a3.67 3.67 0 0 0 3.66-3.65v-.19a1 1 0 0 0-.98-.97h-.84c-.94 0-1.83-.58-2.08-1.48-.19-.74.04-1.46.53-1.93.36-.37.86-.58 1.4-.58m-5.33-.19h-4.87a.74.74 0 0 1-.73-.73c0-.4.33-.73.73-.73h4.87c.4 0 .73.33.73.73s-.33.73-.73.73"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconEmptyWalletAdd;
