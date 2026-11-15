import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiBulb = forwardRef<SVGSVGElement, IconProps>(function IconAiBulb(
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
     shape as AiClipboard: a 1.5 circle round each tip, joined by small
     curves, so the gap matches across the AI icons. */
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
            d="M4.5 9.5a7.5 7.5 0 0 1 10.7-6.78m4.3 6.78a7.5 7.5 0 0 1-2.5 5.59q-.96.8-1.83 1.7c-.49.6-.5.64-.63 1.4-.04.24-.04.6-.04 1.31 0 .93 0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.82.2-1.75.2s-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55c-.2-.35-.2-.82-.2-1.75v-.32m-.57-2.27-.1-.13c-.15-.19-.71-.69-1.83-1.7A7.5 7.5 0 0 1 4.5 9.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 19.5h-5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 17v-2m0 0a2 2 0 0 0 1.73-1M12 15a2 2 0 0 1-1.73-1"
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
            d="M4.5 9.5a7.5 7.5 0 0 1 10.7-6.78m4.3 6.78a7.5 7.5 0 0 1-2.5 5.59q-.96.8-1.83 1.7c-.49.6-.5.64-.63 1.4-.04.24-.04.6-.04 1.31 0 .93 0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.82.2-1.75.2s-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55c-.2-.35-.2-.82-.2-1.75 0-.71 0-1.07-.04-1.3-.12-.77-.14-.82-.63-1.42-.15-.19-.71-.69-1.83-1.7A7.5 7.5 0 0 1 4.5 9.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.5 19.5h-5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 17v-2m0 0a2 2 0 0 0 1.73-1M12 15a2 2 0 0 1-1.73-1"
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
            d="M15.6 2.96c2.72 1.34 3.97 3.69 3.9 6.72l-.01.42-.03.42-.06.4-.07.41-.1.4-.12.39-.13.38-.16.36-.17.36-.19.35-.2.34-.22.32-.24.31-.25.3-.27.28-.28.27-1.58 1.5-.08.1-.07.08-.1.12-.05.09-.03.05-.02.06-.02.1-.03.15-.02.1-.02.13-.01.14v.1l-.01.1v.8l-.01.56-.02.5-.02.22-.05.22-.08.23-.1.22-.15.23-.18.2-.2.18-.22.15-.2.1-.23.08-.21.05-.23.02-.22.02h-.25l-.27.01h-.9l-.25-.02h-.23l-.22-.03-.23-.05-.2-.08-.22-.1-.22-.15-.2-.18-.18-.21-.15-.23-.1-.21-.08-.22-.05-.23-.02-.24-.01-.22v-.25l-.01-.27v-1.2l-.01-.1-.02-.13L9 17.6l-.08-.27-.14-.23-.18-.2v-.02l-.13-.13-.3-.29L7 15.4l-.29-.28-.28-.3-.25-.3-.25-.33-.22-.33-.2-.34-.2-.35-.16-.36-.15-.37-.13-.38-.12-.38-.09-.4-.07-.39-.05-.4-.03-.4-.01-.42v-.39l.03-.38.11-.76.18-.73.25-.7.31-.66.37-.63.43-.59.49-.54.53-.5.58-.44.62-.39.66-.32.7-.27.71-.2.76-.12.38-.03.4-.02.38.02.39.03.75.13.72.2.7.26z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M10.8 13.62a.75.75 0 1 0-1.3.76c.35.6.94 1.07 1.63 1.27V17a.75.75 0 0 0 1.5 0v-1.35c.7-.2 1.28-.66 1.63-1.27a.75.75 0 0 0-1.3-.76 1.25 1.25 0 0 1-2.16 0"
            fill="currentColor"
          />
          <path
            d="M10.41 19.67h3.17v.26a1 1 0 0 1-.08.33q-.1.16-.25.25a1 1 0 0 1-.32.07q-.3.03-.93.02c-.44 0-.72 0-.93-.02a1 1 0 0 1-.32-.07 1 1 0 0 1-.25-.25 1 1 0 0 1-.07-.33z"
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
            d="M15.61 2.96A6.6 6.6 0 0 1 19.5 9.3v.78l-.04.41-.05.4-.07.4-.1.38-.1.39-.14.37-.15.37-.16.36-.2.35-.2.35-.22.33-.24.32-.26.3-.28.3-.29.28-1.16 1.07-.42.42-.08.1-.07.09-.1.12-.05.08-.03.06-.02.06-.02.1-.03.15-.02.1-.02.13-.01.14v.09l-.01.11v.8l-.01.56-.02.49-.02.23-.05.22-.08.23-.1.22-.15.23-.18.2-.2.18-.22.15-.21.1-.22.08-.21.05-.23.02-.22.02h-.25l-.27.01h-.9l-.25-.02-.23-.01-.23-.02-.22-.05-.21-.08-.2-.1-.23-.15-.2-.18-.18-.21-.15-.23-.1-.21-.08-.23-.05-.23-.02-.23-.01-.22v-.25l-.01-.27v-1.2l-.01-.1-.02-.13L9 17.6l-.08-.27-.14-.23-.18-.21v-.01l-.13-.13-.3-.29L7 15.39l-.29-.28-.28-.3-.26-.3-.24-.33-.22-.33-.2-.34-.2-.35-.16-.36-.15-.37-.14-.38-.1-.39-.1-.39-.07-.4-.05-.4-.03-.4v-.79l.02-.38.11-.76.18-.73.25-.7.31-.66.37-.63.43-.59.49-.54.53-.5.58-.44.62-.39.66-.32.7-.27.72-.2.75-.12.38-.03L12 2l.39.02.39.03.75.12.72.2.7.26zm-5.2 16.72.02.25c.02.21.05.29.07.33q.1.15.25.25c.04.02.11.05.32.07l.93.02c.63 0 .72 0 .93-.02q.29-.03.32-.07.15-.1.25-.25.06-.17.07-.33l.01-.25zm3.58-6.33a.75.75 0 0 0-1.03.28 1.25 1.25 0 0 1-2.16 0 .75.75 0 0 0-1.3.75c.35.6.94 1.07 1.63 1.27V17a.75.75 0 0 0 1.5 0v-1.35a2.8 2.8 0 0 0 1.63-1.27.75.75 0 0 0-.27-1.03"
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

export default IconAiBulb;
