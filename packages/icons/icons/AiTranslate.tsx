import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiTranslate = forwardRef<SVGSVGElement, IconProps>(function IconAiTranslate(
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
            d="M13.5 10.5h5c1.7 0 3 1.3 3 3v5c0 1.7-1.3 3-3 3h-5c-1.7 0-3-1.3-3-3v-5m-3.67 0H5.5a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H9.23"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.8 10.5V7.2a2.2 2.2 0 0 1 4.4 0v3.3M5.8 8.19h4.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 13.7c.2 1.52.78 2.1 2.3 2.3-1.52.2-2.1.78-2.3 2.3-.2-1.52-.78-2.1-2.3-2.3 1.52-.2 2.1-.78 2.3-2.3Z"
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
            d="M5.5 2.5h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3Zm8 8h5c1.7 0 3 1.3 3 3v5c0 1.7-1.3 3-3 3h-5c-1.7 0-3-1.3-3-3v-5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.8 10.5V7.2a2.2 2.2 0 0 1 4.4 0v3.3M5.8 8.19h4.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 13.7c.2 1.52.78 2.1 2.3 2.3-1.52.2-2.1.78-2.3 2.3-.2-1.52-.78-2.1-2.3-2.3 1.52-.2 2.1-.78 2.3-2.3Z"
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
            d="M5.5 1.75h5a4 4 0 0 1 2.65 1.1 4 4 0 0 1 1.1 2.65v4.25h3.21c1.08 0 2.12-.02 3.07.57a3.7 3.7 0 0 1 1.49 1.85c.3.85.23 1.75.23 2.64v2.64c0 .5.03 1.02-.03 1.53a3.7 3.7 0 0 1-3.24 3.24c-.5.06-1.03.03-1.53.03H14.8c-.88 0-1.8.08-2.64-.23a3.7 3.7 0 0 1-1.84-1.49c-.6-.95-.58-1.99-.58-3.07v-3.21H5.5a4 4 0 0 1-2.65-1.1 4 4 0 0 1-1.1-2.65v-5a4 4 0 0 1 1.1-2.65 4 4 0 0 1 2.65-1.1zm7.65 11.4c-.47.48-1.17.84-1.9 1v3.19c0 .72-.1 1.5.22 2.16q.13.28.34.52c.85.95 2.2.73 3.36.73h2.52c.93 0 1.84.02 2.5-.74.68-.76.56-1.75.56-2.68v-2.76c0-.5.05-1.04-.04-1.54a2.2 2.2 0 0 0-1.55-1.69c-.65-.18-1.4-.09-2.06-.09h-2.95a4 4 0 0 1-1 1.9zM3.91 3.91c-.45.45-.7.92-.66 1.59v5a2 2 0 0 0 .66 1.6 2 2 0 0 0 1.59.65h5a2 2 0 0 0 1.6-.66 2 2 0 0 0 .65-1.59v-5a2 2 0 0 0-.66-1.6 2 2 0 0 0-1.59-.65h-5a2 2 0 0 0-1.6.66z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M5.05 10.5V7.99c0-.84-.01-1.63.46-2.37a2.95 2.95 0 0 1 5.2.43c.27.62.24 1.28.24 1.94v2.5a.75.75 0 0 1-1.5 0V8.95h-2.9v1.56a.75.75 0 0 1-1.5 0zm4.34-3.72c-.36-1.2-2.04-1.38-2.66-.29-.16.3-.19.62-.19.95h2.93q0-.35-.08-.66z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M16.4 13.3c.1.83.29 1.3.64 1.66s.83.54 1.66.64a.4.4 0 0 1 0 .8c-.83.1-1.3.29-1.66.64s-.54.83-.64 1.66a.4.4 0 0 1-.8 0c-.1-.83-.29-1.3-.64-1.66s-.83-.54-1.66-.64a.4.4 0 0 1 0-.8c.83-.1 1.3-.29 1.66-.64s.54-.83.64-1.66a.4.4 0 0 1 .8 0z"
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
            d="M5.5 1.75h5a4 4 0 0 1 2.65 1.1 4 4 0 0 1 1.1 2.65v4.25h3.21c1.08 0 2.12-.02 3.07.57a3.7 3.7 0 0 1 1.49 1.85c.3.85.23 1.75.23 2.64v2.64c0 .5.03 1.02-.03 1.53a3.7 3.7 0 0 1-3.24 3.24c-.5.06-1.03.03-1.53.03H14.8c-.88 0-1.8.08-2.64-.23a3.7 3.7 0 0 1-1.84-1.49c-.6-.95-.58-1.99-.58-3.07v-3.21H5.5a4 4 0 0 1-2.65-1.1 4 4 0 0 1-1.1-2.65v-5a4 4 0 0 1 1.1-2.65 4 4 0 0 1 2.65-1.1zm7.65 11.4c-.47.48-1.17.84-1.9 1v3.19c0 .72-.1 1.5.22 2.16q.13.28.34.52c.85.95 2.2.73 3.36.73h2.52c.93 0 1.84.02 2.5-.74.68-.76.56-1.75.56-2.68v-2.76c0-.5.05-1.04-.04-1.54a2.2 2.2 0 0 0-1.55-1.69c-.65-.18-1.4-.09-2.06-.09h-2.95a4 4 0 0 1-1 1.9zM3.91 3.91c-.45.45-.7.92-.66 1.59v5a2 2 0 0 0 .66 1.6 2 2 0 0 0 1.59.65h5a2 2 0 0 0 1.6-.66 2 2 0 0 0 .65-1.59v-5a2 2 0 0 0-.66-1.6 2 2 0 0 0-1.59-.65h-5a2 2 0 0 0-1.6.66zm1.14 6.59V7.99c0-.84-.01-1.63.46-2.37a2.95 2.95 0 0 1 5.2.43c.27.62.24 1.28.24 1.94v2.5a.75.75 0 0 1-1.5 0V8.95h-2.9v1.56a.75.75 0 0 1-1.5 0zm4.34-3.72c-.36-1.2-2.04-1.38-2.66-.29-.16.3-.19.62-.19.95h2.93q0-.35-.08-.66zm7 6.52c.11.83.3 1.3.65 1.66s.83.54 1.66.64a.4.4 0 0 1 0 .8c-.83.1-1.3.29-1.66.64s-.54.83-.64 1.66a.4.4 0 0 1-.8 0c-.1-.83-.29-1.3-.64-1.66s-.83-.54-1.66-.64a.4.4 0 0 1 0-.8c.83-.1 1.3-.29 1.66-.64s.54-.83.64-1.66a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiTranslate;
