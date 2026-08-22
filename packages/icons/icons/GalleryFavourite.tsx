import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGalleryFavourite = forwardRef<SVGSVGElement, IconProps>(
  function IconGalleryFavourite(
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
              d="M22 12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m2 12.5 1.75-1.53a2.3 2.3 0 0 1 3.14.1l4.3 4.3a2 2 0 0 0 2.56.21l.3-.2a3 3 0 0 1 3.73.22L21 18.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m16.06 8.57.5-.57zM18 3.97l-.53.53a.75.75 0 0 0 1.06 0zm1.94 4.6-.5-.57zM18 9.61v-.75zM16.55 8c-.48-.43-.95-.9-1.29-1.38a2.3 2.3 0 0 1-.51-1.25h-1.5c0 .78.36 1.51.79 2.12s1 1.17 1.53 1.64zm-1.8-2.63c0-.94.42-1.4.83-1.56.43-.16 1.13-.08 1.89.68l1.06-1.06C17.5 2.39 16.2 2 15.07 2.4c-1.14.42-1.82 1.56-1.82 2.97zm5.68 3.76a10 10 0 0 0 1.53-1.64c.43-.6.79-1.34.79-2.12h-1.5q0 .51-.51 1.25-.53.73-1.3 1.37zm2.32-3.76c0-1.41-.68-2.55-1.82-2.97-1.12-.41-2.42-.02-3.46 1.03l1.06 1.06c.76-.76 1.46-.84 1.89-.68.41.15.83.62.83 1.56zm-7.18 3.76c.76.65 1.36 1.22 2.43 1.22v-1.5c-.42 0-.61-.13-1.45-.86zM19.45 8c-.84.73-1.03.86-1.45.86v1.5c1.07 0 1.67-.57 2.43-1.22z"
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
              opacity={duotone ? "0.4" : "1"}
              d="M21.9 16.44q.12-1.53.1-3.74a.7.7 0 1 0-1.4 0c0 1.48 0 2.66-.09 3.63a7 7 0 0 1-.5 2.32l-2.64-2.37a2.8 2.8 0 0 0-3.47-.21l-.28.2c-.74.51-1.74.43-2.38-.21l-4-4a2.13 2.13 0 0 0-2.91-.09l-.93.81V12c0-2.21 0-3.8.16-5.01.16-1.19.46-1.9 1-2.44.52-.53 1.24-.83 2.43-1a35 35 0 0 1 4.31-.15.7.7 0 0 0 0-1.4c-1.83 0-3.33.02-4.5.18a5.3 5.3 0 0 0-3.23 1.39 5.3 5.3 0 0 0-1.4 3.23C2 8.12 2 9.8 2 11.95v1.45c0 1.73.05 3.12.24 4.24.2 1.14.59 2.06 1.33 2.8a5.3 5.3 0 0 0 3.23 1.38c1.32.18 3 .18 5.15.18h.1c2.15 0 3.83 0 5.15-.18a5.3 5.3 0 0 0 3.23-1.39q.45-.44.73-.98a7 7 0 0 0 .74-3"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.5 11c-2.12 0-3.18 0-3.84-.66S13 8.62 13 6.5s0-3.18.66-3.84S15.38 2 17.5 2s3.18 0 3.84.66S22 4.38 22 6.5s0 3.18-.66 3.84-1.72.66-3.84.66m-1.45-2.78c-.77-.67-1.55-1.57-1.55-2.42 0-1.78 1.65-2.44 3-1.07 1.35-1.37 3-.7 3 1.07 0 .85-.78 1.75-1.55 2.42-.6.52-.89.78-1.45.78s-.86-.26-1.45-.78"
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
              d="M17.5 11c-2.12 0-3.18 0-3.84-.66S13 8.62 13 6.5s0-3.18.66-3.84S15.38 2 17.5 2s3.18 0 3.84.66S22 4.38 22 6.5s0 3.18-.66 3.84-1.72.66-3.84.66m-1.45-2.78c-.77-.67-1.55-1.57-1.55-2.42 0-1.78 1.65-2.44 3-1.07 1.35-1.37 3-.7 3 1.07 0 .85-.78 1.75-1.55 2.42-.6.52-.89.78-1.45.78s-.86-.26-1.45-.78"
              fill="currentColor"
            />
            <path
              d="M21.9 16.44q.12-1.53.1-3.74a.7.7 0 1 0-1.4 0c0 1.48 0 2.66-.09 3.63a7 7 0 0 1-.5 2.32l-2.64-2.37a2.8 2.8 0 0 0-3.47-.21l-.28.2c-.74.51-1.74.43-2.38-.21l-4-4a2.13 2.13 0 0 0-2.91-.09l-.93.81V12c0-2.21 0-3.8.16-5.01.16-1.19.46-1.9 1-2.44.52-.53 1.24-.83 2.43-1a35 35 0 0 1 4.31-.15.7.7 0 0 0 0-1.4c-1.83 0-3.33.02-4.5.18a5.3 5.3 0 0 0-3.23 1.39 5.3 5.3 0 0 0-1.4 3.23C2 8.12 2 9.8 2 11.95v1.45c0 1.73.05 3.12.24 4.24.2 1.14.59 2.06 1.33 2.8a5.3 5.3 0 0 0 3.23 1.38c1.32.18 3 .18 5.15.18h.1c2.15 0 3.83 0 5.15-.18a5.3 5.3 0 0 0 3.23-1.39q.45-.44.73-.98a7 7 0 0 0 .74-3"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGalleryFavourite;
