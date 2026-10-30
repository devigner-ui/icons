import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAlertTriangleWide = forwardRef<SVGSVGElement, IconProps>(
  function IconAlertTriangleWide(
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
            d="M12 9v5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.78 4.96c1.79-3.17 4.69-3.16 6.46.04l2.94 5.29 3.12 5.62c1.5 2.7.5 4.96-2.18 5.42m-3.5.09H12v-.01H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62 1.26-2.26"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.99 17h.02Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 17h.02Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
              opacity={duotone ? "0.4" : "1"}
              d="M12 9v5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 21.41H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62L8.76 5c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29 3.12 5.62c1.68 3.03.22 5.51-3.24 5.51H12z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.99 17h.02"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
              d="M12 17h.02"
              opacity={duotone ? "0.4" : "1"}
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
              d="m21.76 16.07-6.4-11.52C14.5 3 13.31 2.15 12 2.15S9.5 3 8.64 4.55l-6.4 11.52c-.81 1.47-.9 2.88-.25 3.99s1.93 1.72 3.61 1.72h12.8c1.68 0 2.96-.61 3.61-1.72s.56-2.53-.25-3.99"
              fill="currentColor"
            />
            <path
              d="M12 14.9a.76.76 0 0 1-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="m12 18.15-.2-.02-.18-.06-.18-.09-.15-.12a1 1 0 0 1-.29-.71q.01-.4.29-.71l.15-.12.18-.09.18-.06a1 1 0 0 1 .39 0l.19.06.18.09.15.12q.28.3.29.71-.01.4-.29.71l-.15.12-.18.09-.19.06z"
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
              d="m21.76 16.07-6.4-11.52C14.5 3 13.31 2.15 12 2.15S9.5 3 8.64 4.55l-6.4 11.52c-.81 1.47-.9 2.88-.25 3.99s1.93 1.72 3.61 1.72h12.8c1.68 0 2.96-.61 3.61-1.72s.56-2.53-.25-3.99M11.25 9.15c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75zm1.46 8.71-.15.12-.18.09-.19.06-.19.02-.2-.02-.18-.06-.18-.09-.15-.12a1 1 0 0 1-.29-.71q.01-.4.29-.71l.15-.12.18-.09.18-.06a1 1 0 0 1 .39 0l.19.06.18.09.15.12q.28.3.29.71-.01.4-.29.71"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAlertTriangleWide;
