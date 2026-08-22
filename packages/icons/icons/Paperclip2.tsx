import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPaperclip2 = forwardRef<SVGSVGElement, IconProps>(
  function IconPaperclip2(
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
              d="m8.1 17.42 7.39-7.07c.44-.43.67-.64.79-.87.2-.42.2-.9 0-1.32-.12-.24-.35-.45-.8-.88M3.52 10.15 9.5 4.4c1.04-1 1.56-1.5 2.1-1.8a5 5 0 0 1 4.77 0c.54.3 1.07.8 2.11 1.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m18.48 13.01-.52-.54zm-7.43 7.12-.52-.54zm-6.1-5.84-.52-.54zm7.33-7.01-.52-.54zm2.3-.76-.32.69zm-1.39 0-.31-.68zM4.95 20.13l-.52.54zm-1.84-2.19.72-.22zm0-1.46-.71-.22zm5.65 5.41.2.72zm-1.52 0 .2-.72zM19 3.87a.75.75 0 1 0-1.04 1.08zm1.36 2.56.64-.38zm0 4.56.64.4zm-2.4 1.48-7.43 7.12 1.04 1.08L19 13.56zM5.47 14.84l7.33-7.02-1.04-1.08-7.33 7.01zm10.54-8.1c-.4-.39-.74-.72-1.12-.9l-.63 1.37c.1.04.22.14.7.61zM12.8 7.82c.49-.47.6-.57.7-.61l-.62-1.37c-.39.18-.72.51-1.12.9zm2.09-1.98a2.4 2.4 0 0 0-2.01 0l.63 1.37a1 1 0 0 1 .75 0zM5.47 19.6c-.56-.53-.94-.9-1.22-1.21-.26-.3-.37-.5-.42-.66l-1.43.45c.14.45.4.82.73 1.2q.49.55 1.3 1.3zm-1.04-5.84q-.82.77-1.3 1.3c-.33.38-.6.76-.73 1.21l1.43.45c.05-.16.16-.36.42-.66.28-.3.66-.68 1.22-1.21zm-.6 3.97q-.15-.5 0-1.01l-1.43-.45c-.2.62-.2 1.29 0 1.9zm6.7 1.87c-.56.54-.94.9-1.27 1.16a2 2 0 0 1-.7.42l.4 1.44a4 4 0 0 0 1.24-.69q.57-.46 1.37-1.25zm-6.1 1.08q.8.78 1.37 1.25.57.48 1.23.7l.42-1.45c-.19-.05-.4-.16-.71-.42-.33-.26-.71-.62-1.27-1.16zm4.12.5q-.55.15-1.1 0l-.42 1.44q.96.29 1.94 0zm9.41-16.22a11 11 0 0 1 1.76 1.87L21 6.05c-.37-.63-1-1.21-2-2.18zm1.04 8.6c1-.96 1.63-1.54 2-2.17l-1.28-.77c-.25.41-.68.83-1.76 1.86zm.72-6.73c.7 1.17.7 2.61 0 3.79l1.28.77c1-1.65 1-3.69 0-5.33z"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.24 1.96a5.7 5.7 0 0 1 5.5 0A12 12 0 0 1 19 3.87a.75.75 0 1 1-1.04 1.08 11 11 0 0 0-1.95-1.68 4.2 4.2 0 0 0-4.04 0c-.44.24-.88.65-1.95 1.68l-6 5.74A.75.75 0 1 1 3 9.6l5.99-5.73.1-.09c.95-.91 1.53-1.48 2.16-1.82m3.7 4.8c.3-.3.77-.3 1.07-.02l.08.07c.36.36.68.66.86 1 .31.64.31 1.37 0 2-.18.35-.5.66-.86 1l-.08.08-7.38 7.07a.75.75 0 1 1-1.04-1.08l7.38-7.07c.5-.47.6-.58.64-.67q.15-.32 0-.65c-.05-.09-.15-.2-.64-.67a.75.75 0 0 1-.03-1.06"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.96 4.95a11 11 0 0 1 1.76 1.87c.7 1.17.7 2.61 0 3.79-.25.41-.68.83-1.76 1.86l-7.43 7.12c-.56.54-.94.9-1.27 1.16a2 2 0 0 1-.7.42q-.56.15-1.11 0c-.19-.05-.4-.16-.71-.42-.33-.26-.71-.62-1.27-1.16s-.94-.9-1.22-1.21c-.26-.3-.37-.5-.42-.66q-.15-.5 0-1.01c.05-.16.16-.36.42-.66.28-.3.66-.68 1.22-1.21l7.33-7.02c.49-.47.6-.57.7-.61a1 1 0 0 1 .76 0 4 4 0 0 1 .7.61.75.75 0 0 1 1.03-1.1l-.06-.06c-.37-.35-.68-.65-1.04-.82a2.4 2.4 0 0 0-2.01 0c-.36.17-.67.47-1.04.82L4.4 13.78q-.8.74-1.28 1.28a3.1 3.1 0 0 0 0 4.3q.48.54 1.28 1.3l.05.04q.78.76 1.34 1.22.57.48 1.23.7.96.27 1.94 0a4 4 0 0 0 1.23-.7q.56-.46 1.34-1.22l7.56-7.24c.95-.9 1.54-1.47 1.9-2.08 1-1.65 1-3.69 0-5.33-.36-.61-.95-1.18-1.9-2.09l-.08-.07a.75.75 0 0 1-1.06 1.06"
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
              d="m8.1 17.42 7.39-7.07c.44-.43.67-.64.79-.87.2-.42.2-.9 0-1.32-.12-.24-.35-.45-.8-.88a4 4 0 0 0-.9-.76c-.44-.2-.95-.2-1.39 0-.24.12-.46.33-.91.76l-7.33 7.01c-1.1 1.06-1.65 1.58-1.84 2.2a2.4 2.4 0 0 0 0 1.45c.2.61.74 1.14 1.84 2.2 1.1 1.04 1.65 1.57 2.29 1.75q.76.22 1.52 0c.64-.18 1.19-.7 2.29-1.76l7.43-7.12c1.05-1 1.57-1.5 1.88-2.02a4.4 4.4 0 0 0 0-4.56c-.31-.52-.83-1.02-1.88-2.02a12 12 0 0 0-2.1-1.8 5 5 0 0 0-4.77 0c-.55.3-1.07.8-2.11 1.8l-6 5.74"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              stroke="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPaperclip2;
