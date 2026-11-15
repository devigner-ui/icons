import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiMagic = forwardRef<SVGSVGElement, IconProps>(function IconAiMagic(
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
            d="M10 6c.68 4.95 2.55 6.82 7.5 7.5-4.95.68-6.82 2.55-7.5 7.5-.68-4.95-2.55-6.82-7.5-7.5 4.95-.68 6.82-2.55 7.5-7.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.2 10a.8.8 0 1 0 1.6 0 .8.8 0 0 0-1.6 0zm-.64-6.7h-.06a1.2 1.2 0 1 0 1.07 1.75"
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
            d="M10 6c.68 4.95 2.55 6.82 7.5 7.5-4.95.68-6.82 2.55-7.5 7.5-.68-4.95-2.55-6.82-7.5-7.5 4.95-.68 6.82-2.55 7.5-7.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.3 4.5a1.2 1.2 0 1 0 2.4 0 1.2 1.2 0 1 0-2.4 0Zm1.9 5.5a.8.8 0 1 0 1.6 0 .8.8 0 1 0-1.6 0Z"
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
            d="M18.5 2.55c.49 0 1.07.26 1.38.57s.57.9.57 1.38c0 .49-.26 1.07-.57 1.38s-.9.57-1.38.57-1.07-.26-1.38-.57-.57-.9-.57-1.38.26-1.07.57-1.38.9-.57 1.38-.57zm1.5 5.9c.37 0 .86.22 1.1.45.23.24.45.73.45 1.1s-.21.86-.45 1.1-.73.45-1.1.45-.86-.21-1.1-.45a1.8 1.8 0 0 1-.45-1.1c0-.37.22-.86.45-1.1s.73-.45 1.1-.45z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M10.4 5.6c.34 2.54.96 4.2 2.13 5.37s2.83 1.8 5.37 2.13a.4.4 0 0 1 0 .8c-2.54.34-4.2.96-5.37 2.13s-1.8 2.83-2.13 5.37a.4.4 0 0 1-.8 0c-.34-2.54-.96-4.2-2.13-5.37s-2.83-1.8-5.37-2.13a.4.4 0 0 1 0-.8c2.54-.34 4.2-.96 5.37-2.13S9.27 8.14 9.6 5.6a.4.4 0 0 1 .8 0z"
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
            d="M17.12 3.12c-.31.31-.57.9-.57 1.38 0 .49.26 1.07.57 1.38s.9.57 1.38.57c.49 0 1.07-.26 1.38-.57s.57-.9.57-1.38-.26-1.07-.57-1.38-.9-.57-1.38-.57-1.07.26-1.38.57zM18.9 8.9c-.23.24-.45.73-.45 1.1s.22.86.45 1.1.73.45 1.1.45.86-.21 1.1-.45c.23-.24.45-.73.45-1.1s-.21-.86-.45-1.1a1.8 1.8 0 0 0-1.1-.45c-.37 0-.86.22-1.1.45zM10 5.25a.4.4 0 0 0-.4.35c-.34 2.54-.96 4.2-2.13 5.37s-2.83 1.8-5.37 2.13a.4.4 0 0 0 0 .8c2.54.34 4.2.96 5.37 2.13s1.8 2.83 2.13 5.37a.4.4 0 0 0 .8 0c.34-2.54.96-4.2 2.13-5.37s2.83-1.8 5.37-2.13a.4.4 0 0 0 0-.8c-2.54-.34-4.2-.96-5.37-2.13s-1.8-2.83-2.13-5.37a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiMagic;
