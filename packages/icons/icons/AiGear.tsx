import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiGear = forwardRef<SVGSVGElement, IconProps>(function IconAiGear(
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
            d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M2 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85a1.9 1.9 0 0 1 .7-2.59l1.73-.99c.8-.46 1.82-.2 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19c.34-.58.97-.88 1.6-.82m5.2 6.7c.83.2 1.45.96 1.45 1.85v1.76a1.9 1.9 0 0 1-1.9 1.9c-1.81 0-2.55 1.28-1.64 2.85.52.9.2 2.07-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19a1.67 1.67 0 0 1-2.28.6l-1.13-.65m-1.53-1.7c-.06-.41.01-.85.23-1.23.91-1.57.17-2.85-1.64-2.85a1.9 1.9 0 0 1-1.9-1.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M2 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85a1.9 1.9 0 0 1 .7-2.59l1.73-.99c.8-.46 1.82-.2 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19c.34-.58.97-.88 1.6-.82m5.2 6.7c.83.2 1.45.96 1.45 1.85v1.76a1.9 1.9 0 0 1-1.9 1.9c-1.81 0-2.55 1.28-1.64 2.85.52.9.2 2.07-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19a1.67 1.67 0 0 1-2.28.6l-1.73-.99a1.9 1.9 0 0 1-.7-2.59c.91-1.57.17-2.85-1.64-2.85a1.9 1.9 0 0 1-1.9-1.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            <path d="M18 2a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.09 2.58c3.43-.55 2.73 5.09 5.76 6.79l.32.18.28.24.24.28.17.32.11.36.03.19.01.19v1.96l-.04.18-.1.36-.18.32-.24.28-.28.24-.32.17-.36.11-.18.03-.2.01-.33.02-.3.04-.27.07-.25.1-.21.12-.2.14-.15.16-.13.19-.1.2-.06.22-.03.23v.25l.05.27.08.27.11.28.15.3.16.34.08.37v.36l-.05.36-.13.34-.2.31-.25.28-.14.12-.17.1-1.73 1-.3.13-.32.08h-.32l-.32-.05-.3-.1-.27-.18-.25-.22-.2-.27-.1-.19-.18-.27-.19-.24-.2-.2-.2-.17-.22-.13-.21-.1-.22-.05-.23-.02-.22.02-.22.06-.22.09-.22.13-.2.16-.2.2-.2.25-.17.27-.1.2-.2.26-.25.23-.27.16-.3.11-.32.05H8.6l-.32-.08-.3-.14-1.74-.99-.16-.1-.15-.12-.25-.27-.2-.32-.12-.34-.06-.36v-.36l.09-.37.15-.35.15-.29.12-.28.07-.27.05-.27v-.24l-.03-.24-.06-.22-.1-.2-.12-.19-.16-.16-.2-.14-.2-.12-.25-.1-.28-.07-.3-.04-.33-.02h-.2l-.18-.04-.36-.1-.32-.18-.28-.23-.23-.29-.18-.32-.1-.36-.04-.18-.01-.21v-1.76l.01-.2.03-.18.11-.36.18-.32.23-.28.28-.23.32-.18.36-.11.19-.03.2-.01.32-.02.3-.04.27-.07.25-.1.22-.12.19-.14.15-.16.13-.19.1-.2.06-.22.03-.23v-.25l-.05-.26-.08-.28-.1-.28-.16-.3-.16-.34-.08-.37V5.3l.05-.36.13-.34.2-.31.25-.28.15-.12.16-.1 1.73-1 .3-.13.33-.07.32-.01.31.05.3.1.28.18.24.22.2.27.11.19.18.28.18.24.2.2.2.16.22.13.22.1.22.05.22.02.22-.02.23-.06.21-.09.22-.13.2-.16.2-.2.2-.24.17-.28.11-.19.2-.27.24-.22.28-.17.3-.11z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12 15.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5"
            fill="currentColor"
          />
          <path
            d="M19.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
            <path d="M18 2a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M15.07 2.57c3.43-.55 2.71 5.13 5.76 6.79l.33.18.29.23.24.3.18.32.1.36.04.37v1.76l-.01.2-.03.18-.11.36-.17.32-.24.28-.28.24-.32.17-.36.11-.19.03-.2.01-.32.02-.3.04-.27.07-.25.1-.22.12-.19.14-.15.16-.13.19-.1.2-.06.22-.03.24v.24l.05.27.08.27.1.28.16.3.16.34.08.37v.36l-.05.36-.13.34-.2.31-.25.28-.15.12-.16.1-1.73 1-.3.13-.33.07-.32.01-.31-.05-.3-.1-.28-.18-.24-.22-.2-.27-.11-.19-.18-.28-.19-.23-.2-.2-.2-.17-.22-.13-.22-.1-.22-.05-.22-.02-.22.02-.22.06-.22.09-.22.13-.2.16-.2.2-.18.24-.18.28-.11.2-.2.26-.24.22-.28.17-.3.11-.31.06-.33-.01-.31-.08-.31-.14-1.73-.99-.16-.1-.15-.12-.25-.28-.2-.3-.12-.35-.07-.36.01-.36.08-.37.16-.35.15-.29.12-.28.07-.28.04-.26v-.25l-.02-.23-.06-.22-.1-.2-.13-.19-.15-.16-.2-.15-.21-.12-.25-.1-.27-.06-.3-.04-.33-.02h-.2l-.18-.04-.36-.11-.32-.18-.28-.23-.23-.28-.18-.32-.11-.36-.03-.19-.01-.19v-1.76l.01-.2.03-.18.11-.36.18-.32.23-.28.28-.24.32-.17.36-.11.19-.03.2-.01.32-.02.3-.04.27-.07.25-.1.22-.12.19-.14.15-.16.13-.19.1-.2.06-.22.03-.23v-.25l-.05-.26-.07-.27-.12-.28-.15-.3-.15-.33-.09-.37-.01-.37.06-.37.13-.35.2-.31.26-.27.3-.22 1.73-1 .3-.13.31-.07.32-.02.33.06.3.11.28.17.23.22.19.27.11.19.18.28.19.23.2.2.2.17.22.13.22.1.22.05.22.02.22-.02.22-.06.22-.09.22-.13.2-.16.2-.2.18-.24.18-.28.11-.19.2-.27.24-.22.28-.17.3-.11zM12 15.25a3.26 3.26 0 0 1 0-6.5 3.26 3.26 0 0 1 0 6.5"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiGear;
