import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMedalRibbon = forwardRef<SVGSVGElement, IconProps>(
  function IconMedalRibbon(
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
            <circle
              cx="12"
              cy="9.00037"
              r="7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m7.35 15-.64 2.32c-.62 2.3-.94 3.44-.52 4.07q.23.34.57.51c.66.33 1.66-.2 3.68-1.24.67-.35 1-.53 1.36-.56q.2-.03.4 0c.35.03.69.2 1.36.56 2.02 1.05 3.02 1.57 3.68 1.24q.34-.19.57-.51c.42-.63.1-1.77-.52-4.07L16.65 15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="9.00037"
              r="7"
              fill="currentColor"
            />
            <path
              d="m7.55 14.4-.2.6-.64 2.32c-.62 2.3-.94 3.44-.52 4.07q.23.34.57.51c.66.33 1.66-.2 3.68-1.24.67-.35 1-.53 1.36-.56q.2-.03.4 0c.35.03.69.2 1.36.56 2.02 1.05 3.02 1.57 3.68 1.24q.34-.19.57-.51c.42-.63.1-1.77-.52-4.07L16.65 15l-.2-.6a7 7 0 0 1-8.9 0"
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
            <path d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0" fill="currentColor" />
            <path
              d="m7.1 15.94-.39 1.38c-.62 2.3-.94 3.44-.52 4.07q.23.34.57.51c.66.33 1.66-.2 3.68-1.24.67-.35 1-.53 1.36-.56q.2-.03.4 0c.35.03.69.2 1.36.56 2.02 1.05 3.02 1.57 3.68 1.24q.34-.19.57-.51c.42-.63.1-1.77-.52-4.07l-.38-1.38a8.5 8.5 0 0 1-9.82 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMedalRibbon;
