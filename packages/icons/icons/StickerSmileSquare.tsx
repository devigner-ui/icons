import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStickerSmileSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconStickerSmileSquare(
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
              d="M9 16a5 5 0 0 0 6 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
            <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15 22h-3c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12v3m-7 7a7 7 0 0 0 7-7m-7 7c0-1.86 0-2.8.24-3.55a5 5 0 0 1 3.21-3.2C19.21 15 20.14 15 22 15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M20.07 13.01 22 13v-1c0-4.71 0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22h1l.01-1.93c.02-1.1.08-1.83.25-2.46v-.01l.05-.14v-.02a6.4 6.4 0 0 1 4.13-4.13 9 9 0 0 1 2.63-.3"
              fill="currentColor"
            />
            <path
              d="m22 13-1.93.01c-1.2.02-1.96.09-2.63.3a6.4 6.4 0 0 0-4.13 4.13 9 9 0 0 0-.3 2.63L13 22q.93 0 1.81-.18l.06-.02h.06A9 9 0 0 0 22 13"
              fill="currentColor"
            />
            <path
              d="M15 12c.55 0 1-.67 1-1.5S15.55 9 15 9s-1 .67-1 1.5.45 1.5 1 1.5"
              fill="currentColor"
            />
            <path
              d="M9 12c.55 0 1-.67 1-1.5S9.55 9 9 9s-1 .67-1 1.5.45 1.5 1 1.5"
              fill="currentColor"
            />
            <path
              d="M13.31 17.44q.34-1.02.96-1.85a4.2 4.2 0 0 1-4.82-.2.75.75 0 0 0-.9 1.21 5.8 5.8 0 0 0 4.71 1l.05-.14z"
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
              d="M16.5 21.84h-.04l-.05.02.05-.01z"
              fill="currentColor"
            />
            <path
              d="M22 15h-1.5c-.93.02-1.53.08-2.05.24a5 5 0 0 0-3.2 3.21A7 7 0 0 0 15 20.5V22q.72 0 1.4-.14h.01l.05-.01.04-.01A7 7 0 0 0 22 15"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 12c0 4.71 0 7.07 1.46 8.54C4.93 22 7.3 22 12 22h1.5v-.26c0-1.6 0-2.76.32-3.75q.1-.32.24-.62a5.7 5.7 0 0 1-5.5-.77.75.75 0 0 1 .89-1.2 4.3 4.3 0 0 0 5.1 0c.27-.2.62-.2.88-.02a6.5 6.5 0 0 1 2.56-1.56c.99-.32 2.14-.32 3.75-.32H22V12c0-4.71 0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46C2 4.93 2 7.3 2 12m13 0c.55 0 1-.67 1-1.5S15.55 9 15 9s-1 .67-1 1.5.45 1.5 1 1.5m-6 0c.55 0 1-.67 1-1.5S9.55 9 9 9s-1 .67-1 1.5.45 1.5 1 1.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStickerSmileSquare;
