import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCrown2 = forwardRef<SVGSVGElement, IconProps>(function IconCrown2(
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
            d="M17.37 18.98h-9.4c-.42 0-.89-.33-1.03-.73L2.8 6.67c-.59-1.66.1-2.17 1.52-1.15l3.9 2.79c.65.45 1.39.22 1.67-.51l1.76-4.69c.56-1.5 1.49-1.5 2.05 0l1.76 4.69c.28.73 1.02.96 1.66.51l3.66-2.61c1.56-1.12 2.31-.55 1.67 1.26l-4.04 11.31c-.15.38-.62.71-1.04.71"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.17 22h11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.17 14h5"
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
            d="M17.44 18.98H7.9a1 1 0 0 1-.94-.66L2.8 6.67c-.33-.93.73-1.72 1.52-1.15l4 2.86a1 1 0 0 0 1.52-.46l1.89-5.04a1 1 0 0 1 1.87 0l1.89 5.04a1 1 0 0 0 1.52.46l4-2.86a1 1 0 0 1 1.52 1.15l-4.16 11.65a1 1 0 0 1-.93.66"
            fill="currentColor"
          />
          <path
            d="M17.67 22h-10a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M15.17 14.75h-5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M17.67 22h-10a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="m21.02 5.52-4 2.86a1 1 0 0 1-1.52-.46l-1.89-5.04a1 1 0 0 0-1.87 0l-1.9 5.03a1 1 0 0 1-1.51.46l-4-2.86c-.8-.56-1.86.23-1.53 1.16l4.16 11.65a1 1 0 0 0 .94.66h9.53a1 1 0 0 0 .94-.66l4.16-11.65a1 1 0 0 0-1.51-1.15m-5.85 9.23h-5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCrown2;
