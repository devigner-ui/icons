import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSearchFavorite = forwardRef<SVGSVGElement, IconProps>(
  function IconSearchFavorite(
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
              d="M21.67 11.5a9.5 9.5 0 1 1-9.5-9.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m22.67 22-2-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.17 6.13c-.35-1.1.06-2.47 1.22-2.84a1.6 1.6 0 0 1 1.79.56c.4-.61 1.18-.75 1.78-.56 1.16.37 1.57 1.74 1.22 2.84-.55 1.75-2.47 2.66-3 2.66-.54 0-2.44-.89-3.01-2.66"
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
              opacity={duotone ? "0.4" : "1"}
              d="M12.17 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19"
              fill="currentColor"
            />
            <path
              d="M21.97 22a.7.7 0 0 1-.49-.2l-1.86-1.86a.7.7 0 0 1 0-.99.7.7 0 0 1 .99 0l1.86 1.86a.7.7 0 0 1 0 .99.7.7 0 0 1-.5.2"
              fill="currentColor"
            />
            <path
              d="M13.94 8.89c-.63-.2-1.3-.08-1.78.29a2 2 0 0 0-1.77-.29c-1.36.44-1.79 1.99-1.41 3.17.58 1.81 2.49 2.75 3.18 2.75.67 0 2.62-.96 3.18-2.75.39-1.18-.04-2.73-1.4-3.17"
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
              d="M21.97 22a.7.7 0 0 1-.49-.2l-1.86-1.86a.7.7 0 0 1 0-.99.7.7 0 0 1 .99 0l1.86 1.86a.7.7 0 0 1 0 .99.7.7 0 0 1-.5.2"
              fill="currentColor"
            />
            <path
              d="M12.17 2a9.5 9.5 0 1 0 .02 19.02A9.5 9.5 0 0 0 12.17 2m3.18 10.06c-.56 1.78-2.51 2.75-3.18 2.75-.69 0-2.6-.93-3.18-2.75-.38-1.19.05-2.74 1.41-3.17.62-.2 1.28-.08 1.77.29a2 2 0 0 1 1.78-.29c1.35.44 1.78 1.99 1.4 3.17"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSearchFavorite;
