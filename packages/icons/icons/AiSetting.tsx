import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSetting = forwardRef<SVGSVGElement, IconProps>(function IconAiSetting(
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
            d="m8.88 18.63-.7-.29-1.7 1.39-2.2-2.2 1.38-1.71-.84-2.04-2.2-.22v-3.12l2.2-.22.84-2.04-1.39-1.7 2.2-2.2 1.71 1.38 2.04-.84.22-2.2h3.12l.22 2.2 2.04.84 1.7-1.39 2.2 2.2-1.38 1.71.84 2.04 2.2.22v3.12l-2.2.22-.84 2.04 1.39 1.7-2.2 2.2-1.71-1.38-2.04.84-.22 2.2h-3.12l-.13-1.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.32 14.2v-2.64a1.76 1.76 0 0 1 3.52 0v2.64m-3.52-1.85h3.52m1.85-2.55v4.4"
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
            d="m10.22 4.82.22-2.2h3.12l.22 2.2 2.04.84 1.7-1.39 2.2 2.2-1.38 1.71.84 2.04 2.2.22v3.12l-2.2.22-.84 2.04 1.39 1.7-2.2 2.2-1.71-1.38-2.04.84-.22 2.2h-3.12l-.22-2.2-2.04-.84-1.7 1.39-2.2-2.2 1.38-1.71-.84-2.04-2.2-.22v-3.12l2.2-.22.84-2.04-1.39-1.7 2.2-2.2 1.71 1.38Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.32 14.2v-2.64a1.76 1.76 0 0 1 3.52 0v2.64m-3.52-1.85h3.52m1.85-2.55v4.4"
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
            d="M9.7 2.56a.75.75 0 0 1 .75-.68h3.1a.7.7 0 0 1 .51.2 1 1 0 0 1 .25.48l.17 1.74 1.21.5 1.35-1.1a.8.8 0 0 1 .84-.09l.18.14 2.2 2.19a.75.75 0 0 1 .04 1.02L19.2 8.3l.5 1.2 1.74.18a.75.75 0 0 1 .68.76v3.1a.7.7 0 0 1-.2.51 1 1 0 0 1-.48.25l-1.74.17-.5 1.2 1.1 1.36a.8.8 0 0 1 .09.84l-.14.18-2.2 2.2a.75.75 0 0 1-1 .04l-1.36-1.1-1.2.5-.18 1.74a.75.75 0 0 1-.76.68h-3.1a.7.7 0 0 1-.51-.2 1 1 0 0 1-.25-.48l-.17-1.74-1.21-.5-1.35 1.1a.8.8 0 0 1-.84.09l-.18-.14-2.2-2.2a.75.75 0 0 1-.05-1l1.1-1.36-.5-1.2-1.73-.18a.75.75 0 0 1-.68-.76v-3.1a.7.7 0 0 1 .2-.51 1 1 0 0 1 .48-.25L4.3 9.5l.5-1.2-1.1-1.35a.8.8 0 0 1-.09-.84l.14-.18 2.2-2.2a.75.75 0 0 1 1-.05l1.36 1.1 1.2-.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.57 14.2v-2.02c0-.66 0-1.29.34-1.88a2.53 2.53 0 0 1 4.42.15c.28.55.26 1.13.26 1.73v2.02a.75.75 0 0 1-1.5 0v-1.1h-2.02v1.1a.75.75 0 0 1-1.5 0zm3.49-2.9c-.23-.88-1.48-1-1.89-.19q-.1.23-.1.5h2.03q0-.15-.04-.3zm2.63-2.25c.41 0 .75.34.75.75v4.4a.75.75 0 0 1-1.5 0V9.8c0-.41.33-.75.75-.75z"
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
            d="M9.7 2.56a.75.75 0 0 1 .75-.68h3.1a.7.7 0 0 1 .51.2 1 1 0 0 1 .25.48l.17 1.74 1.21.5 1.35-1.1a.8.8 0 0 1 .84-.09l.18.14 2.2 2.19a.75.75 0 0 1 .04 1.02L19.2 8.3l.5 1.2 1.74.18a.75.75 0 0 1 .68.76v3.1a.7.7 0 0 1-.2.51 1 1 0 0 1-.48.25l-1.74.17-.5 1.2 1.1 1.36a.8.8 0 0 1 .09.84l-.14.18-2.2 2.2a.75.75 0 0 1-1 .04l-1.36-1.1-1.2.5-.18 1.74a.75.75 0 0 1-.76.68h-3.1a.7.7 0 0 1-.51-.2 1 1 0 0 1-.25-.48l-.17-1.74-1.21-.5-1.35 1.1a.8.8 0 0 1-.84.09l-.18-.14-2.2-2.2a.75.75 0 0 1-.05-1l1.1-1.36-.5-1.2-1.73-.18a.75.75 0 0 1-.68-.76v-3.1a.7.7 0 0 1 .2-.51 1 1 0 0 1 .48-.25L4.3 9.5l.5-1.2-1.1-1.35a.8.8 0 0 1-.09-.84l.14-.18 2.2-2.2a.75.75 0 0 1 1-.05l1.36 1.1 1.2-.5zm-.38 12.39c.41 0 .75-.34.75-.75v-1.1h2.02v1.1a.75.75 0 0 0 1.5 0v-2.02c0-.6.02-1.17-.26-1.73a2.53 2.53 0 0 0-4.42-.15c-.34.6-.34 1.22-.34 1.88v2.02c0 .41.34.75.75.75zm2.78-3.35h-2.04q.01-.25.11-.49c.4-.82 1.66-.7 1.89.2zm1.84-1.8v4.4a.75.75 0 0 0 1.5 0V9.8a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiSetting;
