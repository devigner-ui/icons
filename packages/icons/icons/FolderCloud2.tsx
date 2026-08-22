import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFolderCloud2 = forwardRef<SVGSVGElement, IconProps>(
  function IconFolderCloud2(
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
              d="M9.67 22h-2c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.43 18.32c-2.35.17-2.35 3.57 0 3.74h5.56a2.7 2.7 0 0 0 1.82-.7c1.65-1.44.77-4.32-1.4-4.59-.78-4.69-7.56-2.91-5.96 1.56"
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
              d="M22.66 10.84q-.03-.72-.25-1.4a5.35 5.35 0 0 0-5.09-3.72h-2.79c-.58 0-.62-.06-.93-.47l-1.4-1.86c-.65-.87-1.16-1.4-2.79-1.4H7.08a4.4 4.4 0 0 0-4.42 4.42v10.23c0 2.95 2.4 5.35 5.35 5.35h9.3c2.95 0 5.35-2.4 5.35-5.35z"
              fill="currentColor"
            />
            <path
              d="M16.25 19.7c-2.11.15-2.11 3.21 0 3.36h5c.62 0 1.2-.22 1.65-.63 1.48-1.29.69-3.89-1.26-4.13-.7-4.22-6.81-2.62-5.36 1.4"
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
              d="M16.25 19.7c-2.11.15-2.11 3.21 0 3.36h5c.62 0 1.2-.22 1.65-.63 1.48-1.29.69-3.89-1.26-4.13-.7-4.22-6.81-2.62-5.36 1.4"
              fill="currentColor"
            />
            <path
              d="M16.25 19.7c-2.11.15-2.11 3.21 0 3.36h5c.62 0 1.2-.22 1.65-.63 1.48-1.29.69-3.89-1.26-4.13-.7-4.22-6.81-2.62-5.36 1.4"
              fill="currentColor"
            />
            <path
              d="M22.67 11.07v4.27c0 .32-.51.46-.73.23a4 4 0 0 0-1.74-1.07 4.5 4.5 0 0 0-4.52 1.17 4 4 0 0 0-1.13 2.77q-.01.28-.23.45a3.1 3.1 0 0 0-1.16 2.48v.01c0 .32-.23.61-.55.61h-4.6a5.34 5.34 0 0 1-5.34-5.34V6.42A4.4 4.4 0 0 1 7.09 2h2.32c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.46.93.46h2.79a5.35 5.35 0 0 1 5.34 5.12z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFolderCloud2;
