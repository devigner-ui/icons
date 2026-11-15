import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiDevelopment = forwardRef<SVGSVGElement, IconProps>(function IconAiDevelopment(
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
            d="m7 7 1.23 1.06c.51.44.77.66.77.94s-.26.5-.77.94L7 11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 11h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 21c3.75 0 5.62 0 6.94-.95a5 5 0 0 0 1.1-1.11C21 17.62 21 15.75 21 12q0-1.71-.03-2.96m-6.01-6.01Q13.7 2.99 12 3c-3.75 0-5.62 0-6.94.95a5 5 0 0 0-1.1 1.11C3 6.38 3 8.25 3 12v.7m.03 2.4c.07 1.8.28 2.95.92 3.84a5 5 0 0 0 1.11 1.1C6.38 21 8.25 21 12 21"
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
            d="m7 7 1.23 1.06c.51.44.77.66.77.94s-.26.5-.77.94L7 11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11 11h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 21c3.75 0 5.62 0 6.94-.95a5 5 0 0 0 1.1-1.11C21 17.62 21 15.75 21 12q0-1.71-.03-2.96m-6.01-6.01Q13.7 2.99 12 3c-3.75 0-5.62 0-6.94.95a5 5 0 0 0-1.1 1.11C3 6.38 3 8.25 3 12s0 5.62.95 6.94a5 5 0 0 0 1.11 1.1C6.38 21 8.25 21 12 21"
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
            d="M15.55 2.3a6.36 6.36 0 0 1 6.15 6.17l.02.51.02.55v1.2l.01.64v2.58l-.02.56v.54l-.03.5-.03.47-.04.44-.04.4-.06.38-.09.37-.11.38-.13.36-.16.36-.19.34-.2.33-.28.36-.3.33-.33.3-.36.28-.33.2-.35.19-.35.16-.37.13-.37.11-.38.1-.38.05-.39.04-.45.04-.48.03-.51.02-.55.02h-.58l-.62.01h-3.22l-.56-.01-.54-.02-.5-.02-.47-.03-.44-.04-.39-.04-.38-.06-.38-.09-.37-.1-.37-.14-.35-.16-.35-.18-.33-.2-.35-.29-.33-.3-.31-.33-.28-.36-.2-.33-.19-.34-.16-.36-.13-.36-.11-.38-.09-.37-.06-.39-.04-.39-.07-1.1-.05-1.1-.01-1.1v-1.78l.01-.65v-.61l.01-.58.02-.55.02-.52.03-.48.04-.45.06-.42.07-.41.08-.4.11-.36.13-.36.15-.33.18-.33.2-.3.28-.36.3-.34.33-.3.36-.28.33-.2.35-.18.35-.16.37-.14.37-.1.38-.1.38-.06.39-.04 1.12-.07 1.13-.04 1.12-.02 1.14.01h1.9l.56.01.54.02z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M6.6 6.51a.75.75 0 0 1 1.06-.08L8.88 7.5l.04.03q.35.3.62.57c.18.2.38.5.38.91 0 .4-.2.7-.38.9q-.27.29-.62.58l-.04.03-1.22 1.06a.75.75 0 0 1-.98-1.14L7.9 9.37 8.33 9l-.43-.37-1.22-1.06A.75.75 0 0 1 6.6 6.5"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M10.42 11c0-.41.33-.75.75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
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
            d="M15.55 2.3a6.36 6.36 0 0 1 6.15 6.17l.02.51.02.55v1.2l.01.64v2.58l-.02.56v.54l-.03.5-.03.47-.04.44-.04.4-.06.38-.09.37-.11.38-.13.36-.16.36-.19.34-.2.33-.28.36-.3.33-.33.3-.36.28-.33.2-.35.19-.35.16-.37.13-.37.11-.38.1-.38.05-.39.04-.45.04-.48.03-.51.02-.55.02h-.58l-.62.01h-3.22l-.56-.01-.54-.02-.5-.02-.47-.03-.44-.04-.39-.04-.38-.06-.38-.09-.37-.1-.37-.14-.35-.16-.35-.18-.33-.2-.35-.29-.33-.3-.31-.33-.28-.36-.2-.33-.19-.34-.16-.36-.13-.36-.11-.38-.09-.37-.06-.39-.04-.39-.07-1.1-.05-1.1-.01-1.1v-1.78l.01-.65v-.61l.01-.58.02-.55.02-.52.03-.48.04-.45.06-.42.07-.41.08-.4.11-.36.13-.36.15-.33.18-.33.2-.3.28-.36.3-.34.33-.3.36-.28.33-.2.35-.18.35-.16.37-.14.37-.1.38-.1.38-.06.39-.04 1.12-.07 1.13-.04 1.12-.02 1.14.01h1.9l.56.01.54.02zM6.24 6.35a1 1 0 0 1 1.4-.1l1.27 1.08q.35.3.64.6c.2.22.44.58.44 1.07s-.25.85-.44 1.07q-.29.3-.64.6l-1.27 1.09a1 1 0 1 1-1.3-1.52L7.57 9.2 7.8 9l-.22-.19-1.22-1.05a1 1 0 0 1-.1-1.41M12 10a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2z"
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

export default IconAiDevelopment;
