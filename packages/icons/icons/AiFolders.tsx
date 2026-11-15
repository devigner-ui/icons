import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiFolders = forwardRef<SVGSVGElement, IconProps>(function IconAiFolders(
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
            d="M18 10h-5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M10 3h4.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.8 8.12c.2.84.2 1.98.2 3.67V14c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17-1-1-1.14-2.51-1.17-5.27m0-2.4V6.95c0-.88 0-1.32.07-1.7a4 4 0 0 1 3.19-3.18C5.63 2 6.06 2 6.95 2c.39 0 .58 0 .77.02a4 4 0 0 1 2.18.9c.14.12.28.26.55.53L11 4q.76.86 1.71 1.5a4 4 0 0 0 2.26.5"
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
            d="M18 10h-5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 3h4.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.8 8.12c.2.84.2 1.98.2 3.67V14c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14V6.95c0-.88 0-1.32.07-1.7a4 4 0 0 1 3.19-3.18C5.63 2 6.06 2 6.95 2c.39 0 .58 0 .77.02a4 4 0 0 1 2.18.9c.14.12.28.26.55.53L11 4q.76.86 1.71 1.5a4 4 0 0 0 2.26.5"
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
            d="M14.75 5.99c2.89.1 6.52-.63 7.07 2.21l.05.26.04.27.03.3.02.32.02.34.01.37v.39l.01.42v5.06l-.01.57-.02.52-.03.5-.03.45-.05.42-.06.4-.08.36-.1.34-.1.31-.14.29-.16.27-.18.24-.2.23-.23.2-.25.19-.27.15-.29.14-.3.11-.35.1-.36.07-.4.07-.42.04-.46.04-.49.02-.52.02-.56.01h-.6l-.65.01H8.08l-.57-.02-.52-.02-.5-.02-.45-.04-.42-.04-.4-.07-.36-.07-.34-.1-.31-.11-.3-.14-.26-.15-.25-.18-.22-.2-.21-.24-.18-.24-.16-.27-.13-.29-.11-.31-.1-.34-.08-.36-.06-.4-.05-.42-.03-.46-.03-.49-.01-.52-.02-.57V14L2 6.95V5.91l.02-.19v-.17l.05-.3.07-.3.09-.29.1-.28.14-.26.15-.26.17-.24.18-.23.2-.22.22-.2.23-.18.24-.17.26-.15.27-.13.28-.11.3-.1.29-.06.3-.04.16-.01h.19L6.12 2h1.46l.14.01.3.04.3.06.28.08.28.1.27.13.26.15.25.16.24.18.1.1.13.11.14.14.18.18L11 4l.4.42.4.39.45.36.46.33.42.2.43.15.42.09.23.03.25.01z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M15.78 3c1.24 0 .2 3.09-1.04 3l-.28-.02-.25-.02-.23-.02-.42-.1-.43-.14-.42-.2-.36-.24-.18-.14-.2-.17-.2-.19-.23-.22-.25-.25-.3-.29-.54-.55L9.99 3z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.25 10c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
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
            d="M14.75 5.99c2.89.1 6.52-.63 7.07 2.21l.05.26.04.27.03.3.02.32.02.34.01.37v.39l.01.42v5.06l-.01.57-.02.52-.03.5-.03.45-.05.42-.06.4-.08.36-.1.34-.1.31-.14.29-.16.27-.18.24-.2.23-.23.2-.25.19-.27.15-.29.14-.3.11-.35.1-.36.07-.4.07-.42.04-.46.04-.49.02-.52.02-.56.01h-.6l-.65.01H8.08l-.57-.02-.52-.02-.5-.02-.45-.04-.42-.04-.4-.07-.36-.07-.34-.1-.31-.11-.3-.14-.26-.15-.25-.18-.22-.2-.21-.24-.18-.24-.16-.27-.13-.29-.11-.31-.1-.34-.08-.36-.06-.4-.05-.42-.03-.46-.03-.49-.01-.52-.02-.57V14L2 6.95V5.91l.02-.19v-.17l.05-.3.07-.3.09-.29.1-.28.14-.26.15-.26.17-.24.18-.23.2-.22.22-.2.23-.18.24-.17.26-.15.27-.13.28-.11.3-.1.29-.06.3-.04.16-.01h.19L6.12 2h1.46l.14.01.3.04.3.06.28.08.28.1.27.13.26.15.25.16.24.18.1.1.13.11.14.14.18.18L11 4l.4.42.4.39.45.36.46.33.42.2.43.15.42.09.23.03.25.01zM13 9.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M15.78 3c.88 0-.52 1.96-1.39 1.79l-.26-.05-.28-.1-.26-.14-.22-.15-.12-.1-.13-.12-.15-.14-.17-.17-.2-.2-.23-.24L12 3z"
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

export default IconAiFolders;
