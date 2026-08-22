import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRotateRight = forwardRef<SVGSVGElement, IconProps>(
  function IconRotateRight(
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
              d="M15.56 5.08c-.87-.26-1.83-.43-2.89-.43a8.67 8.67 0 1 0 7.21 3.86"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.8 5.32 13.91 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m16.8 5.32-3.37 2.46"
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
              d="M12.67 18.58a5.76 5.76 0 0 1-.19-11.5l-.37-.43a.76.76 0 0 1 .07-1.06.76.76 0 0 1 1.06.07l1.66 1.9.05.06a1 1 0 0 1 .13.32q.03.14-.01.28l-.09.24-.04.06-.16.15-.01.01-1.94 1.42a.76.76 0 0 1-1.05-.16.76.76 0 0 1 .16-1.05l.41-.3a4.26 4.26 0 1 0 3.85 1.88.75.75 0 0 1 .21-1.04.74.74 0 0 1 1.04.21 5.75 5.75 0 0 1-4.78 8.94"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-4.19 16.58a5.76 5.76 0 0 1-.19-11.5l-.37-.43a.76.76 0 0 1 .07-1.06.76.76 0 0 1 1.06.07l1.66 1.9.05.06a1 1 0 0 1 .13.32q.03.14-.01.28l-.09.24-.04.06-.16.15-.01.01-1.94 1.42a.76.76 0 0 1-1.05-.16.76.76 0 0 1 .16-1.05l.41-.3a4.26 4.26 0 1 0 3.85 1.88.75.75 0 0 1 .21-1.04.74.74 0 0 1 1.04.21 5.75 5.75 0 0 1-4.78 8.94"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRotateRight;
