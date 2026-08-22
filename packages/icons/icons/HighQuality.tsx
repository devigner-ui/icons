import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHighQuality = forwardRef<SVGSVGElement, IconProps>(
  function IconHighQuality(
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
              d="M6 8v7.62M10.81 8v7.62M6 12h4.81M19 16l-1.93-1.52m-.96 1.14c-.45 0-.67 0-.86-.03-.76-.12-1.36-.6-1.5-1.2-.05-.14-.05-.32-.05-.68v-3.8c0-.36 0-.54.04-.68.15-.6.75-1.08 1.51-1.2.19-.03.41-.03.86-.03s.67 0 .86.03c.76.12 1.36.6 1.51 1.2.04.14.04.32.04.67v3.81c0 .36 0 .54-.04.68-.15.6-.75 1.08-1.51 1.2-.19.03-.41.03-.86.03"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22"
              fill="currentColor"
            />
            <path
              d="M6 7.25c.41 0 .75.34.75.75v3.25h3.31V8a.75.75 0 0 1 1.5 0v7.62a.75.75 0 0 1-1.5 0v-2.87H6.75v2.87a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.11 7.25h-.06q-.57-.01-.91.04c-.98.15-1.88.78-2.13 1.75q-.08.36-.06.8v3.94q-.02.43.06.8c.25.97 1.15 1.6 2.13 1.75q.35.05.9.04h.14q.55.01.9-.04.43-.06.82-.25l.63.5a.75.75 0 0 0 .94-1.17l-.45-.35q.12-.23.19-.48.07-.37.06-.8V9.84q.02-.44-.06-.8c-.25-.97-1.15-1.6-2.13-1.75q-.34-.05-.9-.04zm1.43 6.64.23.18V9.9c0-.4 0-.47-.02-.5-.05-.24-.34-.55-.9-.64a6 6 0 0 0-.74-.02c-.47 0-.63 0-.74.02-.55.09-.84.4-.9.64-.01.03-.02.1-.02.5v3.8c0 .4 0 .47.02.5.06.23.35.55.9.64a6 6 0 0 0 1.06.02.75.75 0 0 1 1.1-.98"
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12m4.75-4a.75.75 0 0 0-1.5 0v7.62a.75.75 0 1 0 1.5 0v-2.87h3.31v2.87a.75.75 0 1 0 1.5 0V8a.75.75 0 0 0-1.5 0v3.25H6.75zm9.3-.75h.13q.55-.01.9.04c.98.15 1.88.78 2.13 1.75q.07.36.06.8v3.94q.02.43-.06.8-.06.25-.19.48l.45.35a.75.75 0 0 1-.94 1.18l-.63-.5a3 3 0 0 1-.82.24q-.34.05-.9.04h-.13q-.57.01-.91-.04c-.98-.15-1.88-.78-2.13-1.75q-.08-.37-.06-.8V9.84q-.02-.44.06-.8c.25-.97 1.15-1.6 2.13-1.75q.35-.05.9-.04m1.72 6.82-.23-.18a.75.75 0 0 0-1.1.98l-1.07-.02c-.55-.09-.84-.4-.9-.64-.01-.03-.02-.1-.02-.5v-3.8c0-.4 0-.47.02-.5.06-.24.35-.55.9-.64.11-.02.27-.02.74-.02.48 0 .63 0 .74.02.56.09.85.4.9.64.01.03.02.1.02.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHighQuality;
