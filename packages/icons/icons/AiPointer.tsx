import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiPointer = forwardRef<SVGSVGElement, IconProps>(function IconAiPointer(
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
            d="m14.86 16.5-2.46-2.46-.75.75c-.77.77-1.16 1.15-1.57 1.06s-.6-.6-.98-1.62l-1.25-3.4c-.76-2.04-1.13-3.06-.6-3.59s1.54-.15 3.58.6l3.4 1.26c1.02.38 1.53.56 1.62.98s-.29.8-1.06 1.57l-.75.75 2.46 2.46c.25.25.38.38.44.52q.12.3 0 .6c-.06.14-.19.27-.44.52s-.38.38-.52.44a.8.8 0 0 1-.6 0 2 2 0 0 1-.52-.44"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2c1.67 0 3.04 0 4.19.07m5.74 5.74q.09 1.7.07 4.19c0 4.7 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22h-1.03m-2.4-.03c-2.53-.08-4.05-.38-5.11-1.43C2 19.07 2 16.7 2 12"
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
            d="m14.86 16.5-2.46-2.46-.75.75c-.77.77-1.16 1.15-1.57 1.06s-.6-.6-.98-1.62l-1.25-3.4c-.76-2.04-1.13-3.06-.6-3.59s1.54-.15 3.58.6l3.4 1.26c1.02.38 1.53.56 1.62.98s-.29.8-1.06 1.57l-.75.75 2.46 2.46c.25.25.38.38.44.52q.12.3 0 .6c-.06.14-.19.27-.44.52s-.38.38-.52.44a.8.8 0 0 1-.6 0 2 2 0 0 1-.52-.44"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2c1.67 0 3.04 0 4.19.07m5.74 5.74q.09 1.7.07 4.19c0 4.7 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
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
            d="M16.38 2.08a5.77 5.77 0 0 1 5.55 5.54l.03.62.02.65.01.7.01.76v4.06l-.02.7-.02.66-.03.61-.05.57-.06.54-.07.49-.1.46-.12.42-.14.4-.17.35-.2.34-.22.3-.26.3-.28.25-.31.23-.34.2-.36.16-.4.14-.42.12-.45.1-.5.07-.53.06-.57.05-.61.03-.66.02-.7.01-.75.01H9.6l-.7-.02-.66-.02-.62-.03-.57-.05-.53-.06-.5-.07-.45-.1-.42-.12-.4-.14-.36-.17-.33-.2-.31-.22-.29-.26-.25-.28-.23-.31-.2-.34-.16-.36-.14-.4-.12-.41-.1-.46-.08-.5-.06-.53-.04-.57-.03-.6-.02-.67-.02-.7v-1.55L2 12v-1.66l.01-.75.01-.7.03-.66.03-.62.04-.57.06-.53.08-.49.1-.45.11-.43.15-.39.16-.36.2-.33.22-.31.26-.29.29-.26.3-.22.34-.2.36-.16.4-.15.42-.11.46-.1.49-.08.53-.06.57-.04.61-.03.66-.03h.7l.75-.02h3.31l.76.01.7.01.66.03z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m12.4 14.04 2.46 2.46c.25.25.38.38.52.44q.3.12.6 0c.14-.06.27-.19.52-.44s.38-.38.44-.52a.8.8 0 0 0 0-.6 2 2 0 0 0-.44-.52l-2.46-2.46.75-.75c.77-.77 1.15-1.16 1.06-1.57s-.6-.6-1.62-.98l-3.4-1.25c-2.04-.76-3.06-1.13-3.59-.6s-.15 1.54.6 3.58l1.26 3.4c.38 1.02.56 1.53.98 1.62s.8-.29 1.57-1.06z"
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
            d="M16.38 2.08a5.77 5.77 0 0 1 5.55 5.54l.03.62.02.65.01.7.01.76v4.06l-.02.7-.02.66-.03.61-.05.57-.06.53-.07.5-.1.45-.12.43-.14.39-.17.36-.2.34-.22.3-.26.3-.28.25-.31.23-.34.2-.36.16-.4.14-.42.12-.45.1-.5.07-.53.06-.57.05-.61.03-.66.02-.7.01-.75.01H9.6l-.7-.02-.66-.02-.62-.03-.57-.05-.53-.06-.5-.08-.45-.1-.42-.11-.4-.14-.36-.17-.33-.2-.31-.22-.29-.26-.25-.28-.23-.31-.2-.34-.16-.36-.14-.4-.12-.42-.1-.45-.08-.5-.06-.53-.04-.57-.03-.61-.02-.66-.02-.7V9.6l.02-.7.02-.66.03-.62.04-.57.06-.53.08-.5.1-.45.12-.42.14-.4.17-.36.19-.33.23-.31.25-.29.29-.26.3-.22.34-.2.36-.16.4-.15.42-.11.46-.1.49-.08.53-.06.57-.04.61-.03.66-.03.7-.01h.75l.8-.01h2.51l.76.01.7.01.66.03zM12.4 14.04l2.46 2.46a2 2 0 0 0 .52.44q.3.12.6 0c.14-.06.27-.19.52-.44s.38-.38.44-.52a.8.8 0 0 0 0-.6 2 2 0 0 0-.44-.52l-2.46-2.46.75-.75c.77-.77 1.15-1.16 1.06-1.57s-.6-.6-1.62-.98l-3.4-1.25c-2.04-.76-3.06-1.13-3.59-.6s-.15 1.54.6 3.58l1.26 3.4c.38 1.02.56 1.53.98 1.62s.8-.29 1.57-1.06z"
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

export default IconAiPointer;
