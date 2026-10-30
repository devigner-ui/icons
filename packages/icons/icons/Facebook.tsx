import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFacebook = forwardRef<SVGSVGElement, IconProps>(function IconFacebook(
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
            d="M14 9.3v2.95h2.63a.3.3 0 0 1 .29.36l-.38 1.9a.3.3 0 0 1-.29.24H14V22h-3v-7.25H9.3a.3.3 0 0 1-.3-.3v-1.9c0-.17.13-.3.3-.3H11V9a3 3 0 0 1 3-3h2.7c.17 0 .3.13.3.3v2.4a.3.3 0 0 1-.3.3h-2.4a.3.3 0 0 0-.3.3Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            stroke="currentColor"
          />
          <path
            d="M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
            d="M14 9.3v2.95h2.63a.3.3 0 0 1 .29.36l-.38 1.9a.3.3 0 0 1-.29.24H14V22h-3v-7.25H9.3a.3.3 0 0 1-.3-.3v-1.9c0-.17.13-.3.3-.3H11V9a3 3 0 0 1 3-3h2.7c.17 0 .3.13.3.3v2.4a.3.3 0 0 1-.3.3h-2.4a.3.3 0 0 0-.3.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7"
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
            d="M24 0H0v24h24z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
            fill="currentColor"
          />
          <path
            d="m13.92 9.28.05 2.95 2.63-.04a.3.3 0 0 1 .3.35l-.35 1.91a.3.3 0 0 1-.29.25l-2.25.04.12 7.25-3 .05-.12-7.25-1.7.03a.3.3 0 0 1-.3-.3l-.03-1.9c0-.17.13-.3.3-.3l1.7-.03-.05-3.25a3 3 0 0 1 2.95-3.05l2.7-.04c.17 0 .3.13.3.3l.04 2.4a.3.3 0 0 1-.3.3l-2.4.04a.3.3 0 0 0-.3.29"
            fill="currentColor"
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
            d="M22 16.19c0 3.64-2.17 5.81-5.81 5.81H15a1 1 0 0 1-1-1v-5.77c0-.27.22-.5.49-.5l1.76-.03a.3.3 0 0 0 .29-.25l.35-1.91a.3.3 0 0 0-.3-.35l-2.13.03a.5.5 0 0 1-.51-.49l-.04-2.45c0-.16.13-.3.3-.3l2.4-.04a.3.3 0 0 0 .3-.3l-.04-2.4a.3.3 0 0 0-.3-.3l-2.7.04a3 3 0 0 0-2.95 3.05l.05 2.75a.5.5 0 0 1-.49.51l-1.2.02a.3.3 0 0 0-.3.3l.03 1.9c0 .17.13.3.3.3l1.2-.02c.28 0 .5.22.51.49l.09 5.7a1 1 0 0 1-1 1.02h-2.3C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFacebook;
