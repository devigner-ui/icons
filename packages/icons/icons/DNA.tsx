import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDNA = forwardRef<SVGSVGElement, IconProps>(function IconDNA(
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
            d="m11.85 12.15.2.07c3.26 1.12 7.18.05 9.95-2.72m-10.15 2.65-.56-.19c-3.04-1.05-6.7-.05-9.29 2.54m9.85-2.35-.07-.2C10.66 8.7 11.73 4.77 14.5 2m-2.65 10.15.19.56c1.05 3.04.05 6.7-2.54 9.29"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m6.76 11.84 5.08 5.08"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m11.84 6.76 5.08 5.08"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m4 13 3.5 3.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m19.78 10.9-3.5-3.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m9.3 18.2 1.6 1.58"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.59 5.59 13 4"
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
            d="M15.03 1.47c.3.3.3.77 0 1.06-2.56 2.56-3.52 6.11-2.6 9.03 2.93.93 6.48-.03 9.04-2.59a.75.75 0 1 1 1.06 1.06c-2.62 2.62-6.26 3.85-9.56 3.21.75 3.18-.4 6.75-2.94 9.3a.75.75 0 1 1-1.06-1.07c2.42-2.42 3.3-5.79 2.36-8.52l-.07-.2-.21-.08c-2.73-.94-6.1-.06-8.52 2.36a.75.75 0 1 1-1.06-1.06c2.54-2.54 6.11-3.7 9.29-2.94-.64-3.3.59-6.94 3.21-9.56.3-.3.77-.3 1.06 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m20.08 10.14-3.27-3.28a.75.75 0 1 0-1.06 1.06l3 3q.69-.33 1.33-.78"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m13.1 5.17.96.95a.75.75 0 0 0 1.06-1.06l-1.2-1.21q-.46.65-.81 1.32"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m10.9 18.72-1.06-1.06a.75.75 0 1 0-1.07 1.06l1.36 1.36q.45-.66.77-1.36"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m3.86 13.92 3.11 3.11a.75.75 0 1 0 1.06-1.06L5.2 13.14q-.7.33-1.34.78"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m6.5 12.64 4.81 4.81.05.05q.27-.9.32-1.8L8.3 12.32q-.9.06-1.8.32"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17.55 11.43-.1-.12-4.88-4.88a9 9 0 0 0-.4 1.72l3.68 3.68a9 9 0 0 0 1.7-.4"
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
            d="M15.03 1.47c.3.3.3.77 0 1.06q-.63.63-1.12 1.32l1.2 1.2a.75.75 0 0 1-1.05 1.07l-.95-.95q-.32.62-.54 1.26l4.88 4.88.1.12q.6-.2 1.2-.5l-3-3a.75.75 0 1 1 1.06-1.07l3.27 3.28q.73-.52 1.39-1.17a.75.75 0 1 1 1.06 1.06c-2.62 2.62-6.26 3.85-9.56 3.21.75 3.18-.4 6.75-2.94 9.3a.75.75 0 1 1-1.06-1.07q.66-.66 1.16-1.4l-1.36-1.35a.75.75 0 0 1 1.07-1.06l1.06 1.06q.28-.6.46-1.22l-.05-.05-4.8-4.81q-.67.2-1.31.5l2.83 2.83a.75.75 0 1 1-1.06 1.06l-3.11-3.11q-.7.49-1.33 1.11a.75.75 0 1 1-1.06-1.06c2.54-2.54 6.11-3.7 9.29-2.94-.64-3.3.59-6.94 3.21-9.56.3-.3.77-.3 1.06 0m.82 10.36-3.68-3.68a8 8 0 0 0 .27 3.41q1.64.52 3.41.27m-4.52 1.12q.45 1.32.35 2.75L8.3 12.32q1.44-.1 2.75.35l.2.07z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDNA;
