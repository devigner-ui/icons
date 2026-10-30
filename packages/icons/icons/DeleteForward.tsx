import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDeleteForward = forwardRef<SVGSVGElement, IconProps>(
  function IconDeleteForward(
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
        {variant === "Broken" ? (
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
            d="M2 12c0 3.77 0 5.66 1.2 6.83S6.35 20 10.22 20h2.64c2.23 0 3.34 0 4.27-.5s1.52-1.42 2.7-3.26l.68-1.06c1-1.55 1.49-2.32 1.49-3.18s-.5-1.63-1.49-3.18l-.68-1.06C18.65 5.92 18.06 5 17.13 4.5S15.09 4 12.86 4h-2.64C6.35 4 4.41 4 3.2 5.17 2.53 5.82 2.24 6.7 2.1 8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m8.5 9.5 5 5m0-5-5 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      ) : !fill ? (
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
              d="M12.86 20c2.23 0 3.34 0 4.27-.5s1.52-1.42 2.7-3.26l.68-1.06c1-1.55 1.49-2.32 1.49-3.18s-.5-1.63-1.49-3.18l-.68-1.06C18.65 5.92 18.06 5 17.13 4.5S15.09 4 12.86 4h-2.64C6.35 4 4.41 4 3.2 5.17 2 6.34 2 8.23 2 12s0 5.66 1.2 6.83S6.35 20 10.22 20z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m8.5 9.5 5 5m0-5-5 5"
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
              d="M17.13 19.5c-.93.5-2.04.5-4.27.5h-2.64c-3.87 0-5.81 0-7.02-1.17C2 17.66 2 15.77 2 12s0-5.66 1.2-6.83S6.35 4 10.22 4h2.64c2.23 0 3.34 0 4.27.5s1.52 1.42 2.7 3.26l.67 1.06C21.51 10.37 22 11.14 22 12s-.5 1.63-1.49 3.18l-.68 1.06c-1.18 1.84-1.77 2.76-2.7 3.26"
              fill="currentColor"
            />
            <path
              d="M12.97 8.97a.75.75 0 1 1 1.06 1.06L12.06 12l1.97 1.97a.75.75 0 1 1-1.06 1.06L11 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L9.94 12l-1.97-1.97a.75.75 0 1 1 1.06-1.06L11 10.94z"
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
              d="M17.13 19.5c-.93.5-2.04.5-4.27.5h-2.64c-3.87 0-5.81 0-7.02-1.17C2 17.66 2 15.77 2 12s0-5.66 1.2-6.83S6.35 4 10.22 4h2.64c2.23 0 3.34 0 4.27.5s1.52 1.42 2.7 3.26l.67 1.06C21.51 10.37 22 11.14 22 12s-.5 1.63-1.49 3.18l-.68 1.06c-1.18 1.84-1.77 2.76-2.7 3.26M12.97 8.97a.75.75 0 0 1 1.06 1.06L12.06 12l1.97 1.97a.75.75 0 1 1-1.06 1.06L11 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L9.94 12l-1.97-1.97a.75.75 0 1 1 1.06-1.06L11 10.94z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDeleteForward;
