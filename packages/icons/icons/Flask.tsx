import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFlask = forwardRef<SVGSVGElement, IconProps>(function IconFlask(
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
      {variant === "Broken" ? (
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
            d="M12.09 2h3.46c.66 0 1.25.27 1.68.7.56.56.84 1.38.63 2.25a2.46 2.46 0 0 1-2.42 1.79h-.16l4.22 9.66c1.17 2.67.67 4.92-2.18 5.47m-3.5.13H8.16c-4.18 0-5.02-2.53-3.66-5.61l4.25-9.65h-.3a2.4 2.4 0 0 1-2.38-2.36A2.4 2.4 0 0 1 8.44 2h.15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.94 13.12S9 13 12 14s5.83-.89 5.83-.89"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : !fill ? (
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
            d="M8.16 22c-4.18 0-5.02-2.53-3.66-5.61l4.25-9.65h-.3A2.37 2.37 0 1 1 8.44 2h7.11c.66 0 1.25.27 1.68.7.56.56.84 1.38.63 2.25a2.46 2.46 0 0 1-2.42 1.79h-.16l4.22 9.66c1.35 3.08.47 5.6-3.67 5.6z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.94 13.12S9 13 12 14s5.83-.89 5.83-.89"
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
            d="M15.83 22H8.17c-4.19 0-5.02-2.53-3.66-5.61l1.44-3.27s3.06-.12 6.06.88 5.83-.89 5.83-.89l.19-.12 1.49 3.41c1.34 3.08.46 5.6-3.67 5.6"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18.02 12.99-.19.12S15 15 12 14s-6.06-.88-6.06-.88l2.8-6.38h-.3a2.37 2.37 0 0 1-2.37-2.37C6.07 3.07 7.13 2 8.44 2h7.11c.66 0 1.25.27 1.68.7.56.56.85 1.38.63 2.25a2.45 2.45 0 0 1-2.42 1.79h-.16z"
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
            d="M15.83 22H8.17c-4.19 0-5.02-2.53-3.66-5.61l1.44-3.27s3.06-.12 6.06.88 5.83-.89 5.83-.89l.19-.12 1.49 3.41c1.34 3.08.46 5.6-3.67 5.6"
            fill="currentColor"
          />
          <path
            d="M15.44 6.74h-.16l2.13 4.86-.41.26c-.02.01-2.28 1.46-4.53.72a20 20 0 0 0-5.87-.95l2.14-4.89h-.3a2.37 2.37 0 0 1-2.37-2.37C6.07 3.07 7.13 2 8.44 2h7.11c.66 0 1.25.27 1.68.7.56.56.85 1.38.63 2.25a2.45 2.45 0 0 1-2.42 1.79"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFlask;
