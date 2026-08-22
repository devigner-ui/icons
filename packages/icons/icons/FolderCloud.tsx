import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFolderCloud = forwardRef<SVGSVGElement, IconProps>(
  function IconFolderCloud(
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
              d="M2 6.95c0-.88 0-1.32.07-1.7a4 4 0 0 1 3.19-3.18C5.63 2 6.06 2 6.95 2c.39 0 .58 0 .77.02a4 4 0 0 1 2.18.9c.14.12.28.26.55.53L11 4a9 9 0 0 0 1.71 1.5 4 4 0 0 0 .85.35c.54.15 1.11.15 2.27.15h.37c2.63 0 3.95 0 4.8.77l.23.22c.77.86.77 2.18.77 4.8V14c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.95 11.89a2.5 2.5 0 0 1 1.51 0m-4.41.96q-.16-.03-.34-.03c-.94 0-1.71.71-1.71 1.6 0 .87.77 1.58 1.71 1.58h4c1.27 0 2.29-.95 2.29-2.12 0-.92-.64-1.71-1.54-2m-4.41.97q-.15-.34-.15-.73c0-1.17 1.03-2.12 2.29-2.12 1.18 0 2.14.82 2.27 1.88m-4.41.97q.33.07.62.24"
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
              d="M22 14v-2.2c0-2.63 0-3.95-.77-4.8l-.22-.23C20.15 6 18.83 6 16.2 6h-.38c-1.16 0-1.73 0-2.27-.15a4 4 0 0 1-.85-.35c-.49-.28-.9-.68-1.71-1.5l-.55-.55a4 4 0 0 0-2.73-1.43C7.53 2 7.34 2 6.95 2c-.88 0-1.32 0-1.7.07a4 4 0 0 0-3.18 3.19C2 5.63 2 6.06 2 6.95V14c0 3.77 0 5.66 1.17 6.83S6.23 22 10 22h4c3.77 0 5.66 0 6.83-1.17S22 17.77 22 14"
              fill="currentColor"
            />
            <path
              d="M16 13.88c0 1.17-1.02 2.12-2.29 2.12h-4C8.77 16 8 15.29 8 14.41s.77-1.59 1.71-1.59q.18 0 .34.03-.15-.34-.15-.73c0-1.17 1.03-2.12 2.29-2.12 1.18 0 2.14.82 2.27 1.88.9.29 1.54 1.08 1.54 2"
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
              d="M2.07 5.26C2 5.63 2 6.06 2 6.95V14c0 3.77 0 5.66 1.17 6.83S6.23 22 10 22h4c3.77 0 5.66 0 6.83-1.17S22 17.77 22 14v-2.2c0-2.63 0-3.95-.77-4.8l-.22-.23C20.15 6 18.83 6 16.2 6h-.38c-1.16 0-1.73 0-2.27-.15a4 4 0 0 1-.85-.35c-.49-.28-.9-.68-1.71-1.5l-.55-.55a4 4 0 0 0-2.73-1.43C7.53 2 7.34 2 6.95 2c-.88 0-1.32 0-1.7.07a4 4 0 0 0-3.18 3.19M13.7 16c1.27 0 2.29-.95 2.29-2.12 0-.92-.64-1.71-1.54-2-.13-1.06-1.1-1.88-2.27-1.88-1.26 0-2.29.95-2.29 2.12q0 .39.15.73-.16-.03-.34-.03c-.94 0-1.71.71-1.71 1.6 0 .87.77 1.58 1.71 1.58z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFolderCloud;
