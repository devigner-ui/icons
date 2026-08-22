import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRecord = forwardRef<SVGSVGElement, IconProps>(function IconRecord(
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
            d="M12.67 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="m20.79 8.13-1.42.85-13.94 8.36a9 9 0 1 1 15.36-9.21"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.67 12a9 9 0 0 1-15.33 6.39l.09-.05 13.94-8.36.93-.55q.36 1.23.37 2.57"
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
            d="M20.3 7.24a1 1 0 0 1-.34 1.39l-.59.35-13.11 7.86a1 1 0 0 1-1.39-.36 9 9 0 0 1 6.49-13.39 9 9 0 0 1 8.94 4.15"
            fill="currentColor"
          />
          <path
            d="M21.56 13.43A9.1 9.1 0 0 1 12.81 21a9 9 0 0 1-5.12-1.51c-.62-.41-.6-1.33.04-1.71l12.41-7.29a1 1 0 0 1 1.51.81q.08 1.05-.09 2.13"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRecord;
