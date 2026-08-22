import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUserOctagon = forwardRef<SVGSVGElement, IconProps>(
  function IconUserOctagon(
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
              d="M21.75 8.58v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.2 3.2 0 0 1-1.57-2.73V8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43a3.2 3.2 0 0 1 3.15 0l5.94 3.43c.97.57 1.57 1.6 1.57 2.73"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 11a2.33 2.33 0 1 0 0-4.66 2.33 2.33 0 0 0 0 4.66"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.67 16.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
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
              d="M21.75 8.58v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.2 3.2 0 0 1-1.57-2.73V8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43a3.2 3.2 0 0 1 3.15 0l5.94 3.43c.97.57 1.57 1.6 1.57 2.73"
              fill="currentColor"
            />
            <path
              d="M12.67 12a2.33 2.33 0 1 0 0-4.66 2.33 2.33 0 0 0 0 4.66"
              fill="currentColor"
            />
            <path
              d="M15.35 16.66a1 1 0 0 0 .83-1.57 4.2 4.2 0 0 0-3.51-1.69 4.2 4.2 0 0 0-3.51 1.69 1 1 0 0 0 .83 1.57z"
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
              d="m20.18 5.85-5.94-3.43a3.2 3.2 0 0 0-3.15 0L5.16 5.85a3.2 3.2 0 0 0-1.57 2.73v6.84c0 1.12.6 2.16 1.57 2.73l5.94 3.43c.97.56 2.17.56 3.15 0l5.94-3.43a3.2 3.2 0 0 0 1.57-2.73V8.58a3.2 3.2 0 0 0-1.58-2.73m-7.51 1.49a2.33 2.33 0 1 1 0 4.65 2.33 2.33 0 0 1 0-4.65m2.68 9.32H9.99a1 1 0 0 1-.83-1.57 4.2 4.2 0 0 1 3.51-1.69 4.2 4.2 0 0 1 3.51 1.69 1 1 0 0 1-.83 1.57"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUserOctagon;
