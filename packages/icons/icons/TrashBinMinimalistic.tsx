import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTrashBinMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconTrashBinMinimalistic(
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
              d="M9.17 4a3 3 0 0 1 5.66 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
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
              d="m9.5 11 .5 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m14.5 11-.5 5"
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
              d="M3 6.52c0-.4.33-.71.73-.71h4.79c0-.84.1-2 .93-2.8a3.7 3.7 0 0 1 5.1 0c.83.8.93 1.96.93 2.8h4.79c.4 0 .73.32.73.71 0 .4-.33.72-.73.72H3.73A.7.7 0 0 1 3 6.52"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.6 22h.8c2.79 0 4.18 0 5.08-.89.9-.88 1-2.33 1.19-5.24l.26-4.19c.1-1.58.15-2.36-.3-2.86s-1.22-.5-2.75-.5H8.12c-1.53 0-2.3 0-2.75.5s-.4 1.28-.3 2.86l.26 4.19c.19 2.9.28 4.36 1.19 5.24.9.89 2.3.89 5.08.89"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.43 11.48c.4-.04.78.27.82.7l.5 5.27a.8.8 0 0 1-.68.87.76.76 0 0 1-.82-.71l-.5-5.26a.8.8 0 0 1 .68-.87"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.57 11.48c.42.04.72.43.68.87l-.5 5.26a.76.76 0 0 1-.82.7.8.8 0 0 1-.68-.86l.5-5.26a.75.75 0 0 1 .82-.7"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.6 22h.8c2.79 0 4.18 0 5.08-.89.9-.88 1-2.34 1.19-5.24l.26-4.19c.1-1.58.15-2.36-.3-2.86s-1.22-.5-2.75-.5H8.12c-1.53 0-2.3 0-2.75.5s-.4 1.28-.3 2.86l.26 4.19c.19 2.9.28 4.36 1.19 5.24.9.89 2.3.89 5.08.89m-1.35-9.81a.76.76 0 0 0-.82-.7.8.8 0 0 0-.68.86l.5 5.26c.04.43.41.75.82.7a.8.8 0 0 0 .68-.86zm4.32-.7c.42.03.72.42.68.86l-.5 5.26a.76.76 0 0 1-.82.7.8.8 0 0 1-.68-.86l.5-5.26a.75.75 0 0 1 .82-.7"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTrashBinMinimalistic;
