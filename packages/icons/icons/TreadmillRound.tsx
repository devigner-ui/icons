import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTreadmillRound = forwardRef<SVGSVGElement, IconProps>(
  function IconTreadmillRound(
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
            <circle
              cx="15"
              cy="4.00049"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M11 16v-1.2a3 3 0 0 0-1.17-2.27q-.2-.14-.25-.21a2 2 0 0 1-.13-2.75c.05-.06.1-.12.23-.24l.33-.33a1.9 1.9 0 0 0-2.35-2.96L4.5 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3 15.5h.38c1.36 0 2.66-.54 3.62-1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.5 10a4.8 4.8 0 0 0 3 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M19.49 22H3.09a1.09 1.09 0 0 1-.2-2.16l16.17-2.82a2.51 2.51 0 1 1 .43 4.98"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m19.12 10.02-.74-.1zm3.03-2.28a.75.75 0 1 0-.3-1.47zm-3.4 9.87 1.11-7.48-1.48-.22-1.12 7.48zm1.11-7.48a2.9 2.9 0 0 1 2.29-2.4l-.3-1.46a4.4 4.4 0 0 0-3.47 3.64z"
              fill="currentColor"
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
            <path d="M17 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.26 5.4a2.65 2.65 0 0 1 3.28 4.12l-.33.33-.2.2c-.43.5-.4 1.26.09 1.72l.2.18h.02l.19.17c.75.68 1.2 1.63 1.24 2.64V16a.75.75 0 0 1-1.5 0v-1.17a2.3 2.3 0 0 0-.9-1.73l-.02-.02-.27-.23a2.75 2.75 0 0 1 .07-4.04l.02-.02.33-.33a1.15 1.15 0 0 0-1.43-1.8L4.9 8.64a.75.75 0 0 1-.8-1.28z"
              fill="currentColor"
            />
            <path
              d="M22.15 7.74a.75.75 0 1 0-.3-1.47 4.4 4.4 0 0 0-3.47 3.64l-1.11 7.42L2.9 19.84A1.09 1.09 0 0 0 3.09 22h16.4a2.51 2.51 0 1 0-.43-4.98l-.23.04 1.03-6.93a2.9 2.9 0 0 1 2.29-2.4"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M11.79 9.76c.13-.39.55-.6.95-.47a4 4 0 0 0 2.52 0 .75.75 0 0 1 .48 1.42 5.5 5.5 0 0 1-3.48 0 .75.75 0 0 1-.47-.95"
                fill="currentColor"
              />
              <path
                d="M7.53 13.47c.3.3.3.77 0 1.06a6 6 0 0 1-4.15 1.72H3a.75.75 0 0 1 0-1.5h.38c1.16 0 2.27-.46 3.09-1.28.3-.3.77-.3 1.06 0"
                fill="currentColor"
              />
            </g>
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
            <path d="M17 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.26 5.4a2.65 2.65 0 0 1 3.28 4.12l-.33.33-.2.2c-.43.5-.4 1.26.09 1.72l.2.18h.02l.19.17c.75.68 1.2 1.63 1.24 2.64V16a.75.75 0 0 1-1.5 0v-1.17a2.3 2.3 0 0 0-.9-1.73l-.02-.02-.27-.23a2.75 2.75 0 0 1 .07-4.04l.02-.02.33-.33a1.15 1.15 0 0 0-1.43-1.8L4.9 8.64a.75.75 0 0 1-.8-1.28zm4.53 4.36c.13-.39.55-.6.95-.47a4 4 0 0 0 2.52 0 .75.75 0 0 1 .48 1.42 5.5 5.5 0 0 1-3.48 0 .75.75 0 0 1-.47-.95m-4.26 3.71c.3.3.3.77 0 1.06a6 6 0 0 1-4.15 1.72H3a.75.75 0 0 1 0-1.5h.38c1.16 0 2.27-.46 3.09-1.28.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
            <path
              d="M22.15 7.74a.75.75 0 1 0-.3-1.47 4.4 4.4 0 0 0-3.47 3.64l-1.11 7.42L2.9 19.84A1.09 1.09 0 0 0 3.09 22h16.4a2.51 2.51 0 1 0-.43-4.98l-.23.04 1.03-6.93a2.9 2.9 0 0 1 2.29-2.4"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTreadmillRound;
