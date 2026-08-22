import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBluetooth2 = forwardRef<SVGSVGElement, IconProps>(
  function IconBluetooth2(
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
              d="M5.31 18.64 17.66 7.32c.51-.47.5-1.22-.04-1.67l-3.85-3.21c-1-.83-1.82-.45-1.82.85v17.42c0 1.3.82 1.68 1.82.85l3.85-3.21c.54-.45.55-1.2.04-1.67L5.31 5.36"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.67 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.67 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
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
              d="M12.75 19q-.35-.02-.51-.11c-.23-.11-.77-.46-.77-1.44v-3.39l-2.9 2.65a.75.75 0 0 1-1.06-.05.75.75 0 0 1 .05-1.06l3.91-3.58v-.08L7.56 8.4a.75.75 0 0 1-.05-1.06.75.75 0 0 1 1.06-.05l2.9 2.65V6.55c0-.98.54-1.34.77-1.44.23-.11.85-.29 1.6.34l2.41 2.01a1.43 1.43 0 0 1 .06 2.17L13.72 12l2.59 2.37c.31.29.49.69.48 1.1s-.2.8-.53 1.07l-2.41 2.01c-.43.35-.81.45-1.1.45m.22-5.7v4.02l2.31-1.93zm0-6.62v3.96l2.31-2.12z"
              fill="currentColor"
            />
            <path
              d="M7.29 13.38a1.38 1.38 0 0 1 0-2.76 1.38 1.38 0 0 1 0 2.76m0-1.5a.12.12 0 0 0-.12.12c0 .14.25.14.25 0q-.01-.11-.13-.12"
              fill="currentColor"
            />
            <path
              d="M18.05 13.38a1.38 1.38 0 0 1 0-2.76 1.38 1.38 0 0 1 0 2.76m0-1.5a.12.12 0 0 0-.12.12c0 .14.25.14.25 0a.14.14 0 0 0-.13-.12"
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
            <path d="m12.97 17.32 2.31-1.93-2.31-2.09z" fill="currentColor" />
            <path d="M12.97 6.68v3.96l2.31-2.12z" fill="currentColor" />
            <path
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2M5.92 12a1.37 1.37 0 1 1 2.75 0 1.37 1.37 0 1 1-2.75 0m10.32 4.54-2.41 2.01c-.41.35-.79.45-1.08.45q-.35-.02-.51-.11c-.23-.11-.77-.46-.77-1.44v-3.39l-2.9 2.65a.75.75 0 0 1-1.06-.05.75.75 0 0 1 .05-1.06l3.91-3.58v-.08L7.56 8.4a.75.75 0 0 1-.05-1.06.76.76 0 0 1 1.06-.05l2.9 2.65V6.56c0-.98.54-1.34.77-1.44.23-.11.85-.29 1.6.34l2.41 2.01a1.43 1.43 0 0 1 .06 2.17L13.71 12l2.59 2.37c.31.29.49.69.48 1.1s-.21.8-.54 1.07m1.81-3.16a1.38 1.38 0 0 1 0-2.76 1.38 1.38 0 0 1 0 2.76"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBluetooth2;
