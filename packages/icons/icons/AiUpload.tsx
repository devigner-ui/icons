import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiUpload = forwardRef<SVGSVGElement, IconProps>(function IconAiUpload(
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
            d="M12 17v-7m0 0 3 3m-3-3-3 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 7H8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M2 12c0 4.71 0 7.07 1.46 8.54 1.06 1.05 2.58 1.35 5.11 1.43m2.4.03H12c1.67 0 3.04 0 4.19-.07m5.74-5.74q.09-1.7.07-4.19c0-4.7 0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46C2 4.93 2 7.3 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 17.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M12 17v-7m0 0 3 3m-3-3-3 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 7H8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 12c0 4.71 0 7.07 1.46 8.54C4.93 22 7.3 22 12 22c1.67 0 3.04 0 4.19-.07m5.74-5.74q.09-1.7.07-4.19c0-4.7 0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46C2 4.93 2 7.3 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 17.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            <path d="M18 17a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.38 21.92a5.77 5.77 0 0 0 5.55-5.54l.03-.62.02-.65.01-.7.01-.76V9.59l-.02-.7-.02-.66-.03-.61-.05-.57-.06-.54-.07-.49-.1-.46-.12-.42-.14-.4-.17-.35-.2-.34-.22-.3-.26-.3-.28-.25-.31-.23-.34-.2-.36-.16-.4-.14-.42-.12-.45-.1-.5-.07-.53-.06-.57-.05-.61-.03-.66-.02-.7-.01-.75-.01H9.6l-.7.02-.66.02-.62.03-.57.05-.53.06-.5.07-.45.1-.42.12-.4.14-.36.17-.33.2-.31.22-.29.26-.25.28-.23.31-.2.34-.16.36-.14.4-.12.41-.1.46-.08.5-.06.53-.04.57-.03.6-.02.67-.02.7v1.55L2 12v1.66l.01.75.01.7.03.66.03.62.04.57.06.53.08.49.1.45.11.43.15.39.16.36.2.33.22.31.26.29.29.26.3.22.34.2.36.16.4.15.42.11.46.1.49.08.53.06.57.04.61.03.66.03h.7l.75.02h3.31l.76-.01.7-.01.66-.03z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m8 7.75-.15-.01-.14-.05-.13-.07-.11-.09-.1-.11-.06-.13-.04-.14L7.25 7l.02-.15.04-.14.07-.13.09-.11.11-.1.13-.06.14-.04.15-.02h8l.15.02h.02l.25.11.11.09.1.11.06.13.04.14.02.15-.02.15-.04.14-.07.13-.09.11-.11.1-.13.06-.14.05-.15.01z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.75 17a.75.75 0 0 1-1.5 0v-5.19l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72z"
            fill="currentColor"
          />
          <path
            d="M19.9 16.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
            <path d="M18 17a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M16.38 21.92a5.77 5.77 0 0 0 5.55-5.54l.03-.62.02-.65.01-.7.01-.76V9.59l-.02-.7-.02-.66-.03-.61-.05-.57-.06-.54-.07-.49-.1-.46-.12-.42-.14-.4-.17-.35-.2-.34-.22-.3-.26-.3-.28-.25-.31-.23-.34-.2-.36-.16-.4-.14-.42-.12-.45-.1-.5-.07-.53-.06-.57-.05-.61-.03-.66-.02-.7-.01-.75-.01H9.6l-.7.02-.66.02-.62.03-.57.05-.53.06-.5.07-.45.1-.42.12-.4.14-.36.17-.33.2-.31.22-.29.26-.25.28-.23.31-.2.34-.16.36-.14.4-.12.41-.1.46-.08.5-.06.53-.04.57-.03.6-.02.67-.02.7v1.55L2 12v1.66l.01.75.01.7.03.66.03.62.04.57.06.53.08.49.1.45.11.43.15.39.16.36.2.33.22.31.26.29.29.26.3.22.34.2.36.16.4.15.42.11.46.1.49.08.53.06.57.04.61.03.66.03h.7l.75.02h3.31l.76-.01.7-.01.66-.03zM12 17.75c.41 0 .75-.34.75-.75v-5.19l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72V17c0 .41.34.75.75.75m-4-10-.15-.01-.14-.05-.13-.07-.11-.09-.1-.11-.06-.13-.04-.14L7.25 7l.02-.15.04-.14.07-.13.09-.11.11-.1.13-.06.14-.04.15-.02h8l.15.02h.02l.25.11.11.09.1.11.06.13.04.14.02.15-.02.15-.04.14-.07.13-.09.11-.11.1-.13.06-.14.05-.15.01z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 16.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiUpload;
