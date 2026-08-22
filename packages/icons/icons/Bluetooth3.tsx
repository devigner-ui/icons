import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBluetooth3 = forwardRef<SVGSVGElement, IconProps>(
  function IconBluetooth3(
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
              d="M6.31 18.64 18.66 7.32c.51-.47.5-1.22-.04-1.67l-3.85-3.21c-1-.83-1.82-.45-1.82.85v17.42c0 1.3.82 1.68 1.82.85l3.85-3.21c.54-.45.55-1.2.04-1.67L6.31 5.36"
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
              opacity={duotone ? "0.4" : "1"}
              d="M16.86 2H8.49C4.85 2 2.68 4.17 2.68 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M13.38 19.03q-.35-.02-.51-.11c-.23-.11-.77-.47-.77-1.45v-3.42l-2.92 2.68a.75.75 0 0 1-1.06-.05.75.75 0 0 1 .05-1.06l3.93-3.6v-.08L8.17 8.38a.75.75 0 0 1-.05-1.06.76.76 0 0 1 1.06-.05l2.92 2.68V6.53c0-.98.54-1.34.77-1.45s.85-.29 1.6.34l2.42 2.02a1.44 1.44 0 0 1 .05 2.18l-2.61 2.39 2.61 2.39c.31.29.49.69.48 1.1s-.2.8-.53 1.08l-2.42 2.02c-.42.34-.8.43-1.09.43m.22-5.73v4.06l2.33-1.95zm0-6.66v4l2.33-2.14z"
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
            <path d="m13.6 10.64 2.33-2.13-2.33-1.87z" fill="currentColor" />
            <path
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m.08 12.39c.31.29.49.69.48 1.1s-.2.8-.53 1.08l-2.42 2.02c-.42.35-.8.45-1.09.45q-.35-.02-.51-.11c-.23-.11-.77-.47-.77-1.45v-3.42l-2.92 2.68a.75.75 0 0 1-1.06-.05.75.75 0 0 1 .05-1.06l3.93-3.6v-.08L8.16 8.38a.76.76 0 0 1 1.02-1.11l2.92 2.68V6.53c0-.98.54-1.34.77-1.45s.85-.29 1.6.34l2.42 2.02a1.44 1.44 0 0 1 .05 2.18L14.34 12z"
              fill="currentColor"
            />
            <path d="m13.6 17.36 2.33-1.95-2.33-2.11z" fill="currentColor" />
          </svg>
        )}
      </>
    );
  },
);

export default IconBluetooth3;
