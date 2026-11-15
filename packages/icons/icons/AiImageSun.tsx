import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiImageSun = forwardRef<SVGSVGElement, IconProps>(function IconAiImageSun(
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
            d="M10.15 20.5H6A3.5 3.5 0 0 1 2.5 17V7A3.5 3.5 0 0 1 6 3.5h12A3.5 3.5 0 0 1 21.5 7v10a3.5 3.5 0 0 1-3.5 3.5h-5.45"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m2.5 16.5 5.1-4.9 4.7 4.2 3.3-3.2 5.9 4.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 5.5c.2 1.52.78 2.1 2.3 2.3-1.52.2-2.1.78-2.3 2.3-.2-1.52-.78-2.1-2.3-2.3 1.52-.2 2.1-.78 2.3-2.3Z"
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
            d="M6 3.5h12A3.5 3.5 0 0 1 21.5 7v10a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17V7A3.5 3.5 0 0 1 6 3.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m2.5 16.5 5.1-4.9 4.7 4.2 3.3-3.2 5.9 4.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 5.5c.2 1.52.78 2.1 2.3 2.3-1.52.2-2.1.78-2.3 2.3-.2-1.52-.78-2.1-2.3-2.3 1.52-.2 2.1-.78 2.3-2.3Z"
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
            d="M6 2.75h12A4.6 4.6 0 0 1 21 4a4.6 4.6 0 0 1 1.25 3v10A4.6 4.6 0 0 1 21 20a4.6 4.6 0 0 1-3 1.25H6A4.6 4.6 0 0 1 3 20a4.6 4.6 0 0 1-1.25-3V7A4.6 4.6 0 0 1 3 4a4.6 4.6 0 0 1 3-1.25z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m1.98 15.96 5.1-4.9a.7.7 0 0 1 .83-.14q.1.04.2.12l4.17 3.74 2.79-2.71a1 1 0 0 1 .47-.22 1 1 0 0 1 .5.15l5.9 4.19q.3.24.3.62V17A4.6 4.6 0 0 1 21 20a4.6 4.6 0 0 1-3 1.25H6A4.6 4.6 0 0 1 3 20a4.6 4.6 0 0 1-1.25-3v-.5q0-.32.23-.54z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M15.9 5.1c.1.83.29 1.3.64 1.66s.83.54 1.66.64a.4.4 0 0 1 0 .8c-.83.1-1.3.29-1.66.64s-.54.83-.64 1.66a.4.4 0 0 1-.8 0c-.1-.83-.29-1.3-.64-1.66s-.83-.54-1.66-.64a.4.4 0 0 1 0-.8c.83-.1 1.3-.29 1.66-.64s.54-.83.64-1.66a.4.4 0 0 1 .8 0z"
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
            d="M6 2.75h12A4.6 4.6 0 0 1 21 4a4.6 4.6 0 0 1 1.25 3v9.41L16.05 12a.7.7 0 0 0-.82-.05l-.16.12-2.79 2.7-4.17-3.72a.7.7 0 0 0-.52-.2.8.8 0 0 0-.51.21l-5.33 5.12V7a4.6 4.6 0 0 1 1.24-3A4.6 4.6 0 0 1 6 2.75zm15 17.26a4.6 4.6 0 0 1-3 1.24H6A4.6 4.6 0 0 1 3 20a4.4 4.4 0 0 1-1.08-1.9l5.7-5.48 4.18 3.73q.08.09.2.13a.8.8 0 0 0 .83-.15l2.84-2.76 6.4 4.56A4.4 4.4 0 0 1 21 20zM15.5 4.74a.4.4 0 0 0-.4.35c-.1.83-.29 1.3-.64 1.66s-.83.54-1.66.64a.4.4 0 0 0 0 .8c.83.1 1.3.29 1.66.64s.54.83.64 1.66a.4.4 0 0 0 .8 0c.1-.83.29-1.3.64-1.66s.83-.54 1.66-.64a.4.4 0 0 0 0-.8c-.83-.1-1.3-.29-1.66-.64S16 5.93 15.9 5.1a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiImageSun;
