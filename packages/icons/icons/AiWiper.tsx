import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiWiper = forwardRef<SVGSVGElement, IconProps>(function IconAiWiper(
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
            d="M6.82 16.93 3.6 13.7a2 2 0 0 1 0-2.83l1-.99a2 2 0 0 1 2.82 0l6.72 6.72a2 2 0 0 1 0 2.83l-1 .99a2 2 0 0 1-2.82 0l-1.79-1.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.26 12.75 21 3.01"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 1.9c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
            d="m7.41 9.88 6.72 6.72a2 2 0 0 1 0 2.83l-1 .99a2 2 0 0 1-2.82 0L3.59 13.7a2 2 0 0 1 0-2.83l1-.99a2 2 0 0 1 2.82 0zm3.85 2.87L21 3.01"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 1.9c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
            d="m7.94 9.35 2.83 2.83 9.7-9.7a.75.75 0 0 1 1.06 1.06l-9.7 9.7 2.83 2.83a2.75 2.75 0 0 1 0 3.89l-1 .99a2.75 2.75 0 0 1-3.88 0l-6.72-6.72a2.75 2.75 0 0 1 0-3.89l1-.99a2.75 2.75 0 0 1 3.88 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.9 1.5c.12.93.33 1.47.73 1.87s.94.61 1.87.73a.4.4 0 0 1 0 .8c-.93.12-1.47.33-1.87.73s-.61.94-.73 1.87a.4.4 0 0 1-.8 0c-.12-.93-.33-1.47-.73-1.87s-.94-.61-1.87-.73a.4.4 0 0 1 0-.8c.93-.12 1.47-.32 1.87-.73s.61-.94.73-1.87a.4.4 0 0 1 .8 0z"
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
            d="m7.94 9.35 2.83 2.83 9.7-9.7a.75.75 0 0 1 1.06 1.06l-9.7 9.7 2.83 2.83a2.75 2.75 0 0 1 0 3.89l-1 .99a2.75 2.75 0 0 1-3.88 0l-6.72-6.72a2.75 2.75 0 0 1 0-3.89l1-.99a2.75 2.75 0 0 1 3.88 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.9 1.5c.12.93.33 1.47.73 1.87s.94.61 1.87.73a.4.4 0 0 1 0 .8c-.93.12-1.47.33-1.87.73s-.61.94-.73 1.87a.4.4 0 0 1-.8 0c-.12-.93-.33-1.47-.73-1.87s-.94-.61-1.87-.73a.4.4 0 0 1 0-.8c.93-.12 1.47-.32 1.87-.73s.61-.94.73-1.87a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiWiper;
