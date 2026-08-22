import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconKey2 = forwardRef<SVGSVGElement, IconProps>(function IconKey2(
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
            d="M20.46 14.93a7.6 7.6 0 0 1-7.6 1.87l-4.71 4.7c-.34.35-1.01.56-1.49.49l-2.18-.3a1.9 1.9 0 0 1-1.5-1.5l-.3-2.18c-.07-.48.16-1.15.49-1.49l4.7-4.7a7.57 7.57 0 1 1 12.59 3.11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m7.56 17.49 2.3 2.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.17 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
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
            d="M20.46 4.22a7.57 7.57 0 0 0-12.59 7.6l-4.7 4.7a2 2 0 0 0-.49 1.49l.3 2.18c.11.72.78 1.4 1.5 1.5l2.18.3c.48.07 1.15-.15 1.49-.5l.82-.82a.5.5 0 0 0 0-.71l-1.94-1.94a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.95 1.95a.5.5 0 0 0 .7 0l2.12-2.11a7.57 7.57 0 0 0 7.6-12.58M15.17 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
            fill="currentColor"
          />
          <path
            d="M15.17 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
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
            d="M20.46 4.22a7.57 7.57 0 0 0-12.59 7.6l-4.7 4.7a2 2 0 0 0-.49 1.49l.3 2.18c.11.72.78 1.4 1.5 1.5l2.18.3c.48.07 1.15-.15 1.49-.5l.82-.82a.5.5 0 0 0 0-.71l-1.94-1.94a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.95 1.95a.5.5 0 0 0 .7 0l2.12-2.11a7.57 7.57 0 0 0 7.6-12.58M15.17 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconKey2;
