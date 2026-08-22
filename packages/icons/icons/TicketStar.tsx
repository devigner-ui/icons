import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTicketStar = forwardRef<SVGSVGElement, IconProps>(
  function IconTicketStar(
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
              d="M17.66 4h-10c-3.83 0-4.9.92-4.99 4.5a3.5 3.5 0 0 1 0 7c.1 3.58 1.16 4.5 5 4.5h10c4 0 5-1 5-5V9c0-4-1-5-5-5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.66 4v3.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.66 16.5V20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m15.7 9.33.61 1.25q.1.19.31.23l1.38.2c.34.05.48.47.23.71l-1 .97a.4.4 0 0 0-.12.37l.24 1.37c.06.34-.3.6-.6.44l-1.23-.65a.4.4 0 0 0-.39 0l-1.23.65a.41.41 0 0 1-.6-.44l.24-1.37a.4.4 0 0 0-.12-.37l-.99-.97a.42.42 0 0 1 .23-.71l1.38-.2a.4.4 0 0 0 .31-.23l.61-1.25c.14-.31.58-.31.73 0"
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
              d="M22.67 9.21v5.58c0 4.1-1.25 5.35-5.35 5.35h-6.74v-3.02a.7.7 0 0 0-.7-.7V7.58a.7.7 0 0 0 .7-.7V3.86h6.74c4.1 0 5.35 1.25 5.35 5.35"
              fill="currentColor"
            />
            <path
              d="M19.14 11.9a.6.6 0 0 0 .16-.63.6.6 0 0 0-.5-.42l-1.28-.19a.2.2 0 0 1-.11-.08l-.57-1.16a.63.63 0 0 0-1.11 0l-.57 1.16a.1.1 0 0 1-.12.08l-1.28.19a.61.61 0 0 0-.34 1.05l.93.9q.06.05.04.14l-.22 1.27c-.04.23.05.47.25.6a.6.6 0 0 0 .36.12q.15 0 .29-.07l1.15-.6q.07-.03.14 0l1.15.6a.62.62 0 0 0 .9-.66l-.22-1.27a.2.2 0 0 1 .04-.14z"
              fill="currentColor"
            />
            <path
              d="M9.88 7.58v8.84a.7.7 0 0 0-.7.7v3.02H8.02c-3.95 0-5.25-1.18-5.34-4.86a.7.7 0 0 1 .2-.5.7.7 0 0 1 .5-.21 2.56 2.56 0 0 0 0-5.13.7.7 0 0 1-.5-.21.7.7 0 0 1-.2-.5c.09-3.69 1.39-4.87 5.34-4.87h1.16v3.02c0 .39.32.7.7.7"
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
              d="M17.32 3.86h-6.74v3.02a.7.7 0 0 1-.7.7.7.7 0 0 1-.7-.7V3.86H8.02c-3.95 0-5.25 1.18-5.34 4.87q0 .29.2.5t.5.21c1.4 0 2.55 1.16 2.55 2.56s-1.15 2.56-2.55 2.56a.7.7 0 0 0-.5.21.7.7 0 0 0-.2.5c.1 3.69 1.4 4.87 5.34 4.87h1.16v-3.02c0-.39.32-.7.7-.7s.7.31.7.7v3.02h6.74c4.1 0 5.35-1.25 5.35-5.35V9.21c0-4.1-1.25-5.35-5.35-5.35m1.82 8.04-.93.9q-.06.05-.04.14l.22 1.27a.6.6 0 0 1-.25.61.6.6 0 0 1-.65.05l-1.15-.6a.2.2 0 0 0-.14 0l-1.15.6a1 1 0 0 1-.29.07.62.62 0 0 1-.61-.73l.22-1.27a.2.2 0 0 0-.04-.14l-.93-.9a.6.6 0 0 1-.16-.63.6.6 0 0 1 .5-.42l1.28-.19a.2.2 0 0 0 .12-.08l.57-1.16a.63.63 0 0 1 1.11 0l.57 1.16q.03.08.11.08l1.28.19c.24.03.43.2.5.42.1.22.03.46-.14.63"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTicketStar;
