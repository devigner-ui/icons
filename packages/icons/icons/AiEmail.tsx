import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiEmail = forwardRef<SVGSVGElement, IconProps>(function IconAiEmail(
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

  /* Bold and Bulk cut the body around the sparkle with the same rounded
     shape as AiClipboard, so the gap matches across the AI icons. */
  const cut = useId();

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
            d="M2 12c0 3.77 0 5.66 1.17 6.83S6.23 20 10 20h4.55m7.34-3.92C22 15.03 22 13.7 22 12c0-3.77 0-5.66-1.17-6.83S17.77 4 14 4h-3.19m-2.4 0c-2.74.03-4.25.18-5.24 1.17C2 6.34 2 8.23 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m6 8 2.16 1.8C10 11.33 10.9 12.1 12 12.1s2-.77 3.84-2.3L18 8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 17.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M2 12c0 3.77 0 5.66 1.17 6.83S6.23 20 10 20h4.55m7.34-3.92C22 15.03 22 13.7 22 12c0-3.77 0-5.66-1.17-6.83S17.77 4 14 4h-4C6.23 4 4.34 4 3.17 5.17S2 8.23 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m6 8 2.16 1.8C10 11.33 10.9 12.1 12 12.1s2-.77 3.84-2.3L18 8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 17.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M18 17a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.69 20c3.22.05 6.93-.82 7.21-4.03l.04-.46.02-.49.02-.53.01-.56v-.6l.01-.64v-2.62l-.02-.56-.02-.53-.02-.49-.04-.45-.04-.43-.07-.4-.07-.36-.1-.34-.11-.3-.14-.3-.15-.26-.18-.25-.2-.23-.24-.2-.24-.19-.27-.15-.29-.14-.31-.1-.34-.1-.36-.08-.4-.06-.42-.05-.46-.04-.49-.02-.52-.02-.57-.01H8.07l-.56.01-.53.02-.49.02-.45.04-.43.05-.4.06-.36.08-.33.1-.32.1-.29.14-.26.15-.25.18-.23.21-.2.23-.18.25-.16.26-.13.3-.12.3-.1.34-.07.37-.06.4-.05.42-.04.45-.02.5-.02.52v.56l-.01.6v3.26l.01.56.02.53.03.49.03.46.05.42.06.4.08.36.1.34.1.31.14.29.16.27.18.24.2.23.23.2.25.19.26.15.3.14.3.11.34.1.37.07.4.06.42.05.45.04.5.02.52.02.56.01H14z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M18.72 8.42a.8.8 0 0 0 .1-1.13.76.76 0 0 0-1.1-.1L15.5 9.12c-.97.83-1.64 1.4-2.21 1.78-.55.37-.92.5-1.28.5s-.73-.13-1.28-.5a26 26 0 0 1-2.2-1.78L6.28 7.19a.76.76 0 0 0-1.1.1.8.8 0 0 0 .1 1.13l2.28 1.97c.92.79 1.66 1.43 2.32 1.87.68.45 1.35.74 2.12.74s1.44-.29 2.12-.74c.66-.44 1.4-1.08 2.32-1.87z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 16.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M18 17a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M15.16 19.99c3.06 0 6.47-.98 6.74-4.03l.04-.45.03-.5.01-.52.01-.56v-.6l.01-.65v-2.61l-.02-.56-.01-.53-.03-.49-.04-.46-.04-.42-.07-.4-.07-.36-.1-.34-.11-.31-.14-.29-.15-.27-.18-.24-.2-.23-.24-.2-.24-.19-.27-.15-.29-.14-.31-.11-.34-.1-.36-.07-.4-.06-.42-.05-.46-.04-.49-.02-.52-.02-.57-.01H7.51l-.53.03-.49.02-.45.04-.43.05-.4.06-.36.07-.33.1-.32.11-.29.14-.26.15-.25.18-.23.2-.2.24-.18.24-.16.27-.13.29-.12.31-.1.34-.07.37-.06.39-.05.42-.03.46-.03.49-.02.53v.56l-.01.6v3.26l.01.56.02.53.03.49.03.45.05.43.06.4.08.36.1.33.1.32.14.29.16.26.18.25.2.23.23.21.25.18.26.15.3.14.3.1.34.1.37.08.4.06.41.05.46.04.5.02.52.02.56.01zm3.41-12.47c.27.32.23.8-.09 1.06l-2.2 1.83c-.88.74-1.6 1.33-2.24 1.74-.66.43-1.3.7-2.04.7a3.7 3.7 0 0 1-2.04-.7c-.64-.4-1.36-1-2.24-1.74l-2.2-1.83a.75.75 0 1 1 .96-1.16l2.16 1.8c.93.78 1.58 1.32 2.13 1.67.53.34.88.46 1.23.46s.7-.12 1.23-.46c.55-.35 1.2-.89 2.13-1.67l2.16-1.8a.75.75 0 0 1 1.06.1"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 16.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiEmail;
