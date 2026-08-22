import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMusicLibrary = forwardRef<SVGSVGElement, IconProps>(
  function IconMusicLibrary(
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

    return (
      <>
        {!fill ? (
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
              d="M2.9 13.8c-.42-3.17-.63-4.75.27-5.78C4.07 7 5.67 7 8.85 7h6.3c3.19 0 4.78 0 5.68 1.02.9 1.03.69 2.6.26 5.77l-.4 3c-.33 2.48-.5 3.72-1.34 4.47s-2.1.74-4.6.74h-5.5c-2.5 0-3.75 0-4.6-.74-.85-.75-1.01-1.99-1.34-4.47z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.56 7c.23-1.3-.77-2.5-2.1-2.5H6.54A2.13 2.13 0 0 0 4.44 7M17.5 4.5l.04-.5a2 2 0 0 0-1.78-1.99l-.5-.01H8.74l-.5.01a2 2 0 0 0-1.78 2l.04.49"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m12.56 12.7-.35.66zm.88.47.36-.66zm1-1.87.35-.66zm-.88-.47.35-.66zm-1.56.78.75.04zm1.42-.85-.32.68zm1.58 1.4.75-.02zm-.5-.83.37-.65zm-.92 1.91.32-.68zM15 12.4l-.75-.04zm-2.5.28-.37.65zm-.5-.84-.75.03zm-.75 4.67c0 .41-.34.75-.75.75v1.5c1.24 0 2.25-1 2.25-2.25zm-.75.75a.75.75 0 0 1-.75-.75h-1.5c0 1.24 1 2.25 2.25 2.25zm-.75-.75c0-.41.34-.75.75-.75v-1.5c-1.24 0-2.25 1-2.25 2.25zm.75-.75c.41 0 .75.34.75.75h1.5c0-1.24-1-2.25-2.25-2.25zm2.25.75V12h-1.5v4.5zm-.54-3.14.88.47.7-1.32-.88-.47zm2.58-2.72-.88-.47-.7 1.32.88.47zm-2.04 1.12v-.11l-1.5-.09v.2zm1.16-1.6-.18-.08-.63 1.36h.02l.08.05zm-1.16 1.5c.01-.18.2-.3.35-.22l.63-1.36a1.75 1.75 0 0 0-2.48 1.48zm3 .58v-.1l-1.5.05v.05zm-1.66-.28.03.02.75-1.3-.08-.04zm1.66.18a1.8 1.8 0 0 0-.88-1.46l-.75 1.3q.13.08.13.21zm-2.66 1.7.18.08.63-1.36h-.02l-.08-.05zm1.16-1.6v.11l1.5.09v-.2zm-.98 1.68c1.12.52 2.4-.25 2.48-1.48l-1.5-.1a.25.25 0 0 1-.35.22zm-.36-1.88-.03-.02-.75 1.3.08.04zm-1.66-.28v.1l1.5-.05v-.05zm1.63.26a.3.3 0 0 1-.13-.21l-1.5.05c.02.6.35 1.15.88 1.46z"
              fill="currentColor"
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
            <g opacity={duotone ? "0.6" : "1"}>
              <path
                d="M6.88 4.72a2.75 2.75 0 0 0-2.64 2.03q.54-.18 1.1-.26c.98-.13 2.2-.13 3.64-.13h6.2c1.43 0 2.66 0 3.63.13q.57.08 1.1.26a2.8 2.8 0 0 0-2.63-2.03z"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M8.86 2h6.28q.3 0 .51.02c1 .1 1.81.77 2.16 1.67H6.19A2.6 2.6 0 0 1 8.86 2"
                fill="currentColor"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 7.54H9c-3.03 0-4.55 0-5.4.99s-.66 2.51-.25 5.56l.38 2.9c.31 2.38.47 3.58 1.28 4.3.8.71 2 .71 4.38.71h5.22c2.39 0 3.58 0 4.38-.72.81-.71.97-1.9 1.28-4.3l.38-2.9c.4-3.04.6-4.56-.25-5.55s-2.37-.99-5.4-.99m-.41 2.63c-1.23-.53-2.65.26-2.73 1.52v3.83a3 3 0 0 0-1.29-.32C9.15 15.2 8 16.27 8 17.6S9.15 20 10.57 20s2.57-1.07 2.57-2.4v-3.92l.93.46.2.1c1.23.52 2.64-.27 2.73-1.53v-.33a1.8 1.8 0 0 0-1.05-1.54l-1.16-.58z"
              fill="currentColor"
            />
            <path
              d="M13.14 11.77c.03-.43.5-.69.91-.51l1.34.66a.6.6 0 0 1 .32.56v.16c-.02.42-.5.68-.9.5l-.15-.06-1.14-.57-.05-.03a.6.6 0 0 1-.33-.56z"
              fill="currentColor"
            />
            <path
              d="M10.57 16.4c.71 0 1.29.54 1.29 1.2s-.58 1.2-1.29 1.2c-.7 0-1.28-.54-1.28-1.2s.57-1.2 1.28-1.2"
              fill="currentColor"
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
            <path
              d="M8.86 2h6.28q.3 0 .51.02c1 .1 1.81.77 2.16 1.67H6.19A2.6 2.6 0 0 1 8.86 2"
              fill="currentColor"
            />
            <path
              d="M6.88 4.72a2.75 2.75 0 0 0-2.64 2.03q.54-.17 1.1-.26c.98-.13 2.2-.13 3.64-.13h6.2a28 28 0 0 1 3.63.13q.57.08 1.1.26a2.8 2.8 0 0 0-2.63-2.03z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 7.54h6c3.03 0 4.55 0 5.4.99s.66 2.51.25 5.56l-.38 2.9c-.31 2.38-.47 3.58-1.28 4.3-.8.71-2 .71-4.38.71H9.4C7 22 5.8 22 5 21.28c-.81-.71-.97-1.9-1.28-4.3l-.38-2.9c-.4-3.04-.6-4.56.25-5.55s2.37-.99 5.4-.99m2.86 4.15c.08-1.26 1.5-2.05 2.73-1.52l.2.09h.01l1.15.58.08.04a1.8 1.8 0 0 1 .97 1.6v.23c-.09 1.26-1.5 2.05-2.73 1.53l-.2-.1h-.02l-.9-.46v3.92c0 1.33-1.16 2.4-2.58 2.4S8 18.93 8 17.6s1.15-2.4 2.57-2.4q.7.01 1.29.32z"
              fill="currentColor"
            />
            <path
              d="M10.57 16.4c.71 0 1.29.54 1.29 1.2s-.58 1.2-1.29 1.2c-.7 0-1.28-.54-1.28-1.2s.57-1.2 1.28-1.2"
              fill="currentColor"
            />
            <path
              d="M14.05 11.26c-.4-.18-.88.08-.9.5v.22c0 .2.12.4.32.5l.05.03 1.14.57.14.07c.41.17.89-.1.91-.51v-.22a.6.6 0 0 0-.32-.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMusicLibrary;
