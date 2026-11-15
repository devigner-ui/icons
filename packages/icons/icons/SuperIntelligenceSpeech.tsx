import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSuperIntelligenceSpeech = forwardRef<SVGSVGElement, IconProps>(function IconSuperIntelligenceSpeech(
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
            d="M3.5 10v4m6-5v6m-3-8.5v4.7m0 2.4v3.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.06 9.89c-.9-1.19-4.04-1.19-4.49.53-.36 1.18 4.49 1.45 4.49 3.16-.45 1.72-3.6 1.72-4.49.53m7.46-5.41v6.6"
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
            d="M3.5 10v4m3-7.5v11m3-8.5v6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.06 9.89c-.9-1.19-4.04-1.19-4.49.53-.36 1.18 4.49 1.45 4.49 3.16-.45 1.72-3.6 1.72-4.49.53m7.46-5.41v6.6"
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
            d="M3.5 9.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75zm3-3.5c.41 0 .75.34.75.75v11a.75.75 0 0 1-1.5 0v-11c0-.41.34-.75.75-.75zm3 2.5c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V9c0-.41.34-.75.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M16.46 10.34c-.5-.6-1.61-.63-2.3-.44-.37.1-.6.27-.78.56l.04.02q.18.1.36.17.53.23 1.07.42c1.18.43 2.75.96 2.94 2.36a1 1 0 0 1-.03.42c-.76 2.27-4.37 2.42-5.79.72a.75.75 0 0 1 1.2-.9c.5.6 1.65.63 2.35.41.32-.1.63-.27.77-.57-.04-.1-.14-.17-.22-.23q-.45-.33-.98-.52c-.84-.34-1.79-.56-2.55-1.06-.44-.3-.76-.7-.73-1.25.03-.78.71-1.45 1.37-1.77 1.4-.69 3.45-.48 4.48.75a.75.75 0 0 1-1.2.91zm3.57-2.39c.41 0 .75.34.75.75v6.6a.75.75 0 0 1-1.5 0V8.7c0-.41.33-.75.75-.75z"
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
            d="M3.5 9.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75zm3-3.5c.41 0 .75.34.75.75v11a.75.75 0 0 1-1.5 0v-11c0-.41.34-.75.75-.75zm3 2.5c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V9c0-.41.34-.75.75-.75zm6.96 2.09c-.5-.6-1.61-.63-2.3-.44-.37.1-.6.27-.78.56l.04.02q.18.1.36.17.53.23 1.07.42c1.18.43 2.75.96 2.94 2.36a1 1 0 0 1-.03.42c-.76 2.27-4.37 2.42-5.79.72a.75.75 0 0 1 1.2-.9c.5.6 1.65.63 2.35.41.32-.1.63-.27.77-.57-.04-.1-.14-.17-.22-.23q-.45-.33-.98-.52c-.84-.34-1.79-.56-2.55-1.06-.44-.3-.76-.7-.73-1.25.03-.78.71-1.45 1.37-1.77 1.4-.69 3.45-.48 4.48.75a.75.75 0 0 1-1.2.91zm3.57-2.39c.41 0 .75.34.75.75v6.6a.75.75 0 0 1-1.5 0V8.7c0-.41.33-.75.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconSuperIntelligenceSpeech;
