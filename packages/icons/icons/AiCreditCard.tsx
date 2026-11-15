import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCreditCard = forwardRef<SVGSVGElement, IconProps>(function IconAiCreditCard(
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
            d="M2 12c0-3.77 0-5.66 1.17-6.83S6.23 4 10 4h4.55m7.34 3.92C22 8.97 22 10.3 22 12c0 3.77 0 5.66-1.17 6.83S17.77 20 14 20h-3.19m-2.4 0c-2.74-.03-4.25-.18-5.24-1.17C2 17.66 2 15.77 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 16.5H6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8 13.5H6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M2 10h20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M14 15c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3s1.41 0 1.7.3c.3.29.3.76.3 1.7s0 1.41-.3 1.7c-.29.3-.76.3-1.7.3s-1.41 0-1.7-.3c-.3-.29-.3-.76-.3-1.7"
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
            d="M2 12c0-3.77 0-5.66 1.17-6.83S6.23 4 10 4h4.55m7.34 3.92C22 8.97 22 10.3 22 12c0 3.77 0 5.66-1.17 6.83S17.77 20 14 20h-4c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 16.5H6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 13.5H6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 10h20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14 15c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3s1.41 0 1.7.3c.3.29.3.76.3 1.7s0 1.41-.3 1.7c-.29.3-.76.3-1.7.3s-1.41 0-1.7-.3c-.3-.29-.3-.76-.3-1.7"
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
            d="M10 20h4c3.77 0 5.66 0 6.83-1.17S22 15.77 22 12v-2H2v2c0 3.77 0 5.66 1.17 6.83S6.23 20 10 20"
            fill="currentColor"
          />
          <path
            d="M5.25 13.5c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M5.25 16.5c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M17.2 12.3a9 9 0 0 0-1.16-.05h-.08q-.66-.01-1.16.04c-.35.05-.73.16-1.04.47-.3.31-.42.69-.47 1.04q-.05.5-.04 1.16v.09q-.01.65.04 1.15c.05.35.16.73.47 1.04.31.3.69.42 1.04.47q.5.05 1.16.04h.08q.66.01 1.16-.04c.35-.05.73-.16 1.04-.47.3-.31.42-.69.47-1.04q.05-.5.04-1.15v-.1q.01-.65-.04-1.15a1.7 1.7 0 0 0-.47-1.04c-.31-.3-.69-.42-1.04-.47m-2.37 1.52-.01.02-.04.16c-.03.21-.03.5-.03 1a9 9 0 0 0 .07 1.17l.02.01.16.04c.21.03.5.03 1 .03a9 9 0 0 0 1.17-.07l.01-.02.04-.16c.03-.21.03-.5.03-1a9 9 0 0 0-.07-1.17l-.02-.01-.16-.04c-.21-.03-.5-.03-1-.03a9 9 0 0 0-1.17.07"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M15.16 4c3 0 6.46.71 6.75 3.7l.06.62L22 9v1H2V9l.04-.68.05-.62.08-.56.12-.5.14-.45.2-.4.23-.35.3-.32.22-.2.25-.17.27-.15.28-.13.32-.1.33-.1.37-.07.4-.06.42-.05.45-.03.5-.03.52-.01.57-.01h.6L9.31 4z"
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
            d="M14.69 4c3.19-.05 6.96.7 7.2 3.88l.05.65.03.72H2.03l.03-.72.06-.65.08-.59.11-.52.15-.47.19-.42.23-.37.3-.34.22-.2.25-.19.26-.15.3-.14.3-.11.34-.1.37-.07.4-.06.42-.05.45-.04.5-.02.52-.02.56-.01H14z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M14 20h-4c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12v-1.25h20V12c0 3.77 0 5.66-1.17 6.83S17.77 20 14 20m2.04-7.75q.66-.01 1.16.04c.35.05.73.16 1.04.47.3.31.42.69.47 1.04q.05.5.04 1.16v.09q.01.65-.04 1.15c-.05.35-.16.73-.47 1.04-.31.3-.69.42-1.04.47q-.5.05-1.16.04h-.08q-.66.01-1.16-.04a1.7 1.7 0 0 1-1.04-.47c-.3-.31-.42-.69-.47-1.04a9 9 0 0 1-.04-1.15v-.09q-.01-.66.04-1.16c.05-.35.16-.73.47-1.04.31-.3.69-.42 1.04-.47q.5-.05 1.16-.04zM5.25 13.5c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M14.82 13.82h.02l.16-.04c.21-.03.5-.03 1-.03a9 9 0 0 1 1.17.07l.01.02q.02.03.04.16c.03.21.03.5.03 1a9 9 0 0 1-.07 1.17l-.02.01-.16.04c-.21.03-.5.03-1 .03a9 9 0 0 1-1.17-.07l-.01-.02-.04-.16c-.03-.21-.03-.5-.03-1a9 9 0 0 1 .07-1.17"
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

export default IconAiCreditCard;
