import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSiri = forwardRef<SVGSVGElement, IconProps>(function IconSiri(
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
            d="M17.59 19.68A9.49 9.49 0 0 0 12 2.5a9.5 9.5 0 1 0 3.5 18.34"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m12.03 13.5-.13.1c-.74.6-1.46 1.43-2.3 1.9-.8.45-1.7.93-2.6.9-1-.03-2.38-.56-3.11-1.29A5 5 0 0 1 2.6 12a5 5 0 0 1 1.29-3.11A5.2 5.2 0 0 1 7 7.6c.9-.03 1.8.45 2.6.9.84.47 1.56 1.3 2.3 1.9.69.56 1.32 1.07 2 1.6.69.54 1.34 1.12 2.1 1.6.8.5 1.78 1.27 2.6 1.3.72.02 1.57-.37 2.05-.85s.85-1.37.85-2.05-.37-1.57-.85-2.05a3 3 0 0 0-2.05-.85c-.82.03-1.8.8-2.6 1.3l-.2.13"
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
            d="M2.5 12a9.5 9.5 0 1 0 19 0 9.5 9.5 0 1 0-19 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m12.03 13.5-.13.1c-.74.6-1.46 1.43-2.3 1.9-.8.45-1.7.93-2.6.9-1-.03-2.38-.56-3.11-1.29A5 5 0 0 1 2.6 12a5 5 0 0 1 1.29-3.11A5.2 5.2 0 0 1 7 7.6c.9-.03 1.8.45 2.6.9.84.47 1.56 1.3 2.3 1.9.69.56 1.32 1.07 2 1.6.69.54 1.34 1.12 2.1 1.6.8.5 1.78 1.27 2.6 1.3.72.02 1.57-.37 2.05-.85s.85-1.37.85-2.05-.37-1.57-.85-2.05a3 3 0 0 0-2.05-.85c-.82.03-1.8.8-2.6 1.3l-.2.13"
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
            d="M12 1.75c2.78 0 5.43 1.19 7.25 3 1.81 1.82 3 4.47 3 7.25s-1.19 5.43-3 7.25c-1.82 1.81-4.47 3-7.25 3s-5.43-1.19-7.25-3c-1.81-1.82-3-4.47-3-7.25s1.19-5.43 3-7.25c1.82-1.81 4.47-3 7.25-3z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.5 14.08c-.66.53-1.24 1.16-1.92 1.67-1.33 1-2.98 1.66-4.64 1.25a5.4 5.4 0 0 1-2.76-1.55 5.5 5.5 0 0 1-1.33-3.3 5.2 5.2 0 0 1 2-4.2q.6-.45 1.32-.7a6 6 0 0 1 1.75-.4c1.37-.06 2.84.73 3.88 1.57.5.4.95.87 1.44 1.28.97.83 1.98 1.6 2.97 2.4q1.05.82 2.19 1.51c.36.23.81.54 1.26.54q.43-.02.83-.2a2.2 2.2 0 0 0 1.26-1.91c.03-1.12-.96-2.2-2.1-2.2-.3.01-.6.17-.87.32q-.8.47-1.57 1a.75.75 0 0 1-.83-1.26c1.17-.76 2.42-1.8 3.9-1.49a3.7 3.7 0 0 1 2.97 3.67 4 4 0 0 1-.64 1.96q-.38.6-.97.98-.64.41-1.36.57c-1.35.27-2.43-.55-3.49-1.24-.8-.51-1.52-1.1-2.26-1.69q-1.2-.92-2.36-1.9c-.85-.74-1.59-1.46-2.6-1.97a4 4 0 0 0-1.41-.44 5 5 0 0 0-2.28.7 3.7 3.7 0 0 0-1.53 3.04c.03.83.41 1.74.96 2.37.54.62 1.4.97 2.2 1.13.73.14 1.38-.05 2.05-.38q.59-.29 1.12-.66c.66-.5 1.23-1.11 1.87-1.64a.75.75 0 0 1 .95 1.17z"
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
            d="M12 1.75c2.78 0 5.43 1.19 7.25 3 1.81 1.82 3 4.47 3 7.25s-1.19 5.43-3 7.25c-1.82 1.81-4.47 3-7.25 3s-5.43-1.19-7.25-3c-1.81-1.82-3-4.47-3-7.25s1.19-5.43 3-7.25c1.82-1.81 4.47-3 7.25-3zm.6 11.07a.75.75 0 0 0-1.05-.11c-.84.68-1.54 1.44-2.52 1.94a2.7 2.7 0 0 1-1.71.34 3.4 3.4 0 0 1-1.81-.9c-1.21-1.3-1.08-3.64.51-4.59a4 4 0 0 1 1.77-.54 3 3 0 0 1 1.16.35c.91.45 1.57 1.1 2.33 1.76a39 39 0 0 0 3.96 3.07c.94.6 1.89 1.3 3.07 1.04a3.3 3.3 0 0 0 2.61-3.25c-.02-.7-.3-1.44-.74-1.99q-.36-.44-.85-.72-.53-.31-1.14-.43c-1.27-.21-2.34.67-3.34 1.32a.75.75 0 0 0 .83 1.25q.63-.42 1.27-.81c.23-.13.5-.29.77-.3.92-.01 1.74.88 1.7 1.8a1.8 1.8 0 0 1-1.72 1.7c-.37-.02-.75-.29-1.05-.48q-.98-.6-1.89-1.32c-.83-.68-1.7-1.32-2.5-2.02-1.31-1.12-2.74-2.53-4.61-2.46q-.79.04-1.52.33a5 5 0 0 0-1.24.66 4.6 4.6 0 0 0-1.72 3.68c.04 1.02.48 2.1 1.14 2.87a4.7 4.7 0 0 0 2.45 1.4c1.46.35 2.92-.22 4.09-1.1.58-.44 1.08-.98 1.65-1.44a.75.75 0 0 0 .1-1.05z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconSiri;
