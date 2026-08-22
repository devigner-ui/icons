import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStickerSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconStickerSquare(
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
              d="M12 22h3a7 7 0 0 0 7-7v-3c0-4.71 0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15 22c0-1.86 0-2.8.24-3.55a5 5 0 0 1 3.21-3.2C19.21 15 20.14 15 22 15"
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
              d="M22 15h-1.5c-.93.02-1.53.08-2.05.24a5 5 0 0 0-3.2 3.21A7 7 0 0 0 15 20.5V22q.72 0 1.4-.14h.01l.05-.01.04-.01A7 7 0 0 0 22 15"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12q0 1.69-.02 3H20.5c-.93.02-1.53.08-2.05.24a5 5 0 0 0-3.2 3.21A7 7 0 0 0 15 20.5v1.48q-1.31.03-3 .02"
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
              d="M2 12c0 4.71 0 7.07 1.46 8.54C4.93 22 7.3 22 12 22h1.5v-.26c0-1.6 0-2.76.32-3.75a6.5 6.5 0 0 1 4.17-4.17c.99-.32 2.14-.32 3.75-.32H22V12c0-4.71 0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46C2 4.93 2 7.3 2 12"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStickerSquare;
