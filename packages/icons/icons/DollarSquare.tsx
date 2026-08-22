import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDollarSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconDollarSquare(
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M9.34 14.33c0 1.29 1 2.33 2.22 2.33h2.51c1.07 0 1.94-.91 1.94-2.03 0-1.22-.53-1.65-1.32-1.93l-4.03-1.4c-.79-.28-1.32-.71-1.32-1.93 0-1.12.87-2.03 1.94-2.03h2.51a2.27 2.27 0 0 1 2.22 2.33"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.67 6v12"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M15.67 22h-6c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="m14.93 12-1.51-.53V8.08h.36c.81 0 1.47.71 1.47 1.58 0 .41.34.75.75.75s.75-.34.75-.75c0-1.7-1.33-3.08-2.97-3.08h-.36V6a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v.58h-.65a2.74 2.74 0 0 0-2.69 2.78c0 1.79 1.04 2.36 1.83 2.64l1.51.53v3.38h-.36c-.81 0-1.47-.71-1.47-1.58a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75c0 1.7 1.33 3.08 2.97 3.08h.36V18c0 .41.34.75.75.75s.75-.34.75-.75v-.58h.65a2.74 2.74 0 0 0 2.69-2.78c-.01-1.8-1.05-2.37-1.83-2.64m-4.02-1.41c-.51-.18-.82-.35-.82-1.22 0-.71.53-1.28 1.19-1.28h.65v2.86zm3.16 5.33h-.65v-2.86l1.01.35c.51.18.82.35.82 1.22 0 .71-.53 1.29-1.18 1.29"
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
              d="M11.92 8.08v2.86l-1-.35c-.52-.18-.83-.35-.83-1.22 0-.71.53-1.29 1.18-1.29z"
              fill="currentColor"
            />
            <path
              d="M15.25 14.63c0 .71-.53 1.29-1.18 1.29h-.65v-2.86l1.01.35c.51.18.82.35.82 1.22"
              fill="currentColor"
            />
            <path
              d="M16.86 2H8.48c-3.64 0-5.8 2.17-5.8 5.81v8.38c0 3.64 2.16 5.81 5.8 5.81h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-3.64-2.17-5.81-5.8-5.81m-1.93 10c.78.27 1.82.84 1.82 2.63 0 1.54-1.2 2.79-2.68 2.79h-.65V18c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.58h-.36a3.04 3.04 0 0 1-2.97-3.09.75.75 0 1 1 1.5 0c0 .88.66 1.59 1.47 1.59h.36v-3.39l-1.5-.53c-.79-.27-1.83-.84-1.83-2.63 0-1.54 1.2-2.79 2.68-2.79h.65V6c0-.41.34-.75.75-.75s.75.34.75.75v.58h.36a3.04 3.04 0 0 1 2.97 3.09.75.75 0 1 1-1.5 0c0-.88-.66-1.59-1.47-1.59h-.36v3.39z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDollarSquare;
