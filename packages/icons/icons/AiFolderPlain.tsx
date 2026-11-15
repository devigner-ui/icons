import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiFolderPlain = forwardRef<SVGSVGElement, IconProps>(function IconAiFolderPlain(
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
            d="M14.75 5.99c2.89.1 6.53-.63 7.08 2.21l.05.26.04.27.03.3.02.32.02.34.01.37v.4l.01.41V14l-.01.69v1.24l-.02.56-.01.53-.03.49-.04.45-.04.43-.07.4-.07.36-.1.34-.11.3-.14.3-.15.26-.18.25-.2.23-.24.2-.24.19-.27.15-.29.14-.31.1-.34.1-.36.08-.4.06-.42.05-.46.04-.49.02-.52.02-.57.01H8.07l-.56-.01-.53-.02-.49-.02-.45-.04-.43-.05-.4-.06-.36-.08-.33-.1-.32-.1-.29-.14-.26-.15-.25-.18-.23-.21-.2-.23-.18-.25-.16-.26-.13-.3-.12-.3-.1-.34-.07-.37-.06-.4-.05-.41-.03-.46-.03-.5-.02-.52v-.56l-.01-.6V5.9l.01-.19.01-.17.04-.3.07-.29.1-.29.1-.28.13-.27.15-.26.17-.24.18-.23.2-.22.22-.2.23-.18.24-.17.26-.15.27-.13.28-.11.28-.1.3-.06.3-.04.18-.01.19-.01h1.66l.14.02.4.05.38.1.37.12.36.17.34.2.32.23.3.26.26.3L11 4l.29.29.25.25.23.22.2.2.2.16.18.14.36.24.42.2.43.15.42.09.23.02.26.02z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.25 10c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
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
            d="M14.73 5.99c2.89.1 6.53-.63 7.08 2.21l.05.26.04.27.04.3.02.32.02.35v.36l.02.4v5.47l-.02.57-.01.52-.03.5-.04.45-.04.42-.07.4-.07.36-.1.34-.11.31-.14.29-.15.27-.18.24-.2.23-.23.2-.25.19-.27.15-.29.14-.31.11-.34.1-.36.07-.4.07-.42.04-.46.04-.49.02-.52.02-.57.01h-.6l-.64.01H8.08l-.57-.02-.53-.02-.49-.02-.45-.04-.43-.04-.39-.07-.36-.07-.34-.1-.32-.11-.28-.14-.27-.15-.25-.18-.23-.2-.2-.24-.18-.24-.16-.27-.13-.29-.12-.31-.1-.34-.07-.36-.06-.4-.05-.42-.03-.46-.03-.49-.02-.52v-.57l-.01-.6V5.92l.01-.2.01-.16.04-.3.07-.3.09-.29.1-.28.14-.27.15-.26.16-.24.19-.23.2-.22.21-.2.23-.18.25-.17.25-.15.27-.13.28-.11.3-.1.29-.06.3-.04.17-.01.2-.01h.45L6.64 2h.93l.14.02.4.05.38.1.37.13.36.16.34.2.31.23.3.27.27.29.55.55.29.29.25.25.23.22.2.2.2.16.18.14.36.24.41.2.44.15.42.09.23.02.25.02zM12.25 10c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
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

export default IconAiFolderPlain;
