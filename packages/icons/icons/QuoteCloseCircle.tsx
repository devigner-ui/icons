import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconQuoteCloseCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconQuoteCloseCircle(
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
            d="M17 11.84h-2.68c-.7 0-1.19-.54-1.19-1.19V9.16c0-.65.48-1.19 1.2-1.19h1.48c.65 0 1.2.54 1.2 1.19z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M17 11.84c0 2.79-.52 3.26-2.09 4.19"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10.86 11.84H8.18c-.71 0-1.19-.54-1.19-1.19V9.16c0-.65.48-1.19 1.19-1.19h1.49c.65 0 1.19.54 1.19 1.19z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10.86 11.84c0 2.79-.52 3.26-2.09 4.19"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M4 6a10 10 0 1 0 3.97-3.15"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M17 11.84h-2.67c-.7 0-1.19-.54-1.19-1.19V9.16c0-.65.48-1.19 1.2-1.19h1.48c.65 0 1.2.54 1.2 1.19z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 11.84c0 2.79-.52 3.26-2.09 4.19"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.86 11.84H8.18c-.7 0-1.19-.54-1.19-1.19V9.16c0-.65.48-1.19 1.2-1.19h1.48c.65 0 1.2.54 1.2 1.19z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.86 11.84c0 2.79-.52 3.26-2.09 4.19"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
              opacity={duotone ? "0.4" : "1"}
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M15.81 7.22h-1.48c-1.09 0-1.94.85-1.94 1.94v1.49c0 1.09.85 1.94 1.94 1.94h1.91c-.08 1.81-.5 2.08-1.7 2.79a.75.75 0 0 0-.27 1.03c.14.24.4.37.65.37q.2 0 .38-.1c1.8-1.06 2.46-1.75 2.46-4.83V9.18c0-1.09-.87-1.96-1.94-1.96"
              fill="currentColor"
            />
            <path
              d="M9.68 7.22H8.19c-1.09 0-1.94.85-1.94 1.94v1.49c0 1.09.85 1.94 1.94 1.94h1.91c-.08 1.81-.5 2.08-1.7 2.79a.75.75 0 0 0-.27 1.03c.14.24.4.37.65.37q.2 0 .38-.1c1.8-1.06 2.46-1.75 2.46-4.83V9.18a1.96 1.96 0 0 0-1.94-1.96"
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
              d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m-.39 9.84c0 3.08-.67 3.77-2.46 4.83a1 1 0 0 1-.38.1.8.8 0 0 1-.65-.37.76.76 0 0 1 .26-1.03c1.21-.72 1.63-.98 1.71-2.79h-1.9a1.9 1.9 0 0 1-1.94-1.94V9.16c0-1.09.85-1.94 1.94-1.94h1.5c1.06 0 1.93.87 1.93 1.94zm6.14 0c0 3.08-.67 3.77-2.46 4.83a1 1 0 0 1-.38.1.8.8 0 0 1-.65-.37.76.76 0 0 1 .26-1.03c1.21-.72 1.63-.98 1.71-2.79h-1.9a1.9 1.9 0 0 1-1.95-1.94V9.16c0-1.09.85-1.94 1.94-1.94h1.5c1.06 0 1.93.87 1.93 1.94z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconQuoteCloseCircle;
