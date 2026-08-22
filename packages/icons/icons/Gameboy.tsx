import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGameboy = forwardRef<SVGSVGElement, IconProps>(function IconGameboy(
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
            d="M4.32 20.54C5.64 22 7.76 22 12 22s6.36 0 7.68-1.46C21 19.07 21 16.7 21 12s0-7.07-1.32-8.54S16.24 2 12 2 5.64 2 4.32 3.46C3 4.93 3 7.3 3 12s0 7.07 1.32 8.54"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M7 8c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06C8.31 6 8.54 6 9 6h6c.46 0 .7 0 .89.05.52.14.92.54 1.06 1.06.05.2.05.43.05.89s0 .7-.05.89a1.5 1.5 0 0 1-1.06 1.06c-.2.05-.43.05-.89.05H9c-.46 0-.7 0-.89-.05a1.5 1.5 0 0 1-1.06-1.06C7 8.69 7 8.46 7 8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.5 14v3M7 15.5h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M16.33 13.83a.83.83 0 1 1-1.66 0 .83.83 0 0 1 1.66 0"
              fill="currentColor"
            />
            <path
              d="M16.33 17.17a.83.83 0 1 1-1.66 0 .83.83 0 0 1 1.66 0"
              fill="currentColor"
            />
            <path
              d="M14.67 15.5a.83.83 0 1 1-1.67 0 .83.83 0 0 1 1.67 0"
              fill="currentColor"
            />
            <path
              d="M18 15.5a.83.83 0 1 1-1.67 0 .83.83 0 0 1 1.67 0"
              fill="currentColor"
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
            opacity={duotone ? "0.4" : "1"}
            d="M4.32 20.54C5.64 22 7.76 22 12 22s6.36 0 7.68-1.46C21 19.07 21 16.7 21 12s0-7.07-1.32-8.54S16.24 2 12 2 5.64 2 4.32 3.46C3 4.93 3 7.3 3 12s0 7.07 1.32 8.54"
            fill="currentColor"
          />
          <path
            d="M9.25 14a.75.75 0 0 0-1.5 0v.75H7a.75.75 0 0 0 0 1.5h.75V17a.75.75 0 0 0 1.5 0v-.75H10a.75.75 0 0 0 0-1.5h-.75z"
            fill="currentColor"
          />
          <path
            d="M16.33 13.83a.83.83 0 1 1-1.66 0 .83.83 0 0 1 1.66 0"
            fill="currentColor"
          />
          <path
            d="M16.33 17.17a.83.83 0 1 1-1.66 0 .83.83 0 0 1 1.66 0"
            fill="currentColor"
          />
          <path
            d="M13.83 16.33a.83.83 0 1 0 0-1.66.83.83 0 0 0 0 1.66"
            fill="currentColor"
          />
          <path
            d="M18 15.5a.83.83 0 1 1-1.67 0 .83.83 0 0 1 1.67 0"
            fill="currentColor"
          />
          <path
            d="M7.05 7.11C7 7.31 7 7.54 7 8s0 .7.05.89c.14.52.54.92 1.06 1.06.2.05.43.05.89.05h6c.46 0 .7 0 .89-.05a1.5 1.5 0 0 0 1.06-1.06c.05-.2.05-.43.05-.89s0-.7-.05-.89a1.5 1.5 0 0 0-1.06-1.06C15.69 6 15.46 6 15 6H9c-.46 0-.7 0-.89.05a1.5 1.5 0 0 0-1.06 1.06"
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
            d="M12 22c-4.24 0-6.36 0-7.68-1.46C3 19.07 3 16.7 3 12s0-7.07 1.32-8.54S7.76 2 12 2s6.36 0 7.68 1.46C21 4.93 21 7.3 21 12s0 7.07-1.32 8.54S16.24 22 12 22m-2.75-8a.75.75 0 0 0-1.5 0v.75H7a.75.75 0 0 0 0 1.5h.75V17a.75.75 0 0 0 1.5 0v-.75H10a.75.75 0 0 0 0-1.5h-.75zm7.08-.17a.83.83 0 1 1-1.66 0 .83.83 0 0 1 1.66 0m0 3.34a.83.83 0 1 1-1.66 0 .83.83 0 0 1 1.66 0m-2.5-.84a.83.83 0 1 0 0-1.66.83.83 0 0 0 0 1.66M18 15.5a.83.83 0 1 1-1.67 0 .83.83 0 0 1 1.67 0M7.05 7.11C7 7.31 7 7.54 7 8s0 .7.05.89c.14.52.54.92 1.06 1.06.2.05.43.05.89.05h6c.46 0 .7 0 .89-.05a1.5 1.5 0 0 0 1.06-1.06c.05-.2.05-.43.05-.89s0-.7-.05-.89a1.5 1.5 0 0 0-1.06-1.06C15.69 6 15.46 6 15 6H9c-.46 0-.7 0-.89.05a1.5 1.5 0 0 0-1.06 1.06"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGameboy;
