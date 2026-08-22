import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPeopleNearby = forwardRef<SVGSVGElement, IconProps>(
  function IconPeopleNearby(
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
              d="M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m6.05 10.85.23-.71zm2.17.72L8 12.3zm.8 1.69-.7-.27zM7.77 16.5l.7.27zm10.18-5.65-.23-.71zm-2.17.72.23.72zm-.8 1.69.7-.27zm1.25 3.24-.7.27zm-5.8 1.26.65.37zM12 15l.65-.37a.75.75 0 0 0-1.3 0zm5.15-7.1-.16-.74zm-1.9.4.16.74zm-6.5 0 .16-.73zm-1.9-.4-.15.73zm6.73 9.86-.66.37zm1.46-9.41-.15-.74zm-6.08 0-.15.73zm6.32 3.42.4.64zm-.46.98.74-.1zm-6.1-.98-.4.64zm.46.98.74.1zm-3.37-1.19L8 12.3l.47-1.43-2.18-.72zM8.31 13l-1.24 3.24 1.4.54 1.25-3.24zm9.4-2.85-2.17.72.47 1.43 2.18-.73zm-3.43 3.39 1.25 3.24 1.4-.54L15.68 13zm-3.2 4.6 1.57-2.76-1.3-.74-1.58 2.76zm5.9-10.97-1.89.41.32 1.47 1.9-.4zm-8.07.41L7 7.17l-.3 1.45 1.9.4zm2.44 7.8 1.57 2.76 1.3-.74-1.57-2.76zm3.74-7.8-.2.04.3 1.47q.07 0 .22-.04zM8.6 9.04l.22.04.3-1.47-.2-.04zm6.3-1.43c-1.9.4-3.87.4-5.78 0l-.3 1.47c2.1.44 4.28.44 6.38 0zM9.15 19.25c.8 0 1.53-.43 1.93-1.12l-1.3-.74a.7.7 0 0 1-.63.36zm6.38-2.48a.72.72 0 0 1-.68.98v1.5a2.22 2.22 0 0 0 2.08-3.02zm.01-5.9q-.35.1-.65.26l.79 1.28.05-.03.28-.1zm.14 2.12-.1-.28-.02-.06-1.48.2q.06.35.2.68zm-.79-1.86c-.59.36-.9 1.04-.81 1.73l1.48-.2q-.02-.16.12-.25zm3.36-1.73a.8.8 0 0 1-.54.74l.48 1.42a2.3 2.3 0 0 0 1.56-2.16zM7.07 16.23a2.22 2.22 0 0 0 2.08 3.02v-1.5a.72.72 0 0 1-.68-.98zm.92-3.94.28.1.05.02.79-1.28q-.31-.17-.65-.27zm1.73 1.24q.14-.33.2-.67l-1.48-.2-.02.05-.1.28zm-1.4-1.12q.13.08.12.24l1.48.2c.1-.68-.22-1.36-.81-1.72zM4.25 9.4c0 .98.63 1.85 1.56 2.16l.47-1.42a.8.8 0 0 1-.53-.74zm1.5 0c0-.5.46-.87.95-.77L7 7.16A2.28 2.28 0 0 0 4.25 9.4zm7.17 8.73c.4.7 1.14 1.12 1.93 1.12v-1.5a.7.7 0 0 1-.62-.36zm6.83-8.73a2.28 2.28 0 0 0-2.76-2.24l.31 1.47c.5-.1.95.27.95.77z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.45 14.5c1.59.8 2.55 1.85 2.55 3 0 2.49-4.48 4.5-10 4.5S2 19.99 2 17.5c0-1.15.96-2.2 2.55-3"
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
              d="M19.72 20.36C21.14 19.58 22 18.6 22 17.5c0-1.15-.96-2.2-2.55-3A17 17 0 0 0 12 13c-2.96 0-5.62.58-7.45 1.5-1.59.8-2.55 1.85-2.55 3s.96 2.2 2.55 3C6.38 21.42 9.04 22 12 22c3.1 0 5.88-.64 7.72-1.64"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
              fill="currentColor"
            />
            <path
              d="m8.22 11.57-2.17-.72a1.53 1.53 0 0 1 .8-2.95l1.9.4.21.05a15 15 0 0 0 6.29-.05l1.9-.4a1.53 1.53 0 0 1 .8 2.95l-2.17.72c-.27.1-.4.14-.5.2a1 1 0 0 0-.46.98c.01.12.06.25.16.5l1.25 3.25a1.47 1.47 0 0 1-2.65 1.26L12 15l-1.58 2.76a1.47 1.47 0 0 1-2.65-1.26l1.25-3.24q.15-.37.16-.5a1 1 0 0 0-.46-1z"
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
              d="M9.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
              fill="currentColor"
            />
            <path
              d="m8.22 11.57-2.17-.72a1.53 1.53 0 0 1 .8-2.95l1.9.4.21.05a15 15 0 0 0 6.29-.05l1.9-.4a1.53 1.53 0 0 1 .8 2.95l-2.17.72c-.27.1-.4.14-.5.2a1 1 0 0 0-.46.98c.01.12.06.25.16.5l1.25 3.25a1.47 1.47 0 0 1-2.65 1.26L12 15l-1.58 2.76a1.47 1.47 0 0 1-2.65-1.26l1.25-3.24q.15-.37.16-.5a1 1 0 0 0-.46-1z"
              fill="currentColor"
            />
            <path
              d="M12 22c5.52 0 10-2.01 10-4.5 0-1.72-2.15-3.22-5.3-3.97l.93 2.43a2.97 2.97 0 0 1-5.36 2.54l-.27-.48-.27.48a2.97 2.97 0 0 1-5.36-2.54l.94-2.43C4.15 14.28 2 15.78 2 17.5 2 19.99 6.48 22 12 22"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPeopleNearby;
