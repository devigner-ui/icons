import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRotateLeft = forwardRef<SVGSVGElement, IconProps>(
  function IconRotateLeft(
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
              d="M9.78 5.08c.87-.26 1.83-.43 2.89-.43A8.67 8.67 0 1 1 5.46 8.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.54 5.32 11.43 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m8.54 5.32 3.37 2.46"
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
              d="M8.48 2h8.37c3.65 0 5.82 2.17 5.82 5.81v8.37c0 3.64-2.17 5.81-5.81 5.81H8.48c-3.64.01-5.81-2.16-5.81-5.8V7.81C2.67 4.17 4.84 2 8.48 2"
              fill="currentColor"
            />
            <path
              d="M12.67 18.58a5.76 5.76 0 0 1-4.78-8.94.76.76 0 0 1 1.04-.21c.34.23.44.7.21 1.04a4.26 4.26 0 1 0 7.79 2.36 4.26 4.26 0 0 0-3.94-4.24l.41.3a.75.75 0 1 1-.89 1.21l-1.94-1.41-.18-.18-.03-.04-.09-.23a1 1 0 0 1-.01-.29l.03-.12.1-.2.06-.05 1.66-1.9a.76.76 0 0 1 1.06-.07c.31.27.34.75.07 1.06l-.37.43a5.76 5.76 0 0 1 5.56 5.75 5.77 5.77 0 0 1-5.76 5.73"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-4.19 16.58a5.76 5.76 0 0 1-4.78-8.94.76.76 0 0 1 1.04-.21c.34.23.44.7.21 1.04a4.26 4.26 0 1 0 7.79 2.36 4.26 4.26 0 0 0-3.94-4.24l.41.3a.75.75 0 1 1-.89 1.21l-1.94-1.41a1 1 0 0 1-.3-.45 1 1 0 0 1-.01-.29l.03-.12.1-.2.06-.05 1.66-1.9a.76.76 0 0 1 1.06-.07c.31.27.34.75.07 1.06l-.37.43a5.76 5.76 0 0 1 5.56 5.75 5.77 5.77 0 0 1-5.76 5.73"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRotateLeft;
