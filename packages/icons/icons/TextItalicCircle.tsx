import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTextItalicCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconTextItalicCircle(
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
              d="M8 17h5.33M10.67 7H16m-5.33 10 2.66-10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0"
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
              d="M10.67 6.25H16a.75.75 0 0 1 0 1.5h-2.1l-2.26 8.5h1.7a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h2.1l2.26-8.5h-1.7a.75.75 0 0 1 0-1.5"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m-1.33 4.25H16a.75.75 0 0 1 0 1.5h-2.1l-2.26 8.5h1.7a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h2.1l2.26-8.5h-1.7a.75.75 0 0 1 0-1.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTextItalicCircle;
