import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconChatLine = forwardRef<SVGSVGElement, IconProps>(function IconChatLine(
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
            d="m13.09 21.39.64.38zm.54-.92-.65-.38zm-3.26 0-.64.38zm.54.92.65-.38zM2.38 15.9l.7-.28zM7.8 19l-.01.75zm-2.7-.37-.29.7zm16.53-2.7.7.28zM16.22 19l-.01-.75zm2.7-.37.29.7zm.7-15.88-.39.64zm1.65 1.65.64-.4zM4.4 2.74 4 2.1zM2.74 4.39l-.64-.4zM9.4 19.2l.38-.65zm4.33 2.56.54-.92-1.29-.76-.54.92zm-4-.92.54.92 1.29-.76-.54-.92zm2.71.16a.52.52 0 0 1-.88 0l-1.3.76c.78 1.3 2.7 1.3 3.47 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0q-.01 1.71.05 2.79c.05.73.15 1.34.39 1.91l1.38-.57a5 5 0 0 1-.27-1.45c-.05-.66-.05-1.5-.05-2.68zm6.55 6.74a7 7 0 0 1-2.43-.31L4.8 19.3c.8.34 1.72.41 2.98.43zM1.7 16.2a5.8 5.8 0 0 0 3.11 3.11l.57-1.38a4.3 4.3 0 0 1-2.3-2.3zm19.56-4.7c0 1.18 0 2.02-.05 2.69a5 5 0 0 1-.27 1.44l1.38.57a6 6 0 0 0 .4-1.91q.05-1.08.04-2.79zm-5.03 8.24a8 8 0 0 0 2.98-.43l-.57-1.38c-.52.21-1.18.29-2.43.31zm4.7-4.11a4.3 4.3 0 0 1-2.3 2.3l.58 1.38a5.8 5.8 0 0 0 3.11-3.1zM13.5 2.75c1.65 0 2.84 0 3.76.09s1.5.25 1.96.54L20 2.1a6 6 0 0 0-2.6-.75c-1-.1-2.28-.1-3.9-.1zm9.25 7.75c0-1.62 0-2.9-.1-3.9A6 6 0 0 0 21.9 4l-1.28.78c.29.46.45 1.04.54 1.96s.09 2.1.09 3.76zm-3.53-7.12q.87.54 1.4 1.4L21.9 4A6 6 0 0 0 20 2.1zM10.5 1.25c-1.62 0-2.9 0-3.9.1-1.03.1-1.87.3-2.6.75l.78 1.28a4.4 4.4 0 0 1 1.96-.54c.92-.09 2.1-.09 3.76-.09zM2.75 10.5c0-1.65 0-2.84.09-3.76s.25-1.5.54-1.96L2.1 4a6 6 0 0 0-.75 2.6c-.1 1-.1 2.28-.1 3.9zM4 2.1A6 6 0 0 0 2.1 4l1.28.78q.54-.87 1.4-1.4zm7.02 17.99q-.3-.52-.56-.88-.26-.39-.68-.65l-.75 1.3c.04.03.1.08.22.23l.48.76zm-3.24-.35c.44 0 .71.01.93.04.2.02.27.05.32.08l.75-1.3q-.45-.24-.9-.27-.46-.05-1.08-.05zm6.5 1.11q.3-.53.47-.76.16-.2.22-.23l-.75-1.3q-.42.27-.68.65-.26.36-.56.88zm1.92-2.6q-.62-.01-1.07.04-.47.03-.91.27l.75 1.3a1 1 0 0 1 .32-.08c.22-.03.5-.03.93-.04z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 9h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 12.5h5.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="m13.63 20.47-.54.92c-.49.81-1.7.81-2.18 0l-.54-.92c-.42-.7-.63-1.06-.97-1.26s-.76-.2-1.61-.22a7 7 0 0 1-2.7-.37 5 5 0 0 1-2.7-2.7C2 14.98 2 13.82 2 11.5v-1c0-3.27 0-4.91.74-6.11a5 5 0 0 1 1.65-1.65C5.59 2 7.23 2 10.5 2h3c3.27 0 4.91 0 6.11.74a5 5 0 0 1 1.65 1.65c.74 1.2.74 2.84.74 6.11v1c0 2.33 0 3.5-.38 4.41a5 5 0 0 1-2.7 2.71 7 7 0 0 1-2.71.37c-.85.02-1.28.02-1.61.22s-.55.55-.97 1.26"
            fill="currentColor"
          />
          <path
            d="M7.25 9c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9"
            fill="currentColor"
          />
          <path
            d="M7.25 12.5c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="m13.63 20.47-.54.92c-.49.81-1.7.81-2.18 0l-.54-.92c-.42-.7-.63-1.06-.97-1.26s-.76-.2-1.61-.22a7 7 0 0 1-2.7-.37 5 5 0 0 1-2.7-2.7C2 14.98 2 13.82 2 11.5v-1c0-3.27 0-4.91.74-6.11a5 5 0 0 1 1.65-1.65C5.59 2 7.23 2 10.5 2h3c3.27 0 4.91 0 6.11.74a5 5 0 0 1 1.65 1.65c.74 1.2.74 2.84.74 6.11v1c0 2.33 0 3.5-.38 4.41a5 5 0 0 1-2.7 2.71 7 7 0 0 1-2.71.37c-.85.02-1.28.02-1.61.22s-.55.55-.97 1.26M8 11.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 1 0 0-1.5zM7.25 9c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconChatLine;
