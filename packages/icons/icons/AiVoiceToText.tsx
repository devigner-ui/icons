import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiVoiceToText = forwardRef<SVGSVGElement, IconProps>(function IconAiVoiceToText(
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
            d="M4 6.43V5a2.5 2.5 0 0 1 2.5-2.5v0A2.5 2.5 0 0 1 9 5v4a2.5 2.5 0 0 1-2.5 2.5v0A2.5 2.5 0 0 1 4 9v-.17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 9.5a4.5 4.5 0 0 0 9 0M6.5 14v2.5m6.5-8h8m-4 0v10"
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
            d="M6.5 2.5zA2.5 2.5 0 0 1 9 5v4a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 4 9V5a2.5 2.5 0 0 1 2.5-2.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 9.5a4.5 4.5 0 0 0 9 0M6.5 14v2.5m6.5-8h8m-4 0v10"
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
            d="M8.8 2.7c.27.28.54.67.7 1.03.14.36.19.96.19.98a1 1 0 0 1 .06.3v4.07a3.7 3.7 0 0 1-.95 2.22c-.28.28-.67.54-1.04.7-.35.15-.95.19-.97.2a1 1 0 0 1-.37.05 3.6 3.6 0 0 1-2.22-.95 4 4 0 0 1-.7-1.04 4 4 0 0 1-.2-.97 1 1 0 0 1-.05-.3v-4q0 0 0 0v-.07c.06-.82.42-1.69.95-2.22.28-.28.67-.54 1.03-.7s.95-.19.98-.2a1 1 0 0 1 .37-.05 3.6 3.6 0 0 1 2.22.95z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M2.75 9.5a4 4 0 0 0 1.2 2.76q.53.47 1.18.73c1.8.7 3.9-.12 4.74-1.85q.37-.77.38-1.64a.75.75 0 0 1 1.5 0q-.01 1.21-.53 2.3a5.3 5.3 0 0 1-3.97 2.88v1.82a.75.75 0 0 1-1.5 0v-1.8a5 5 0 0 1-2.81-1.34A5.3 5.3 0 0 1 1.25 9.5a.75.75 0 0 1 1.5 0zm9.5-1c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5h-3.25v9.25a.75.75 0 0 1-1.5 0V9.25H13a.75.75 0 0 1-.75-.75z"
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
            d="M8.8 2.7c.27.28.54.67.7 1.03.14.36.19.96.19.98a1 1 0 0 1 .06.3v4.07a3.7 3.7 0 0 1-.95 2.22c-.28.28-.67.54-1.04.7-.35.15-.95.19-.97.2a1 1 0 0 1-.37.05 3.6 3.6 0 0 1-2.22-.95 4 4 0 0 1-.7-1.04 4 4 0 0 1-.2-.97 1 1 0 0 1-.05-.3v-4q0 0 0 0v-.07c.06-.82.42-1.69.95-2.22.28-.28.67-.54 1.03-.7s.95-.19.98-.2a1 1 0 0 1 .37-.05 3.6 3.6 0 0 1 2.22.95zM2.75 9.5a4 4 0 0 0 1.2 2.76q.53.47 1.18.73c1.8.7 3.9-.12 4.74-1.85q.37-.77.38-1.64a.75.75 0 0 1 1.5 0q-.01 1.21-.53 2.3a5.3 5.3 0 0 1-3.97 2.88v1.82a.75.75 0 0 1-1.5 0v-1.8a5 5 0 0 1-2.81-1.34A5.3 5.3 0 0 1 1.25 9.5a.75.75 0 0 1 1.5 0zm9.5-1c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5h-3.25v9.25a.75.75 0 0 1-1.5 0V9.25H13a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiVoiceToText;
