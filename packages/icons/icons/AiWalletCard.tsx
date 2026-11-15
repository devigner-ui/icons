import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiWalletCard = forwardRef<SVGSVGElement, IconProps>(function IconAiWalletCard(
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
            d="M2 12c0-4.7 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2c1.67 0 3.04 0 4.19.07m5.74 5.74q.09 1.7.07 4.19c0 4.7 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22h-1.03m-2.4-.03c-2.53-.08-4.05-.38-5.11-1.43C2 19.07 2 16.7 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 11v-1c0-1.89 0-2.83-.59-3.41C15.83 6 14.9 6 13 6h-2c-1.89 0-2.83 0-3.41.59C7 7.17 7 8.1 7 10v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 11h14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8 16h8"
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
            d="M2 12c0-4.7 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2c1.67 0 3.04 0 4.19.07m5.74 5.74q.09 1.7.07 4.19c0 4.7 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 11v-1c0-1.89 0-2.83-.59-3.41C15.83 6 14.9 6 13 6h-2c-1.89 0-2.83 0-3.41.59C7 7.17 7 8.1 7 10v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 11h14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 16h8"
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
            d="M16.38 2.08a5.8 5.8 0 0 1 5.55 5.54l.03.61.02.66.01.7.01.76v4.06l-.02.7-.02.66-.03.61-.05.57-.06.53-.07.5-.1.45-.12.43-.14.39-.17.36-.2.34-.22.3-.26.3-.28.25-.31.22-.34.2-.36.17-.4.14-.42.12-.45.1-.5.07-.53.06-.57.05-.61.03-.66.02-.7.01h-.75l-.8.01H9.6l-.7-.02-.66-.02-.62-.03-.57-.05-.53-.06-.5-.08-.45-.1-.42-.11-.4-.14-.36-.17-.33-.2-.31-.22-.29-.26-.26-.29-.22-.3-.2-.34-.16-.36-.15-.4-.11-.42-.1-.46-.08-.49-.06-.53-.04-.57-.03-.61-.03-.66-.01-.7v-.75l-.01-.8v-2.51l.01-.76.01-.7.03-.66.03-.61.04-.57.06-.53.08-.5.1-.45.11-.43.15-.39.16-.36.2-.33.22-.31.26-.3.29-.25.3-.22.34-.2.36-.17.4-.14.42-.12.46-.1.49-.07.53-.06.57-.04.61-.04.66-.02.7-.01h.75l.8-.01h3.27l.7.02.66.02z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8 15.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M17 10.25H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 6h-2c-1.89 0-2.83 0-3.41.59C7 7.17 7 8.1 7 10v.25h10V10c0-1.89 0-2.83-.59-3.41C15.83 6 14.9 6 13 6"
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
            d="M16.38 2.08a5.8 5.8 0 0 1 5.55 5.54l.03.62.02.65.01.7.01.76v4.06l-.02.7-.02.66-.03.61-.05.57-.06.53-.07.5-.1.45-.12.43-.14.39-.17.36-.2.34-.22.3-.26.3-.28.25-.31.22-.34.2-.36.17-.4.14-.42.12-.45.1-.5.07-.53.06-.57.05-.61.03-.66.02-.7.01-.75.01H9.6l-.7-.02-.66-.02-.62-.03-.57-.05-.53-.06-.5-.08-.45-.1-.42-.11-.4-.14-.36-.17-.33-.2-.31-.22-.29-.26-.25-.28-.23-.31-.2-.34-.16-.36-.14-.4-.12-.42-.1-.45-.08-.5-.06-.53-.04-.57-.03-.61-.02-.66-.02-.7v-1.55L2 12v-1.65l.01-.76.01-.7.03-.66.03-.61.04-.57.06-.53.08-.5.1-.45.11-.42.15-.4.16-.36.2-.33.22-.31.26-.3.29-.25.3-.22.34-.2.36-.16.4-.15.42-.11.46-.1.49-.08.53-.06.57-.04.61-.04.66-.02.7-.01h.75l.8-.01h3.27l.7.02.66.02zM8 15.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zM7.59 6.6C8.17 6 9.1 6 11 6h2c1.89 0 2.83 0 3.41.59C17 7.17 17 8.1 17 10v.25h2a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h2V10c0-1.89 0-2.83.59-3.41"
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

export default IconAiWalletCard;
