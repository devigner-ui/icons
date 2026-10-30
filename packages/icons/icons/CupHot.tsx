import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCupHot = forwardRef<SVGSVGElement, IconProps>(function IconCupHot(
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
            d="M2.96 16.4c.17 2.65.26 3.98 1.13 4.8.86.8 2.2.8 4.85.8h.78c2.66 0 3.99 0 4.85-.8.87-.82.96-2.15 1.13-4.8l.35-5.13c.13-2 .2-3-.4-3.64-.59-.63-1.6-.63-3.6-.63H6.61c-2 0-3.01 0-3.6.63-.6.64-.53 1.64-.4 3.64l.06.86"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M16.33 17h1a4 4 0 0 0 0-8h-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M9.33 18.75a.75.75 0 0 0 0-1.5zm3.5-1.5a.75.75 0 0 0 0 1.5zm-3.5 0h-6v1.5h6zm6 0h-2.5v1.5h2.5z"
            fill="currentColor"
          />
          <path
            d="m5.38 5.06.41-.57a.7.7 0 0 0-.16-1 .7.7 0 0 1-.17-.98l.41-.57m7.51 3.12.41-.57a.7.7 0 0 0-.16-1 .7.7 0 0 1-.17-.98l.41-.57M9.38 5.06l.41-.57a.7.7 0 0 0-.16-1 .7.7 0 0 1-.17-.98l.41-.57"
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
            d="M2.61 11.27c-.13-2-.2-3 .4-3.64C3.6 7 4.61 7 6.61 7h5.44c2 0 3.01 0 3.6.63.6.64.53 1.64.4 3.64l-.35 5.13c-.17 2.65-.26 3.98-1.13 4.8-.86.8-2.2.8-4.85.8h-.79c-2.66 0-3.99 0-4.85-.8-.87-.82-.96-2.15-1.13-4.8z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M16.33 17h1a4 4 0 1 0 0-8h-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.83 18h-13"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="m5.38 5.06.41-.57a.7.7 0 0 0-.16-.99.7.7 0 0 1-.17-.99l.41-.57m7.51 3.12.41-.57a.7.7 0 0 0-.16-.99.7.7 0 0 1-.17-.99l.41-.57"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m9.38 5.06.41-.57a.7.7 0 0 0-.16-.99.7.7 0 0 1-.17-.99l.41-.57"
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
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.48 1.73c.33.24.41.7.17 1.04l-.38.54c.62.48.76 1.37.3 2.01l-.4.58a.75.75 0 0 1-1.23-.87l.39-.55a1.46 1.46 0 0 1-.3-2l.4-.58a.75.75 0 0 1 1.05-.17m4 0c.33.24.41.7.17 1.04l-.38.54c.62.48.76 1.37.3 2.01l-.4.58a.75.75 0 0 1-1.23-.87l.39-.55a1.46 1.46 0 0 1-.3-2l.4-.58a.75.75 0 0 1 1.05-.17m4 0c.33.24.41.7.17 1.04l-.38.54c.62.48.76 1.37.3 2.01l-.4.58a.75.75 0 0 1-1.23-.87l.39-.55a1.46 1.46 0 0 1-.3-2l.4-.58a.75.75 0 0 1 1.05-.17"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.11 22.4h.78c2.66 0 3.99 0 4.85-.8.67-.64.88-1.57 1.02-3.2H3.24c.14 1.63.35 2.56 1.02 3.2.86.8 2.2.8 4.85.8"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.78 11.67c-.13-2-.2-3 .4-3.64.59-.63 1.6-.63 3.6-.63h5.44c2 0 3.01 0 3.6.63q.25.26.35.62h.33a4.75 4.75 0 1 1 0 9.5h-.72l-.02.25H3.24l-.11-1.6zm13.1 4.98h.62a3.25 3.25 0 0 0 0-6.5h-.2l-.08 1.52z"
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
            d="M2.78 11.67c-.13-2-.2-3 .4-3.64.59-.63 1.6-.63 3.6-.63h5.44c2 0 3.01 0 3.6.63q.25.26.35.62h.33c2.53 0 4.75 1.81 4.75 4.25s-2.22 4.25-4.75 4.25h-.65l-.03.5H3.18l-.05-.85zm13.17 3.98h.55c1.9 0 3.25-1.32 3.25-2.75s-1.36-2.75-3.25-2.75h-.2l-.08 1.52z"
            fill="currentColor"
          />
          <path
            d="M3.32 19.15h12.36c-.14 1.18-.38 1.92-.94 2.44-.86.81-2.2.81-4.85.81H9.1c-2.66 0-3.99 0-4.85-.8-.56-.53-.8-1.27-.94-2.45"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.48 1.73c.33.24.41.7.17 1.04l-.38.54c.62.48.76 1.37.3 2.01l-.4.58a.75.75 0 0 1-1.23-.87l.39-.55a1.46 1.46 0 0 1-.3-2l.4-.58a.75.75 0 0 1 1.05-.17m4 0c.33.24.41.7.17 1.04l-.38.54c.62.48.76 1.37.3 2.01l-.4.58a.75.75 0 0 1-1.23-.87l.39-.55a1.46 1.46 0 0 1-.3-2l.4-.58a.75.75 0 0 1 1.05-.17m4 0c.33.24.41.7.17 1.04l-.38.54c.62.48.76 1.37.3 2.01l-.4.58a.75.75 0 0 1-1.23-.87l.39-.55a1.46 1.46 0 0 1-.3-2l.4-.58a.75.75 0 0 1 1.05-.17"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCupHot;
