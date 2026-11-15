import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiMicrophone = forwardRef<SVGSVGElement, IconProps>(function IconAiMicrophone(
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
            d="M17 7.62v2.88a5 5 0 0 1-9.44 2.3M7 10.5v-3a5 5 0 0 1 7.77-4.16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 7.5h3.97"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 10.5h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M20 9.5v1a8 8 0 0 1-8 8m-8-9v1a8 8 0 0 0 8 8m0 0v3"
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
            d="M17 7.62v2.88a5 5 0 0 1-10 0v-3a5 5 0 0 1 7.77-4.16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 7.5h3.97"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 10.5h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 9.5v1a8 8 0 0 1-8 8m-8-9v1a8 8 0 0 0 8 8m0 0v3"
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
          <clipPath id={`${cut}c`}>
            <path d="M12 1.75a5.75 5.75 0 0 1 5.75 5.75v3a5.75 5.75 0 0 1-11.5 0v-3A5.75 5.75 0 0 1 12 1.75z" />
          </clipPath>
          <path
            d="m4 8.75.15.02.14.04.13.07.1.1.1.1.07.13.04.14.02.15v1l.04.74.1.72.18.7.25.66.3.64.37.6.41.55.47.52.52.46.55.42.6.36.64.3.66.25.7.18.72.11.74.04.74-.04.72-.1.7-.19.66-.24.63-.3.6-.37.56-.42.52-.46.46-.52.42-.56.36-.6.3-.63.25-.66.18-.7.11-.72.04-.74v-1l.01-.15.05-.14.07-.13.09-.11.08-.07q.34 0 .64-.12l.1.03.13.07.1.09.1.11.07.13.04.14.02.15v1l-.01.42-.03.42-.05.42-.07.4-.19.8-.26.76-.33.74-.4.7-.45.65-.51.6-.57.57-.6.5-.67.46-.7.4-.74.32-.78.26-.4.1-.4.09-.42.06-.42.05v2.28l-.02.15-.04.14-.07.13-.1.11-.1.1-.13.06-.14.05-.15.01-.15-.01-.14-.05-.13-.07-.11-.09-.1-.11-.06-.13-.05-.14-.01-.15v-2.28l-.42-.05-.42-.06-.4-.09-.4-.1-.78-.26-.74-.33-.7-.39-.66-.45-.62-.51-.56-.56-.51-.61-.46-.66-.39-.7-.33-.73-.26-.76-.2-.8-.06-.4-.05-.42-.03-.42-.01-.42v-1l.01-.15.05-.14.07-.13.09-.1.11-.1.13-.07.14-.04z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 1.75a5.75 5.75 0 0 1 5.75 5.75v3a5.75 5.75 0 0 1-11.5 0v-3A5.75 5.75 0 0 1 12 1.75z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M13 6.75h6v1.5h-6a.75.75 0 0 1 0-1.5zm0 3h6v1.5h-6a.75.75 0 0 1 0-1.5z"
            clipPath={`url(#${cut}c)`}
            mask={`url(#${cut})`}
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
            <path d="M13 6.75h6v1.5h-6a.75.75 0 0 1 0-1.5zm0 3h6v1.5h-6a.75.75 0 0 1 0-1.5z" fill="black" />
          </mask>
          <path
            d="M12 1.75a5.75 5.75 0 0 1 5.75 5.75v3a5.75 5.75 0 0 1-11.5 0v-3A5.75 5.75 0 0 1 12 1.75z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m4 8.75.15.02.14.04.13.07.1.1.1.1.07.13.04.14.02.15v1l.04.74.1.72.18.7.25.66.3.64.37.6.41.55.47.52.52.46.55.42.6.36.64.3.66.25.7.18.72.11.74.04.74-.04.72-.1.7-.19.66-.24.63-.3.6-.37.56-.42.52-.46.46-.52.42-.56.36-.6.3-.63.25-.66.18-.7.11-.72.04-.74v-1l.01-.15.05-.14.07-.13.09-.11.08-.07q.34 0 .64-.12l.1.03.13.07.1.09.1.11.07.13.04.14.02.15v1l-.01.42-.03.42-.05.42-.07.4-.19.8-.26.76-.33.74-.4.7-.45.65-.51.6-.57.57-.6.5-.67.46-.7.4-.74.32-.78.26-.4.1-.4.09-.42.06-.42.05v2.28l-.02.15-.04.14-.07.13-.1.11-.1.1-.13.06-.14.05-.15.01-.15-.01-.14-.05-.13-.07-.11-.09-.1-.11-.06-.13-.05-.14-.01-.15v-2.28l-.42-.05-.42-.06-.4-.09-.4-.1-.78-.26-.74-.33-.7-.39-.66-.45-.62-.51-.56-.56-.51-.61-.46-.66-.39-.7-.33-.73-.26-.76-.2-.8-.06-.4-.05-.42-.03-.42-.01-.42v-1l.01-.15.05-.14.07-.13.09-.1.11-.1.13-.07.14-.04z"
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

export default IconAiMicrophone;
