import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMusicLibraryBeamed = forwardRef<SVGSVGElement, IconProps>(
  function IconMusicLibraryBeamed(
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
            d="M21.8 18.74C21.23 21 19.45 22 17 22H7c-3 0-5-1.5-5-5v-2.35m.22-3.48A4 4 0 0 1 5 8.28Q5.9 8 7 8h10q1.1 0 2 .28c1.85.57 3 2.07 3 4.72v2.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 7v1.28A7 7 0 0 0 17 8H7q-1.1 0-2 .28V7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 3.51V5H8V3.51C8 2.68 8.68 2 9.51 2h4.98c.83 0 1.51.68 1.51 1.51Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.07 19.45a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.25 17.25v-5.17c0-1.1-.69-1.26-1.39-1.06l-2.65.72c-.48.13-.81.51-.81 1.06v5.33"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.93 18.57a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m10.4 14.35 4.85-1.32"
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
              d="M22 13v4c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-4c0-2.65 1.15-4.15 3-4.72Q5.9 8 7 8h10q1.1 0 2 .28c1.85.57 3 2.07 3 4.72"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 7v1.28A7 7 0 0 0 17 8H7q-1.1 0-2 .28V7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 3.51V5H8V3.51C8 2.68 8.68 2 9.51 2h4.98c.83 0 1.51.68 1.51 1.51"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M9.07 19.45a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.25 17.25v-5.17c0-1.1-.69-1.26-1.39-1.06l-2.65.72c-.48.13-.81.51-.81 1.06v5.33"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.93 18.57a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m10.4 14.35 4.85-1.32"
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
              d="M19 7v1.13A4 4 0 0 0 18 8H6q-.52 0-1 .13V7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 3.51V5H8V3.51C8 2.68 8.68 2 9.51 2h4.98c.83 0 1.51.68 1.51 1.51"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 12v6c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4v-6a4 4 0 0 1 4-4h12q.52 0 1 .13c1.72.45 3 2.02 3 3.87"
              fill="currentColor"
            />
            <path
              d="M15.35 10.51c-.3-.23-.84-.45-1.69-.22l-2.65.73a1.8 1.8 0 0 0-1.36 1.78v3.35a2.07 2.07 0 1 0 1.49 2l.01-.03v-3.21L14.5 14v1.26a2 2 0 0 0-.57-.09 2.07 2.07 0 0 0 0 4.14c1.14 0 2.07-.93 2.07-2.07v-5.17c0-.87-.36-1.33-.65-1.56m-6.28 8.2a.57.57 0 1 1 0-1.14.57.57 0 0 1 0 1.14m4.86-.89a.57.57 0 1 1 0-1.14.57.57 0 0 1 0 1.14"
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
              d="M17 4.75h-1V3.26c0-.83-.68-1.51-1.51-1.51H9.51C8.68 1.75 8 2.43 8 3.26v1.49H7a2 2 0 0 0-2 2v.13q.48-.13 1-.13h12q.52 0 1 .13v-.13a2 2 0 0 0-2-2"
              fill="currentColor"
            />
            <path
              d="M13.93 16.93a.57.57 0 1 0 0 1.14.57.57 0 0 0 0-1.14"
              fill="currentColor"
            />
            <path
              d="M9.07 17.81a.57.57 0 1 0 0 1.14.57.57 0 0 0 0-1.14"
              fill="currentColor"
            />
            <path
              d="M19 8.38a4 4 0 0 0-1-.13H6q-.52 0-1 .13c-1.72.45-3 2.02-3 3.87v6c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4v-6a4 4 0 0 0-3-3.87m-3 4.9v4.22a2.07 2.07 0 0 1-4.14 0c0-1.14.93-2.07 2.07-2.07q.3 0 .57.09v-1.26l-3.35.91v3.21l-.01.03a2.1 2.1 0 0 1-2.07 2.05 2.08 2.08 0 0 1 0-4.15q.3 0 .58.09v-3.35c0-.86.54-1.56 1.36-1.78l2.65-.73c.85-.23 1.39-.01 1.69.22s.65.68.65 1.57z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMusicLibraryBeamed;
