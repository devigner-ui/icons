import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMusicLibrary3 = forwardRef<SVGSVGElement, IconProps>(
  function IconMusicLibrary3(
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
              d="M22.67 13v4c0 3.5-2 5-5 5h-10c-3 0-5-1.5-5-5v-4c0-2.65 1.15-4.15 3-4.72q.9-.28 2-.28h10q1.1 0 2 .28c1.85.57 3 2.07 3 4.72"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.67 7v1.28a7 7 0 0 0-2-.28h-10q-1.1 0-2 .28V7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.67 3.51V5h-8V3.51c0-.83.68-1.51 1.51-1.51h4.98c.83 0 1.51.68 1.51 1.51"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M9.74 19.45a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.92 17.25v-5.17c0-1.1-.69-1.26-1.39-1.06l-2.65.72c-.48.13-.81.51-.81 1.06v5.33"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.6 18.57a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m11.07 14.35 4.85-1.32"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
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
              d="M19.67 7v1.13a4 4 0 0 0-1-.13h-12q-.52 0-1 .13V7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.67 3.51V5h-8V3.51c0-.83.68-1.51 1.51-1.51h4.98c.83 0 1.51.68 1.51 1.51"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 12v6c0 2.2-1.8 4-4 4h-12c-2.2 0-4-1.8-4-4v-6a4 4 0 0 1 4-4h12q.52 0 1 .13c1.72.45 3 2.02 3 3.87"
              fill="currentColor"
            />
            <path
              d="M16.02 10.51c-.3-.23-.84-.45-1.69-.22l-2.65.73a1.8 1.8 0 0 0-1.36 1.78v3.35a2.07 2.07 0 1 0 1.49 2l.01-.03v-3.21l3.35-.91v1.26a2 2 0 0 0-.57-.09 2.07 2.07 0 0 0 0 4.14c1.14 0 2.07-.93 2.07-2.07v-5.17c0-.87-.36-1.33-.65-1.56m-6.28 8.2a.57.57 0 1 1 0-1.14.57.57 0 0 1 0 1.14m4.86-.89a.57.57 0 1 1 0-1.14.57.57 0 0 1 0 1.14"
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
              d="M17.67 4.75h-1V3.26c0-.83-.68-1.51-1.51-1.51h-4.98c-.83 0-1.51.68-1.51 1.51v1.49h-1a2 2 0 0 0-2 2v.13q.48-.13 1-.13h12q.52 0 1 .13v-.13a2 2 0 0 0-2-2"
              fill="currentColor"
            />
            <path
              d="M14.6 16.93a.57.57 0 1 0 0 1.14.57.57 0 0 0 0-1.14"
              fill="currentColor"
            />
            <path
              d="M9.74 17.81a.57.57 0 1 0 0 1.14.57.57 0 0 0 0-1.14"
              fill="currentColor"
            />
            <path
              d="M19.67 8.38a4 4 0 0 0-1-.13h-12q-.52 0-1 .13c-1.72.45-3 2.02-3 3.87v6c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4v-6a4 4 0 0 0-3-3.87m-3 4.9v4.22a2.07 2.07 0 0 1-4.14 0c0-1.14.93-2.07 2.07-2.07q.3 0 .57.09v-1.26l-3.35.91v3.21l-.01.03a2.1 2.1 0 0 1-2.07 2.05 2.08 2.08 0 0 1 0-4.15q.3 0 .58.09v-3.35c0-.86.54-1.56 1.36-1.78l2.65-.73c.85-.23 1.39-.01 1.69.22s.65.68.65 1.57z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMusicLibrary3;
