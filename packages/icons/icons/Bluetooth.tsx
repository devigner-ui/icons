import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBluetooth = forwardRef<SVGSVGElement, IconProps>(
  function IconBluetooth(
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
              d="M16.26 8.26 11 12V5.22c0-1.88 0-2.83.6-3.13.6-.31 1.38.23 2.93 1.33l1.73 1.24c1.16.82 1.74 1.23 1.74 1.8s-.58.98-1.74 1.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m16.26 19.34-1.73 1.24c-1.55 1.1-2.32 1.64-2.93 1.33-.6-.3-.6-1.25-.6-3.13V12l5.26 3.74c1.16.82 1.74 1.23 1.74 1.8s-.58.98-1.74 1.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m6 15.5 5-3.5-5-3.5"
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
              d="m12.3 12 4.44 3.16q.83.57 1.34 1.03c.36.34.67.77.67 1.35s-.32 1.01-.67 1.35q-.51.47-1.34 1.03l-1.83 1.3c-.73.52-1.35.96-1.86 1.22-.52.27-1.15.47-1.79.14-.63-.32-.84-.96-.93-1.53q-.1-.87-.08-2.21V5.16q-.02-1.35.08-2.2c.09-.58.3-1.22.93-1.54s1.27-.13 1.8.14c.5.26 1.12.7 1.85 1.21l1.83 1.3q.83.57 1.34 1.04c.36.33.67.76.67 1.35 0 .58-.32 1.01-.67 1.35q-.51.46-1.34 1.03z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.25 10.56 6.43 7.89a.75.75 0 1 0-.86 1.22L9.69 12l-4.12 2.89a.75.75 0 0 0 .86 1.22l3.82-2.67z"
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
              d="M16.74 15.16 12.3 12l4.44-3.16q.83-.57 1.34-1.03c.36-.34.67-.77.67-1.35s-.32-1.02-.67-1.35q-.51-.47-1.34-1.03l-1.83-1.3c-.73-.52-1.35-.96-1.86-1.22-.52-.27-1.15-.47-1.79-.14-.63.32-.84.96-.93 1.53q-.1.87-.08 2.21v5.4L6.43 7.89a.75.75 0 1 0-.86 1.22L9.69 12l-4.12 2.89a.75.75 0 0 0 .86 1.22l3.82-2.67v5.4q-.02 1.35.08 2.2c.09.58.3 1.22.93 1.54s1.27.13 1.8-.14c.5-.26 1.12-.7 1.85-1.21l1.83-1.3q.83-.57 1.34-1.04c.36-.34.67-.76.67-1.35 0-.58-.32-1.01-.67-1.35q-.51-.46-1.34-1.03"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBluetooth;
