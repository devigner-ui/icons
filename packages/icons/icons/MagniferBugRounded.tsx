import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMagniferBugRounded = forwardRef<SVGSVGElement, IconProps>(
  function IconMagniferBugRounded(
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
              opacity={duotone ? "0.4" : "1"}
              cx="11"
              cy="11.0005"
              r="9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M11 15a3 3 0 0 1-3-3v-2m3 5a3 3 0 0 0 3-3v-2m-3 5v-5m3 0a3 3 0 1 0-6 0m6 0H8m6.07 1h1.43m-9 0H8m6 2.5 1 .5m-7-.5L7 14m7-5.5 1-.5m-7 .5L7 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M21.81 20.98c-.06.09-.17.2-.4.43s-.34.34-.44.4c-.55.37-1.3.18-1.61-.4-.06-.1-.1-.26-.2-.57a4 4 0 0 1-.16-.62c-.05-.7.53-1.27 1.22-1.22.12.01.29.06.62.16.31.1.46.14.56.2.59.31.78 1.06.41 1.62"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.82 19.7c-.09-1.1.82-2 1.9-1.92q.29.04.64.16l.07.02.06.02q.33.09.58.2a1.8 1.8 0 0 1 .64 2.56q-.17.22-.41.46l-.05.05-.04.04q-.24.25-.46.42c-.87.57-2.04.28-2.53-.65q-.12-.25-.21-.58l-.02-.06-.02-.07q-.11-.36-.15-.65"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M11.16 20.31a9.16 9.16 0 1 0 0-18.31 9.16 9.16 0 0 0 0 18.31"
                fill="currentColor"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 6.5c-1.14 0-2.16.53-2.81 1.36l-.68-.34a.7.7 0 0 0-.96.32.7.7 0 0 0 .32.95l.68.34q-.12.45-.12.92v.24H6.7a.7.7 0 0 0-.71.71c0 .4.32.71.71.71h.72v.24q0 .48.12.92l-.68.34a.7.7 0 0 0-.32.95c.18.35.6.5.96.32l.68-.34a3.57 3.57 0 0 0 5.62 0l.68.34c.35.17.78.03.96-.32a.7.7 0 0 0-.32-.95l-.68-.34q.12-.45.12-.92v-.24h.72c.39 0 .71-.32.71-.71a.7.7 0 0 0-.71-.71h-.72v-.24q0-.47-.12-.92l.68-.34a.7.7 0 0 0 .32-.95.7.7 0 0 0-.96-.32l-.68.34A3.6 3.6 0 0 0 11 6.5m0 1.42c-.93 0-1.73.6-2.02 1.42h4.04A2.1 2.1 0 0 0 11 7.92m-2.14 4.03v-1.19h1.43v3.2a2.1 2.1 0 0 1-1.43-2.01m2.85 2v-3.19h1.43v1.19c0 .93-.6 1.72-1.43 2"
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
              d="M17.82 19.7c-.09-1.1.82-2 1.9-1.92q.29.04.64.16l.07.02.06.02q.33.09.58.2a1.8 1.8 0 0 1 .64 2.56q-.17.22-.41.46l-.05.05-.04.04q-.24.25-.46.41c-.87.58-2.04.28-2.53-.64q-.12-.25-.21-.58l-.02-.06-.02-.07q-.12-.36-.15-.65"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.13 11.14a9.1 9.1 0 0 1-9.07 9.15c-5 0-9.06-4.1-9.06-9.15A9.1 9.1 0 0 1 11.06 2c5.01 0 9.07 4.1 9.07 9.14M8.19 7.86a3.57 3.57 0 0 1 5.62 0l.68-.34a.7.7 0 0 1 .96.32.7.7 0 0 1-.32.95l-.68.34q.12.45.12.92v.24h.72c.39 0 .71.32.71.71a.7.7 0 0 1-.71.71h-.72v.24q0 .48-.12.92l.68.34c.35.17.5.6.32.95s-.6.5-.96.32l-.68-.34a3.57 3.57 0 0 1-5.62 0l-.68.34a.7.7 0 0 1-.96-.32.7.7 0 0 1 .32-.95l.68-.34q-.12-.45-.12-.92v-.24H6.7A.7.7 0 0 1 6 11c0-.4.32-.71.71-.71h.72v-.24q0-.47.12-.92l-.68-.34a.7.7 0 0 1-.32-.95c.18-.35.6-.5.96-.32z"
              fill="currentColor"
            />
            <path
              d="M11.71 13.96v-3.2h1.43v1.19c0 .93-.6 1.72-1.43 2"
              fill="currentColor"
            />
            <path
              d="M8.86 11.95v-1.19h1.43v3.2a2.1 2.1 0 0 1-1.43-2.01"
              fill="currentColor"
            />
            <path d="M8.98 9.34a2.14 2.14 0 0 1 4.04 0z" fill="currentColor" />
          </svg>
        )}
      </>
    );
  },
);

export default IconMagniferBugRounded;
