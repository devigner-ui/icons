import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAquarius = forwardRef<SVGSVGElement, IconProps>(function IconAquarius(
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
            d="M12.67 16a7 7 0 1 0-7-7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 16v6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.67 19h-6"
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
            d="M20.42 9a7.76 7.76 0 0 0-7.75-7.75A7.76 7.76 0 0 0 4.92 9c0 .41.34.75.75.75s.75-.34.75-.75a6.25 6.25 0 1 1 6.25 6.25.76.76 0 0 0-.75.75v6c0 .41.34.75.75.75s.75-.34.75-.75v-5.29c3.92-.38 7-3.69 7-7.71"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.67 19.75h-6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M20.42 9a7.76 7.76 0 0 0-7.75-7.75A7.76 7.76 0 0 0 4.92 9c0 .41.34.75.75.75s.75-.34.75-.75a6.25 6.25 0 1 1 6.25 6.25.76.76 0 0 0-.75.75v6c0 .41.34.75.75.75s.75-.34.75-.75v-5.29c3.92-.38 7-3.69 7-7.71"
            fill="currentColor"
          />
          <path
            d="M15.67 19.75h-6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAquarius;
