import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTrashBin2 = forwardRef<SVGSVGElement, IconProps>(
  function IconTrashBin2(
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
              d="M20.5 6h-17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m18.83 8.5-.46 6.9c-.17 2.65-.26 3.98-1.13 4.8-.86.8-2.2.8-4.85.8h-.78c-2.66 0-3.99 0-4.85-.8-.87-.82-.96-2.15-1.13-4.8l-.46-6.9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m9.5 11 .5 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m14.5 11-.5 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.5 6h.1a2 2 0 0 0 1.84-1.32l.03-.1.1-.3q.11-.34.18-.47a1.5 1.5 0 0 1 1.1-.8l.5-.01h3.3c.26 0 .39 0 .5.02.47.07.88.37 1.1.79.05.1.1.23.18.48l.1.29.03.1A2 2 0 0 0 17.5 6"
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
              opacity={duotone ? "0.4" : "1"}
              d="M11.6 22h.8c2.79 0 4.18 0 5.08-.89.9-.88 1-2.34 1.19-5.24l.26-4.19c.1-1.58.15-2.36-.3-2.86s-1.22-.5-2.75-.5H8.12c-1.53 0-2.3 0-2.75.5s-.4 1.28-.3 2.86l.26 4.19c.19 2.9.28 4.36 1.19 5.24.9.89 2.3.89 5.08.89"
              fill="currentColor"
            />
            <path
              d="M3 6.39c0-.49.35-.88.77-.88h2.67c.53-.02 1-.4 1.17-.97l.03-.1.12-.39q.1-.36.21-.63c.34-.74.97-1.26 1.7-1.39q.26-.04.6-.03h3.47q.33 0 .6.03c.72.13 1.35.65 1.69 1.39q.11.28.21.63l.12.4.03.1c.18.56.74.94 1.27.96h2.57c.42 0 .77.4.77.88s-.35.87-.77.87H3.77c-.42 0-.77-.39-.77-.87"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.43 11.48c.4-.04.78.27.82.7l.5 5.27a.8.8 0 0 1-.68.87.76.76 0 0 1-.82-.71l-.5-5.26a.8.8 0 0 1 .68-.87"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.57 11.48c.42.04.72.43.68.87l-.5 5.26a.76.76 0 0 1-.82.7.8.8 0 0 1-.68-.86l.5-5.26a.75.75 0 0 1 .82-.7"
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
              d="M3 6.39c0-.49.35-.88.77-.88h2.67c.53-.02 1-.4 1.17-.97l.03-.1.12-.39q.1-.36.21-.63c.34-.74.97-1.26 1.7-1.39q.26-.04.6-.03h3.47q.33 0 .6.03c.72.13 1.35.65 1.69 1.39q.11.28.21.63l.12.4.03.1c.18.56.74.94 1.27.96h2.57c.42 0 .77.4.77.88s-.35.87-.77.87H3.77c-.42 0-.77-.39-.77-.87"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.6 22h.8c2.79 0 4.18 0 5.08-.89.9-.88 1-2.34 1.19-5.24l.26-4.19c.1-1.58.15-2.36-.3-2.86s-1.22-.5-2.75-.5H8.12c-1.53 0-2.3 0-2.75.5s-.4 1.28-.3 2.86l.26 4.19c.19 2.9.28 4.36 1.19 5.24.9.89 2.3.89 5.08.89m3.65-9.65a.8.8 0 0 0-.68-.87.76.76 0 0 0-.82.7l-.5 5.27c-.04.44.26.82.68.87.4.04.78-.28.82-.71zm-5.82-.87c.4-.04.78.27.82.7l.5 5.27a.8.8 0 0 1-.68.87.76.76 0 0 1-.82-.71l-.5-5.26a.8.8 0 0 1 .68-.87"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTrashBin2;
