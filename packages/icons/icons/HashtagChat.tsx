import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHashtagChat = forwardRef<SVGSVGElement, IconProps>(
  function IconHashtagChat(
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
              d="m17.54 21.7-.64-.39zm.27-.46.65.38zm-1.62 0-.65.38zm.27.45.64-.38zm-4.27-2.73.7-.29zm2.7 1.54v.75zm-1.35-.19-.28.7zm8.27-1.35.7.28zm-2.7 1.54-.02-.75zm1.35-.19.28.7zm.35-7.94-.4.64zm.82.82.64-.39zm-8.44-.82-.39-.64zm-.82.82-.64-.39zm3.33 7.42.38-.65zm2.49 1.47.27-.46-1.3-.77-.26.46zm-2.65-.46.27.46 1.3-.77-.28-.46zm1.36-.3a.1.1 0 0 1 .1-.07q.05 0 .1.06l-1.29.77c.53.9 1.85.9 2.38 0zm-.65-8.57h1.5v-1.5h-1.5zm5 3.5v.5h1.5v-.5zm-8.5.5v-.5h-1.5v.5zm-1.5 0q0 .85.03 1.42.02.58.22 1.07l1.38-.57a2 2 0 0 1-.1-.6c-.03-.32-.03-.73-.03-1.32zm3.66 3c-.63-.01-.9-.06-1.08-.13L13.26 21c.47.2 1 .24 1.62.25zm-3.41-.5c.33.8.96 1.42 1.76 1.75l.57-1.38a1.8 1.8 0 0 1-.95-.95zm9.75-2.5c0 .6 0 1-.02 1.32a2 2 0 0 1-.11.6l1.38.57q.2-.49.22-1.07.04-.57.03-1.42zm-2.13 4.5a4 4 0 0 0 1.62-.25l-.57-1.38c-.19.07-.45.12-1.08.13zm2-2.58q-.29.66-.95.95l.57 1.38c.8-.33 1.43-.96 1.76-1.76zm-3.37-5.92c.83 0 1.4 0 1.85.04.42.04.65.12.81.22l.79-1.28a3 3 0 0 0-1.46-.43q-.8-.06-1.99-.05zm5 3.5q.01-1.2-.05-1.99a3 3 0 0 0-.43-1.46l-1.27.8c.1.16.18.39.22.81.04.45.04 1.02.04 1.85zm-2.34-3.24q.37.21.58.58l1.28-.79q-.4-.66-1.07-1.07zm-4.16-1.76q-1.2-.01-1.99.05a3 3 0 0 0-1.46.43l.8 1.27c.16-.1.39-.18.81-.22.45-.04 1.02-.04 1.85-.04zm-3.5 5c0-.83 0-1.4.04-1.85.04-.42.12-.65.22-.81l-1.28-.79a3 3 0 0 0-.43 1.46q-.06.8-.05 1.99zm.05-4.52q-.66.4-1.07 1.07l1.28.79q.22-.37.58-.58zm4.03 9.12-.3-.47q-.15-.23-.45-.42l-.76 1.3q-.05-.06 0 0l.22.36zm-1.95.4.43.01q.09.02.01 0l.76-1.3a2 2 0 0 0-.6-.19q-.26-.02-.57-.02zm3.58.37c.11-.2.17-.29.22-.35q.05-.07 0-.02l-.76-1.3q-.3.2-.45.43l-.3.47zm.63-1.87q-.3 0-.57.02-.28.02-.6.19l.76 1.3q-.07.02 0 0l.44-.01z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 3 5 21M19 3l-1.8 6.5M22 9H4m5 7H2"
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
            <path
              d="m17.81 21.24-.27.45a.63.63 0 0 1-1.08 0l-.27-.45c-.21-.36-.32-.54-.49-.63-.17-.1-.38-.1-.8-.11a4 4 0 0 1-1.36-.19 2.5 2.5 0 0 1-1.35-1.35C12 18.5 12 17.92 12 16.75v-.5c0-1.64 0-2.45.37-3.06q.31-.5.82-.82c.6-.37 1.42-.37 3.06-.37h1.5c1.64 0 2.46 0 3.06.37q.5.31.82.82c.37.6.37 1.42.37 3.06v.5c0 1.17 0 1.75-.19 2.2a2.5 2.5 0 0 1-1.35 1.36 4 4 0 0 1-1.35.19c-.43 0-.64 0-.81.1s-.28.28-.49.64"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M10.2 2.28c.4.1.63.52.52.92l-1.4 5.05h7.44l1.52-5.45a.75.75 0 1 1 1.44.4l-1.4 5.05H22a.75.75 0 0 1 0 1.5h-4.1L17.28 12h-1.56l.63-2.25H8.9l-1.52 5.5H12v1.5H6.96L5.72 21.2a.75.75 0 0 1-1.44-.4l1.12-4.05H2a.75.75 0 0 1 0-1.5h3.82l1.53-5.5H4a.75.75 0 1 1 0-1.5h3.76L9.28 2.8c.1-.4.52-.63.92-.52"
                fill="currentColor"
              />
              <path
                d="m13.43 20.26-.15.54a.75.75 0 0 0 1.44.4l.2-.7h-.03a4 4 0 0 1-1.46-.24"
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
              d="m17.81 21.24-.27.45a.63.63 0 0 1-1.08 0l-.27-.45c-.21-.36-.32-.54-.49-.63-.17-.1-.38-.1-.8-.11a4 4 0 0 1-1.36-.19 2.5 2.5 0 0 1-1.35-1.35C12 18.5 12 17.92 12 16.75v-.5c0-1.64 0-2.45.37-3.06q.31-.5.82-.82c.6-.37 1.42-.37 3.06-.37h1.5c1.64 0 2.46 0 3.06.37q.5.31.82.82c.37.6.37 1.42.37 3.06v.5c0 1.17 0 1.75-.19 2.2a2.5 2.5 0 0 1-1.35 1.36 4 4 0 0 1-1.35.19c-.43 0-.64 0-.81.1s-.28.28-.49.64"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.2 2.28c.4.1.63.52.52.92l-1.4 5.05h7.44l1.52-5.45a.75.75 0 1 1 1.44.4l-1.4 5.05H22a.75.75 0 0 1 0 1.5h-4.1a.75.75 0 0 1-1.41 0H8.9l-1.52 5.5H9a.75.75 0 0 1 0 1.5H6.96L5.72 21.2a.75.75 0 0 1-1.44-.4l1.12-4.05H2a.75.75 0 0 1 0-1.5h3.82l1.53-5.5H4a.75.75 0 1 1 0-1.5h3.76L9.28 2.8c.1-.4.52-.63.92-.52"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHashtagChat;
