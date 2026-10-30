import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFolderOpen = forwardRef<SVGSVGElement, IconProps>(
  function IconFolderOpen(
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
            d="M4 11.5V9m16 2.5V9.35c0-1.98 0-2.96-.62-3.6l-.18-.17C18.52 5 17.47 5 15.36 5h-.3c-.92 0-1.38 0-1.81-.11a3 3 0 0 1-.68-.27c-.4-.2-.72-.5-1.37-1.12l-.44-.41-.44-.4q-.76-.58-1.75-.68L7.96 2c-.7 0-1.06 0-1.35.05a3.1 3.1 0 0 0-2.55 2.4Q4 4.65 4 5v.71"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M10 17h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M10 11H8.7c-2.66 0-4 0-4.82.76q-.32.3-.54.67c-.58.98-.34 2.34.14 5.05.34 1.96.51 2.94 1.1 3.59q.24.24.52.44c.73.49 1.69.49 3.6.49h6.6c1.91 0 2.88 0 3.6-.49q.29-.2.51-.44c.6-.65.77-1.63 1.11-3.59.48-2.71.72-4.07.14-5.05a3 3 0 0 0-.54-.67C19.3 11 17.96 11 15.3 11H14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
              d="M4 11.5V5.71c0-.66 0-.99.06-1.27A3.1 3.1 0 0 1 6.6 2.05C6.9 2 7.25 2 7.96 2l.61.01a3.3 3.3 0 0 1 2.19 1.08l.44.41c.65.61.98.92 1.37 1.12q.32.17.68.27c.43.11.89.11 1.81.11h.3c2.1 0 3.16 0 3.84.58q.1.07.18.17c.62.64.62 1.62.62 3.6v2.15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 17h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M3.48 17.48c-.48-2.71-.72-4.07-.14-5.05q.22-.37.54-.67C4.7 11 6.04 11 8.7 11h6.58c2.67 0 4 0 4.83.76q.32.3.54.67c.58.98.34 2.34-.14 5.05-.34 1.96-.51 2.94-1.1 3.59q-.24.24-.52.44c-.72.49-1.69.49-3.6.49H8.7c-1.91 0-2.87 0-3.6-.49a3 3 0 0 1-.51-.44c-.6-.65-.77-1.63-1.11-3.59"
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
              d="M2.86 12.78c-.61.94-.36 2.25.14 4.87.37 1.88.55 2.82 1.18 3.45q.24.24.54.43c.76.47 1.78.47 3.8.47h6.96c2.02 0 3.04 0 3.8-.47q.3-.19.54-.43c.63-.63.81-1.57 1.18-3.45.5-2.62.75-3.93.14-4.87a3 3 0 0 0-.57-.65c-.87-.73-2.28-.73-5.1-.73H8.53c-2.81 0-4.22 0-5.1.73q-.32.29-.56.65m6.34 4.4c0-.4.34-.72.76-.72h4.08c.42 0 .76.32.76.72s-.34.72-.76.72H9.97a.74.74 0 0 1-.76-.72"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.08 12.48q.15-.18.35-.35c.87-.73 2.28-.73 5.1-.73h6.95c2.81 0 4.22 0 5.1.73q.19.17.34.36V9.76q.02-1.37-.08-2.27a2.7 2.7 0 0 0-1-1.87 3.4 3.4 0 0 0-1.82-.65q-1-.1-2.54-.08h-.36c-.98 0-1.33 0-1.65-.08a3 3 0 0 1-.53-.2 6 6 0 0 1-1.23-.97l-.48-.42c-.2-.17-.33-.3-.48-.4a4.3 4.3 0 0 0-2.18-.8q-.24-.03-.66-.02H7.8c-.64 0-1.07 0-1.43.06a3.85 3.85 0 0 0-3.22 2.88c-.07.33-.07.72-.07 1.28z"
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
              d="M15.57 9.95a33 33 0 0 1 3.82.17q.81.12 1.53.49v-.85q.02-1.37-.08-2.27a2.7 2.7 0 0 0-1-1.87 3.4 3.4 0 0 0-1.82-.65q-1-.1-2.54-.08h-.36c-.98 0-1.33 0-1.65-.08a3 3 0 0 1-.54-.2 6 6 0 0 1-1.22-.97l-.48-.42-.48-.4a4.3 4.3 0 0 0-2.18-.8q-.24-.03-.66-.02H7.8c-.64 0-1.07 0-1.43.06a3.85 3.85 0 0 0-3.22 2.88c-.07.33-.07.72-.07 1.28v4.39a5 5 0 0 1 1.98-.56c.9-.1 2.04-.1 3.37-.1z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.86 12.78c-.61.94-.36 2.25.14 4.87.37 1.88.55 2.82 1.18 3.45q.24.24.54.43c.76.47 1.78.47 3.8.47h6.96c2.02 0 3.04 0 3.8-.47q.3-.19.54-.43c.63-.63.81-1.57 1.18-3.45.5-2.62.75-3.93.14-4.87a3 3 0 0 0-.57-.65c-.87-.73-2.28-.73-5.1-.73H8.53c-2.81 0-4.22 0-5.1.73q-.32.29-.56.65m6.34 4.4c0-.4.34-.72.76-.72h4.08c.42 0 .76.32.76.72s-.34.72-.76.72H9.97a.74.74 0 0 1-.76-.72"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFolderOpen;
