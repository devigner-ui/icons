import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiGame = forwardRef<SVGSVGElement, IconProps>(function IconAiGame(
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
            d="M8.84 17H8.5l-1.2 1.6c-.6.9-1.6 1.4-2.6 1.4-1.9 0-3.3-1.6-3-3.5l.9-6.2C3 7.8 5 6 7.5 6h9c2.5 0 4.5 1.8 4.9 4.3l.9 6.2c.3 1.9-1.2 3.5-3 3.5-1 0-2-.5-2.6-1.4L15.5 17h-4.26"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 11.5h3.5M7.75 9.75v3.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 9.2c.2 1.52.78 2.1 2.3 2.3-1.52.2-2.1.78-2.3 2.3-.2-1.52-.78-2.1-2.3-2.3 1.52-.2 2.1-.78 2.3-2.3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M7.5 6h9c2.5 0 4.5 1.8 4.9 4.3l.9 6.2c.3 1.9-1.2 3.5-3 3.5-1 0-2-.5-2.6-1.4L15.5 17h-7l-1.2 1.6c-.6.9-1.6 1.4-2.6 1.4-1.9 0-3.3-1.6-3-3.5l.9-6.2C3 7.8 5 6 7.5 6Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 11.5h3.5M7.75 9.75v3.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 9.2c.2 1.52.78 2.1 2.3 2.3-1.52.2-2.1.78-2.3 2.3-.2-1.52-.78-2.1-2.3-2.3 1.52-.2 2.1-.78 2.3-2.3Z"
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
            d="M7.5 5.25h9a6 6 0 0 1 3.73 1.4 6.3 6.3 0 0 1 1.91 3.54l.9 6.2a4 4 0 0 1-.89 3.07 4 4 0 0 1-2.85 1.3 4.2 4.2 0 0 1-3.2-1.7l-.97-1.3H8.88l-.96 1.26a4.3 4.3 0 0 1-3.22 1.73 4 4 0 0 1-2.9-1.3 4 4 0 0 1-.84-3.06l.9-6.2a6.3 6.3 0 0 1 1.9-3.54 6 6 0 0 1 3.74-1.4z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M5.25 11.5c0-.41.34-.75.75-.75h1v-1a.75.75 0 0 1 1.5 0v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0v-1H6a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M16.4 8.8c.1.83.29 1.3.64 1.66s.83.54 1.66.64a.4.4 0 0 1 0 .8c-.83.1-1.3.29-1.66.64s-.54.83-.64 1.66a.4.4 0 0 1-.8 0c-.1-.83-.29-1.3-.64-1.66s-.83-.54-1.66-.64a.4.4 0 0 1 0-.8c.83-.1 1.3-.29 1.66-.64s.54-.83.64-1.66a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="M7.5 5.25h9a6 6 0 0 1 3.73 1.4 6.3 6.3 0 0 1 1.91 3.54l.9 6.2a4 4 0 0 1-.89 3.07 4 4 0 0 1-2.85 1.3 4.2 4.2 0 0 1-3.2-1.7l-.97-1.3H8.88l-.96 1.26a4.3 4.3 0 0 1-3.22 1.73 4 4 0 0 1-2.9-1.3 4 4 0 0 1-.84-3.06l.9-6.2a6.3 6.3 0 0 1 1.9-3.54 6 6 0 0 1 3.74-1.4zm-1.5 7h1v1a.75.75 0 0 0 1.5 0v-1h1a.75.75 0 0 0 0-1.5h-1v-1a.75.75 0 0 0-1.5 0v1H6a.75.75 0 0 0 0 1.5zm10-3.8a.4.4 0 0 0-.4.35c-.1.83-.29 1.3-.64 1.66s-.83.54-1.66.64a.4.4 0 0 0 0 .8c.83.1 1.3.29 1.66.64s.54.83.64 1.66a.4.4 0 0 0 .8 0c.1-.83.29-1.3.64-1.66s.83-.54 1.66-.64a.4.4 0 0 0 0-.8c-.83-.1-1.3-.29-1.66-.64s-.54-.83-.64-1.66a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiGame;
