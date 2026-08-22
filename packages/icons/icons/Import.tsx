import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconImport = forwardRef<SVGSVGElement, IconProps>(function IconImport(
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
            d="M4 12a8 8 0 1 0 16 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 4v10m0 0 3-3m-3 3-3-3"
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
            d="M4 12a8 8 0 1 0 16 0z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.53 10.47a.75.75 0 0 0-1.06 0l-1.72 1.72V4a.75.75 0 0 0-1.5 0v8.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3c.3.3.77.3 1.06 0l3-3c.3-.3.3-.77 0-1.06"
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
            d="M15.53 10.47a.75.75 0 0 0-1.06 0l-1.72 1.72V4a.75.75 0 0 0-1.5 0v8.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3c.3.3.77.3 1.06 0l3-3c.3-.3.3-.77 0-1.06"
            fill="currentColor"
          />
          <path
            d="M17.75 12c-.45 0-.84.27-1.16.6l-3 3c-.88.87-2.3.87-3.18 0l-3-3c-.32-.33-.71-.6-1.16-.6H4a8 8 0 1 0 16 0z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconImport;
