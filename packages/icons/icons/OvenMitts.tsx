import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconOvenMitts = forwardRef<SVGSVGElement, IconProps>(
  function IconOvenMitts(
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
            d="M9.13 17.03a.75.75 0 1 0 1.05-1.08zm3.37 1.19a.75.75 0 1 0-1.04 1.08zm-2.32-2.26-5.64-5.54-1.05 1.07 5.64 5.54zm3.64 3.53-1.32-1.27-1.04 1.08 1.32 1.27z"
            fill="currentColor"
          />
          <path
            d="M4.02 16.54C2.67 15.22 2 14.56 2 13.74c0-.53.29-1 .87-1.63.59-.64.89-.96 1.02-1.3s.14-.71.14-1.47L4.07 6C4.03 3.82 5.44 2.03 7.2 2c1.46-.02 2.7 1.15 3.12 2.78m-.96.94.96-.94.47-.46a6.67 6.67 0 0 1 9.28 0 6.3 6.3 0 0 1 0 9.08M17.42 16l-.73.71-3.4 3.32c-1.33 1.31-2 1.97-2.84 1.97s-1.5-.66-2.85-1.97l-1.07-1.05"
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
              d="M10.33 4.78C9.91 3.15 8.67 1.98 7.21 2c-1.77.03-3.18 1.82-3.14 4l-.04 3.34c0 .76 0 1.13-.14 1.47-.13.34-.43.66-1.02 1.3-.58.63-.87 1.1-.87 1.64 0 .81.67 1.47 2.02 2.79l3.57 3.49C8.93 21.34 9.6 22 10.44 22s1.51-.66 2.86-1.97l6.78-6.63a6.3 6.3 0 0 0 0-9.08 6.67 6.67 0 0 0-9.28 0zm0 0-.96.94"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m13.3 20.03-9.28-9.08"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="m13.3 20.03 6.78-6.63a6.3 6.3 0 0 0 0-9.08 6.67 6.67 0 0 0-9.28 0l-.47.46C9.91 3.15 8.67 1.98 7.21 2c-1.77.03-3.18 1.82-3.14 4l-.04 3.34c0 .76 0 1.13-.14 1.47v.01l9.3 9.3z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m4.02 16.54 3.57 3.49C8.93 21.34 9.6 22 10.44 22c.82 0 1.48-.62 2.75-1.87l-9.3-9.3c-.14.32-.44.64-1.02 1.28-.58.63-.87 1.1-.87 1.64 0 .81.67 1.47 2.02 2.79"
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
              d="m4.02 16.54 3.57 3.49C8.93 21.34 9.6 22 10.44 22c.52 0 .97-.25 1.55-.75.36-.3.54-.45.55-.67 0-.22-.17-.4-.52-.74L4.1 12.07c-.24-.23-.36-.35-.5-.38h-.26c-.13.04-.25.17-.48.42-.58.63-.87 1.1-.87 1.64 0 .81.67 1.47 2.02 2.79"
              fill="currentColor"
            />
            <path
              d="M20.08 13.4a6.3 6.3 0 0 0 0-9.08 6.67 6.67 0 0 0-9.28 0l-.47.46C9.91 3.15 8.67 1.98 7.21 2c-1.77.03-3.18 1.82-3.14 4l-.04 3.46c0 .21 0 .32.04.42s.11.17.27.32l8.79 8.62c.33.33.49.5.7.5s.36-.17.7-.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconOvenMitts;
