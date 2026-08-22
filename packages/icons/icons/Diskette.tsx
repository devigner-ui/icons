import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDiskette = forwardRef<SVGSVGElement, IconProps>(function IconDiskette(
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
            d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12c0-.34 0-.51-.02-.69a4 4 0 0 0-1.4-2.72l-5.17-5.17a4 4 0 0 0-2.73-1.4C12.52 2 12.35 2 12 2 7.29 2 4.93 2 3.46 3.46 2 4.93 2 7.3 2 12s0 7.07 1.46 8.54"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M17 22v-1c0-1.89 0-2.83-.59-3.41C15.83 17 14.9 17 13 17h-2c-1.89 0-2.83 0-3.41.59C7 18.17 7 19.1 7 21v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 8h6"
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
            d="M20.54 20.54C22 19.07 22 16.7 22 12c0-.34 0-.51-.02-.69a4 4 0 0 0-1.4-2.72l-5.17-5.17a4 4 0 0 0-2.73-1.4C12.52 2 12.35 2 12 2 7.29 2 4.93 2 3.46 3.46 2 4.93 2 7.3 2 12s0 7.07 1.46 8.54a4.8 4.8 0 0 0 2.79 1.24l1.5.15q1.72.09 4.25.07 2.54.02 4.25-.07l1.5-.15c1.22-.2 2.1-.56 2.79-1.24"
            fill="currentColor"
          />
          <path
            d="M7 7.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M13.05 16.25q1.35-.02 2.24.08c.63.08 1.2.27 1.65.73.46.45.65 1.02.73 1.65q.1.89.08 2.24v.83l-1.5.14V21c0-.96 0-1.61-.07-2.1-.06-.46-.17-.65-.3-.78s-.32-.24-.79-.3c-.48-.07-1.13-.07-2.09-.07h-2c-.96 0-1.61 0-2.1.07-.46.06-.65.17-.78.3s-.24.32-.3.79c-.07.48-.07 1.13-.07 2.09v.93l-1.5-.15v-.83c0-.9 0-1.65.08-2.24.08-.63.27-1.2.73-1.65a2.7 2.7 0 0 1 1.65-.73q.89-.1 2.24-.08z"
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
            d="M20.54 20.54C22 19.07 22 16.7 22 12c0-.34 0-.51-.02-.69a4 4 0 0 0-1.4-2.72l-5.17-5.17a4 4 0 0 0-2.73-1.4C12.52 2 12.35 2 12 2 7.29 2 4.93 2 3.46 3.46 2 4.93 2 7.3 2 12s0 7.07 1.46 8.54a4.8 4.8 0 0 0 2.79 1.24v-.83c0-.9 0-1.65.08-2.24.08-.63.27-1.2.73-1.65a2.7 2.7 0 0 1 1.65-.73q.89-.1 2.24-.08h2.1q1.35-.02 2.24.08c.63.08 1.2.27 1.65.73.46.45.65 1.02.73 1.65q.1.89.08 2.24v.83c1.22-.2 2.1-.56 2.79-1.24M6.25 8c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 8"
            fill="currentColor"
          />
          <path
            d="M16.18 18.9c.07.49.07 1.14.07 2.1v.93q-1.72.09-4.25.07-2.54.02-4.25-.07V21c0-.96 0-1.61.07-2.1.06-.46.17-.65.3-.78s.32-.24.79-.3c.48-.07 1.13-.07 2.09-.07h2c.96 0 1.61 0 2.1.07.46.06.65.17.78.3s.24.32.3.79"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDiskette;
