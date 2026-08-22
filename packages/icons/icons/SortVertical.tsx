import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSortVertical = forwardRef<SVGSVGElement, IconProps>(
  function IconSortVertical(
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
              d="M16 18V6m0 0 4 4.13M16 6l-4 4.13"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 6v12m0 0 4-4.12M8 18l-4-4.12"
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
              d="M20 10.88a.75.75 0 0 0 .54-1.28l-4-4.12a.75.75 0 0 0-1.08 0l-4 4.12a.75.75 0 0 0 .54 1.28h3.25V18a.75.75 0 0 0 1.5 0v-7.12z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 13.13a.75.75 0 0 1 .54 1.27l-4 4.12a.75.75 0 0 1-1.08 0l-4-4.12A.75.75 0 0 1 4 13.12h3.25V6a.75.75 0 1 1 1.5 0v7.13z"
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
              d="M12 13.13a.75.75 0 0 1 .54 1.27l-4 4.12a.75.75 0 0 1-1.08 0l-4-4.12A.75.75 0 0 1 4 13.12h3.25V6a.75.75 0 1 1 1.5 0v7.13z"
              fill="currentColor"
            />
            <path
              d="M20 10.88a.75.75 0 0 0 .54-1.28l-4-4.12a.75.75 0 0 0-1.08 0l-4 4.12a.75.75 0 0 0 .54 1.28h3.25V18a.75.75 0 0 0 1.5 0v-7.12z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSortVertical;
