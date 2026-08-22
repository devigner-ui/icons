import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMagniferBug = forwardRef<SVGSVGElement, IconProps>(
  function IconMagniferBug(
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
              cx="11.5"
              cy="11.5005"
              r="9.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M11.5 15.5a3 3 0 0 1-3-3v-2m3 5a3 3 0 0 0 3-3v-2m-3 5v-5m3 0a3 3 0 1 0-6 0m6 0h-6m6.07 1H16m-9 0h1.5m6 2.5 1 .5m-7-.5-1 .5m7-5.5 1-.5m-7 .5-1-.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M18.5 18.5 22 22"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M11.16 20.31a9.16 9.16 0 1 0 0-18.31 9.16 9.16 0 0 0 0 18.31"
                fill="currentColor"
              />
            </g>
            <path
              d="M17.1 18.12q.55-.46 1.02-1.02l3.67 3.67a.72.72 0 0 1-1.02 1.02z"
              fill="currentColor"
            />
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
              d="M8.86 11.95c0 .93.6 1.72 1.43 2v-3.19H8.86zm4.16-2.6a2.14 2.14 0 0 0-4.04 0zm.12 1.41h-1.43v3.2a2.1 2.1 0 0 0 1.43-2.01z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.79 21.79a.7.7 0 0 0 0-1.02l-3.67-3.67a9.16 9.16 0 1 0-1.02 1.02l3.67 3.67c.28.28.74.28 1.02 0M8.19 7.86a3.57 3.57 0 0 1 5.62 0l.68-.34a.7.7 0 0 1 .96.32.7.7 0 0 1-.32.95l-.68.34q.12.45.12.92v.24h.72c.39 0 .71.32.71.71a.7.7 0 0 1-.71.71h-.72v.24q0 .48-.12.92l.68.34c.35.17.5.6.32.95s-.6.5-.96.32l-.68-.34a3.57 3.57 0 0 1-5.62 0l-.68.34a.7.7 0 0 1-.96-.32.7.7 0 0 1 .32-.95l.68-.34q-.12-.45-.12-.92v-.24H6.7A.7.7 0 0 1 6 11c0-.4.32-.71.71-.71h.72v-.24q0-.47.12-.92l-.68-.34a.7.7 0 0 1-.32-.95c.18-.35.6-.5.96-.32z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMagniferBug;
