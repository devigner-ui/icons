import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiGift = forwardRef<SVGSVGElement, IconProps>(function IconAiGift(
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
            d="M22 12H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 2v20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M13 12a4 4 0 0 0 4 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M11 12a4 4 0 0 1-4 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 10.04a3.25 3.25 0 0 1 2.46-3.15 2.2 2.2 0 0 1 2.65 2.65A3.25 3.25 0 0 1 13.96 12H12z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 10.04a3.25 3.25 0 0 0-2.46-3.15A2.2 2.2 0 0 0 6.9 9.54 3.25 3.25 0 0 0 10.04 12H12z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            opacity={duotone ? "0.4" : "1"}
            d="M22 12H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 2v20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M13 12a4 4 0 0 0 4 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M11 12a4 4 0 0 1-4 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 10.04a3.25 3.25 0 0 1 2.46-3.15 2.2 2.2 0 0 1 2.65 2.65A3.25 3.25 0 0 1 13.96 12H12z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 10.04a3.25 3.25 0 0 0-2.46-3.15A2.2 2.2 0 0 0 6.9 9.54 3.25 3.25 0 0 0 10.04 12H12z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
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
            d="M6.91 11.25H2v1.5h8.16A3.25 3.25 0 0 1 7 15.25a.75.75 0 0 0 0 1.5 4.8 4.8 0 0 0 4.25-2.63V22h1.5v-7.88A4.8 4.8 0 0 0 17 16.75a.75.75 0 0 0 0-1.5 3.25 3.25 0 0 1-3.16-2.5H22v-1.5h-4.91q.53-.67.75-1.53a2.94 2.94 0 0 0-3.56-3.56q-.87.22-1.53.75V2h-1.5v4.91a4 4 0 0 0-1.53-.75 2.94 2.94 0 0 0-3.56 3.56q.22.87.75 1.53m4.34 0H10a2.5 2.5 0 0 1-2.39-1.9 1.44 1.44 0 0 1 1.75-1.74A2.5 2.5 0 0 1 11.25 10zm2.75 0h-1.25v-1.24a2.5 2.5 0 0 1 1.9-2.4c1.05-.26 2 .7 1.74 1.75A2.5 2.5 0 0 1 14 11.25"
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
            d="M11.25 2c-4.22 0-6.4.08-7.79 1.46C2.08 4.85 2 7.03 2 11.25h4.91a4 4 0 0 1-.75-1.53 2.94 2.94 0 0 1 3.56-3.56q.87.22 1.53.75z"
            fill="currentColor"
          />
          <path
            d="M2 12.75c0 4.22.08 6.4 1.46 7.79C4.85 21.92 7.03 22 11.25 22v-7.88A4.8 4.8 0 0 1 7 16.75a.75.75 0 0 1 0-1.5 3.25 3.25 0 0 0 3.16-2.5z"
            fill="currentColor"
          />
          <path
            d="M12.75 22c4.22 0 6.4-.08 7.79-1.46 1.38-1.39 1.46-3.57 1.46-7.79h-8.16a3.25 3.25 0 0 0 3.16 2.5.75.75 0 0 1 0 1.5 4.8 4.8 0 0 1-4.25-2.63z"
            fill="currentColor"
          />
          <path
            d="m17.93 8.96-.03-.37-.08-.37-.12-.35-.17-.33-.21-.32-.26-.29-.28-.25-.32-.21-.33-.17-.36-.12-.36-.08-.38-.03-.37.02-.38.07-.42.13-.4.17-.36.2-.35.25V2h1.49l.68.01.63.02.6.03a6 6 0 0 1 5.79 5.79l.03.6.02.63v.68l.01.72v.77h-4.91l.25-.34.2-.37.17-.4.13-.42.07-.38z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M9.36 7.61a2.5 2.5 0 0 1 1.89 2.42v1.22h-1.22a2.5 2.5 0 0 1-2.42-1.9 1.44 1.44 0 0 1 1.75-1.74"
            fill="currentColor"
          />
          <path
            d="M12.75 10.03v1.22h1.21a2.5 2.5 0 0 0 2.43-1.9 1.44 1.44 0 0 0-1.75-1.74 2.5 2.5 0 0 0-1.89 2.42"
            fill="currentColor"
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

export default IconAiGift;
