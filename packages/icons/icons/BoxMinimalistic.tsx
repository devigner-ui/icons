import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBoxMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconBoxMinimalistic(
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
              d="m15.58 3.38 2 1.05c2.15 1.13 3.23 1.7 3.82 2.71.6 1.01.6 2.28.6 4.8v.12c0 2.52 0 3.79-.6 4.8s-1.67 1.58-3.82 2.7l-2 1.06C13.82 21.54 12.94 22 12 22s-1.82-.46-3.58-1.38l-2-1.05c-2.15-1.13-3.23-1.7-3.82-2.71-.6-1.01-.6-2.28-.6-4.8v-.12c0-2.52 0-3.79.6-4.8s1.67-1.58 3.82-2.7l2-1.06C10.18 2.46 11.06 2 12 2s1.82.46 3.58 1.38"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21 7.5 12 12m0 0L3 7.5m9 4.5v9.5"
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
              d="M8.42 20.62C10.18 21.54 11.06 22 12 22V12L2.64 7.07l-.04.07C2 8.15 2 9.42 2 11.94v.12c0 2.52 0 3.79.6 4.8s1.67 1.58 3.82 2.7z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m17.58 4.43-2-1.05C13.82 2.46 12.94 2 12 2s-1.82.46-3.58 1.38l-2 1.05c-2.1 1.1-3.18 1.67-3.78 2.64L12 12l9.36-4.93c-.6-.97-1.68-1.53-3.78-2.64"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.6" : "1"}
              d="m21.4 7.14-.04-.07L12 12v10c.94 0 1.82-.46 3.58-1.38l2-1.05c2.15-1.13 3.23-1.7 3.82-2.71.6-1.01.6-2.28.6-4.8v-.12c0-2.52 0-3.79-.6-4.8"
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
              d="m17.58 4.43-2-1.05C13.82 2.46 12.94 2 12 2s-1.82.46-3.58 1.38l-2 1.05c-1.77.93-2.81 1.48-3.46 2.21L12 11.16l9.04-4.52c-.65-.73-1.69-1.28-3.46-2.2"
              fill="currentColor"
            />
            <path
              d="m21.75 7.96-9 4.5v9.44c.72-.17 1.53-.6 2.83-1.28l2-1.05c2.15-1.13 3.23-1.7 3.82-2.71.6-1.01.6-2.28.6-4.8v-.12c0-1.9 0-3.07-.25-3.98"
              fill="currentColor"
            />
            <path
              d="M11.25 21.9v-9.44l-9-4.5C2 8.86 2 10.05 2 11.94v.12c0 2.52 0 3.79.6 4.8s1.67 1.58 3.82 2.7l2 1.06c1.3.68 2.11 1.1 2.83 1.28"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBoxMinimalistic;
