import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiFilter = forwardRef<SVGSVGElement, IconProps>(function IconAiFilter(
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
            d="M21.97 7.72q-.04.45-.23.77c-.26.43-.73.7-1.68 1.23l-2.91 1.64q-.63.32-1.19.74-.7.6-.9 1.49c-.06.28-.06.62-.06 1.28v2.67c0 1.91 0 2.87-.67 3.28-.67.42-1.6.05-3.48-.68-.9-.35-1.35-.52-1.6-.88-.25-.35-.25-.8-.25-1.72v-2.67c0-.66 0-1-.06-1.28a2.7 2.7 0 0 0-.9-1.5c-.23-.19-.55-.37-1.18-.73l-.83-.46M3.94 9.72zC3 9.2 2.52 8.92 2.26 8.5S2 7.54 2 6.5v-.69"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.98 3H5c-1.41 0-2.12 0-2.56.41S2 4.5 2 5.81"
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
            d="M21.97 7.72q-.04.45-.23.77c-.26.43-.73.7-1.68 1.23l-2.91 1.64q-.63.32-1.19.74-.7.6-.9 1.49c-.06.28-.06.62-.06 1.28v2.67c0 1.91 0 2.87-.67 3.28-.67.42-1.6.05-3.48-.68-.9-.35-1.35-.52-1.6-.88-.25-.35-.25-.8-.25-1.72v-2.67c0-.66 0-1-.06-1.28a2.7 2.7 0 0 0-.9-1.5c-.23-.19-.55-.37-1.18-.73L3.94 9.72C3 9.2 2.52 8.92 2.26 8.5S2 7.54 2 6.5v-.69M14.98 3H5c-1.41 0-2.12 0-2.56.41S2 4.5 2 5.81"
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
            d="M15.78 3c1.21 0 .98 2.24.12 3.1l-7.08 7.08-.15-.3-.18-.28-.21-.26-.24-.24-.57-.4-.61-.34-2.92-1.64-.33-.18-.3-.17-.25-.15-.22-.15-.18-.14-.16-.14-.13-.14-.11-.15-.09-.16-.06-.18-.05-.2-.03-.23-.02-.25v-.29L2 6.87V4.94l.02-.36.03-.31.06-.27.07-.23.11-.2.15-.16.18-.13.2-.1.25-.08.28-.05.33-.03.38-.01L4.5 3z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.9 6.1c1.52-1.52 6.04 2.57 4.16 3.62l-2.92 1.64-.22.12-.2.12-.17.1-.15.09-.25.15-.2.15-.31.32-.26.36-.19.4-.13.42-.04.22-.01.28v.16l-.01.18v4.08l-.01.29-.01.26-.02.25-.04.43-.08.36-.12.3-.17.24-.1.1-.12.08-.27.12-.3.05-.33-.01-.39-.07-.21-.06-.23-.07-.25-.08-.26-.1-.28-.1-.3-.1-.32-.13-.34-.13-.32-.13-.27-.1-.24-.11-.21-.1-.18-.1-.15-.1-.12-.12-.1-.12-.1-.14-.05-.15-.05-.17-.03-.2-.02-.21v-3.95l-.01-.2v-.15l-.02-.28-.04-.23-.12-.4z"
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
            d="M22 6.5v.69l-.02.28-.01.25-.04.23-.04.2-.07.17-.08.17-.1.15-.14.15-.16.14-.18.14-.22.14-.26.15-.29.17-.33.19-2.92 1.64-.22.12-.2.12-.17.1-.15.09-.25.15-.2.15-.31.32-.26.36-.19.4-.13.42-.04.22-.01.28v.16l-.01.18v4.08l-.01.29-.01.26-.02.25-.04.43-.08.36-.12.3-.17.24-.1.1-.12.08-.27.12-.3.05-.33-.01-.39-.07-.21-.06-.23-.07-.25-.08-.26-.1-.28-.1-.3-.1-.32-.13-.34-.13-.32-.13-.27-.1-.24-.11-.21-.1-.18-.1-.15-.1-.12-.12-.1-.12-.1-.14-.05-.15-.05-.17-.03-.2-.02-.21v-3.96L9 14.24v-.16l-.02-.27-.04-.22-.13-.43-.2-.4-.25-.35-.32-.31-.19-.15-.25-.16-.15-.1-.17-.1-.2-.1-.22-.13-2.92-1.64-.33-.19-.3-.17-.25-.15-.22-.14-.18-.14-.16-.14-.13-.15-.1-.15-.1-.17-.06-.18-.04-.2-.03-.22-.02-.25L2 7.2V4.94l.01-.36.04-.3L2.1 4l.08-.23.1-.2.15-.16.18-.14.2-.1.25-.07.29-.05.33-.03.38-.01L4.5 3h11.28a2 2 0 0 0 1.05 3.48c.58.05.49.04.57.12s.07 0 .12.57a2 2 0 0 0 3.96 0c.06-.58.04-.49.12-.57s.01-.07.4-.1z"
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

export default IconAiFilter;
