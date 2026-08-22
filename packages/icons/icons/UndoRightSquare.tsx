import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUndoRightSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconUndoRightSquare(
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M17.5 9.5H9.96c-1.37 0-2.05 0-2.55.32a2 2 0 0 0-.59.6c-.32.49-.32 1.17-.32 2.54s0 2.05.32 2.55a2 2 0 0 0 .6.6c.49.31 1.17.31 2.54.31h4.54m3-6.92-2.25-2.08M17.5 9.5l-2.25 2.08"
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.7 6.91a.75.75 0 0 1 1.06-.04L18 8.95a.75.75 0 0 1 0 1.1l-2.25 2.08a.75.75 0 0 1-1.02-1.1l.84-.78H9.96c-.7 0-1.17 0-1.53.04-.34.03-.5.1-.6.16q-.24.15-.38.37c-.07.1-.13.27-.16.62-.04.35-.04.82-.04 1.52s0 1.17.04 1.53c.03.34.1.5.16.61q.15.23.37.37c.1.07.27.13.61.17.36.03.83.03 1.53.03h4.54a.75.75 0 0 1 0 1.5H9.92q-.98.01-1.63-.04c-.46-.05-.9-.15-1.28-.4q-.5-.31-.82-.81a3 3 0 0 1-.4-1.28q-.05-.66-.04-1.64v-.08q-.01-.98.04-1.63c.05-.46.15-.9.4-1.28q.32-.5.82-.82c.39-.25.82-.35 1.28-.4q.66-.05 1.63-.04h5.66l-.84-.78a.75.75 0 0 1-.04-1.06"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46m12.3 3.41a.75.75 0 1 0-1.02 1.1l.84.78H9.92q-.98-.01-1.63.04c-.46.05-.9.15-1.28.4q-.5.33-.82.82c-.25.39-.35.82-.4 1.28q-.05.65-.04 1.64V13q-.01.98.04 1.64c.05.46.15.89.4 1.28q.32.49.82.81c.39.25.82.35 1.28.4q.66.05 1.63.04h4.58a.75.75 0 0 0 0-1.5H9.96c-.7 0-1.17 0-1.53-.03-.34-.04-.5-.1-.6-.17q-.24-.15-.38-.37c-.07-.1-.13-.26-.16-.61-.04-.36-.04-.83-.04-1.53s0-1.17.04-1.52c.03-.35.1-.51.16-.62q.15-.22.37-.37c.1-.07.27-.13.61-.16.36-.04.83-.04 1.53-.04h5.62l-.84.78a.75.75 0 1 0 1.02 1.1L18 10.05a.75.75 0 0 0 0-1.1z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUndoRightSquare;
