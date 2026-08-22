import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCrown3 = forwardRef<SVGSVGElement, IconProps>(function IconCrown3(
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
            d="M2.67 15.29V5.71c0-1.33.77-1.65 1.71-.71l2.59 2.59a1 1 0 0 0 1.41 0L11.96 4a1 1 0 0 1 1.41 0l3.59 3.59a1 1 0 0 0 1.41 0L20.96 5c.94-.94 1.71-.62 1.71.71v9.59c0 3-2 5-5 5h-10a5 5 0 0 1-5-5.01"
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
            d="M22.67 5.71v9.58a5 5 0 0 1-5 5h-10q-.69 0-1.33-.18a.85.85 0 0 1-.36-1.42L16.61 8.06c.22-.22.55-.27.86-.21.32.06.67-.03.92-.27L20.96 5c.94-.94 1.71-.63 1.71.71"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.31 7.36 4.84 17.83a1 1 0 0 1-1.6-.24 5 5 0 0 1-.57-2.3V5.71c0-1.34.77-1.65 1.71-.71l2.58 2.59c.39.38 1.03.38 1.42 0L11.96 4a1 1 0 0 1 1.42 0l1.94 1.94c.38.39.38 1.03-.01 1.42"
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
            d="M22.67 5.71v9.58a5 5 0 0 1-5 5h-10q-.69 0-1.33-.18a.85.85 0 0 1-.36-1.42L16.61 8.06c.22-.22.55-.27.86-.21.32.06.67-.03.92-.27L20.96 5c.94-.94 1.71-.63 1.71.71"
            fill="currentColor"
          />
          <path
            d="M15.31 7.36 4.84 17.83a1 1 0 0 1-1.6-.24 5 5 0 0 1-.57-2.3V5.71c0-1.34.77-1.65 1.71-.71l2.58 2.59c.39.38 1.03.38 1.42 0L11.96 4a1 1 0 0 1 1.42 0l1.94 1.94c.38.39.38 1.03-.01 1.42"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCrown3;
