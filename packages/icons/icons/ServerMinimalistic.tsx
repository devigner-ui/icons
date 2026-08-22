import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconServerMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconServerMinimalistic(
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
              d="M2 18c0-.93 0-1.4.15-1.77a2 2 0 0 1 1.08-1.08C3.6 15 4.07 15 5 15h14c.93 0 1.4 0 1.77.15a2 2 0 0 1 1.08 1.08c.15.37.15.84.15 1.77s0 1.4-.15 1.77a2 2 0 0 1-1.08 1.08c-.37.15-.84.15-1.77.15H5c-.93 0-1.4 0-1.77-.15a2 2 0 0 1-1.08-1.08C2 19.4 2 18.93 2 18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M2 12c0-.93 0-1.4.15-1.77a2 2 0 0 1 1.08-1.08C3.6 9 4.07 9 5 9h14c.93 0 1.4 0 1.77.15a2 2 0 0 1 1.08 1.08c.15.37.15.84.15 1.77s0 1.4-.15 1.77a2 2 0 0 1-1.08 1.08c-.37.15-.84.15-1.77.15H5c-.93 0-1.4 0-1.77-.15a2 2 0 0 1-1.08-1.08C2 13.4 2 12.93 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M2 6c0-.93 0-1.4.15-1.77a2 2 0 0 1 1.08-1.08C3.6 3 4.07 3 5 3h14c.93 0 1.4 0 1.77.15a2 2 0 0 1 1.08 1.08C22 4.6 22 5.07 22 6s0 1.4-.15 1.77a2 2 0 0 1-1.08 1.08C20.4 9 19.93 9 19 9H5c-.93 0-1.4 0-1.77-.15a2 2 0 0 1-1.08-1.08C2 7.4 2 6.93 2 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="5"
              cy="12"
              r="1"
              fill="currentColor"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="5"
              cy="6"
              r="1"
              fill="currentColor"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="5"
              cy="18"
              r="1"
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
            <path
              d="M5.68 12c0 .58-.47 1.06-1.05 1.06a1.06 1.06 0 0 1 0-2.12c.58 0 1.05.48 1.05 1.06"
              fill="currentColor"
            />
            <path
              d="M5.68 18.35a1.05 1.05 0 1 1-2.1 0c0-.58.47-1.06 1.05-1.06s1.05.48 1.05 1.06"
              fill="currentColor"
            />
            <path
              d="M5.68 5.65c0 .58-.47 1.06-1.05 1.06a1.06 1.06 0 0 1 0-2.12c.58 0 1.05.47 1.05 1.06"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m3.52 15.72 1.11-.01h14.74l1.11.01q.39.03.55.1c.38.17.69.48.85.87.05.12.08.27.1.54q.03.39.02 1.12t-.02 1.13q-.03.38-.1.54-.26.6-.85.86-.16.07-.55.1c-.27.02-.61.02-1.11.02H4.63c-.5 0-.84 0-1.11-.02a2 2 0 0 1-.55-.1 1.6 1.6 0 0 1-.85-.86 2 2 0 0 1-.1-.54q-.03-.4-.02-1.13t.02-1.12c.02-.27.05-.42.1-.54q.26-.61.85-.86.16-.08.55-.1m1.11 3.7c.58 0 1.05-.48 1.05-1.07 0-.58-.47-1.06-1.05-1.06a1.06 1.06 0 0 0 0 2.12"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.63 8.3c-.5 0-.84 0-1.11-.02a2 2 0 0 1-.55-.1 1.7 1.7 0 0 1-.85-.88 2 2 0 0 1-.1-.54Q1.99 6.38 2 5.65c0-.5 0-.85.02-1.13q.03-.37.1-.54.26-.6.85-.86.16-.07.55-.1C3.79 3 4.13 3 4.63 3h14.74c.5 0 .84 0 1.11.02q.39.03.55.1c.38.16.69.47.85.86q.07.17.1.54.03.4.02 1.13t-.02 1.12c-.02.27-.05.42-.1.54q-.26.61-.85.86-.16.08-.55.1c-.27.02-.61.02-1.11.02zm0 1.05c-.5 0-.84 0-1.11.02q-.39.03-.55.1-.59.27-.85.86-.07.16-.1.55T2 12q0 .73.02 1.12t.1.55q.26.6.85.86.16.07.55.1l1.11.02h14.74c.5 0 .84 0 1.11-.02q.39-.03.55-.1c.38-.16.69-.47.85-.86q.07-.16.1-.55T22 12q0-.73-.02-1.12a2 2 0 0 0-.1-.55q-.26-.6-.85-.86a2 2 0 0 0-.55-.1c-.27-.02-.61-.02-1.11-.02zM5.68 12c0 .58-.47 1.06-1.05 1.06a1.06 1.06 0 0 1 0-2.12c.58 0 1.05.48 1.05 1.06M4.63 6.7a1.06 1.06 0 0 0 0-2.12c-.58 0-1.05.48-1.05 1.07 0 .58.47 1.06 1.05 1.06"
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
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m3.52 15.72 1.11-.01h14.74l1.11.01q.39.03.55.1c.38.17.69.48.85.87.05.12.08.27.1.54q.03.39.02 1.12t-.02 1.13q-.03.38-.1.54-.26.6-.85.86-.16.07-.55.1c-.27.02-.61.02-1.11.02H4.63c-.5 0-.84 0-1.11-.02a2 2 0 0 1-.55-.1 1.6 1.6 0 0 1-.85-.86 2 2 0 0 1-.1-.54q-.03-.4-.02-1.13t.02-1.12c.02-.27.05-.42.1-.54q.26-.61.85-.86.16-.08.55-.1m1.11 3.7c.58 0 1.05-.48 1.05-1.07 0-.58-.47-1.06-1.05-1.06a1.06 1.06 0 0 0 0 2.12"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.63 8.3c-.5 0-.84 0-1.11-.02a2 2 0 0 1-.55-.1 1.7 1.7 0 0 1-.85-.88 2 2 0 0 1-.1-.54Q1.99 6.38 2 5.65c0-.5 0-.85.02-1.13q.03-.37.1-.54.26-.6.85-.86.16-.07.55-.1C3.79 3 4.13 3 4.63 3h14.74c.5 0 .84 0 1.11.02q.39.03.55.1c.38.16.69.47.85.86q.07.17.1.54.03.4.02 1.13t-.02 1.12c-.02.27-.05.42-.1.54q-.26.61-.85.86-.16.08-.55.1c-.27.02-.61.02-1.11.02zm0 1.05c-.5 0-.84 0-1.11.02q-.39.03-.55.1-.59.27-.85.86-.07.16-.1.55T2 12q0 .73.02 1.12t.1.55q.26.6.85.86.16.07.55.1l1.11.02h14.74c.5 0 .84 0 1.11-.02q.39-.03.55-.1c.38-.16.69-.47.85-.86q.07-.16.1-.55T22 12q0-.73-.02-1.12a2 2 0 0 0-.1-.55q-.26-.6-.85-.86a2 2 0 0 0-.55-.1c-.27-.02-.61-.02-1.11-.02zM5.68 12c0 .58-.47 1.06-1.05 1.06a1.06 1.06 0 0 1 0-2.12c.58 0 1.05.48 1.05 1.06M4.63 6.7a1.06 1.06 0 0 0 0-2.12c-.58 0-1.05.48-1.05 1.07 0 .58.47 1.06 1.05 1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconServerMinimalistic;
