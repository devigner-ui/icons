import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSquareForward = forwardRef<SVGSVGElement, IconProps>(
  function IconSquareForward(
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
              d="M22 12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m16.15 3.43 2.36 2.05c1.62 1.4 2.44 2.1 2.44 3.02s-.82 1.62-2.44 3.02l-2.36 2.05c-.7.61-1.07.92-1.36.79s-.29-.6-.29-1.55v-1.52c-3 0-6.25 1.39-7.5 3.71 0-7.43 4.44-9.29 7.5-9.29V4.2c0-.94 0-1.42.3-1.55.28-.13.64.18 1.35.8"
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
              d="M1 13.53c0-4.67 0-7 1.45-8.45s3.78-1.45 8.45-1.45 7 0 8.45 1.45 1.45 3.78 1.45 8.45 0 7-1.45 8.45-3.78 1.45-8.45 1.45-7 0-8.45-1.45S1 18.2 1 13.53"
              fill="currentColor"
            />
            <path
              d="m17.67 1.9 2.6 2.25c1.78 1.55 2.67 2.33 2.67 3.33s-.9 1.78-2.68 3.32l-2.59 2.25c-.78.68-1.18 1.02-1.5.88s-.32-.67-.32-1.7v-1.69c-2.65 0-5.48 1-7.2 2.7-.53.52-.79.79-.93.72s-.1-.4-.04-1.08c.65-6.72 5.06-8.46 8.17-8.46V2.74c0-1.04 0-1.56.32-1.7.32-.15.72.19 1.5.87"
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
              d="M20.54 20.54C22 19.07 22 16.7 22 12v-1.7q-.62.61-1.43 1.3l-2.5 2.15c-.3.26-.64.56-.94.76s-1.07.62-1.96.21c-.89-.4-1.07-1.26-1.12-1.62-.05-.35-.05-.79-.05-1.18-1.33.23-2.6.75-3.53 1.48l-.05.04c-.36.29-.72.56-1 .75a3 3 0 0 1-.62.3 1.7 1.7 0 0 1-1.42-.12 1.7 1.7 0 0 1-.8-1.1 3 3 0 0 1-.04-.7c.02-.31.08-.72.14-1.11v-.06c.48-3.07 1.82-5.17 3.56-6.48A8.6 8.6 0 0 1 14 3.34V3.1c0-.36 0-.76.04-1.1H12C7.29 2 4.93 2 3.46 3.46 2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46"
              fill="currentColor"
            />
            <path
              d="m17.15 2.43 2.36 2.05c1.62 1.4 2.44 2.1 2.44 3.02s-.82 1.62-2.44 3.02l-2.36 2.05c-.7.61-1.07.92-1.36.79s-.29-.6-.29-1.55v-1.52a10 10 0 0 0-5.95 1.93c-.82.64-1.24.96-1.41.86-.18-.1-.1-.55.03-1.45.85-5.47 4.63-6.92 7.33-6.92V3.2c0-.94 0-1.42.3-1.55.28-.13.64.18 1.35.8"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSquareForward;
