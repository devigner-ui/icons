import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconIncognito = forwardRef<SVGSVGElement, IconProps>(
  function IconIncognito(
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
              d="M21 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M2 11h20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m4 11 .61-2.45c.55-2.19.82-3.28 1.64-3.91S8.18 4 10.43 4h3.14c2.25 0 3.37 0 4.18.64.82.63 1.09 1.72 1.64 3.9L20 11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M10 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m10 17.5.66-.33a3 3 0 0 1 2.68 0l.66.33"
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
              d="M21 16.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.25 10c0-.41.34-.75.75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m4.19 9.25.42-1.7c.55-2.19.82-3.28 1.64-3.91S8.18 3 10.43 3h3.14c2.25 0 3.37 0 4.18.64.82.63 1.09 1.72 1.64 3.9l.42 1.71z"
              fill="currentColor"
            />
            <path
              d="M10 16.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.88 17.4a3.5 3.5 0 0 0 .03-1.7l.41-.2a3.8 3.8 0 0 1 3.36 0l.41.2a3.5 3.5 0 0 0 .03 1.7L13 16.84a2.3 2.3 0 0 0-2.02 0z"
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
              d="m4.61 8.55-.42 1.7H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-2.19l-.42-1.7c-.55-2.19-.82-3.28-1.64-3.91S15.82 4 13.57 4h-3.14c-2.25 0-3.37 0-4.18.64-.82.63-1.1 1.72-1.64 3.9M6.5 21a3.5 3.5 0 0 0 3.38-2.6l1.11-.56a2.3 2.3 0 0 1 2.02 0l1.1.56a3.5 3.5 0 1 0-.02-1.7l-.41-.2a3.8 3.8 0 0 0-3.36 0l-.41.2A3.5 3.5 0 1 0 6.5 21"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconIncognito;
