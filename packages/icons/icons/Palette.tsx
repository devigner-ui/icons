import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPalette = forwardRef<SVGSVGElement, IconProps>(function IconPalette(
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
            d="M2 6c0-1.4 0-2.1.27-2.63a2.5 2.5 0 0 1 1.1-1.1C3.9 2 4.6 2 6 2s2.1 0 2.63.27q.73.37 1.1 1.1C10 3.9 10 4.6 10 6v12c0 1.4 0 2.1-.27 2.64a2.5 2.5 0 0 1-1.1 1.09C8.1 22 7.4 22 6 22s-2.1 0-2.63-.27a2.5 2.5 0 0 1-1.1-1.1C2 20.1 2 19.4 2 18z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 19H5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m13.31 4.93-2.14 2.14c-.58.58-.87.87-1.02 1.24-.15.36-.15.77-.15 1.59v9.66l8.97-8.97c1-1 1.49-1.49 1.67-2.06a2.5 2.5 0 0 0 0-1.55c-.18-.57-.68-1.06-1.67-2.05-.99-1-1.48-1.49-2.06-1.67a2.5 2.5 0 0 0-1.54 0c-.57.18-1.07.68-2.06 1.67"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 22h12c1.4 0 2.1 0 2.64-.27a2.5 2.5 0 0 0 1.09-1.1C22 20.1 22 19.4 22 18s0-2.1-.27-2.63a2.5 2.5 0 0 0-1.1-1.1C20.1 14 19.4 14 18 14h-2.5"
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
            d="M7.75 19c0 .41-.34.75-.75.75H5a.75.75 0 0 1 0-1.5h2c.41 0 .75.34.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 18V6c0-1.4 0-2.1-.27-2.63a2.5 2.5 0 0 0-1.1-1.1C8.1 2 7.4 2 6 2s-2.1 0-2.63.27a2.5 2.5 0 0 0-1.1 1.1C2 3.9 2 4.6 2 6v12c0 1.4 0 2.1.27 2.64q.37.72 1.1 1.09C3.9 22 4.6 22 6 22s2.1 0 2.63-.27a2.5 2.5 0 0 0 1.1-1.1C10 20.1 10 19.4 10 18"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.6" : "1"}>
            <path
              d="M10 8.24V18c0 .92 0 1.54-.08 2l3.3-3.3 5.84-6.09c.97-1 1.46-1.5 1.64-2.08a2.5 2.5 0 0 0-.02-1.5C20.5 6.46 20 5.96 19 4.96c-.9-.89-1.35-1.33-1.88-1.52a2.5 2.5 0 0 0-1.35-.08c-.55.12-1.05.5-2.06 1.27l-.71.61z"
              fill="currentColor"
            />
            <path d="M8 21.92" fill="currentColor" />
          </g>
          <path
            d="M15.81 14h2.09c1.4 0 2.1 0 2.63.27q.72.37 1.1 1.1c.27.53.27 1.23.27 2.63s0 2.1-.27 2.64a2.5 2.5 0 0 1-1.1 1.09C20 22 19.3 22 17.9 22H6c.92 0 1.53 0 2-.08q.37-.05.63-.2a2.5 2.5 0 0 0 1.1-1.08q.14-.28.2-.64l3.3-3.3z"
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
            d="M10 6v12c0 1.4 0 2.1-.27 2.64a2.5 2.5 0 0 1-1.1 1.09C8.1 22 7.4 22 6 22s-2.1 0-2.63-.27a2.5 2.5 0 0 1-1.1-1.1C2 20.1 2 19.4 2 18V6c0-1.4 0-2.1.27-2.63a2.5 2.5 0 0 1 1.1-1.1C3.9 2 4.6 2 6 2s2.1 0 2.63.27q.73.37 1.1 1.1C10 3.9 10 4.6 10 6M7 19.75a.75.75 0 0 0 0-1.5H5a.75.75 0 0 0 0 1.5z"
            fill="currentColor"
          />
          <path
            d="m19.06 10.61-5.84 6.1c-.73.76-1.1 1.14-1.4 1.01-.32-.13-.32-.65-.32-1.7V7.76c0-.66.26-1.29.73-1.76l1.05-1.05.43-.33c1-.77 1.51-1.15 2.06-1.27q.69-.15 1.35.08c.53.19.98.63 1.88 1.52 1 1 1.5 1.5 1.68 2.07q.24.75.02 1.5c-.18.58-.67 1.08-1.64 2.08"
            fill="currentColor"
          />
          <path
            d="M12.79 22h5.1c1.4 0 2.11 0 2.64-.27a2.5 2.5 0 0 0 1.1-1.1c.27-.53.27-1.23.27-2.63s0-2.1-.27-2.63a2.5 2.5 0 0 0-1.1-1.1C20 14 19.3 14 17.9 14h-.22l-5.8 5.8q-.37.36-.38.88c0 .71.58 1.32 1.29 1.32"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPalette;
