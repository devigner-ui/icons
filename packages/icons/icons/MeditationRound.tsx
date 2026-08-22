import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMeditationRound = forwardRef<SVGSVGElement, IconProps>(
  function IconMeditationRound(
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
              d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m21 17-1.16-.39a3 3 0 0 1-.64-.32l-.1-.07a2.5 2.5 0 0 1-1.1-2.07 5 5 0 0 0-4.12-4.92l-.9-.15a8 8 0 0 0-1.97 0l-.89.15A5 5 0 0 0 6 14.15a2.5 2.5 0 0 1-1.1 2.07l-.1.07q-.3.2-.64.32L3 17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m9.5 16-.92 1.23-.3.38a2 2 0 0 1-.74.5l-.47.12-1.8.45A1.68 1.68 0 0 0 5.69 22h.69a8 8 0 0 0 4.74-1.58L13 19m1.5-3 .73.97c.34.46.51.69.73.86l.21.14c.25.13.52.2 1.08.34l1.47.37a1.68 1.68 0 0 1-.4 3.32h-.94c-.56 0-.85 0-1.12-.02a10 10 0 0 1-3.49-.81L11 20.5"
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
              d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.9 15.55a.75.75 0 1 1 1.2.9l-.92 1.23-.03.03q-.17.25-.34.42a3 3 0 0 1-1.52.82l-.04.01-1.8.45a.93.93 0 0 0 .23 1.84h.69c1.54 0 3.05-.5 4.29-1.43l1.89-1.42a.75.75 0 1 1 .9 1.2l-.9.68.49.18c.53.2.77.3 1.01.37a9 9 0 0 0 3.33.42h.94a.93.93 0 0 0 .22-1.84l-1.47-.37-.08-.02a5 5 0 0 1-1.19-.4l-.29-.2a5 5 0 0 1-.83-.93l-.05-.07-.73-.97a.75.75 0 1 1 1.2-.9l.73.97c.37.5.47.62.59.7l.13.1c.13.07.29.12.88.27l1.48.36a2.43 2.43 0 0 1-.6 4.8h-.96c-.54 0-.84 0-1.14-.02q-1.33-.07-2.6-.47c-.29-.09-.57-.2-1.08-.38l-1.43-.54a8.6 8.6 0 0 1-4.73 1.41h-.69a2.43 2.43 0 0 1-.59-4.8l1.8-.44.38-.11q.26-.1.46-.3l.25-.32z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M12 9.77c-.36 0-.68.02-.86.05l-.9.15a4.2 4.2 0 0 0-3.49 4.18c0 1.08-.53 2.1-1.43 2.7l-.1.06q-.39.27-.82.41l-1.16.4a.75.75 0 0 1-.48-1.43l1.16-.39q.25-.09.46-.23l.1-.07c.48-.32.77-.86.77-1.45 0-2.8 2-5.2 4.75-5.66l.89-.15a8 8 0 0 1 2.22 0l.9.15a5.7 5.7 0 0 1 4.74 5.66c0 .59.29 1.13.77 1.45l.1.07q.22.14.46.23l1.16.39a.75.75 0 0 1-.48 1.42l-1.16-.39q-.43-.15-.82-.4l-.1-.07a3.3 3.3 0 0 1-1.43-2.7 4.2 4.2 0 0 0-3.5-4.18l-.89-.15c-.18-.03-.5-.05-.86-.05"
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
              d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 9.77c-.36 0-.68.02-.86.05l-.9.15a4.2 4.2 0 0 0-3.49 4.18c0 1.08-.53 2.1-1.43 2.7l-.1.07q-.39.25-.82.4l-1.16.4a.75.75 0 0 1-.48-1.43l1.16-.39q.25-.09.46-.23l.1-.07c.48-.32.77-.86.77-1.45 0-2.8 2-5.2 4.75-5.66l.89-.15a8 8 0 0 1 2.22 0l.9.15a5.7 5.7 0 0 1 4.74 5.66c0 .59.29 1.13.77 1.45l.1.07q.21.14.46.23l1.16.39a.75.75 0 0 1-.48 1.42l-1.16-.39q-.43-.15-.82-.4l-.1-.07a3.3 3.3 0 0 1-1.43-2.7 4.2 4.2 0 0 0-3.5-4.18l-.89-.15c-.18-.03-.5-.05-.86-.05m-3.1 5.78a.75.75 0 0 1 1.2.9l-.92 1.23-.03.03q-.17.25-.34.42a3 3 0 0 1-1.52.82l-.04.01-1.8.45a.93.93 0 0 0 .23 1.84h.69c1.54 0 3.05-.5 4.29-1.43l1.89-1.42a.75.75 0 0 1 .9 1.2l-.9.68.49.18c.53.2.77.3 1.01.37a9 9 0 0 0 3.33.42h.94a.93.93 0 0 0 .22-1.84l-1.47-.37-.08-.02a5 5 0 0 1-1.19-.4l-.29-.2c-.3-.23-.54-.54-.83-.93l-.05-.07-.73-.97a.75.75 0 1 1 1.2-.9l.73.97c.37.5.47.62.59.7l.13.1c.13.07.29.12.88.27l1.48.36a2.43 2.43 0 0 1-.6 4.8h-.96c-.54 0-.84 0-1.14-.02q-1.33-.07-2.6-.47c-.29-.09-.57-.2-1.08-.38l-1.43-.54a8.6 8.6 0 0 1-4.73 1.41h-.69a2.43 2.43 0 0 1-.59-4.8l1.8-.44.38-.11q.26-.1.46-.3l.25-.32z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMeditationRound;
