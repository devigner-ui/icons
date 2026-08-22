import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPulse = forwardRef<SVGSVGElement, IconProps>(function IconPulse(
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
            d="M5 15h1.4c.78 0 1.17 0 1.5.18s.55.5 1 1.16l.15.24c.42.63.63.95.92.93s.46-.36.8-1.04l1.97-3.87c.36-.71.54-1.06.83-1.07.3-.02.5.32.91 1l.64 1.04c.43.7.65 1.05.99 1.24s.75.19 1.57.19H19"
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
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
            fill="currentColor"
          />
          <path
            d="M15.1 12.1c-.19-.3-.37-.6-.54-.81-.19-.23-.52-.53-1.02-.51s-.8.35-.97.59c-.16.22-.32.53-.48.84l-1.98 3.92-.2.38-.24-.35-.17-.27q-.3-.46-.56-.78-.27-.36-.68-.6a2 2 0 0 0-.87-.23q-.41-.04-.96-.03H5a.75.75 0 0 0 0 1.5h1.4q.58 0 .85.02c.18.02.25.04.3.07q.06.01.23.21.16.2.49.7l.18.28q.3.44.56.76c.19.21.52.5 1 .47.5-.03.79-.35.95-.59q.23-.34.46-.82l1.99-3.91.2-.4.24.38.65 1.07q.3.49.55.84.26.38.7.63.42.23.9.26.43.04 1 .03H19a.75.75 0 0 0 0-1.5h-1.32c-.42 0-.69 0-.9-.02a1 1 0 0 1-.3-.08 1 1 0 0 1-.23-.22q-.18-.24-.49-.75z"
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
            d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46M15.1 12.1c-.19-.3-.37-.6-.54-.8-.19-.23-.52-.53-1.02-.51s-.8.35-.97.59c-.16.22-.32.53-.48.84l-1.98 3.92-.2.38-.24-.35-.17-.27q-.3-.46-.56-.78-.27-.36-.68-.6a2 2 0 0 0-.87-.23 11 11 0 0 0-.96-.03H5a.75.75 0 1 0 0 1.5h1.4q.58 0 .85.02c.18.02.25.04.3.07q.06.01.23.21.16.2.49.7l.18.28q.3.44.56.76c.19.21.52.5 1 .47.5-.03.79-.35.95-.59q.23-.34.46-.82l1.99-3.91.2-.4.24.38.65 1.07q.3.49.55.84.26.38.7.63.42.23.9.26.43.04 1 .03H19a.75.75 0 0 0 0-1.5h-1.32c-.42 0-.69 0-.9-.02a1 1 0 0 1-.3-.08 1 1 0 0 1-.23-.22q-.18-.24-.49-.75z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPulse;
