import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTrashBinMinimalistic2 = forwardRef<SVGSVGElement, IconProps>(
  function IconTrashBinMinimalistic2(
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
              d="M20.5 6h-17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m18.83 8.5-.46 6.9c-.17 2.65-.26 3.98-1.13 4.8-.86.8-2.2.8-4.85.8h-.78c-2.66 0-3.99 0-4.85-.8-.87-.82-.96-2.15-1.13-4.8l-.46-6.9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.17 4a3 3 0 0 1 5.66 0"
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
              d="M11.6 22h.8c2.7 0 4.05 0 4.93-.86.89-.87.98-2.28 1.16-5.11l.25-4.08c.1-1.54.15-2.31-.29-2.8s-1.19-.48-2.68-.48H8.23c-1.5 0-2.24 0-2.68.48-.44.49-.4 1.26-.3 2.8l.26 4.08c.18 2.83.27 4.24 1.16 5.1.88.87 2.23.87 4.94.87"
              fill="currentColor"
            />
            <path
              d="M3 6.52c0-.4.33-.71.73-.71h4.79c0-.84.1-2 .93-2.8a3.7 3.7 0 0 1 5.1 0c.83.8.93 1.96.93 2.8h4.79c.4 0 .73.32.73.71 0 .4-.33.72-.73.72H3.73A.7.7 0 0 1 3 6.52"
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
              d="M3 6.52c0-.4.33-.71.73-.71h4.79c0-.84.1-2 .93-2.8a3.7 3.7 0 0 1 5.1 0c.83.8.93 1.96.93 2.8h4.79c.4 0 .73.32.73.71 0 .4-.33.72-.73.72H3.73A.7.7 0 0 1 3 6.52"
              fill="currentColor"
            />
            <path
              d="M11.6 22h.8c2.7 0 4.05 0 4.93-.86.89-.87.98-2.28 1.16-5.11l.25-4.08c.1-1.54.15-2.31-.29-2.8s-1.19-.48-2.68-.48H8.23c-1.5 0-2.24 0-2.68.48-.44.49-.4 1.26-.3 2.8l.26 4.08c.18 2.83.27 4.24 1.16 5.1.88.87 2.23.87 4.94.87"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTrashBinMinimalistic2;
