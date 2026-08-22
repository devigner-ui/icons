import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBluetoothWave = forwardRef<SVGSVGElement, IconProps>(
  function IconBluetoothWave(
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
              d="M13.26 8.26 8 12V5.22c0-1.88 0-2.83.6-3.13.6-.31 1.38.23 2.93 1.33l1.73 1.24c1.16.82 1.74 1.23 1.74 1.8s-.58.98-1.74 1.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m13.26 19.34-1.73 1.24c-1.55 1.1-2.32 1.64-2.93 1.33-.6-.3-.6-1.25-.6-3.13V12l5.26 3.74c1.16.82 1.74 1.23 1.74 1.8s-.58.98-1.74 1.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3 15.5 8 12 3 8.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19 5s2 2.1 2 7-2 7-2 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17 8s1 1.9 1 4-1 4-1 4"
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
              d="m9.5 12 4.1 2.94q.77.53 1.25.96c.32.31.61.71.61 1.25 0 .55-.29.95-.61 1.26q-.47.44-1.24.96l-1.7 1.21c-.67.48-1.24.9-1.7 1.13-.49.25-1.07.44-1.66.13-.59-.3-.78-.89-.86-1.43q-.09-.8-.07-2.05v-5.02l-3.53 2.49a.7.7 0 0 1-.96-.17.7.7 0 0 1 .17-.98L7.1 12 3.3 9.32a.7.7 0 0 1-.17-.98.7.7 0 0 1 .96-.17l3.53 2.5V5.63q-.02-1.26.07-2.05c.08-.54.27-1.13.86-1.43s1.17-.12 1.65.13c.47.24 1.04.65 1.72 1.13l1.69 1.2q.76.55 1.24.97c.32.31.61.71.61 1.26 0 .54-.29.94-.61 1.25q-.47.43-1.24.96z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.98 4.98a.7.7 0 0 1 .98.03l.02.01.1.12.24.33q.31.43.7 1.28c.5 1.15.98 2.87.98 5.25s-.48 4.1-.98 5.25a8 8 0 0 1-1.04 1.73h-.01V19l-.49-.46.48.46a.7.7 0 0 1-.98.03.7.7 0 0 1-.02-.99l.04-.05.18-.24q.24-.33.57-1.06c.42-.97.87-2.5.87-4.68s-.45-3.71-.87-4.68a7 7 0 0 0-.79-1.35.7.7 0 0 1 .02-.99"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.3 7.66a.7.7 0 0 1 .93.3v.01l.02.03.15.32q.14.34.33.9c.25.73.5 1.74.5 2.78a9 9 0 0 1-.83 3.68l-.15.32-.01.02v.01a.7.7 0 0 1-.93.32.7.7 0 0 1-.31-.94v-.01l.12-.27q.14-.3.3-.8c.22-.65.43-1.5.43-2.33a8 8 0 0 0-.73-3.13L16 8.61v-.02a.7.7 0 0 1 .3-.93"
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
              d="m9.5 12 4.1 2.94q.77.53 1.25.96c.32.31.61.71.61 1.25 0 .55-.29.95-.61 1.26q-.47.44-1.24.96l-1.7 1.21c-.67.48-1.24.9-1.7 1.13-.49.25-1.07.44-1.66.13-.59-.3-.78-.89-.86-1.43q-.09-.8-.07-2.05v-5.02l-3.53 2.49a.7.7 0 0 1-.96-.17.7.7 0 0 1 .17-.98L7.1 12 3.3 9.32a.7.7 0 0 1-.17-.98.7.7 0 0 1 .96-.17l3.53 2.5V5.63q-.02-1.26.07-2.05c.08-.54.27-1.13.86-1.43s1.17-.12 1.65.13c.47.24 1.04.65 1.72 1.13l1.69 1.2q.76.55 1.24.97c.32.31.61.71.61 1.26 0 .54-.29.94-.61 1.25q-.47.43-1.24.96z"
              fill="currentColor"
            />
            <path
              d="M17.98 4.98a.7.7 0 0 1 .98.03l.02.01.1.12.24.33q.31.43.7 1.28c.5 1.15.98 2.87.98 5.25s-.48 4.1-.98 5.25a8 8 0 0 1-1.04 1.73h-.01V19l-.48-.46.47.46a.7.7 0 0 1-.98.03.7.7 0 0 1-.02-.99l.04-.05.18-.24q.24-.33.57-1.06c.42-.97.87-2.5.87-4.68s-.45-3.71-.87-4.68a7 7 0 0 0-.79-1.35.7.7 0 0 1 .02-.99"
              fill="currentColor"
            />
            <path
              d="M16.3 7.66a.7.7 0 0 1 .93.3v.01l.02.03.15.32q.14.34.33.9c.25.73.5 1.74.5 2.78a9 9 0 0 1-.83 3.68l-.15.32-.01.02v.01a.7.7 0 0 1-.93.32.7.7 0 0 1-.31-.94v-.01l.12-.27q.13-.3.3-.8c.22-.65.43-1.5.43-2.33a8 8 0 0 0-.73-3.13L16 8.61v-.02a.7.7 0 0 1 .3-.93"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBluetoothWave;
