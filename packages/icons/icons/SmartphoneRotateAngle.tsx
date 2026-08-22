import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmartphoneRotateAngle = forwardRef<SVGSVGElement, IconProps>(
  function IconSmartphoneRotateAngle(
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
              opacity={duotone ? "0.4" : "1"}
              d="M15 5H9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M3.5 15.59a.75.75 0 0 0-.93-1.18zm8.5 5.1.5.56a.75.75 0 0 0 0-1.13zm-1.5-1.31.5-.57a.75.75 0 0 0-1.25.57zm0 2.62h-.75a.75.75 0 0 0 1.24.56zm-7.75-5.25c0-.3.18-.7.76-1.16l-.94-1.18c-.75.6-1.32 1.39-1.32 2.34zm9.74 3.37-1.5-1.3-.98 1.12 1.5 1.31zM11 22.56l1.5-1.3-.98-1.14-1.5 1.32zm-1.24-3.18v1.26h1.5v-1.26zm0 1.26V22h1.5v-1.36zm.8-.75c-2.35-.13-4.38-.6-5.8-1.24a5 5 0 0 1-1.56-1.02c-.33-.34-.44-.64-.44-.88h-1.5c0 .74.35 1.4.86 1.92q.78.79 2.03 1.34c1.63.74 3.85 1.24 6.32 1.38z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.96 15q1.02.8 1.04 1.75c0 1.83-3.19 3.38-7.5 3.81"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M5.5 17V8c0-2.83 0-4.24.88-5.12S8.68 2 11.5 2h1c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v9"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.63 14.53c.25.33.2.8-.12 1.06-.58.45-.76.85-.76 1.16 0 .27.13.6.55.98q.62.6 1.9 1.1a17 17 0 0 0 4.55 1v-.45a.75.75 0 0 1 1.24-.57l1.5 1.31a.75.75 0 0 1 0 1.13L11 22.56A.75.75 0 0 1 9.75 22v-.66c-1.94-.17-3.7-.56-5.1-1.1a8 8 0 0 1-2.38-1.4 3 3 0 0 1-1.02-2.09c0-.95.57-1.74 1.32-2.34.33-.25.8-.2 1.06.12m16.74 0a.75.75 0 0 1 1.06-.12c.75.6 1.32 1.39 1.32 2.34 0 1.38-1.17 2.41-2.55 3.1a17 17 0 0 1-5.62 1.46.75.75 0 0 1-.16-1.5c2.1-.2 3.88-.68 5.11-1.3 1.3-.65 1.72-1.3 1.72-1.76 0-.3-.18-.7-.76-1.16a.75.75 0 0 1-.12-1.06"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19 9v10s-4.16 2-7 2-7-2-7-2V9c0-2.8 0-4.21.67-5.22a4 4 0 0 1 1.1-1.1C7.8 2 9.2 2 12 2s4.21 0 5.22.67a4 4 0 0 1 1.1 1.1C19 4.8 19 6.2 19 9"
              fill="currentColor"
            />
            <path
              d="M9 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 9v5.93c0 .66-.35 1.27-.93 1.6a12.2 12.2 0 0 1-12.14 0 1.8 1.8 0 0 1-.93-1.6V9c0-2.8 0-4.21.67-5.22a4 4 0 0 1 1.1-1.1C7.8 2 9.2 2 12 2s4.21 0 5.22.67a4 4 0 0 1 1.1 1.1C19 4.8 19 6.2 19 9M9 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.63 14.53c.25.33.2.8-.12 1.06-.58.45-.76.85-.76 1.16 0 .27.13.6.55.98q.62.6 1.9 1.1c1.21.48 2.78.84 4.55 1v-.45a.75.75 0 0 1 1.24-.57l1.5 1.31a.75.75 0 0 1 0 1.13L11 22.56A.75.75 0 0 1 9.75 22v-.66c-1.94-.17-3.7-.56-5.1-1.1a8 8 0 0 1-2.38-1.4 3 3 0 0 1-1.02-2.09c0-.95.57-1.74 1.32-2.34.33-.26.8-.2 1.06.12m16.74 0a.75.75 0 0 1 1.06-.12c.75.6 1.32 1.39 1.32 2.34 0 1.38-1.17 2.41-2.55 3.1a17 17 0 0 1-5.62 1.46.75.75 0 0 1-.16-1.5c2.1-.2 3.88-.68 5.11-1.3 1.3-.65 1.72-1.3 1.72-1.76 0-.3-.18-.7-.76-1.16a.75.75 0 0 1-.12-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmartphoneRotateAngle;
