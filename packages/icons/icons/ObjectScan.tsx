import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconObjectScan = forwardRef<SVGSVGElement, IconProps>(
  function IconObjectScan(
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
              opacity={duotone ? "0.4" : "1"}
              d="M22 14c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 22c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 2C6.23 2 4.34 2 3.17 3.17S2 6.23 2 10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14 2c3.77 0 5.66 0 6.83 1.17S22 6.23 22 10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M4 11.5s2.4-2 8-2 8 2 8 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.25 10a.75.75 0 0 0 1.5 0zm12.16-3.9-.53.53zM10 6.25h4v-1.5h-4zM6.75 10v-.5h-1.5v.5zm10.5-.5v.5h1.5v-.5zM14 6.25c.96 0 1.61 0 2.1.07.46.06.65.17.78.3l1.06-1.06a2.7 2.7 0 0 0-1.65-.73c-.6-.08-1.37-.08-2.29-.08zm4.75 3.25q.02-1.38-.08-2.3a2.7 2.7 0 0 0-.73-1.64l-1.06 1.06c.13.13.24.32.3.79.07.48.07 1.13.07 2.09zM10 4.75c-.92 0-1.69 0-2.3.08-.62.08-1.19.27-1.64.73l1.06 1.06c.13-.13.32-.24.79-.3.48-.07 1.13-.07 2.09-.07zM6.75 9.5c0-.96 0-1.61.07-2.1.06-.46.17-.65.3-.78L6.06 5.56a2.7 2.7 0 0 0-.73 1.65c-.08.6-.08 1.37-.08 2.29z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 10.5v4c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59h-4c-1.89 0-2.83 0-3.41-.59C6 17.33 6 16.4 6 14.51V10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M9.94 1.25H10a.75.75 0 0 1 0 1.5 36 36 0 0 0-4.29.14c-1 .14-1.58.39-2 .81-.43.43-.68 1-.82 2.01a36 36 0 0 0-.14 4.3.75.75 0 0 1-1.5 0v-.07c0-1.83 0-3.29.15-4.43a4.7 4.7 0 0 1 1.24-2.87A4.7 4.7 0 0 1 5.51 1.4c1.14-.15 2.6-.15 4.43-.15m8.35 1.64A36 36 0 0 0 14 2.75a.75.75 0 0 1 0-1.5h.06c1.83 0 3.29 0 4.43.15 1.17.16 2.12.5 2.87 1.24.75.75 1.08 1.7 1.24 2.87.15 1.14.15 2.6.15 4.43V10a.75.75 0 0 1-1.5 0c0-1.9 0-3.26-.14-4.29-.13-1-.39-1.58-.81-2-.43-.43-1-.68-2.01-.82M2 13.25c.41 0 .75.34.75.75 0 1.9 0 3.26.14 4.29.14 1 .39 1.59.81 2 .43.43 1 .69 2.01.82 1.03.14 2.38.14 4.29.14a.75.75 0 0 1 0 1.5h-.06c-1.83 0-3.29 0-4.43-.15a4.7 4.7 0 0 1-2.87-1.24 4.7 4.7 0 0 1-1.24-2.87c-.15-1.14-.15-2.6-.15-4.43V14c0-.41.34-.75.75-.75m20 0c.41 0 .75.34.75.75v.06c0 1.83 0 3.29-.15 4.43a4.7 4.7 0 0 1-1.24 2.87 4.7 4.7 0 0 1-2.87 1.24c-1.14.15-2.6.15-4.43.15H14a.75.75 0 0 1 0-1.5c1.9 0 3.26 0 4.29-.14 1-.13 1.58-.39 2-.81.43-.42.69-1 .82-2.01.14-1.03.14-2.38.14-4.29 0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 5.5h4c1.89 0 2.83 0 3.41.59.55.55.59 1.41.59 3.07v5.34c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59h-4c-1.89 0-2.83 0-3.41-.59C6 17.33 6 16.4 6 14.51V9.15c0-1.66.04-2.52.59-3.07C7.17 5.5 8.1 5.5 10 5.5"
              fill="currentColor"
            />
            <path
              d="M18.37 9.3 18 9.16c-1.83-.77-6.8-1.86-12 0a13 13 0 0 0-1.92.88l-.54.37h-.01v.01h-.01a.75.75 0 0 0 .96 1.16l.07-.06.3-.19q.41-.27 1.32-.63c1.21-.47 3.12-.95 5.83-.95s4.62.48 5.83.95a9 9 0 0 1 1.68.87h.01a.75.75 0 0 0 .96-1.15L20 11l.48-.58-.02-.01a4 4 0 0 0-.54-.37q-.51-.32-1.55-.74"
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
              d="M22 13.25c.41 0 .75.34.75.75v.06c0 1.83 0 3.29-.15 4.43a4.7 4.7 0 0 1-1.24 2.87 4.7 4.7 0 0 1-2.87 1.24c-1.14.15-2.6.15-4.43.15H14a.75.75 0 0 1 0-1.5c1.9 0 3.26 0 4.29-.14 1-.13 1.58-.39 2-.81.43-.42.69-1 .82-2.01.14-1.03.14-2.38.14-4.29 0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 13.25c.41 0 .75.34.75.75 0 1.9 0 3.26.14 4.29.14 1 .39 1.59.81 2 .43.43 1 .69 2.01.82 1.03.14 2.38.14 4.29.14a.75.75 0 0 1 0 1.5h-.06c-1.83 0-3.29 0-4.43-.15a4.7 4.7 0 0 1-2.87-1.24 4.7 4.7 0 0 1-1.24-2.87c-.15-1.14-.15-2.6-.15-4.43V14c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.94 1.25H10a.75.75 0 0 1 0 1.5 36 36 0 0 0-4.29.14c-1 .14-1.58.39-2 .81-.43.43-.68 1-.82 2.01a36 36 0 0 0-.14 4.3.75.75 0 0 1-1.5 0v-.07c0-1.83 0-3.29.15-4.43a4.7 4.7 0 0 1 1.24-2.87A4.7 4.7 0 0 1 5.51 1.4c1.14-.15 2.6-.15 4.43-.15"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.29 2.89A36 36 0 0 0 14 2.75a.75.75 0 0 1 0-1.5h.06c1.83 0 3.29 0 4.43.15 1.17.16 2.12.5 2.87 1.24.75.75 1.08 1.7 1.24 2.87.15 1.14.15 2.6.15 4.43V10a.75.75 0 0 1-1.5 0c0-1.9 0-3.26-.14-4.29-.13-1-.39-1.58-.81-2-.43-.43-1-.68-2.01-.82"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.02 13.1c.76-.35 2.42-1.6 5.98-1.6s5.22 1.25 5.98 1.6v.02q.1.03.27.15.2.14.3.33c.2.31.2.6.2.78v.17q.02 1.35-.08 2.25a2.7 2.7 0 0 1-.73 1.64c-.45.46-1.02.65-1.65.73q-.89.1-2.24.08h-4.1q-1.35.02-2.24-.08a2.7 2.7 0 0 1-1.65-.73 2.7 2.7 0 0 1-.73-1.64c-.08-.6-.08-1.35-.08-2.25v-.17c0-.17 0-.47.2-.78a1.2 1.2 0 0 1 .57-.5"
              fill="currentColor"
            />
            <path
              d="M16.3 4.83c-.6-.08-1.35-.08-2.25-.08h-4.1c-.9 0-1.65 0-2.24.08-.63.08-1.2.27-1.65.73a2.7 2.7 0 0 0-.73 1.65c-.08.6-.08 1.34-.08 2.24v.28a8 8 0 0 0-1 .78v.01h-.01a.9.9 0 0 0-.03 1.21c.3.35.78.36 1.1.04v-.01l.06-.05.26-.22q.36-.29 1.17-.7A12 12 0 0 1 12 9.7c2.42 0 4.12.55 5.2 1.08a7 7 0 0 1 1.49.97c.32.33.8.32 1.1-.03a.9.9 0 0 0-.03-1.2l-.05-.05a4 4 0 0 0-.46-.4l-.5-.35v-.28q.02-1.35-.08-2.24a2.7 2.7 0 0 0-.73-1.65 2.7 2.7 0 0 0-1.65-.73"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconObjectScan;
