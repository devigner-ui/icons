import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiProcessor = forwardRef<SVGSVGElement, IconProps>(function IconAiProcessor(
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
            d="M10.1 17H10c-1.41 0-2.12 0-2.56-.44S7 15.41 7 14v-4c0-1.41 0-2.12.44-2.56S8.59 7 10 7h4c1.41 0 2.12 0 2.56.44S17 8.59 17 10v4c0 1.41 0 2.12-.44 2.56S15.41 17 14 17h-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12c0-3.77 0-5.66 1.17-6.83S8.23 4 12 4q1.44 0 2.54.02m5.44 5.44Q20 10.56 20 12c0 3.77 0 5.66-1.17 6.83S15.77 20 12 20s-5.66 0-6.83-1.17S4 15.77 4 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M22 12h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M4 9H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M4 15H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M22 15h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 20v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 2v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M9 20v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M9 2v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M15 20v2"
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
            d="M7 10c0-1.41 0-2.12.44-2.56S8.59 7 10 7h4c1.41 0 2.12 0 2.56.44S17 8.59 17 10v4c0 1.41 0 2.12-.44 2.56S15.41 17 14 17h-4c-1.41 0-2.12 0-2.56-.44S7 15.41 7 14z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M4 12c0-3.77 0-5.66 1.17-6.83S8.23 4 12 4q1.44 0 2.54.02m5.44 5.44Q20 10.56 20 12c0 3.77 0 5.66-1.17 6.83S15.77 20 12 20s-5.66 0-6.83-1.17S4 15.77 4 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4 12H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 12h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4 9H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4 15H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 15h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 20v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 2v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 20v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 2v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 20v2"
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
            d="M15.34 2.36c2.28 2.57 3.26 4.49 6.21 6.26l.1.06.1.09.07.1.05.11.04.12.01.13-.01.13-.04.13-.05.1-.07.1-.1.1-.1.06-.12.05-.12.03h-2.82l.01.66v.74h2.8l.13.02.12.05.1.07.1.08.07.1.05.12.04.12.01.13-.01.13-.04.12-.05.11-.07.1-.1.09-.1.07-.12.04-.12.03h-2.8v.73l-.02.67h2.82l.12.03.12.05.1.07.1.08.07.1.05.11.04.12.01.13-.01.13-.04.13-.05.1-.07.1-.1.1-.1.06-.12.05-.12.03h-2.8l-.1-.01-.06.34-.06.31-.08.29-.1.26-.1.25-.13.22-.15.21-.17.2-.2.17-.2.15-.23.13-.25.11-.26.1-.3.07-.3.06-.34.05v2.9l-.03.13-.05.12-.07.1-.08.1-.1.07-.12.06-.12.03-.13.01h-.13l-.12-.04-.11-.06-.1-.07-.09-.1-.06-.1-.05-.12-.03-.12V18.5h-.32l-.34.01h-.74v2.8l-.03.13-.05.12-.06.1-.09.1-.1.07-.11.06-.12.03-.13.01h-.13l-.13-.04-.1-.06-.1-.07-.1-.1-.06-.1-.05-.12-.03-.12v-2.8h-.72l-.68-.02v2.82l-.02.13-.05.11-.07.1-.09.1-.1.07-.1.06-.13.03-.13.01h-.13l-.12-.04-.11-.06-.1-.07-.09-.1-.07-.1-.05-.12-.02-.12v-2.9l-.33-.05-.31-.07-.3-.07-.26-.1-.24-.11-.23-.13-.2-.15-.2-.17-.18-.2-.15-.2-.13-.23-.1-.25-.1-.26-.08-.29-.06-.31-.04-.34H2.7l-.13-.03-.12-.05-.1-.07-.1-.08-.07-.1-.05-.11-.04-.13v-.26l.04-.12.05-.1.08-.1.09-.1.1-.06.12-.05.13-.03h2.8v-1.4H2.7l-.13-.03-.12-.04-.1-.07-.1-.09-.07-.1-.05-.1-.04-.13v-.26l.04-.12.05-.12.08-.1.09-.08.1-.07.12-.05.13-.02h2.8V9.9H2.7l-.12-.03-.12-.05-.1-.07-.1-.08-.07-.1-.05-.12-.04-.12v-.26l.04-.12.05-.11.08-.1.09-.09.1-.06.12-.05.13-.03h2.8l.1.01.05-.34.06-.31.08-.29.1-.27.1-.24.14-.23.15-.2.17-.2.2-.18.2-.15L7.1 6l.24-.1.27-.1.29-.07.3-.06.35-.05V2.69l.02-.13.05-.11.07-.1.09-.1.1-.07.1-.06.13-.03.13-.02.13.02.12.03.11.06.1.07.09.1.07.1.05.11.02.13V5.5l1.4-.01v-2.8l.02-.14.04-.13.06-.11.08-.1.1-.1.12-.05.13-.04.14-.02.12.01.13.04.12.07.1.08.1.1.05.13.04.13.02.14v2.79h1.4V2.7l.03-.12.04-.11.07-.11.09-.1.1-.07.11-.05.12-.04h.26l.12.04.12.06.1.07zm-4.31 5.22q-.93-.02-1.57.06c-.46.06-.9.2-1.26.55-.35.36-.49.8-.55 1.26q-.07.64-.06 1.57v1.96q-.01.93.06 1.57c.06.46.2.9.55 1.26.36.35.8.49 1.26.55q.64.08 1.57.06h1.96q.93.02 1.57-.06c.46-.06.9-.2 1.26-.55.35-.36.49-.8.55-1.26q.07-.64.06-1.57v-1.96q.02-.93-.06-1.57c-.06-.46-.2-.9-.55-1.26-.36-.35-.8-.49-1.26-.55q-.64-.08-1.57-.06z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.18 9.18c.05-.05.15-.12.45-.16.32-.04.76-.04 1.44-.04h1.86c.68 0 1.12 0 1.44.04.3.04.4.1.45.16s.12.15.16.45c.04.32.04.76.04 1.44v1.86c0 .68 0 1.12-.04 1.44-.04.3-.1.4-.16.45s-.15.12-.45.16c-.32.04-.76.04-1.44.04h-1.86c-.68 0-1.12 0-1.44-.04-.3-.04-.4-.1-.45-.16s-.12-.15-.16-.45c-.04-.32-.04-.76-.04-1.44v-1.86c0-.68 0-1.12.04-1.44.04-.3.1-.4.16-.45"
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
            d="M9.18 9.18c.05-.05.15-.12.45-.16.32-.04.76-.04 1.44-.04h1.86c.68 0 1.12 0 1.44.04.3.04.4.1.45.16s.12.15.16.45c.04.32.04.76.04 1.44v1.86c0 .68 0 1.12-.04 1.44-.04.3-.1.4-.16.45s-.15.12-.45.16c-.32.04-.76.04-1.44.04h-1.86c-.68 0-1.12 0-1.44-.04-.3-.04-.4-.1-.45-.16s-.12-.15-.16-.45c-.04-.32-.04-.76-.04-1.44v-1.86c0-.68 0-1.12.04-1.44.04-.3.1-.4.16-.45"
            fill="currentColor"
          />
          <path
            d="M15.34 2.36c2.28 2.57 3.26 4.49 6.21 6.26l.1.06.1.09.07.1.05.11.04.12.01.13-.01.13-.04.13-.05.1-.07.1-.1.1-.1.06-.12.05-.12.03h-2.82l.01.66v.74h2.8l.13.02.12.05.1.07.1.08.07.1.05.12.04.12.01.13-.01.13-.04.12-.05.11-.07.1-.1.09-.1.07-.12.04-.12.03h-2.8v.73l-.02.67h2.82l.12.03.12.05.1.07.1.08.07.1.05.11.04.12.01.13-.01.13-.04.13-.05.1-.07.1-.1.1-.1.06-.12.05-.12.03h-2.8l-.1-.01-.06.34-.06.31-.08.29-.1.26-.1.25-.13.22-.15.21-.17.2-.2.17-.2.15-.23.13-.25.11-.26.1-.3.07-.3.06-.34.05v2.9l-.03.13-.05.12-.07.1-.08.1-.1.07-.12.06-.12.03-.13.01h-.13l-.12-.04-.11-.06-.1-.07-.09-.1-.06-.1-.05-.12-.03-.12V18.5h-.32l-.34.01h-.74v2.8l-.03.13-.05.12-.06.1-.09.1-.1.07-.11.06-.12.03-.13.01h-.13l-.13-.04-.1-.06-.1-.07-.1-.1-.06-.1-.05-.12-.03-.12v-2.8h-.72l-.68-.02v2.82l-.02.13-.05.11-.07.1-.09.1-.1.07-.1.06-.13.03-.13.01h-.13l-.12-.04-.11-.06-.1-.07-.09-.1-.07-.1-.05-.12-.02-.12v-2.9l-.33-.05-.31-.07-.3-.07-.26-.1-.24-.11-.23-.13-.2-.15-.2-.17-.18-.2-.15-.2-.13-.23-.1-.25-.1-.26-.08-.29-.06-.31-.04-.34H2.7l-.13-.03-.12-.05-.1-.07-.1-.08-.07-.1-.05-.11-.04-.13v-.26l.04-.12.05-.1.08-.1.09-.1.1-.06.12-.05.13-.03h2.8v-1.4H2.7l-.13-.03-.12-.04-.1-.07-.1-.09-.07-.1-.05-.1-.04-.13v-.26l.04-.12.05-.12.08-.1.09-.08.1-.07.12-.05.13-.02h2.8V9.9H2.7l-.12-.03-.12-.05-.1-.07-.1-.08-.07-.1-.05-.12-.04-.12v-.26l.04-.12.05-.11.08-.1.09-.09.1-.06.12-.05.13-.03h2.8l.1.01.05-.34.06-.31.08-.29.1-.27.1-.24.14-.23.15-.2.17-.2.2-.18.2-.15L7.1 6l.24-.1.27-.1.29-.07.3-.06.35-.05V2.69l.02-.13.05-.11.07-.1.09-.1.1-.07.1-.06.13-.03.13-.02.13.02.12.03.11.06.1.07.09.1.07.1.05.11.02.13V5.5l1.4-.01v-2.8l.02-.14.04-.13.06-.11.08-.1.1-.1.12-.05.13-.04.14-.02.12.01.13.04.12.07.1.08.1.1.05.13.04.13.02.14v2.79h1.4V2.7l.03-.12.04-.11.07-.11.09-.1.1-.07.11-.05.12-.04h.26l.12.04.12.06.1.07zm-4.31 5.22q-.93-.02-1.57.06c-.46.06-.9.2-1.26.55-.35.36-.49.8-.55 1.26q-.07.64-.06 1.57v1.96q-.01.93.06 1.57c.06.46.2.9.55 1.26.36.35.8.49 1.26.55q.64.08 1.57.06h1.96q.93.02 1.57-.06c.46-.06.9-.2 1.26-.55.35-.36.49-.8.55-1.26q.07-.64.06-1.57v-1.96q.02-.93-.06-1.57c-.06-.46-.2-.9-.55-1.26-.36-.35-.8-.49-1.26-.55q-.64-.08-1.57-.06z"
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

export default IconAiProcessor;
