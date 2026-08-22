import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRoute = forwardRef<SVGSVGElement, IconProps>(function IconRoute(
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
            d="M6.14 6.14C8.9 3.38 10.28 2 12 2s3.1 1.38 5.86 4.14S22 10.28 22 12s-1.38 3.1-4.14 5.86S13.72 22 12 22s-3.1-1.38-5.86-4.14S2 13.72 2 12s1.38-3.1 4.14-5.86"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M8.25 14a.75.75 0 1 0 1.5 0zM15 12l.53.53c.3-.3.3-.77 0-1.06zm-1.47-2.53a.75.75 0 1 0-1.06 1.06zm-1.06 4a.75.75 0 0 0 1.06 1.06zM11 12.75h4v-1.5h-4zm4.53-1.28-2-2-1.06 1.06 2 2zm-1.06 0-2 2 1.06 1.06 2-2zM9.75 14a9 9 0 0 1 .07-1.17l-1.06-1.07c-.3.31-.42.69-.47 1.04q-.05.52-.04 1.2zM11 11.25q-.68-.01-1.2.04c-.35.05-.73.16-1.04.47l1.06 1.06h.02l.16-.04c.21-.03.5-.03 1-.03z"
            fill="currentColor"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2c-1.72 0-3.1 1.38-5.86 4.14S2 10.28 2 12s1.38 3.1 4.14 5.86S10.28 22 12 22s3.1-1.38 5.86-4.14S22 13.72 22 12s-1.38-3.1-4.14-5.86S13.72 2 12 2"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.79 8.49a.75.75 0 0 1 1.06-.04l2.66 2.5a.75.75 0 0 1 0 1.1l-2.66 2.5a.75.75 0 1 1-1.03-1.1l1.28-1.2h-3.43c-.34 0-.85.1-1.25.37-.36.25-.67.65-.67 1.38a.75.75 0 1 1-1.5 0 3 3 0 0 1 1.33-2.62c.7-.48 1.53-.63 2.09-.63h3.43l-1.28-1.2a.75.75 0 0 1-.03-1.06"
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
            d="M6.14 6.14C8.9 3.38 10.28 2 12 2s3.1 1.38 5.86 4.14S22 10.28 22 12s-1.38 3.1-4.14 5.86S13.72 22 12 22s-3.1-1.38-5.86-4.14S2 13.72 2 12s1.38-3.1 4.14-5.86m7.7 2.31a.75.75 0 1 0-1.02 1.1l1.28 1.2h-3.43c-.56 0-1.38.15-2.09.63A3 3 0 0 0 7.25 14a.75.75 0 1 0 1.5 0c0-.73.3-1.13.67-1.38.4-.27.91-.37 1.25-.37h3.43l-1.28 1.2a.75.75 0 1 0 1.03 1.1l2.66-2.5a.75.75 0 0 0 0-1.1z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRoute;
