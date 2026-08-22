import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMusicSquareAdd = forwardRef<SVGSVGElement, IconProps>(
  function IconMusicSquareAdd(
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
              d="M21.67 8.65v5.7q0 .51-.03.98a4 4 0 1 0-5.63 5.64q-.47.03-.99.03h-5.7c-4.75 0-6.65-1.9-6.65-6.65v-5.7C2.67 3.9 4.57 2 9.32 2h5.7c4.75 0 6.65 1.9 6.65 6.65"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M7.39 14.42a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.15 12V6.34c0-1.21-.76-1.37-1.52-1.16l-2.89.79c-.52.14-.89.56-.89 1.16v5.84"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.7 13.45a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m8.84 8.83 5.31-1.45"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M22.67 18q-.01 1.14-.58 2.06a3.97 3.97 0 0 1-6.84 0A4 4 0 1 1 22.67 18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M20.16 17.98h-2.98"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.67 16.52v2.99"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
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
              d="M19.88 15.01a4 4 0 1 0 2.62 6.83 4 4 0 0 0 0-5.66 4 4 0 0 0-2.62-1.17m2.03 3.97q0 .32-.22.53a.7.7 0 0 1-.53.22h-.74v.78q0 .32-.22.53a.7.7 0 0 1-.53.22.76.76 0 0 1-.75-.75v-.78h-.75a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.75v-.71c0-.41.34-.75.75-.75s.75.34.75.75v.71h.74c.42 0 .75.34.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.01 21.97q-.45-.4-.76-.91a4 4 0 0 1 6.39-4.73l.02.02.01-.16V7.81C22.67 4.17 20.5 2 16.86 2H8.48q-.42 0-.81.05c-3.15.29-5 2.4-5 5.76v8.38c0 3.36 1.85 5.47 5 5.76q.39.05.81.05h8.38l.17-.01z"
              fill="currentColor"
            />
            <path
              d="M14.45 5.3c-.32-.25-.9-.49-1.82-.24l-2.98.82c-.89.23-1.47.98-1.47 1.92v3.91a2 2 0 0 0-.74-.14 2.24 2.24 0 1 0 2.24 2.28l.01-.03v-3.7l3.97-1.08v1.68a2.24 2.24 0 1 0 1.49 2.13l.01-.04V6.98q-.02-1.15-.71-1.68m-7.02 9.25a.74.74 0 1 1 0-1.48.74.74 0 1 1 0 1.48m5.47-1a.74.74 0 1 1 0-1.48.74.74 0 1 1 0 1.48"
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
              d="M19.88 15.01a4 4 0 1 0 2.62 6.83 4 4 0 0 0 0-5.66 4 4 0 0 0-2.62-1.17m2.03 3.97q0 .32-.22.53a.7.7 0 0 1-.53.22h-.74v.78q0 .32-.22.53a.7.7 0 0 1-.53.22.76.76 0 0 1-.75-.75v-.78h-.75a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.75v-.71c0-.41.34-.75.75-.75s.75.34.75.75v.71h.74c.42 0 .75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M12.9 12.07a.74.74 0 1 0 0 1.48.74.74 0 1 0 0-1.48"
              fill="currentColor"
            />
            <path
              d="M7.43 13.06a.74.74 0 1 0 0 1.48.74.74 0 1 0 0-1.48"
              fill="currentColor"
            />
            <path
              d="M16.86 2H8.48q-.42 0-.81.05c-3.15.29-5 2.4-5 5.76v8.38c0 3.36 1.85 5.47 5 5.76q.39.05.81.05h5.69c.39 0 .64-.44.49-.8a6 6 0 0 1-.49-2.2 5.5 5.5 0 0 1 7.68-5.05c.37.16.82-.09.82-.49V7.81C22.67 4.17 20.5 2 16.86 2m-1.71 6.05v4.76l-.01.04a2.24 2.24 0 1 1-2.24-2.27q.39 0 .75.14V9.03l-3.97 1.08v3.7l-.01.03a2.24 2.24 0 1 1-2.24-2.28q.4 0 .74.14V7.79c0-.93.58-1.68 1.47-1.92l2.98-.82c.93-.25 1.5 0 1.82.24q.69.53.69 1.68v1.08z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMusicSquareAdd;
