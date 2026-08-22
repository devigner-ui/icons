import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShop2 = forwardRef<SVGSVGElement, IconProps>(function IconShop2(
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
      {!fill ? (
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
            d="M22 22H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 22V11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4 22V11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M16.53 2H7.47c-1.2 0-1.8 0-2.29.3-.48.3-.75.84-1.29 1.91L2.5 7.76c-.32.82-.6 1.79-.06 2.48A2 2 0 0 0 6 9a2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 0 0 3.57 1.24c.55-.7.26-1.66-.06-2.48l-1.4-3.55c-.54-1.07-.81-1.61-1.3-1.91-.48-.3-1.08-.3-2.28-.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.5 21.5v-3c0-.93 0-1.4.2-1.75q.2-.35.55-.55c.35-.2.82-.2 1.75-.2s1.4 0 1.75.2q.35.2.55.55c.2.35.2.82.2 1.75v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M16.53 2H7.47c-1.2 0-1.8 0-2.29.3-.48.3-.75.84-1.29 1.91L2.5 7.76c-.32.82-.6 1.79-.06 2.48A2 2 0 0 0 6 9a2 2 0 1 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 3.57 1.24c.55-.7.26-1.66-.06-2.48l-1.4-3.55c-.54-1.07-.81-1.61-1.3-1.91-.48-.3-1.08-.3-2.28-.3"
            fill="currentColor"
          />
          <path
            d="M9.5 21.25V18.5c0-.93 0-1.4.2-1.75q.2-.35.55-.55c.35-.2.82-.2 1.75-.2s1.4 0 1.75.2q.35.2.55.55c.2.35.2.82.2 1.75v2.75z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 11a2 2 0 0 0 2-2 2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 1 0 4 0c0 1.1.9 2 2 2v10.25h-5.5V18.5c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55c-.35-.2-.82-.2-1.75-.2s-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55c-.2.35-.2.82-.2 1.75v2.75H4z"
            fill="currentColor"
          />
          <path
            d="M14.5 21.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z"
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
            d="M16.53 2H7.47c-1.2 0-1.8 0-2.29.3-.48.3-.75.84-1.29 1.91L2.5 7.76c-.32.82-.6 1.79-.06 2.48A2 2 0 0 0 6 9a2 2 0 1 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 3.57 1.24c.55-.7.26-1.66-.06-2.48l-1.4-3.55c-.54-1.07-.81-1.61-1.3-1.91-.48-.3-1.08-.3-2.28-.3"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 21.25h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h2V12.5q1.13-.02 2-.63a3.5 3.5 0 0 0 4 0 3.5 3.5 0 0 0 4 0 3.5 3.5 0 0 0 4 0q.87.62 2 .63zm-10.5 0h5V18.5c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55c-.35-.2-.82-.2-1.75-.2s-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55c-.2.35-.2.82-.2 1.75z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconShop2;
