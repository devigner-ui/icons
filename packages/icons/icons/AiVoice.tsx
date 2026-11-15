import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiVoice = forwardRef<SVGSVGElement, IconProps>(function IconAiVoice(
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
            d="M3 10v4m14.5-6.5v9M21 10v4M6.5 7.5v4.2m0 2.4v2.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.8c.29 2.11 1.09 2.91 3.2 3.2-2.11.29-2.91 1.09-3.2 3.2-.29-2.11-1.09-2.91-3.2-3.2 2.11-.29 2.91-1.09 3.2-3.2Z"
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
            d="M3 10v4m3.5-6.5v9m11-9v9M21 10v4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.8c.29 2.11 1.09 2.91 3.2 3.2-2.11.29-2.91 1.09-3.2 3.2-.29-2.11-1.09-2.91-3.2-3.2 2.11-.29 2.91-1.09 3.2-3.2Z"
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
            d="M3 9.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75zm3.5-2.5c.41 0 .75.34.75.75v9a.75.75 0 0 1-1.5 0v-9c0-.41.34-.75.75-.75zm11 0c.41 0 .75.34.75.75v9a.75.75 0 0 1-1.5 0v-9c0-.41.34-.75.75-.75zm3.5 2.5c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 8.4c.15 1.13.4 1.8.9 2.3s1.18.76 2.3.9a.4.4 0 0 1 0 .8c-1.12.15-1.8.4-2.3.9s-.75 1.18-.9 2.3a.4.4 0 0 1-.8 0c-.15-1.12-.4-1.8-.9-2.3s-1.18-.75-2.3-.9a.4.4 0 0 1 0-.8c1.12-.14 1.8-.4 2.3-.9s.75-1.17.9-2.3a.4.4 0 0 1 .8 0z"
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
            d="M2.25 10v4a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0zm3.5-2.5v9a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-1.5 0zm11 0v9a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-1.5 0zm3.5 2.5v4a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0zM12 8.05a.4.4 0 0 0-.4.35c-.15 1.13-.4 1.8-.9 2.3s-1.18.76-2.3.9a.4.4 0 0 0 0 .8c1.12.15 1.8.4 2.3.9s.75 1.18.9 2.3a.4.4 0 0 0 .8 0c.15-1.12.4-1.8.9-2.3s1.18-.75 2.3-.9a.4.4 0 0 0 0-.8c-1.12-.14-1.8-.4-2.3-.9s-.75-1.17-.9-2.3a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiVoice;
