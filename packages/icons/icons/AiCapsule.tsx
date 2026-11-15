import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCapsule = forwardRef<SVGSVGElement, IconProps>(function IconAiCapsule(
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
            d="M8 7.75V6.5a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4v0a4 4 0 0 1-4-4v-1.35"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 12a7 7 0 0 0 14 0m-7 7v2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7.2c.16 1.19.61 1.64 1.8 1.8-1.19.16-1.64.61-1.8 1.8-.16-1.19-.61-1.64-1.8-1.8 1.19-.16 1.64-.61 1.8-1.8Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M12 2.5za4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h0a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 12a7 7 0 0 0 14 0m-7 7v2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7.2c.16 1.19.61 1.64 1.8 1.8-1.19.16-1.64.61-1.8 1.8-.16-1.19-.61-1.64-1.8-1.8 1.19-.16 1.64-.61 1.8-1.8Z"
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
            d="M12 1.75a5 5 0 0 1 3.36 1.4c.41.4.79.96 1.02 1.5s.31 1.56.31 1.56q0 0 0 0a.75.75 0 0 1-.69.97v.07c.41 0 .75-.34.75-.75 0 0 0-2.21 0 0v5a5 5 0 0 1-1.4 3.36c-.4.41-.95.79-1.5 1.02-.54.22-1.53.3-1.56.31a1 1 0 0 1-.29.06 5 5 0 0 1-3.36-1.4 5 5 0 0 1-1.02-1.5 7 7 0 0 1-.31-1.56h0q0 0 0 0c-.02-.06 0-.01 0 0a.75.75 0 0 1 .69-.97v-.07a.75.75 0 0 0-.75.75s0 2.2 0 0v-5a5 5 0 0 1 1.4-3.36c.4-.41.95-.79 1.5-1.02a7 7 0 0 1 1.56-.31 1 1 0 0 1 .29-.06z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M5.75 12a6.4 6.4 0 0 0 1.98 4.57A6.24 6.24 0 0 0 18.25 12a.75.75 0 0 1 1.5 0 8 8 0 0 1-.54 2.84 7.8 7.8 0 0 1-6.46 4.87v1.8a.75.75 0 0 1-1.5 0v-1.8a7.7 7.7 0 0 1-6.3-4.5 8 8 0 0 1-.7-3.2.75.75 0 0 1 1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 6.8c.08.66.22 1.02.5 1.3s.64.42 1.3.5a.4.4 0 0 1 0 .8c-.66.08-1.02.22-1.3.5s-.42.64-.5 1.3a.4.4 0 0 1-.8 0c-.08-.66-.22-1.02-.5-1.3s-.64-.42-1.3-.5a.4.4 0 0 1 0-.8c.66-.08 1.02-.22 1.3-.5.28-.27.42-.64.5-1.3a.4.4 0 0 1 .8 0z"
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
            d="M12 1.75a5 5 0 0 1 3.36 1.4c.41.4.79.96 1.02 1.5s.31 1.56.31 1.56q0 0 0 0a.75.75 0 0 1-.69.97v.07c.41 0 .75-.34.75-.75 0 0 0-2.21 0 0v5a5 5 0 0 1-1.4 3.36c-.4.41-.95.79-1.5 1.02-.54.22-1.53.3-1.56.31a1 1 0 0 1-.29.06 5 5 0 0 1-3.36-1.4 5 5 0 0 1-1.02-1.5 7 7 0 0 1-.31-1.56h0q0 0 0 0c-.02-.06 0-.01 0 0a.75.75 0 0 1 .69-.97v-.07a.75.75 0 0 0-.75.75s0 2.2 0 0v-5a5 5 0 0 1 1.4-3.36c.4-.41.95-.79 1.5-1.02a7 7 0 0 1 1.56-.31 1 1 0 0 1 .29-.06zM5.75 12a6.4 6.4 0 0 0 1.98 4.57A6.24 6.24 0 0 0 18.25 12a.75.75 0 0 1 1.5 0 8 8 0 0 1-.54 2.84 7.8 7.8 0 0 1-6.46 4.87v1.8a.75.75 0 0 1-1.5 0v-1.8a7.7 7.7 0 0 1-6.3-4.5 8 8 0 0 1-.7-3.2.75.75 0 0 1 1.5 0zM12 6.45a.4.4 0 0 0-.4.35c-.08.66-.22 1.02-.5 1.3s-.64.42-1.3.5a.4.4 0 0 0 0 .8c.66.08 1.02.22 1.3.5s.42.64.5 1.3a.4.4 0 0 0 .8 0c.08-.66.22-1.02.5-1.3s.64-.42 1.3-.5a.4.4 0 0 0 0-.8c-.66-.08-1.02-.22-1.3-.5-.28-.27-.42-.64-.5-1.3a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiCapsule;
