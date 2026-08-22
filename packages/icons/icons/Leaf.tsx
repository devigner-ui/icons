import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLeaf = forwardRef<SVGSVGElement, IconProps>(function IconLeaf(
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
            d="m12 9 4.5-4.5m-4.5 10L18.5 8M12 19.5l7.5-7.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 22c4.42 0 8-3.65 8-8.14 0-4.47-2.55-9.67-6.54-11.53A3.5 3.5 0 0 0 12 2m0 20c-4.42 0-8-3.65-8-8.14 0-4.47 2.55-9.67 6.54-11.53Q11.24 2 12 2m0 20V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M12 22c-4.42 0-8-3.65-8-8.14 0-4.47 2.55-9.67 6.54-11.53Q11.24 2 12 2z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.3" : "1"}
            d="M13.46 2.33A3.5 3.5 0 0 0 12 2v7l4.43-4.43a10 10 0 0 0-2.97-2.24"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 9v5.5l6.61-6.61a13 13 0 0 0-2.18-3.32z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="m12 19.5 7.81-7.81a15 15 0 0 0-1.2-3.8L12 14.5z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.7" : "1"}
            d="M19.81 11.69 12 19.5V22c4.42 0 8-3.65 8-8.14q0-1.07-.19-2.17"
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
            d="M11.25 2.08q-.36.09-.71.25C6.55 4.19 4 9.39 4 13.86a8.1 8.1 0 0 0 7.25 8.1z"
            fill="currentColor"
          />
          <path
            d="M12.75 21.97A8.1 8.1 0 0 0 20 13.86q0-.6-.06-1.24l-7.19 7.2z"
            fill="currentColor"
          />
          <path
            d="M18.26 7.18q-.59-1.09-1.34-2.04l-4.17 4.17v3.38z"
            fill="currentColor"
          />
          <path
            d="M15.9 4.03a9 9 0 0 0-2.44-1.7q-.35-.17-.71-.25V7.2z"
            fill="currentColor"
          />
          <path
            d="m18.94 8.62-6.19 6.2v2.87l6.75-6.75.13-.13q-.25-1.11-.7-2.19"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLeaf;
