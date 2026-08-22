import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMentionSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconMentionSquare(
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
              d="M12 18a6 6 0 1 1 5.64-3.95q-.13.35-.41.6l-.08.08a1.64 1.64 0 0 1-2.75-1.2V12m0 0a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 6.75a5.25 5.25 0 1 0 0 10.5.75.75 0 0 1 0 1.5 6.75 6.75 0 1 1 6.34-4.44q-.21.55-.6.9l-.09.07a2.4 2.4 0 0 1-3.78-.75A3.15 3.15 0 1 1 15.15 12v1.52a.89.89 0 0 0 1.49.66l.08-.08a1 1 0 0 0 .21-.3A5.24 5.24 0 0 0 12 6.75m0 3.6a1.65 1.65 0 1 1 0 3.3 1.65 1.65 0 0 1 0-3.3"
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
              d="M12 10.35a1.65 1.65 0 1 1 0 3.3 1.65 1.65 0 0 1 0-3.3"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46M6.75 12a5.25 5.25 0 1 1 10.18 1.8 1 1 0 0 1-.21.3l-.08.08a.89.89 0 0 1-1.49-.66V12a3.15 3.15 0 1 0-1.28 2.53 2.4 2.4 0 0 0 3.78.75l.09-.08q.39-.34.6-.89A6.74 6.74 0 0 0 12 5.25a6.75 6.75 0 0 0 0 13.5.75.75 0 0 0 0-1.5A5.25 5.25 0 0 1 6.75 12"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMentionSquare;
