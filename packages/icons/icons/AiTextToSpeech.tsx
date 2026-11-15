import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiTextToSpeech = forwardRef<SVGSVGElement, IconProps>(function IconAiTextToSpeech(
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
            d="M14 9v6m6-6v6m-3-9v5.7m0 2.4V18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 7h8m-4 0v10"
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
            d="M14 9v6m3-9v12m3-9v6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 7h8m-4 0v10"
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
            d="M14 8.25c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V9c0-.41.34-.75.75-.75zm3-3c.41 0 .75.34.75.75v12a.75.75 0 0 1-1.5 0V6c0-.41.34-.75.75-.75zm3 3c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V9c0-.41.34-.75.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M1.75 7c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H7.25V17a.75.75 0 0 1-1.5 0V7.75H2.5A.75.75 0 0 1 1.75 7z"
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
            d="M14 8.25c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V9c0-.41.34-.75.75-.75zm3-3c.41 0 .75.34.75.75v12a.75.75 0 0 1-1.5 0V6c0-.41.34-.75.75-.75zm3 3c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V9c0-.41.34-.75.75-.75zM1.75 7c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H7.25V17a.75.75 0 0 1-1.5 0V7.75H2.5A.75.75 0 0 1 1.75 7z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiTextToSpeech;
