import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiMailOpen = forwardRef<SVGSVGElement, IconProps>(function IconAiMailOpen(
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
            d="M16.2 20.5h2.3c1.7 0 3-1.3 3-3v-7l-7.4-5.4a4.5 4.5 0 0 0-5.2 0l-6.4 5.4v7c0 1.7 1.3 3 3 3H14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m3 10.5 7.3 5c1 .7 2.4.7 3.4 0l7.3-5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7.7c.2 1.52.78 2.1 2.3 2.3-1.52.2-2.1.78-2.3 2.3-.2-1.52-.78-2.1-2.3-2.3 1.52-.2 2.1-.78 2.3-2.3Z"
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
            d="M2.5 10.5v7c0 1.7 1.3 3 3 3h13c1.7 0 3-1.3 3-3v-7l-7.4-5.4a4.5 4.5 0 0 0-5.2 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m3 10.5 7.3 5c1 .7 2.4.7 3.4 0l7.3-5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7.7c.2 1.52.78 2.1 2.3 2.3-1.52.2-2.1.78-2.3 2.3-.2-1.52-.78-2.1-2.3-2.3 1.52-.2 2.1-.78 2.3-2.3Z"
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
            d="M8.48 4.48c.9-.6 2.01-.96 3.02-.96s2.14.38 3.04.97l7.4 5.4q.3.24.31.61v7a4 4 0 0 1-1.08 2.67 4 4 0 0 1-2.67 1.08h-13a4 4 0 0 1-2.67-1.08 4 4 0 0 1-1.08-2.67v-7q0-.35.27-.57z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M9.15 13.8c.85.59 1.76 1.47 2.85 1.47s2-.88 2.85-1.46l5.72-3.93.7-.48.67.49q.3.24.31.61v.05l-.76.52-.07.05-5.92 4.06c-1.09.74-2.11 1.6-3.5 1.6s-2.41-.86-3.5-1.6l-5.92-4.06-.11-.08-.72-.5v-.04a.7.7 0 0 1 .27-.57l.67-.56.74.51z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 7.3c.1.83.29 1.3.64 1.66s.83.54 1.66.64a.4.4 0 0 1 0 .8c-.83.1-1.3.29-1.66.64s-.54.83-.64 1.66a.4.4 0 0 1-.8 0c-.1-.83-.29-1.3-.64-1.66s-.83-.54-1.66-.64a.4.4 0 0 1 0-.8c.83-.1 1.3-.29 1.66-.64s.54-.83.64-1.66a.4.4 0 0 1 .8 0z"
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
            d="M8.48 4.48c.9-.6 2.01-.96 3.02-.96s2.14.38 3.04.97l6.73 4.92-6.18 4.23-1.28.88c-.59.4-1.12.77-1.86.75-.7-.01-1.2-.37-1.76-.75l-1.38-.95-6.13-4.2zM22.24 17.5a4 4 0 0 1-1.08 2.67 4 4 0 0 1-2.67 1.08h-13a4 4 0 0 1-2.67-1.08 4 4 0 0 1-1.08-2.67v-6.95l6.41 4.4c1.16.79 2.29 1.8 3.77 1.82 1.54.03 2.7-1 3.9-1.83l6.42-4.39zM12 6.95a.4.4 0 0 0-.4.35c-.1.83-.29 1.3-.64 1.66s-.83.54-1.66.64a.4.4 0 0 0 0 .8c.83.1 1.3.29 1.66.64s.54.83.64 1.66a.4.4 0 0 0 .8 0c.1-.83.29-1.3.64-1.66s.83-.54 1.66-.64a.4.4 0 0 0 0-.8c-.83-.1-1.3-.29-1.66-.64s-.54-.83-.64-1.66a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiMailOpen;
