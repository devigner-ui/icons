import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMusicNote = forwardRef<SVGSVGElement, IconProps>(
  function IconMusicNote(
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
              d="M9 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M21 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 19V8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21 17V6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m15.74 3.75-4 1.34c-1.32.44-1.98.66-2.36 1.18C9 6.8 9 7.5 9 8.88V12l12-4v-.45c0-2.53 0-3.8-.83-4.4s-2.03-.2-4.43.6"
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
              d="m10.1 11.96 9.26-3.33L21 7.95V7.5a26 26 0 0 0-.13-3.11 3 3 0 0 0-.52-1.4 2 2 0 0 0-.68-.6v-.01c-.78-.46-1.65-.43-2.54-.23-.86.2-1.94.6-3.25 1.1l-2.28.86q-.93.33-1.55.63a3 3 0 0 0-1.1.85q-.4.57-.44 1.23-.07.63-.06 1.53v4.26z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M8.45 16.13q-.84-.49-1.9-.5C4.59 15.63 3 17.06 3 18.81S4.59 22 6.55 22s3.54-1.43 3.54-3.19v-6.85l-1.64.64z"
                fill="currentColor"
              />
              <path
                d="M19.36 8.63v5.54q-.84-.49-1.9-.5c-1.96 0-3.55 1.43-3.55 3.18s1.59 3.19 3.54 3.19c1.96 0 3.55-1.43 3.55-3.19v-8.9z"
                fill="currentColor"
              />
            </g>
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
              d="m10.1 11.96 9.26-3.33v5.54q-.84-.49-1.9-.5c-1.96 0-3.55 1.43-3.55 3.19 0 1.75 1.59 3.18 3.54 3.18 1.96 0 3.55-1.43 3.55-3.18V7.49c0-1.12 0-2.06-.09-2.8l-.04-.31a3 3 0 0 0-.52-1.4 2 2 0 0 0-.68-.6v-.01c-.78-.46-1.65-.43-2.54-.23-.86.2-1.94.6-3.25 1.1l-2.28.86q-.93.33-1.55.63a3 3 0 0 0-1.1.85q-.4.57-.44 1.23-.08.63-.06 1.53v7.8q-.84-.5-1.9-.51C4.59 15.63 3 17.06 3 18.82 3 20.57 4.59 22 6.55 22s3.54-1.43 3.54-3.18z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMusicNote;
