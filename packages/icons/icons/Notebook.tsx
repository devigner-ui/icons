import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconNotebook = forwardRef<SVGSVGElement, IconProps>(function IconNotebook(
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
            d="M19.65 15.54H4.35m15.3 0V8c0-1.89 0-2.83-.59-3.41C18.48 4 17.53 4 15.65 4h-7.3c-1.88 0-2.83 0-3.41.59-.59.58-.59 1.52-.59 3.41v7.54m15.3 0 1.74 1.8.09.09q.48.54.52 1.28v.42A2 2 0 0 1 19.84 21H3.87A2 2 0 0 1 2 19.13v-.42a2 2 0 0 1 .52-1.28l.09-.1 1.74-1.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.5 18.5h5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.75 6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
            fill="currentColor"
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
            d="M4.94 3.59c-.59.58-.59 1.52-.59 3.41v7h15.3V7c0-1.89 0-2.83-.59-3.41C18.48 3 17.53 3 15.65 3h-7.3c-1.88 0-2.83 0-3.41.59"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m21.4 16.34.08.09q.48.54.52 1.28v.42A2 2 0 0 1 19.84 20H3.87A2 2 0 0 1 2 18.13v-.42a2 2 0 0 1 .52-1.28l.09-.1L3.9 15h16.2zM8.74 18c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M12.75 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
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
            d="m21.4 16.34.08.09q.48.54.52 1.28v.42A2 2 0 0 1 19.84 20H3.87A2 2 0 0 1 2 18.13v-.42a2 2 0 0 1 .6-1.37L3.9 15h16.2zM8.74 18c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.35 7c0-1.89 0-2.83.59-3.41C5.52 3 6.47 3 8.35 3h7.3c1.88 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41v7H4.35zM12 6.5A.75.75 0 1 0 12 5a.75.75 0 0 0 0 1.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconNotebook;
