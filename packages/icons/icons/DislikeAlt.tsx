import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDislikeAlt = forwardRef<SVGSVGElement, IconProps>(
  function IconDislikeAlt(
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
              d="m17.19 5.65-3.1-2.4c-.4-.4-1.3-.6-1.9-.6h-3.8c-1.2 0-2.5.9-2.8 2.1l-2.4 7.3c-.5 1.4.4 2.6 1.9 2.6h4a1 1 0 0 1 1 1.2l-.5 3.2c-.2.9.4 1.9 1.3 2.2a2 2 0 0 0 2.2-.7l4.1-6.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
            <path
              d="M22.29 5.65v9.8c0 1.4-.6 1.9-2 1.9h-1c-1.4 0-2-.5-2-1.9v-9.8c0-1.4.6-1.9 2-1.9h1c1.4 0 2 .5 2 1.9"
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
              d="M3.02 13.96c.39.56 1.08.88 1.87.88h4.1a1 1 0 0 1 .69.31q.27.32.21.77l-.51 3.28c-.22.98.43 2.08 1.41 2.41.91.34 1.98-.12 2.41-.77l4.21-6.27.12-.2V5.53l-.15-.15-3.17-2.45c-.42-.42-1.37-.65-2.04-.65h-3.9c-1.34 0-2.69 1.01-2.99 2.24l-2.46 7.49a2.1 2.1 0 0 0 .2 1.95"
              fill="currentColor"
            />
            <path
              d="M19.46 17.61h1.03c1.55 0 2.18-.6 2.18-2.08V5.48c0-1.48-.63-2.08-2.18-2.08h-1.03c-1.55 0-2.18.6-2.18 2.08v10.06c0 1.47.63 2.07 2.18 2.07"
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
              d="M16.28 5.5v10.16q0 .61-.34 1.12l-2.73 4.06a2.2 2.2 0 0 1-2.41.77 2.2 2.2 0 0 1-1.42-2.41l.52-3.27a1 1 0 0 0-.21-.78 1 1 0 0 0-.69-.31H4.89c-.79 0-1.47-.32-1.87-.88a2.1 2.1 0 0 1-.2-1.95l2.46-7.49a3.2 3.2 0 0 1 3-2.25h3.9c.67 0 1.61.23 2.04.66l1.28.99a2 2 0 0 1 .78 1.58"
              fill="currentColor"
            />
            <path
              d="M19.46 17.61h1.03c1.55 0 2.18-.6 2.18-2.08V5.48c0-1.48-.63-2.08-2.18-2.08h-1.03c-1.55 0-2.18.6-2.18 2.08v10.06c0 1.47.63 2.07 2.18 2.07"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDislikeAlt;
