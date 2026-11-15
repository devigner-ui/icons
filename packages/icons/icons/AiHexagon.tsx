import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiHexagon = forwardRef<SVGSVGElement, IconProps>(function IconAiHexagon(
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
            d="M20.95 9.06q.06 1 .05 2.54v.8c0 2.41 0 3.61-.56 4.6-.55.99-1.57 1.6-3.6 2.8l-.68.4C14.13 21.4 13.1 22 12 22s-2.13-.6-4.16-1.8l-.1-.05M5.7 18.9c-1.1-.68-1.73-1.2-2.13-1.91-.55-.99-.56-2.19-.56-4.6v-.8c0-2.4 0-3.61.56-4.6.55-.99 1.57-1.59 3.6-2.8l.68-.4C9.87 2.6 10.9 2 12 2c.85 0 1.66.36 2.92 1.08"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M20.95 9.06q.06 1 .05 2.54v.8c0 2.41 0 3.61-.56 4.6-.55.99-1.57 1.6-3.6 2.8l-.68.4C14.13 21.4 13.1 22 12 22s-2.13-.6-4.16-1.8l-.68-.4c-2.03-1.2-3.05-1.81-3.6-2.8S3 14.81 3 12.4v-.8c0-2.4 0-3.61.56-4.6.55-.99 1.57-1.59 3.6-2.8l.68-.4C9.87 2.6 10.9 2 12 2c.85 0 1.66.36 2.92 1.08"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M14.79 3.01c3.04 1.62 6.05 2.89 6.16 6.34l.01.32.01.34v4.33l-.02.32-.04.58-.07.5-.1.47-.13.4-.18.4-.24.35-.28.33-.34.32-.4.31-.46.33-.26.17-.29.18-.3.18-.32.2-.34.2-.37.22-.7.4-.37.22-.34.2-.33.2-.3.17-.3.16-.27.15-.5.25-.47.2-.44.14-.41.08-.42.03-.42-.03-.42-.08-.43-.14-.47-.2-.5-.25-.28-.15-.29-.16-.3-.18-.33-.19-.34-.2-.37-.22-.7-.4-.37-.22-.34-.2-.32-.2-.3-.18-.29-.18-.26-.17-.47-.33-.4-.31-.33-.32-.29-.33-.23-.36-.18-.38-.14-.41-.1-.46-.06-.51-.04-.58-.01-.32-.01-.34v-.36l-.01-.39v-3.24L3 9.67v-.32l.05-.58.06-.51.1-.46.14-.41.18-.39.23-.35.29-.33.33-.31.4-.32.47-.33.26-.17.28-.17.3-.2.33-.19.34-.2.37-.23.7-.4.36-.22.35-.2.32-.2.31-.17.29-.16.27-.15.51-.25.47-.2.43-.14.42-.08.42-.03.42.03.41.08.44.14.46.2.51.25.27.15z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M11.98 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
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
            d="M14.79 3.01c3.04 1.62 6.05 2.89 6.16 6.34l.01.32.01.34v4.33l-.02.32-.04.58-.07.5-.1.47-.13.4-.18.4-.24.35-.28.33-.34.32-.4.31-.46.33-.26.17-.29.18-.3.18-.32.2-.34.2-.37.22-.7.4-.37.22-.34.2-.33.2-.3.17-.3.16-.27.15-.5.25-.47.2-.44.14-.41.08-.42.03-.42-.03-.42-.08-.43-.14-.47-.2-.5-.25-.28-.15-.29-.16-.3-.18-.33-.19-.34-.2-.37-.22-.7-.4-.37-.22-.34-.2-.32-.2-.3-.18-.29-.18-.26-.17-.47-.33-.4-.31-.33-.32-.29-.33-.23-.36-.18-.38-.14-.41-.1-.46-.06-.51-.04-.58-.01-.32-.01-.34v-.36l-.01-.39v-3.24L3 9.67v-.32l.05-.58.06-.51.1-.46.14-.41.18-.39.23-.35.29-.33.33-.31.4-.32.47-.33.26-.17.28-.17.3-.2.33-.19.34-.2.37-.23.7-.4.36-.22.35-.2.32-.2.31-.17.29-.16.27-.15.51-.25.47-.2.43-.14.42-.08.42-.03.42.03.41.08.44.14.46.2.51.25.27.15zM8.22 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
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

export default IconAiHexagon;
