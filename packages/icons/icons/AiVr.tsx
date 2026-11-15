import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiVr = forwardRef<SVGSVGElement, IconProps>(function IconAiVr(
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
            d="M21 13.14v1.36c0 1.7-1.3 3-3 3h-3.2c-.7 0-1.3-.4-1.6-1l-.5-1.1c-.4-.9-1.6-.9-2 0l-.5 1.1c-.3.6-.9 1-1.6 1H6c-1.7 0-3-1.3-3-3v-5c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v1.24"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.7c.16 1.19.61 1.64 1.8 1.8-1.19.16-1.64.61-1.8 1.8-.16-1.19-.61-1.64-1.8-1.8 1.19-.16 1.64-.61 1.8-1.8Z"
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
            d="M3 9.5c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v5c0 1.7-1.3 3-3 3h-3.2c-.7 0-1.3-.4-1.6-1l-.5-1.1c-.4-.9-1.6-.9-2 0l-.5 1.1c-.3.6-.9 1-1.6 1H6c-1.7 0-3-1.3-3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.7c.16 1.19.61 1.64 1.8 1.8-1.19.16-1.64.61-1.8 1.8-.16-1.19-.61-1.64-1.8-1.8 1.19-.16 1.64-.61 1.8-1.8Z"
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
            d="M2.25 9.5a4 4 0 0 1 1.08-2.67A4 4 0 0 1 6 5.75h12c1 .03 2.03.45 2.67 1.08a4 4 0 0 1 1.08 2.67v5a4 4 0 0 1-1.08 2.67A4 4 0 0 1 18 18.25h-3.2c-.9-.06-1.85-.7-2.28-1.44l-.5-1.1c-.04-.13-.06-.13-.15-.19s-.07-.05-.17-.05-.09 0-.17.05-.1.06-.15.19l-.5 1.12a3 3 0 0 1-2.28 1.42H6a4 4 0 0 1-2.67-1.08 4 4 0 0 1-1.08-2.67z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 8.3c.08.66.22 1.02.5 1.3s.64.42 1.3.5a.4.4 0 0 1 0 .8c-.66.08-1.02.22-1.3.5s-.42.64-.5 1.3a.4.4 0 0 1-.8 0c-.08-.66-.22-1.02-.5-1.3s-.64-.42-1.3-.5a.4.4 0 0 1 0-.8c.66-.08 1.02-.22 1.3-.5.28-.27.42-.64.5-1.3a.4.4 0 0 1 .8 0z"
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
            d="M2.25 9.5a4 4 0 0 1 1.08-2.67A4 4 0 0 1 6 5.75h12c1 .03 2.03.45 2.67 1.08a4 4 0 0 1 1.08 2.67v5a4 4 0 0 1-1.08 2.67A4 4 0 0 1 18 18.25h-3.2c-.9-.06-1.85-.7-2.28-1.44l-.5-1.1c-.04-.13-.06-.13-.15-.19s-.07-.05-.17-.05-.09 0-.17.05-.1.06-.15.19l-.5 1.12a3 3 0 0 1-2.28 1.42H6a4 4 0 0 1-2.67-1.08 4 4 0 0 1-1.08-2.67zM12 7.95a.4.4 0 0 0-.4.35c-.08.66-.22 1.02-.5 1.3s-.64.42-1.3.5a.4.4 0 0 0 0 .8c.66.08 1.02.22 1.3.5s.42.64.5 1.3a.4.4 0 0 0 .8 0c.08-.66.22-1.02.5-1.3s.64-.42 1.3-.5a.4.4 0 0 0 0-.8c-.66-.08-1.02-.22-1.3-.5-.28-.27-.42-.64-.5-1.3a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiVr;
