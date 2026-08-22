import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDocumentFavorite = forwardRef<SVGSVGElement, IconProps>(
  function IconDocumentFavorite(
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
              d="M22.67 10v5c0 5-2 7-7 7h-6c-5 0-7-2-7-7V9c0-5 2-7 7-7h5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 10h-4c-3 0-4-1-4-4V2z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.29 15.73c-.33-1.03.06-2.3 1.13-2.65a1.5 1.5 0 0 1 1.66.52c.37-.57 1.1-.7 1.66-.52 1.08.35 1.46 1.62 1.14 2.65-.51 1.63-2.3 2.48-2.8 2.48a4 4 0 0 1-2.79-2.48"
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
              d="M21.17 10.19h-2.89a4.3 4.3 0 0 1-4.3-4.3V3a1 1 0 0 0-1-1H8.74C5.66 2 3.17 4 3.17 7.57v8.86C3.17 20 5.66 22 8.74 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24a1 1 0 0 0-1-1"
              fill="currentColor"
            />
            <path
              d="M16.47 2.21c-.41-.41-1.12-.13-1.12.44v3.49a2.73 2.73 0 0 0 2.75 2.67l3.4.01c.57 0 .87-.67.47-1.07z"
              fill="currentColor"
            />
            <path
              d="M11.83 12.73a1.8 1.8 0 0 0-1.66.27 1.8 1.8 0 0 0-1.65-.27c-1.27.41-1.67 1.86-1.32 2.97.54 1.7 2.33 2.57 2.98 2.57.63 0 2.45-.9 2.98-2.57.34-1.11-.06-2.56-1.33-2.97"
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
              d="M21.17 10.19h-2.89a4.3 4.3 0 0 1-4.3-4.3V3a1 1 0 0 0-1-1H8.74C5.66 2 3.17 4 3.17 7.57v8.86C3.17 20 5.66 22 8.74 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24a1 1 0 0 0-1-1m-8.02 5.51c-.52 1.67-2.35 2.57-2.98 2.57-.64 0-2.43-.87-2.98-2.57-.36-1.11.05-2.56 1.32-2.97.58-.19 1.2-.08 1.65.27a1.8 1.8 0 0 1 1.66-.27c1.28.41 1.68 1.86 1.33 2.97"
              fill="currentColor"
            />
            <path
              d="m18.1 8.81 3.4.01c.57 0 .87-.67.47-1.07l-5.5-5.54c-.41-.41-1.12-.13-1.12.44v3.49a2.73 2.73 0 0 0 2.75 2.67"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDocumentFavorite;
