import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMusicNoteSlider2 = forwardRef<SVGSVGElement, IconProps>(
  function IconMusicNoteSlider2(
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
              d="M5 8c0-2.83 0-4.24.88-5.12S8.18 2 11 2h2c2.83 0 4.24 0 5.12.88S19 5.18 19 8v8c0 2.83 0 4.24-.88 5.12S15.82 22 13 22h-2c-2.83 0-4.24 0-5.12-.88S5 18.82 5 16z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19 19.5c.46 0 .7 0 .9-.03a2.5 2.5 0 0 0 2.07-2.08c.03-.2.03-.43.03-.89v-9c0-.46 0-.7-.03-.9a2.5 2.5 0 0 0-2.08-2.07c-.2-.03-.43-.03-.89-.03"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5 19.5c-.46 0-.7 0-.9-.03a2.5 2.5 0 0 1-2.07-2.08C2 17.2 2 16.96 2 16.5v-9c0-.46 0-.7.03-.9a2.5 2.5 0 0 1 2.08-2.07c.2-.03.43-.03.89-.03"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m12.74 8.63-.33-.67zm1.32-.66-.34-.67zm-.12 3.06-.33-.67zm-1.88-.3.7-.26zm1.06.65-.1-.75zm2.86-1.81.74.14zm-.37.6.45.6zm-.73-2.55.1.75zm1.06.66-.7.25zm-3.55.54.46.6zm-.37.61-.74-.14zM11.25 15c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 12.75 15zM10 16.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 17.75zM8.75 15c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 7.25 15zM10 13.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 10 12.25zM12.75 15v-5h-1.5v5zm.33-5.7 1.31-.66-.67-1.34-1.31.66zm1.84.4-1.31.66.67 1.34 1.31-.66zm-3.67.13v.6q.02.26.1.55l1.41-.51v-.11l-.01-.53zm2.36.53-.48.23-.1.04.17 1.49c.2-.02.38-.1.53-.16l.55-.26zm-2.26.62a1.75 1.75 0 0 0 1.85 1.14l-.17-1.49a.25.25 0 0 1-.27-.16zm3.9-1.8v.25l1.47.28q.04-.28.03-.54zm.34 1.86q.25-.11.47-.27l-.9-1.19-.05.02-.19.1zm-.34-1.61a.3.3 0 0 1-.1.15l.91 1.2q.52-.42.66-1.07zm-.86-.79.48-.23.1-.04-.17-1.49q-.3.05-.53.16l-.55.26zm2.36.53v-.6q-.02-.26-.1-.55l-1.41.51v.11l.01.53zm-1.78-.8q.2-.01.27.16l1.4-.5a1.75 1.75 0 0 0-1.84-1.15zm-2.56-.41q-.25.11-.47.27l.9 1.19.05-.02.19-.1zm.34 1.87v-.26l-1.47-.28q-.04.28-.03.54zm-.81-1.6c-.34.26-.58.64-.66 1.06l1.47.28a.3.3 0 0 1 .1-.15z"
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
            <path
              d="m14.87 8.41.1-.04q.19-.01.26.16l.01.11v.79a.3.3 0 0 1-.09.15l-.04.02-.19.1-1.31.66-.59.27a.3.3 0 0 1-.25-.16l-.01-.11v-.79a.3.3 0 0 1 .09-.15l.04-.02.19-.1 1.31-.66z"
              fill="currentColor"
            />
            <path
              d="M10 13.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.24 2.88c-.82.88-.82 2.3-.82 5.12v8c0 2.83 0 4.24.82 5.12S9.37 22 12 22s3.95 0 4.76-.88c.82-.88.82-2.3.82-5.12V8c0-2.83 0-4.24-.82-5.12S14.63 2 12 2s-3.95 0-4.76.88m9.4 5.14a1.75 1.75 0 0 0-2.37-.98l-.53.25-1.37.69q-.23.1-.43.25a1.8 1.8 0 0 0-.69 1.56v2.76q-.57-.3-1.25-.3A2.75 2.75 0 1 0 12.75 15v-2.89a2 2 0 0 0 .98-.15l.53-.25 1.37-.69q.23-.1.43-.25c.34-.26.58-.64.66-1.06q.04-.25.03-.5v-.65q-.02-.25-.1-.54"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M6.72 3.76H5.27q-.23 0-.44.03-.64.03-1.18.31a3.2 3.2 0 0 0-1.62 2.7Q2 7.46 2 8.47v7.06q0 1.02.03 1.67a3.2 3.2 0 0 0 1.62 2.7q.54.28 1.18.31l.44.03h1.45c-.3-.9-.3-2.2-.3-4.24V8c0-2.04 0-3.34.3-4.24"
                fill="currentColor"
              />
              <path
                d="M17.28 20.24c.3-.9.3-2.2.3-4.24V8c0-2.04 0-3.34-.3-4.24h1.45q.23 0 .44.03.64.03 1.18.31a3.2 3.2 0 0 1 1.62 2.7q.04.66.03 1.67v7.06q0 1.02-.03 1.67a3.2 3.2 0 0 1-1.62 2.7q-.54.28-1.18.31l-.44.03z"
                fill="currentColor"
              />
            </g>
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.42 8c0-2.83 0-4.24.82-5.12S9.37 2 12 2s3.95 0 4.76.88c.82.88.82 2.3.82 5.12v8c0 2.83 0 4.24-.82 5.12S14.63 22 12 22s-3.95 0-4.76-.88c-.82-.88-.82-2.3-.82-5.12zm-1.4-.1v8.2q-.01 1.47.05 2.63a12 12 0 0 0 .11 1.08c.04.22-.13.42-.35.4a3 3 0 0 1-1.18-.31 3.2 3.2 0 0 1-1.62-2.7Q2 16.54 2 15.53V8.47q0-1 .03-1.67a3.2 3.2 0 0 1 1.62-2.7q.54-.28 1.18-.31c.22-.02.39.18.35.4a8 8 0 0 0-.11 1.08Q5 6.43 5.02 7.9m13.96 0v8.2q.01 1.47-.05 2.63a12 12 0 0 1-.11 1.08c-.04.22.13.42.35.4q.64-.04 1.18-.31a3.2 3.2 0 0 0 1.62-2.7q.04-.66.03-1.67V8.47q0-1-.03-1.67a3.2 3.2 0 0 0-1.62-2.7q-.54-.28-1.18-.31c-.22-.02-.39.18-.35.4a8 8 0 0 1 .11 1.08q.06 1.16.05 2.63m-4.11.51.1-.04q.19-.01.26.16l.01.11v.79a.3.3 0 0 1-.09.15l-.04.02-.19.1-1.31.66-.59.27a.3.3 0 0 1-.25-.16l-.01-.11v-.79a.3.3 0 0 1 .09-.15l.04-.02.19-.1 1.31-.66zm1.78-.39a1.75 1.75 0 0 0-2.38-.98l-.53.25-1.33.67-.04.02q-.23.1-.43.25a1.8 1.8 0 0 0-.69 1.56v2.76q-.57-.3-1.25-.3A2.75 2.75 0 1 0 12.75 15v-2.89a2 2 0 0 0 .98-.15l.53-.25 1.33-.67.04-.02q.23-.1.43-.25a1.8 1.8 0 0 0 .69-1.56v-.65q-.02-.25-.1-.54M10 13.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMusicNoteSlider2;
