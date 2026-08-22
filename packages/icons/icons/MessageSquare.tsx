import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMessageSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconMessageSquare(
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
              d="M18.95 9.76v3.14q0 .3-.03.59-.27 3.18-3.73 3.18h-.31a.6.6 0 0 0-.5.25l-.94 1.26c-.42.56-1.09.56-1.51 0l-.94-1.26a.7.7 0 0 0-.5-.25h-.31c-2.51 0-3.76-.62-3.76-3.76V9.77q0-3.45 3.18-3.73.29-.03.59-.03h5.03q3.72 0 3.73 3.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
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
              d="M18.95 9.76v3.14q0 .3-.03.59-.27 3.18-3.73 3.18h-.31a.6.6 0 0 0-.5.25l-.94 1.26c-.42.56-1.09.56-1.51 0l-.94-1.26a.7.7 0 0 0-.5-.25h-.31c-2.51 0-3.76-.62-3.76-3.76V9.77q0-3.45 3.18-3.73.29-.03.59-.03h5.03q3.72 0 3.73 3.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.86 2H8.49C4.85 2 2.68 4.17 2.68 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m2.09 10.91q0 .3-.03.59-.27 3.18-3.73 3.18h-.32a.6.6 0 0 0-.5.25l-.94 1.26c-.42.56-1.09.56-1.51 0l-.94-1.26a.7.7 0 0 0-.5-.25h-.32c-2.51 0-3.76-.62-3.76-3.76V9.76q0-3.45 3.18-3.73.26-.03.58-.03h5.03q3.76 0 3.76 3.76z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMessageSquare;
