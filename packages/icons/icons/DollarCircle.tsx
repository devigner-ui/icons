import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDollarCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconDollarCircle(
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
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
              d="M12.67 21.9a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
              d="M13.42 15.92h.65c.65 0 1.2-.58 1.2-1.28 0-.87-.32-1.04-.83-1.22l-1-.35v2.85z"
              fill="currentColor"
            />
            <path
              d="M12.64 1.9a10 10 0 1 0 .07 20 10 10 0 0 0-.07-20m2.3 10.1c.77.27 1.82.85 1.82 2.64a2.74 2.74 0 0 1-2.69 2.78h-.65V18c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.58h-.36a3.03 3.03 0 0 1-2.97-3.08c0-.41.34-.75.75-.75s.75.34.75.75c0 .87.66 1.58 1.47 1.58h.36v-3.38l-1.5-.54c-.79-.27-1.84-.85-1.84-2.64a2.74 2.74 0 0 1 2.7-2.78h.64V6c0-.41.34-.75.75-.75s.75.34.75.75v.58h.36a3.03 3.03 0 0 1 2.97 3.08c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75c0-.87-.66-1.58-1.47-1.58h-.36v3.38z"
              fill="currentColor"
            />
            <path
              d="M10.1 9.37c0 .87.3 1.04.81 1.22l1.01.35V8.08h-.65c-.65 0-1.18.58-1.18 1.29"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDollarCircle;
