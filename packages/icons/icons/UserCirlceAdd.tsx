import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUserCirlceAdd = forwardRef<SVGSVGElement, IconProps>(
  function IconUserCirlceAdd(
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
              d="M12.13 13.73a2.81 2.81 0 1 0 0-5.62 2.81 2.81 0 0 0 0 5.62"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.32 20.2c0-2.33-2.32-4.23-5.19-4.23s-5.19 1.89-5.19 4.23"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.67 12.5a9.5 9.5 0 1 1-5.8-8.76 4 4 0 0 0 .38 3.32q.3.52.76.91a3.9 3.9 0 0 0 3.91.82q.73 1.73.75 3.71"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.67 5q0 .48-.12.93-.14.61-.46 1.13a4 4 0 0 1-2.17 1.73q-.59.21-1.25.21a4 4 0 0 1-2.66-1.03q-.45-.4-.76-.91a4 4 0 0 1-.38-3.32q.3-.88.93-1.53A4 4 0 0 1 23.67 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.16 4.98h-2.98"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.67 3.52v2.99"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M17.32 20.2v.29a9.5 9.5 0 0 1-10.38-.06v-.23c0-2.33 2.33-4.23 5.19-4.23s5.19 1.9 5.19 4.23"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.67 12.5a9.5 9.5 0 0 1-4.35 7.99v-.29c0-2.33-2.32-4.23-5.19-4.23-2.86 0-5.19 1.9-5.19 4.23v.23A9.49 9.49 0 0 1 12.17 3a10 10 0 0 1 3.7.74 4 4 0 0 0 .38 3.32q.3.52.76.91a3.9 3.9 0 0 0 3.91.82q.73 1.73.75 3.71"
              fill="currentColor"
            />
            <path
              d="M22.64 2.33a4 4 0 1 0-5.95 5.33 4 4 0 0 0 5.95-5.33m-1.48 3.4h-.74v.78c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.78h-.74a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.74v-.71c0-.41.34-.75.75-.75s.75.34.75.75v.71h.74a.75.75 0 1 1 0 1.5"
              fill="currentColor"
            />
            <path
              d="M12.13 14.73a2.81 2.81 0 1 0 0-5.62 2.81 2.81 0 0 0 0 5.62"
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
              d="M22.64 2.33a4 4 0 1 0-5.95 5.33 4 4 0 0 0 5.95-5.33m-1.48 3.4h-.74v.78c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.78h-.74a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.74v-.71c0-.41.34-.75.75-.75s.75.34.75.75v.71h.74a.75.75 0 1 1 0 1.5"
              fill="currentColor"
            />
            <path
              d="M22.67 12q0-1.98-.72-3.72a4 4 0 0 1-1.37.61 8.4 8.4 0 0 1-1.87 9.08 5 5 0 0 0-1.1-1c-2.71-1.82-7.15-1.82-9.88 0q-.65.44-1.1 1a8.48 8.48 0 0 1 9.14-13.88l.1-.35q.18-.56.52-1.02A10.02 10.02 0 0 0 2.67 12c0 2.9 1.25 5.51 3.23 7.34l-.01.02.32.27.17.14.57.43.2.14q.29.2.6.36l.22.13a6 6 0 0 0 .87.41 9 9 0 0 0 1.62.51l.22.05q.42.09.85.13l.12.02a12 12 0 0 0 2.15-.02q.43-.04.85-.13l.22-.05q.37-.08.72-.19l.24-.08q.34-.11.66-.24l.24-.11.63-.3.22-.13.6-.36.2-.14q.3-.2.57-.43l.17-.14.32-.27-.01-.02A10 10 0 0 0 22.67 12"
              fill="currentColor"
            />
            <path
              d="M12.67 6.93a3.75 3.75 0 0 0-.05 7.49h.18a3.74 3.74 0 0 0-.13-7.49"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUserCirlceAdd;
