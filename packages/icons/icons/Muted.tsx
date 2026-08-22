import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMuted = forwardRef<SVGSVGElement, IconProps>(function IconMuted(
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
            d="M1.53 10.97c.08-1.2.12-1.81.43-2.4.28-.52.83-1.04 1.38-1.3C3.94 7 4.63 7 6 7c.51 0 .77 0 1.02-.04a3 3 0 0 0 .7-.22c.24-.1.45-.24.88-.52l.22-.14c2.54-1.68 3.81-2.52 4.88-2.15q.3.1.58.29c.92.65 1 2.16 1.13 5.17.05 1.12.09 2.08.09 2.61s-.04 1.49-.09 2.6c-.14 3.02-.2 4.53-1.13 5.18q-.27.19-.58.3c-1.07.36-2.34-.48-4.88-2.16l-.22-.14a6 6 0 0 0-.87-.52 3 3 0 0 0-.71-.22C6.77 17 6.52 17 6 17c-1.37 0-2.06 0-2.66-.28a3.2 3.2 0 0 1-1.38-1.3c-.31-.58-.35-1.18-.43-2.4a17 17 0 0 1 0-2.05"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m22 10-4 4m0-4 4 4"
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
            d="M17.78 9.52a.75.75 0 0 1 1.05 0l1.45 1.44 1.45-1.44a.75.75 0 0 1 1.05 0c.3.29.3.75 0 1.04L21.33 12l1.45 1.44c.3.29.3.75 0 1.04a.75.75 0 0 1-1.05 0l-1.45-1.44-1.45 1.44a.75.75 0 0 1-1.05 0 .73.73 0 0 1 0-1.04L19.23 12l-1.45-1.44a.73.73 0 0 1 0-1.04"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M2 11.72c.04-1.85.06-2.77.72-3.56.12-.14.3-.31.44-.43.81-.63 1.88-.63 4.02-.63.76 0 1.14 0 1.5-.1q.12-.02.23-.06a6 6 0 0 0 1.31-.75c2.51-1.64 3.77-2.46 4.82-2.1q.3.1.58.28c.9.64.98 2.12 1.12 5.08.05 1.1.08 2.03.08 2.55s-.03 1.46-.08 2.55c-.14 2.96-.21 4.44-1.12 5.08a2 2 0 0 1-.58.29c-1.05.35-2.3-.47-4.82-2.11A6 6 0 0 0 8.69 17c-.37-.1-.75-.1-1.51-.1-2.14 0-3.2 0-4.02-.63a3 3 0 0 1-.44-.43c-.66-.8-.68-1.71-.72-3.56z"
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
            d="M2 11.72c.04-1.85.06-2.77.72-3.56.12-.14.3-.31.44-.43.81-.63 1.88-.63 4.02-.63.76 0 1.14 0 1.5-.1q.12-.02.23-.06a6 6 0 0 0 1.31-.75c2.51-1.64 3.77-2.46 4.82-2.1q.3.1.58.28c.9.64.98 2.12 1.12 5.08.05 1.1.08 2.03.08 2.55s-.03 1.46-.08 2.55c-.14 2.96-.21 4.44-1.12 5.08a2 2 0 0 1-.58.29c-1.05.35-2.3-.47-4.82-2.11A6 6 0 0 0 8.69 17c-.37-.1-.75-.1-1.51-.1-2.14 0-3.2 0-4.02-.63a3 3 0 0 1-.44-.43c-.66-.8-.68-1.71-.72-3.56z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.78 9.52a.75.75 0 0 1 1.05 0l1.45 1.44 1.45-1.44a.75.75 0 0 1 1.05 0c.3.29.3.75 0 1.04L21.33 12l1.45 1.44c.3.29.3.75 0 1.04a.75.75 0 0 1-1.05 0l-1.45-1.44-1.45 1.44a.75.75 0 0 1-1.05 0 .73.73 0 0 1 0-1.04L19.23 12l-1.45-1.44a.73.73 0 0 1 0-1.04"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMuted;
