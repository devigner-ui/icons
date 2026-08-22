import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBenzeneRing = forwardRef<SVGSVGElement, IconProps>(
  function IconBenzeneRing(
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
              d="M9.98 4.88C10.97 4.29 11.46 4 12 4s1.03.3 2.02.88l2.96 1.76c.99.58 1.48.88 1.75 1.36s.27 1.07.27 2.24v3.52c0 1.17 0 1.76-.27 2.24s-.76.78-1.75 1.36l-2.96 1.76c-.99.59-1.48.88-2.02.88s-1.03-.3-2.02-.88l-2.96-1.76c-.99-.58-1.48-.88-1.75-1.36S5 14.93 5 13.76v-3.52C5 9.07 5 8.48 5.27 8s.76-.78 1.75-1.36z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5 8 2 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m19 8 3-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m5 16-3 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m12 16.88 4-2.38"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 4c-.54 0-1.03.3-2.02.88L7.02 6.64c-.99.58-1.48.88-1.75 1.36S5 9.07 5 10.24v3.52c0 1.17 0 1.76.27 2.24s.76.78 1.75 1.36l2.96 1.76c.99.59 1.48.88 2.02.88s1.03-.3 2.02-.88l2.96-1.76c.99-.58 1.48-.88 1.75-1.36s.27-1.07.27-2.24v-3.52c0-1.17 0-1.76-.27-2.24s-.76-.78-1.75-1.36l-2.96-1.76C13.03 4.29 12.54 4 12 4m4.38 11.14a.75.75 0 0 0-.76-1.28l-4 2.38a.75.75 0 1 0 .76 1.29z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M18.97 8.92q-.04-.56-.24-.92-.14-.25-.39-.46l3.24-2.16a.75.75 0 1 1 .84 1.24z"
                fill="currentColor"
              />
              <path
                d="M5.03 15.08q.04.56.24.92.14.25.39.46l-3.24 2.16a.75.75 0 0 1-.84-1.24z"
                fill="currentColor"
              />
              <path
                d="M5.66 7.54q-.26.2-.39.46-.2.36-.24.92l-3.45-2.3a.75.75 0 0 1 .84-1.24z"
                fill="currentColor"
              />
            </g>
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
              d="M9.98 4.88C10.97 4.29 11.46 4 12 4s1.03.3 2.02.88l2.96 1.76c.7.42 1.16.69 1.46.98l3.12-2.23a.75.75 0 0 1 .88 1.22l-3.46 2.47q.02.46.02 1.16v3.52c0 1.17 0 1.76-.27 2.24s-.76.78-1.75 1.36l-2.96 1.76c-.99.59-1.48.88-2.02.88s-1.03-.3-2.02-.88l-2.96-1.76a10 10 0 0 1-1.36-.9l-3.24 2.16a.75.75 0 0 1-.84-1.24l3.45-2.3q-.04-.5-.03-1.32v-3.52q0-.82.03-1.32l-3.45-2.3a.75.75 0 0 1 .84-1.24l3.24 2.16c.3-.27.72-.52 1.36-.9zm6.66 9.24c.22.35.1.81-.26 1.02l-4 2.39a.75.75 0 0 1-.76-1.29l4-2.38a.75.75 0 0 1 1.02.26"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBenzeneRing;
