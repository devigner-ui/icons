import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUser2 = forwardRef<SVGSVGElement, IconProps>(function IconUser2(
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
            d="M12.67 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.26 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"
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
            d="M12.67 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
            fill="currentColor"
          />
          <path
            d="M12.67 14.5c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18a.5.5 0 0 0 .5-.5c0-4.14-4.08-7.5-9.09-7.5"
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
            d="M12.67 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
            fill="currentColor"
          />
          <path
            d="M12.67 14.5c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18a.5.5 0 0 0 .5-.5c0-4.14-4.08-7.5-9.09-7.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconUser2;
