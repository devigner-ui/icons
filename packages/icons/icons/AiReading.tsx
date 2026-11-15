import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiReading = forwardRef<SVGSVGElement, IconProps>(function IconAiReading(
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
      {variant === "Broken" ? (
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
            d="M20.5 13.87V4.5C17 4.3 14 5 12 6.5c-2-1.5-5-2.2-8.5-2v13c3.5-.2 6.5.5 8.5 2 2-1.5 5-2.2 8.5-2v-1.23"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6.5v13M6 9l3.5.6M6 12.5l3.5.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.3 9.7c.16 1.19.61 1.64 1.8 1.8-1.19.16-1.64.61-1.8 1.8-.16-1.19-.61-1.64-1.8-1.8 1.19-.16 1.64-.61 1.8-1.8Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : !fill ? (
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
            d="M12 6.5c-2-1.5-5-2.2-8.5-2v13c3.5-.2 6.5.5 8.5 2 2-1.5 5-2.2 8.5-2v-13C17 4.3 14 5 12 6.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m6 9 3.5.6M6 12.5l3.5.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 6.5v13"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M16.3 9.7c.16 1.19.61 1.64 1.8 1.8-1.19.16-1.64.61-1.8 1.8-.16-1.19-.61-1.64-1.8-1.8 1.19-.16 1.64-.61 1.8-1.8Z"
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
            d="M21.25 4.5v13a.75.75 0 0 1-.8.75c-3.39-.21-6.14.42-8 1.85-.27.2-.63.2-.9 0-1.86-1.43-4.61-2.06-8-1.85a.75.75 0 0 1-.8-.75v-13c0-.4.31-.73.7-.75 3.61-.19 6.42.48 8.55 1.84 2.13-1.35 4.94-2.03 8.54-1.84.4.02.71.35.71.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.45 20.1c-.27.2-.63.2-.9 0l-.3-.22V5.15q.38.21.75.44.37-.23.75-.43v14.72zM5.26 8.87c.07-.4.46-.68.87-.6l3.5.6a.75.75 0 0 1-.26 1.47l-3.5-.6a.75.75 0 0 1-.6-.87zm0 3.52c.06-.4.44-.7.85-.63l3.5.5a.75.75 0 1 1-.22 1.48l-3.5-.5a.75.75 0 0 1-.63-.85z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M16.7 9.3c.08.66.22 1.02.5 1.3s.64.42 1.3.5a.4.4 0 0 1 0 .8c-.66.08-1.02.22-1.3.5s-.42.64-.5 1.3a.4.4 0 0 1-.8 0c-.08-.66-.22-1.02-.5-1.3s-.64-.42-1.3-.5a.4.4 0 0 1 0-.8c.66-.08 1.02-.22 1.3-.5.28-.27.42-.64.5-1.3a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="M21.25 4.5v13a.75.75 0 0 1-.8.75c-3.39-.21-6.14.42-8 1.85-.27.2-.63.2-.9 0-1.86-1.43-4.61-2.06-8-1.85a.75.75 0 0 1-.8-.75v-13c0-.4.31-.73.7-.75 3.61-.19 6.42.48 8.55 1.84 2.13-1.35 4.94-2.03 8.54-1.84.4.02.71.35.71.75zM5.26 8.87c.07-.4.46-.68.87-.6l3.5.6a.75.75 0 0 1-.26 1.47l-3.5-.6a.75.75 0 0 1-.6-.87zm0 3.52c.06-.4.44-.7.85-.63l3.5.5a.75.75 0 1 1-.22 1.48l-3.5-.5a.75.75 0 0 1-.63-.85zM16.3 8.95a.4.4 0 0 0-.4.35c-.08.66-.22 1.02-.5 1.3s-.64.42-1.3.5a.4.4 0 0 0 0 .8c.66.08 1.02.22 1.3.5s.42.64.5 1.3a.4.4 0 0 0 .8 0c.08-.66.22-1.02.5-1.3s.64-.42 1.3-.5a.4.4 0 0 0 0-.8c-.66-.08-1.02-.22-1.3-.5-.28-.27-.42-.64-.5-1.3a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiReading;
