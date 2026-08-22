import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMusicNotes = forwardRef<SVGSVGElement, IconProps>(
  function IconMusicNotes(
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
              d="M12 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M22 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m22 8-10 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m14.46 5.16.29.69zm2-.84-.3-.7zm4.65-.98-.42.62zM12.75 19V8.85h-1.5V19zm10-1.85V8.01h-1.5v9.14zm-8-11.3 2-.84-.58-1.38-2 .84zm8 2.16c0-1.33 0-2.42-.12-3.24-.12-.84-.4-1.58-1.1-2.05l-.84 1.24c.19.13.36.36.46 1.03.1.68.1 1.64.1 3.02zm-6-3c1.27-.53 2.15-.9 2.82-1.07s.94-.1 1.12.02l.83-1.24c-.7-.47-1.5-.44-2.32-.23-.8.2-1.8.62-3.03 1.14zm-4 3.84c0-.66 0-1.1.04-1.44.03-.31.1-.47.17-.59L11.7 6c-.26.39-.36.8-.41 1.26q-.06.66-.05 1.6zm1.42-4.38q-.87.35-1.46.65-.6.31-1 .87l1.25.83c.08-.11.2-.23.48-.38.3-.17.7-.34 1.3-.6z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 11V2c0 2.07 1.76 3 3 3m-3 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
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
              d="m12.75 12.5 8.5-3.4v5.66q-.76-.5-1.75-.51a3.25 3.25 0 1 0 3.25 3.25V7.95q.02-1.72-.08-2.87l-.04-.31a3.5 3.5 0 0 0-.48-1.42 2 2 0 0 0-.62-.63c-.71-.47-1.5-.44-2.33-.23-.79.2-1.77.61-2.98 1.11l-2.09.88q-.85.35-1.42.64c-.4.23-.74.49-1 .87-.26.4-.36.8-.41 1.26q-.06.64-.05 1.56v7.95q-.76-.5-1.75-.51a3.25 3.25 0 1 0 3.25 3.25z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.75 2a.75.75 0 0 0-1.5 0v5.76q-.76-.5-1.75-.51a3.25 3.25 0 1 0 3.25 3.25V5c.7.5 1.53.75 2.25.75a.75.75 0 0 0 0-1.5 2.5 2.5 0 0 1-1.49-.55A2.1 2.1 0 0 1 7.75 2"
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
              d="m12.75 12.5 8.5-3.4v5.66q-.76-.5-1.75-.51a3.25 3.25 0 1 0 3.25 3.25V7.95q.02-1.72-.08-2.87l-.04-.31a3.5 3.5 0 0 0-.48-1.42 2 2 0 0 0-.62-.63c-.71-.47-1.5-.44-2.33-.23-.79.2-1.77.61-2.98 1.11l-2.09.88q-.85.35-1.42.64c-.4.23-.74.49-1 .87-.26.4-.36.8-.41 1.26q-.06.64-.05 1.56v7.95q-.76-.5-1.75-.51a3.25 3.25 0 1 0 3.25 3.25z"
              fill="currentColor"
            />
            <path
              d="M7.75 2a.75.75 0 0 0-1.5 0v5.76q-.76-.5-1.75-.51a3.25 3.25 0 1 0 3.25 3.25V5c.7.5 1.53.75 2.25.75a.75.75 0 0 0 0-1.5 2.5 2.5 0 0 1-1.49-.55A2.1 2.1 0 0 1 7.75 2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMusicNotes;
