import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTextBoldCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconTextBoldCircle(
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
              d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M8 7.52C8 6.68 8.68 6 9.52 6H12a3 3 0 1 1 0 6H8z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M8 12h5a3 3 0 1 1 0 6H9.18C8.53 18 8 17.47 8 16.82z"
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
              d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.52 5.25a2.27 2.27 0 0 0-2.27 2.27v9.3c0 1.07.86 1.93 1.93 1.93H13a3.75 3.75 0 0 0 1.66-7.11A3.74 3.74 0 0 0 12 5.25zm2.48 6H8.75V7.52c0-.42.35-.77.77-.77H12a2.25 2.25 0 0 1 0 4.5m-3.25 5.57v-4.07H13a2.25 2.25 0 1 1 0 4.5H9.18a.43.43 0 0 1-.43-.43"
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
              d="M8.75 11.25H12a2.25 2.25 0 0 0 0-4.5H9.52a.77.77 0 0 0-.77.77z"
              fill="currentColor"
            />
            <path
              d="M8.75 12.75v4.07c0 .24.2.43.43.43H13a2.25 2.25 0 0 0 0-4.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0m5.25-4.48a2.27 2.27 0 0 1 2.27-2.27H12a3.75 3.75 0 0 1 2.66 6.39A3.75 3.75 0 0 1 13 18.75H9.18a1.93 1.93 0 0 1-1.93-1.93z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTextBoldCircle;
