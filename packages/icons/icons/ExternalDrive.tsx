import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconExternalDrive = forwardRef<SVGSVGElement, IconProps>(
  function IconExternalDrive(
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
              d="M16.67 22h-7c-3 0-5-2-5-5V7c0-3 2-5 5-5h7c3 0 5 2 5 5v10c0 3-2 5-5 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.67 15h17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.67 12h1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.67 9.5h1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.67 7h1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.16 18.25h.01"
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
              d="M21.67 6v7.25a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V6a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4"
              fill="currentColor"
            />
            <path
              d="M8.67 12.75h-1a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M8.67 10.25h-1a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M8.67 7.75h-1A.76.76 0 0 1 6.92 7c0-.41.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M5.67 15.75a1 1 0 0 0-1 1V18a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4v-1.25a1 1 0 0 0-1-1zm12.71 3.71q-.3.28-.71.29-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71a1.05 1.05 0 0 1 1.42 0q.28.3.29.71-.01.4-.29.71"
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
              d="M17.67 2h-9a4 4 0 0 0-4 4v7.25a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V6a4 4 0 0 0-4-4m-9 10.75h-1a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75m0-2.5h-1a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75m0-2.5h-1A.76.76 0 0 1 6.92 7c0-.41.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M4.67 16.75V18a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4v-1.25a1 1 0 0 0-1-1h-15a1 1 0 0 0-1 1m13.71 2.71q-.3.28-.71.29-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71a1.05 1.05 0 0 1 1.42 0q.28.3.29.71-.01.4-.29.71"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconExternalDrive;
