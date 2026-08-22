import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMapPointRotate = forwardRef<SVGSVGElement, IconProps>(
  function IconMapPointRotate(
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
              opacity={duotone ? "0.4" : "1"}
              d="M6 8.1C6 4.74 8.69 2 12 2s6 2.73 6 6.1c0 3.35-1.91 7.26-4.9 8.66-.7.32-1.5.32-2.2 0C7.91 15.36 6 11.46 6 8.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m12 20.69.5.56a.75.75 0 0 0 0-1.13zm9.43-6.28a.75.75 0 1 0-.94 1.18zM3.5 15.6a.75.75 0 1 0-.94-1.18zm6.99 3.79.5-.57a.75.75 0 0 0-1.25.57zm0 2.62h-.75a.75.75 0 0 0 1.24.56zm3.92-2.18a.75.75 0 0 0 .16 1.49zm-3.88.08a17 17 0 0 1-5.78-1.25 5 5 0 0 1-1.57-1.02c-.33-.34-.44-.64-.44-.88h-1.5c0 .74.35 1.4.86 1.92q.78.79 2.03 1.34c1.63.74 3.85 1.24 6.32 1.38zm9.95-4.31c.58.45.76.85.76 1.16h1.5c0-.95-.57-1.74-1.32-2.34zM2.75 16.75c0-.3.18-.7.76-1.16l-.94-1.18c-.75.6-1.32 1.39-1.32 2.34zm9.74 3.37-1.5-1.3-.98 1.12 1.5 1.31zm-2.74-.74v1.26h1.5v-1.26zm0 1.26V22h1.5v-1.36zm1.24 1.92 1.5-1.3-.98-1.14-1.5 1.32zm10.26-5.81c0 .46-.43 1.11-1.72 1.76-1.23.62-3 1.1-5.1 1.3l.15 1.5c2.21-.22 4.18-.74 5.62-1.46 1.38-.69 2.55-1.72 2.55-3.1z"
              fill="currentColor"
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
              d="M6 8.1C6 4.74 8.69 2 12 2s6 2.73 6 6.1c0 3.35-1.91 7.26-4.9 8.66-.7.32-1.5.32-2.2 0C7.91 15.36 6 11.46 6 8.1m6 1.9a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.63 14.53c.25.33.2.8-.12 1.06-.58.45-.76.85-.76 1.16 0 .24.11.54.44.88q.5.52 1.57 1.02c1.25.57 2.98 1 4.99 1.18v-.45a.75.75 0 0 1 1.24-.57l1.5 1.31a.75.75 0 0 1 0 1.13L11 22.56A.75.75 0 0 1 9.75 22v-.66a18 18 0 0 1-5.61-1.33 7 7 0 0 1-2.03-1.34 2.8 2.8 0 0 1-.86-1.92c0-.95.57-1.74 1.32-2.34.33-.25.8-.2 1.06.12m16.74 0a.75.75 0 0 1 1.06-.12c.75.6 1.32 1.39 1.32 2.34 0 1.38-1.17 2.41-2.55 3.1a17 17 0 0 1-5.62 1.46.75.75 0 0 1-.16-1.5c2.1-.2 3.88-.68 5.11-1.3 1.3-.65 1.72-1.3 1.72-1.76 0-.3-.18-.7-.76-1.16a.75.75 0 0 1-.12-1.06"
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
              d="M6 8.1C6 4.74 8.69 2 12 2s6 2.73 6 6.1c0 3.35-1.91 7.26-4.9 8.66-.7.32-1.5.32-2.2 0C7.91 15.36 6 11.46 6 8.1m6 1.9a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.63 14.53c.25.33.2.8-.12 1.06-.58.45-.76.85-.76 1.16 0 .24.11.54.44.88q.5.52 1.57 1.02c1.25.57 2.98 1 4.99 1.18v-.45a.75.75 0 0 1 1.24-.57l1.5 1.31a.75.75 0 0 1 0 1.13L11 22.56A.75.75 0 0 1 9.75 22v-.66a18 18 0 0 1-5.61-1.33 7 7 0 0 1-2.03-1.34 2.8 2.8 0 0 1-.86-1.92c0-.95.57-1.74 1.32-2.34.33-.25.8-.2 1.06.12m16.74 0a.75.75 0 0 1 1.06-.12c.75.6 1.32 1.39 1.32 2.34 0 1.38-1.17 2.41-2.55 3.1a17 17 0 0 1-5.62 1.46.75.75 0 0 1-.16-1.5c2.1-.2 3.88-.68 5.11-1.3 1.3-.65 1.72-1.3 1.72-1.76 0-.3-.18-.7-.76-1.16a.75.75 0 0 1-.12-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMapPointRotate;
