import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBag3 = forwardRef<SVGSVGElement, IconProps>(function IconBag3(
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
            d="M3.74 18.56C4.94 20 7.17 20 11.64 20h.72c4.47 0 6.7 0 7.9-1.45m-16.52 0c-1.2-1.44-.79-3.63.04-8.02.58-3.12.87-4.69 1.99-5.6m14.49 13.63c1.2-1.45.79-3.64-.04-8.03-.58-3.12-.87-4.69-1.99-5.6m0-.01C17.13 4 15.53 4 12.36 4h-.72c-3.18 0-4.76 0-5.87.92m0 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.17 8a3 3 0 0 0 5.66 0"
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
            opacity={duotone ? "0.4" : "1"}
            d="M5.57 4.7c-.83.68-1.05 1.85-1.49 4.2l-.75 4c-.61 3.29-.92 4.93-.02 6.02S5.88 20 9.23 20h5.54c3.35 0 5.02 0 5.92-1.08.9-1.09.6-2.73-.02-6.03l-.75-4c-.44-2.34-.66-3.5-1.5-4.2C17.6 4 16.4 4 14.03 4H9.98c-2.38 0-3.57 0-4.4.7"
            fill="currentColor"
          />
          <path
            d="M12 9.25c-.98 0-1.81-.62-2.12-1.5a.75.75 0 1 0-1.42.5 3.75 3.75 0 0 0 7.08 0 .75.75 0 1 0-1.42-.5c-.3.88-1.14 1.5-2.12 1.5"
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
            d="M5.57 4.7c-.83.68-1.05 1.85-1.49 4.2l-.75 4c-.61 3.29-.92 4.93-.02 6.02S5.88 20 9.23 20h5.54c3.35 0 5.02 0 5.92-1.08.9-1.09.6-2.73-.02-6.03l-.75-4c-.44-2.34-.66-3.5-1.5-4.2C17.6 4 16.4 4 14.03 4H9.98c-2.38 0-3.57 0-4.4.7m4.3 3.05a2.25 2.25 0 0 0 4.25 0 .75.75 0 0 1 1.42.5 3.75 3.75 0 0 1-7.08 0 .75.75 0 1 1 1.42-.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBag3;
