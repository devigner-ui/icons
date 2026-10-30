import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMusicDashboard = forwardRef<SVGSVGElement, IconProps>(
  function IconMusicDashboard(
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
        {variant === "Broken" ? (
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
            d="M2 9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7H9c-5 0-7-2-7-7v-1.41"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7 2.5v19"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12.96 15.31a1.49 1.49 0 1 1-2.98 0 1.49 1.49 0 0 1 2.98 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M18.43 14.31V8.48c0-1.24-.78-1.41-1.57-1.2l-2.98.81a1.2 1.2 0 0 0-.92 1.2v6.01"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M18.42 14.31a1.49 1.49 0 1 1-2.98 0 1.49 1.49 0 0 1 2.98 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m12.96 11.04 5.47-1.49"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      ) : !fill ? (
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
              d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 2.5v19"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M11.47 16.8a1.49 1.49 0 1 0 0-2.98 1.49 1.49 0 0 0 0 2.98"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.43 14.31V8.48c0-1.24-.78-1.41-1.57-1.2l-2.98.81a1.2 1.2 0 0 0-.92 1.2v6.01"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.93 15.8a1.49 1.49 0 1 0 0-2.98 1.49 1.49 0 0 0 0 2.98"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m12.96 11.04 5.47-1.49"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="M7 2.05v19.9c-3.15-.29-5-2.4-5-5.76V7.81c0-3.36 1.85-5.47 5-5.76"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 7.81v8.38c0 3.64-2.17 5.81-5.81 5.81H7.81q-.42 0-.81-.05V2.05q.39-.06.81-.05h8.38C19.83 2 22 4.17 22 7.81"
              fill="currentColor"
            />
            <path
              d="M18.49 6.8c-.32-.25-.9-.49-1.82-.24l-2.98.82c-.89.23-1.47.98-1.47 1.92v3.91a2 2 0 0 0-.74-.14 2.24 2.24 0 1 0 2.24 2.28l.01-.03v-3.7l3.97-1.08v1.68a2.24 2.24 0 1 0 1.49 2.13l.01-.04V8.48q-.02-1.14-.71-1.68m-7.02 9.25a.74.74 0 1 1 0-1.48.74.74 0 1 1 0 1.48m5.46-1a.74.74 0 1 1 0-1.48.74.74 0 1 1 0 1.48"
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
              d="M7 3.25v17.5c0 .64-.61 1.15-1.23.98C3.37 21.05 2 19.09 2 16.19V7.81c0-2.9 1.37-4.86 3.77-5.54C6.39 2.1 7 2.6 7 3.25"
              fill="currentColor"
            />
            <path
              d="M12.47 14.37a.7.7 0 0 0-.68.68c0 .37.31.68.68.68s.69-.31.69-.68a.7.7 0 0 0-.69-.68"
              fill="currentColor"
            />
            <path
              d="M17.52 13.45a.7.7 0 0 0-.69.69c0 .38.31.68.69.68s.69-.31.69-.68a.7.7 0 0 0-.69-.69"
              fill="currentColor"
            />
            <path
              d="M16.19 2H9.5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h6.69A5.8 5.8 0 0 0 22 16.19V7.81A5.8 5.8 0 0 0 16.19 2m3.41 7.74v4.4l-.01.03a2.07 2.07 0 0 1-4.14-.03c0-1.14.93-2.07 2.07-2.07q.36 0 .69.13v-1.55l-3.67 1v3.42l-.01.03a2.07 2.07 0 0 1-4.14-.03c0-1.14.93-2.07 2.07-2.07q.36 0 .69.13V9.5c0-.86.53-1.56 1.36-1.77l2.75-.76c.86-.23 1.39 0 1.69.23q.64.5.64 1.55z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMusicDashboard;
