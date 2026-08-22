import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlayRemove = forwardRef<SVGSVGElement, IconProps>(
  function IconPlayRemove(
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
              d="M22.67 12q0 1.98-.72 3.72a4 4 0 0 0-4.78.16 3.97 3.97 0 0 0-.77 5.39A10 10 0 1 1 22.67 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.05 12v-1.39c0-1.72 1.22-2.43 2.71-1.57l1.2.69 1.2.69c1.49.86 1.49 2.27 0 3.13l-1.2.69-1.2.69c-1.49.86-2.71.16-2.71-1.57z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.67 19a4 4 0 0 1-1.37 3 3.93 3.93 0 0 1-6.05-.94A3.97 3.97 0 0 1 19.67 15a4 4 0 0 1 4 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m20.74 20.04-2.12-2.11"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m20.72 17.96-2.12 2.11"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="M21.95 15.72a4 4 0 0 0-4.78.16 3.97 3.97 0 0 0-.77 5.39 3.93 3.93 0 0 0 5.9.73q.47-.4.79-.94.57-.92.58-2.06c0-1.36-.68-2.56-1.72-3.28m-.68 4.86a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.53-.53-.55.55a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.55-.55-.53-.53a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.53.53.5-.5a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.5.5.53.53c.29.29.29.76 0 1.06"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 12q0 1.98-.72 3.72a4 4 0 0 0-4.78.16 3.97 3.97 0 0 0-.77 5.39A10 10 0 1 1 22.67 12"
              fill="currentColor"
            />
            <path
              d="M10.05 12v-1.39c0-1.72 1.22-2.43 2.71-1.57l1.2.69 1.2.69c1.49.86 1.49 2.27 0 3.13l-1.2.69-1.2.69c-1.49.86-2.71.16-2.71-1.57z"
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
              d="M21.95 15.72a4 4 0 0 0-4.78.16 3.97 3.97 0 0 0-.77 5.39 3.93 3.93 0 0 0 5.9.73q.47-.4.79-.94.57-.92.58-2.06c0-1.36-.68-2.56-1.72-3.28m-.68 4.86a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.53-.53-.55.55a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.55-.55-.53-.53a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.53.53.5-.5a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.5.5.53.53c.29.29.29.76 0 1.06"
              fill="currentColor"
            />
            <path
              d="M22.52 10.25a10 10 0 1 0-8.26 11.61.5.5 0 0 0 .37-.67 5.45 5.45 0 0 1 1.61-6.49 5.5 5.5 0 0 1 5.62-.75c.29.13.62-.06.68-.37a10 10 0 0 0-.02-3.33m-7.35 3.32-1.2.69-1.2.69c-1.49.86-2.71.16-2.71-1.57v-2.77c0-1.72 1.22-2.43 2.71-1.57l1.2.69 1.2.69c1.49.88 1.49 2.28 0 3.15"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPlayRemove;
