import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCpu = forwardRef<SVGSVGElement, IconProps>(function IconAiCpu(
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

  /* In TwoTone the pins are the dimmed shapes and are clipped at the frame's
     outer edge, so their round caps do not sit over the frame. One tone
     skips the clip: there the caps hide inside the frame, and a clip would
     leave a hairline seam. */
  const clip = useId();
  const h = Number(strokeWidth) / 2;

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
            d="M9.83 18.5H8.5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-3.27"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 2.5v3m0 13v3M2.5 9h3m13 0h3M12 2.5v3m0 13v3M2.5 12h3m13 0h3M15 2.5v3m0 13v3M2.5 15h3m13 0h3m-11-6h3c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3c0-.83.67-1.5 1.5-1.5Z"
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
          <defs>
            <clipPath id={clip}>
              <rect x="0" y="0" width={5.5 - h} height="24" />
              <rect x={18.5 + h} y="0" width={5.5 - h} height="24" />
              <rect x="0" y="0" width="24" height={5.5 - h} />
              <rect x="0" y={18.5 + h} width="24" height={5.5 - h} />
            </clipPath>
          </defs>
          <path
            d="M8.5 5.5h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            clipPath={duotone ? `url(#${clip})` : undefined}
            d="M9 2.5v3m0 13v3M2.5 9h3m13 0h3M12 2.5v3m0 13v3M2.5 12h3m13 0h3M15 2.5v3m0 13v3M2.5 15h3m13 0h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 9h3c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3c0-.83.67-1.5 1.5-1.5Z"
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
            d="M18.15 5.85c.59.58 1 1.5 1.08 2.4h2.27a.75.75 0 0 1 0 1.5h-2.25v1.5h2.25a.75.75 0 0 1 0 1.5h-2.25v1.5h2.25a.75.75 0 0 1 0 1.5h-2.27a4 4 0 0 1-1.08 2.4c-.58.59-1.5 1-2.4 1.08v2.27a.75.75 0 0 1-1.5 0v-2.25h-1.5v2.25a.75.75 0 0 1-1.5 0v-2.25h-1.5v2.25a.75.75 0 0 1-1.5 0v-2.27c-.9-.09-1.82-.5-2.4-1.08s-1-1.5-1.08-2.4H2.5a.75.75 0 0 1 0-1.5h2.25v-1.5H2.5a.75.75 0 0 1 0-1.5h2.25v-1.5H2.5a.75.75 0 0 1 0-1.5h2.27c.09-.9.5-1.82 1.08-2.4s1.5-1 2.4-1.08V2.5a.75.75 0 0 1 1.5 0v2.25h1.5V2.5a.75.75 0 0 1 1.5 0v2.25h1.5V2.5a.75.75 0 0 1 1.5 0v2.27c.9.09 1.82.5 2.4 1.08z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M10.5 8.25h3c.57.03 1.23.3 1.6.66.36.37.62 1.02.65 1.59v3c-.03.57-.3 1.23-.66 1.6-.37.36-1.02.62-1.59.65h-3a2.6 2.6 0 0 1-1.6-.66 2.6 2.6 0 0 1-.65-1.59v-3c.03-.57.3-1.23.66-1.6a2.6 2.6 0 0 1 1.59-.65z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="M18.15 5.85c.59.58 1 1.5 1.08 2.4h2.27a.75.75 0 0 1 0 1.5h-2.25v1.5h2.25a.75.75 0 0 1 0 1.5h-2.25v1.5h2.25a.75.75 0 0 1 0 1.5h-2.27a4 4 0 0 1-1.08 2.4c-.58.59-1.5 1-2.4 1.08v2.27a.75.75 0 0 1-1.5 0v-2.25h-1.5v2.25a.75.75 0 0 1-1.5 0v-2.25h-1.5v2.25a.75.75 0 0 1-1.5 0v-2.27c-.9-.09-1.82-.5-2.4-1.08s-1-1.5-1.08-2.4H2.5a.75.75 0 0 1 0-1.5h2.25v-1.5H2.5a.75.75 0 0 1 0-1.5h2.25v-1.5H2.5a.75.75 0 0 1 0-1.5h2.27c.09-.9.5-1.82 1.08-2.4s1.5-1 2.4-1.08V2.5a.75.75 0 0 1 1.5 0v2.25h1.5V2.5a.75.75 0 0 1 1.5 0v2.25h1.5V2.5a.75.75 0 0 1 1.5 0v2.27c.9.09 1.82.5 2.4 1.08zM8.91 8.9a2.6 2.6 0 0 0-.66 1.59v3c.03.57.3 1.23.66 1.6.37.36 1.02.62 1.59.65h3c.57-.03 1.23-.3 1.6-.66.36-.37.62-1.02.65-1.59v-3a2.6 2.6 0 0 0-.66-1.6 2.6 2.6 0 0 0-1.59-.65h-3c-.57.03-1.23.3-1.6.66z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiCpu;
