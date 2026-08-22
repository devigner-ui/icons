import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBagMusic = forwardRef<SVGSVGElement, IconProps>(function IconBagMusic(
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
            d="M3.74 20.56C4.94 22 7.17 22 11.64 22h.72c4.47 0 6.7 0 7.9-1.45m-16.52 0c-1.2-1.44-.79-3.63.04-8.02.58-3.12.87-4.69 1.99-5.6m14.49 13.63c1.2-1.45.79-3.64-.04-8.03-.58-3.12-.87-4.69-1.99-5.6m0-.01C17.13 6 15.53 6 12.36 6h-.72c-3.18 0-4.76 0-5.87.92m0 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 6V5a3 3 0 1 1 6 0v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m12.74 10.63-.33-.67zm1.32-.66-.34-.67zm-.12 3.06-.33-.67zm-1.88-.3.7-.26zm1.06.65-.1-.75zm2.86-1.81.74.14zm-.37.6.45.6zm-.73-2.54.1.74zm1.06.65-.7.25zm-3.55.54.46.6zm-.37.61-.74-.14zM11.25 17c0 .7-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 12.75 17zM10 18.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 19.75zM8.75 17c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 7.25 17zM10 15.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 10 14.25zM12.75 17v-5h-1.5v5zm.33-5.7 1.31-.66-.67-1.34-1.31.66zm1.84.4-1.31.66.67 1.34 1.31-.66zm-3.67.13v.6q.02.26.1.55l1.41-.51v-.11l-.01-.53zm2.36.53-.48.23-.1.04.17 1.5q.3-.05.53-.17l.55-.26zm-2.26.62a1.75 1.75 0 0 0 1.85 1.14l-.17-1.49a.25.25 0 0 1-.27-.16zm3.9-1.8v.25l1.47.28q.04-.28.03-.54zm.34 1.86q.25-.11.47-.27l-.9-1.19-.05.02-.19.1zm-.34-1.61a.3.3 0 0 1-.1.15l.91 1.2q.52-.42.66-1.07zm-.86-.79.48-.23.1-.04-.17-1.49q-.3.05-.53.16l-.55.26zm2.36.53v-.6q-.02-.26-.1-.55l-1.41.51v.11l.01.53zm-1.78-.8q.2-.01.27.16l1.4-.5a1.75 1.75 0 0 0-1.84-1.15zm-2.56-.41q-.25.11-.47.27l.9 1.19.05-.02.19-.1zm.34 1.87v-.26l-1.47-.28q-.04.28-.03.54zm-.81-1.6q-.53.41-.66 1.06l1.47.28a.3.3 0 0 1 .1-.15z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M4.08 10.9c.44-2.35.66-3.52 1.5-4.2C6.4 6 7.6 6 9.97 6h4.04c2.38 0 3.57 0 4.4.7.84.68 1.06 1.85 1.5 4.2l.75 4c.62 3.29.92 4.93.02 6.02S18.12 22 14.77 22H9.23c-3.35 0-5.02 0-5.92-1.08-.9-1.09-.6-2.73.02-6.03z"
            fill="currentColor"
          />
          <path
            d="M9.75 5a2.25 2.25 0 0 1 4.5 0v1q.85 0 1.5.02V5a3.75 3.75 0 1 0-7.5 0v1.02Q8.9 6 9.75 6z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.75 17a2.75 2.75 0 1 1-1.5-2.45v-2.72c0-.16 0-.37.03-.54a1.8 1.8 0 0 1 1.09-1.31l1.37-.69.53-.25q.23-.12.53-.16a1.75 1.75 0 0 1 1.94 1.68l.01.6v.05q0 .25-.03.5a1.8 1.8 0 0 1-1.09 1.31l-1.37.69-.53.25q-.23.12-.53.16-.23.03-.45 0zm2.12-6.59.1-.04q.19-.01.26.16l.01.11v.79a.3.3 0 0 1-.09.15l-.04.02-.19.1-1.31.66-.59.27a.3.3 0 0 1-.25-.16l-.01-.11v-.79a.3.3 0 0 1 .09-.15l.04-.02.19-.1 1.31-.66zM10 15.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
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
            d="m14.87 10.41.1-.04q.19-.01.26.16l.01.11v.79a.3.3 0 0 1-.09.15l-.04.02-.19.1-1.31.66-.59.27a.3.3 0 0 1-.25-.16l-.01-.11v-.79a.3.3 0 0 1 .09-.15l.04-.02.19-.1 1.31-.66z"
            fill="currentColor"
          />
          <path
            d="M10 15.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.25 6.02V5a3.75 3.75 0 1 1 7.5 0v1.02c1.29.03 2.07.17 2.68.67.83.7 1.05 1.86 1.49 4.2l.75 4c.61 3.3.92 4.94.02 6.03S18.12 22 14.77 22H9.23c-3.35 0-5.02 0-5.92-1.08-.9-1.09-.6-2.73.02-6.03l.75-4c.44-2.34.66-3.5 1.5-4.2.6-.5 1.38-.64 2.67-.67M9.75 5a2.25 2.25 0 0 1 4.5 0v1h-4.5zM10 19.75A2.75 2.75 0 0 0 12.75 17v-2.89a2 2 0 0 0 .98-.15l.53-.25 1.37-.69q.23-.1.43-.25a1.8 1.8 0 0 0 .69-1.56v-.65q-.02-.25-.1-.54a1.75 1.75 0 0 0-2.38-.98l-.53.25-1.37.69q-.23.1-.43.25c-.34.26-.58.64-.66 1.06-.03.17-.03.38-.03.54v2.72q-.57-.3-1.25-.3a2.75 2.75 0 1 0 0 5.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBagMusic;
