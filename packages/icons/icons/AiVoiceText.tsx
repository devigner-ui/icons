import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiVoiceText = forwardRef<SVGSVGElement, IconProps>(function IconAiVoiceText(
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
            d="M12.5 15.2v-3.84a2.56 2.56 0 0 1 5.12 0v3.84m-5.12-2.69h5.12m2.69-3.71v6.4"
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
            d="M12.5 15.2v-3.84a2.56 2.56 0 0 1 5.12 0v3.84m-5.12-2.69h5.12m2.69-3.71v6.4"
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
            d="M11.75 15.2v-2.98c0-.91-.01-1.77.48-2.58a3.34 3.34 0 0 1 5.87.4c.3.7.27 1.44.27 2.18v2.98a.75.75 0 0 1-1.5 0v-1.94h-3.62v1.94a.75.75 0 0 1-1.5 0zm5.03-4.4a1.82 1.82 0 0 0-3.3-.3c-.22.38-.24.82-.24 1.26h3.64q.03-.5-.1-.96zm3.53-2.75c.41 0 .75.34.75.75v6.4a.75.75 0 0 1-1.5 0V8.8c0-.41.33-.75.75-.75z"
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
            d="M3.5 9.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75zm3-3.5c.41 0 .75.34.75.75v11a.75.75 0 0 1-1.5 0v-11c0-.41.34-.75.75-.75zm3 2.5c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V9c0-.41.34-.75.75-.75zm2.25 6.95v-2.98c0-.91-.01-1.77.48-2.58a3.34 3.34 0 0 1 5.87.4c.3.7.27 1.44.27 2.18v2.98a.75.75 0 0 1-1.5 0v-1.94h-3.62v1.94a.75.75 0 0 1-1.5 0zm5.03-4.4a1.82 1.82 0 0 0-3.3-.3c-.22.38-.24.82-.24 1.26h3.64q.03-.5-.1-.96zm3.53-2.75c.41 0 .75.34.75.75v6.4a.75.75 0 0 1-1.5 0V8.8c0-.41.33-.75.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiVoiceText;
