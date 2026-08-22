import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSetting = forwardRef<SVGSVGElement, IconProps>(function IconSetting(
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
            d="M3.67 9.11v5.77c0 2.12 0 2.12 2 3.47l5.5 3.18a3.3 3.3 0 0 0 3 0l5.5-3.18c2-1.35 2-1.35 2-3.46V9.11c0-2.11 0-2.11-2-3.46l-5.5-3.18a3.3 3.3 0 0 0-3 0l-5.5 3.18c-2 1.35-2 1.35-2 3.46"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
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
            d="m19.61 5.42-5.17-2.99a3.9 3.9 0 0 0-3.53 0L5.69 5.44C3.62 6.84 3.5 7.05 3.5 9.28v5.43c0 2.23.12 2.45 2.23 3.87l5.17 2.99c.5.29 1.14.43 1.77.43s1.27-.14 1.76-.43l5.22-3.01c2.07-1.4 2.19-1.61 2.19-3.84V9.28c0-2.23-.12-2.44-2.23-3.86"
            fill="currentColor"
          />
          <path
            d="M12.67 15.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5"
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
            d="m19.61 5.42-5.17-2.99a3.9 3.9 0 0 0-3.53 0L5.69 5.44C3.62 6.84 3.5 7.05 3.5 9.28v5.43c0 2.23.12 2.45 2.23 3.87l5.17 2.99c.5.29 1.14.43 1.77.43s1.27-.14 1.76-.43l5.22-3.01c2.07-1.4 2.19-1.61 2.19-3.84V9.28c0-2.23-.12-2.44-2.23-3.86m-6.94 9.83a3.26 3.26 0 0 1 0-6.5 3.26 3.26 0 0 1 0 6.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSetting;
