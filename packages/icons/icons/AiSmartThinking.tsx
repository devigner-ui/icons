import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSmartThinking = forwardRef<SVGSVGElement, IconProps>(function IconAiSmartThinking(
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
            d="M17 21.5v-3.8c2.1-1.5 3.5-4 3.5-6.7A8.5 8.5 0 0 0 4.1 7.92m-.76 2.28-.74 2.1c-.2.5.2 1 .7 1h1.2v2.4c0 1.6 1.3 2.8 2.8 2.8H9v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 8.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M17 21.5v-3.8c2.1-1.5 3.5-4 3.5-6.7A8.5 8.5 0 0 0 3.8 8.9l-1.2 3.4c-.2.5.2 1 .7 1h1.2v2.4c0 1.6 1.3 2.8 2.8 2.8H9v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 8.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M8.25 21.5v-2.25H7.3a4 4 0 0 1-2.49-1.01 4 4 0 0 1-1.06-2.54v-1.65H3.3c-.43-.05-.99-.3-1.22-.62-.23-.31-.3-.92-.19-1.38l1.2-3.37a9.4 9.4 0 0 1 3.18-4.96A9.4 9.4 0 0 1 12 1.75c2.5 0 4.91 1.08 6.54 2.7A9.4 9.4 0 0 1 21.25 11a9.2 9.2 0 0 1-3.5 7.07v3.43c0 .42-.34.75-.75.75H9a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M13.4 7.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
            d="M8.25 21.5v-2.25H7.3a4 4 0 0 1-2.49-1.01 4 4 0 0 1-1.06-2.54v-1.65H3.3c-.43-.05-.99-.3-1.22-.62-.23-.31-.3-.92-.19-1.38l1.2-3.37a9.4 9.4 0 0 1 3.18-4.96A9.4 9.4 0 0 1 12 1.75c2.5 0 4.91 1.08 6.54 2.7A9.4 9.4 0 0 1 21.25 11a9.2 9.2 0 0 1-3.5 7.07v3.43c0 .42-.34.75-.75.75H9a.75.75 0 0 1-.75-.75zM13 7.35a.4.4 0 0 0-.4.35c-.1.86-.3 1.36-.67 1.73s-.87.56-1.73.67a.4.4 0 0 0 0 .8c.86.1 1.36.3 1.73.67s.56.87.67 1.73a.4.4 0 0 0 .8 0c.1-.86.3-1.36.67-1.73s.87-.56 1.73-.67a.4.4 0 0 0 0-.8c-.86-.1-1.36-.3-1.73-.67s-.56-.87-.67-1.73a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiSmartThinking;
