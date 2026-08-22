import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVideoFrame2 = forwardRef<SVGSVGElement, IconProps>(
  function IconVideoFrame2(
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
              d="m2.98 2.88.5.56zm0 16.24.5-.56zm3.27.88a.75.75 0 0 0 1.5 0zm1.5-18a.75.75 0 1 0-1.5 0zM2 6.25a.75.75 0 0 0 0 1.5zm0 9a.75.75 0 0 0 0 1.5zM21.02 4.88l-.5.56zm0 16.24-.5-.56zm-4.77.88a.75.75 0 0 0 1.5 0zm1.5-18a.75.75 0 0 0-1.5 0zM22 9.75a.75.75 0 0 0 0-1.5zm0 9a.75.75 0 0 0 0-1.5zM2.75 14V8h-1.5v6zm0-6V7h-1.5v1zm0-1c0-1.09.04-1.86.16-2.44.11-.55.3-.88.57-1.12l-1-1.12a3.4 3.4 0 0 0-1.04 1.94c-.15.75-.18 1.65-.19 2.74zm5.92-5.75H6.99l.02 1.5h1.66zm-1.68 0q-1.55.01-2.63.2a4 4 0 0 0-1.89.87l1 1.12c.27-.24.62-.4 1.18-.52a14 14 0 0 1 2.36-.16zm1.68 18H7l-.02 1.5h1.68zm-1.66 0a14 14 0 0 1-2.36-.17 2.3 2.3 0 0 1-1.17-.52l-1 1.12a4 4 0 0 0 1.88.87q1.09.19 2.63.2zM1.25 14q0 1.13.02 2.03l1.5-.06q-.02-.82-.02-1.97zm.02 2.03c.05 1.55.24 2.78 1.2 3.65l1-1.12c-.45-.4-.65-1.03-.7-2.59zm4.98 3.96V20h1.5zM6.25 2h1.5zM2 6.25v1.5zm.02 9H2v1.5h.02zm8.98 4H8.67v1.5H11zM8.67 2.75H11v-1.5H8.67zM22.75 16v-6h-1.5v6zm0-6V9h-1.5v1zm0-1q.02-1.63-.19-2.74a3.4 3.4 0 0 0-1.03-1.94l-1 1.12c.27.24.45.57.56 1.12.12.58.15 1.35.16 2.44zm-7.42-4.25H17l.02-1.5h-1.68zm1.66 0a14 14 0 0 1 2.36.17c.56.11.91.28 1.17.52l1-1.12a4 4 0 0 0-1.88-.87 16 16 0 0 0-2.63-.2zm-1.66 18h1.68l-.02-1.5h-1.66zm1.68 0q1.55-.01 2.63-.2a4 4 0 0 0 1.89-.87l-1-1.12c-.27.24-.62.4-1.18.52a14 14 0 0 1-2.36.16zM21.25 16q0 1.15-.02 1.97l1.5.06q.03-.9.02-2.03zm-.02 1.97c-.05 1.56-.25 2.18-.7 2.6l1 1.1c.96-.86 1.15-2.1 1.2-3.64zM16.25 22h1.5zm0-17.99h1.5zM22 9.75v-1.5zm-.02 9H22v-1.5h-.02zm-8.98 4h2.33v-1.5H13zm2.33-19.5H13v1.5h2.33zM11.25 21c0 .97.78 1.75 1.75 1.75v-1.5a.25.25 0 0 1-.25-.25zm1.5-18c0-.97-.78-1.75-1.75-1.75v1.5c.14 0 .25.11.25.25zm.25.25a.25.25 0 0 1-.25-.25h-1.5c0 .97.78 1.75 1.75 1.75zm-2 17.5q.23.02.25.25h1.5c0-.97-.78-1.75-1.75-1.75z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 6.25a.75.75 0 1 0 0 1.5zm5.75-4.24a.75.75 0 1 0-1.5 0zm-1.5 17.98a.75.75 0 0 0 1.5 0zm-4.23-4.74a.75.75 0 0 0 0 1.5zM7 7v.75zm4.25 13a.75.75 0 0 0 1.5 0zM22 9.75a.75.75 0 0 0 0-1.5zm-4.25-5.74a.75.75 0 0 0-1.5 0zm-1.5 17.98a.75.75 0 0 0 1.5 0zm5.73-3.24a.75.75 0 0 0 0-1.5zM17 9v.75zm-5 0v-.75h-.75V9zm0 9h-.75v.75H12zm.75-15a.75.75 0 0 0-1.5 0zm-6.5 13v4h1.5v-4zm0-14v5h1.5V2zm5 1v4h1.5V3zM12 6.25H7v1.5h5zm-5 0H2v1.5h5zm4.25.75v9h1.5V7zm0 9v4h1.5v-4zm.75-.75H7v1.5h5zm-5 0H2.02v1.5H7zM16.25 18v4h1.5v-4zm0-14v5h1.5V4zM12 9.76h5v-1.5h-5zm5 0h5v-1.5h-5zM11.25 9v9h1.5V9zm.75 9.75h5v-1.5h-5zm5 0h4.98v-1.5H17z"
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
            <path d="M11.25 2.03 11 2H7.75v4.25h3.5z" fill="currentColor" />
            <path d="M11.25 7.75H2v7.5h9.25z" fill="currentColor" />
            <path d="M11.25 16.75h-3.5v3.24l.92.01h2.58z" fill="currentColor" />
            <path
              d="M6.25 2.02c-1.61.06-2.59.24-3.27.86-.75.67-.93 1.66-.97 3.37h4.24z"
              fill="currentColor"
            />
            <path
              d="M6.25 16.75v3.23c-1.61-.06-2.59-.24-3.27-.86-.6-.53-.83-1.26-.92-2.37z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path d="M12.75 7V4h3.5v4.25h-3.5z" fill="currentColor" />
              <path d="M12.75 16V9.74H22v7.5h-9.25z" fill="currentColor" />
              <path
                d="M12.75 21.97 13 22h3.25v-3.25h-3.5z"
                fill="currentColor"
              />
              <path
                d="M17.75 8.25V4.02c1.61.06 2.59.24 3.27.86.75.67.93 1.66.97 3.37z"
                fill="currentColor"
              />
              <path
                d="M21.94 18.75h-4.19v3.23c1.61-.06 2.59-.24 3.27-.86.6-.53.83-1.26.92-2.37"
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
            <path d="M11.25 2.03 11 2H7.75v4.25h3.5z" fill="currentColor" />
            <path d="M12.75 7V4h3.5v4.25h-3.5z" fill="currentColor" />
            <path d="M11.25 7.75H2v7.5h9.25z" fill="currentColor" />
            <path d="M12.75 16V9.74H22v7.5h-9.25z" fill="currentColor" />
            <path d="M11.25 16.75h-3.5v3.24l.92.01h2.58z" fill="currentColor" />
            <path d="M12.75 21.97 13 22h3.25v-3.25h-3.5z" fill="currentColor" />
            <path
              d="M6.25 2.02c-1.61.06-2.59.24-3.27.86-.75.67-.93 1.66-.97 3.37h4.24z"
              fill="currentColor"
            />
            <path
              d="M17.75 8.25V4.02c1.61.06 2.59.24 3.27.86.75.67.93 1.66.97 3.37z"
              fill="currentColor"
            />
            <path
              d="M21.94 18.75h-4.19v3.23c1.61-.06 2.59-.24 3.27-.86.6-.53.83-1.26.92-2.37"
              fill="currentColor"
            />
            <path
              d="M6.25 16.75v3.23c-1.61-.06-2.59-.24-3.27-.86-.6-.53-.83-1.26-.92-2.37z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVideoFrame2;
