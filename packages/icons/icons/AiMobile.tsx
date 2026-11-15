import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiMobile = forwardRef<SVGSVGElement, IconProps>(function IconAiMobile(
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
            d="M20 9.45V14c0 3.77 0 5.66-1.17 6.83S15.77 22 12 22s-5.66 0-6.83-1.17c-.98-.98-1.14-2.46-1.17-5.11m0-2.4V10c0-3.77 0-5.66 1.17-6.83S8.23 2 12 2c1.71 0 3.03 0 4.08.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 19H9"
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
            d="M20 9.45V14c0 3.77 0 5.66-1.17 6.83S15.77 22 12 22s-5.66 0-6.83-1.17S4 17.77 4 14v-4c0-3.77 0-5.66 1.17-6.83S8.23 2 12 2c1.71 0 3.03 0 4.08.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 19H9"
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
            d="M16.1 2.14c3 .38 3.9 3.68 3.9 6.7v6.85l-.02.53-.01.5-.03.47-.03.44-.05.41-.04.37-.07.36-.1.36-.13.34-.16.34-.18.31-.21.3-.24.3-.27.24-.28.2-.3.18-.32.15-.33.13-.36.1-.37.08-.4.06-.4.05-.44.03-.46.03-.48.02h-.52l-.55.01H10.2l-.52-.01-.48-.02-.46-.03-.44-.03-.4-.05-.37-.04-.36-.07-.35-.1-.33-.14-.33-.16-.31-.18-.3-.22-.28-.24-.24-.28-.21-.3-.19-.33-.15-.33-.13-.34-.1-.36-.07-.36-.04-.37-.05-.4-.03-.45-.03-.47-.01-.5-.01-.53v-.56l-.01-.6V8.32l.02-.53.01-.5.03-.47.03-.44.05-.4.04-.38.07-.36.1-.35.13-.35.15-.33.19-.32.21-.3.24-.29.27-.24.28-.21.3-.18.32-.15.33-.12.36-.1.37-.08.4-.07.4-.05.43-.04.46-.02.5-.02.51-.01h1.74l.11-.01h1.75l.52.02.48.01.46.03.44.03z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.57 18.51c0-.38.3-.7.69-.7h5.48a.7.7 0 0 1 .69.7c0 .39-.3.7-.69.7H9.26a.7.7 0 0 1-.69-.7"
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
            d="M16.1 2.15c3 .37 3.9 3.67 3.9 6.69v6.86l-.02.53-.01.5-.03.47-.03.44-.05.42-.06.4-.08.37-.1.37-.12.34-.15.32-.18.3-.2.3-.24.27-.28.24-.3.21-.31.19-.33.16-.34.13-.35.1-.35.08-.37.04-.4.04-.44.04-.46.02-.49.02-.51.01h-3.6L9.68 22l-.49-.02-.46-.02-.43-.04-.4-.04-.4-.07-.37-.08-.36-.1-.33-.12-.32-.15-.3-.18-.28-.21-.27-.24-.24-.29-.21-.3-.19-.32-.15-.33-.13-.35-.1-.35-.07-.36-.04-.37-.05-.41-.03-.44-.03-.47-.01-.5L4 15.7V8.32l.02-.53.01-.5.03-.47.03-.43.05-.41.06-.4.08-.38.1-.36.12-.34.15-.33.18-.3.2-.3.24-.26.28-.24.3-.22.3-.19.34-.16.34-.13.35-.1.35-.08.37-.04.4-.05.44-.03.46-.03.49-.02h.51l.55-.01h1.3l.61-.01h1.14l.52.02.48.02.46.02.44.04zM8.57 18.51c0-.38.3-.7.69-.7h5.48a.7.7 0 0 1 .69.7c0 .39-.3.7-.69.7H9.26a.7.7 0 0 1-.69-.7"
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

export default IconAiMobile;
