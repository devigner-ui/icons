import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmartSpeakerMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconSmartSpeakerMinimalistic(
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
              d="M3.32 6.66a4.8 4.8 0 0 1 3.92-4.2l.21-.04c3-.56 6.1-.56 9.1 0l.32.06a4.7 4.7 0 0 1 3.8 4.07q.64 5.33.04 10.67l-.02.15a4.84 4.84 0 0 1-4.21 4.26l-.9.12-1 .12a25 25 0 0 1-5.16 0l-1-.12-1.01-.13a4.7 4.7 0 0 1-4.1-4.14q-.62-5.34 0-10.68z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17 6c-.72.6-2.51 1.5-5 1.5S7.72 6.6 7 6"
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
              d="m7.45 2.42-.21.04a4.8 4.8 0 0 0-3.92 4.2l-.01.14q-.62 5.34 0 10.68a4.7 4.7 0 0 0 4.1 4.14l1.02.13.99.12q2.58.27 5.16 0l1-.12.9-.12a4.84 4.84 0 0 0 4.21-4.26l.02-.15q.6-5.34-.03-10.67a4.7 4.7 0 0 0-3.81-4.07l-.32-.06c-3-.56-6.1-.56-9.1 0"
              fill="currentColor"
            />
            <path
              d="M7.48 5.43a.75.75 0 0 0-.96 1.15A9 9 0 0 0 12 8.25a9 9 0 0 0 5.48-1.67.75.75 0 0 0-.96-1.15A7.5 7.5 0 0 1 12 6.75a7.5 7.5 0 0 1-4.52-1.32"
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
              d="M7.24 2.46a4.8 4.8 0 0 0-3.92 4.2l-.01.14q-.62 5.34 0 10.68a4.7 4.7 0 0 0 4.1 4.14l1.02.13.99.12q2.58.27 5.16 0l1-.12.9-.12a4.84 4.84 0 0 0 4.21-4.26l.02-.15q.6-5.34-.03-10.67a4.7 4.7 0 0 0-3.81-4.07l-.32-.06c-3-.56-6.1-.56-9.1 0zm-.81 3.06a.75.75 0 0 1 1.05-.1c.58.49 2.2 1.33 4.52 1.33s3.94-.84 4.52-1.32a.75.75 0 1 1 .96 1.15A9 9 0 0 1 12 8.25a9 9 0 0 1-5.48-1.67.75.75 0 0 1-.1-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmartSpeakerMinimalistic;
