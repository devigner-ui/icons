import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconNotebookSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconNotebookSquare(
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
            <g clipPath="url(#clip0_1_9074)">
              <path
                d="m16.56 6.02-.04-.75zm-1.86.25-.2-.72zm-2.18 1-.37-.65zM7.5 6.07l-.06.74zm1.51.2L8.82 7zm2.46 1.02-.34.67zm1.05 8.43.35.67zM15 14.7l-.18-.73zm1.49-.21.06.75zm-5 1.24-.35.67zM9 14.7l.18-.73zm-1.49-.21-.06.75zm-.76-1.57V7.5h-1.5v5.41zm12 0V7.45h-1.5v5.46zm-2.23-7.64c-.63.03-1.4.1-2.02.28L14.9 7c.46-.12 1.1-.19 1.7-.22zm-2.02.28c-.83.23-1.8.75-2.35 1.07l.75 1.3a10 10 0 0 1 2-.93zM7.43 6.8c.5.04 1 .1 1.4.19l.35-1.46c-.5-.12-1.11-.19-1.64-.23zm1.4.19c.72.18 1.67.64 2.29.96l.7-1.33c-.62-.32-1.72-.86-2.64-1.09zm4.03 9.39c.6-.32 1.58-.8 2.32-.98l-.36-1.45c-.93.23-2.05.78-2.66 1.1zm2.32-.98c.38-.09.87-.15 1.37-.18l-.12-1.5c-.52.04-1.11.1-1.6.23zm-3.34-.35c-.6-.32-1.73-.87-2.66-1.1l-.36 1.45c.74.18 1.71.66 2.32.98zm-2.66-1.1c-.5-.12-1.1-.2-1.61-.23l-.12 1.5c.5.03 1 .1 1.37.18zm8.07-1.05c0 .4-.34.78-.82.82l.12 1.5a2.35 2.35 0 0 0 2.2-2.32zm1.5-5.46c0-1.2-.96-2.24-2.23-2.18l.07 1.5c.34-.02.66.26.66.68zM5.25 12.9a2.35 2.35 0 0 0 2.2 2.32l.12-1.5c-.48-.04-.82-.41-.82-.82zm6.9 2.15a.3.3 0 0 1-.3 0l-.7 1.33c.53.28 1.17.28 1.7 0zm0-8.44a.4.4 0 0 1-.34.01l-.7 1.33c.57.3 1.24.28 1.79-.04zm-5.4.88c0-.43.33-.72.68-.7l.11-1.49c-1.3-.1-2.29.97-2.29 2.19z"
                fill="currentColor"
              />
              <path
                d="M12 7.59V16"
                stroke="currentColor"
                strokeWidth={strokeWidth}
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M2 9c0-3.77 0-5.66 1.17-6.83S6.23 1 10 1h4c3.77 0 5.66 0 6.83 1.17S22 5.23 22 9v4c0 3.77 0 5.66-1.17 6.83S17.77 21 14 21h-4c-3.77 0-5.66 0-6.83-1.17S2 16.77 2 13z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
              />
            </g>
            <defs>
              <clipPath>
                <rect
                  width="24"
                  height="24"
                  fill="none"
                  transform="translate(0 0.000488281)"
                />
              </clipPath>
            </defs>
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
              d="M2 9c0-3.77 0-5.66 1.17-6.83S6.23 1 10 1h4c3.77 0 5.66 0 6.83 1.17S22 5.23 22 9v4c0 3.77 0 5.66-1.17 6.83S17.77 21 14 21h-4c-3.77 0-5.66 0-6.83-1.17S2 16.77 2 13z"
              fill="currentColor"
            />
            <path
              d="M6 12.91V7.5c0-.83.67-1.5 1.49-1.44.51.04 1.07.1 1.51.21a12 12 0 0 1 2.5 1.04v8.42c-.62-.33-1.66-.84-2.5-1.04a10 10 0 0 0-1.49-.21A1.6 1.6 0 0 1 6 12.9"
              fill="currentColor"
            />
            <path
              d="M12.5 15.73c.62-.33 1.66-.84 2.5-1.04.44-.11.98-.17 1.49-.21A1.6 1.6 0 0 0 18 12.9V7.45c0-.8-.64-1.47-1.44-1.43-.62.03-1.32.1-1.86.25a11 11 0 0 0-2.2 1.01z"
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
              d="M3.17 2.17C2 3.34 2 5.23 2 9v4c0 3.77 0 5.66 1.17 6.83S6.23 21 10 21h4c3.77 0 5.66 0 6.83-1.17S22 16.77 22 13V9c0-3.77 0-5.66-1.17-6.83S17.77 1 14 1h-4C6.23 1 4.34 1 3.17 2.17m9.34 13.55V7.29h.02c.56-.33 1.45-.8 2.18-1a9 9 0 0 1 1.86-.26A1.4 1.4 0 0 1 18 7.45v5.46c0 .83-.68 1.5-1.51 1.57-.5.04-1.05.1-1.49.2-.84.21-1.88.72-2.5 1.04M6 7.5v5.41c0 .83.68 1.5 1.51 1.57.5.04 1.05.1 1.49.2.84.21 1.88.72 2.5 1.04v-8.4l-.04-.03c-.6-.32-1.64-.82-2.46-1.02-.44-.1-1-.17-1.51-.2A1.4 1.4 0 0 0 6 7.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconNotebookSquare;
