import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSpeech = forwardRef<SVGSVGElement, IconProps>(function IconAiSpeech(
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
            d="M3 10v4m3.2-6.5v9m6.4-8v7M9.4 5v7.2m0 2.4V19"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 8.5c.32 2.31 1.19 3.19 3.5 3.5-2.31.31-3.18 1.19-3.5 3.5-.32-2.31-1.19-3.19-3.5-3.5 2.31-.31 3.18-1.19 3.5-3.5Z"
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
            d="M3 10v4m3.2-6.5v9M9.4 5v14m3.2-10.5v7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 8.5c.32 2.31 1.19 3.19 3.5 3.5-2.31.31-3.18 1.19-3.5 3.5-.32-2.31-1.19-3.19-3.5-3.5 2.31-.31 3.18-1.19 3.5-3.5Z"
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
            d="M3 9.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75zm3.2-2.5c.41 0 .75.34.75.75v9a.75.75 0 0 1-1.5 0v-9c0-.41.34-.75.75-.75zm3.2-2.5c.41 0 .75.34.75.75v14a.75.75 0 0 1-1.5 0V5c0-.41.34-.75.75-.75zm3.2 3.5c.41 0 .75.34.75.75v7a.75.75 0 0 1-1.5 0v-7c0-.41.34-.75.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M18.4 8.1c.16 1.22.44 1.97.99 2.52.54.54 1.29.82 2.51.98a.4.4 0 0 1 0 .8c-1.22.16-1.97.44-2.51.99-.55.54-.83 1.29-1 2.51a.4.4 0 0 1-.79 0c-.16-1.22-.44-1.97-.98-2.51-.55-.55-1.3-.83-2.52-1a.4.4 0 0 1 0-.79c1.22-.16 1.97-.44 2.52-.98.54-.55.82-1.3.98-2.52a.4.4 0 0 1 .8 0z"
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
            d="M2.25 10v4a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0zm3.2-2.5v9a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-1.5 0zM8.65 5v14a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-1.5 0zm3.2 3.5v7a.75.75 0 0 0 1.5 0v-7a.75.75 0 0 0-1.5 0zM18 7.75a.4.4 0 0 0-.4.35c-.16 1.22-.44 1.97-.99 2.52-.54.54-1.29.82-2.51.98a.4.4 0 0 0 0 .8c1.22.16 1.97.44 2.51.99.55.54.83 1.29 1 2.51a.4.4 0 0 0 .79 0c.16-1.22.44-1.97.99-2.51.54-.55 1.29-.83 2.51-1a.4.4 0 0 0 0-.79c-1.22-.16-1.97-.44-2.51-.98-.55-.55-.83-1.3-1-2.52a.4.4 0 0 0-.39-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiSpeech;
