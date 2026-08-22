import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSpeakerMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconSpeakerMinimalistic(
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
              d="M16 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M10 6h4"
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
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4 10c0-3.77 0-5.66 1.17-6.83S8.23 2 12 2s5.66 0 6.83 1.17S20 6.23 20 10v4c0 3.77 0 5.66-1.17 6.83S15.77 22 12 22s-5.66 0-6.83-1.17S4 17.77 4 14z"
              fill="currentColor"
            />
            <path
              d="M10 5.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 9.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5"
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
              d="M12 10.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 10c0-3.77 0-5.66 1.17-6.83S8.23 2 12 2s5.66 0 6.83 1.17S20 6.23 20 10v4c0 3.77 0 5.66-1.17 6.83S15.77 22 12 22s-5.66 0-6.83-1.17S4 17.77 4 14zm3.25 4a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M10 5.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSpeakerMinimalistic;
