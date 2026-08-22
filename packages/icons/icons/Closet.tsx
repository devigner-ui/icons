import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloset = forwardRef<SVGSVGElement, IconProps>(function IconCloset(
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
            d="M19 22v-.5M5 22v-.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 21V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 8v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M2 10c0-3.77 0-5.66 1.17-6.83S6.23 2 10 2h4c3.77 0 5.66 0 6.83 1.17S22 6.23 22 10v3c0 3.77 0 5.66-1.17 6.83S17.77 21 14 21h-4c-3.77 0-5.66 0-6.83-1.17S2 16.77 2 13z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 8h10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M2 15h20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 18h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 18h2"
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
            d="M2.03 15.75c.06 2.02.3 3.23 1.14 4.08q.45.45 1.08.7V22a.75.75 0 0 0 1.5 0v-1.13C6.82 21 8.19 21 10 21h4c1.8 0 3.18 0 4.25-.13V22a.75.75 0 0 0 1.5 0v-1.47q.62-.25 1.08-.7c.8-.81 1.06-1.96 1.14-3.83v-.25L22 13v-3c0-3.77 0-5.66-1.17-6.83S17.77 2 14 2h-1.25v13.75zM6.25 18c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m8.75-.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm0-10c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M10 2h1.25v5.25H2.03c.06-2.02.3-3.23 1.14-4.08C4.34 2 6.23 2 10 2"
              fill="currentColor"
            />
            <path d="M2 8.75V13l.03 2.75h9.22v-7z" fill="currentColor" />
          </g>
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
            d="M11.25 2H10C6.23 2 4.34 2 3.17 3.17c-.84.85-1.08 2.06-1.14 4.08h9.22z"
            fill="currentColor"
          />
          <path d="M2 8.75v5.5h9.25v-5.5z" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.17 19.83c-.84-.84-1.08-2.06-1.14-4.08h9.22V21H10c-1.8 0-3.18 0-4.25-.13V22a.75.75 0 0 1-1.5 0v-1.47a3 3 0 0 1-1.08-.7M6.25 18c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.75 21H14c1.8 0 3.18 0 4.25-.13V22a.75.75 0 0 0 1.5 0v-1.47q.62-.25 1.08-.7c.84-.84 1.08-2.06 1.14-4.08h-9.22zM15 17.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 13v1.25h-9.25V2H14c3.77 0 5.66 0 6.83 1.17S22 6.23 22 10zm-7-5.75c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCloset;
