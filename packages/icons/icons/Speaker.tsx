import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSpeaker = forwardRef<SVGSVGElement, IconProps>(function IconSpeaker(
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
            d="M4 10c0-3.77 0-5.66 1.17-6.83S8.23 2 12 2s5.66 0 6.83 1.17S20 6.23 20 10v4c0 3.77 0 5.66-1.17 6.83S15.77 22 12 22s-5.66 0-6.83-1.17S4 17.77 4 14z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M14 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M15 15.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
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
            d="M4 10c0-3.77 0-5.66 1.17-6.83S8.23 2 12 2s5.66 0 6.83 1.17S20 6.23 20 10v4c0 3.77 0 5.66-1.17 6.83S15.77 22 12 22s-5.66 0-6.83-1.17S4 17.77 4 14z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.25 15.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
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
            d="M12 6.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
            fill="currentColor"
          />
          <path
            d="M9.75 15.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 10c0-3.77 0-5.66 1.17-6.83S8.23 2 12 2s5.66 0 6.83 1.17S20 6.23 20 10v4c0 3.77 0 5.66-1.17 6.83S15.77 22 12 22s-5.66 0-6.83-1.17S4 17.77 4 14zm5.25-2.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M12 11.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSpeaker;
