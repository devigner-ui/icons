import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiDirectboxReceive = forwardRef<SVGSVGElement, IconProps>(function IconAiDirectboxReceive(
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
            d="M12 2v8m0 0 3-3m-3 3L9 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 13h3.16c.9 0 1.36 0 1.76.18.4.19.69.53 1.28 1.22l.6.7c.6.7.89 1.03 1.28 1.22.4.18.85.18 1.76.18h.32c.9 0 1.36 0 1.76-.18.4-.19.69-.53 1.28-1.22l.6-.7c.6-.69.89-1.03 1.28-1.22.4-.18.85-.18 1.76-.18H22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M21.94 7.81Q22 9.51 22 12c0 4.7 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46c-1.05-1.06-1.34-2.58-1.43-5.1M2 13.05V12c0-4.7 0-7.07 1.46-8.54C4.28 2.65 5.37 2.3 7 2.13"
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
            d="M12 2v8m0 0 3-3m-3 3L9 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 13h3.16c.9 0 1.36 0 1.76.18.4.19.69.53 1.28 1.22l.6.7c.6.7.89 1.03 1.28 1.22.4.18.85.18 1.76.18h.32c.9 0 1.36 0 1.76-.18.4-.19.69-.53 1.28-1.22l.6-.7c.6-.69.89-1.03 1.28-1.22.4-.18.85-.18 1.76-.18H22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M21.94 7.81Q22 9.51 22 12c0 4.7 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.28 2.65 5.37 2.3 7 2.13"
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
            d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46c1.35-1.36 1.45-3.48 1.46-7.54h-3.16c-.9 0-1.36 0-1.76.18-.4.19-.69.53-1.28 1.22l-.6.7c-.6.7-.89 1.03-1.28 1.22-.4.18-.85.18-1.76.18h-.32c-.9 0-1.36 0-1.76-.18-.4-.19-.69-.53-1.28-1.22l-.6-.7c-.6-.69-.89-1.03-1.28-1.22-.4-.18-.85-.18-1.76-.18H2c0 4.06.1 6.18 1.46 7.54"
            fill="currentColor"
          />
          <path
            d="M12.53 11.33a.75.75 0 0 1-1.06 0l-3.3-3.3a.75.75 0 1 1 1.06-1.06l2.02 2.02V2h1.5v6.99l2.02-2.02a.75.75 0 1 1 1.06 1.06z"
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
            d="M12 11.15q.31 0 .53-.22l3-3a.75.75 0 0 0-1.06-1.06l-1.72 1.72V2.4a.75.75 0 0 0-1.5 0v6.19L9.53 6.87a.75.75 0 0 0-1.06 1.06l3 3q.22.22.53.22"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M3.46 20.94C4.93 22.4 7.3 22.4 12 22.4s7.07 0 8.54-1.46c1.27-1.27 1.43-3.22 1.46-6.79h-3.16c-.97 0-1.23.02-1.44.11-.22.1-.4.29-1.03 1.03l-.7.8a4 4 0 0 1-1.44 1.3c-.55.26-1.16.26-1.94.26h-.58c-.78 0-1.39 0-1.94-.25a5 5 0 0 1-1.45-1.3l-.7-.81c-.63-.74-.8-.93-1.02-1.03s-.47-.11-1.44-.11H2c.03 3.57.2 5.52 1.46 6.79"
            fill="currentColor"
          />
          <path
            d="M17.16 8.03c.65-1.74 4.68-1.86 4.77 0l.03.61.02.66.01.7v.75l.01.8v1.1h-3.79l-.48.03-.49.1-.47.13-.2.1-.19.13-.35.3-.34.35-.36.42-.7.81-.22.25-.18.2-.15.17-.12.13-.1.1-.1.07-.16.1-.18.06-.11.01-.15.02H13l-.23.02h-1.74l-.18-.02-.14-.01-.12-.02-.18-.06-.16-.1-.1-.07-.1-.1-.12-.13-.15-.17-.17-.2-.22-.25-.7-.82-.36-.41-.35-.36-.35-.3-.2-.12-.2-.11-.2-.08-.22-.07-.45-.07-.5-.03H2v-1.9l.01-.76.01-.7.03-.66.03-.61.04-.57.06-.53.08-.5.1-.45.11-.43.15-.4.16-.35.2-.34.22-.31.26-.29.23-.21.25-.2.27-.17.28-.15.3-.14.33-.11.35-.1.37-.09.39-.07.42-.06.44-.04.47-.04.5-.03.53-.02.57-.01h.6v2.87l-.38-.1L9 5.16l-.37.04-.36.09-.34.15-.32.2-.27.27-.24.3-.18.35-.11.36-.05.37v.37l.08.37.13.35.19.33.25.3 3 3 .17.15.18.13.2.11.2.1.2.07.21.05.22.03.21.01.22-.01.2-.03.22-.05.2-.07.2-.1.2-.11.18-.13.17-.16 3-3 .25-.3.19-.32zm-1.75-5.6c1.11.04.3 2.47-.78 2.75l-.38.1V2.41h.6z"
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

export default IconAiDirectboxReceive;
