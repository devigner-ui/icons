import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiHome = forwardRef<SVGSVGElement, IconProps>(function IconAiHome(
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
            d="M21.7 8.3c.3.87.3 1.99.3 3.9v1.53c0 3.9 0 5.85-1.17 7.06S17.77 22 14 22h-3.32m-2.4 0c-2.65-.03-4.13-.2-5.11-1.21C2 19.58 2 17.63 2 13.73V12.2c0-2.28 0-3.43.52-4.38S3.99 6.3 5.88 5.11l2-1.24C9.88 2.62 10.9 2 12 2c.85 0 1.65.37 2.9 1.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M21.7 8.3c.3.87.3 1.99.3 3.9v1.53c0 3.9 0 5.85-1.17 7.06S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.21S2 17.63 2 13.73V12.2c0-2.28 0-3.43.52-4.38S3.99 6.3 5.88 5.11l2-1.24C9.88 2.62 10.9 2 12 2c.85 0 1.65.37 2.9 1.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M14.78 3.05c2.91 1.66 5.84 1.96 6.87 5.14l.13.4.1.44.06.49.03.55.02.3v.32l.01.34v4.7l-.01.58-.02.55-.03.5-.03.48-.05.43-.06.41-.08.38-.1.35-.1.32-.14.3-.16.27-.18.26-.2.23-.23.22-.25.18-.27.17-.29.13-.3.12-.35.1-.36.08-.4.06-.42.05-.46.04-.49.03-.52.02h-.56l-.6.01H8.07l-.57-.01-.52-.02-.5-.03-.45-.04-.42-.05-.4-.06-.36-.08-.34-.1-.31-.12-.3-.13-.26-.17-.25-.18-.22-.22-.21-.23-.18-.26-.16-.27-.13-.3-.11-.32-.1-.35-.08-.38-.06-.4-.05-.45-.03-.47-.03-.5-.01-.55-.02-.58v-5.04l.02-.32v-.3l.05-.56.06-.49.09-.43.13-.4.17-.37.22-.34.26-.31.31-.3.38-.31.43-.32.25-.16.26-.18.28-.18.3-.19.33-.2.34-.22 2-1.24.36-.22.35-.22.32-.2.3-.18.3-.16.26-.16.5-.26.47-.2.43-.15.42-.09L12 2l.41.03.42.09.43.15.46.2.5.26.28.16z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M11.25 18a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0z"
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
            d="M14.78 3.05c2.86 1.74 5.84 1.96 6.87 5.14l.13.4.1.43.05.5.04.54.01.3.01.33v.71l.01.39v3.94l-.02.58-.01.54-.03.5-.04.48-.04.44-.07.4-.07.38-.1.35-.11.32-.14.3-.15.28-.18.25-.2.24-.24.21-.24.19-.27.16-.29.14-.31.12-.34.1-.36.08-.4.06-.42.05-.46.04-.49.02-.52.02-.57.01-.6.01H8.07l-.56-.02-.53-.02-.49-.02-.45-.04-.43-.05-.4-.06-.36-.08-.33-.1-.32-.12-.29-.14-.26-.16L3.4 21l-.23-.2-.2-.25-.18-.25-.16-.28-.13-.3-.12-.32-.1-.35-.07-.37-.06-.41-.05-.44-.03-.47-.03-.5-.02-.55v-.58L2 15.1v-4.4l.01-.33.01-.3.04-.55.06-.49.1-.44.12-.4.18-.36.22-.35.26-.32.31-.3.37-.3.44-.32.24-.17.27-.17.28-.18.3-.2.32-.2.35-.21 2-1.24.36-.23.35-.2.32-.2.3-.19.3-.17.27-.15.5-.26.46-.2.43-.15.42-.1.4-.02.42.03.41.09.44.14.46.2.5.27.28.15zM11.25 18a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0z"
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

export default IconAiHome;
