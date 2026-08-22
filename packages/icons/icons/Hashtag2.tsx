import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHashtag2 = forwardRef<SVGSVGElement, IconProps>(function IconHashtag2(
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
            d="m10.67 3-2 18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m16.67 3-2 18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.17 9h18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.17 15h18"
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
            d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
            fill="currentColor"
          />
          <path
            d="M19.49 10.58c.4 0 .73-.33.73-.73s-.33-.73-.73-.73h-3.61l.39-3.5a.74.74 0 0 0-.65-.81.74.74 0 0 0-.81.65l-.41 3.66h-2.83l.39-3.5a.74.74 0 0 0-.65-.81.74.74 0 0 0-.81.65l-.4 3.66H6.57c-.4 0-.73.33-.73.73s.33.73.73.73h3.37l-.32 2.85H5.85c-.4 0-.73.33-.73.73s.33.73.73.73h3.61l-.39 3.5c-.04.4.24.76.65.81h.08c.37 0 .68-.28.73-.65l.41-3.66h2.84l-.39 3.5c-.04.4.24.76.65.81h.08c.37 0 .68-.28.73-.65l.41-3.66h3.53c.4 0 .73-.33.73-.73s-.33-.73-.73-.73h-3.37l.32-2.85zm-5.56 2.84h-2.84l.32-2.85h2.84z"
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
          <path d="M11.09 13.42h2.84l.32-2.84h-2.84z" fill="currentColor" />
          <path
            d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m2.63 8.58h-3.77l-.32 2.85h3.37c.4 0 .73.33.73.73s-.33.73-.73.73h-3.53l-.41 3.66a.74.74 0 0 1-.73.65h-.08a.74.74 0 0 1-.65-.81l.39-3.5h-2.84l-.41 3.66a.74.74 0 0 1-.73.65H9.7a.74.74 0 0 1-.65-.81l.39-3.5H5.85a.73.73 0 0 1-.73-.73c0-.4.33-.73.73-.73h3.77l.32-2.85H6.57a.73.73 0 0 1-.73-.73c0-.4.33-.73.73-.73h3.53l.41-3.66c.04-.4.41-.69.81-.65s.69.41.65.81l-.39 3.5h2.84l.41-3.66c.05-.4.41-.69.81-.65s.69.41.65.81l-.39 3.5h3.61c.4 0 .73.33.73.73s-.35.73-.75.73"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHashtag2;
