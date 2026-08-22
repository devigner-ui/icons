import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBones = forwardRef<SVGSVGElement, IconProps>(function IconBones(
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
            d="M9.48 2.05v2.01c0 .56-.48 1-.96 1.27A3.4 3.4 0 0 0 6.96 8.1a2.52 2.52 0 0 0 5.04 0 2.52 2.52 0 0 0 5.04 0c0-1.05-.65-2.24-1.56-2.76-.48-.27-.96-.71-.96-1.27V2.05"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.52 22v-2.01c0-.56-.48-1-.96-1.28A3.4 3.4 0 0 1 7 15.95a2.52 2.52 0 1 1 5.04 0 2.52 2.52 0 0 1 5.04 0c0 1.06-.65 2.24-1.56 2.76-.49.28-.96.72-.96 1.28V22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
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
            opacity={duotone ? "0.4" : "1"}
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
            fill="currentColor"
          />
          <path
            d="M9.48 10.61c1.4 0 2.52-1.13 2.52-2.52a2.52 2.52 0 0 0 5.04 0c0-1.05-.65-2.24-1.56-2.76-.48-.27-.96-.71-.96-1.27V2.01H9.48v2.05c0 .56-.48 1-.96 1.27A3.4 3.4 0 0 0 6.96 8.1c0 1.4 1.13 2.52 2.52 2.52"
            fill="currentColor"
          />
          <path
            d="M14.56 21.99v-2c0-.56.47-1 .96-1.28a3.4 3.4 0 0 0 1.56-2.76 2.52 2.52 0 0 0-5.04 0 2.52 2.52 0 0 0-5.04 0c0 1.06.64 2.24 1.56 2.76.48.28.96.72.96 1.28v2z"
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
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.64 2.3 6.4 2.06 9.48 2.01v2.05c0 .56-.48 1-.96 1.27A3.4 3.4 0 0 0 6.96 8.1a2.52 2.52 0 0 0 5.04 0 2.52 2.52 0 0 0 5.04 0c0-1.05-.65-2.24-1.56-2.76-.48-.27-.96-.71-.96-1.27V2.01c3.09.05 4.84.28 6.02 1.45C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54c-1.18 1.17-2.92 1.4-5.98 1.45v-2c0-.56.47-1 .96-1.28a3.4 3.4 0 0 0 1.56-2.76 2.52 2.52 0 0 0-5.04 0 2.52 2.52 0 0 0-5.04 0c0 1.06.64 2.24 1.56 2.76.48.28.96.72.96 1.27V22c-3.11-.04-4.87-.27-6.06-1.45C2 19.07 2 16.7 2 12"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBones;
