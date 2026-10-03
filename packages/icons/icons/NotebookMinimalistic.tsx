import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconNotebookMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconNotebookMinimalistic(
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
            d="m20.08 3.02.03.75zm-3.58.47-.22-.72v0zM13.67 4.8l-.37-.65h0zM3.98 3.08l-.04.74zm3.02.4.2-.72v0zm3.28 1.4-.35.66zm3.35 15.19.35.66zM17 18.63l-.2-.72h0zm2.99-.4.04.74zm-9.62 1.84-.35.66h0zM7 18.63l.2-.72h0zm-2.99-.4-.04.74h0zm18.74-7.7a.75.75 0 0 0-1.5 0zM21.25 7a.75.75 0 0 0 1.5 0zm-20 3.57a.75.75 0 0 0 1.5 0zM2.75 14a.75.75 0 0 0-1.5 0zm17.3-11.73a16 16 0 0 0-3.77.5l.44 1.44c.94-.29 2.27-.4 3.39-.44zm-3.77.5c-.99.3-2.1.88-2.98 1.38l.75 1.3c.85-.49 1.84-1 2.67-1.24zM3.94 3.82c.96.06 2.06.18 2.87.4l.38-1.46a18 18 0 0 0-3.16-.43zm2.87.4c.96.25 2.14.8 3.12 1.32l.7-1.33c-1-.52-2.3-1.15-3.44-1.45zm7.17 16.51c1-.53 2.22-1.1 3.21-1.37l-.38-1.45c-1.17.3-2.53.96-3.54 1.5zm3.21-1.37c.8-.21 1.88-.33 2.84-.39l-.1-1.5c-.97.07-2.17.19-3.12.44zm-6.46.05a17 17 0 0 0-3.54-1.5l-.38 1.45c1 .26 2.22.84 3.21 1.37zm-3.54-1.5c-.95-.25-2.15-.37-3.13-.44l-.1 1.5c.97.06 2.05.18 2.85.39zm14.06-1.77c0 .69-.57 1.29-1.31 1.33l.1 1.5a2.87 2.87 0 0 0 2.71-2.83zm1.5-11.2a2.63 2.63 0 0 0-2.7-2.67l.06 1.5c.61-.02 1.14.48 1.14 1.16zm-21.5 11.2a2.87 2.87 0 0 0 2.72 2.83l.1-1.5a1.37 1.37 0 0 1-1.32-1.33zm12.02 3.27c-.79.42-1.75.42-2.54 0l-.71 1.32a4.2 4.2 0 0 0 3.96 0zm.03-15.26c-.82.48-1.84.5-2.67.06l-.7 1.33c1.3.68 2.86.64 4.12-.09zM2.75 5c0-.7.55-1.22 1.19-1.18l.09-1.5A2.64 2.64 0 0 0 1.25 5zm20 11.14v-5.6h-1.5v5.6zm0-9.14V4.93h-1.5V7zm-20 3.57V5h-1.5v5.57zm0 5.57V14h-1.5v2.14z"
            fill="currentColor"
          />
          <path
            d="M12 5.5v15"
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
              d="M3 9c0-2.83 0-4.24.88-5.12S6.18 3 9 3h6c2.83 0 4.24 0 5.12.88S21 6.18 21 9v5c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59H7c-1.89 0-2.83 0-3.41-.59C3 16.83 3 15.9 3 14z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 21H2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15 15H9"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 20.24c0-.42.34-.76.77-.76h20.46c.43 0 .77.34.77.76s-.34.76-.77.76H1.77a.76.76 0 0 1-.77-.76"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.69 3.89c-.9.9-.9 2.32-.9 5.19v5.07c0 1.9 0 2.86.6 3.46.6.59 1.56.59 3.5.59h10.23c1.93 0 2.9 0 3.49-.6.6-.59.6-1.54.6-3.45V9.08c0-2.87 0-4.3-.9-5.19S17.96 3 15.07 3H8.93c-2.9 0-4.34 0-5.24.89"
              fill="currentColor"
            />
            <path
              d="M8.93 14.4a.76.76 0 0 0-.77.76c0 .42.35.76.77.76h6.14c.42 0 .77-.34.77-.76a.76.76 0 0 0-.77-.76z"
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
              d="M1 20.24c0-.42.34-.76.77-.76h20.46c.43 0 .77.34.77.76s-.34.76-.77.76H1.77a.76.76 0 0 1-.77-.76"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.69 3.89c-.9.9-.9 2.32-.9 5.19v5.07c0 1.9 0 2.86.6 3.46.6.59 1.56.59 3.5.59h10.23c1.93 0 2.89 0 3.49-.6.6-.59.6-1.54.6-3.45V9.08c0-2.87 0-4.3-.9-5.19S17.96 3 15.07 3H8.93c-2.9 0-4.34 0-5.24.89m4.47 11.27c0-.42.35-.76.77-.76h6.14c.42 0 .77.34.77.76s-.35.76-.77.76H8.93a.76.76 0 0 1-.77-.76"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconNotebookMinimalistic;
