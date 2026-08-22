import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBoneCrack = forwardRef<SVGSVGElement, IconProps>(
  function IconBoneCrack(
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
              d="M14.14 2.74a3.4 3.4 0 0 0-.85 3.05c.15.54.17 1.19-.22 1.58l-5.7 5.7c-.4.4-1.04.37-1.58.22-1.01-.28-2.3.1-3.05.85A2.52 2.52 0 0 0 6.3 17.7a2.52 2.52 0 0 0 3.56 3.56 3.4 3.4 0 0 0 .85-3.05c-.15-.54-.17-1.19.22-1.58l5.7-5.7c.4-.4 1.04-.37 1.58-.22 1.01.28 2.3-.1 3.05-.85A2.52 2.52 0 0 0 17.7 6.3a2.52 2.52 0 0 0-3.56-3.56"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.23 10.23v2.12l2.12-.7v1.41L15 12.5"
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
              d="M2.74 17.7c.98.98 2.58.98 3.56 0a2.52 2.52 0 0 0 3.56 3.56 3.4 3.4 0 0 0 .85-3.05c-.15-.54-.17-1.19.22-1.58l4.45-4.45-3.03.88v-1.41l-2.12.7-.01-2.13-2.85 2.85c-.4.4-1.04.37-1.58.22-1.01-.28-2.3.1-3.05.85a2.5 2.5 0 0 0 0 3.56"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.14 2.74a3.4 3.4 0 0 0-.85 3.05c.15.54.17 1.19-.22 1.58l-2.85 2.85.01 2.13 2.12-.7v1.41l3.03-.88 1.25-1.25c.4-.4 1.04-.37 1.58-.22 1.01.28 2.3-.1 3.05-.85A2.52 2.52 0 1 0 17.7 6.3a2.52 2.52 0 0 0-3.56-3.56"
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
              d="M13.29 5.79c-.28-1.01.1-2.3.85-3.05A2.52 2.52 0 0 1 17.7 6.3a2.52 2.52 0 0 1 3.56 3.56 3.4 3.4 0 0 1-3.05.85c-.54-.15-1.19-.17-1.58.22l-.84.84-2.69.42v-.54a.75.75 0 0 0-.98-.71l-1.14.37V9.46l2.09-2.1c.4-.38.37-1.03.22-1.57"
              fill="currentColor"
            />
            <path
              d="m9.48 10.96-2.11 2.1c-.4.4-1.04.38-1.58.23-1.01-.28-2.3.1-3.05.85A2.52 2.52 0 0 0 6.3 17.7a2.52 2.52 0 1 0 3.56 3.56 3.4 3.4 0 0 0 .85-3.05c-.15-.54-.17-1.19.22-1.58L14 13.57l-1.53.23a.75.75 0 0 1-.87-.74v-.37l-1.13.38a.75.75 0 0 1-.99-.72z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBoneCrack;
