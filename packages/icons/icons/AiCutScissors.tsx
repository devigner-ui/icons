import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCutScissors = forwardRef<SVGSVGElement, IconProps>(function IconAiCutScissors(
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
            d="M14.5 17.1 8 6m10 10.2c0 1-.84 1.8-1.87 1.8s-1.88-.8-1.88-1.8.84-1.8 1.88-1.8c1.03 0 1.87.8 1.87 1.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m9.5 17.1 6.13-10.46M6 16.2c0 1 .84 1.8 1.88 1.8 1.03 0 1.87-.8 1.87-1.8s-.84-1.8-1.87-1.8S6 15.2 6 16.2"
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
            d="M14.5 17.1 8 6m10 10.2c0 1-.84 1.8-1.87 1.8s-1.88-.8-1.88-1.8.84-1.8 1.88-1.8c1.03 0 1.87.8 1.87 1.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m9.5 17.1 6.13-10.46M6 16.2c0 1 .84 1.8 1.88 1.8 1.03 0 1.87-.8 1.87-1.8s-.84-1.8-1.87-1.8S6 15.2 6 16.2"
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
            d="M15.35 5.62c.3-.51 1.56.31 1.26.82l-3.74 6.39 1.11 1.9.2-.24.21-.2.25-.2.26-.15.29-.12.3-.1.31-.05.33-.02.26.01.26.04.25.06.24.08.23.11.21.13.2.14.2.16.16.18.15.2.14.21.1.22.1.24.07.25.04.25.01.27-.02.26-.04.26-.07.24-.1.24-.1.22-.14.21-.15.2-.17.18-.18.17-.2.14-.22.13-.22.1-.24.09-.25.06-.26.04h-.26l-.36-.01-.35-.07-.33-.11-.32-.16-.29-.2-.26-.23-.23-.27-.2-.3L12 14.3l-1.8 3.08-.18.3-.22.26-.26.23-.29.2-.31.15-.34.12-.35.07-.36.03-.27-.02-.25-.03-.25-.07-.24-.08-.23-.1-.22-.13-.2-.15-.2-.16-.16-.18-.16-.2-.13-.2-.11-.23-.1-.23-.06-.25-.04-.26-.01-.26.02-.27.04-.25.07-.25.09-.24.11-.22.14-.21.15-.2.17-.18.18-.16.2-.15.22-.13.23-.1.24-.09.25-.06.25-.03.27-.01.31.02.3.05.3.1.28.12.27.15.25.18.22.22.2.24 1.12-1.9-3.78-6.45-.07-.14-.03-.15v-.14l.02-.14.05-.14.07-.12.1-.11.13-.1.14-.06.14-.03h.14l.15.02.13.05.13.07.1.1.1.13L12 11.35z"
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
            d="M16.38 2.08a5.77 5.77 0 0 1 5.55 5.54l.03.62.02.65.01.7.01.76v4.06l-.02.7-.02.66-.03.61-.05.57-.06.53-.07.5-.1.45-.12.43-.14.39-.17.36-.2.34-.22.3-.26.3-.28.25-.31.23-.34.2-.36.16-.4.14-.42.12-.45.1-.5.07-.53.06-.57.05-.61.03-.66.02-.7.01-.75.01H9.6l-.7-.02-.66-.02-.62-.03-.57-.05-.53-.06-.5-.08-.45-.1-.42-.11-.4-.14-.36-.17-.33-.2-.31-.22-.29-.26-.25-.28-.23-.31-.2-.34-.16-.36-.14-.4-.12-.42-.1-.45-.08-.5-.06-.53-.04-.57-.03-.61-.02-.66-.02-.7V9.6l.02-.7.02-.66.03-.62.04-.57.06-.53.08-.5.1-.45.12-.42.14-.4.17-.36.19-.33.23-.31.25-.29.29-.26.3-.22.34-.2.36-.16.4-.15.42-.11.46-.1.49-.08.53-.06.57-.04.61-.03.66-.03.7-.01h.75l.8-.01h2.51l.76.01.7.01.66.03zm-1.03 3.54c.3-.51 1.56.31 1.26.82l-3.74 6.39 1.11 1.9.2-.24.21-.2.25-.2.26-.15.29-.12.3-.1.31-.05.33-.02.26.01.26.04.25.06.24.08.23.11.21.13.2.14.2.16.16.18.15.2.14.21.1.22.1.24.07.25.04.25.01.27-.02.26-.04.26-.07.24-.1.24-.1.22-.14.21-.15.2-.17.18-.18.17-.2.14-.22.13-.22.1-.24.09-.25.06-.26.04h-.26l-.36-.01-.35-.07-.33-.11-.32-.16-.29-.2-.26-.23-.23-.27-.2-.3L12 14.3l-1.8 3.08-.18.3-.22.26-.26.23-.29.2-.31.15-.34.12-.35.07-.36.03-.27-.02-.25-.03-.25-.07-.24-.08-.23-.1-.22-.13-.2-.15-.2-.16-.16-.18-.16-.2-.13-.2-.11-.23-.1-.23-.06-.25-.04-.26-.01-.26.02-.27.04-.25.07-.25.09-.24.11-.22.14-.21.15-.2.17-.18.18-.16.2-.15.22-.13.23-.1.24-.09.25-.06.25-.03.27-.01.31.02.3.05.3.1.28.12.27.15.25.18.22.22.2.24 1.12-1.9-3.78-6.45-.07-.14-.03-.15v-.14l.02-.14.05-.14.07-.12.1-.11.13-.1.14-.06.14-.03h.14l.15.02.13.05.13.07.1.1.1.13L12 11.35z"
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

export default IconAiCutScissors;
