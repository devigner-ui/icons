import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRoundGraph = forwardRef<SVGSVGElement, IconProps>(
  function IconRoundGraph(
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
              d="M12 2a10 10 0 1 1-7 2.86"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5 12a7 7 0 1 0 7-7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 16a4 4 0 0 0 0-8"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0m9.25-7c0-.41.34-.75.75-.75A7.75 7.75 0 1 1 4.25 12a.75.75 0 0 1 1.5 0A6.25 6.25 0 1 0 12 5.75a.75.75 0 0 1-.75-.75M12 7.25a.75.75 0 0 0 0 1.5 3.25 3.25 0 0 1 0 6.5.75.75 0 0 0 0 1.5 4.75 4.75 0 1 0 0-9.5"
              fill="currentColor"
            />
            <path
              d="M11.25 5c0-.41.34-.75.75-.75A7.75 7.75 0 1 1 4.25 12a.75.75 0 0 1 1.5 0A6.25 6.25 0 1 0 12 5.75a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M12 7.25a.75.75 0 0 0 0 1.5 3.25 3.25 0 0 1 0 6.5.75.75 0 0 0 0 1.5 4.75 4.75 0 1 0 0-9.5"
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
              d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0m9.25-7c0-.41.34-.75.75-.75A7.75 7.75 0 1 1 4.25 12a.75.75 0 0 1 1.5 0A6.25 6.25 0 1 0 12 5.75a.75.75 0 0 1-.75-.75M12 7.25a.75.75 0 0 0 0 1.5 3.25 3.25 0 0 1 0 6.5.75.75 0 0 0 0 1.5 4.75 4.75 0 1 0 0-9.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRoundGraph;
